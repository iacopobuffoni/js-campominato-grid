let _Container = document.getElementById('container');
let _Play = document.getElementById('play');
let _Grid = document.getElementById('grid');
let _Mode = document.getElementById('mode');

_Play.addEventListener('click',

    function() {

        _Container.style.display = 'block';

        if (_Mode.value == 'easy') {

            for (i=1; i <= 100; i++) {
            
                let _NewCell = document.createElement('div');
                _NewCell.classList.add('easy');
                _NewCell.innerHTML = [i];
    
                _NewCell.addEventListener('click',
    
                    function() {
                        
                        if (this.classList.contains('clicked')) {
    
                            this.classList.remove('clicked');
    
                        } else {
    
                            this.classList.add('clicked');
                            console.log(this.innerHTML);
    
                        }
                    }
                )
    
                _Grid.append(_NewCell);
                    
            }
        }

        if (_Mode.value == 'medium') {

            for (i=1; i <= 81; i++) {
            
                let _NewCell = document.createElement('div');
                _NewCell.classList.add('medium');
                _NewCell.innerHTML = [i];
    
                _NewCell.addEventListener('click',
    
                    function() {
                        
                        if (this.classList.contains('clicked')) {
    
                            this.classList.remove('clicked');
    
                        } else {
    
                            this.classList.add('clicked');
                            console.log(this.innerHTML);
    
                        }
                    }
                )
    
                _Grid.append(_NewCell);
                    
            }
        }

        if (_Mode.value == 'hard') {

            for (i=1; i <= 49; i++) {
            
                let _NewCell = document.createElement('div');
                _NewCell.classList.add('hard');
                _NewCell.innerHTML = [i];
            
                _NewCell.addEventListener('click',
            
                    function() {
                        
                        if (this.classList.contains('clicked')) {
            
                            this.classList.remove('clicked');
            
                        } else {
            
                            this.classList.add('clicked');
                            console.log(this.innerHTML);
            
                        }
                    }
                )
            
                _Grid.append(_NewCell);
                    
            }
        }
    }
);

