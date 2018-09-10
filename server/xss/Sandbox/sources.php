<?php
header('Content-Type: application/json');
echo '[
    {"source": "main.php", "lang": "php"},
    {"source": "scripts-demo.php", "lang": "php"},
    {"source": "evil-vul.js", "lang": "javascript"}
]';

?>
