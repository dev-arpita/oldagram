const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const firstContainer = document.getElementById("first-container");
firstContainer.innerHTML = `
                <div class="flex user-profile">
                    <img class="profile-img" src="${posts[0].avatar}">
                    <div class="flex-col">
                        <h2 class="user-name">${posts[0].name}</h2>
                        <p class="location">${posts[0].location}</p>
                    </div>
                </div>
                <img class="post" src="${posts[0].post}" alt=""/>
                <div class="flex icons-container">
                    <span class="icon-container">
                        <img src="images/icon-heart.png" class="icon" id="like-icon-one" alt="">
                    </span>
                    <span class="icon-container">
                        <img src="images/icon-comment.png" class="icon" alt="">
                    </span>
                    <span class="icon-container">
                        <img src="images/icon-dm.png" class="icon" alt="">
                    </span>
                </div>
                <p class="likes" id="vangogh-likes">${posts[0].likes} likes</p>

                <p class="comment"><span class="userName">${posts[0].username}</span> ${posts[0].comment}</p>

                `;

const secondContainer = document.getElementById("second-container");
secondContainer.innerHTML = `
                <div class="flex user-profile">
                    <img class="profile-img" src="${posts[1].avatar}">
                    <div class="flex-col">
                        <h2 class="user-name">${posts[1].name}</h2>
                        <p class="location">${posts[1].location}</p>
                    </div>
                </div>
                <img class="post" src="${posts[1].post}" alt=""/>
                <div class="flex icons-container">
                    <span class="icon-container">
                        <img src="images/icon-heart.png" class="icon" id="like-icon-two"  alt="">
                    </span>
                    <span class="icon-container">
                        <img src="images/icon-comment.png" class="icon" alt="">
                    </span>
                    <span class="icon-container">
                        <img src="images/icon-dm.png" class="icon" alt="">
                    </span>
                </div>
                <p class="likes" id="Gustave-likes">${posts[1].likes} likes</p>

                <p class="comment"><span class="userName">${posts[1].username}</span> ${posts[1].comment}</p>

                `;

const thirdContainer = document.getElementById("third-container");

thirdContainer.innerHTML = `
                <div class="flex user-profile">
                    <img class="profile-img" src="${posts[2].avatar}">
                    <div class="flex-col">
                        <h2 class="user-name">${posts[2].name}</h2>
                        <p class="location">${posts[2].location}</p>
                    </div>
                </div>
                <img class="post" src="${posts[2].post}" alt=""/>
                <div class="flex icons-container">
                    <span class="icon-container">
                        <img src="images/icon-heart.png" class="icon" id="like-icon-three" alt="">
                    </span>
                    <span class="icon-container">
                        <img src="images/icon-comment.png" class="icon" alt="">
                    </span>
                    <span class="icon-container">
                        <img src="images/icon-dm.png" class="icon" alt="">
                    </span>
                </div>
                <p class="likes" id="Joseph-likes">${posts[2].likes} likes</p>

                <p class="comment"><span class="userName">${posts[2].username}</span> ${posts[2].comment}</p>

                `;

const vangoghLikes = document.getElementById("vangogh-likes");
const gustaveLikes = document.getElementById("Gustave-likes");
const josephLikes = document.getElementById("Joseph-likes");

const likeIconOne = document.getElementById("like-icon-one");
const likeIconTwo = document.getElementById("like-icon-two");
const likeIconThree = document.getElementById("like-icon-three");


let likes = 0;

function incrementLikes() {
  likes += 1;
  return likes;
}

likeIconOne.addEventListener("dblclick", function () {
  incrementLikes();
  let previousLikes = posts[0].likes;
  let totalLikes = likes + previousLikes;
  vangoghLikes.innerText = `${totalLikes} likes`;
});

likeIconTwo.addEventListener("dblclick", function () {
  incrementLikes();
  let previousLikes = posts[1].likes;
  let totalLikes = likes + previousLikes;
  gustaveLikes.innerText = `${totalLikes} likes`;
});

likeIconThree.addEventListener("dblclick", function () {
  incrementLikes();
  let previousLikes = posts[2].likes;
  let totalLikes = likes + previousLikes;
  josephLikes.innerText = `${totalLikes} likes`;
});
