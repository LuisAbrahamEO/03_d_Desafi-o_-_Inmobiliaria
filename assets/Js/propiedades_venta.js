const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    costo: 1200,
    smoke: false,
    pets: true
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true
  },

  {
    nombre: "Villa privada con piscina",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Espectacular villa privada con piscina infinita, jardín y acceso directo a la playa.",
    ubicacion: "Av. Costanera 890, Marbella, España",
    habitaciones: 5,
    costo: 12000,
    smoke: true,
    pets: true
  }
];


const contenedorVenta = document.getElementById("propiedades_venta");


const mostrarPropiedadesVenta = () => {
    const limit = Number.parseInt(contenedorVenta.dataset.limit) || propiedades_venta.length;
    let html = "";
    for (const propiedad of propiedades_venta.slice(0, limit)) {
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
    contenedorVenta.innerHTML = html;
};

mostrarPropiedadesVenta();