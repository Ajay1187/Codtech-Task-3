function formatText(command) {
    document.execCommand(command, false, null);
}

document.getElementById("boldBtn").addEventListener("click", () => formatText("bold"));
document.getElementById("italicBtn").addEventListener("click", () => formatText("italic"));
document.getElementById("underlineBtn").addEventListener("click", () => formatText("underline"));
