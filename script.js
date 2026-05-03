document.addEventListener("DOMContentLoaded", () => {
    const black_screen = document.querySelector("#black-screen");
    const bg_video = document.querySelector("#bg-video");

    black_screen.addEventListener("click", () => { black_screen.style.display = "none"; bg_video.play() })
})