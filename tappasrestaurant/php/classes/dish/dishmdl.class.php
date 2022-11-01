<?php

include "../dbconn.class.php";

class Dishmdl extends Dbh{

    protected function getDish($type){
        $sql = "SELECT * FROM dish WHERE type = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$type]);

        $result = $stmt->fetchAll();
        return $result;


    }
}