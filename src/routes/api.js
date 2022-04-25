const express = require('express');
const router = express.Router();

const con = require('../base');

router.get('/api/', (req, res) => {
    const { cad } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, programa, meta, sub_finalidad, clasificador from kit order by cod_meta, sub_finalidad limit 0,500', [cad], (err, rows, fields) => {
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

router.get('/api/clasificador', (req, res) => {
    con.query('select distinct(cod_clasificador), clasificador from kit order by cod_clasificador', (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});

router.get('/api/metas', (req, res) => {
    con.query('select distinct(cod_meta), meta from kit order by cod_meta', (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});

router.get('/api/prog_metas/:prg', (req, res) => {
    const { prg } = req.params;
    con.query('select distinct(cod_meta), meta from kit where cod_programa = ? order by cod_meta limit 0,500',[prg], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});

router.get('/api/tareas/:met', (req, res) => {
    const { met } = req.params;
    con.query('select distinct(cod_subfin), sub_finalidad from kit where cod_meta = ? order by cod_meta limit 0,500',[met], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});

router.get('/api/:cad', (req, res) => {
    const { cad } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, programa, meta, sub_finalidad, clasificador from kit where nom_item_fam like concat("%",?,"%") order by cod_meta, sub_finalidad limit 0,500', [cad], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});

router.get('/api/kit_por_programa/:prg', (req, res) => {
    const { prg } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, meta, sub_finalidad, clasificador from kit where cod_programa = ? order by cod_meta, sub_finalidad limit 0,500', [prg], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});

router.get('/api/kit_por_programa_meta/:prg/:met', (req, res) => {
    const { prg,met } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, meta, sub_finalidad, clasificador from kit where cod_programa = ? and cod_meta=? order by cod_programa, cod_meta, sub_finalidad limit 0,500', [prg, met], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});

router.get('/api/kit_por_meta_tarea/:met/:tar', (req, res) => {
    const { met,tar } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, meta, sub_finalidad, clasificador from kit where cod_meta = ? and cod_subfin=? order by cod_programa, cod_meta, sub_finalidad limit 0,500', [met, tar], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});


router.get('/api/kit_por_programa_meta_cadena/:prg/:met/:cad', (req, res) => {
    const { prg,met,cad } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, meta, sub_finalidad, clasificador from kit where cod_programa = ? and cod_meta=? and nom_item_fam like concat("%",?,"%") order by cod_programa, cod_meta, sub_finalidad limit 0,500', [prg, met, cad], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});

router.get('/api/kit_por_meta_tarea_cadena/:met/:tar/:cad', (req, res) => {
    const { met,tar,cad } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, meta, sub_finalidad, clasificador from kit where cod_meta = ? and cod_subfin=? and nom_item_fam like concat("%",?,"%") order by cod_programa, cod_meta, sub_finalidad limit 0,500', [met,tar,cad], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});



router.get('/api/kit_por_programa_cadena/:prg/:cad', (req, res) => {
    const { prg,cad } = req.params;
    con.query('select cod_item_fam, nom_item_fam, nivel, tipo_bien, tipo_calculo, meta, sub_finalidad, clasificador from kit where cod_programa = ? and nom_item_fam like concat("%",?,"%") order by cod_meta, sub_finalidad limit 0,500', [prg,cad], (err, rows, fields) => {
    if (!err) {
        res.json(rows);
    } else {
        console.log(err);
    }
});
});


module.exports = router;