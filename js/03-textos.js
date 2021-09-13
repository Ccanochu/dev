/* Crear un input y tres botones */
jQuery(function(){
    reloadLink()

    $('#add').on('click',function(){
        $('#links').append('<li><a href="'+$("#link").val()+'"></a></li>')
        reloadLink()        
        localStorage.setItem($("#link").val() , $("#link").val() )
        $("#link").val('') 
    })

    $("#formulario").hover(disableDisable,enableBackground)
    $("#formulario").css("padding","10px")
    $("#link").attr("placeholder","Digite el link")
    
})

function reloadLink(){    
    reloadStore()
    
    $('a').each(function(index) {        
        var that = $(this)
        var enlace = that.attr('href')
        that.text(enlace)
        that.attr("target","_blank")
    });
    
}
function reloadStore(value){
    for (var i in localStorage) {        
        if (typeof localStorage[i] == 'string') {
            let as = $('a').val()
            $('#links').append('<li><a href="'+localStorage[i]+'"></a></li>') 
        }        
    }
}

function disableDisable(){
    $('#add').removeAttr("disabled")
}
function enableBackground(){
    $('#add').attr("disabled","enabled")
}