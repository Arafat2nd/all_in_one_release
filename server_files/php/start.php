<?php
session_start();
if($_SESSION['signed_in'] == 1){
    $data = json_decode(file_get_contents("php://input"), true);
    $uid = $_SESSION['uid'];
    $db = new mysqli('localhost', 'root', '', 'all_in_one');
    $query = "SELECT * FROM `users` WHERE (UID = '$uid')";
    $res = $db->query($query);
    if ($res->num_rows == 0) {
        echo 'dne';
    } else {
        $tempo=$res->fetch_assoc();
        if ($tempo["HAS_INFO"]==1){
            $name=$tempo["NAME"];
            echo "exists,$name";
        }
        else
            echo 'dne';
    }
    $db->close();
}
else
    echo "dne";





