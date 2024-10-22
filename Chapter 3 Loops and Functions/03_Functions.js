const hello = () => {
  console.log("Hii, I am Jayesh");
};

function average(x, y) {
  return (x + y) / 2;
}

const sum = (p, q) => {
  return p + q;
};

const hii = () => {
  return "Hii";
};

let a = 1;
let b = 2;
let c = 3;

console.log("Average of a and b is ", average(a, b)); //1.5
console.log("Average of b and c is ", average(b, c)); //2.5
console.log("Average of a and c is ", average(a, c)); //2

console.log(sum(9, 7)); //16

hello(); //Hii, I am Jayesh

let v = hii();
console.log(v); //Hii
