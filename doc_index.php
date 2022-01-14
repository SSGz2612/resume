<?php

    echo "Hello world"

    /* if( isset( $_POST[ "send" ] ) ) {
        $nombre = $_POST[ "name_user" ];
        $password = $_POST[ "password" ];

        if ( $nombre == "Juan" && $password == 1234 ) {
            echo "Puedes acceder";
        } else {
            echo "No puedes acceder";
        }
    
    } */

?>

<?php
    
    class Coche {
        protected $ruedas;
        public $color;
        private $motor;
        
        function __construct(){ // method constructor
            $this -> ruedas = 4;
            $this -> color = "blanco";
            $this -> motor = 1600;
        }

        function get_ruedas() { // no posible change ruedas value
            return $this -> ruedas;
        }

        function get_motor() {
            return $this -> motor;
        }

        function arrancar() {
            echo "estoy arrancando <br>";
        }

        function girar() {
            echo "estoy girando <br>";
        }

        function frenar() {
            echo "estoy frenando <br>";
        }
    }

    class Camion extends Coche {

        function __construct() {
            $this -> ruedas = 8;
            $this -> motor = 5000;
        }
        
    }

?>