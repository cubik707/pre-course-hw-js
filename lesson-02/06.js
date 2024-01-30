let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddress_copy = {...passportWithAddress, address: {...passportWithAddress.address}};
passportWithAddress_copy.address.city = "Bobryisk";
console.log(passportWithAddress.address.city);
console.log(passportWithAddress_copy.address.city);