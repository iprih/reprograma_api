const alunas = require("../model/alunas.json")
const fs = require('fs')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 17 || id <= 0) {
      res.send("id não é valido")
    //res.redirect(301,"https://github.com/iprih")
    }
    console.log(id)    
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}


exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    if(!aluna){
        res.send("nao localizada")
    }
    const livros = aluna.livros //.map(test => aluna.livros)
    const titulos = livros.map(livro => livro.titulo)
    //console.log(livros)
    res.status(200).send(titulos)
}

exports.getSp = (req, res) => {
    
    const nasceuSp = alunas.filter(menina => menina.nasceuEmSp == "true")
    const meninasSP = nasceuSp.map(aluna => aluna.nome)
    
    res.status(200).send(meninasSP)
}

exports.getIdades = (req,res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    const dataNasc = aluna.dateOfBirth.split('/') //arrData = dataNasc.slip('/')
    const anoDeNasc = dataNasc[2]
    const mesDeNasc = dataNasc[1]
    const diaDeNasc = dataNasc[0]
    const idade = (calcularIdade(anoDeNasc,mesDeNasc,diaDeNasc))
    
    res.status(200).send({idade})
}

function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
      const now = new Date()
      const anoAtual = now.getFullYear()
      const mesAtual = now.getMonth() + 1
      const hoje = now.getDate()
    
      let idade = anoAtual - anoDeNasc
    
      if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
      }
      return idade
    }


exports.post = (req, res) => {
    const {nome, dateOfBirth, nasceuEmSp, id, livros} = req.body;
    alunas.push({nome, dateOfBirth, nasceuEmSp, id, livros});
    console.log(nome)

    fs.writeFile("./src/model/alunas.json", JSON.stringify(alunas), 'utf8', function(err){
    if (err) {
        return res.status(500).send({message: err});
    }
    console.log("The file was saved!");
    });

    return res.status(201).send(alunas);
}    


exports.postBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    if (!aluna){
        res.send("nao encontrei essa garota")
    }
    const { titulo, leu } = req.body;
    alunas[aluna.id -1].livros.push({ titulo, leu });
    fs.writeFile("./src/model/alunas.json", JSON.stringify(alunas), 'utf8', function(err){
        if(err){
            return res.status(500).send({ message: err });
        }
        console.log("The file was saved!");
    });
    return res.status(201).send(alunas[aluna.id -1].livros);

}



