//Declare variable Globally:
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');

const Memory8GB = document.getElementById('memory-8gb');
const Memory16GB = document.getElementById('memory-16gb');

//Memory Cost Function:
function totalMemoryCost(id, price) {
        document.getElementById(id).addEventListener('click', function () {
                if (price == 0) {
                        memoryCost.innerText = 0;
                }
                else {
                        memoryCost.innerText = 180;
                }
                Memory8GB.classList.remove('active');
                Memory16GB.classList.remove('active');
                document.getElementById(id).classList.add('active');
                totalCost()
        })
}

totalMemoryCost('memory-8gb', 0);//call for 8GB Memory
totalMemoryCost('memory-16gb', 180);//call for 16GB Memory

// Total Storage Function:
const storage256GB = document.getElementById('storage-256');
const storage512GB = document.getElementById('storage-512');
const storage1TB = document.getElementById('storage-1tb');

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
                storage256GB.classList.remove('active');
                storage512GB.classList.remove('active');
                storage1TB.classList.remove('active');
                document.getElementById(id).classList.add('active');
                totalCost()
        })
}

// Storage Cost Function Call:
totalStorageCost('storage-256', 0)
totalStorageCost('storage-512', 100)
totalStorageCost('storage-1tb', 180)

// Delivery Charge Part:
const freeDelivery = document.getElementById('free-delivery');
const includeDelivery = document.getElementById('include-delivery');

function deliveryCharge(id, charge) {
        document.getElementById(id).addEventListener('click', function () {
                if (charge == 0) {
                        deliveryCost.innerText = 0;
                }
                else {
                        deliveryCost.innerText = 20;
                }
                freeDelivery.classList.remove('active');
                includeDelivery.classList.remove('active');
                document.getElementById(id).classList.add('active');
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
        //Parse All Cost
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
                promoDiscountPrice.innerText = parseFloat(totalPrice - discountPrice).toFixed(2);
        }
        else {
                alert("Promo Code Doesn't Match");
        }
        promoCode.value = '';
})
// Complete Javascript Code