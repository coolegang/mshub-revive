const splashes = `
😡
designed by maxxus and chris
FNAF MOVIE!!!!! 
FIVE NIGHTS AT FREDDYS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
amogus
mogus
WE LIVE WE LOVE WE LIE!!!!!
look behind you
never gonna give you up never gonna let you down HAHA
911 what's you're emergency
my brain isn't braining
we die we hate we truth
my dog and cats are in you're walls, *cries*
grabbing ip... (joke)
oh my days
splash.js
wSplash
your're'r
it's it's not its
mmmmmmmm icecream so good
`.split('\n'); splashes.splice(0, 1); splashes.splice(splashes.length - 1, 1);
// stuff after split() is so it doesnt think the empty space after/before the ` is a splash

document.getElementById("splash").innerHTML = splashes[Math.round(Math.random() * (splashes.length - 1))] + "<br><br>";
