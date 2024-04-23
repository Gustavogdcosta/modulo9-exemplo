$('header button').click(function(){
    $('section').slideDown();
})

$('#reset-button').click(function(){
    $('section').slideUp();
})


$('form').on('submit', function(e){
    e.preventDefault();
    const imagemNova = $('#img-address').val();
    const novoItem = $('<li> </li>');

    $(`
        <a href="${imagemNova}" title="ver imagem em tamanho original" target="_blank">
            <img src="${imagemNova}">
        </a>`
    ).appendTo(novoItem);

    $(`<div class="overlay-link">
        <a href="${imagemNova}" target="_blank">Ver imagem em tamanho original</a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#img-address').val('');
})


