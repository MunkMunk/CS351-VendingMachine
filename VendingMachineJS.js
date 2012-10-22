var maxQuantity = 25;

var productArrayA = new Array();
var productArrayB = new Array();
var productArrayC = new Array();
var productArrayD = new Array();
var productArrayE = new Array();

function initializeMachine() {

    productArrayA[0] = new productObject('Coke', 'a1', 1.25, maxQuantity);
    productArrayA[1] = new productObject('Pepsi', 'a2', 1.25, maxQuantity);
    productArrayA[2] = new productObject('DrPepper', 'a3', 1.25, maxQuantity);
    productArrayA[3] = new productObject('Diet Coke', 'a4', 1.25, maxQuantity);
    productArrayA[4] = new productObject('Diet DrPepper', 'a5', 1.25, maxQuantity);
    productArrayA[5] = new productObject('Sprite', 'a6', 1.25, maxQuantity);
    productArrayA[6] = new productObject('Sierra Mist', 'a7', 1.25, maxQuantity);
    productArrayA[7] = new productObject('Gatorade', 'a8', 1.50, maxQuantity);
    productArrayA[8] = new productObject('Powerade', 'a9', 1.50, maxQuantity);
    productArrayA[9] = new productObject('Bottled Water', 'a0', 1.00, maxQuantity);
    
    document.getElementById("a1").innerHTML = productArrayA[0].name + ' ' + productArrayA[0].price.toFixed(2);
    document.getElementById("a2").innerHTML = productArrayA[1].name + ' ' + productArrayA[1].price.toFixed(2);
    document.getElementById("a3").innerHTML = productArrayA[2].name + ' ' + productArrayA[2].price.toFixed(2);
    document.getElementById("a4").innerHTML = productArrayA[3].name + ' ' + productArrayA[3].price.toFixed(2);
    document.getElementById("a5").innerHTML = productArrayA[4].name + ' ' + productArrayA[4].price.toFixed(2);
    document.getElementById("a6").innerHTML = productArrayA[5].name + ' ' + productArrayA[5].price.toFixed(2);
    document.getElementById("a7").innerHTML = productArrayA[6].name + ' ' + productArrayA[6].price.toFixed(2);
    document.getElementById("a8").innerHTML = productArrayA[7].name + ' ' + productArrayA[7].price.toFixed(2);
    document.getElementById("a9").innerHTML = productArrayA[8].name + ' ' + productArrayA[8].price.toFixed(2);
    document.getElementById("a0").innerHTML = productArrayA[9].name + ' ' + productArrayA[9].price.toFixed(2);

    productArrayB[0] = new productObject('100Grand', 'b1', 1.00, maxQuantity);
    productArrayB[1] = new productObject('Snickers', 'b2', 1.00, maxQuantity);
    productArrayB[2] = new productObject('Twix', 'b3', 1.00, maxQuantity);
    productArrayB[3] = new productObject('Kit-Kat', 'b4', 1.00, maxQuantity);
    productArrayB[4] = new productObject('M&Ms', 'b5', 1.00, maxQuantity);
    productArrayB[5] = new productObject('BabyRuth', 'b6', 1.00, maxQuantity);
    productArrayB[6] = new productObject('PayDay', 'b7', 1.00, maxQuantity);
    productArrayB[7] = new productObject('MilkyWay', 'b8', 1.00, maxQuantity);
    productArrayB[8] = new productObject('Reese\'s', 'b9', 1.00, maxQuantity);
    productArrayB[9] = new productObject('Butterfinger', 'b0', 1.00, maxQuantity);
    
    document.getElementById("b1").innerHTML = productArrayB[0].name + ' ' + productArrayB[0].price.toFixed(2);
    document.getElementById("b2").innerHTML = productArrayB[1].name + ' ' + productArrayB[1].price.toFixed(2);
    document.getElementById("b3").innerHTML = productArrayB[2].name + ' ' + productArrayB[2].price.toFixed(2);
    document.getElementById("b4").innerHTML = productArrayB[3].name + ' ' + productArrayB[3].price.toFixed(2);
    document.getElementById("b5").innerHTML = productArrayB[4].name + ' ' + productArrayB[4].price.toFixed(2);
    document.getElementById("b6").innerHTML = productArrayB[5].name + ' ' + productArrayB[5].price.toFixed(2);
    document.getElementById("b7").innerHTML = productArrayB[6].name + ' ' + productArrayB[6].price.toFixed(2);
    document.getElementById("b8").innerHTML = productArrayB[7].name + ' ' + productArrayB[7].price.toFixed(2);
    document.getElementById("b9").innerHTML = productArrayB[8].name + ' ' + productArrayB[8].price.toFixed(2);
    document.getElementById("b0").innerHTML = productArrayB[9].name + ' ' + productArrayB[9].price.toFixed(2);
}

