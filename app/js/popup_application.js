window.addEventListener("load", function () {

   if (!localStorage.getItem("exists")) {
       setTimeout(function () {
           window.localStorage.setItem("exists", true)
           document.querySelector("#popup_wrapper").classList.toggle("active_popup")
       }, 2000);
   }
});

const close_popup = document.querySelector(".close_popup");
close_popup.addEventListener("click", function (e) {
    document.querySelector("#popup_wrapper").classList.toggle("active_popup")
})