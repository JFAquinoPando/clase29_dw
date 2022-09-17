const formulario = $("form.form-signin");

formulario.on("submit", function (evento) {
    evento.preventDefault();

    const correo = $("#inputEmail").val();
    const contrasenha = $("#inputPassword").val();
    const miCorreo = obtener("email");
    console.log(correo);
    console.log(miCorreo);
    const miContrasenha = obtener("contrasenha");
    console.log(miContrasenha);
    console.log(contrasenha);
    const nombreUsuario = obtener("usuario");
    const avatar = obtener("avatar");

    if (correo == miCorreo && contrasenha == miContrasenha) {
        Swal.fire({
            icon: "success",
            title: "Logueo correcto!",
            text: "Esto es una prueba!",
            footer: "",
        });

        setTimeout(function () {
            formulario.hide("linear");
            $("div#usuario").html(`
                <div>
                    <img src="${avatar}" class='rounded-5' />
                    <h3>${nombreUsuario}</h3>
                </div>
                `);
        }, 5000);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops... algo anda mal",
            text: "Correo y/u contraseña son incorrectas!",
            footer: "",
        });
    }
});

$("#eliminar").on("click", function () {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            formulario.show();
            $("#usuario").hide("linear");
            eliminarElemento("contrasenha");
            eliminarElemento("usuario");
            eliminarElemento("email");
            eliminarElemento("avatar");
        }
    });
});
