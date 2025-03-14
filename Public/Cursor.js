const cursorSocket = io();
const editor = document.getElementById("editor");

editor.addEventListener("keyup", () => {
    cursorSocket.emit("cursorMove", { user: sessionStorage.getItem("user"), position: editor.selectionStart });
});

cursorSocket.on("cursorUpdate", (data) => {
    document.getElementById("cursorIndicator").innerHTML = `${data.user} is typing...`;
});
