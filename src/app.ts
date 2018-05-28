class Animal {
  constructor(public name: string) {}
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// async function delay(ms: number): Promise<void> {
//   return new Promise<void>(resolve => {
//     setTimeout(resolve, ms);
//   });
// }

// async function main() {
//   const ms = 1000;
//   console.log(`Waiting for ${ms}ms...`);
//   await delay(ms);
//   console.log("Done!");
// }

// main();
