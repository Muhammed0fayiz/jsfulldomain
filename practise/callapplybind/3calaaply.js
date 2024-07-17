let obj = {
    firstname: "muhammed",
    lastname: "fayiz",
};

let fullname = function (place,housename) {
    console.log(this.firstname + " " + this.lastname+' place is'+place+' housename is'+housename);
};

let obj2 = {
    firstname: "anad",
    lastname: "muhammed",
};


fullname.apply(obj,['ven','kk house'])