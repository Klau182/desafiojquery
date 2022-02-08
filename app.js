
$(document).ready(function() {

    let parrafo = $("#resultado p")
    
    $('.btn-primary').click(function() {
        parrafo.addClass("display-4")
    })

    $('.btn-danger').click(function() {
        parrafo.removeClass("display-4")
    })






})

