// const jsonString = '{"name" :"jhon", "age" : 20, "city": "london" }';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

const objectToconvert = {
    name: "alice",
    age: 24,
    city:"lucknow"
}

const json = JSON.stringify(objectToconvert);
console.log(json);

console.log(typeof(json));