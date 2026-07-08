// For cards animation
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
    const totalAssets = 5236;      //for "maintenance" calculation
    const activeAssets = 4978;
    const maintenanceAssets = totalAssets - activeAssets;

    animateValue("assetCount", totalAssets, 1500);
    animateValue("activeAsset", activeAssets, 1500);
    animateValue("maintenance", maintenanceAssets, 1500);
    animateValue("expireCount", 87, 1500);
};

//card transition -Y means up
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

//features transition
const feature = document.querySelectorAll(".feature");
feature.forEach(feature => {
    feature.addEventListener("mouseenter", () => {
        feature.style.transform = "translateY(-8px)";
        feature.style.transition = ".3s";
    });

    feature.addEventListener("mouseleave", () => {
        feature.style.transform = "translateY(0px)";
    });
});

const step = document.querySelectorAll(".step");
step.forEach(step => {
    step.addEventListener("mouseenter", () => {
        step.style.transform = "translateY(-8px)";
        step.style.transition = ".3s";
    });

    step.addEventListener("mouseleave", () => {
        step.style.transform = "translateY(0px)";
    });
});