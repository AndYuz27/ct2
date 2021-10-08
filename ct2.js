let http = require('http')
let lem = require('fs')
const url = require("url");
const PORT = 8000
function PicName({ 
    pic,
    name,
    date
    }) 
    {
    this.pic = pic;
    this.name = name;
};
let dat1;
lem.readFile('ppl2.csv', function (err, Data) {
    dat1 = Data .toString() .split(';;') .filter(e => e) .map(e => e.replace('\r\n','').split(';')).slice(0);
    let pers = dat1.map(([pic, name]) => new PicName({ pic, name}));
    console.log(pers.sort((a, b) => b.date - a.date).map(person => person.documents));
    console.log(pers);
    
});

const server = http.createServer((req, res) => {
    let img =lem.readFileSync(PicName)
    console.log(img)
      res.write(img);
      res.end()
  })
  
  
  server.listen(PORT, err =>{
      console.log("Server on " + PORT)
  })

  
// сделал не до конца (выдаёт ошибки), доделаю до понедельника