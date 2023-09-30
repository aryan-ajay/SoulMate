let likeCount = 0; // Initial like count

document.querySelectorAll(".user_likes").forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    const likesCounts = document.querySelector(".likes_counts");
    likesCounts.style.display =
      likesCounts.style.display === "none" || likesCounts.style.display === ""
        ? "flex"
        : "none";

    if (likesCounts.style.display === "flex") {
      likeCount += 1;
    } else {
      likeCount -= 1;
    }

    document.getElementById("likeCount").textContent = likeCount;
  });
});

// comment area ******************************************************

function togglePostButton() {
  const commentInput = document.getElementById("commentInput").value.trim();
  const postButton = document.getElementById("postButton");

  if (commentInput !== "") {
    postButton.style.display = "block"; // Show the button if there's input
  } else {
    postButton.style.display = "none"; // Hide the button if input is empty
  }
}

function addCommentOnEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default behavior of the Enter key
    addComment(); 
  }
}

function addComment() {
  const commentInput = document.getElementById("commentInput").value.trim();
  if (commentInput !== "") {
    const commentContainer = document.getElementById("commentContainer");
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `
        <span class="comment-text">${commentInput}</span>
      `;
    commentContainer.appendChild(newComment);
    document.getElementById("commentInput").value = "";
    document.getElementById("postButton").style.display = "none"; // Hide the button after posting comment

    // Check if the comment container is full and show "Show more" button
    if (commentContainer.scrollHeight > 200) {
      const showMoreButton = document.getElementById("showMoreButton");
      showMoreButton.style.display = "block";
    }
  }
}

function showMoreComments() {
  const commentContainer = document.getElementById("commentContainer");
  commentContainer.style.maxHeight = "none"; // Remove max height to show all comments
  const showMoreButton = document.getElementById("showMoreButton");
  showMoreButton.style.display = "none"; // Hide the "Show more" button
}
