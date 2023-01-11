let _Container = document.getElementById('container');
let _Play = document.getElementById('play');
let _Grid = document.getElementById('grid');

_Play.addEventListener('click',

    function() {

        _Container.style.display = 'block';

        for (i=1; i <= 100; i++) {
            
            let _NewCell = document.createElement('div');
            _NewCell.classList.add('cell');
            _NewCell.innerHTML = [i];
            _Grid.append(_NewCell);
            
            
        }

    }
);