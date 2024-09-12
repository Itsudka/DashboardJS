const opciones = [
    {
      texto: 'TODO',
      enlace: '#',
      subOpciones: [
        { texto: 'Opción 1', enlace: '#' },
        { texto: 'Opción 2', enlace: '#' },
      ],
    },
    {
      texto: 'Ver todos los espacios',
      enlace: '#',
      subOpciones: [
        { texto: 'Opción 3', enlace: '#' },
        { texto: 'Opción 4', enlace: '#' },
      ],
    },
    {
      texto: 'Crear espacio',
      enlace: '#',
      subOpciones:[]
    },
  ];
  

  export const crearRooms = () => {
    const list = document.getElementById('items-menu');
    opciones.forEach((opcion) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const ul = document.createElement('ul');
  
      a.textContent = opcion.texto;
      a.href = opcion.enlace;
      a.classList.add('menu-item');
  
      ul.classList.add('dropdown-menu');
  
      list.appendChild(li);
      li.appendChild(a);
      li.appendChild(ul);
  
      opcion.subOpciones.forEach((subOpcion) => {
        const subLi = document.createElement('li');
        const subA = document.createElement('a');
  
        subA.textContent = subOpcion.texto;
        subA.href = subOpcion.enlace;
        subA.classList.add('dropdown-item');
  
        ul.appendChild(subLi);
        subLi.appendChild(subA);
      });
    });
  
    // Inicializa el menú
    const initMenu = () => {
      const menuItems = document.querySelectorAll('.menu-item');
  
      menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', (e) => {
          e.preventDefault();
          const dropdownMenu = menuItem.parentNode.querySelector('.dropdown-menu');
          dropdownMenu.classList.toggle('show');
        });
      });
    };
  
    initMenu();
}