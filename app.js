//Declare variable Globally:
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');

//Memory Cost Function:
function totalMemoryCost(id, price) {
        document.getElementById(id).addEventListener('click', function () {
                if (price == 0) {
                        memoryCost.innerText = 0;
                }
                else {
                        memoryCost.innerText = 180;
                }
                totalCost()
        })
}

totalMemoryCost('memory-8gb', 0);//call for 8GB Memory
totalMemoryCost('memory-16gb', 180);//call for 16GB Memory

// Total Storage Function:
function totalStorageCost(id, price) {
        document.getElementById(id).addEventListener('click', function () {
                if (price == 0) {
                        storageCost.innerText = 0;
                }
                else if (price == 100) {
                        storageCost.innerText = 100;
                }
                else {
                        storageCost.innerText = 180;
                }
                totalCost()
        })

}
// Storage Cost Function Call:
totalStorageCost('storage-256', 0)
totalStorageCost('storage-512', 100)
totalStorageCost('storage-1tb', 180)

// Delivery Charge Part:
function deliveryCharge(id, charge) {
        document.getElementById(id).addEventListener('click', function () {
                if (charge == 0) {
                        deliveryCost.innerText = 0;
                }
                else {
                        deliveryCost.innerText = 20;
                }
                totalCost()
        })

}
// Call Delivery Function
deliveryCharge('free-delivery', 0);
deliveryCharge('include-delivery', 20);

//Total Cost:
function totalCost() {
        const total = document.getElementById('total-cost');
        const basePriceText = document.getElementById('base-price');
        const basePrice = parseFloat(basePriceText.innerText);
        const totalMemoryCost = parseFloat(memoryCost.innerText);
        const totalStorageCost = parseFloat(storageCost.innerText);
        const totalDeliveryCost = parseFloat(deliveryCost.innerText);
        //Summation of Total:
        total.innerText = basePrice + totalMemoryCost + totalStorageCost + totalDeliveryCost;
        const totalCost = parseFloat(total.innerText);
        //Set Grand Total Cost:
        const promoDiscountPrice = document.getElementById('promo-discount-price');
        promoDiscountPrice.innerText = totalCost;
        return totalCost;
}

//Apply Promo Code:
document.getElementById('promo-btn').addEventListener('click', function () {
        const promoCode = document.getElementById('promo-input');
        const promoCodeText = promoCode.value;
        const promoDiscountPrice = document.getElementById('promo-discount-price');
        const totalPrice = totalCost();
        //Condition for Promo Code:
        if (promoCodeText == 'stevekaku') {
                const discountPrice = (totalPrice / 100) * 20;
                promoDiscountPrice.innerText = totalPrice - discountPrice;
        }
        promoCode.value = '';
})
// Complete Javascript Code