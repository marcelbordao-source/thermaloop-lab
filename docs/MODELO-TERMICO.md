# Modelo térmico educacional

O ThermaLoop Lab é uma simulação conceitual. Para cada cenário, assume-se uma fonte quente de temperatura constante, água líquida com densidade aproximada de 1 kg/L e calor específico de 4,186 kJ/(kg·°C).

## Equações

`T_saida = T_entrada + ε × (T_fonte − T_entrada)`

`P = ṁ × cp × (T_saida − T_entrada)`

onde `ε` é a efetividade (0–1), `ṁ = vazão/60` em kg/s e `P` é apresentada em kW porque kJ/s = kW. A energia diária é `P × horas/dia`; a mensal considera 22 dias de operação. A equivalência financeira é energia térmica mensal multiplicada pela tarifa informada.

## Salvaguardas físicas

O modelo limita a temperatura de saída à temperatura da fonte e não permite potência negativa. Assim, não representa água saindo mais quente que a fonte num trocador passivo.

## Limitações

Não são considerados: capacidade térmica ou resfriamento da fonte, perdas para o ambiente, bomba e consumo auxiliar, incrustação, demanda efetivamente aproveitada, rendimentos do equipamento substituído ou dimensionamento mecânico. Consequentemente, a equivalência financeira não é uma economia comprovada.
