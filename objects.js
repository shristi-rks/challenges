const  shortcut = {
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
    console.log(shortcut.studentnum());