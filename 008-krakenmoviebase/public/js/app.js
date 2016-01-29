$(document).ready(function () {
    console.log('started')
    $('.delete-movie').click(function (event) {
        event.preventDefault();
        $target = $(event.target);
        console.log($target);
        $.ajax({
            type: 'DELETE',
            url: '/movies/delete/' + $target.attr('data-movie-id'),
            data: {
                _csrf: $target.attr('data-csrf')
            },
            success: function (response) {
                $target.parent().parent().remove();
                alert('Movie Removed');
                window.location.href = '/movies';
            },
            error: function (error) {
                alert(error);
                console.log(error);
            }
        })
    })
})