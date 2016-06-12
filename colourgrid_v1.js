(function() {

  var body = document.getElementById('theBody');
  var colours = ['black','red','red', 'yellow','yellow', 'blue','blue', 'white', 'white',
                 'white', 'white', 'white', 'white'];

    function createGrid() {
        wipeBody();

        for (i = 0; i < 625; i++) {
            var thisDiv = document.createElement("div");
            thisDiv.className = "col-1-25";
            thisDiv.style.backgroundColor = colours[Math.floor(Math.random() * 13)];
            body.appendChild(thisDiv);
        }
        setTimeout(function(){createGrid();}, 100);
    }

    function wipeBody() {
      while(body.firstChild) {
        body.removeChild(body.firstChild);
      }
    }

    window.addEventListener('load', function(){createGrid()}, false);

})();
