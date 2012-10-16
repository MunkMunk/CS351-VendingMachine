function initializeMachine() {
    alert("initializing Machine");
    document.write("start Initialize");
    
    var arrayA = new Array();
    var arrayB = new Array();
    var arrayC = new Array();
    var arrayD = new Array();
    var arrayE = new Array();
    
    document.write("Middle");
    arrayA[0] = new productObject('Coke', 'a1', 1.25);
    document.write("Array A");
    arrayA[1] = new productObject('Pepsi', 'a2', 1.25);
    arrayA[2] = new productObject('DrPepper', 'a3', 1.25);
    document.write("ArrayA 2");
    
    document.getElementById("a1").innerHTML = arrayA[0].name + ' ' + arrayA[0].price;
    
    document.write("end Initialize");
}

var keypadAlpha = '';
var keypadNumeral = '';

function setAlpha(alpha) {
    keypadAlpha = alpha;
}

function setNumeral(numeral) {
    keypadNumeral = numeral;
}

function vend() {
    
    if (keypadAlpha == '' && keypadNumeral == '') {
        alert('no vend');
    } else if (keypadAlpha == '') {
        alert('no vend');
    } else if (keypadNumeral == '') {
        alert('no vend');
    } else {
        alert('Vending ' + keypadAlpha + keypadNumeral);
        makeChange(1.25);
    }
}

var money = 0;

var totalProfits = 0;

function addMoney(m) {
    if (m == 'penny') {
        money += .01;
    }
    else if (m == 'nickel') {
        money += .05;
    }
    else if (m == 'dime') {
        money += .10;
    }
    else if (m == 'quarter') {
        money += .25;
    }
    else if (m == 'dollar') {
        money += 1.00;
    }
    //alert(money.toString());
    
    document.getElementById("moneyID").innerHTML = money.toFixed(2);
    
}

function makeChange(c) {
    
    var pennies = 0;
    var nickels = 0;
    var dimes = 0;
    var quarters = 0;
    var change = money - c;

    totalProfits += c;

    document.getElementById("changeID").innerHTML= change.toFixed(2);
    
    while(change > .01) {
        if (change >= .25) {
            quarters++;
            change -= .25;
            document.getElementById("changeQ").innerHTML = 'quarters : ' + quarters;
        }
        else if (change >= .1) {
            dimes++;
            change -= .1;
            document.getElementById("changeD").innerHTML = 'dimes : ' + dimes;
        }
        else if (change >= .05) {
            nickels++;
            change -= .05;
            document.getElementById("changeN").innerHTML = 'nickels : ' + nickels;
        }
        else if (change >= .01) {
            pennies++;
            change -= .01;
            document.getElementById("changeP").innerHTML = 'pennies :' + pennies;
        }
    }
    
    //document.getElementById("changeP").innerHTML = 'pennies :' + pennies;
    //document.getElementById("changeN").innerHTML = 'nickels : ' + nickels;
    //document.getElementById("changeD").innerHTML = 'dimes : ' + dimes;
    //document.getElementById("changeQ").innerHTML = 'quarters : ' + quarters;
    
    money = 0;
    document.getElementById("moneyID").innerHTML= money.toFixed(2);
    
}

function productObject (n, ID, p) {
    this.name = n;
    this.vendorID = ID;
    this.price = p;
    
    //put functions here
    // this.FunctionName = function() { }
    
}


