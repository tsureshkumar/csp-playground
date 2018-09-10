<?php include_once "../../common.php"; ?>
<?php 
    header_remove('Access-Control-Allow-Origin');
    header_remove('Access-Control-Allow-Methods');
    header_remove('Access-Control-Allow-Headers');
?>
<html>
    <head>
        <script src="http://good.com:3030/server/js/jquery-3.3.1.min.js"></script>
        <script src="http://hijacked.com:4000/server/xss/Sandbox/vul.js"></script>
    </head>
    <body>
        <?php echo $_GET["menu"] ?>
        <a href='http://hijacked.com:4000/'>Dead link to hijacked domain</a>
        <p id=card></p>
        <script>$.get("/server/xss/Sandbox/card.php", function(r){$('#card').html(r)})</script>
</script>
</body>
</html>
