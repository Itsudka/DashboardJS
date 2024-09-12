import { crearMenu } from "../../../pagina-principal/sidebar/crear-menu";
import { crearRooms} from "../../../pagina-principal/sidebar/rooms";
import { menuComponent } from "./menu-component";
import { roomsComponent } from "./rooms-component";
import { titleComponent } from "./title-component";
import '../../../styles/sidebar.css'

export const sideBarComponent = (element) => {
    const title = element.querySelector('.title');
    const titleHtml = titleComponent(title)
    const menu = element.querySelector('.menu');
    const menuHtml = menuComponent(menu)
    const rooms = element.querySelector('.rooms');
    const roomsHtml = roomsComponent(rooms)
    
   const html = 
`    
    <div class="title">
        ${titleHtml}
    </div>
    <div class="menu">
        ${menuHtml}
    </div>
    <div class="rooms">
        ${roomsHtml}
    </div>

`

element.innerHTML = html;
crearMenu();
crearRooms();

return html;

}