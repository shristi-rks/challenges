//Alternate method to capitalize
/*function Capitalize(name) {
    if (name[0] >= "a" && name[0] <= "z") {
        name = name[0].toUpperCase() + name.slice(1).toLowerCase();
        return name;
    }
    return name[0] + name.slice(1).toLowerCase();

}*/
//capitalizing using arrow function
const Capitalize = name => {return name[0].toUpperCase() + name.slice(1).toLowerCase() };
console.log(Capitalize("shrisa"));
 
function capitalizeWord(heading) {
    const myArray = heading.split(" ");
    //Alternate method using for loop
    /*for (i = 0; i < myArray.length; i++) {
        //myArray[i] is string and is immutable
        myArray[i] = myArray[i][0].toUpperCase() + myArray[i].slice(1);
    }*/
    //using map
    const newArr = myArray.map(Capitalize);
    const newWord = newArr.join(" ");
    return newWord;
}
console.log(capitalizeWord("Hello world, welcome to the universe."));

   