# Unsafe Eval

## CSP Policy to protect

Avoid unsafe-eval in policy
```
script-src 'self' 'unsafe-inline';
```

Avoid unsafe-inline also if you do not have any inline scripts in your html

