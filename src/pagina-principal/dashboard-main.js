import '../styles/style.css'
import '../styles/sidebar.css'
import '../styles/content.css'
import { sideBarComponent } from '../components/dashboard/sidebar/sidebar-component';
import { mainDashboardComponent } from '../components/dashboard/content/sidebar-options/main';




document.querySelector('#dashboard').innerHTML = `
    <div class="cont">
        <div class="sidebar">
            
        </div>

        <div class="content">
            
        </div>
    </div>
`;

const element = document.querySelector('.sidebar');
const ele = document.querySelector('.content');


mainDashboardComponent(ele);
sideBarComponent(element);