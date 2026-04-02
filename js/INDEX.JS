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