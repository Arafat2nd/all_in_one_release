<?php
session_start();
$_SESSION['signed_in'] = 1;
$_SESSION["current_doc"]="nope";
$data = json_decode(file_get_contents("php://input"), true);
$uid = $data['uid'];
$email=$data['email'];
$db = new mysqli('localhost', 'root', '', 'all_in_one');
$query = "SELECT * FROM `users` WHERE (UID = '$uid')";
$res = $db->query($query);
if ($res->num_rows == 0) {
    $query = "INSERT INTO `users`(`UID`,`EMAIL`) VALUES ('$uid','$email')";
    $res = $db->query($query);
    $db->commit();
    echo 'success';
} else {
    echo 'fail';
}
$db->close();
$_SESSION['uid'] =$uid;
$_SESSION['email']=$email;



