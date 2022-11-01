<?php

class Dbh {
    private $host = "localhost";
    private $dbUser = "root";
    private $dbPass = "";
    private $dbName = "flappas";

    protected function connect(){
        $dsn = "mysql:host=". $this->host . ';dbname='. $this->dbName;
        $pdo = new PDO ($dsn,$this->dbUser, $this->dbPass);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    }
}