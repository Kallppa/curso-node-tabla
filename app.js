const { getCrearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// console.log(process.argv);
// console.log('base: yargs', argv.base);
/*obtener los argumentos que bienen directamente de la consola*/
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

// const base = 5;

console.clear();
getCrearArchivoTabla(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'.red))
  .catch((err) => console.log(err));
