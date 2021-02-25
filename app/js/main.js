let doc = document;
var vue = new Vue({
    el: '#holder',
    data: {
        nav: {
            burger: 'БУРГЕРЫ',
            combo: 'КОМБО',
            snack: 'ЗАКУСКИ',
            salad: 'САЛАТЫ',
            dessert: 'ДЕСЕРТЫ',
            drinks: 'НАПИТКИ',
            stocks: 'АКЦИИ'
        },
        menu: {
            burger: [
                {
                    name: 'ГАМБУРГЕР',
                    description: 'Булка пшеничная, натуральная говядина, огурец соленый, соус майонезный, соус барбекю',
                    price: 30,
                    info: {
                        weight: 175
                    }
                },
                {
                    name: 'Чизбургер',
                    description: 'Булка пшеничная, натуральная говядина, сыр моцарелла, лук, салат ромэн, соус майонезный, соус барбекю',
                    price: 32,
                    info: {
                        weight: 185
                    }
                },
                {
                    name: 'ЮДЖИН БАРБЕКЮ',
                    description: 'Булка пшеничная, натуральная говядина, капуста, бекон, помидор, соус майонезный, соус барбекю',
                    price: 49,
                    info: {
                        weight: 200
                    }
                },
                {
                    name: 'ЮДЖИН ЧИКЕН',
                    description: 'Булка пшеничная, куриные кусочки, помидор, салат ромэн, соус фирменный',
                    price: 49,
                    info: {
                        weight: 190
                    }
                },
                {
                    name: 'БРЕКФЕСТ БУРГЕР',
                    description: 'Булка пшеничная, натуральная говядина, помидор, куриное яйцо, салат ромэн, сыр моцарелла, соус фирменный, горчица',
                    price: 49,
                    info: {
                        weight: 210
                    }
                },
                {
                    name: 'ВЕГАН БУРГЕР',
                    description: 'Пшеничная тортилья вместо булки, хешбраун, соус барбекю, микс салатов, лук, горчица, помидор',
                    price: 85,
                    info: {
                        weight: 230
                    }
                },
                {
                    name: 'ЮДЖИН КЛАСИКА',
                    description: 'Булка бриош, мраморная говядина, салат ромэн, помидор, соленый огурец, сыр чеддер, лук, соус фирменный',
                    price: 99,
                    info: {
                        weight: 310
                    }
                },
                {
                    name: 'ФИШБУРГЕР',
                    description: 'Булка бриош, белая рыба телапия в хрустящей панировке, салат ромэн, соус тартар',
                    price: 99,
                    info: {
                        weight: 280
                    }
                },
                {
                    name: 'БУРГЕР 4 СЫРА',
                    description: 'Булка бриош, мраморная говядина, сыр чеддер, сыр дор блю, сыр пармезан, сыр моцарелла, салат ромэн, соус фирменный',
                    price: 135,
                    info: {
                        weight: 330
                    }
                },
                {
                    name: 'ГАВАЙСКИЙ',
                    description: 'Булка бриош, куриная котлета, сыр моцарелла, соус Jack Daniels, микс салатов, ананас, соус фирменный',
                    price: 130,
                    info: {
                        weight: 380
                    }
                },
                {
                    name: 'КУРИНЫЙ',
                    description: 'Булка бриош, куриная котлета, помидор, сыр чеддер, салат ромэн, сыр пармезан, соус цезарь',
                    price: 99,
                    info: {
                        weight: 350
                    }
                },
                {
                    name: 'БЕКОНАТОР',
                    description: 'Булка бриош, мраморная говядина, сыр чеддер, луковые кольца, двойной бекон, соус барбекю',
                    price: 149,
                    info: {
                        weight: 360
                    }
                },
                {
                    name: 'ФРЕШ БУРГЕР С ЯЙЦОМ',
                    description: 'Булка бриош, мраморная говядина, салат ромэн, куриное яйцо, бекон, сыр моцарелла, помидор, соленый огурец, лук, соус горчичный',
                    price: 130,
                    info: {
                        weight: 350
                    }
                },
                {
                    name: 'ФИРМЕННЫЙ VIP',
                    description: 'Булка молочная черная, сыр дор блю, двойная мраморная говядина, вишневый соус, бекон, моцарелла, пармезан, микс салатов, соус фирменный',
                    price: 249,
                    info: {
                        weight: 500
                    }
                },
                {
                    name: 'МЕКСИКАНЕЦ',
                    description: 'Булка молочная черная, мраморная говядина, сыр моцарелла, сальса, микс салатов, соус острый, сыр чеддер',
                    price: 149,
                    info: {
                        weight: 350
                    }
                },
                {
                    name: 'ШЕФБУРГЕР',
                    description: 'Булка бриош, бекон, сыр чеддер, соус Jack Daniels, двойная мраморная говядина, микс салатов, соус фирменный',
                    price: 199,
                    info: {
                        weight: 500
                    }
                },
                {
                    name: 'ЗЕЛЁНЫЙ ДЖОН',
                    description: 'Булка бриош, два куриных яйца, сыр чеддер, луковые кольца, сыр моцарелла, микс салатов, соус фирменный',
                    price: 110,
                    info: {
                        weight: 300
                    }
                },
                {
                    name: 'Итальянский',
                    description: 'Булка бриошь, куриная котлета, сыр моцарелла, соус песто, микс салатов, помидор',
                    price: 120,
                    info: {
                        weight: 340
                    }
                },
                {
                    name: 'ВАВИЛОНСКАЯ БАШНЯ',
                    description: 'Булка молочная черная, бекон, 4 котлеты из мраморной говядины, луковые кольца, соус фирменный, микс салатов, сыр моцарелла, соус сырный, соус Jack Daniels',
                    price: 395,
                    info: {
                        weight: 1000
                    }
                },
                {
                    name: 'ТЕРМИНАТОР',
                    description: 'Мега булка бриош, много мраморной говядины, микс салатов, сыр моцарелла, соус сырный, соус Jack Daniels, бекон, помидор, лук кольцами, соус фирменный',
                    price: 599,
                    info: {
                        weight: '1.5к'
                    }
                }
            ],
            combo: [
                {
                    name: "КОМБО МЕНЮ ДИПЫ",
                    description: '',
                    price: 49
                },
                {
                    name: "КОМБО МЕНЮ КУКУРУЗА",
                    description: 'З соусом барбекю',
                    price: 49
                },
                {
                    name: "КОМБО ЛЕГКИЙ СТАРТ",
                    description: '',
                    price: 60
                },
                {
                    name: "СИРНОЕ КОМБО",
                    description: '',
                    price: 65
                },
                {
                    name: "КОМБО БЕЗ МЯСА",
                    description: 'З беконом та сирним соусом',
                    price: 65
                },
                {
                    name: "КОМБО 3 ХИТА",
                    description: '',
                    price: 60
                },
                {
                    name: "ПАТИ КОМБО",
                    description: 'Курячі шматочки, цибулеві кільця та картопляні кульки',
                    price: 129
                },
                {
                    name: "БИГ ПАТИ КОМБО",
                    description: 'Курячі шматочки, цибулеві кільця, картопляні кульки, сирні палички та картопляні діпи',
                    price: 229
                }
            ],
            snack: [
                {
                    name: 'КАРТОФЕЛЬНЫЕ ДиПы',
                    description: '',
                    price: 39,
                    info: {
                        weight: 130
                    }
                },
                {
                    name: 'КУКУРУЗА',
                    description: 'С соусом барбекю',
                    price: 39,
                    info: {
                        weight: 140
                    }
                },
                {
                    name: 'КУРИНЫЕ КУСОЧКИ',
                    description: '',
                    price: 60,
                    info: {
                        weight: 140
                    }
                },
                {
                    name: 'СыРНЫЕ ПАЛОЧКИ',
                    description: '',
                    price: 65,
                    info: {
                        weight: 150
                    }
                },
                {
                    name: 'КАРТОФЕЛЬНЫЕ ШАРИКИ',
                    description: 'С беконом и сирным соусом',
                    price: 65,
                    info: {
                        weight: 150
                    }
                },
                {
                    name: 'ЛУКОВЫЕ КОЛЬЦА',
                    description: '',
                    price: 60,
                    info: {
                        weight: 130
                    }
                },
                {
                    name: 'БАСКЕТ СТАНДАРТ',
                    description: 'Куриные кусочки, луковые кольца и картофельные шарики',
                    price: 129,
                    info: {
                        weight: 400
                    }
                },
                {
                    name: 'БАСКЕТ БОЛЬШОЙ',
                    description: 'Куриные кусочки, луковые кольца, картофельные шарики, сырные палочки и картофельные дипы',
                    price: 229,
                    info: {
                        weight: 650
                    }
                },

            ],
            salad: [
                {
                    name: 'ФИРМЕННЫЙ',
                    description: 'С дор блю и nрошутто',
                    price: 69,
                    info: {
                        weight: 180
                    }
                },
                {
                    name: 'КОУЛСЛОУ',
                    description: 'С капустой, морковью и майонезным соусом',
                    price: 40,
                    info: {
                        weight: 190
                    }
                },
                {
                    name: 'ЦЕЗАРЬ С КУРИЦЕЙ',
                    description: 'С беконом и пармезаном',
                    price: 90,
                    info: {
                        weight: 230
                    }
                },
            ],
            dessert: [
                {
                    name: 'Донат ванильный',
                    description: '',
                    price: 35,
                    info: {
                        weight: 58
                    }
                },
                {
                    name: 'Донат клубничный',
                    description: '',
                    price: 35,
                    info: {
                        weight: 58
                    }
                },
                {
                    name: 'Мафин кокосовый',
                    description: '',
                    price: 35,
                    info: {
                        weight: 80
                    }
                },
                {
                    name: 'Мафин шоколадно-банановый',
                    description: '',
                    price: 35,
                    info: {
                        weight: 80
                    }
                },
            ],
            drinks: [
                {
                    name: 'Кола Кола',
                    description: '500 мл',
                    price: 29
                },
                {
                    name: 'Кола Зеро',
                    description: '500 мл',
                    price: 29
                },
                {
                    name: 'Фанта',
                    description: '500 мл',
                    price: 29
                },
                {
                    name: 'Спрайт',
                    description: '500 мл',
                    price: 29
                },
                {
                    name: 'Юджин Лимонад',
                    description: '330 мл',
                    price: 29
                },
                {
                    name: 'Юджин Морс',
                    description: '330 мл',
                    price: 29
                },
                {
                    name: 'Вода без газа',
                    description: '500 мл',
                    price: 29
                },
                {
                    name: 'Вода с газом',
                    description: '500 мл',
                    price: 29
                },
                {
                    name: 'Сок Rich яблоко-виноград',
                    description: '500 мл',
                    price: 35
                },
                {
                    name: 'Сок Rich экзотик',
                    description: '500 мл',
                    price: 35
                },
                {
                    name: 'Пиво Bud',
                    description: '500 мл',
                    price: 49
                },
                {
                    name: 'Пиво Bud Б/А',
                    description: '500 мл',
                    price: 49
                },
                {
                    name: 'Пиво Corona',
                    description: '330 мл',
                    price: 59
                },
                {
                    name: 'Leffe Brune темное',
                    description: '330 мл',
                    price: 59
                },
                {
                    name: 'Hoegaarden white',
                    description: '330 мл',
                    price: 59
                },
                {
                    name: 'Сидр Somersby Яблоко',
                    description: '500 мл',
                    price: 49
                },
                {
                    name: 'Сидр Somersby Черника',
                    description: '500 мл',
                    price: 49
                },
                {
                    name: 'Шардоне белое сухое',
                    description: '750 мл',
                    price: 179
                },
                {
                    name: 'Шабо белое полусладкое',
                    description: '750 мл',
                    price: 179
                },
                {
                    name: 'Мерло красное сухое',
                    description: '750 мл',
                    price: 179
                },

            ]
        },
        openItem: {
          burger: [
              {
                  name: 'Бекон',
                  price: 25,
                  weight: 25
              },
              {
                  name: 'Сыр чедер',
                  price: 25,
                  weight: 25
              },
              {
                  name: 'Помидор',
                  price: 20,
                  weight: 25
              },
              {
                  name: 'Комбо меню с кукурузой',
                  price: 20,
                  weight: 25
              },
              {
                  name: 'Комбо меню с картошкой',
                  price: 49,
                  weight: 25
              },
              {
                  name: 'Сырное фондю',
                  price: 39,
                  weight: 25
              }
          ],
          snack: [
              {
                  name: 'Майонез',
                  price: 10
              },
              {
                  name: 'Кетчуп',
                  price: 10
              },
              {
                  name: 'Гранатовый',
                  price: 10
              },
              {
                  name: 'Цезарь',
                  price: 10
              },
              {
                  name: 'Горчичный',
                  price: 10
              },
              {
                  name: 'Барбекю',
                  price: 10
              },
              {
                  name: 'Сырный',
                  price: 10
              },
              {
                  name: 'Острый',
                  price: 10
              },
          ]
        },
        active: 0,
        fixed: false,
        baskets: [

        ],
        index: 0,
        popup: false,
        open: false,
        step: 1,
        surrender: false
    },
    computed: {
        quantityAll() {
            let quanityAll = 0;
            this.basket.forEach(item => {
                quanityAll += item.quantity;
            });
            return quanityAll
        },
        allPriceBasket() {
            let allPrice = 0;
            this.basket.forEach(item => {
                allPrice += item.price * item.quantity;
            });
            return allPrice
        },
        basket() {
            localStorage.setItem('basket', JSON.stringify(this.baskets));
            return this.baskets
        }
    },
    methods: {
        basketFadeOut(e) {
            setTimeout(item => {
                if (!e.mouseenter) {
                    open = false
                }
             }, 500)
        },

        widthHeight(item) {
            item.style.width = item.offsetWidth / 19.2 + 'vw';
        },
        scrollTo( e ,href ) {
            e.preventDefault();

            document.querySelector('#' + href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        },

        addToCard(item, name, index) {
            let off = false;
            this.basket.forEach(purchase => {
                if (item.price === purchase.price && item.name === purchase.name) {
                    purchase.quantity += 1;
                    off = true
                }
            });
            if (off) {

            } else {
                this.basket.push(item);
                Vue.set(this.basket[this.basket.length - 1], 'quantity', 1);
                Vue.set(this.basket[this.basket.length - 1], 'url', 'img/menu/' + name + '/' + item.name.toLowerCase() + '.png');
            }
        },

        addMore(e, item, index) {
            let del = false;
            let popup = this.popup;
            function add() {
                e.classList.add('active');
                Vue.set(item, 'url', 'img/menu/open-item/'+ popup.type + '/' + (+index + 1) + '.png');
                popup.more.push(item);
                popup.price += item.price;
            }
            if (this.popup.more[0]) {
                this.popup.more.forEach((more, index) => {
                   if (more.name === item.name) {
                       this.popup.more.splice(index, 1);
                       del = true
                   }
                });
                if (del) {
                    e.classList.remove('active');
                    this.popup.price -= item.price;
                } else {
                    add();
                }
            } else {
                add();
            }
        },

        bigCard(e, item, name, index) {
            this.popup = JSON.parse(JSON.stringify(item));
            Vue.set(this.popup, 'url', 'img/menu/' + name + '/' + item.name.toLowerCase() + '.png');
            Vue.set(this.popup, 'type', name);
            Vue.set(this.popup, 'more', []);
        },

        excluded(name, item, e) {
            return ((name === 'burger' || name === 'snack') && item.name !== 'ГАМБУРГЕР' && item.name !== 'Чизбургер') && e.target.classList.value !== 'info'
        },

        smallImgSize(item) {
            return item.name === 'ВЕГАН БУРГЕР' || item.name === 'ТЕРМИНАТОР'
        },

        openInfo(e) {
            if (window.innerWidth > 1023) {
                e.querySelector('.open').classList.add('active');
            }
        },

        closeInfo(e) {
            if (window.innerWidth > 1023) {
                e.querySelector('.open').classList.remove('active');
            }
        },

        openInfoMobile(e) {
            if (window.innerWidth < 1023) {
                e.querySelector('.open').classList.toggle('active');
            }
        },

        nextSlide() {
            let element = document.querySelectorAll('#slider .item');
            element.forEach((item, index) => {
                if (item.classList.value === 'item active') {
                    this.index = index;
                    item.classList.remove('active');
                    document.querySelectorAll('#slider .dotted .dot')[index].classList.remove('active');
                }
            });
            if (this.index === element.length - 1) {
                document.querySelectorAll('#slider .item')[0].classList.add('active');
                document.querySelectorAll('#slider .dotted .dot')[0].classList.add('active');
                element[0].style.marginLeft = 0 + '%';
            } else {
                element[0].style.marginLeft = -100 * (this.index + 1) + '%';
                document.querySelectorAll('#slider .item')[this.index + 1].classList.add('active');
                document.querySelectorAll('#slider .dotted .dot')[this.index + 1].classList.add('active');
            }
        },
        prevSlide() {
            let element = document.querySelectorAll('#slider .item');
            element.forEach((item, index) => {
                if (item.classList.value === 'item active') {
                    this.index = index;
                    item.classList.remove('active');
                    document.querySelectorAll('#slider .dotted .dot')[index].classList.remove('active');
                }
            });
            if (this.index === 0) {
                element[0].style.marginLeft = -100 * (element.length - 1) + '%';
                document.querySelectorAll('#slider .item')[element.length - 1].classList.add('active');
                document.querySelectorAll('#slider .dotted .dot')[element.length - 1].classList.add('active');
            } else {
                document.querySelectorAll('#slider .item')[this.index - 1].classList.add('active');
                document.querySelectorAll('#slider .dotted .dot')[this.index - 1].classList.add('active');
                element[0].style.marginLeft = (-100 * this.index) + 100 + '%';
            }
        },
        dottedSelect(index) {
            let element = document.querySelectorAll('#slider .item');
            document.querySelectorAll('#slider .dotted .dot').forEach((item, i) => {
                if (item.classList.value === 'dot active') {
                    item.classList.remove('active');
                    element[i].classList.remove('active')
                }
            });
            document.querySelectorAll('#slider .dotted .dot')[index].classList.add('active');
            element[0].style.marginLeft = -100 * index + '%';
            element[index].classList.add('active')
        },
        autoplay() {
            setTimeout(item => {
                this.nextSlide();
                this.autoplay()
            }, 5000)
        }
    },
    created() {
        if (JSON.parse(localStorage.getItem('basket'))) {
            this.baskets = JSON.parse(localStorage.getItem('basket'));
        }
        if (doc.querySelector('#slider')) {
            this.autoplay()
        }
    },
    mounted() {

        let combo = doc.querySelector('#combo'),
            snacks = doc.querySelector('#snack'),
            salad = doc.querySelector('#salad'),
            dessert = doc.querySelector('#dessert'),
            drinks = doc.querySelector('#drinks'),
            itemLastHeight = element => {
                return element.offsetTop - element.querySelectorAll('.item')[element.querySelectorAll('.item').length - 1].offsetHeight
            };

        doc.addEventListener('scroll', item => {
            if (doc.querySelector('#menu nav')) {
                if (pageYOffset > doc.querySelector('#menu nav').offsetTop) {
                    this.fixed = true;
                } else {
                    this.fixed = false;
                }
                if (pageYOffset > itemLastHeight(combo)) {
                    this.active = 1;
                    if (pageYOffset > itemLastHeight(snacks)) {
                        this.active = 2;
                        if (pageYOffset > itemLastHeight(salad)) {
                            this.active = 3;
                            if (pageYOffset > itemLastHeight(dessert)) {
                                this.active = 4;
                                if (pageYOffset > itemLastHeight(drinks)) {
                                    this.active = 5;
                                }
                            }
                        }
                    }
                } else {
                    this.active = 0;
                }
            }
            if (pageYOffset > doc.querySelector('#header .header_nav').offsetTop && window.innerWidth > 1023) {
                doc.querySelector('#header .basket').classList.add('scroll')
            } else {
                doc.querySelector('#header .basket').classList.remove('scroll')
            }
        });
    },
    watch: {
        active(active) {
            if (window.innerWidth < 1023 && active < 4) {
                setTimeout(function () {
                    function scroll() {
                        if (document.querySelector('#menu .container nav .container ul').scrollLeft < document.querySelector('#menu .container nav .container ul li.active').offsetLeft && document.querySelector('#menu .container nav .container ul').scrollLeft < 180 ) {
                            setTimeout(function () {
                                document.querySelector('#menu .container nav .container ul').scrollLeft += 1;
                                scroll()
                            }, 1)
                        } else {
                            document.querySelector('#menu .container nav .container ul').scrollLeft = document.querySelector('#menu .container nav .container ul li.active').offsetLeft;
                        }
                    }
                    scroll();
                    console.log(document.querySelector('#menu .container nav .container ul').scrollLeft);
                }, 500)
            }
        },
    }
});

new WOW().init();

$('header .burger_menu').click(function () {
    $('.mobile-menu').addClass('active')
});

$('.mobile-menu .close').click(function () {
    $('.mobile-menu').removeClass('active')
})
