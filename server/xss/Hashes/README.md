# Hashes

## CSP Policy to protect

Calculate cryptographic hash for each script tag including all whitespaces
without the <script></script>. This hash has to match with any of the hashes
specified in the CSP header. If not, the script block will not be executed by
the browser.

```
script-src 'self' 'unsafe-inline' 'sha256-weNRnK/kXcW75oFEoDPDE7l3p06y3NjXHva+m5ZBYBE=' ;
```

To generate hash follow the command
```
echo -n 'function getOldAddress() { return "1234, Nowhere!"; } window.onload = function () { document.getElementById("name").value = getOldAddress(); }' | \
openssl dgst -sha256 -binary | openssl enc -base64
```

This process is difficult to do for a dynamically generated script block or the
script block contains a dynamic content. But, it is ok for static script blocks.
For dynamic block use nonce.
