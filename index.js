const shareButton = document.getElementById("shareButton");
const shareButtonSvg = document.getElementById("shareButtonSvg");
const shareMore = document.getElementById("shareMore");
const articleProfile = document.getElementById("articleProfile");
const articleFooter = document.getElementById("articleFooter");
let showShareMore = false;

shareButton.addEventListener("click", function(e){
    if(!showShareMore){
        showShareMore = true;
        shareMore.style.display = "flex";
        shareButton.style.background = "hsl(212, 23%, 69%)";
        shareButtonSvg.style.fill = "#ffffff";
        articleProfile.classList.add("mobile-disabled");
        articleFooter.classList.add("mobile-change");
    } else {
        showShareMore = false;
        shareMore.style.display = "none";
        shareButton.style.background = "hsl(210, 46%, 95%)";
        shareButtonSvg.style.fill = "#6E8098";
        articleProfile.classList.remove("mobile-disabled");
        articleFooter.classList.remove("mobile-change");
    }
});