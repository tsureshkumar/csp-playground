# Nonce

## CSP Policy to protect

Each script tag in the page should contain a cryptographically generated nonce.
This nonce should match with the nonce mentioned in the content security policy
header. The nonce should be varying for each invocation of page. 

```
script-src 'self' 'unsafe-inline' 'nonce-$nonce';
```

