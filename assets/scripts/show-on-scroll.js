
var waypoint = new Waypoint({
    element: document.getElementById('education'),
    handler: function() {
    highlightNav('item1');
    },
  })

var waypoint2 = new Waypoint({
  element: document.getElementById('experiences'),
  handler: function() {
    unHighlightNav();
    highlightNav('item2');
  },
})

var waypoint3 = new Waypoint({
  element: document.getElementById('projects'),
  handler: function() {
    unHighlightNav();
    highlightNav('item3');
  },
})

var scrollBody = new Waypoint({
  element: document.getElementById('container'),
  handler: function() {
    unHighlightNav();
  }
})

function unHighlightNav() {
  let nav = document.getElementsByClassName("nav-link");
  for (let i=0; i < nav.length; i++){
    nav[i].classList.remove('highlight');
  }
}

function highlightNav(id) {
  unHighlightNav();
  document.getElementById(id).classList.add('highlight');
}

document.getElementById('item1').onclick = highlightNav('item1');
document.getElementById('item2').onclick = highlightNav('item2');
document.getElementById('item3').onclick = highlightNav('item3');
document.getElementById('name').onclick = unHighlightNav()