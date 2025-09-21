// Controles: pausar animación y mostrar/ocultar semillas
const svg = document.getElementById('ramo');
const btnA = document.getElementById('toggleAnim');
const btnS = document.getElementById('toggleSeeds');

let paused = false;
btnA.addEventListener('click', () => {
  paused = !paused;
  svg.querySelectorAll('.sway, .pulse').forEach(el => el.style.animationPlayState = paused ? 'paused' : 'running');
  btnA.textContent = paused ? 'Reanudar animación' : 'Pausar animación';
});

let seedsVisible = true;
btnS.addEventListener('click', () => {
  seedsVisible = !seedsVisible;
  svg.querySelectorAll('.core circle[r="2.6"]').forEach(el => el.style.display = seedsVisible ? 'block' : 'none');
  btnS.textContent = seedsVisible ? 'Semillas OFF' : 'Semillas ON';
});