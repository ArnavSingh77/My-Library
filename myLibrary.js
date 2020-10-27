function bounceOff(object0, object1) {

    if (object0.x - object1.x < object1.width/2 + object0.width/2
      && object1.x - object0.x < object1.width/2 + object0.width/2) {
        object0.velocityX = object0.velocityX * (-1);
        object1.velocityX = object1.velocityX * (-1);
    }
    if (object0.y - object1.y < object1.height/2 + object0.height/2
      && object1.y - object0.y < object1.height/2 + object0.height/2){
        object0.velocityY = object0.velocityY * (-1);
        object1.velocityY = object1.velocityY * (-1);
    }
  
  }


  function isTouching(object0, obect1) {

     if (object0.x - object1.x < object1.width/2 + object0.width/2 
        && object1.x - object0.x < object1.width/2 + object0.width/2 
        && object0.y - object1.y < object1.height/2 + object0.height/2
        && object1.y - object0.y < object1.height/2 + object0.height/2) {

            return true; 

        } else  {

            return false;

        }

    }