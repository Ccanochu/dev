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
    
    
})