var socket = io();
const chatContainer = document.querySelector(".chat-container");
const sendButton = document.querySelector("#send-button");
const currentUser = document.location.pathname === "/user1" ? "user1" : "user2";
const form = document.querySelector("#form");
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
const textBox = document.querySelector("#chat");
socket.on("data", (data) => {
  removeAllChildNodes(chatContainer);
  for (var item of data) {
    if (item.user === currentUser) {
      const child = document.createElement("div");
      child.setAttribute("class", "message user_message");
      const pChild = document.createElement("p");
      pChild.innerHTML = item.content;
      child.appendChild(pChild);
      chatContainer.appendChild(child);
    } else {
      const child = document.createElement("div");
      child.setAttribute("class", "message");
      const pChild = document.createElement("p");
      pChild.innerHTML = item.content;
      child.appendChild(pChild);
      chatContainer.appendChild(child);
    }
  }
  chatContainer.scrollTop = chatContainer.scrollHeight;
});
const US1onlineMsg = "User One is online",
  US2onlineMsg = "User Two is online",
  US1offlineMsg = "User One is offline",
  US2offlineMsg = "User Two is offline";
socket.on("user-information", () => {
  socket.emit("user-info", document.location);
});
socket.on("u1-offline", () => {
  if (document.location.pathname === "/user2") {
    document.querySelector("#status").innerHTML = US1offlineMsg;
  }
});
socket.on("u2-offline", () => {
  if (document.location.pathname === "/user1") {
    document.querySelector("#status").innerHTML = US2offlineMsg;
  }
});
socket.on("u1-online", () => {
  if (document.location.pathname === "/user2") {
    document.querySelector("#status").innerHTML = US1onlineMsg;
  }
});
socket.on("u2-online", () => {
  if (document.location.pathname === "/user1") {
    document.querySelector("#status").innerHTML = US2onlineMsg;
  }
});
socket.on("userTyping", (data) => {
  document.querySelector("#status").innerHTML = data;
  setTimeout(() => {
    document.querySelector("#status").innerHTML = "Online";
  }, 2000);
});
textBox.addEventListener("input", (event) => {
  socket.emit("typing", currentUser);
});
sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  axios
    .post(document.location.pathname, {
      content: document.querySelector("#chat").value,
    })
    .then((res) => {
      if (res.data.message == "OK") {
        socket.emit("message-sent", "Message sent");
        form.reset();
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