var keypadAlpha = '-';
var keypadNumeral = '-';

function setAlpha(alpha) {
    keypadAlpha = alpha;
    document.getElementById("alpha").innerHTML = alpha;
}

function setNumeral(numeral) {
    keypadNumeral = numeral;
    document.getElementById("numeral").innerHTML = numeral;
}

function vend() {
    var i = keypadNumeral - 1;
    if (keypadNumeral == 0) {
        i = 9;
    }
    if (keypadAlpha == '-' && keypadNumeral == '-') {
        alert('No Vend : please make correct selection');
    } else if (keypadAlpha == '-') {
        alert('No Vend : please make correct selection');
    } else if (keypadNumeral == '-') {
        alert('No Vend : please make correct selection');
    } else {
        if (keypadAlpha == 'A') {
            if (productArrayA[i].quantity >= 1 && money >= productArrayA[i].price) {
                
                productArrayA[i].order += 1;
                productArrayA[i].quantity -= 1;
                document.getElementById("output").innerHTML += "Vending " + productArrayA[i].name + "\n";
                makeChange(productArrayA[i].price);
                document.getElementById("profit").innerHTML = totalProfits.toFixed(2);
            }
            else {
                alert('No Vend : Please insert currency')
            }
        }
        else if (keypadAlpha == 'B') {
            if (productArrayB[i].quantity >= 1 && money >= productArrayB[i].price) {
                productArrayB[i].order += 1;
                productArrayB[i].quantity -= 1;
                document.getElementById("output").innerHTML += "Vending " + productArrayB[i].name + "\n";
                makeChange(productArrayB[i].price);
                document.getElementById("profit").innerHTML = totalProfits.toFixed(2);
            }
            else {
                alert('No Vend : Please insert currency')
            }
        }
        else if (keypadAlpha == 'C') {
            
        }
        else if (keypadAlpha == 'D') {
            
        }
        else if (keypadAlpha == 'E') {
            
        }
    }
}

function sendOrder(){
    for (var i = 0; i < 10; i++) {
        if (productArrayA[i] != null){
        productArrayA[i].reOrder();
        }
    }
    for (var i = 0; i < 10; i++) {
        if (productArrayB[i] != null){
        productArrayB[i].reOrder();
        }
    }
    for (var i = 0; i < 10; i++) {
        if (productArrayC[i] != null){
        productArrayC[i].reOrder();
        }
    }
    for (var i = 0; i < 10; i++) {
        if (productArrayD[i] != null){
        productArrayD[i].reOrder();
        }
    }
    for (var i = 0; i < 10; i++) {
        if (productArrayE[i] != null){
        productArrayE[i].reOrder();
        }
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
    
    while(change >= .01) {
        if (change >= .25) {
            quarters++;
            change -= .25;
            document.getElementById("changeQ").innerHTML = quarters + ' quarters';
        }
        else if (change >= .1) {
            dimes++;
            change -= .1;
            document.getElementById("changeD").innerHTML = dimes + ' dimes';
        }
        else if (change >= .05) {
            nickels++;
            change -= .05;
            document.getElementById("changeN").innerHTML = nickels + ' nickels';
        }
        else if (change >= .01) {
            pennies++;
            change -= .01;
            document.getElementById("changeP").innerHTML = pennies + ' pennies';
        }
    }
    
    money = 0;
    document.getElementById("moneyID").innerHTML= money.toFixed(2);
    
}

function productObject (n, ID, p, q) {
    this.name = n;
    this.vendorID = ID;
    this.price = p;
    this.quantity = q;
    this.order = 0;
    
    //put functions here
    // this.FunctionName = function() { }
    this.reOrder = function reOrder() {
        document.getElementById("output").innerHTML += "ReOrdering " + this.order + " " + this.name + "\n";
        this.quantity += this.order;
        this.order = 0;
    }
    
}


