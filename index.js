
let draggable =  new ej.base.Draggable(document.getElementById('element1'), {
    clone: false
});
let droppable = new ej.base.Droppable(document.getElementById('droppable'), {
    drop: (e) => {
        e.droppedElement.querySelector('.drag-text').textContent = 'Dropped';
    }
});