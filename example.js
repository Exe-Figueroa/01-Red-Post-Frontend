//Expresiones regulares

function verifyUserOrMail(userOrMail) {
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const patronUsuario = /^[a-zA-Z0-9_-]{3,16}$/;
  const verifiedUser = patronUsuario.test(userOrMail);
  const verifiedMail = patronCorreo.test(userOrMail);
  if (verifiedUser) {
    console.log('Usted se ha logueado con un usuario');
  } else if (verifiedMail) {
    console.log('Usted se ha logueado con un correo electrónico');
  } else {
    console.error('El valor ingresado es incorrecto')
  }

  console.log({ verifiedUser, verifiedMail });
}

verifyUserOrMail('facundofigueroa789@gmail.com')