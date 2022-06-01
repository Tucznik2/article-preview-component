const SHARE_BUTTON = document.querySelector(".share-to-button");
const TOOLTIP = document.querySelector(".tooltip");
const CARD_FOOTER = document.querySelector(".post-author");
const POST_AUTHOR = document.querySelector(".author-container");
SHARE_BUTTON.addEventListener("click", () => {
  SHARE_BUTTON.classList.toggle("active");
  TOOLTIP.classList.toggle("show");
  let bodyWidth = document.body.clientWidth;
  if (bodyWidth >= 1000) {
    TOOLTIP.classList.toggle("social-active");
  } else {
    CARD_FOOTER.classList.toggle("social-active");
    POST_AUTHOR.classList.toggle("author-disabled");
  }
});
