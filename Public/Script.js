const socket = io();
const editor = document.getElementById("editor");

editor.addEventListener("input", () => {
    socket.emit("updateDocument", editor.value);
});

socket.on("updateDocument", (content) => {
    editor.value = content;
});
