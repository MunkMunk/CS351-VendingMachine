var maxQuantity = 5;

var money = 0;

var totalProfits = 0;

var productArrayA = new Array();
var productArrayB = new Array();
var productArrayC = new Array();
var productArrayD = new Array();
var productArrayE = new Array();

var date = new Date();

function initializeMachine() {

    productArrayA[0] = new productObject('Coke', 'a1', 1.25, maxQuantity, new Date(2013, 10, 25));
    productArrayA[1] = new productObject('Pepsi', 'a2', 1.25, maxQuantity, new Date(2013, 10, 25));
    productArrayA[2] = new productObject('DrPepper', 'a3', 1.25, maxQuantity, new Date(2013, 10, 25));
    productArrayA[3] = new productObject('Diet Coke', 'a4', 1.25, maxQuantity, new Date(2013, 10, 25));
    productArrayA[4] = new productObject('Diet DrPepper', 'a5', 1.25, maxQuantity, new Date(2013, 10, 25));
    productArrayA[5] = new productObject('Sprite', 'a6', 1.25, maxQuantity, new Date(2013, 10, 25));
    productArrayA[6] = new productObject('Sierra Mist', 'a7', 1.25, maxQuantity, new Date(2013, 10, 25));
    productArrayA[7] = new productObject('Gatorade', 'a8', 1.50, maxQuantity, new Date(2013, 10, 25));
    productArrayA[8] = new productObject('Powerade', 'a9', 1.50, maxQuantity, new Date(2013, 10, 25));
    productArrayA[9] = new productObject('Bottled Water', 'a0', 1.00, maxQuantity, new Date(2013, 10, 25));
    
    document.getElementById("a1").innerHTML = productArrayA[0].name + ' $' + productArrayA[0].price.toFixed(2);
    document.getElementById("a2").innerHTML = productArrayA[1].name + ' $' + productArrayA[1].price.toFixed(2);
    document.getElementById("a3").innerHTML = productArrayA[2].name + ' $' + productArrayA[2].price.toFixed(2);
    document.getElementById("a4").innerHTML = productArrayA[3].name + ' $' + productArrayA[3].price.toFixed(2);
    document.getElementById("a5").innerHTML = productArrayA[4].name + ' $' + productArrayA[4].price.toFixed(2);
    document.getElementById("a6").innerHTML = productArrayA[5].name + ' $' + productArrayA[5].price.toFixed(2);
    document.getElementById("a7").innerHTML = productArrayA[6].name + ' $' + productArrayA[6].price.toFixed(2);
    document.getElementById("a8").innerHTML = productArrayA[7].name + ' $' + productArrayA[7].price.toFixed(2);
    document.getElementById("a9").innerHTML = productArrayA[8].name + ' $' + productArrayA[8].price.toFixed(2);
    document.getElementById("a0").innerHTML = productArrayA[9].name + ' $' + productArrayA[9].price.toFixed(2);

    productArrayB[0] = new productObject('100Grand', 'b1', 1.00, maxQuantity, new Date(2013, 10, 25));
    productArrayB[1] = new productObject('Snickers', 'b2', 1.00, maxQuantity, new Date(2013, 10, 25));
    productArrayB[2] = new productObject('Twix', 'b3', 1.00, maxQuantity, new Date(2013, 10, 25));
    productArrayB[3] = new productObject('Kit-Kat', 'b4', 1.00, maxQuantity, new Date(2013, 10, 25));
    productArrayB[4] = new productObject('M&Ms', 'b5', 1.00, maxQuantity, new Date(2013, 10, 25));
    productArrayB[5] = new productObject('BabyRuth', 'b6', 1.00, maxQuantity, new Date(2013, 10, 25));
    productArrayB[6] = new productObject('PayDay', 'b7', 1.00, maxQuantity, new Date(2013, 10, 25));
    productArrayB[7] = new productObject('MilkyWay', 'b8', 1.00, maxQuantity, new Date(2013, 10, 25));
    productArrayB[8] = new productObject('Reese\'s', 'b9', 1.00, maxQuantity, new Date(2013, 10, 25));
    productArrayB[9] = new productObject('Butterfinger', 'b0', 1.00, maxQuantity, new Date(2013, 10, 25));
    
    document.getElementById("b1").innerHTML = productArrayB[0].name + ' $' + productArrayB[0].price.toFixed(2);
    document.getElementById("b2").innerHTML = productArrayB[1].name + ' $' + productArrayB[1].price.toFixed(2);
    document.getElementById("b3").innerHTML = productArrayB[2].name + ' $' + productArrayB[2].price.toFixed(2);
    document.getElementById("b4").innerHTML = productArrayB[3].name + ' $' + productArrayB[3].price.toFixed(2);
    document.getElementById("b5").innerHTML = productArrayB[4].name + ' $' + productArrayB[4].price.toFixed(2);
    document.getElementById("b6").innerHTML = productArrayB[5].name + ' $' + productArrayB[5].price.toFixed(2);
    document.getElementById("b7").innerHTML = productArrayB[6].name + ' $' + productArrayB[6].price.toFixed(2);
    document.getElementById("b8").innerHTML = productArrayB[7].name + ' $' + productArrayB[7].price.toFixed(2);
    document.getElementById("b9").innerHTML = productArrayB[8].name + ' $' + productArrayB[8].price.toFixed(2);
    document.getElementById("b0").innerHTML = productArrayB[9].name + ' $' + productArrayB[9].price.toFixed(2);
    
    productArrayC[0] = new productObject('Short Sword', 'c1', 100, 3, new Date(1470, 10, 25));
    productArrayC[1] = new productObject('Long Sword', 'c2', 150, 3, new Date(2013, 10, 25));
    productArrayC[2] = new productObject('Bastard Sword', 'c3', 200, 2, new Date(2013, 10, 25));
    productArrayC[3] = new productObject('Claymore', 'c4', 200, 2, new Date(2013, 10, 25));
    productArrayC[4] = new productObject('Wakizashi', 'c5', 75, 5, new Date(2013, 10, 25));
    productArrayC[5] = new productObject('Katana', 'c6', 100, 3, new Date(2013, 10, 25));
    productArrayC[6] = new productObject('Flail', 'c7', 100, 3, new Date(2013, 10, 25));
    productArrayC[7] = new productObject('Morningstar', 'c8', 100, 3, new Date(2013, 10, 25));
    productArrayC[8] = new productObject('Hammer', 'c9', 15, 10, new Date(2013, 10, 25));
    productArrayC[9] = new productObject('Toothpick', 'c0', .15, 1000, new Date(2013, 10, 25));
    
    document.getElementById("c1").innerHTML = productArrayC[0].name + ' $' + productArrayC[0].price.toFixed(2);
    document.getElementById("c2").innerHTML = productArrayC[1].name + ' $' + productArrayC[1].price.toFixed(2);
    document.getElementById("c3").innerHTML = productArrayC[2].name + ' $' + productArrayC[2].price.toFixed(2);
    document.getElementById("c4").innerHTML = productArrayC[3].name + ' $' + productArrayC[3].price.toFixed(2);
    document.getElementById("c5").innerHTML = productArrayC[4].name + ' $' + productArrayC[4].price.toFixed(2);
    document.getElementById("c6").innerHTML = productArrayC[5].name + ' $' + productArrayC[5].price.toFixed(2);
    document.getElementById("c7").innerHTML = productArrayC[6].name + ' $' + productArrayC[6].price.toFixed(2);
    document.getElementById("c8").innerHTML = productArrayC[7].name + ' $' + productArrayC[7].price.toFixed(2);
    document.getElementById("c9").innerHTML = productArrayC[8].name + ' $' + productArrayC[8].price.toFixed(2);
    document.getElementById("c0").innerHTML = productArrayC[9].name + ' $' + productArrayC[9].price.toFixed(2);

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
            if (productArrayA[i].quantity >= 1 && money >= productArrayA[i].price && productArrayA[i].expiration > date) {
                alert('Vending : ' + productArrayA[i].name);
                productArrayA[i].order += 1;
                productArrayA[i].quantity -= 1;
                document.getElementById("output").innerHTML += "Vending " + productArrayA[i].name + "\n";
                makeChange(productArrayA[i].price);
                document.getElementById("profit").innerHTML = totalProfits.toFixed(2);
            }
            else {
                if (productArrayA[i].quantity >= 1 && money >= productArrayA[i].price && productArrayA[i].expiration < date) {
                    alert('Product is Expired : no vend');
                }
                if (productArrayA[i].quantity == 0) { alert('Sold Out'); }
                if (money < productArrayA[i].price) { alert('No Vend : Please insert currency'); }
            }
        }
        else if (keypadAlpha == 'B') {
            if (productArrayB[i].quantity >= 1 && money >= productArrayB[i].price && productArrayB[i] > date) {
                alert('Vending : ' + productArrayB[i].name);
                productArrayB[i].order += 1;
                productArrayB[i].quantity -= 1;
                document.getElementById("output").innerHTML += "Vending " + productArrayB[i].name + "\n";
                makeChange(productArrayB[i].price);
                document.getElementById("profit").innerHTML = totalProfits.toFixed(2);
            }
            else {
                if (productArrayA[i].quantity >= 1 && money >= productArrayA[i].price && productArrayA[i].expiration < date) {
                    alert('Product is Expired : no vend');
                }
                if (productArrayB[i].quantity == 0) { alert('Sold Out'); }
                if (money < productArrayB[i].price) { alert('No Vend : Please insert currency'); }
            }
        }
        else if (keypadAlpha == 'C') {
            if (productArrayC[i].quantity >= 1 && money >= productArrayC[i].price && productArrayC[i].expiration > date) {
                alert('Vending : ' + productArrayC[i].name);  
                productArrayC[i].order += 1;
                productArrayC[i].quantity -= 1;
                document.getElementById("output").innerHTML += "Vending " + productArrayC[i].name + "\n";
                makeChange(productArrayC[i].price);
                document.getElementById("profit").innerHTML = totalProfits.toFixed(2);
            }
            else {
                if (productArrayC[i].quantity >= 1 && money >= productArrayC[i].price && productArrayC[i].expiration < date) {
                    alert('Product is Expired on ' + productArrayC[i].expiration + ' : no vend');
                }
                if (productArrayC[i].quantity == 0) { alert('Sold Out'); }
                if (money < productArrayC[i].price) { alert('No Vend : Please insert currency'); }
            }
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
            if (productArrayA[i].order > 0) {
                productArrayA[i].reOrder();
            }
        }
    }
    for (var i = 0; i < 10; i++) {
        if (productArrayB[i] != null){
            if (productArrayB[i].order > 0) {
                productArrayB[i].reOrder();
            }
        }
    }
    for (var i = 0; i < 10; i++) {
        if (productArrayC[i] != null){
            if (productArrayC[i].order > 0) {
                productArrayC[i].reOrder();
            }
        }
    }
    for (var i = 0; i < 10; i++) {
        if (productArrayD[i] != null){
            if (productArrayD[i].order > 0) {
                productArrayD[i].reOrder();
            }
        }
    }
    for (var i = 0; i < 10; i++) {
        if (productArrayE[i] != null){
            if (productArrayE[i].order > 0) {
                productArrayE[i].reOrder();
            }
        }
    }
}

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
    else if (m == 'Bpenny') {
        money += .01 * 1.6;
    }
    else if (m == '2pence') {
        money += .02 * 1.6;
    }
    else if (m == '5pence') {
        money += .05 * 1.6;
    }
    else if (m == '10pence') {
        money += .1 * 1.6;
    }
    else if (m == '20pence') {
        money += .2 * 1.6;
    }
    else if (m == '50pence') {
        money += .5 * 1.6;
    }
    else if (m == '1pound') {
        money += 1.00 * 1.6;
    }
    else if (m == '2pound') {
        money += 2.00 * 1.6;
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
    
    while(change >= .01) {
        if (change >= .25) {
            quarters++;
            change -= .25;
        }
        else if (change >= .1) {
            dimes++;
            change -= .1;
        }
        else if (change >= .05) {
            nickels++;
            change -= .05;
        }
        else if (change >= .01) {
            pennies++;
            change -= .01;
        }
    }
    
    money = 0;
    document.getElementById("moneyID").innerHTML= money.toFixed(2);
    document.getElementById("changeID").innerHTML= change.toFixed(2);
    document.getElementById("changeQ").innerHTML = quarters + ' quarters';
    document.getElementById("changeD").innerHTML = dimes + ' dimes';
    document.getElementById("changeN").innerHTML = nickels + ' nickels';
    document.getElementById("changeP").innerHTML = pennies + ' pennies';
    
}

function productObject (n, ID, p, q, e) {
    this.name = n;
    this.vendorID = ID;
    this.price = p;
    this.quantity = q;
    this.order = 0;
    this.expiration = e;
    
    //put functions here
    // this.FunctionName = function() { }
    this.reOrder = function reOrder() {
        document.getElementById("output").innerHTML += "ReOrdering " + this.order + " " + this.name + "\n";
        this.quantity += this.order;
        this.order = 0;
    }
}


