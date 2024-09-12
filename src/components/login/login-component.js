import { loginButton } from "../../login/login-button";

export const LoginComponent = (element) => {
  const html = `
    <div class="login-card">
      <h1 class="login-tt">Task Manager</h1>
      <h2 class="login-email"> Correo Electronico</h2>
      <input class="user" type="text" placeholder="Escriba su correo"></input>
      <h2 class="login-password">Contraseña</h2>
      <input class="password" type="password" placeholder="Escriba su contraseña"></input>
      <button class="login-btn"> Iniciar sesion </button>
    </div>
  `;

  element.innerHTML = html;

  const button = element.querySelector('.login-btn'); 
  loginButton(button);
};