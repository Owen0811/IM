document.addEventListener('DOMContentLoaded', () => {
    const groups = document.querySelectorAll('.group');
    groups.forEach(group => {
        group.addEventListener('click', () => {
            const link = group.querySelector('a').href;
            window.open(link, '_blank');
        });

        group.addEventListener('mouseover', () => {
            group.querySelector('img').style.transform = 'scale(1.1)';
        });

        group.addEventListener('mouseout', () => {
            group.querySelector('img').style.transform = 'scale(1)';
        });
    });
});
