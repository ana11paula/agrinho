function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
// Variáveis para as cores
let corCeu;
let corGrama;
let corTronco;
let corFolhas;
let corFlorCentro;
let corFlorPetalas;

function setup() {
  createCanvas(800, 600); // Cria um canvas de 800x600 pixels

  // Define as cores
  corCeu = color(135, 206, 235);   // Azul claro para o céu
  corGrama = color(124, 252, 0);   // Verde limão para a grama
  corTronco = color(139, 69, 19);  // Marrom para os troncos
  corFolhas = color(34, 139, 34);  // Verde escuro para as folhas
  corFlorCentro = color(255, 255, 0); // Amarelo para o centro da flor
  corFlorPetalas = color(255, 105, 180); // Rosa para as pétalas
}

function draw() {
  // Desenha o céu
  background(corCeu);

  // Desenha o chão (grama)
  noStroke(); // Remove o contorno
  fill(corGrama);
  rect(0, height / 2, width, height / 2); // Começa na metade da tela e vai até o fim

  // Desenha algumas árvores
  desenhaArvore(150, height / 2 - 50);
  desenhaArvore(400, height / 2 - 80);
  desenhaArvore(650, height / 2 - 30);

  // Desenha algumas flores
  desenhaFlor(100, height / 2 + 50);
  desenhaFlor(250, height / 2 + 100);
  desenhaFlor(500, height / 2 + 70);
  desenhaFlor(700, height / 2 + 120);
}

// Função para desenhar uma árvore
function desenhaArvore(x, y) {
  // Tronco
  fill(corTronco);
  rect(x, y, 30, 100); // x, y, largura, altura

  // Folhas (coroa da árvore)
  fill(corFolhas);
  ellipse(x + 15, y, 80, 80); // x, y, largura, altura (para o círculo)
  ellipse(x - 10, y + 20, 70, 70);
  ellipse(x + 40, y + 20, 70, 70);
}

// Função para desenhar uma flor
function desenhaFlor(x, y) {
  // Caule
  stroke(0, 100, 0); // Verde escuro para o caule
  strokeWeight(2);
  line(x, y, x, y + 50); // x1, y1, x2, y2

  // Pétalas
  noStroke();
  fill(corFlorPetalas);
  ellipse(x - 8, y - 8, 15, 15);
  ellipse(x + 8, y - 8, 15, 15);
  ellipse(x - 8, y + 8, 15, 15);
  ellipse(x + 8, y + 8, 15, 15);
  ellipse(x, y - 10, 15, 15);
  ellipse(x, y + 10, 15, 15);
  ellipse(x - 10, y, 15, 15);
  ellipse(x + 10, y, 15, 15);


  // Centro da flor
  fill(corFlorCentro);
  ellipse(x, y, 15, 15);
}