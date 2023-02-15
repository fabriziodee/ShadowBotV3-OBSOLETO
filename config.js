global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ' , 'https://chat.whatsapp.com/DbXBmsydWBE1ZN3EoY0hRs' , 'https://chat.whatsapp.com/BW0P22xx7EGBTdH5IM851F' , 'https://chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC' , 'https://chat.whatsapp.com/H7NUXdrGlFg20ae3bqgwlb'] // No tiene utilidad 
global.channelYT = ['https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA'] // No tiene utilidad
global.owner = ['393518398856'] //Cambia los numeros por tu o tus numeros a los cuales te comtactaran y gestionaras el Bot
global.mods = ['393518398856'] //No tiene utilidad
global.prems = ['393518398856' , '393518398856', '393518398856'] //Podra usar algunos comandos del apartado de propietario

//Lo siguiente no tiene nada que ver con el funcionamiento del Bot:
//Nota: puoi contattarmi se hai bisogno di aiuto con qualcosa al +393518398856 (questo è il mio numero personale/reale, blocco le persone che non hanno problemi di installazione)
//=> Solo dubbi sull'installazione, problemi generali contattatemi al +393518398856
//=> NON aiuto a creare bot, né a crearli, né a modificarli 
//- Realizzerò tutorial su come modificare il Bot, i video sono disponibili sul mio canale YouTube all'indirizzo https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto.xyz',
  pencarikode: 'https://api.chipa.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  apialc: 'https://api-alc.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto.xyz': 'hardianto',
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.chipa.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862'
}

// Sticker WM
global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = 'The Shadow MoonClouds - Bot'


global.wm = '©The Shadow Brokers - Bot'
global.wait = '*Aspetta un secondo..*'


global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
