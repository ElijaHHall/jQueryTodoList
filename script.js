$(function() {
    const $form = $('#todoList');

    $form.on('submit', function(e) {
        e.preventDefault();

        let $inputValue = $('#todoListInput').val();
        $('ol').append('<li>' + $inputValue + '</li>');

        $inputValue = $('#todoListInput').val('');

    });

    $('#clickThis').click(function() {
        alert('hang in there baby' + ' :3');
    })
})