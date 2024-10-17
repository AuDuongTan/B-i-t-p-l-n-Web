
const listImage = document.querySelector('.list-images')
const imgs =document.getElementsByTagName('img')
var i=0;
 setInterval(()=> {
    if(i==imgs.length-1){
        i=0;
        i++;
         let width = imgs[0].offsetWidth
  listImage.style.transform = `translateX( 0px)`

}else {
         i++;
    let width = imgs[0].offsetWidth
  listImage.style.transform = `translateX( ${width * -1 * i}px)`

 }
 } 
    ,4000)