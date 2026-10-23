function toggleMode() {
   const html = document.documentElement;
   html.classList.toggle('light');
   
   //pegar a tag img
   const img = document.querySelector("#profile img");

    //substituir a imagem
    if(html.classList.contains('light'))
   {
    //se tiver light mode add a imagem light
        img.setAttribute("src", "./Assets/avatar-light.jpg")
   }else {
    //se tiver sem light mode mantem a imagem normal
    img.setAttribute("src", "./Assets/avatar.jpg")
    
   } 
   

   
   
   
}