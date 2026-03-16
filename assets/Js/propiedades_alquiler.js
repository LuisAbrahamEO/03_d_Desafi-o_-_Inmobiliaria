const propiedades_alquiler = [
  {
    nombre: "Departamento céntrico",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
    ubicacion: "Viña del Mar, Chile",
    habitaciones: 2,
    costo: 450000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Departamento familiar con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "Valparaíso, Chile",
    habitaciones: 4,
    costo: 750000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Loft para estudiantes",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial,un espacio abierto ideal para estudiantes.",
    ubicacion: "Santiago, Chile",
    habitaciones: 1,
    costo: 300000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Cabaña en la playa",
    src: "https://images.unsplash.com/photo-1686950429623-abb1ef6ea8e8?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Cabaña rústica frente al mar.",
    ubicacion: "La Serena, Chile",
    habitaciones: 3,
    costo: 600000,
    smoke: true,
    pets: true
  }
];

const contenedorAlquiler = document.getElementById("propiedades-alquiler");

const mostrarPropiedadesAlquiler = () => {
    const limit = Number.parseInt(contenedorAlquiler.dataset.limit) || propiedades_alquiler.length;
    let html = "";
    for (const propiedad of propiedades_alquiler.slice(0, limit)) {
        html += `
    <div class="col">
      <div class="card h-100">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString()}</p>
          <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
            <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
            ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
          </p>
          <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
            <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i>
            ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
          </p>
        </div>
      </div>
    </div>
  `;
    }
    contenedorAlquiler.innerHTML = html;
};

mostrarPropiedadesAlquiler();