const container = document.querySelectorAll('.container');
const navItems = document.querySelectorAll('nav');

for (let nav of navItems) {
    nav.addEventListener('click', event => {
        if (event.target.tagName !== 'LI') return false;

        let filterTab = event.target.dataset['tab'];

        container.forEach(elem => {
            if (!elem.classList.contains(filterTab)) {
                elem.setAttribute('hidden', 'true');
            } else {
                elem.removeAttribute('hidden');
            }
        })
    });
}