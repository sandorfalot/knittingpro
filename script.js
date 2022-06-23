// For the curious:
function setup() {
    createCanvas(windowWidth, windowHeight);
    var nouns = ['Sock', 'Scarf', 'Cowl', 'Mittens', 'Blanket', 'Wrap', 'Hat', 'Beanie', 'Sweater', 'Slipper', 'Glove', 'Cozy', 'Afghan', 'Snood', 'Shawlette', 'Shawl', 'Infinity Scarf', 'Headband', 'Vest', 'Leg warmer', 'Arm warmer', 'Tote', 'Scrubby', ];
    var noun = random(nouns); // select random word
    var adjectives = ['Sock yarn', 'Cabled', 'Bulky', 'Ribbed', 'Assymetrical', 'Lace', 'Modular', 'Worsted weight', 'Garter stitch', 'Ribbed ', 'Drop stitch', 'Ruffled', '10 Stitch', 'Chunky', 'Ombre', 'One Skein', 'Scrap Yarn', 'Double Knit', ]
    var adjective = random(adjectives);
    textSize(18);
    text("Your project is...", 0, 32);
    textAlign('center');
    textStyle('bold');
    textSize(48);
    text(adjective, windowWidth / 2, 48);
    text(noun, windowWidth / 2, 96);
}