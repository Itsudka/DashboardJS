
import './src/styles/style.css'
import './src/styles/login-styles.css'
import { LoginComponent } from './src/components/login/login-component';


document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">

    </div>
  </div>
`
;

const element = document.querySelector('.card');

LoginComponent(element);

