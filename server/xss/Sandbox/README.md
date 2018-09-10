# Third Party Script Includes

## CSP Policy to protect
```
sandbox;
sandbox allow-scripts allow-same-origin;
sandbox allow-forms;
```

If a page only has static content and executing scripts and making remote calls
exposes sensitive information, lock down the page with sandbox

```
script-src 'self'; sandbox allow-scripts allow-same-origin allow-modals;
```
this allows same origin scripts, no inline scripts and sandboxes the page.
