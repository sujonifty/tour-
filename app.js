// set innerText 
function setInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;
}
// calculation the total cost 
function totalCost(elementId, value) {
    const getTotalCost = document.getElementById(elementId);
    const totalCostText = getTotalCost.innerText;
    const totalCost = parseInt(totalCostText);
    const sum = totalCost + parseInt(value);
    return sum;
}
// calculate the grand total
function grandTotal(category){
    // step-1:same ways to get grand total
    const getTotalCost = document.getElementById('total-cost');
        const totalCostText = getTotalCost.innerText;
        const getCost = parseInt(totalCostText);

    if(category === 'bus'){
        //set total cost in the cart container
        setInnerText('grand-total', getCost + 100);
    }
    else if(category === 'train'){
        //set total cost in the cart container
        setInnerText('grand-total', getCost - 200);
    }
    else if(category === 'flight'){
        //set total cost in the cart container
        setInnerText('grand-total', getCost + 500);
    }
    else{
        //set total cost in the cart container
        setInnerText('grand-total', getCost);
    }

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
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        // Store the value in cart container
        //step-1: get the container by id
        const selectedContainer = document.getElementById('selected-place-container');
        // step-2: create element & set innerText
        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;

        // remain budget 
        const budget = document.getElementById('budget');
        const budgetText = budget.innerText;
        const getBudget = parseInt(budgetText);
        const remainBudget = getBudget - price;
        if(remainBudget < 0){
           return alert('Budget low, Earn more.');
        }
        setInnerText('budget', remainBudget);
        
        // marked the selected item
        event.target.parentNode.parentNode.style.backgroundColor ='lightgray'
        // set disable attribute
    event.target.setAttribute('disabled', '');
        // step-3: set the element in cart container 
        li.appendChild(p1);
        li.appendChild(p2);
        selectedContainer.appendChild(li);

        
        //count total cost 

        /*const getTotalCost = document.getElementById('total-cost');
        const totalCostText = getTotalCost.innerText;
        const totalCost = parseInt(totalCostText);
        const sum = totalCost + parseInt(price);*/

        //calculate total cost by function
        const sum = totalCost('total-cost', price)
        //set total cost in the cart container
        setInnerText('total-cost', sum);
        // calculate the grand cost
        // step-1:same ways to get grand total
        const getCost = totalCost('grand-total', price)
        //set total cost in the cart container
        setInnerText('grand-total', getCost);
        // console.log(sum);
        // console.log(sum);
    })
}