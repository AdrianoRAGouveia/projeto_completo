$(document).ready(function() {
    // Menu Hambúrguer
    $('.hamburger').click(function() {
        $('.menu').toggle();  // Alterna entre mostrar/ocultar o menu
    });

    // Carrossel de Imagens
    let currentIndex = 0;
    const images = $('.carousel-images img');
    const totalImages = images.length;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        $('.carousel-images').css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
    }

    setInterval(showNextImage, 3000);  // Troca de imagem a cada 3 segundos

    // Máscara para o campo de telefone (usando o plugin jQuery Mask)
    $('#phone').mask('(00) 00000-0000');

    // Validação do formulário
    $('#contact-form').submit(function(event) {
        event.preventDefault();
        if ($('#name').val() && $('#phone').val() && $('#email').val() && $('#message').val()) {
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Efeito de Rolagem Suave
    $('#scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1000);  // Rolagem suave para o topo
    });
});
