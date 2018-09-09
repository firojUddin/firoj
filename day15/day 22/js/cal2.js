var butElement = document.getElementById('btn');
function makeSerial() {

    var firstValue =Number( document.getElementById('firstValue').value);

    var lastValue =Number( document.getElementById('lastValue').value);

    var i;

    for (i = firstValue; i <= lastValue; i++){

       if( i != 30 && i!=31){

           document.getElementById('result').innerHTML += i +" ";
       }
    }

}

butElement.onclick = function () {
  makeSerial();

}