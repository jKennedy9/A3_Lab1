(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var cars = document.querySelectorAll('.data-ref'),
       model = document.querySelector('.modelName'),
       price = document.querySelector('.priceInfo'),
       details = document.querySelector('.modelDetails');

  function fader(cars){
         for (var i = 0; i < cars.length; i++){
           cars[i].classList.remove('focusMini');
           cars[i].classList += ' nonActive';
         }
    }

   function swapper(){
     let objectIndex = carData[this.id];
     model.innerHTML = objectIndex.model;
     price.innerHTML = "$"+objectIndex.price;
     details.innerHTML = objectIndex.desc;
     this.classList.remove('nonActive');
     this.classList += " focusMini";
     console.log(this.classList);
   }



   for (var i = 0; i < cars.length; i++){
     cars[i].addEventListener('click',function(){fader(cars)});
     cars[i].addEventListener('click',swapper,false);
   }



})();
