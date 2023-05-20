<?php
session_start();
$user=$_SESSION['uid'];
$db = new mysqli('localhost', 'root', '', 'all_in_one');
$query="SELECT * FROM user_documents WHERE (USER_ID='$user')";
$docs='';

$res=$db->query($query);
while ($row=$res->fetch_assoc()){
    $title=$row['title'];
    $id=$row['doc_id'];
   $docs.="$title~$id,";
}
echo $docs;