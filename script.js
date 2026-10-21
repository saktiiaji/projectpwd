const tombolTema = document.getElementById('tombol-tema');

if (localStorage.getItem('tema') === 'gelap') {
    document.body.classList.add('gelap');
    tombolTema.textContent = 'Mode Terang';
}

tombolTema.addEventListener('click', function () {
    const gelap = document.body.classList.toggle('gelap');
    tombolTema.textContent = gelap ? 'Mode Terang' : 'Mode Gelap';
    localStorage.setItem('tema', gelap ? 'gelap' : 'terang');
});