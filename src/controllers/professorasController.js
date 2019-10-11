const professoras = require("../model/professoras.json")

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


//exports.get = (req, res) =>{
    // const profSemCpf = professoras.map(item => {
    //     item.cpf = "***********"
    //     //ou delete seria item.cpf
    //     return item
    // })
    // res.status(200).send(profSemCpf)

