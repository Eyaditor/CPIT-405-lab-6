const initialLikes = 100;
const initialDisLikes = 20;

let likesC = initialLikes
let disC = initialDisLikes

const likeBtn = document.getElementById("likeBtn")
const DislikesBtn = document.getElementById("dislikeBtn")
const commentBox = document.getElementById("commentBox")
const submitBtn = document.getElementById("submit")
const clearBtn = document.getElementById("clear")
const commentsList = document.getElementById("commentList")


likeBtn.innerText = "👍 " + likesC
DislikesBtn.innerText = "👎 " + disC

likeBtn.addEventListener("click", () => {
    likesC ++;
    likeBtn.innerText = "👍 " + likesC
    setCookie();
})
    
DislikesBtn.addEventListener("click", () => {
    disC ++;
    DislikesBtn.innerText = "👎 " + disC
    setCookie();
})

submitBtn.addEventListener("click", () =>{
      // create a <p>
  const pElem = document.createElement("p");
  pElem.innerText = commentBox.value.trim();
  commentsList.appendChild(pElem)
  commentBox.value = ""
  setCookie();
});

clearBtn.addEventListener("click", () =>{
    commentBox.value = "";
    document.cookie = "voted=true; path=/; expires=" + new Date(Date.now() - 1).toUTCString();
})

function setCookie() {
    // Set a cookie that expires in a minute from now
    const expireOn = new Date(Date.now() + 1 * 60 * 1000);
    const cookieString = "voted=true; path=/; expires=" + expireOn.toUTCString();
    document.cookie = cookieString;
  }
  
window.onload = function () {
    if (document.cookie && document.cookie.indexOf("voted") > -1) {
      console.log("cookie exists");
      // disable all buttons
      likeBtn.disabled = true;
      DislikesBtn.disabled = true;
      submitBtn.disabled = true;
    }
  };
  