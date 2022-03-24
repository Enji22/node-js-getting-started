
const patientZero = {
  name: 'Guy',
  emergencyContact: 'His Dog',
  isDiabetic: false,
  healthInsured: true,
  age: 25,
  ID: 0
};


  let patientList = [

      {
        name: 'Dude',
        emergencyContact: 'His gerbil',
        isDiabetic: false,
        healthInsured: true,
        age: 60,
        ID: 0
      },

      {
        name: 'Girl',
        emergencyContact: 'Her hot chips',
        isDiabetic: false,
        healthInsured: true,
        age: 22,
        ID: 1
      },

      {
        name: 'Man',
        emergencyContact: 'His lizard',
        isDiabetic: true,
        healthInsured: false,
        age: 38,
        ID: 2
      }
      
    ]


const express = require('express')
const path = require('path');
const res = require('express/lib/response');
const req = require('express/lib/request');
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/emr/', (req, res) => res.send(patientList))
  //.get('/emr/', (req, res) => res.send(patientList))
  .get('/emr/id', (req, res) => res.send(patientList[2]))
  
 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  