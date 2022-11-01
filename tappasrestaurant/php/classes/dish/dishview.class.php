<?php

include "dishmdl.class.php";

class DishView extends Dishmdl{

    public function showDish($type){
        $result = $this->getDish($type);
        echo $result[0]["name"];
    }
}

$dishObj= new DishView();
$dishObj-> showDish("meat_tapas");