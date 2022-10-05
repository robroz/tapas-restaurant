<?php

require_once "includes/database.php";
$sql = "SELECT * FROM dish";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
      echo "id: " . $row["id"]. " name: ". $row["name"]. " type: ". $row["type"]."<br>";
    }
}