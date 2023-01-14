var compliments = ["Your hair looks great!", "You have a great smile!", "You light up every room you walk into!", "Your third eye is WIDE OPEN.", "Nobody does kindness like you.", "Your jokes make me pee a little bit.", "You are like a chickpea: the best of all beans."];
compliments.push("You shine like the moon.");
console.log(compliments);
compliments.push("You are in need of a shower.");
console.log(compliments);
compliments.pop();
console.log(compliments);
compliments.unshift("You are a warrior Goddess.");
console.log(compliments);
compliments.shift();
console.log("---", compliments);
compliments.splice(1,1)[0];
console.log("----", compliments);
var newArray = compliments.slice(-4);
console.log(newArray)
console.log(compliments.includes("Your third eye is WIDE OPEN.", 0));
console.log(compliments.includes ("rad", 0));
console.log(compliments.indexOf("Nobody does kindness like you."));
