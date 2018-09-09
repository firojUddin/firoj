
$('#ia').submit(function () {
    var name = $('#name').val();
    var regex = /^[a-zA-Z ]{8,20}$/;
    if (regex.test(name)){
        $('#nameError').text(' ');
        return true;
    }
    else {
        $('#nameError').text('First name must be 8 to 20 char').css('color','red');
        return false;
    }
    });



//
//     $('#firstName').keyup(function () {
//         $('#res1').html($(this).val());
//         // $('#res3').html($(this).val());
//     });
//     $('#lastName').keyup(function (){
//         $('#res2').html($(this).val());
//         // $('#res3').html($('#res3').html()+" "+$(this).val() );
//     }).blur(function () {
//         var firstName= $('#firstName').val();
//         var lastName= $('#lastName').val();
//         var fullName = firstName+" "+lastName;
//         $('#fullName').val(fullName);
//         $('#res3').html(fullName);
//     });
//
// })