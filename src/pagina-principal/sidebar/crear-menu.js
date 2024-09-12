const opciones = [
    { texto: 'Inicio', enlace: '#' },
    { texto: 'Bandeja de entrada', enlace: '#' },
    { texto: 'Documentos', enlace: '#' },
    { texto: 'Pizarra', enlace: '#' },
  ];
  
export const crearMenu = () => {
  const lista = document.getElementById('menu-list');
  opciones.forEach((opcion) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = opcion.texto;
    a.href = opcion.enlace;
    li.appendChild(a);
    lista.appendChild(li);
  })
}