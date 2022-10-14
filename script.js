const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = function () {
    navigation.classList.toggle('active');
}
let scrollTopBtn = document.getElementById("scroll-top");
let header = document.querySelector("header");
window.onscroll = () => {
    /* Sticky Header */
    let pos = document.documentElement.scrollTop;
    if (pos > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    /* Scroll Top Button */
    if (pos > 200) {
        scrollTopBtn.style.display = "grid";
    } else {
        scrollTopBtn.style.display = "none";
    }

    scrollTopBtn.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
};