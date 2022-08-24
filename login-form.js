function handleLoginFormSubmit() {
  alert("Login :D");
}

const template = document.createElement("template");
template.innerHTML = /*html*/ `
<div class="login-form-container">
    <img src="https://static.kabum.com.br/conteudo/quem_somos/img/logo-kabum-sobre.png" />
    <form class="login-form" onsubmit="handleLoginFormSubmit()">
        <label>
            E-mail:
            <input type="text">
        </label>
        <label>
            Senha:
            <input type="text">
        </label>
        <button type="submit">Logar</button>
    </form>
</div>`;

const style = document.createElement("style");
style.innerHTML = /*css*/ `

.login-form-container {
    display: flex;
    flex-direction: column;   
}

.login-form-container img {
    align-self: center;    
    margin-bottom: 20px;
}

.login-form {
    background: var(--primary-color);
    color: white;
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 15px;
}

.login-form label {
    display: flex;
    flex-direction: column;
    font-size: 18px;
}

.login-form label:not(:first-child) {
    margin-top: 15px;
}

.login-form input[type="text"] {
    color: white;
    background: var(--primary-color);
    border: solid 2px #fff;
    padding: 10px 8px;
    border-radius: 5px;
    outline: none;
    margin-top: 5px;
}

.login-form button[type="submit"] {
    margin: 15px auto 0;
    background: white;
    color: var(--primary-color);
    padding: 10px 8px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    width: 50%;
}
`;

class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define("login-form", LoginForm);
