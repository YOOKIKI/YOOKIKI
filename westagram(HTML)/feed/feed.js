
// const feedComment = document.getElementById("commentBox");
// const txtComment = document.getElementsByClassName("commentInput");
// const btnComment = document.getElementById("commentBtn");


// btnComment.addEventListener('click', () => {
//   if (txtComment.value.length > 0) {
//     let newComment = document.createElement('div');
//     newComment.textContent = `yookiki ${txtComment.value}`;
//     newComment.classList.add('comment-hidden');

//     feedComment.appendChild(newComment);

//     txtComment.value = '';
//     return;
//   }
// })

// const commentInput = document.getElementById("commentInput");
// const commentBtn = document.getElementById("commentBtn");
// const commentViewBox = document.getElementById("commentViewBox");


const commentBtn = document.querySelector("#commentBtn");
const commentInput = document.querySelector("#commentInput");
const commentViewBox = document.querySelector(".commentViewBox");

console.log(commentBtn)
commentInput.addEventListener("keydown", addComment);
commentBtn.addEventListener("click", addComment);

function addComment(e) {
  console.log("click");
  if ((e.keycode === 13) || (e.target === commentBtn)) {
    let username = "yookiki";
    const value = commentInput.value;
    const span = document.createElement("span");
    span.innerText = username;
    span.classList.add("commentUser");
    const li = document.createElement("li");
    const div = document.createElement("div");
    li.innerText = value;
    li.classList.add("commentStyle");
    div.appendChild(span);
    div.appendChild(li);
    div.classList.add("commentFlex");
    commentViewBox.appendChild(div);
    commentInput.value = " ";
  }
}
