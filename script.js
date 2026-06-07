// 1. Переключение экранов главного меню
const buttons = document.querySelectorAll('.nfs-btn');
const screens = document.querySelectorAll('.content-screen');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        screens.forEach(screen => screen.classList.remove('active'));

        button.classList.add('active');

        const targetId = button.getAttribute('data-target');
        const targetScreen = document.getElementById(targetId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    });
});

// 2. Переключение кружков во "Внеучебке" по наведению мыши
const nodes = document.querySelectorAll('.circle-node');
const infoBlocks = document.querySelectorAll('.info-block');

nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
        nodes.forEach(n => n.classList.remove('active'));
        infoBlocks.forEach(b => b.classList.remove('active'));

        node.classList.add('active');

        const targetInfo = node.getAttribute('data-info');
        const activeBlock = document.getElementById(`info-${targetInfo}`);
        if (activeBlock) {
            activeBlock.classList.add('active');
        }
    });
});