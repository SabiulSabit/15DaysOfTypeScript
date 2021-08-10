const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
}

//tupes
const pepsi: [string, boolean, number] = ['brown', true, 40];

//or use type aliases
type Drink = [string, boolean, number];
//tupes
const pepsi_01: Drink = ['brown', true, 40];

//valid
pepsi[0] = "red";

// invalid
// pepsi[0] = 1;