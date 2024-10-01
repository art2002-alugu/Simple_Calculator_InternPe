let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.button');
let clear = document.getElementById('clear');



buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.getAttribute('data-num');
        if (value === '=') {
            try {
                let result = eval(screen.value);
                screen.value = result;
            } catch (error) {
                screen.value = 'Error';
            }
        } else if (value === 'C') {
            screen.value = '';
        } else {
            screen.value += value;
        }
    });
});


clear.addEventListener('click', () => {
    screen.value = '';
});