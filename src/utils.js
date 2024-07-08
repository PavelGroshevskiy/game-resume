export const displayDialogue = (text, onDisplayEnd) => {
    const dialogUI = document.getElementById("textbox-container");
    const dialog = document.getElementById("dialogue");

    dialogUI.style.display = "block";

    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
        if (index < text.length) {
            currentText += text[index];
            dialog.innerHTML = currentText;
            index++;
            return;
        }

        clearInterval(intervalRef);
    }, 5);

    const closeButton = document.getElementById("close-btn");

    const onButtonCloseClick = () => {
        onDisplayEnd();
        dialogUI.style.display = "none";
        dialog.innerHTML = "";
        clearInterval(intervalRef);
        closeButton.removeEventListener("click", onButtonCloseClick);
    };

    closeButton.addEventListener("click", onButtonCloseClick);
};

export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
        k.camScale(k.vec2(1));
    } else {
        k.camScale(k.vec2(1.5));
    }
}
