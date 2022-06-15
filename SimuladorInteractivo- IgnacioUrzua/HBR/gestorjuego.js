let gestorjuego = {
    iniciarJuego: function(clase) {
        this.resetearHeroe(clase);
        this.preBatalla();
    },
    resetearHeroe: function(clase) {
        switch (clase){
            case "Arquero":
                heroe = new Heroe(clase, 200, 150, 300, 150);
                break;
            case "Bombardero":
                heroe = new Heroe(clase, 150, 300, 150, 150);
                break;
            case "Emboscador":
                heroe = new Heroe(clase, 200, 150, 500, 350);
                break;
            case "Espadachin":
                heroe = new Heroe(clase, 200, 250, 150, 200);
                break;
            case "Mago":
                heroe = new Heroe(clase, 100, 300, 10, 100);
                break;
            case "Tanque":
                heroe = new Heroe(clase, 500, 150, 10, 150);
                break;                                
        }
        let getInterfaz = document.querySelector(".interfaz");
        getInterfaz.innerHTML = '<img src="imagenes/heroes/' + 
        clase.toLowerCase() + '.png"><div><h3>' + clase 
        + '</h3><p class="energia-heroe">Energia: ' + heroe.energia + '</p><p>Poder: ' + heroe.poder +
        '</p><p>Critico: ' + heroe.critico + '</p><p>Velocidad: ' + heroe.velocidad + '</p></div>';
    },         
    preBatalla: function() {
        let getTitulo = document.querySelector(".titulo");
        let getAcciones = document.querySelector(".acciones");
        let getCampoDeBatalla = document.querySelector(".campoDeBatalla");
        getTitulo.innerHTML = '<p>Mision: Enfrentate al enemigo!</p>';
        getAcciones.innerHTML = '<a href= "#" class="btn-prebatalla" onclick="gestorjuego.iniciarBatalla()">Buscar un enemigo!</a>';
        getCampoDeBatalla.style.visibility = "visible";
    },
    iniciarBatalla: function(){
        let getTitulo = document.querySelector(".titulo");
        let getAcciones = document.querySelector(".acciones");
        let getEnemigo = document.querySelector(".enemigo");
        let enemigo00 = new Enemigo("Alien", 500, 100, 0, 150)
        let enemigo01 = new Enemigo("Cerdomagico", 500, 150, 50, 200)
        let enemigoRandom = Math.floor(Math.random() * Math.floor(2));
        switch (enemigoRandom) {
            case 0:
                enemigo = enemigo00;
                break;
            case 1:
                enemigo = enemigo01;
                break; 
        }
        getAcciones.innerHTML = '<a href= "#" class="btn-prebatalla" onclick="MovimientosHeroe.calcAtaque()">Ataque!</a>';
        getEnemigo.innerHTML = '<img src="imagenes/enemigos/' + enemigo.claseEnemigo.toLowerCase() + '.png" alt="' + enemigo.claseEnemigo + 
        '"class="img-enemigo"><div><h3>' + enemigo.claseEnemigo +'</h3><p class="energia-enemigo">Energia: ' + enemigo.energia + 
        '</p><p>Poder: ' + enemigo.poder + '</p><p>Critico: ' + enemigo.critico + '</p><p>Velocidad: ' + enemigo.velocidad + '</p></div>';
    }
}