jQuery(function(){
    $('#animar').on('click',function(){    
        
        if (!$('#box').attr('style')) {
            $(this).text("Desanimar")
            animate()
        }else{
            $(this).text("Animar")          
            noanimate()
        }
    })
    
    
})
function animate(){
    $('#box').animate({marginLeft:'500px',
                        fontSize:'30px',
                        height:'60px',
                        width:'350px',
                        textAlign:'center',                        
                        borderRadius:'900px'},'slow')
}
function noanimate(){
    $('#box').removeAttr('style')
}
function slideToggle(){
    $('#box').slideToggle('fast')
}