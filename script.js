//Para el proyecto utilizo jquery

///////////////////////////////////////////////
//Obtengo datos random y los utilizo para el CV
///////////////////////////////////////////////
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {const UserData = data.results[0];
    $('#photo').attr('src', UserData.picture.large);
    $('#name').text(`${UserData.name.first} ${UserData.name.last}`);
    $('#email').text(`E-mail: ${UserData.email}`);
    $('#phone').text(`Phone: ${UserData.phone}`);
    $('#cell').text(`Cell: ${UserData.cell}`);
    $('#address').text(`${UserData.location.city}, ${UserData.location.state}, ${UserData.location.country}`);
});


///////////////////////////////////////////////
//Configuro el comportamiento de los botones
///////////////////////////////////////////////
$('.button_E').click(() => {
    $('.Education').toggle("fast","linear",() => {
      if($('.Education').css('display') =='none'){
        $('.button_E').text(`+`)  
      }else{
        $('.button_E').text(`-`)  
      }
      });
  });

$('.button_W').click(() => {
  $('.Works').toggle("fast","linear",() => {
  if($('.Works').css('display') =='none'){
    $('.button_W').text(`+`)  
  }else{
    $('.button_W').text(`-`)  
  }
  });
});
  
$('.button_S').click(() => {
  $('.Skills').toggle("fast","linear",() => {
    if($('.Skills').css('display') =='none'){
      $('.button_S').text(`+`)  
    }else{
      $('.button_S').text(`-`)  
    }
    });
  });
