const links = document.querySelectorAll('.experience nav a');
const contents = document.querySelectorAll('.tab-content');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        contents.forEach(content => {
            content.classList.remove('active')
        });

        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});
