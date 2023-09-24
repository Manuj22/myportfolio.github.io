document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".loader-wrapper")
            .classList.add("hide-loader");
    }, 1000);

    const content = document.getElementById("content");
    typeEffect();
});










const typeEffect = () => {
    const typedTextElement = document.getElementById("typedText");
    const cursorElement = document.getElementById("cursor");
    const typingElement = document.getElementById("typingIcon");
    const textToType = "";
    const texts = ["Front End Developer", "Back End Developer", "Full Stack Developer."];
    let textIndex = 0;
    let charIndex = 0;
    let cursorVisible = true;

    function deleteText(charCount, index) {
        if (index >= 0) {
            typedTextElement.textContent = textToType + texts[textIndex].substring(0, index);
            setTimeout(() => deleteText(charCount, index - 1), 100);
        } else {
            charIndex = 0;
            textIndex++;
            if (textIndex < texts.length) {
                typeText();
            } else {
                cursorVisible = false;
                cursorElement.style.display = "none";
            }
        }
    }

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            typedTextElement.textContent = textToType + texts[textIndex].substring(0, charIndex + 1);
            setTimeout(() => typeText(), 100); // Typing speed
            charIndex++;
        } else {
            if (textIndex < 2) {
                setTimeout(() => deleteText(texts[textIndex].length - 1, texts[textIndex].length - 1), 1000); // Delay before deleting
            }
        }
    }

    function toggleCursor() {
        cursorVisible = !cursorVisible;
        typingElement.style.display = "inline";
        cursorElement.style.display = cursorVisible ? "inline" : "none";
        if (textIndex < 2) {
            setTimeout(toggleCursor, 500); // Blinking speed
        } else {
            cursorElement.style.display = "none";
            typingElement.style.display = "none";
        }
    }

    typeText();
    toggleCursor();
}