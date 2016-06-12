(function() {

    var container = document.getElementById('container');
    var colours = ['orange','green','purple','red','red','yellow','yellow','blue','blue',
                   'pink','darkorchid','white','white','white','white'];
    var numberOfColours = 9;

    function createGrid() {
        wipeContainer();
        for (i = 1; i < 1090; i++) {
            var thisDiv = document.createElement('div');
            thisDiv.id = i;
            thisDiv.className = "col-1-25";
            container.appendChild(thisDiv);
        }
        createColumns();
        colourGrid();
    }

    function createColumns() {
        var counter = 0;
        for (k = 10; k < 1090; k++) {
            var thisDiv = document.getElementById(k);
            thisDiv.className = "col-1-25 column";
            counter++;
            if (counter % 6 === 0)
                k += 18;
            else if (counter % 3 === 0)
                k += 9;
        }
        for (i = 331; i < 364; i++) {
            var thisDiv = document.getElementById(i);
            thisDiv.className = "col-1-25 column";
        }
        for (j = 694; j < 727; j++) {
            var thisDiv = document.getElementById(j);
            thisDiv.className = "col-1-25 column";
        }
    }

    function colourGrid() {
        if (colours.length !== 0) {
            for (i = 1; i < 1090; i++) {
                var thisDiv = document.getElementById(i);
                if (thisDiv.className !== "col-1-25 column")
                    thisDiv.className = "col-1-25 " + colours[Math.floor(Math.random() * colours.length)];
            }
            setTimeout(function(){colourGrid();}, 100);
        }
    }

    function mainEvent(e) {
        switch(event.target.className) {
            case "col-1-25 green":
                removeColour('green');
                break;
            case "col-1-25 orange":
                removeColour('orange');
                break;
            case "col-1-25 purple":
                removeColour('purple');
                break;
            case "col-1-25 pink":
                removeColour('pink');
                break;
            case "col-1-25 darkorchid":
                removeColour('darkorchid');
                break;
            case "col-1-25 red":
                removeColour('red');
                break;
            case "col-1-25 blue":
                removeColour('blue');
                break;
            case "col-1-25 yellow":
                removeColour('yellow');
                break;
            case "col-1-25 white":
                removeColour('white');
                break;
            case "col-1-25":
                if (numberOfColours === 0) {
                    colours = ['orange','green','purple','red','red','yellow','yellow','blue','blue',
                               'pink','darkorchid','white','white','white','white'];
                    createGrid();
                }
                break;
        }
    }

    function removeColour(colour) {
        numberOfColours--;
        //remove colour class from each div that has it
        var elems = document.querySelectorAll('div.' + colour);
        [].forEach.call(elems, function(el) {
            el.classList.remove(colour);
        });
        //removes the selected colour from colours array
        for (i = 0; i < colours.length; i++) {
            if (colours[i] === colour) {
                colours.splice(i, 1);
                i--;
            }
        }
    }

    function wipeContainer() {
        numberOfColours = 9;
        //resets numberOfColours and removes all container's children
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    window.addEventListener('load', createGrid, false);
    container.addEventListener('click', mainEvent, false);

})();
