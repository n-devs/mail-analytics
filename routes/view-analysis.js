var express = require('express');
const firebase = require('../sdk-connect/firebase');
var router = express.Router();
const firestorte = firebase.firestore()
router.get('/view-analysis', async function (req, res) {
    // const findEmail = await analysisUserAllCollect.where("email", "==", `${_data["อีเมล"]}`).get();
    // res.send(req.files)
    var _arr_data = [];
    const analysisViewCollect = firestorte.collection('analysis').doc('products').collection('blackboard').doc("users").collection('read')
    const analysisViewAllDoc = await analysisViewCollect.get();

    if (analysisViewAllDoc.empty) {
        _arr_data= []
    }

    analysisViewAllDoc.forEach(doc => {
        _arr_data.push({ ...doc.data() })
        // console.log(doc.id, '=>', doc.data());
    });

    console.log(_arr_data);
    res.render('view-analysis', { data: _arr_data });


})

router.get('/api/view-analysis', async function (req, res) {
    // const findEmail = await analysisUserAllCollect.where("email", "==", `${_data["อีเมล"]}`).get();
    // res.send(req.files)
     var _arr_data = [];
    const analysisViewCollect = firestorte.collection('analysis').doc('products').collection('blackboard').doc("users").collection('read')
    const analysisViewAllDoc = await analysisViewCollect.get();

    if (analysisViewAllDoc.empty) {
        _arr_data= []
    }
    
    analysisViewAllDoc.forEach(doc => {
        _arr_data.push({ ...doc.data() })
        // console.log(doc.id, '=>', doc.data());
    });


    console.log(_arr_data);
    res.json(_arr_data)


})


module.exports = router;