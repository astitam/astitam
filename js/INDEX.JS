$(document).ready(function(){
    $('.fotos_carrossel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Menu hamburguer — adicione aqui:
    $('#btnMenu').on('click', function(){
        $('#menu').toggleClass('aberto');
    });

    // Fecha ao clicar em um link
    $('#menu a').on('click', function(){
        $('#menu').removeClass('aberto');
    });

    $(document).ready(function(){

    $('.fotos_carrossel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
    
});
//Modal//
$(document).ready(function(){

    // Drawer
    function abrirDrawer() {
        $('#drawer').addClass('show');
        $('#drawer-overlay').addClass('show');
    }

    function fecharDrawer() {
        $('#drawer').removeClass('show');
        $('#drawer-overlay').removeClass('show');
    }

    $('#btnMenu').on('click', abrirDrawer);
    $('#btnFechar').on('click', fecharDrawer);
    $('#drawer-overlay').on('click', fecharDrawer);

});
$('#track').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    prevArrow: $('#btnAnterior'),
    nextArrow: $('#btnProximo'),
    dots: true,
    appendDots: $('#dots'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
const filtro = document.getElementById('monthFilter');

filtro.addEventListener('change', function () {
    const mesSelecionado = this.value;
    const cards = document.querySelectorAll('.card_oficinas');

    cards.forEach(function (card) {
        if (mesSelecionado === 'all' || card.dataset.mes === mesSelecionado) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});