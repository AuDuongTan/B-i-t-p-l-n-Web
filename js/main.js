var listImages = document.querySelector('.images'); //lấy class images đầu tiên
console.log(listImages)
var imgs = document.querySelectorAll('.images img'); //lấy tất cả các thẻ img và trả về như một mảng
console.log(imgs)
//hàm thiết lập chuyển ảnh
var i=0;
function setTime(){
    if(i==imgs.length-1){
        i=0;
        let width = imgs[0].offsetWidth
        console.log(width)
         //lấy chiều rộng của ảnh đầu tiên đại diện vì các ảnh có cùng độ rộng[0].offsetWidth;
        listImages.style.transform = `translateX(0px)`
    }
    else{
        i++;
        let width = imgs[0].offsetWidth;//lấy chiều rộng của ảnh đầu tiên đại diện vì các ảnh có cùng độ rộng
        listImages.style.transform = `translateX(${width * -1 * i}px)`
    }
}
//phương thức thiết lập thời gian lặp lại một đoạn mã hay hàm nào đó
setInterval( setTime , 4000);
