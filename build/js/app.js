document.addEventListener('DOMContentLoaded', function() {
    createGallery()
})

function createGallery() {
    const CANTIDAD_IMAGENES = 16
    const gallery = document.querySelector('.gallery-img')
    for(let i = 1; i<= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagenes de la galería'

        gallery.appendChild(imagen)
    }
}