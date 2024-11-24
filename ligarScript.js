const icons = document.querySelectorAll('.icon');
const dropzones = document.querySelectorAll('.dropzone');
const message = document.getElementById('message');
const submitButton = document.getElementById('submit-button');

// Armazena os resultados
const results = {
    entrada: [],
    processamento: [],
    saida: []
};

// Embaralha os ícones aleatoriamente
const shuffledIcons = Array.from(icons).sort(() => Math.random() - 0.5);

// Adiciona os ícones embaralhados ao container
const iconContainer = document.querySelector('.icon-container');
shuffledIcons.forEach(icon => {
    iconContainer.appendChild(icon);
});

// Variável para armazenar o ícone atualmente selecionado
let selectedIcon = null;

// Função para selecionar ícone com clique (uso em dispositivos móveis)
shuffledIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (selectedIcon) {
            selectedIcon.classList.remove('selected'); // Remove seleção anterior
        }

        // Alterna seleção ao clicar novamente
        if (selectedIcon === icon) {
            selectedIcon = null; // Desseleciona
        } else {
            selectedIcon = icon;
            selectedIcon.classList.add('selected'); // Seleciona o ícone
        }
    });
});

// Função para clique nas áreas de drop
dropzones.forEach(dropzone => {
    dropzone.addEventListener('click', () => {
        if (selectedIcon) {
            const dropzoneCategory = dropzone.getAttribute('data-category');
            const iconId = selectedIcon.id;

            // Se o ícone já estiver na área, remove-o; se não, adiciona-o
            if (dropzone.contains(selectedIcon)) {
                iconContainer.appendChild(selectedIcon); // Move de volta para o container
                results[dropzoneCategory] = results[dropzoneCategory].filter(id => id !== iconId);
                showMessage(`🔄 ${selectedIcon.textContent} foi removido da área ${dropzoneCategory}.`);
            } else {
                dropzone.appendChild(selectedIcon); // Move para a área de drop
                if (!results[dropzoneCategory].includes(iconId)) {
                    results[dropzoneCategory].push(iconId);
                }
                showMessage(`🔄 ${selectedIcon.textContent} foi classificado na área ${dropzoneCategory}.`);
            }

            selectedIcon.classList.remove('selected'); // Remove o destaque
            selectedIcon = null; // Limpa a seleção
        }
    });
});

// Função para arrastar no desktop
shuffledIcons.forEach(icon => {
    icon.addEventListener('dragstart', dragStart);
    icon.addEventListener('touchstart', touchStart);
    icon.addEventListener('touchmove', touchMove);
    icon.addEventListener('touchend', touchEnd);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

let currentTouchIcon = null;
let offsetX = 0;
let offsetY = 0;

function touchStart(event) {
    currentTouchIcon = event.target;
    const touch = event.touches[0];
    offsetX = touch.pageX - currentTouchIcon.getBoundingClientRect().left;
    offsetY = touch.pageY - currentTouchIcon.getBoundingClientRect().top;
    currentTouchIcon.style.position = 'absolute';
    currentTouchIcon.style.zIndex = '1000';
}

function touchMove(event) {
    if (!currentTouchIcon) return;

    const touch = event.touches[0];
    currentTouchIcon.style.left = `${touch.pageX - offsetX}px`;
    currentTouchIcon.style.top = `${touch.pageY - offsetY}px`;

    event.preventDefault();
}

function touchEnd(event) {
    if (!currentTouchIcon) return;

    let dropped = false;
    dropzones.forEach(dropzone => {
        const rect = dropzone.getBoundingClientRect();
        const touch = event.changedTouches[0];

        if (
            touch.pageX > rect.left &&
            touch.pageX < rect.right &&
            touch.pageY > rect.top &&
            touch.pageY < rect.bottom
        ) {
            dropzone.appendChild(currentTouchIcon);
            const dropzoneCategory = dropzone.getAttribute('data-category');

            if (!results[dropzoneCategory].includes(currentTouchIcon.id)) {
                results[dropzoneCategory].push(currentTouchIcon.id);
            }

            showMessage(`🔄 ${currentTouchIcon.textContent} foi classificado na área ${dropzoneCategory}.`);
            dropped = true;
        }
    });

    if (!dropped) {
        currentTouchIcon.style.position = '';
        currentTouchIcon.style.left = '';
        currentTouchIcon.style.top = '';
    }

    currentTouchIcon.style.zIndex = '';
    currentTouchIcon = null;
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('drop', drop);
});

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const iconId = event.dataTransfer.getData('text');
    const icon = document.getElementById(iconId);
    const dropzone = event.target.closest('.dropzone');
    dropzone.appendChild(icon);

    const dropzoneCategory = dropzone.getAttribute('data-category');
    if (!results[dropzoneCategory].includes(iconId)) {
        results[dropzoneCategory].push(iconId);
    }

    showMessage(`🔄 ${icon.textContent} foi classificado na área ${dropzoneCategory}.`);
}

submitButton.addEventListener('click', () => {
    for (let key in results) {
        results[key] = [];
    }

    dropzones.forEach(dropzone => {
        const dropzoneCategory = dropzone.getAttribute('data-category');
        const iconsInDropzone = dropzone.querySelectorAll('.icon');
        
        iconsInDropzone.forEach(icon => {
            if (!results[dropzoneCategory].includes(icon.id)) {
                results[dropzoneCategory].push(icon.id);
            }
        });
    });

    const resultsSummary = {
        entrada: results.entrada.length,
        processamento: results.processamento.length,
        saida: results.saida.length,
    };

    localStorage.setItem('results', JSON.stringify({ results, resultsSummary }));
    window.location.href = 'result.html';
});

function showMessage(text) {
    message.textContent = text;
    setTimeout(() => {
        message.textContent = '';
    }, 3000);
}
