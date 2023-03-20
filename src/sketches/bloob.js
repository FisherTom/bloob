function bloob(p) {
  let t = 0;
  const angles = 0.02;
  const noiseDiv = 300;

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.strokeWeight(0.5);
    p.stroke(105, 20, 80);
    p.noFill(234, 180, 134, 8);
    p.blendMode(p.ADD);
  };

  p.draw = () => {
    p.clear();
    p.background(140, 200, 160);
    const spacx = p.width / 2;
    const spacy = p.height / 2;
    p.background(240, 255, 255, 0);
    let mx = p.mouseX;
    let my = p.mouseY;

    for (let a = 0; a < p.TWO_PI; a += angles) {
      let x = spacx + (p.cos(a) * 500) / 5;
      let y = spacy + (p.sin(a) * 500) / 5;
      let dx = x - mx;
      let dy = y - my;

      // calc mouse distance from circle
      let mouseDistance = Math.sqrt(dx * dx + dy * dy);
      let mapDist = p.map(mouseDistance, 0, 1800, 1.5, 0);

      let n = p.noise(x / noiseDiv, y / noiseDiv, t);
      let r = p.map(n, 0, 1, -50, 100) * Math.pow(mapDist, 4);
      p.circle(x, y, r);
    }
    t += 0.005;
  };
}

export default bloob;
