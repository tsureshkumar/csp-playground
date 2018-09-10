<?php
    header('X-XSS-Protection: 0');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: *');
?>
<script>
alert(document.domain)
</script>
