const campo = $("#campo")

$("#habilitar").on("click", function(){
    $("#campo").prop("disabled", false)
})
$("#desabilitar").on("click", function(){
    campo.prop("disabled", true)
})
$("#muestra").on("click", function(){
    alert(`El valor en el campo es ${campo.val()}`)
    console.log(campo);
})

Swal.fire({
    icon: 'error',
    title: 'Oops... algo anda mal',
    text: 'Esto es una prueba!',
    footer: '<a href="">Why do I have this issue?</a>'
  })

  