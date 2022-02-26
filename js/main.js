window.addEventListener('DOMContentLoaded', function(e) {
    const fruits = document.querySelectorAll('.fruits');
    const purchase = document.getElementById('purchase');
    const priceOfFruit = document.getElementById('fruit-price');

    fruits.forEach(fruit => fruit.addEventListener('click', displayFruit));

    function displayFruit(e) {
        let getSrc = e.target.getAttribute('src');
        let getPrice = e.target.getAttribute('data-price');

        let selectedFruit = document.getElementById('selected-fruit');
        selectedFruit.setAttribute('src', getSrc);
        
        let price = document.getElementById('price');
        

        priceOfFruit.innerText = getPrice;
        price.style.display = 'block';

        purchase.style.display = 'block';
    }

    purchase.addEventListener('click', function(e) {
        let walletBalance = document.getElementById('balance');

        let exactWalletBalance = +walletBalance.innerText;
        let exactPriceOfFruit = +priceOfFruit.innerText;

        if (exactPriceOfFruit <= exactWalletBalance) {
            exactWalletBalance -= exactPriceOfFruit;
            walletBalance.innerText = exactWalletBalance;
        } else {
            alert('Insufficient Fund');
        }
    });
})
