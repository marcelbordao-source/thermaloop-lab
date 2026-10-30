# Modelo térmico educacional

O ThermaLoop Lab é uma simulação conceitual. Para cada cenário, assume-se uma fonte quente de temperatura constante, água líquida com densidade aproximada de 1 kg/L e calor específico de 4,186 kJ/(kg·°C).

## Equações

`T_ideal = T_entrada + ε × (T_fonte − T_entrada)`

`T_saida = min(T_fonte, T_ideal, 100 °C)`

`P = ṁ × cp × (T_saida − T_entrada)`

onde `ε` é a efetividade (0–1), `ṁ = vazão/60` em kg/s e `P` é apresentada em kW porque kJ/s = kW. A energia diária é `P × horas/dia`; a mensal considera 22 dias de operação. A equivalência financeira é energia térmica mensal multiplicada pela tarifa informada.

## Salvaguardas físicas

O controle da fonte cobre 45–2.000 °C. O modelo limita a saída à temperatura da fonte, impede potência negativa e, para não apresentar água líquida superaquecida como condição viável, limita a saída a 100 °C. A parcela acima desse limite não é contabilizada como potência recuperada: exigiria modelagem de ebulição, calor latente, pressão, vazão de vapor e equipamentos apropriados.

Acima de 100 °C, água em pressão atmosférica entra em ebulição. Acima da temperatura crítica da água (aproximadamente 374 °C), não há água líquida mesmo sob pressão. Fontes entre 500 e 2.000 °C demandariam análise de materiais, radiação, dilatação, vedação, isolamento e segurança. Esses cenários permanecem disponíveis para estudo conceitual, mas não são validados como instalações viáveis.

## Limitações

Não são considerados: capacidade térmica ou resfriamento da fonte, perdas para o ambiente, bomba e consumo auxiliar, incrustação, demanda efetivamente aproveitada, rendimentos do equipamento substituído ou dimensionamento mecânico. Consequentemente, a equivalência financeira não é uma economia comprovada.
