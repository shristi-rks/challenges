
/*function Capitalize(name) {
    if (name[0] >= "a" && name[0] <= "z") {
        name = name[0].toUpperCase() + name.slice(1).toLowerCase();
        return name;
    }
    return name[0] + name.slice(1).toLowerCase();

}*/
const Capitalize = name => {return name[0].toUpperCase() + name.slice(1).toLowerCase() };
console.log(Capitalize("shrisa"));

/*const  shortcut = {
    course: "fullstack", students: 32, week: 5,
    studentnum() {
        return this.students
    }
};
    
    //objectvarname.propertyname;
    
    console.log(shortcut.students);
    
    shortcut.course = "front-end";
    console.log(shortcut.course);
    delete shortcut.week;
    console.log(shortcut);
    console.log(shortcut.studentnum());*/
 
function capitalizeWord(heading) {
    const myArray = heading.split(" ");
    /*for (i = 0; i < myArray.length; i++) {
        console.log(myArray[i][0]);
        myArray[i] = myArray[i][0].toUpperCase() + myArray[i].slice(1);
        console.log(myArray[i][0].toUpperCase());
        console.log(myArray);
    }*/
    const newArr = myArray.map(Capitalize);
    const newWord = newArr.join(" ");
    return newWord;
}
console.log(capitalizeWord("Hello world, welcome to the universe."));

   