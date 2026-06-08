console.log("Hamburguer Icon cargado correctamente");
(function() {
    const MAIN_OBJ = {
        init: function () {
            this.eventhandler();
        },
        eventhandler: function () {
            document.querySelector(".hamburguer-icon").addEventListener("click", function () {
                document.querySelector(".menu-derecha").classList.toggle("menu-derecha-open");
            });

      }   
    }
    MAIN_OBJ.init();

    }) ();
