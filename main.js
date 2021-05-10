let headerMenuLogin = document.querySelectorAll('.js-login'),
    windowLogin = document.querySelector('.window__login'),
    cross = document.querySelector('.cross');

    headerMenuLogin.forEach((item) => {
        item.addEventListener('click', function() {
            windowLogin.style.display = windowLogin.style.display === 'block' ? "none" : "block";
        });
    });
