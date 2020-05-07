(function () {
    "use strict";
  
  var menu = document.getElementById('menu'),
      about = document.getElementById('about'),
      projects = document.getElementById('projects');

      menu.onmousedown = function () {
          menu.className = '';
          about.className = '';
          projects.className = '';
    };

      menu.onclick = function () {
        if (about.style.left === "370px") {
            about.style.left = "205px";
            projects.style.left = "205px";
            menu.className = 'animone';
            about.className = 'animtwo';
            projects.className = 'animtwo';

        } else {
            about.style.left = "370px";
            projects.style.left = "50px";
            menu.className = 'animone';
            about.className = 'animtwo';
            projects.className = 'animtwo';
        }
    };
})();
