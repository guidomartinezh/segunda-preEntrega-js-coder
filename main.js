const usuarios = [];

while (true) {
  let nombreCompleto = prompt("Ingrese su nombre completo");
  if (nombreCompleto === null || nombreCompleto === "") {
    break; 
  }

  let numSocio = prompt("Ingrese su número de socio");
  let actividad = prompt("Elija qué actividad desea realizar hoy:\n1 - Functional\n2 - Crossfit\n3 - Cardio");

  const usuario = {
    nombre: nombreCompleto,
    numeroSocio: numSocio,
    actividad: "",
  };

  switch (actividad) {
    case "1":
      usuario.actividad = "Functional";
      break;
    case "2":
      usuario.actividad = "Crossfit";
      break;
    case "3":
      usuario.actividad = "Cardio";
      break;
    default:
      console.log("Opción inválida");
      continue; 
  }

  usuarios.push(usuario);
}

console.log(usuarios);



const usuariosFunctional = usuarios.filter((el) => el.actividad === "Functional");
const usuariosCrossfit = usuarios.filter((el) => el.actividad === "Crossfit");
const usuariosCardio = usuarios.filter((el) => el.actividad === "Cardio");


console.log(usuariosFunctional);
console.log(usuariosCrossfit);
console.log(usuariosCardio);



