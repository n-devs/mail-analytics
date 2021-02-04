var express = require('express');
const firebase = require('../sdk-connect/firebase');
var router = express.Router();
const firestorte = firebase.firestore()
router.get('/user-all', async function (req, res) {
    // const findEmail = await analysisUserAllCollect.where("email", "==", `${_data["อีเมล"]}`).get();
    // res.send(req.files)
    const _arr_data = [];
    const analysisUserAllCollect = firestorte.collection('analysis').doc('users').collection('all')
    const analysisUserAllDoc = await analysisUserAllCollect.get();

    analysisUserAllDoc.forEach(doc => {
        _arr_data.push({ ...doc.data() })
        // console.log(doc.id, '=>', doc.data());
    });

    console.log(_arr_data);
    res.render('user-all', { data: _arr_data });


})

router.get('/api/user-all', async function (req, res) {
    // const findEmail = await analysisUserAllCollect.where("email", "==", `${_data["อีเมล"]}`).get();
    // res.send(req.files)
    const _arr_data = [];
    const analysisUserAllCollect = firestorte.collection('analysis').doc('users').collection('all')
    const analysisUserAllDoc = await analysisUserAllCollect.get();

    analysisUserAllDoc.forEach(doc => {
        _arr_data.push({ ...doc.data() })
        // console.log(doc.id, '=>', doc.data());
    });

    console.log(_arr_data);
    res.json(_arr_data)


})


module.exports = router;