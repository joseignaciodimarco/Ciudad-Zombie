/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  //avanzar: avanzar(),
  //frenar(),
  //perderVida(),

  mover: function(movX, movY, tecla){
    switch (tecla){
      case "arriba":
        this.cambiaDimensiones('vertical');
        this.sprite = 'imagenes/auto_rojo_arriba.png';
        this.y += movY;
        break;
      case "abajo":
        this.cambiaDimensiones('vertical');
        this.sprite = 'imagenes/auto_rojo_abajo.png';
        this.y += movY;
        break;
      case "izq":
        this.cambiaDimensiones('horizontal');
        this.sprite = 'imagenes/auto_rojo_izquierda.png';
        this.x += movX;
        break;
      case "der":
        this.cambiaDimensiones('horizontal');
        this.sprite = 'imagenes/auto_rojo_derecha.png';
        this.x += movX;
        break;  
    }
   
    Dibujante.dibujarEntidad(Jugador);
  },

  perderVidas: function(){
    this.vidas--;
    console.log(this.vidas);
  },

  cambiaDimensiones: function(sentido){
    if(sentido == 'vertical'){
      this.ancho = 15;
      this.alto = 30;
    }else{
      this.ancho = 30;
      this.alto = 15;
    }
  }
  
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}
