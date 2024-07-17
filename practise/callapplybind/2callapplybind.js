let obj = {
    firstname: "muhammed",
    lastname: "fayiz",
};

let fullname = function (hometown) {
    console.log(this.firstname + " " + this.lastname+'place is' +hometown);
};

let obj2 = {
    firstname: "anad",
    lastname: "muhammed",
};
fullname.call(obj,'ve')



