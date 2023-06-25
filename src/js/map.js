// Función para determinar si la conexión es lenta
function isConnectionSlow() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  if (connection) {
    // Verificamos el tipo de conexión
    const effectiveType = connection.effectiveType;

    if (effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g') {
      return true; // La conexión se considera lenta
    }
  }

  return false; // La conexión no es considerada lenta
}

// Función para mostrar la imagen o el mapa según la conexión
function showImageOrMap() {
  const mapContainer = document.getElementById('mapContainer');
  const mapImage = document.getElementById('mapImage');
  const mapFrame = document.getElementById('mapFrame');


  if (isConnectionSlow()) {
    mapFrame.style.display = 'none'; // Ocultar el mapa
    mapImage.style.display = 'block'; // Mostrar la imagen
  } else {
    mapImage.style.display = 'none'; // Ocultar la imagen
    mapFrame.style.display = 'block'; // Mostrar el mapa
  }
}

// Llamamos a la función al cargar la página
showImageOrMap();
