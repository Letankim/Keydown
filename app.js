var eKey = document.querySelector('.key .key__value');
var eLocation = document.querySelector('.location .key__value');
var eWhich = document.querySelector('.which .key__value');
var eCode = document.querySelector('.code .key__value');
var alertBtn = document.querySelector('.alert');
var result = document.querySelector('.result');
var numberResult = document.querySelector('.key__number');

// event keyDown

document.addEventListener('keydown', function(e) {
    alertBtn.classList.add('hide');
    result.classList.remove('hide');
    
    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;
    numberResult.innerHTML = e.which;
})