jQuery("button").on("click", function(){
    const toAdd = jQuery("#contenido").val()
    jQuery("#mensaje").html('')
    setTimeout(function () {
        jQuery("#mensaje").html(`<b>${toAdd}</b>`)    
    },2000)
    
})

jQuery("input#contenido").on("focusout", function () {
    $(".otroMensaje").html(`<b>Quitaste el Foco del input!</b>`)  
})
$("input#contenido").on("focus", function () {
    jQuery(".otroMensaje").html(`<b>Estas en el foco del input!</b>`)  
})
