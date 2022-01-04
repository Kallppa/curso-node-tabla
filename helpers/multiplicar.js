const fs = require('fs');
const colors = require('colors');

const getCrearArchivoTabla = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${colors.yellow(base)} ${'x'.red} ${colors.cyan(i)} ${'='.magenta} ${base * i}\n`;
    }

    if (listar == true) {
      console.log('==============================='.green);
      console.log('      Tabla del:'.green, colors.blue(base));
      console.log('==============================='.green);

      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado`;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getCrearArchivoTabla,
};
