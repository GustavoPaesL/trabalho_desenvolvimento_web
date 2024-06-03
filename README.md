## Curso: Ciências da Computação
### Professor: RAUL CESAR RODRIGUES DA SILVA PAVANI
### Integrantes do grupo
- Danilo Rodrigues da Costa
- Felipe Santana Reliquias
- Felipe Silva Santarosa
- Gustavo Paes Leite
- Ismael Gonçalves Brandão

# Tarefa:
Fazer um site que calcula o rank de um personagem (tem uma referencia do visual em anexo, mas voces podem fazer diferente!). 
O site deve ter html, css e javascript (mas o foco vai ser no Js, nao vou me importar muito com o visual, mas sejam criativos com o css!).
O usuario deve digitar o numero de vitorias e o de derrotas em campos diferentes de input, e clicar em um botao para verificar o rank do heroi, e após clicar o site deve mostrar um texto com o rank atual do personagem, ex: "O herói esta no rank Safira"

## O calculo de rank deve ser feito da seguinte maneira: 
**Primeiro precisamos calcular a winrate do usuario:**  winrate = vitorias / derrotas <br>
**Com a winrate calculamos os pontos de rank:** pontosRank = vitorias * winrate <br>
Jogadores com uma winrate abaixo de 50% devem ganhar mais 15% a mais em pontos de rank
- Se o rank do jogador forem menor que 25, ele nao tem rank
- Entre 25 e 99 o jogador esta no rank Bronze
- Entre 100 e 499 o jogador esta no rank Prata
- Entre 500 e 1499 o jogador esta no rank Ouro
- Entre 1500 e 2999 o jogador esta no rank Safira
- Se o rank for maior ou igual a 3000 esta no rank Diamante 
