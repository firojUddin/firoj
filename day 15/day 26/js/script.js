$('#h1').click(function () {
    $(this).css({
        'color':'red',
        'background-color': 'gray',
        'font-family': 'cursive',
        'font-size': '20'
    });
});

// $(selector).Action();








var imageArray = ['images/1.jpg','images/2.jpg','images/3.jpg'];
var index = 0;



function changeImage() {
    var image = document.getElementById('image');
    image.setAttribute('src', imageArray[index]);
    index++;
    if(index == imageArray.length){
        index = 0;
    }

}
setInterval(changeImage,2000);
































// function test(){
//
// }
//
//
//
// setInterval(test,5000);
//
//

// setTimeout(test,2000);

















// var btn = document.getElementById('btn');
// btn.onclick = function () {
//     var newReadingElemetn = document.createElement('h2');
//     var content =
// }

























// var newReadingElemetn = document.createElement('h2');
// // newReadingElemetn.innerHTML = "this is a heading created by js";
// var content = document.createTextNode('Hello world');
// newReadingElemetn.appendChild(content);
//
// document.getElementById('container').appendChild(newReadingElemetn);
//
// var newHeadingElement = document.createElement('h2');
// newHeadingElement.innerText = "this a heading";





// var addElement = document.getElementById('res');
// addElement.onclick = function () {
//     var content = document.createTextNode('Hello world');
//     newReadingElemetn.appendChild(content);
//     document.getElementById('container').appendChild(newReadingElemetn);
// }