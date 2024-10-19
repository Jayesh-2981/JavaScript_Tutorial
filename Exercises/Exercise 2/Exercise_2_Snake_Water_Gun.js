// Exercise 2 - Snake Water Gun

/*
Use Javascript to create a game of Snake, Water and Gun.
The game should ask you to enter S, W or G.
The computer should be able to randomly generate S, W or G and declare win or loss using alert.
Use confirm and prompt wherever required.
*/

// Solution =>

let user = prompt("Enter S, W or G");
let cpuInput = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuInput];

const match = (cpu, user) => {
  if (cpu === user) {
    return "Nobody";
  } else if (cpu === "S" && user === "W") {
    return "cpu";
  } else if (cpu === "S" && user === "G") {
    return "user";
  } else if (cpu === "W" && user === "G") {
    return "cpu";
  } else if (cpu === "W" && user === "S") {
    return "user";
  } else if (cpu === "G" && user === "W") {
    return "user";
  } else if (cpu === "G" && user === "S") {
    return "cpu";
  }
};

let result = match(cpu, user);
document.write(
  ` CPU: ${cpu} <br> User: ${user} <br> The winner is : ${result.toUpperCase()}`
);
