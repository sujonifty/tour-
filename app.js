// set innerText 
function setInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;
}
const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
for (let btn of allBtn) {
    btn.addEventListener('click', function (event) {
        //    console.log('hello');
        count += 1;
        setInnerText('cart-count', count)
        // get place & price
        const placeName = event.target.parentNode.childNodes[1].innerText;
        const price= event.target.parentNode.childNodes[3].childNodes[1].innerText;
        // Store the value in cart container
        //step-1: get the container by id
        const selectedContainer = document.getElementById('selected-place-container');
        // step-2: create element & set innerText
        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;
        // step-3: set the element in cart container 
        li.appendChild(p1);
        li.appendChild(p2);
        selectedContainer.appendChild(li);
        //count total cost 
        const getTotalCost = document.getElementById('total-cost');
        const totalCostText = getTotalCost.innerText;
        const totalCost = parseInt(totalCostText);
        const sum = totalCost + parseInt(price);
        //set total cost in the cart container
        setInnerText('total-cost', sum);
        console.log(sum);
    })
}