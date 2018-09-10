<?php
    header('X-XSS-Protection: 0');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: *');

function secureFilePath($xss) {
    return strlen($xss) === 0 || !( strpos($xss, ".") === true
         || $xss[0] == '/');
}
?>
