// for loop para crear numeros desde el 1 al 10
for (let i = 1; //expresion inicial - empieza desde el 1
    i <= 10;    //condicion - i menor o igual que 10
    i++) {      //expresion de incremento
    console.log(i)
}


//Ejercicio codificacion 31
for (let i = 1;
    i <= 6;
    i++) {
    console.log("Da ba dee da ba daa")
}
//192 - 
//de a 2 de 0 a 20
for (let i = 0;
    i <= 20;
    i += 2) {
    console.log(i)
}

for (let i = 100;
    i >= 0;
    i -= 10) {
    console.log(i)
}

//ejercicio codificacion 32
for (let i = 25;
    i >= 0;
    i -= 5) {
    console.log(i)
}

//194 - bucles sobre matrices
const animals = [
    "Aardvark",
    "Aardwolf",
    "African Elephant",
    "African Tree Pangolin",
    "Alligator",
    "Alpaca",
    "Anteater",
    "Antelope",
    "Ape(s)",
    "Arabian Horse",
    "Armadillo",
    "Arthropod(s)",
    "Asian Elephant",
    "Aye-Aye",
    "Baboon",
    "Badger",
    "Bandicoot",
    "Bangle Tiger",
    "Bat(s)",
    "Bearded Dragon",
    "Beaver",
    "Beluga Whale",
    "Bengal Tiger",
    "Big-Horned Sheep",
    "Billy Goat",
    "Bird(s)",
    "Bison",
    "Black Bear",
    "Black Footed Rhino",
    "Black Howler Monkey",
    "Black Rhino",
    "Blacktip Reef Shark",
    "Blue Shark",
    "Blue Whale",
    "Boar",
    "Bob-Cat",
    "Bonobo",
    "Bottlenose Dolphin",
    "Bottlenose Whale",
    "Brown Bear",
    "Buffalo",
    "Bull",
    "Bull frog",
    "Caiman Lizard",
    "Camel",
    "Capuchin Monkey",
    "Capybara",
    "Caribou",
    "Cat(s)",
    "Cattle",
    "Cheetah",
    "Chimpanzee",
    "Chinchilla",
    "Chipmunk",
    "Common Dolphin",
    "Common Seal",
    "Coral(s) and Anemone(s)",
    "Cougar",
    "Cow(s)",
    "Coyote",
    "Crocodile",
    "Crustacean(s)",
    "Dart Frog",
    "Deer",
    "Degus",
    "Dik-Dik",
    "Dingo",
    "Dog(s)",
    "Dogfish Shark",
    "Dolphin",
    "Donkey",
    "Door Mouse",
    "Dormouse",
    "Draft Horse",
    "Duckbill Platypus",
    "Dugong",
    "Dusky Shark",
    "Elephant",
    "Elephant Seal",
    "Elk",
    "Ermine",
    "Eurasian Lynx",
    "Ferret",
    "Fish(es)",
    "Florida Panther",
    "Flying Fox",
    "Fox",
    "Fresh Water Crocodile",
    "Frog",
    "Fur Seal",
    "Galapagos Land Iguana",
    "Galapagos Shark",
    "Galapagos Tortoise",
    "Gazelle",
    "Gecko",
    "Giant Anteater",
    "Giant Panda",
    "Gibbon",
    "Giraffe",
    "Goat",
    "Gopher",
    "Gorilla",
    "Gray Fox",
    "Gray Nurse Shark",
    "Gray Reef Shark",
    "Gray Whale",
    "Great White Shark",
    "Green Poison Dart Frog",
    "Green Sea Turtle",
    "Grizzly Bear",
    "Groundhog",
    "Guinea Pig",
    "Hairy-Nosed Wombat",
    "Hammerhead Shark",
    "Harbor Porpoise",
    "Harbor Seal",
    "Hare",
    "Harp Seal",
    "Hawaiian Monk Seal",
    "Hedgehog",
    "Hippopotamus",
    "Horn Shark",
    "Horse(s)",
    "Howler Monkey",
    "Humpback Whale",
    "Hyena",
    "Hyrax",
    "Iguana",
    "Iguanodon",
    "Impala",
    "Insect(s)",
    "Irrawaddy Dolphin",
    "Jackal",
    "Jackrabbit",
    "Jaguar",
    "Jellyfish",
    "Kangaroo",
    "Kermode Bear",
    "Killer Whale",
    "Koala",
    "Komodo Dragon",
    "Kookaburra",
    "Lama",
    "Lamb",
    "Lancelet",
    "Least Weasel",
    "Leatherback Sea Turtle",
    "Lemming",
    "Lemon Shark",
    "Lemur",
    "Leopard",
    "Leopard Gecko",
    "Leopard Seal",
    "Leopard Shark",
    "Lion",
    "Llama",
    "Loggerhead Turtles",
    "Lynx",
    "Mako Shark",
    "Manatee",
    "Manta Ray",
    "Mantis",
    "Marbled Salamander",
    "Marmot",
    "Marsupial(s)",
    "Meerkat",
    "Megamouth Shark",
    "Melon-Headed Whale",
    "Miniature Donkey",
    "Mink",
    "Minke Whale",
    "Mole",
    "Mole Salamander",
    "Mollusk(s)",
    "Mongoose",
    "Monitor Lizard",
    "Monk Seal",
    "Monkey",
    "Moose",
    "Mountain Lion",
    "Mouse",
    "Mule",
    "Muskox",
    "Muskrat",
    "Naked Mole Rat",
    "Narwhal",
    "Nautilus",
    "Newt",
    "Northern Right Whale",
    "Nurse Shark",
    "Nutria",
    "Nyala",
    "Ocelot",
    "Octopus",
    "Okapi",
    "Opossum",
    "Orangutan",
    "Orca",
    "Otter",
    "Ox",
    "Panda",
    "Panther",
    "Pig",
    "Pilot Whale",
    "Pine Marten",
    "Platypus",
    "Polar Bear",
    "Porcupine",
    "Porpoise",
    "Possum",
    "Potbellied Pig",
    "Potto",
    "Prairie Dog",
    "Proboscis Monkey",
    "Przewalski's Wild horse",
    "Puma",
    "Pygmy Hippopotamus",
    "Pygmy Right Whale",
    "Pygmy Sperm Whale",
    "Quokkas",
    "Quolls",
    "Rabbit",
    "Raccoon",
    "Rat",
    "Ray",
    "Red Fox",
    "Red Kangaroo",
    "Red Panda",
    "Red-Eyed Tree Frog",
    "Reef Shark",
    "Reindeer",
    "Rhino",
    "Rhinoceros",
    "Right Whale",
    "Ringed Seal",
    "Risso's Dolphin",
    "River Dolphin",
    "Salamander",
    "Sandbar Shark",
    "Scalloped Hammerhead Shark",
    "Sea Lion",
    "Sea Turtles",
    "Seal",
    "Sei Whale",
    "Shark",
    "Sheep",
    "Shortfin Mako Shark",
    "Siberian Tiger",
    "Silky Shark",
    "Skink",
    "Skunk",
    "Slender Loris",
    "Sloth",
    "Sloth Bear",
    "Snake(s)",
    "Snow Fox",
    "Snow Hare",
    "Snow Leopard",
    "Snow Monkey",
    "Somali Wild Ass",
    "Spectacled Bear",
    "Sperm Whale",
    "Spider Monkey",
    "Spiny Dogfish Shark",
    "Spotted Dolphin",
    "Squirrel",
    "Star-Nosed Mole",
    "Stellar Sea Lion",
    "Striped Dolphin",
    "Sun Bear",
    "Takin",
    "Tamarin",
    "Tapir",
    "Tasmanian Devil",
    "Tasmanian Tiger",
    "Terrapin",
    "Thresher Shark",
    "Tiger",
    "Tiger Salamander",
    "Tiger Shark",
    "Topi",
    "Tortoise",
    "Tree Frog",
    "Turtle",
    "Uakari",
    "Vampire Bat",
    "Vancouver Island Marmot",
    "Vervet Monkey",
    "Vicuna",
    "Vole",
    "Wallaby",
    "Walrus",
    "Warthog",
    "Water Buffalo",
    "Weasel",
    "Whale Shark",
    "Whale(s)",
    "White Rhino",
    "White Tailed Deer",
    "White-Beaked Dolphin",
    "Whitetip Reef Shark",
    "Wildcat",
    "Wildebeest",
    "Wobbegong Shark",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodchuck",
    "Yak",
    "Yellow-Bellied Marmot",
    "Zebra",
    "Zebu",
    "Zorilla"
]

