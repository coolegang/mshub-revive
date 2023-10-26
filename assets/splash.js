const splashes = `
designed by maxxus and chris
"He has my full respect, he made us a full website, he's working hard, give him a raise" - chris
"He's the best guy ever" - chris
mogus
`.split('\n'); splashes.splice(0, 1); splashes.splice(splashes.length - 1, 1);
// stuff after split() is so it doesnt think the empty space after/before the ` is a splash

document.getElementById("splash").innerHTML = splashes[Math.round(Math.random() * (splashes.length - 1))] + "<br><br>";