let heroe;

function Heroe(clase, energia, poder, critico, velocidad) {
    this.clase = clase;
    this.energia = energia;
    this.poder = poder;
    this.critico = critico;
    this.velocidad = velocidad;
}

let MovimientosHeroe = {
    calcAtaque: function() {
        let HeroeVelocidad = heroe.velocidad;
        let EnemigoVelocidad = enemigo.velocidad;
        let ataqueHeroe = function(){
            let calcPoderBase = heroe.poder * heroe.critico / 1000;
            let poderSuerte = Math.floor(Math.random() * Math.floor(10));
            let calcPoderReal = calcPoderBase + poderSuerte;
            let calcCritico = Math.floor(Math.random() * Math.floor(heroe.critico / 10) / 2) + 1;
            let valoresAtaque = [calcPoderReal, calcCritico];
            return valoresAtaque;
        }
    
        let ataqueEnemigo = function(){
            let calcPoderBase = enemigo.poder * enemigo.critico / 1000;
            let poderSuerte = Math.floor(Math.random() * Math.floor(10));
            let calcPoderReal = calcPoderBase + poderSuerte;
            let calcCritico = Math.floor(Math.random() * Math.floor(enemigo.critico / 10) / 2) + 1;
            let valoresAtaque = [calcPoderReal, calcCritico];
            return valoresAtaque;
        }
    
        let energiaHeroe = document.querySelector(".energia-heroe");
        let energiaEnemigo = document.querySelector(".energia-enemigo");
    
        if (HeroeVelocidad >= EnemigoVelocidad) {
            let valoresAtaqueHeroe = ataqueHeroe();
            let poderTotal = valoresAtaqueHeroe[0] * valoresAtaqueHeroe[1];
            enemigo.energia = enemigo.energia - poderTotal;
            alert("Asestaste " + valoresAtaqueHeroe[0] + " de daño y " + valoresAtaqueHeroe[1] + " ataques criticos. ");
            if (enemigo.energia <= 0) {
                alert("Derrotaste a tu enemigo!")
                energiaHeroe.innerHTML = 'Energia: ' + heroe.energia;
                energiaEnemigo.innerHTML = 'Energia: 0';
            }else{
                energiaEnemigo.innerHTML = 'Energia: ' + enemigo.energia;
                let valoresAtaqueEnemigo = ataqueEnemigo();
                let poderTotal = valoresAtaqueEnemigo[0] * valoresAtaqueEnemigo [1];
                heroe.energia = heroe.energia - poderTotal;
                alert("El enemigo asesto " + valoresAtaqueEnemigo [0] + " de daño y " + valoresAtaqueEnemigo[1] + " ataques criticos. ");
                if (heroe.energia <= 0) {
                    alert ("Te han derrotado!");
                    energiaHeroe.innerHTML = 'Energia: 0';
                    energiaEnemigo.innerHTML = 'Energia: ' + enemigo.energia;
                } else {
                    energiaHeroe.innerHTML = 'Energia: ' + heroe.energia;
                }
            }

        } else  if (EnemigoVelocidad >= HeroeVelocidad) {
            let valoresAtaqueEnemigo = ataqueEnemigo();
            let poderTotal = valoresAtaqueEnemigo[0] * valoresAtaqueEnemigo[1];
            heroe.energia = heroe.energia - poderTotal;
            alert("El enemigo asesto " + valoresAtaqueEnemigo[0] + " de daño y " + valoresAtaqueEnemigo[1] + " ataques criticos. ");
            if (heroe.energia <= 0) {
                alert("te han derrotado!")
                energiaEnemigo.innerHTML = 'Energia: ' + enemigo.energia;
                energiaHeroe.innerHTML = 'Energia: 0';
            }else{
                energiaHeroe.innerHTML = 'Energia: ' + heroe.energia;
                
                let valoresAtaqueHeroe = ataqueHeroe();
                let poderTotal = valoresAtaqueHeroe[0] * valoresAtaqueHeroe [1];
                enemigo.energia = enemigo.energia - poderTotal;
                alert("Asestaste " + valoresAtaqueHeroe [0] + " de daño y " + valoresAtaqueHeroe[1] + " ataques criticos. ");
                if (enemigo.energia <= 0) {
                    alert ("Derrotaste a tu enemigo!");
                    energiaEnemigo.innerHTML = 'Energia: 0';
                    energiaHeroe.innerHTML = 'Energia: ' + heroe.energia;
                } else {
                    energiaEnemigo.innerHTML = 'Energia: ' + enemigo.energia;
                }
            }
        }
    }
}

