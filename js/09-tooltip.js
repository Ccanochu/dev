jQuery(function(){
    $('h1').animate({marginLeft:'600px'},1500)
    $('.caja').animate({marginLeft:'100px'},2000)

    //mover los elementos
    $('.caja').draggable()
    
    //redimensionar
    $('.caja').resizable()

    $('#elemento').css(
        'background','red'
    ).css('height','200px')
    .css('width','200px').draggable()

    //drop
    $('.caja').droppable({drop: function(){
        console.log("Has entrado al area")
    }})
    $( ".misDatos" ).tooltip({
        classes: {
          "ui-tooltip": "highlight"
        },
        content: "Awesome title!"
      });
    
})