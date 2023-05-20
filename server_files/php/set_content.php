<?php

session_start();
$doc=$_SESSION["current_doc"] ;
$data = json_decode(file_get_contents("php://input"), true);
$content = $data['content'];
$db = new mysqli('localhost', 'root', '', 'all_in_one');
$query = "UPDATE `documents` SET CONTENT='$content'   WHERE (`id`='$doc')";
$db->query($query);
$db->commit();
$db->close();