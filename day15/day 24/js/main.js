
var home= document.getElementById('home');
var about= document.getElementById('about');
var contact= document.getElementById('contact');
var homeBtn= document.getElementById('homeBtn');
homeBtn.onclick= function () {
    home.style.display = 'block';
    about.style.display = 'none';
    contact.style.display = 'none';
}
var aboutBtn= document.getElementById('aboutBtn');
aboutBtn.onclick= function () {
    home.style.display = 'none';
    about.style.display = 'block';
    contact.style.display = 'none';
}
var contactBtn= document.getElementById('contactBtn');
contactBtn.onclick= function () {
    home.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'block';
}




































// var h1 = document.getElementById('inner-heading');
// var img = document.getElementById('inner-img');
// var p = document.getElementById('inner-paragraph');
// var homeBtn = document.getElementById('homeBtn');
//
// homeBtn.onclick = function () {
//     h1.innerHTML = "This is Home Page heading";
//     img.setAttribute('src','images/img5.jpg')
//     p.innerHTML = "This is About Page paragraph";
// }
//
//
// var aboutBtn = document.getElementById('aboutBtn');
//
// aboutBtn.onclick = function () {
//     h1.innerHTML = "This is About Page heading";
//     img.setAttribute('src','images/img6.jpg')
//     p.innerHTML = "This is About Page paragraph";
// }
//
//
// var contactBtn = document.getElementById('contactBtn');
//
// contactBtn.onclick = function () {
//     h1.innerHTML = "This is contact Page heading";
//     img.setAttribute('src','images/img7.jpg')
//     p.innerHTML = "This is contact Page paragraph";
// }