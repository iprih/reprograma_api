const professoras = require("../model/professoras.json")
const fs = require('fs')


exports.get = (req, res) => {
    const arrProf = []
    for(let i = 0; i < professoras.length; i++){
        const semCpf ={}
        semCpf.id = professoras[i].id //aqui o novo objeto sera populado pelo professora 
        semCpf.nome = professoras[i].nome
        semCpf.especialidade = professoras[i].especialidade
        semCpf.signo = professoras[i].signo
        arrProf.push(semCpf)
    }
    console.log(req.url)
    res.status(200).send(arrProf)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const prof = professoras.find(prof = prof.id == id)
    delete prof.cpf
    res.status(200).send(prof)
}


exports.post = (req, res) => {
    const {id, nome, especialidade, signo, cpf} = req.body;
    professoras.push({id, nome, especialidade, signo, cpf});
    console.log(nome)

    fs.writeFile("./src/model/professoras.json", JSON.stringify(professoras), 'utf8', function(err){
    if (err) {
        return res.status(500).send({message: err});
    }
    console.log("The file was saved!");
    });

    return res.status(201).send(professoras);
}    
