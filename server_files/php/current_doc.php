<?php
session_start();
$data = json_decode(file_get_contents("php://input"), true);
$_SESSION['current_doc']=$data["doc_id"];
echo $_SESSION['current_doc'];