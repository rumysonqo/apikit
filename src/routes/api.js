const express = require('express');
const router = express.Router();

const con = require('../base');

router.get('/api/', (req, res) => {
    const { cad } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, programa, meta, sub_finalidad, clasificador from kit order by cod_meta, sub_finalidad limit 0,1000', [cad], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});

router.get('/api/programas', (req, res) => {
    con.query('select distinct(cod_programa), programa from kit order by cod_programa', (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});

router.get('/api/:cad', (req, res) => {
    const { cad } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, programa, meta, sub_finalidad, clasificador from kit where nom_item_fam like concat("%",?,"%") order by cod_meta, sub_finalidad limit 0,1000', [cad], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});

router.get('/api/kit_por_programa/:prg', (req, res) => {
    const { prg } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, meta, sub_finalidad, clasificador from kit where cod_programa = ? order by cod_meta, sub_finalidad limit 0,1000', [prg], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});



router.get('/api/kit_por_programa_cadena/:prg/:cad', (req, res) => {
    const { prg,cad } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, meta, sub_finalidad, clasificador from kit where cod_programa = ? and nom_item_fam like concat("%",?,"%") order by cod_meta, sub_finalidad limit 0,1000', [prg,cad], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});


module.exports = router;