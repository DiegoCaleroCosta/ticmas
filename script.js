fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {const UserData = data.results[0];
    $('#photo').attr('src', UserData.picture.large);
    $('#name').text(`${UserData.name.first} ${UserData.name.last}`);
    $('#email').text(`E-mail: ${UserData.email}`);
    $('#phone').text(`Phone: ${UserData.phone}`);
    $('#cell').text(`Cell: ${UserData.cell}`);
    $('#address').text(`${UserData.location.city}, ${UserData.location.state}, ${UserData.location.country}`);

    console.log(UserData);

});

$('.titles_E').click(() => {
    $('.data').hide();
    $('.Education').show();
  });

$('.titles_W').click(() => {
  $('.data').hide();
  $('.Works').show();
});
  
$('.titles_S').click(() => {
  $('.data').hide();
  $('.Skills').show();
  });
