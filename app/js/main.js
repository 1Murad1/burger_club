let doc = document;
var vue = new Vue({
    el: '#holder',
    data: {
        popupForm: false,
        form: {
            name: '',
            tel: '',
            city: '',
            email: '',
            link: ''
        }
    },
    methods: {
        formSubmit() {
            console.log(this.form);
            $.ajax({
                type: "POST",
                url: '/php/contact-form.php',
                data: $('#form').serialize(),
                success: function(data) {
                    console.log(data);
                    window.location.href = "/congratulations.html";
                },
                error: function(jqXHR, text, error) {
                    console.log(jqXHR, text, error);
                }
            });
        }
    }
});

new WOW().init();

$('header .burger_menu').click(function () {
    $('.mobile-menu').addClass('active')
});

$('.mobile-menu .close').click(function () {
    $('.mobile-menu').removeClass('active')
})

$(document).ready(function () {
    $("input[name='tel']").mask("+38 (099) 999-99-99").click(function () {
        $(this).focus();
        $(this).get(0).setSelectionRange(0,0);
    });
})
