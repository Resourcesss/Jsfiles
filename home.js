document.getElementById('voteButton').addEventListener('click', function() {
    var voteOptions = document.getElementById('voteOptions');
    voteOptions.style.display = voteOptions.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('open');
        menu.classList.toggle('open');
    });
});
