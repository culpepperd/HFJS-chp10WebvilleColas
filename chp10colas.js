var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
                 { name: "Orange", calories: 160, color: "orange", sold: 12101 },
                 { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
                 { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
                 { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
                 { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
                 { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
                 { name: "Water", calories: 0, color: "clear", sold: 62123 }
               ];

// LONG comparison function
// realize that in this case, we are passing objects as arguments,
// therefore we need to access the object parameters
function compareSold1(colaA, colaB) {
    if ( colaA.sold > colaB.sold ) {
        return 1;
    } else if ( colaA.sold === colaB.sold ) {
        return 0;
    } else {
        return -1;
    }
}

// CONCISE comparison function
// This works because we only need to return a number
// greater than zero, less than zero, or zero itself
function compareSold2(colaA, colaB) {
    return colaA.sold - colaB.sold;
}

function printProducts(products) {
    for ( var i = 0; i < products.length; i++ ) {
        console.log( "Name: " + products[i].name + 
                     ", Calories: " + products[i].calories + 
                     ", Color: " + products[i].color + 
                     ", Sold: " + products[i].sold);
    }
}

products.sort(compareSold2);
printProducts(products);
// console.log(products);






/*
var printAllColas = function (products) {
    for ( var i = 0; i < products.length; i++ ) {
        var item = products[i].name;
        printThis("Name: " + item);
        var item = products[i].calories;
        printThis("Calories: " + item);
        var item = products[i].color;
        printThis("Color: " + item);
        var item = products[i].sold;
        printThis("Sold: " + item);
    }
}

var printThis = function (item) {
    console.log(item);
}

printAllColas(products);
*/