const template = document.createElement("template");
template.innerHTML = `
<head>
  <title>Custom Element Example</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
      <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

</head>

      
    <div>
        <label> Mensaje WhatsApp </label>
        <input type="text" id="input-field" />
        <button id="action-button" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Enviar WhatsApp</button>

    </div>

`;

class CustomElement extends HTMLElement {
  constructor() {
    super();
    let script = document.createElement("script");
    script.textContent = '  console.log("script runs in Global scope!!"); ';
    script.src = "https://cdn.tailwindcss.com";

    // Create a shadow DOM for encapsulation
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(script);
    shadow.append(template.content.cloneNode(true));

    // Get references to the input and button elements
    this.inputField = shadow.getElementById("input-field");
    this.actionButton = shadow.getElementById("action-button");

    // Add event listener to the button
    this.actionButton.addEventListener("click", () => {
      this.handleButtonClick();
    });
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const message = this.getAttribute("message");
    const code = this.getAttribute("code");
    const phone = this.getAttribute("phone");
    const action = this.getAttribute("action");
    this.inputField.value = message;
    this.actionButton.textContent = action;
    console.log(title, message, code, phone, action);
  }

  handleButtonClick() {
    const inputValue = this.inputField.value;
    // Add your custom logic here
    console.log("Input Value:", inputValue);
  }
}

// Define your custom element
customElements.define("whatsapp-form", CustomElement);
