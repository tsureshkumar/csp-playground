# Strict Dynamic

## CSP Policy to protect

```
script-src 'self' 'unsafe-inline' 'nonce-$nonce';
script-src 'self' 'unsafe-inline' 'nonce-$nonce' 'strict-dynamic';
```

* whitelists, unsafe-inline, unsafe-eval are ignored if strict-dynamic is
  present
* if strict-dynamic is not specified and only nonce is present, the trusted.js
  cannot load any other domain javascript
* with strict-dynamic, trusted.js can load other scripts using createElement.
  But cannot load scripts with document.write script tag. But, it could load
  scripts from vulnerable domains using createElement. Hence, the trusted
  partner has to be free of vulnerabilities.
