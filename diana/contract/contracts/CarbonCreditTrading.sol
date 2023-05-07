// SPDX-License-Identifier: MIT
// Declaração do contrato
pragma solidity ^0.8.0;

// Definição do contrato
contract CarbonCreditTrading {
    // Variáveis do contrato
    address public owner;
    mapping(address => uint) public balances;

    // Evento de transferência de tokens
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    // Construtor do contrato
    constructor() {
        owner = msg.sender;
    }

    // Função de compra de créditos de carbono
    function buyCarbonCredits(uint256 _amount) public payable {
        // Verifica se o valor enviado é igual ao valor necessário
        require(msg.value == _amount, "Valor incorreto");

        // Transfere créditos de carbono para o comprador
        balances[msg.sender] += _amount;

        // Emite evento de transferência
        emit Transfer(address(this), msg.sender, _amount);
    }

    // Função de venda de créditos de carbono
    function sellCarbonCredits(uint256 _amount) public {
        // Verifica se o comprador tem créditos de carbono suficientes
        require(balances[msg.sender] >= _amount, "Saldo insuficiente");

        // Transfere stablecoin para o vendedor
        payable(msg.sender).transfer(_amount);

        // Subtrai créditos de carbono do vendedor
        balances[msg.sender] -= _amount;

        // Emite evento de transferência
        emit Transfer(msg.sender, address(this), _amount);
    }
}
