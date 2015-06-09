<?php
/*****************************/
/***DESARROLLO HIDROCALIDO****/
/*****************************/
require 'connector.php';

if (isset($_REQUEST['metodo'])) {
   $metodo = trim($_REQUEST['metodo']);
}else{
   $metodo = "";
}

if( $metodo == 'obtenerCategorias' ){
  obtenerCategorias();
}else if ($metodo == 'obtenerPistos') {
	if (isset($_REQUEST['idCategoria'])) {
	 $idCategoria = trim($_REQUEST['idCategoria']);
	}else{
	 $idCategoria = "";
	}
   obtenerPistos($idCategoria);
}
function obtenerPistos($idCategoria){
    $sql ="SELECT * FROM categorias AS CA INNER JOIN pistos AS PI ON CA.idCategoria = PI.idCategoria WHERE PI.idCategoria = '$idCategoria' "; 
    try {
        $db = getConnection();
        $stmt = $db->query($sql);  
        $detalle = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo '{"pistos": ' . json_encode($detalle) . '}';
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e-S>getMessage() .'}}'; 
    }
}
function obtenerCategorias(){
    $sql ="SELECT * FROM categorias"; 
    try {
        $db = getConnection();
        $stmt = $db->query($sql);  
        $detalle = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo '{"categorias": ' . json_encode($detalle) . '}';
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}
?>