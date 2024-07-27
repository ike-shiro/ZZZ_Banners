let parent = document.getElementById('bg_lines');
let elem = parent.querySelector('.bg_line');


for (let i = 0; i < 200; i++) {
    let clone = elem.cloneNode(true);
    parent.appendChild(clone);
}

