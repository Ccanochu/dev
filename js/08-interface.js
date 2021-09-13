jQuery(function(){
    $('h1').animate({marginLeft:'500px'},'slow')
    $('.caja').animate({marginLeft:'100px'},'slow')

    //mover los elementos
    $('.caja').draggable()
    
    //redimensionar
    $('.caja').resizable()
})