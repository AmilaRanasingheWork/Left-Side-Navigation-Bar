function toggle(){
    var nav = document.getElementById("navbar");
    var checkbox = document.getElementById("checkbox");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");

    if(checkbox.checked == true){
        nav.style.width = "270px";
        btn1.style.display = "none";
        btn2.style.display = "flex";
    } else{
        nav.style.width = "70px";
        btn1.style.display = "flex";
        btn2.style.display = "none"
    }
}





































