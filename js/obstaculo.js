/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio hace al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;

  this.quitarVida = function(obstaculo){  
    Jugador.perderVidas(this.potencia);
    console.log('vidas del jugador: ' + Jugador.vidas);
    this.potencia = 0;

  }

  // Implementar el metodo chocar(jugador) para que al chocar con un obstaculo
  // el jugador pierda vidas
}
