document.addEventListener("DOMContentLoaded", () => {
    const mantraSelect = document.getElementById("mantra-select");
    const countDisplay = document.getElementById("count-display");
    const progressBar = document.getElementById("progress-bar");
    const chantButton = document.getElementById("chant-button");
    const resetButton = document.getElementById("reset-button");

    let count = 0;
    let chantingInterval;

    chantButton.addEventListener("click", () => {
        if (!chantingInterval && count < 108) {
            chantingInterval = setInterval(() => {
                if (count < 108) {
                    count++;
                    countDisplay.textContent = `Count: ${count}/108`;
                    progressBar.value = (count / 108) * 100;
                } else {
                    clearInterval(chantingInterval);
                    chantingInterval = null;
                }
            }, 1000);
        }
    });

    resetButton.addEventListener("click", () => {
        clearInterval(chantingInterval);
        chantingInterval = null;
        count = 0;
        countDisplay.textContent = "Count: 0/108";
        progressBar.value = 0;
    });
});
