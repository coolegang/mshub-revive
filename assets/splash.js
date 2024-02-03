const splashes = `
😡
designed by maxxus and rob_dcg_YT
look behind you
911 what's you're emergency
my brain isn't braining
oh my days
splash.js
wSplash
your're'r
it's it's not its
`.split('\n'); splashes.splice(0, 1); splashes.splice(splashes.length - 1, 1);
// stuff after split() is so it doesnt think the empty space after/before the ` is a splash

document.getElementById("splash").innerHTML = splashes[Math.round(Math.random() * (splashes.length - 1))] + "<br><br>";
