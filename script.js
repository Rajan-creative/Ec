/* script.js */
function selectBundle(pairs, price, count) {
    document.querySelectorAll('.bundle-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');

    document.getElementById('total-price').innerText = `DKK ${price}.00`;
    document.getElementById('options-container').style.display = 'block';
    let optionsHtml = '';

    for (let i = 1; i <= count; i++) {
        optionsHtml += `<div class='options'>
            <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
            </select>
            <select>
                <option>Colour</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
            </select>
        </div>`;
    }

    document.getElementById('options').innerHTML = optionsHtml;
}
