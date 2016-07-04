(function() {

    var container = document.getElementById('container');
    var colours = ['orange','green','purple','red','red','yellow','yellow','blue','blue',
                   'pink','darkorchid','white','white','white','white'];

    //fills the page with a grid of divs within the div container
    function createGrid() {
        for (i = 1; i < 1090; i++) {
            var thisDiv = document.createElement('div');
            thisDiv.id = i;
            thisDiv.className = "col-1-25";
            container.appendChild(thisDiv);
        }
        createColumns();
        colourGrid();
    }
    //takes this grid and creates rows and columns by assigning the appropriate
    //elements the class column. (written in a rush: needs refactoring but works for now)
    function createColumns() {
        for (k = 10, counter = 1; k < 1090; k++, counter++) {
            var thisDiv = document.getElementById(k);
            thisDiv.className = "col-1-25 column";
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
    //fills each non-column div of the grid with a random colour from colours array
    //the function calls itself every 100ms until there are no colours remaining in the array.
    function colourGrid() {
        if (colours.length !== 0) {
            for (i = 1; i < 1090; i++) {
                var thisDiv = document.getElementById(i);
                if (thisDiv.className !== "col-1-25 column")
                    thisDiv.className = "col-1-25 " + colours[Math.floor(Math.random() * colours.length)];
            }
            setTimeout(colourGrid, 100);
        }
    }
    //clicking on any child div of container will call this event.
    function mainEvent(event) {
        var targetColour = event.target.className.replace(/col-1-25\s/, '');
        //if there are no more colours left in the array then reset
        if (colours.length === 0) {
              colours = ['orange','green','purple','red','red','yellow','yellow','blue','blue',
                         'pink','darkorchid','white','white','white','white'];
              colourGrid();
        }
        //if target element has a colour then remove it
        else if (targetColour !== "column")
            removeColour(targetColour);
    }

    function removeColour(colour) {
        //remove colour class from each div that has it
        var elems = document.querySelectorAll('div.' + colour);
        [].forEach.call(elems, function(el) {
            el.className = "col-1-25";
        });
        //remove the colour from colours array
        for (i = 0; i < colours.length; i++)
            if (colours[i] === colour) {
                colours.splice(i, 1);
                i--;
            }
    }

    window.addEventListener('load', createGrid, false);
    container.addEventListener('click', mainEvent, false);

})();