// for (let i = 0;
//     i < animals.length;
//     i++){console.log(i, animals[i])}

// for (let i = animals.length -1;
//     i >= 0;
//     i--){console.log(i, animals[i])}

//ejercicio codificacion 33
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
people.splice(0, 5, "SCOOBY", "VELMA", "DAPHNE", "SHAGGY", "FRED")
for (let i = 1;
    i <= 5;
    i++) {
    console.log(i, people[i - 1])
}


// nested loops - bucles anidados
for (
    let i = 1; i <= 10; i++){console.log(`i es: ${i}`)
    for(let j = 1; j <= 3; j++){
        console.log(`     j es: ${j}`)
    }
}
//bucles con matrices
const planoAsientos = [
    ["kristen", "erik", "namita"],
    ["geoffrey", "juanita", "antonio", "kevin"],
    ["yuma", "sakura", "jack", "erika"]
]

for (let i = 0; i < planoAsientos.length; i++){
    const filaAsientos = planoAsientos[i];
    console.log(`Fila Asientos #${i + 1}`)
    for(let j = 0; j < filaAsientos.length; j++){
        console.log(filaAsientos[j])
    }
}

//while loops - bucles while
let cuenta = 0;

while(cuenta < 10){
    cuenta++;
    console.log(cuenta)
    // cuenta++;
}

//ejemplo de un bucle que no termina hasta que no pones la palabra que va
const secreto = "bebeHipo"
let invitado = prompt("ingresa el codigo secreto...")
while(invitado !== secreto){
    invitado = prompt("ingresa el codigo secreto...")
}
console.log("felicitaciones descubriste el codigo secreto!!")

//ejemplo de break point
let input = prompt("hola.. di algo!")
while(true){
    input = prompt(input);
    if (input.toLowerCase() === "deja de copiarme") break;
}
console.log("me gananste")
//ejemplo de break en loop for
for (let i = 0; i < 1000; i++){
    console.log(i);
    if(i === 60) break;
}