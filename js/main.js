//---------------------- Popup before submit

function popup(){
    const form = document.querySelector('form'),
        popup = document.querySelector('.popup'),
        popup_closer = document.querySelector('.popup .fa');

    if (form.addEventListener) {
        form.addEventListener("submit", function(evt) {
            evt.preventDefault();
            popup.style.display = 'block';
            popup.style.opacity = '1';
        }, true);
    }
    else {
        form.attachEvent('onsubmit', function(evt){
            evt.preventDefault();
            popup.style.display = 'block';
            popup.style.opacity = '1';
        });
    }

    popup_closer.addEventListener('click', function(){
        popup.style.display = 'none';
        form.submit();
    });
}

popup();