function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
const img = document.querySelector("#profile img")

//substituir a imagem
if(html.classList.contains('light')) {
  // Se tiver light mode, adicionar a img light
  img.setAttribute('src', 'src/img/Avatar.png')
} else {
  //se tiver sem ligth mode, manter a mesma img
  img.setAttribute('src', 'src/img/avatar-light.png')
  }

//se tiver light mode, adicionar a imagem light
//se tiver sem light mode, manter a imagem normal
//substituir a imagem




}
