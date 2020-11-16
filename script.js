/**
 * Help
 */
function log(message) {
    console.log('> ' + message);
}

const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

function dragstart() {
    // log('CARD: Start drag');
}

function drag() {
    // log('> CARD: Is dragging');

}

function dragend() {
    // log('> CARD: Stop drag');
}

/* Local onde vou soltar os cartões */

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});

function dragenter() {
    log('DROPZONE: Enter in zone');
}

function dragover() {
    log('DROPZONE: Over');
}

function dragleave() {
    log('DROPZONE: Leave');
}

function drop() {
    log('DROPZONE: Dropped');
}