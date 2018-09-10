<?php
header('Content-Type: application/json');
echo '[
    {"source": "main.php", "lang": "php"},
    {"source": "evil.js", "lang": "js"}
]';

?>
