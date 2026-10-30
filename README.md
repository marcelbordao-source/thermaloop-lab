# THERMALOOP LAB — Simulador de Recuperação Inteligente de Calor Residual

O ThermaLoop é um projeto acadêmico que investiga o reaproveitamento do calor residual gerado por máquinas e processos industriais. O **ThermaLoop Lab** é um simulador educacional interativo que demonstra como energia térmica normalmente desperdiçada pode ser recuperada para aplicações como o aquecimento de água.

O projeto integra transferência de calor, eficiência energética, automação, programação e sustentabilidade, em alinhamento com o Objetivo de Desenvolvimento Sustentável 7 (ODS 7) da Organização das Nações Unidas.

> Os valores exibidos são simulações computacionais didáticas. Não constituem medições experimentais de uma instalação industrial real, nem servem para dimensionamento de equipamento ou comprovação de economia.

## Objetivo

Permitir que estudantes, professores e visitantes compreendam, de maneira visual e interativa, o princípio da recuperação de calor residual.

## Funcionalidades

- controles de temperatura da fonte (45 a 2.000 °C) e da água de entrada, vazão, efetividade, horas de operação e tarifa de referência;
- diagrama animado de máquina, trocador, circuito de água e indicadores térmicos;
- cálculo em tempo real de temperatura de saída, variação de temperatura, potência (kW), energia (kWh) e equivalência financeira;
- gráfico da influência da vazão na potência recuperada;
- tutorial integrado **Como utilizar o ThermaLoop Lab**, com dicas e reinício;
- três níveis do **Desafio de Eficiência Energética** e geração de novas metas;
- registro e comparação de cenários, exportação em CSV e impressão/salvamento em PDF pelo navegador;
- documentação do modelo, limites e testes.

## Como utilizar

1. Abra `index.html` localmente ou acesse o endereço do GitHub Pages quando publicado.
2. Observe o circuito: a máquina fornece calor, o trocador transfere energia e a água recebe o aquecimento.
3. Ajuste os controles; todos os indicadores se atualizam automaticamente.
4. Leia potência em kW como taxa de transferência e energia em kWh como acumulado no período selecionado.
5. Selecione um nível do desafio e busque a meta sem exceder a temperatura máxima de saída.
6. Registre os cenários que desejar comparar e exporte o CSV ou use **Salvar PDF**.

## Metodologia e cálculos

O modelo aplica:

`T_saida = T_entrada + ε × (T_fonte − T_entrada)`

`P = ṁ × cp × ΔT`

em que `ε` é a efetividade, `ṁ` é a vazão mássica aproximada e `cp` da água é 4,186 kJ/(kg·°C). A vazão em L/min é aproximada a kg/min. A temperatura de saída é limitada à fonte e a 100 °C para representar água líquida em circuito não pressurizado; acima desse ponto, vapor, pressão e calor latente não são modelados. Consulte [a documentação do modelo](docs/MODELO-TERMICO.md) para hipóteses, unidades e limitações.

## Desenvolvimento local

É um site estático sem dependências: abra `index.html` em Chrome, Firefox, Edge ou Safari. Para testes automatizados, com Node.js instalado, execute:

```bash
node tests.js
```

Veja o [checklist de testes](docs/TESTES.md) antes de qualquer publicação.

## Estrutura

```text
thermaloop-lab/
├── index.html       # simulador estático, portátil
├── tests.js         # testes do modelo térmico
├── assets/          # recursos visuais próprios
├── css/             # reservada à modularização de estilos
├── js/              # reservada à modularização do código
└── docs/            # modelo térmico e validação
```

## Equipe acadêmica

**Projeto Integrador III/ACEx — Grupo ThermaLoop**

- Marcel Bordão Dias de Souza
- Eduardo Augusto Mano
- Isabel de Souza Melo
- Eduardo Junio Alves do Amaral
- Thiago Nascimento Ribeiro

Professor orientador: **Edson Antonio de Abreu**  
Instituição: **Centro Universitário Fundação Santo André — Santo André, São Paulo**.

## Licença

Nenhuma licença foi escolhida ou incluída. A definição e a publicação de uma licença dependem de autorização da equipe.
