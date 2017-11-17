const fetch = require('fetch');
const fs = require('fs');
/*
fetch.fetchUrl('https://api.cafci.org.ar/fondo/456/clase/873/ficha',{
    method: 'GET',
    rejectUnauthorized : false
}, (err, meta, data) => {
    err && console.error(err);
    const parsed = JSON.parse(data);
    const d = parsed.data.info.diaria.actual;
    console.info('data', JSON.stringify(d));
});*/



fetch.fetchUrl('https://api.cafci.org.ar/fondo?estado=1&include=entidad;depositaria,entidad;gerente,tipoRenta,region,benchmark,horizonte,duration,tipo_fondo,clase_fondo&limit=0&order=clase_fondos.nombre',{
    method: 'GET',
    rejectUnauthorized : false
}, (err, meta, data) => {
    err && console.error(err);
    const parsed = JSON.parse(data);
    const procesado = parsed.data.map( (item) => {
        return {
            id: item.id,
            name: item.nombre,
            clase: item.clase_fondos[0]
        }
    });
    console.info('LARGO: ',JSON.stringify(procesado));
});










