# CSP Demo Application

  __*Note: This is intentionally insecure application to demonstrate XSS and Content
  Security Policy security header. Do not use in production or in public.*__


This is sample locally hosted web application to demonstrate XSS and various
*Content Security Policy* headers. The servers are written using PHP and client
is written using reactjs and redux. 

This shows various headers available in Content-Security-Policy and how they
function as defence in depth mechanism to protect inadvertant XSS exposed in
your code. 

Note that it is always prudent to avoid XSS in your code and fix them.
Content-Security-Policy provides only an extra layer of protection. A vulnerable
code is always a vulnerable one.

Have fun!

## Pre-requisites

You need to have following available to run the application.

* php  > v5.0
* nodejs > v10.10.0
* npm


## Running the demo

Before running, make sure you have the following imaginary domains configured in
/etc/hosts so that the application redirects/loads from this server running on
localhost.

```
# /etc/hosts - add following entry
127.0.0.1       good.com bad.com ugly.com evil.com mycdn.com hijacked.com partner.com
```

Clone this repo and run the following commands

```
$ npm install
$ npm run WDS # to run a development server
```

## Usage

The application listens on following ports when run in development mode. For
demo, it is mostly ok to run built in webserver.

| Port | Description                                                    |
|  --- | ---                                                            |
| 3000 | PHP vulnerable application hosting vulnerable server pages     |
| 4000 | exploit scripts hosted by malicious hackers                    |
| 3030 | development server port by webpack, hosting client application |

The 3030 port proxies the request to 4000 and also hosts the reactjs client
application.  We will be mostly using this application.

To use the application,

* launch the url in browser https://good.com:3030/. It is always good to launch
  this application in private browsing mode or with separate profile itself like
  below in mac os x.
  ```
    $ # on mac os x
    $ open -n -a "Google Chrome" --args --user-data-dir=$HOME/tmp/chrome
  ```

* click through any of the left hand side menu

* select the first exploit string in the "Exploit Payload" dropdown. Mostly the
  first item is a normal url of the vulnerable page.  The other exploits would
  typically contain an exploit payload. When the url is launched, you would
  typically see that a code passed by user through url parameter is executed in
  the current page. Javascript code is typically written as part of html or
  javascript code from server. Exploits make it possible to pass an user
  supplied code and get it executed as part of current page.  If the code is
  passed through URL or through POST parameters, an attacker can craft an
  innocious looking URL or page and make the target user click through it using
  phising or clickjacking. This gets the malicious hacker's code executed in the
  context of user.  This would enable the attacker to steal sensitive
  information in the current session or page as demonstrated in this sample
  application.

* insert any CSP header in the given textarea without "Content-Security-Policy:
  " header key. You can copy paste the exact correct policy for each
  vulnerability from the descriptions besides each page. Activate this csp policy
  by clicking "Update". Launch or refresh the launched page.  Open developer
  console for each browser, you should be seeing message saying something like
  "Content-Security-Policy restricted execution of vulnerable code"

* Keep the developer console open as you would be seeing few log messages and
  errors thrown.
