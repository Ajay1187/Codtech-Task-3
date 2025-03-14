function sendMessage() {
    const message = document.getElementById("chatInput").value;
    fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    }).then(() => loadMessages());
}

function loadMessages() {
    fetch("/api/chat")
        .then(res => res.json())
        .then(messages => {
            document.getElementById("chatBox").innerHTML = messages.map(m => `<p>${m}</p>`).join("");
        });
}
