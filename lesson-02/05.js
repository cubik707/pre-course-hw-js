let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passport_copy = { ...passport };
passport_copy.name = "Ivan";
console.log(passport.name);
console.log(passport_copy.name );