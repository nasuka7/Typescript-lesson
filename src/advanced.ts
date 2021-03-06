type Engineer = {
  name: string;
  role: string;
}

type Blogger = {
  name: string;
  follower: number;
}

type EngineerBlogger = Engineer & Blogger;

const quill: EngineerBlogger = {
  name: "Hamabe",
  role: "frontend",
  follower: 2000000
}

type NumberBoolean = number | boolean;
type StirngNumber = string | number;
type Mix = NumberBoolean & StirngNumber;

function toUpperCase(x: string): string; 
function toUpperCase(x: number): number; 
function toUpperCase(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}

const upperHello = toUpperCase(22);

type NomadWorker = Engineer | Blogger;

function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
    
  }
}

class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("Bow-wow");
  }
}
class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("Tweet-tweet");
  }
  fly() {
    console.log("flutter");  
  } 
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case "bird":
      pet.fly();
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

const input = document.getElementById("input") as HTMLInputElement;
input.value = "untitti";

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    }
  }
}

const douwloadedData: DownloadedData = {
  id:1
}
console.log(douwloadedData.user?.name?.first);

const userData = douwloadedData.user ?? "no-user";
type id = DownloadedData["id"]

function advancedFn(...args: [number, string, boolean?, ...number[]]) {
}

advancedFn(0, "hi", true);

