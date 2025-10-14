# Sistema de Rotação Motorizado

## Visão Geral

Este documento descreve como implementar um sistema de rotação motorizado simples para fazer o prato da vitrola girar de verdade. O sistema utiliza componentes básicos e acessíveis.

---

## Componentes Necessários

### 1. Motor DC com Redução
- **Tipo**: Motor DC com caixa de redução (gearbox motor)
- **Voltagem**: 3V a 6V (compatível com 2-4 pilhas AA)
- **RPM**: 30 a 100 RPM (quanto menor, melhor para vitrola)
- **Onde comprar**: 
  - Mercado Livre: "motor dc 3v com redução"
  - Lojas de eletrônica locais
  - Baú da Eletrônica
- **Preço estimado**: R$ 10-20

**Por que motor com redução?**
- Motores comuns giram muito rápido (milhares de RPM)
- Motores com caixa de redução já vêm com engrenagens que reduzem a velocidade
- Ideal para aplicações que precisam de rotação lenta

### 2. Fonte de Alimentação
- **Suporte para 2 pilhas AA**: R$ 3-5
- **Pilhas AA**: 2 unidades (fornecem 3V total)
- **Alternativa**: 3 pilhas AA (4,5V) para maior torque

### 3. Interruptor
- **Tipo**: Chave liga/desliga simples
- **Especificações**: SPST (Single Pole Single Throw)
- **Preço**: R$ 2-5

### 4. Fios e Conectores
- **Fio elétrico**: 30-50 cm (bitola 24-26 AWG)
- **Cores**: Vermelho (positivo) e Preto (negativo)
- **Preço**: R$ 2-5

### 5. Componentes Mecânicos

#### Polia/Roldana (no motor)
- **Material**: Papelão, tampinha plástica ou madeira
- **Diâmetro**: 2-3 cm
- **Função**: Transmitir movimento do motor para o prato
- **Como fazer**: Cole no eixo do motor

#### Anel de Transmissão (Correia)
- **Material**: Elástico de borracha ou anel O-ring
- **Tamanho**: Circunferência de 15-20 cm
- **Onde encontrar**: 
  - Lojas de ferragens
  - Lojas de material de escritório (elástico grosso)
  - Mercado Livre: "anel o-ring"
- **Alternativa caseira**: Corte uma câmara de ar de bicicleta

#### Eixo do Prato
- **Material**: Palito de churrasco ou haste de metal
- **Diâmetro**: 4-5 mm
- **Comprimento**: 5-6 cm

---

## Princípio de Funcionamento

```
[Motor] → [Polia pequena no motor] → [Correia de borracha] → [Borda do prato] → [Prato gira]
                (2 cm)                   (elástico)              (20 cm)         (lento)
```

### Como funciona:
1. Motor gira rápido (30-100 RPM)
2. Polia pequena no eixo do motor transmite movimento
3. Correia de borracha conecta a polia ao prato
4. O prato (maior) gira mais devagar que o motor
5. A diferença de tamanho entre polia e prato reduz ainda mais a velocidade

### Cálculo da Velocidade Final:
- Motor: 60 RPM
- Polia do motor: 2 cm de diâmetro
- Prato: 20 cm de diâmetro
- **Velocidade do prato**: 60 RPM × (2 cm / 20 cm) = **6 RPM**

> **Nota**: Vitrolas reais giram a 33⅓ ou 45 RPM. Este sistema será mais lento, mas funcional para um projeto escolar.

---

## Diagrama de Conexão Elétrica

```
Pilhas AA (3V)
     (+) ────┬──────────────→ [Interruptor] ──→ Motor (fio vermelho)
             │
     (-) ────┴──────────────────────────────→ Motor (fio preto)
```

### Passos de Conexão:
1. **Fio Vermelho (Positivo)**:
   - Do polo positivo das pilhas → Interruptor → Motor (+)

2. **Fio Preto (Negativo)**:
   - Do polo negativo das pilhas → Motor (-)

3. **Interruptor**:
   - Corta o circuito positivo
   - Permite ligar e desligar o motor

---

## Instruções de Montagem

### PASSO 1: Preparar o Motor

#### 1.1 Fixar a Polia no Motor
1. Pegue uma tampinha plástica pequena (2-3 cm)
2. Faça um furo central do tamanho do eixo do motor
3. Encaixe firmemente no eixo
4. Cole com cola quente para garantir
5. Certifique-se de que está bem centralizada

