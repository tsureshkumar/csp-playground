<?php

$nonce = base64_encode(random_bytes(16));
$cspheader = str_replace("\$nonce", $nonce, $csp_header_content);
header($cspheader);

?>

