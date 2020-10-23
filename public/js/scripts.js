const form = document.querySelector("#check");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = document.querySelector("#validate").value;

  const answer = await fetch(e.target.action, {
    method: e.target.method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ validate: data }),
  });

  const finalAnswer = await answer.json();

  const alerts = document.querySelector(".message");
  if (alerts) {
    document.querySelector(".message").remove();
  }

  if (finalAnswer.hasOwnProperty("person")) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = `<p>The profile has been correctly verified! the name of the person is: <strong>${finalAnswer.person.name}</strong></p> `;

    const contenedor = document.querySelector("main");
    contenedor.appendChild(message);

  } else if (finalAnswer.hasOwnProperty("attachments")) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = `<p>The job opportunity has been verified and the status is <strong>${finalAnswer.status}</strong></p> `;

    const contenedor = document.querySelector("main");
    contenedor.appendChild(message);

  } else if(!finalAnswer.hasOwnProperty("person") && !finalAnswer.hasOwnProperty("attachments")) {
    const message = document.createElement("div");
    message.classList.add("message", "error");
    message.innerHTML = `<p>Username or job opportunity does not exist contact a Torre advisor</p>`;

    const contenedor = document.querySelector("main");
    contenedor.appendChild(message);
  }
});
