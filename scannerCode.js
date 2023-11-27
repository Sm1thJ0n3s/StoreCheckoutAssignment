// Accpeted Barcodes
const barcodes = {
    "689145740844":{
        name: "JavaScript Textbook",
        price: 34.95
    },
    "4549292070248":{
        name: "Xerox Paper",
        price: 10.99
    },
    "092265222983":{
        name: "First Aid Kit",
        price: 20.99
    },
    "X002ELVL3J":{
        name: "Box of Pencils (50ct.)",
        price: 15.99
    },
    "686024002468":{
        name: "Sanitizing Wipes",
        price: 10.99
    },
    "860004186236":{
        name: "N95 Face Masks",
        price: 15.99
    },
    "036000214000":{
        name: "Kleenex",
        price: 3.99
    },
    "8809693254156":{
        name: "Hand Sanitizer",
        price: 7.99
    },
    "036500060480":{
        name: "Printer Paper",
        price: 9.99
    },
    "085014561877":{
        name: "Brush Pens",
        price: 10.99
    },
    "X0032YGP2T":{
        name: "Multiport Adapter",
        price: 25.99
    },
    "B07G6JT1XS":{
        name: "Scissors (20ct.)",
        price: 23.99
    },
    "9780134682334":{
        name: "iOS Programming Textbook",
        price: 119.99
    },
    "718103230759":{
        name: "Spiral Notebook",
        price: 1.99
    },
    "096619756803":{
        name: "KRKLND WATR BTTLE",
        price: 1.05
    },
    "07826405":{
        name: "CRM RB SODA CAN",
        price: 1.21
    }
}

// Variables of item info, the amount of item, and creation of customer cart
let quantity = document.getElementById("quantityHolder");
const barcodeScan = document.getElementById("barcodeHolder");
let itemAddBtn = document.getElementById("addingItemBtn");
let itemInfoContainer = document.getElementById("itemHolder");
let pastScannedBarcode = 0;

// Giving the total of the prices (excluding Taxes)
let priceText =  document.getElementById("totalPrice");
let total = 0;

// Variables created to checkout the items and give a grand total
let checkoutItemsBtn = document.getElementById("checkoutBtn");
let grandTotalDiv = document.getElementById("grandTotalHolder");
let checkedOut = false;

// Variables of item not existing
let notExistText = document.getElementById("notExistText");

// Meant to add items to the cart and even giving a warning if the item has not been found or isn't the right item in the barcodes
function addItemToCart(){
    let barcodeScanned = barcodeScan.value;
    if (barcodes.hasOwnProperty(barcodeScanned) && checkedOut === false) {
        if (notExistText.innerText === "The item does not exist!"){
            notExistText.innerText = "";
            soundPlayed = false
        }
        let barcodeObject = barcodes[barcodeScanned];
        console.log(barcodeObject);

        let itemContainer = document.createElement("div");
        itemContainer.classList.add("itemContainer2");

        let nameOfItem = document.createElement("p");
        let itemPrice = document.createElement("p");
        let numOfItem = document.createElement("p");

        nameOfItem.classList.add("itemData2");
        itemPrice.classList.add("itemData2");
        numOfItem.classList.add("itemData2");

        nameOfItem.innerText = barcodeObject.name;
        console.log(barcodeObject.name)
        console.log(nameOfItem);
        itemPrice.innerText = barcodeObject.price;
        numOfItem.innerText = quantity.value;
        let itemAmount = quantity.value;
        console.log(itemAmount)
        if (quantity.value === ""){
            itemAmount = 1;
            quantity.innerText = 1;
            numOfItem.innerText = 1;
        }
            
        itemContainer.appendChild(nameOfItem);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(numOfItem);
        itemInfoContainer.appendChild(itemContainer);

        while(itemAmount > 0){
            total = total + barcodeObject.price;
            itemAmount--;
        }
        priceText.innerText = "Your total is $" + parseFloat(total).toFixed(2);
        console.log(total);
    } else if (checkedOut === false) {
        notExistText.innerText = "The item does not exist!";
        notExistText.classList.add("nonexistentWarning");
    }
}

// Nothing much yet. Might make it where it reveals the Grand Total
function checkout(){
    if (checkedOut === false) {
        let taxes = total * 0.0925
        let grandTotal = total + taxes;
        let grandTotalText = document.createElement("p");
        grandTotalDiv.appendChild(grandTotalText);
        grandTotalText.classList.add("grandTotalDesign");
        grandTotalText.innerText = "Your grand total is $" + parseFloat(grandTotal).toFixed(2);
        checkedOut = true
    }
}

/*
splice steps:
    Step 0) Parameters are original, start, end.
    Step 1) Create var to hold answers.
    Step 2) Create for loop to go trough the range
        Step 2a) Stick ith letter to the end of var from Step 1.
*/
itemAddBtn.addEventListener("click", addItemToCart);
checkoutItemsBtn.addEventListener("click", checkout);