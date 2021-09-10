function goDiscord() {
  window.open("https://discord.gg/j9vUvhavXW");
}

var egg = new Egg("f,l,i,p,m,e", function () {
  document.getElementsByTagName('body')[0].style = 'filter: invert(1);';
}).listen();

var egg = new Egg("b,l,u,r,m,e", function () {
  document.getElementsByTagName('body')[0].style = 'filter: blur(10px);';
}).listen();

var egg = new Egg("s,a,t,u,r,a,t,e,m,e", function () {
  document.getElementsByTagName('body')[0].style = 'filter: saturate(100);';
}).listen();
