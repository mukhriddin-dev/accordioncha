const acc = document.querySelectorAll(".accardion");


acc.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle("activs");

        const panel = item.nextElementSibling
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
})