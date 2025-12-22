const profile_image = document.querySelector("#profile_image");
const change_image = document.querySelector("#explorer_open");

profile_image.addEventListener("click",(e) => {
    change_image.click();
   

});


profile_image.addEventListener("mouseenter",  () =>{
    profile_image.src = "/tracker-repo/src/assets/images/img_edit.jpg"

});
profile_image.addEventListener("mouseleave" ,() =>{
    profile_image.src="/tracker-repo/src/assets/images/meme_2.webp"

});
