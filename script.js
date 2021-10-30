function calculo() {

    //Atribuindo às variáveis os valores digitados no formulário
    var veiculo = document.getElementById('veiculo')
    var preco = document.getElementById('valor')
    var res = window.document.getElementById('res')

    //Tratando os dados
    var nomeVeiculo = String(veiculo.value)
    var valorVeiculo = Number(preco.value)
    var entrada = valorVeiculo / 2
    var parcelas = entrada / 60
    var parcelasJuros = parcelas + (parcelas * (70/100))

    //Replicando na tela
    res.innerText = `Promoção ${nomeVeiculo}
    Entrada de R$${entrada}
    + 60x de R$${parcelasJuros.toFixed(2)}`

}