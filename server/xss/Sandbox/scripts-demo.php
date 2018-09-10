<?php include_once "../../common.php"; ?>
<?php include_once "csp_header.php"; ?>
<!DOCTYPE html>
<html>
    <head>
        <script src="/server/js/jquery-3.3.1.min.js"></script>
    </head>
    <body>
        <?php echo $_GET["menu"] ?>
        <a href='http://hijacked.com:4000/'>Dead link to hijacked domain</a>
        <script src="/server/xss/Sandbox/vul.js"></script>
    </body>
</html>
