
function playAudio() {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
}

document.addEventListener('DOMContentLoaded', function() {
    const heart = document.getElementById('heart');
    const heartContainer = document.getElementById('heart-container');
    const newView = document.getElementById('new-view');

    heart.addEventListener('click', function() {
        playAudio()
        // Membuat hati terbang ke atas
        heart.style.transform = 'rotate(-45deg) translateY(-150vh)';
        heart.style.transition = 'transform 1s ease';

        // Menunggu animasi terbang selesai
        setTimeout(() => {
            // Menyembunyikan container hati
            heartContainer.classList.add('hidden');

            // Menampilkan tampilan baru
            newView.classList.remove('hidden');
            setTimeout(() => {
                newView.classList.add('visible');
            }, 50);
        }, 1000); // Sesuaikan dengan durasi transisi CSS
    });
});