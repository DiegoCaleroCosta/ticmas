const photo = document.getElementById('photo'); 

fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {const UserData = data.results[0];
    photo.src = UserData.picture.large;
    console.log(UserData);


});

