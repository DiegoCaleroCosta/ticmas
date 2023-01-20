fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {const UserData = data.results[0];
    $('#photo').attr('src', UserData.picture.large);
    $('#name').text(`${UserData.name.first} ${UserData.name.last}`);
    $('#email').text(`E-mail: ${UserData.email}`);
    $('#phone').text(`Phone: ${UserData.phone}`);
    $('#address').text(`${UserData.location.city} ${UserData.location.state}, ${UserData.location.country}`);

    console.log(UserData);

});



