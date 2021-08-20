//Memory Cost Function:
const memoryCost = document.getElementById('memory-cost');

const storageCost = document.getElementById('storage-cost');

const deliveryCost = document.getElementById('delivery-cost');


function totalMemoryCost(id, price) {
        document.getElementById(id).addEventListener('click', function () {

                if (price == 0) {
                        memoryCost.innerText = 0;
                }
                else {
                        memoryCost.innerText = 180;
                }
                totalCost()
                // console.log((parseInt(memoryCost.innerText)));
        })
        // const memoryCost = document.getElementById('memory-cost');
        // if (price == 0) {
        //         memoryCost.innerText = 0;
        // }
        // else {
        //         memoryCost.innerText = 180;
        // }
        // console.log((parseInt(memoryCost.innerText)));
}
totalMemoryCost('memory-8gb', 0);
totalMemoryCost('memory-16gb', 180);
//Total Memory Cost:
// document.getElementById('memory-8gb').addEventListener('click', function () {
//         totalMemoryCost(0);
// })
// document.getElementById('memory-16gb').addEventListener('click', function () {
//         totalMemoryCost(180);
// })

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
                // console.log((parseFloat(storageCost.innerText)))
        })

}
// Storage Cost:
totalStorageCost('storage-256', 0)
totalStorageCost('storage-512', 100)
totalStorageCost('storage-1tb', 180)
// document.getElementById('storage-256').addEventListener('click', function () {
//         totalStorageCost(0);
// })
// document.getElementById('storage-512').addEventListener('click', function () {
//         totalStorageCost(100);
// })
// document.getElementById('storage-1tb').addEventListener('click', function () {
//         totalStorageCost(180);
// })

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
                // console.log((parseFloat(deliveryCost.innerText)))
        })

}
deliveryCharge('free-delivery', 0);
deliveryCharge('include-delivery', 20);
// document.getElementById('free-delivery').addEventListener('click', function () {
//         const deliveryCost = document.getElementById('delivery-cost');
//         deliveryCost.innerText = 0
// })

//Total Cost:
function totalCost() {
        const total = document.getElementById('total-cost');
        const basePrice = document.getElementById('base-price');
        const baseTotalPrice = parseFloat(basePrice.innerText);
        const totalMemoryCost = parseInt(memoryCost.innerText);
        const totalStorageCost = parseInt(storageCost.innerText);
        const totalDeliveryCost = parseInt(deliveryCost.innerText);

        total.innerText = baseTotalPrice + totalMemoryCost + totalStorageCost + totalDeliveryCost;
        const totalCost = parseInt(total.innerText);
        return totalCost;
}
