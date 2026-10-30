# Testes e validação

## Automatizados

`tests.js` contém verificações do modelo:

1. cenário de referência: temperatura de saída e potência esperadas;
2. faixa ampliada da fonte: 95, 150, 300, 500, 1.000, 1.500 e 2.000 °C;
3. limite de água líquida: a saída e a potência sensível são limitadas a 100 °C, com alerta quando a saída ideal excede esse ponto;
4. ausência de calor transferido quando a fonte está mais fria que a entrada;
5. limite de saída abaixo ou igual à fonte térmica.

Para executar quando o Node.js estiver disponível: `node tests.js`.

## Checklist manual recomendado

- Mova cada controle nos valores mínimo e máximo e confirme a atualização dos indicadores.
- Confirme que pausar afeta somente a animação.
- Complete cada nível do desafio e gere uma nova meta.
- Registre mais de um cenário, exporte CSV e escolha “Salvar como PDF” na impressão.
- Confira o layout em tela estreita e navegador moderno.

No ambiente de preparação deste projeto, Node.js e um servidor HTTP local não estavam disponíveis; por isso a execução automatizada e a inspeção visual no navegador precisam ser repetidas antes da publicação.
