/* Crear un input y tres botones */
jQuery(function(){
    
    $('#mostrar').on('click',function(){
        if ($('#box').is(':visible')) {
            $('#mostrar').text("Mostrar")
        }else{
            $('#mostrar').text("Ocultar")
        }       
        slideToggle()
    })
    
})
function toggle(){
    $('#box').toggle('fast')
}
function fadeToggle(){
    $('#box').fadeToggle('fast')
}
function slideToggle(){
    $('#box').slideToggle('fast')
}