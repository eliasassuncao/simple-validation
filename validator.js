class Validator {

    constructor() {
        this._inputCpf = document.querySelector('#cpf');
        this._inputData = document.querySelector('#data');
        this._inputTelefone = document.querySelector('#telefone');
        this._divMensagem = document.querySelector('#mensagem');
        this._mensagemCpf = '';
        this._mensagemData = '';
        this._mensagemTel = '';
    }

    valida(event) {
        event.preventDefault();
        this.validaCpf(this._inputCpf.value);
        this.validaData(this._inputData.value);
        this.validaTelefone(this._inputTelefone.value);
        this.exibeMensagem(this._mensagemCpf, this._mensagemData, this._mensagemTel);
    }

    validaCpf(cpf) {
        if(/\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)){
            console.log("CPF valido");
            this._mensagemCpf = "CPF validado com sucesso";
        }else {
            this._mensagemCpf = "CPF com formato invalido";
            //throw new Error("CPF com formato invalido");
        }
    }

    validaData(data){
        if(/\d{1,2}\/\d{1,2}\/\d{4}$/.test(data)){
            console.log("Data valida");
            this._mensagemData = "Data validada com sucesso";
        }else {
            this._mensagemData = "Data com formato invalido";
            //throw new Error("Data com formato invalido");
        }
    }

    validaTelefone(telefone){
        if(/\(\d{2}\)\d{4,5}\-\d{4}$/.test(telefone)) {
            console.log("Telefone valido");
            this._mensagemTel = "Telefone validado com sucesso";
        }else {
            this._mensagemTel = "Telefone com formato invalido";
            //throw new Error("Telefone com formato invalido");
        }
    }

    exibeMensagem(cpf, data, telefone) {
        document.getElementById("mensagemCpf").innerHTML = cpf;
        document.getElementById("mensagemData").innerHTML = data;
        document.getElementById("mensagemTel").innerHTML = telefone;
    }
}