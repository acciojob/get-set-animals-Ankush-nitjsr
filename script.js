//complete this code
class Animal {

	constructor(species) {
		this.species = species;
	}
	get species() {
		return this.species;
	}
	set species(species) {
		this.species = species;
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

const animal = new Animal("Human");
console.log(animal.makeSound());

const cat = new Cat("Cat");
cat.makeSound();
cat.purr();

const dog = new Dog("Dog");
dog.makeSound();
dog.bark();


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
