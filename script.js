const toilet = document.getElementById('toilet');
const bullet = document.getElementById('bullet');
let isShooting = false;

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isShooting) {
        shoot();
    }
});

function shoot() {
    isShooting = true;
    const toiletPosition = toilet.getBoundingClientRect();
    bullet.style.display = 'block';
    bullet.style.left = `${toiletPosition.left + toilet.offsetWidth / 2}px`;
    bullet.style.bottom = `${toiletPosition.top}px`;

    let bulletPosition = toiletPosition.top;
    const bulletInterval = setInterval(() => {
        bulletPosition -= 10;
        bullet.style.bottom = `${bulletPosition}px`;

        if (bulletPosition < 0) {
            bullet.style.display = 'none';
            clearInterval(bulletInterval);
            isShooting = false;
        }
    }, 30);
}
