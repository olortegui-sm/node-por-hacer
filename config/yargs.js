const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    descripcion: 'marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', { descripcion })
    .command('actualizar', 'actualiza el estado completado de l atarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar un elemento', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}