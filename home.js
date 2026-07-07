function animateValue(id, endValue, duration) {
    const element = document.getElementById(id);
    let start = 0;
    const increment = endValue / (duration / 20);
    const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
            start = endValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(start);
    }, 20);
}

window.onload = () => {
    animateValue("assetCount", 5236, 1500);
    animateValue("qrCount", 4978, 1500);
    animateValue("warrantyCount", 4215, 1500);
    animateValue("expireCount", 87, 1500);
};

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
        card.style.transition = ".3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });
});