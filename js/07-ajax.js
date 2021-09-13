jQuery(function(){

    $.get('json/data.json',function(data,status){
        console.log("Data: ",data)
        console.log("Status: ",status)

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