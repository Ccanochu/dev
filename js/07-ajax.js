jQuery(function(){

    $('#box').load("https://reqres.in/")

    
    $.get('https://reqres.in/api/users?page=2',function(response,status){
        // console.log("Data: ",data)
        // console.log("Status: ",status)
        $('body').append(`<ul>`)
        response.data.forEach(i=>{
            
            $('body').append(`<li>${i.email}</li>`)
        })
        $('body').append(`</ul>`)
    })
    $.get('json/data.json',function(data,status){        

        const table=$(`
        <table>
            <tr>
                <th>Nombre</th>
                <th>Address</th>
            </tr>

        </table>
        `)
        data.forEach(i =>{
            table.append(
                `<tr>
                    <th>${i.name}</th>
                    <th>${i.address}</th>
                </tr>`
            )
        })
        table.attr("border","1")
        table.appendTo('body')
    })
    

    
    $('#formulario').submit(function(e){
        e.preventDefault();
        var usuario = {
            name:$('input[name="name"]').val(),
            web:$('input[name="web"').val()
        }
        
        $.ajax({
            type:"POST",
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando datos...")
            },

            success: function(response){
                console.log(response)
            },
            error: function(){
                console.log("Ha ocurrido un error")
            },
            timeout: 3000
        });

        return false;
    })
    
    
})