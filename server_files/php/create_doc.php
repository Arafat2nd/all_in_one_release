<?php
session_start();
$data = json_decode(file_get_contents("php://input"), true);
$uid = $_SESSION['uid'];
$title=$data['title'];
$db = new mysqli('localhost', 'root', '', 'all_in_one');
$query = "INSERT INTO DOCUMENTS (`id`, `TITLE`, `CONTENT`) VALUES (NULL, '$title', '')";
$res = $db->query($query);
$db->commit();
$query2="SELECT id FROM DOCUMENTS ORDER BY id DESC LIMIT 1";
$res=$db->query($query2);
$row=$res->fetch_assoc();
$_SESSION['current_doc']=$row['id'];
$doc=$row['id'];
$query="INSERT INTO user_documents (doc_id,user_id,title) VALUES ('$doc','$uid','$title')";
$res = $db->query($query);
$db->commit();
$db->close();
echo "created,".$_SESSION['current_doc'];