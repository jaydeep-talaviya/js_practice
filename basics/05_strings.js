const name = "jaydeep"
const repoCount = 50

console.log(name + repoCount)

console.log(`${name}${repoCount}`)

const gameName = new String('Jaydeep talaviya')

console.log(gameName);
console.log(typeof gameName);
console.log(gameName.charAt(2));

console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());

console.log(gameName.indexOf("y"));

console.log(gameName.indexOf("f"));

console.log(gameName.indexOf("f"));

console.log(gameName.substring(0,7))
console.log("reverse",gameName.substring(-2,13))


//slice
console.log(gameName.slice(0,7))
console.log(gameName.slice(-8,13))

console.log(gameName.split(" "))