#### 1.2 Posicionar o Motor
1. O motor ficará **dentro** da caixa, abaixo do prato
2. Posição: Lateral, com o eixo apontando para cima
3. Distância: A polia deve ficar próxima à borda do prato (1-2 cm)

### PASSO 2: Preparar o Prato

#### 2.1 Criar o Eixo Central
1. Use um palito de churrasco ou haste
2. Faça um furo no centro do prato (papelão)
3. Encaixe o eixo no furo
4. Cole com cola quente na parte inferior

#### 2.2 Criar o Suporte do Eixo
1. Faça uma base com papelão (círculo de 5 cm)
2. Faça um furo central
3. Insira o eixo do prato
4. Cole a base no fundo da caixa, abaixo do recorte circular
5. O eixo deve ficar perpendicular (90°) ao prato

**Dica**: Use uma tampa de garrafa como bucha/mancal no furo:
- Faça um furo na tampa
- Insira o eixo através dela
- Isso reduz atrito e ajuda o prato a girar melhor

### PASSO 3: Instalar o Motor

#### 3.1 Fixar o Motor na Estrutura
1. Posicione o motor na lateral interna da caixa
2. A polia do motor deve ficar no mesmo nível do prato
3. Distância da polia à borda do prato: 0,5-1 cm
4. Fixe com cola quente ou fita dupla face
5. Teste se está firme

#### 3.2 Verificar Alinhamento
1. A polia do motor e a borda do prato devem estar alinhadas
2. Não pode haver desnível vertical
3. Ajuste a altura do motor se necessário (use calços de papelão)

### PASSO 4: Instalar a Correia

#### 4.1 Conectar a Transmissão
1. Coloque o elástico/anel ao redor da polia do motor
2. Estique até a borda do prato
3. O elástico deve tocar a lateral do prato com leve pressão
4. **Importante**: Não deixe muito apertado (força demais no motor)
5. **Importante**: Não deixe muito frouxo (vai escorregar)

#### 4.2 Testar Rotação Manual
1. Sem ligar o motor, gire o prato com a mão
2. A correia deve mover a polia do motor
3. O prato deve girar suavemente, sem travar
4. Se estiver duro, verifique:
   - Atrito no eixo (adicione lubrificante ou pó de giz)
   - Correia muito apertada
   - Eixo não está perpendicular

### PASSO 5: Fazer as Conexões Elétricas

#### 5.1 Preparar os Fios
1. Corte 3 fios:
   - 2 fios de 15 cm (para o motor)
   - 1 fio de 10 cm (para o interruptor)
2. Descasque 1 cm das pontas
3. Use fio vermelho para (+) e preto para (-)

#### 5.2 Conectar o Suporte de Pilhas
1. Fio vermelho do suporte → um terminal do interruptor
2. Fio preto do suporte → fio preto do motor
3. Outro terminal do interruptor → fio vermelho do motor
4. Use fita isolante para isolar as conexões

#### 5.3 Fixar os Componentes
1. **Suporte de pilhas**: Cole no fundo interno da caixa
2. **Interruptor**: Faça um furo no painel frontal e encaixe
3. **Fios**: Cole ao longo das bordas internas com fita

### PASSO 6: Teste Final

#### 6.1 Primeiro Teste
1. Insira as pilhas
2. Ligue o interruptor
3. **O motor deve girar**
4. **O prato deve girar lentamente**

#### 6.2 Ajustes
- **Se o motor não gira**: 
  - Verifique as conexões elétricas
  - Teste as pilhas (use um LED ou outro aparelho)
  - Verifique polaridade (+/-)
  
- **Se o prato não gira**:
  - Ajuste a tensão da correia
  - Verifique se há atrito excessivo no eixo
  - Confirme que a correia não está escorregando
  
- **Se gira muito rápido**:
  - Use motor com RPM menor
  - Aumente o diâmetro da polia do motor (correia fica mais perto do centro)
  
- **Se gira muito devagar**:
  - Use motor com RPM maior
  - Use 3 pilhas em vez de 2 (4,5V)
  - Diminua o atrito no eixo

---

## Diagrama de Montagem

