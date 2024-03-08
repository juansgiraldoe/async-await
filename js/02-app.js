//Async await en function expression.
function descargarClientes() {
  return new Promise((resolve, reject)=>{
    const error = true;
    setTimeout(() => {
      if (!error) {
        resolve('El listado de clientes se descargo con exito.')
      } else {
        reject('Error en la conexión.')
      }
    }, 3000);
  });
};

//Async await.
async function ejecutar() {
  try {
    const respuesta = await descargarClientes();
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  };
};
ejecutar();