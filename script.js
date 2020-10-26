/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.speed = function(){
    this.left += 10;
    console.log('ok: ' + this.left);
  }

}

var hero = new Hero('car.jpg', 10, 10, 100);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.speed();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();