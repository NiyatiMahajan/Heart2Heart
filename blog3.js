// Handle review form submission
document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const review = document.getElementById("review").value;
    const image = document.getElementById("image").files[0];

    // Validate form
    if (name && review) {
        // Create a new review section dynamically
        const newReview = document.createElement("div");
        newReview.classList.add("review");

        const newReviewImg = document.createElement("div");
        newReviewImg.classList.add("review-img");
        const imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(image);  // Show the uploaded image
        newReviewImg.appendChild(imgElement);

        const newReviewContent = document.createElement("div");
        newReviewContent.classList.add("review-content");
        const newReviewTitle = document.createElement("h2");
        newReviewTitle.textContent = name;
        const newReviewText = document.createElement("p");
        newReviewText.textContent = review;
        newReviewContent.appendChild(newReviewTitle);
        newReviewContent.appendChild(newReviewText);

        newReview.appendChild(newReviewImg);
        newReview.appendChild(newReviewContent);

        // Append the new review to the review section
        document.querySelector(".reviews").appendChild(newReview);

        // Clear the form
        document.getElementById("review-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
