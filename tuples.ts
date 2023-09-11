const names: string[] = [];

names.push("Dylan"); 

console.log(names);

// 2
// define our tuple
let ourTuple: [number, boolean, string];

// initialize incorrectly throws an error
ourTuple = [false, 'Coding God was mistaken', 5];

console.log(ourTuple);

// 3
// define our tuple
let ourTuple: [number, boolean, string];

// initialize incorrectly throws an error
ourTuple = [false, 'Coding God was mistaken', 5];

console.log(ourTuple);

// 4
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');

// 5
// Named tuple
const graph: [x: number, y: number] = [55.2, 41.3];

// 6
// destructing tuple
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;