function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
   
    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')) {
     //se estiver em light mode, add a imagem light
      img.setAttribute('src', './assets/avatar.png')    
    } else {
        // se estiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatardark.png')
    }
}    





 








//if(html.classList.contains('light')) {
//     html.classList.remove('light')
//} else {
//  html.classList.add('light')
// }