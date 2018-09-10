<?php include_once "../../common.php"; ?>
<?php include_once "csp_header.php"; ?>
<?php $card = '1234 534 3242'; ?>
<!DOCTYPE html>
<html>
    <body>
        Hi user <?php echo $_GET["user"]?>, your card number is <?php echo $card ?>!!! Thank you, <?php echo $_GET["owner"] ?>.
    </body>
</html>
