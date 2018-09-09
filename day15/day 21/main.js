var firstName = document.getElementById('firstName');

alert(firstName);
firstName.onkeyup = function () {
    document.getElementById('fName').innerHTML = firstName.value;
};
var lastName = document.getElementById('lastName');

lastName.onkeyup = function () {
    document.getElementById('lName').innerHTML = lastName.value;
};

lastName.onblur = function () {
    var res = firstName.value +" "+ lastName.value;
    document.getElementById('fullName').innerHTML= res;
};
