var express = require('express');
// const unirest = require("unirest");
// const firebase = require('../sdk-connect/firebase');
const XTJ = require('../public/javascripts/xlsxToJson/index')
var multer = require('multer');

var router = express.Router();

const firestorte = firebase.firestore()

var uploads = multer();

router.post('/upload-file-excel', uploads.single('xlsx'), async function (req, res) {
    // res.send(req.files)
    console.log('1', req.file);

    await XTJ(req.file).then(_file => {
        _file.data.map((_data, key) => {
            const analysisUserAllCollect = firestorte.collection('analysis').doc('users').collection('all')
            let findEmail = analysisUserAllCollect.where("email", "==", `${_data["อีเมล"]}`);

            findEmail.get().then(function (doc) {
                if (!doc.exists) {
                    let newUserDoc = analysisUserAllCollect.doc();
                    newUserDoc.set({
                        id: newUserDoc.id,
                        name: _data["ชื่อ"] ? _data["ชื่อ"] : "",
                        email: _data["อีเมล"] ? _data["อีเมล"] : "",
                        type: _data["ประเภท"] ? _data["ประเภท"] : "",
                        phone: _data["เบอร์โทร"] ? _data["เบอร์โทร"] : "",
                        age: _data["อายุ"] ? _data["อายุ"] : "",
                        date: new Date()
                    })
                }
            })
        })

        res.redirect('/show/user/update');
    })
})

router.get('/upload', function (req, res) {
    // res.send(req.files)
    res.render('import-file-excel', { title: 'Express' });
})

router.get('/show/user/update', function (req, res) {
    // res.send(req.files)
    const analysisUserAllCollect = firestorte.collection('analysis').doc('users').collection('all')
    analysisUserAllCollect.doc().get().then(function (doc) {
        console.log(doc.data());
    })

    // res.render('import-file-excel', { title: 'Express' });
})

module.exports = router;