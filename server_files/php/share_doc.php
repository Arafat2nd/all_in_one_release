<?php
session_start();
$data = json_decode(file_get_contents("php://input"), true);
$doc=$_SESSION['current_doc'];
$user=$data['email'];
$db = new mysqli('localhost', 'root', '', 'all_in_one');
$query="select title from documents where id='$doc'";
$query1="select uid from users where email='$user'";
$title=$db->query($query)->fetch_assoc()['title'];
$uid=$db->query($query1)->fetch_assoc()['uid'];
$query="INSERT INTO USER_DOCUMENTS (USER_ID,DOC_ID,TITLE) VALUES ('$uid','$doc','$title')";
$db->query($query);
$db->commit();
$db->close();
echo "success";