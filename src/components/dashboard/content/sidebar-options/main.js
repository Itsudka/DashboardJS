import { boardComponent } from "./main-options/board";


export const mainDashboardComponent = (ele) => {
    const html = `
        <div class="components">
            
        </div>
    `;
    ele.innerHTML = html;
    boardComponent(ele);
}