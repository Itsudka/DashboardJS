import Chart from 'chart.js/auto';
import { pendingMessages } from './board-components/pending-messages';


export const boardComponent = (ele) => {

    const pending = document.querySelector('pend-messages');
    const html = `
        <div class="board-content">
            <div class="board-title">
                <h1>Pagina principal</h1>
            </div>

            <section class="task-message">
              <div class="message">
                <h1>Mensajes</h1>
                <div class="btn-new-mess">
                  <button>Nuevo mensaje <span>+</span></button>
                </div>
                <div class="new-message">
                  <h2 class="n-title">Mensajes pendientes</h2>
                  <div class="pend-messages">
                    ${pendingMessages()}
                  </div>
                </div>
              </div>
              
              <div class="task-section">
                <div class="task">
                  <h1>Tareas</h1>
                  <div class="btn-new-task">
                    <button>Nueva tarea <span>+</span></button>
                  </div>
                  <div class="new-task">
                    <h2 class="t-title">Tareas pendientes</h2>
                  </div>
                </div>
              </div>
            </section>
            <div class="graphs">
                <div class="graph">
                    <h1>Rendimiento de actividades</h1>
                    <canvas id="rend-act"></canvas>
                </div>
                
                <div class="graph">
                    <h1>Actividades por dia</h1>
                    <canvas id="act-day"></canvas>
                </div>
            </div>
        </div>
    `;
  
    ele.innerHTML += html;
    

    const graph_1 = document.getElementById('rend-act').getContext('2d');
    new Chart(graph_1, {
        type: 'pie',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# de Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              display: false
            }
          }
        }
    });

    const graph_2 = document.getElementById('act-day').getContext('2d');
    new Chart(graph_2, {
        type: 'pie',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# de Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              display: false
            }
          }
        }
    });    
}