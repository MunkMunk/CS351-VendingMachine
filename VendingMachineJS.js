var keypadAlpha = '';
var keypadNumeral = '';

function setAlpha(alpha) {
    keypadAlpha = alpha;
}

function setNumeral(numeral) {
    keypadNumeral = numeral;
}

function vend() {
    
    alert
    
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

function addMoney(m) {
    if (m == 'penny') {
        money += 1;
    }
    else if (m == 'nickel') {
        money += 5;
    }
    else if (m == 'dime') {
        money += 10;
    }
    else if (m == 'quarter') {
        money += 25;
    }
    else if (m == 'dollar') {
        money += 100;
    }
    //alert(money.toString());
    
    document.getElementById("moneyID").innerHTML = (money/100).toString();
    
}

function makeChange(c) {
    money /= 100;
    money -= c;
    document.getElementById("changeID").innerHTML= money.toString();
    money = 0;
    document.getElementById("moneyID").innerHTML= money.toString();
}

function productObject (name, vendorID, price) {
    name = name;
    vendorID = vendorID;
    price = price
    
    alert('New Object' + name + ' ' + vendorID + ' ' + price.toString());
    
}

var product1 = new productObject(Cheese, A1, 1.25);

