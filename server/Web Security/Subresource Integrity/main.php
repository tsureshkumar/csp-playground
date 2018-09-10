<?php include_once "../../common.php"; ?>
<?php include_once "csp_header.php"; ?>

<!DOCTYPE html>
<html>
    <head>
        <script src="http://good.com:3030/server/xss/Subresource%20Integrity/good/jquery-3.3.1.min.js"
            crossorigin="anonymous"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8a="
        ></script>
        <script>
            $(document).ready(function () {
                    console.log("on ready");
                    $('#message').html("jquery loaded successfully");
            });    
        </script>
    </head>
    <body>
            <p id='message'>JQuery not loaded!</p>
    </body>
</html>
