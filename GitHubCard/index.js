/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

function getUser(url) {
  axios.get(url)
    .then(res => {
      cardCreator(res.data);
      getfollower(res.data.followers_url);
    })
    .catch(error => {
      console.log(error)
    })
}

function getfollower(url) {
  axios.get(url)
    .then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })
}
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const friendsArray = ['josenriagu', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'vunderkind'];

friendsArray.forEach(user => {
  getUser(`https://api.github.com/users/${user}`);
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

          */

function cardCreator(userData) {
  let elmnts = ['div', 'img', 'div', 'h3', 'p', 'p', 'p', 'p', 'p', 'p'].map(el => {
    return document.createElement(el)
  })

  // attach classes
  elmnts[0].classList.add('card');
  elmnts[1].setAttribute('src', userData.avatar_url);
  elmnts[2].classList.add('card-info');
  elmnts[3].classList.add('name');
  elmnts[4].classList.add('username');

  // attach text contents
  elmnts[3].innerText = userData.name;
  elmnts[4].innerText = userData.login;
  elmnts[5].innerText = `Location: ${userData.location}`;
  elmnts[6].innerHTML = `Profile: <a href=${userData.html_url}>${userData.html_url}</a>`;
  elmnts[7].innerText = userData.followers;
  elmnts[8].innerText = userData.following;
  elmnts[9].innerText = `Bio: ${userData.bio}`;

  for (let i = 3; i < 10; i++) {
    elmnts[2].appendChild(elmnts[i])
  }

  for (let i = 1; i < 3; i++) {
    elmnts[0].appendChild(elmnts[i])
  }

  // attach to DOM node
  document.querySelector('.cards').appendChild(elmnts[0])
}


/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
