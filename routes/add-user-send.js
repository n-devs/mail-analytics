var express = require('express');
const firebase = require('../sdk-connect/firebase');
var router = express.Router();
const firestorte = firebase.firestore()
const mailer = require('../sdk-connect/mailer')
const emailTemplat = require('../public/javascripts/emailTemplat')


router.get('/add-user-send', async function (req, res) {
    // const findEmail = await analysisUserAllCollect.where("email", "==", `${_data["อีเมล"]}`).get();
    // res.send(req.files)
    var _arr_data = [];
    var _send_arr_data = [];
    var _hist_arr_data = [];
    const analysisUserAllCollect = firestorte.collection('analysis').doc('users').collection('all')
    const analysisUserAllDoc = await analysisUserAllCollect.get();

    const blackboardAnalysisCollect = firestorte.collection("analysis").doc('products').collection('blackboard')
    const blackboardAnalysisSendCollect = blackboardAnalysisCollect.doc('users').collection('send')

    const blackboardAnalysisHistoryCollect = blackboardAnalysisCollect.doc('users').collection('history')
    const blackboardAnalysisSendDoc = await blackboardAnalysisSendCollect.get();
    const blackboardAnalysisHistoryDoc = await blackboardAnalysisHistoryCollect.get();


    if (blackboardAnalysisHistoryDoc.empty) {
        console.log('No matching documents.');
        _hist_arr_data = []

    }
    blackboardAnalysisHistoryDoc.forEach(doc => {
        _hist_arr_data.push({ ...doc.data() })
        // console.log(doc.id, '=>', doc.data());
    });

    if (analysisUserAllDoc.empty) {
        console.log('No matching documents.');
        _arr_data = []

    }
    analysisUserAllDoc.forEach(doc => {
        _arr_data.push({ ...doc.data() })
        // console.log(doc.id, '=>', doc.data());
    });

    if (blackboardAnalysisSendDoc.empty) {
        console.log('No matching documents.');
        _send_arr_data = []

    }

    blackboardAnalysisSendDoc.forEach(doc => {
        _send_arr_data.push({ ...doc.data() })
        // console.log(doc.id, '=>', doc.data());
    });

    console.log(_arr_data);

    // const _all = []
    // res.render('add-user-send', { data: _arr_data,  toggleAll:function(data){
    //     data.map(_a => {
    //         _all.push(_a)

    //         if(data.length === _all.length) {
    //             console.log(_all);
    //         }
    //     })
    // }});
    // console.log(__dirname[1]);
    res.render('add-user-send', { data: _arr_data, addData: _send_arr_data, historyData: _hist_arr_data })


})


router.post('/api/add-user-send', function (req, res) {
    const { data } = req.body
    const blackboardAnalysisCollect = firestorte.collection("analysis").doc('products').collection('blackboard')
    const blackboardAnalysisSendCollect = blackboardAnalysisCollect.doc('users').collection('send')

    const _all = []
    data.map(async _data => {
        const findEmail = blackboardAnalysisSendCollect.where('email', '==', `${_data.email}`);

        const fE = await findEmail.get();
        if (fE.empty) {
            const blackboardAnalysisSendDoc = blackboardAnalysisSendCollect.doc();
            await blackboardAnalysisSendDoc.set({
                id: blackboardAnalysisSendDoc.id,
                uid: _data.uid ? _data.uid : "",
                name: _data.name ? _data.name : "",
                email: _data.email ? _data.email : "",
                type: _data.type ? _data.type : "",
                phone: _data.phone ? _data.phone : "",
                age: _data.age ? _data.age : "",
                date: new Date()
            })
        }
        fE.forEach(doc => {
            _all.push(doc.data())
            console.log(doc.id, '=>', doc.data());
        });

        if (_all.length === data.length) {
            console.log(_all);
            res.json(_all)
            // res.render('add-user-send', { addData: _arr_data })
        }
    })


})

router.post('/api/send-email', function (req, res) {
    const { data } = req.body
    const blackboardAnalysisCollect = firestorte.collection("analysis").doc('products').collection('blackboard')
    const blackboardAnalysisSendCollect = blackboardAnalysisCollect.doc('users').collection('send')
    const blackboardAnalysisHistoryCollect = blackboardAnalysisCollect.doc('users').collection('history')

    const _all = []


    data.map(async _data => {

        await emailTemplat(_data.name, _data.email, _data.age ? _data.age : "", _data.phone ? _data.phone : "", new Date()).then(async _html => {
            _all.push(_data)
            // console.log(_html);
            const info = await mailer.sendMail({
                from: "contact@blackboardapp.co",
                to: _data.email,
                subject: "Welcom TO Blackboard",
                html: _html,

            });

            if (info) {
                _all.push(info)
                const blackboardAnalysisHistoryDoc = blackboardAnalysisHistoryCollect.doc();
                await blackboardAnalysisHistoryDoc.set({
                    id: blackboardAnalysisHistoryDoc.id,
                    uid: _data.uid ? _data.uid : "",
                    name: _data.name ? _data.name : "",
                    email: _data.email ? _data.email : "",
                    type: _data.type ? _data.type : "",
                    phone: _data.phone ? _data.phone : "",
                    age: _data.age ? _data.age : "",
                    date: new Date()
                }).then(async function () {
                    console.log("add history");
                    const findEmail = await blackboardAnalysisSendCollect.where('email', '==', `${_data.email}`).get();
                    if (findEmail.empty) {
                        console.log("no  have");
                    }
                    findEmail.forEach(doc => {
                        blackboardAnalysisSendCollect.doc(doc.id).delete()
                        console.log(doc.id, '=>', doc.data());
                    });
                })
            }
        })

        if (_all.length === data.length) {
            console.log(_all);
            res.json(_all)
            // res.render('add-user-send', { addData: _arr_data })
        }
    })


})
module.exports = router;