```
Vista Lateral (corte):

                 [Acrílico - Tampa]
    ═══════════════════════════════════════
    │                                     │
    │     ┌─────────────┐                │
    │     │   PRATO     │ ← Disco gira  │
    │     │  (papelão)  │                │
    │     └──────┬──────┘                │
    │            │ eixo                   │
    ├────────────┼──────────────────────┤
    │            ↓                        │
    │         [  ⊙  ] ← Mancal/bucha    │
    │            |                        │
    │            |                        │
    │    ┌─────┐ |                       │
    │    │MOTOR├──→ polia                │
    │    └─────┘   ╲                     │
    │               ╲ correia            │
    │                ╲(elástico)         │
    │                 ╲                  │
    │                  ╲                 │
    │                   └────────────────│ (borda do prato)
    │                                     │
    │  [Pilhas] ─→ [Interruptor]        │
    └─────────────────────────────────────┘
```

---

## Melhorias Opcionais

### 1. Controle de Velocidade
- Adicione um potenciômetro (R$ 3-5) para variar a velocidade
- Conecte em série com o motor
- Permite ajustar a rotação

### 2. Luz LED Indicadora
- LED simples conectado em paralelo com o motor
- Indica quando está ligado
- Use um resistor de 220Ω em série

### 3. Suporte Anti-vibração
- Cole feltro ou espuma embaixo do motor
- Reduz ruído e vibração
- Melhora a qualidade do movimento

### 4. Sistema de Polia Dupla
- Use duas polias no motor (uma maior, uma menor)
- Permite alternar entre velocidades (33 e 45 RPM)
- Mais complexo, mas mais realista

---

## Resolução de Problemas

| Problema | Causa Provável | Solução |
|----------|----------------|---------|
| Motor não gira | Conexões soltas | Verifique todos os fios |
| | Pilhas fracas | Troque as pilhas |
| | Polaridade invertida | Inverta os fios do motor |
| Prato não gira | Correia solta | Aperte a correia |
| | Atrito no eixo | Lubrifique com grafite/giz |
| | Motor sem força | Use 3 pilhas ou motor mais forte |
| Correia sai do lugar | Desalinhamento | Alinhe motor e prato |
| | Correia muito frouxa | Troque por elástico mais curto |
| Prato trava | Eixo empenado | Troque o eixo |
| | Bucha apertada demais | Alargue o furo |
| Vibração excessiva | Prato desbalanceado | Balance com pesos pequenos |
| | Motor mal fixado | Reforce a fixação |
| Gira muito rápido | Motor muito rápido | Use motor com menos RPM |
| | Polia muito grande | Use polia menor |

---

## Alternativa Mais Simples (Sem Correia)

Se o sistema de correia parecer complexo, aqui vai uma alternativa:

### Sistema de Fricção Direta
1. **Cole uma roda de borracha** (tampinha + fita isolante) no eixo do motor
2. **Posicione o motor inclinado** de forma que a roda toque diretamente na borda inferior do prato
3. **A fricção** entre a roda e o prato faz o prato girar
4. Mais simples, mas gera mais atrito e pode ser menos eficiente

---

## Considerações de Segurança

⚠️ **IMPORTANTE**:
- Use apenas pilhas (não conecte na tomada)
- Não deixe o motor funcionar por muito tempo sem supervisão
- Verifique se não há fios expostos
- Se o motor esquentar demais, desligue imediatamente
- Crianças devem usar sob supervisão de adultos

---

## Custos do Sistema Motorizado

| Item | Preço |
|------|-------|
| Motor DC com redução | R$ 10-20 |
| Suporte de pilhas | R$ 3-5 |
| Pilhas AA (2 unidades) | R$ 5-8 |
| Interruptor | R$ 2-5 |
| Fios | R$ 2-5 |
| Elástico/anel | R$ 2-5 |
| **TOTAL** | **R$ 24-48** |

---

## Vídeos e Referências

Para visualizar melhor como funciona, procure no YouTube:
- "DIY record player motor"
- "motor dc com polia"
- "sistema de transmissão por correia"
- "turntable DIY"

---

## Conclusão

O sistema motorizado adiciona um toque especial ao projeto, tornando-o parcialmente funcional. Embora não toque música de verdade, ver o disco girando traz muito mais realismo à vitrola!

**Dica Final**: Comece sem o motor, monte toda a estrutura primeiro. Depois, se quiser, adicione o sistema motorizado como uma melhoria. Assim você garante que a estrutura está pronta antes de lidar com a parte elétrica.

**Boa sorte com seu projeto motorizado! ⚙️🎵**

