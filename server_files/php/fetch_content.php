<?php
session_start();
$data = json_decode(file_get_contents("php://input"), true);
$uid = $_SESSION['uid'];
$doc = $_SESSION['current_doc'];
$db = new mysqli('localhost', 'root', '', 'all_in_one');
$query = "SELECT CONTENT FROM DOCUMENTS WHERE  ID='$doc'";
$res = $db->query($query);
echo $res->fetch_assoc()['CONTENT'];