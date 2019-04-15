<?php 
    if(!empty($_POST['range'])) {
        if($_POST['range'] == 'all') {
            $db = @new MySQLi('localhost', 'root', 'ajax');
            if(json_encode([false, $db->connect_error]));
        }
        $sql = 'SELECT `car_id`, `brand`, `model` FROM `car` WHERE `brand` = `Ferrari`' ;

        $result->query($SQL);
        if($result) {
            if ($result->num_rows == 0) {
                echo json_encode([false, 'Sorry no matching row...']);
            } else {
                while($result->fetch_assoc()) {
                    $all_rows[] = $each_row;
                }
                echo json_encode([true, $all_rows]);
            }
            $result->free()''
        } else {
            echo json_encode([false, 'Sorry SQL error...']);
        }
        $db->close();
    }
?>