const template = document.createElement("template");
template.innerHTML = `
<head>
  <title>Custom Element Example</title>
      <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://unpkg.com/tailwindcss@3.3.3/dist/tailwind.min.css"
      rel="stylesheet"
    />
</head>

      
    <div>
        <label class="block mb-2 text-sm font-medium text-gray-900"> Mensaje WhatsApp </label>
        <input type="text" id="input-field"  class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"/>
        <button id="action-button">Enviar WhatsApp</button>

    </div>

`;

class CustomElement extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM for encapsulation
    const shadow = this.attachShadow({ mode: "open" });

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
