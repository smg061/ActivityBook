
interface Duck {
    name:string;
    numLegs:number;
    makeSound : (sound:string)=> void;
}


const duck1: Duck = {
    name: "Martin",
    numLegs: 2,
    makeSound: (sound) => console.log(sound),
}

const duck2: Duck = {
    name: "Leroy",
    numLegs: 3,
    makeSound: (sound) => console.log(sound + duck2.name),
}

duck1.makeSound("1");

export const ducks = [duck1, duck2]

export default Duck