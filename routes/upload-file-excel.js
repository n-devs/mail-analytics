var express = require('express');
// const unirest = require("unirest");
const firebase = require('../sdk-connect/firebase');
const XTJ = require('../public/javascripts/xlsxToJson/index')
var multer = require('multer');

var router = express.Router();

const firestorte = firebase.firestore()

var uploads = multer();

router.post('/upload-file-excel', uploads.single('xlsx'), async function (req, res) {
    // res.send(req.files)
    // console.log('1', req.file);

    await XTJ(req.file).then(_file => {
        const _arr_data = []
        // console.log(_file.data);
        _file.data.map(async (_data, key) => {
            const analysisUserAllCollect = firestorte.collection('analysis').doc('users').collection('all')
            const findEmail = await analysisUserAllCollect.where("email", "==", `${_data["อีเมล"]}`).get();

            if (findEmail.empty) {
                const newUserDoc = analysisUserAllCollect.doc();
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

            // findEmail.forEach(doc => {
            //     console.log(doc.id, '=>', doc.data());
            // });

            _arr_data.push({
                number: key,
                name: _data["ชื่อ"] ? _data["ชื่อ"] : "",
                email: _data["อีเมล"] ? _data["อีเมล"] : "",
                type: _data["ประเภท"] ? _data["ประเภท"] : "",
                phone: _data["เบอร์โทร"] ? _data["เบอร์โทร"] : "",
                age: _data["อายุ"] ? _data["อายุ"] : "",
                date: new Date()
            })
            // console.log(_file.data.length-1, "===", _arr_data.length);
            if ((_file.data.length - 1) === _arr_data.length) {
                console.log("end");

                // await res.redirect('/show/update/email');
                res.render('table-import-file', { data: _arr_data });

            }


        });




    })
})

router.get('/upload', function (req, res) {
    // res.send(req.files)
    res.render('import-file-excel', { title: 'Express' });
})

// router.get('/show/update/email', function (req, res) {

//     // res.send(req.files)
//     // const analysisUserAllCollect = firestorte.collection('analysis').doc('users').collection('all')
//     // analysisUserAllCollect.doc().get().then(function (doc) {
//     //     console.log(doc.data());
//     // })
//     res.render('table-import-file');


// })

module.exports = router;