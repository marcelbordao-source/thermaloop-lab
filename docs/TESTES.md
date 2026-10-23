# Testes e validação

## Automatizados

`tests.js` contém verificações do modelo:

1. cenário de referência: temperatura de saída e potência esperadas;
2. ausência de calor transferido quando a fonte está mais fria que a entrada;
3. limite de saída abaixo ou igual à fonte térmica.

Para executar quando o Node.js estiver disponível: `node tests.js`.

## Checklist manual recomendado

- Mova cada controle nos valores mínimo e máximo e confirme a atualização dos indicadores.
- Confirme que pausar afeta somente a animação.
- Complete cada nível do desafio e gere uma nova meta.
- Registre mais de um cenário, exporte CSV e escolha “Salvar como PDF” na impressão.
- Confira o layout em tela estreita e navegador moderno.

No ambiente de preparação deste projeto, Node.js e um servidor HTTP local não estavam disponíveis; por isso a execução automatizada e a inspeção visual no navegador precisam ser repetidas antes da publicação.
