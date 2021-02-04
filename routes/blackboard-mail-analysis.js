var express = require('express');
const unirest = require("unirest");
const firebase = require('../sdk-connect/firebase');
var router = express.Router();

const firestorte = firebase.firestore()
/* GET home page. */
router.get('/blackboard/mail/analysis', function (req, res, next) {
  const { name, email, date, phone, action, age } = req.query;
  const geoReq = unirest("GET", "http://gd.geobytes.com/GetCityDetails");
  const blackboardAnalysisCollect = firestorte.collection("analysis").doc('products').collection('blackboard')
  const blackboardAnalysisReadCollect = blackboardAnalysisCollect.doc('users').collection('read')
  const blackboardAnalysisReadDoc = blackboardAnalysisReadCollect.doc();
  geoReq.end(function (_geoRes) {
    blackboardAnalysisReadDoc.set({
      id: blackboardAnalysisReadDoc.id,
      name: name,
      email: email,
      phone: phone,
      age: age,
      action: action,
      start_time: date,
      end_time: new Date(),
      ..._geoRes.body
    }).then(function () {
      res.render('blackboard-mail-analysis', { "name": name, "email": email, "date": date, "phone": phone });
    })
  })

});

module.exports = router;
