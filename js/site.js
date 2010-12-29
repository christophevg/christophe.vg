/* <circular menu> */

var CircularMenu = Class.extend( {
  init : function init( id ) {
    this.id = id;
    this.offset = 0.0;
    this.setupMenu();
    this.setupItems();
    this.arrangeElements();
    this.rotate();
  },
  
  setupMenu : function setupMenu() {
    this.ul = document.getElementById(this.id);
    this.width = parseInt(this.ul.offsetWidth);
    this.height = parseInt(this.ul.offsetHeight);
  },
  
  setupItems : function setupItems() {
    this.items = [];
    $A(this.ul.getElementsByTagName("LI")).iterate( function( item ) {
      this.items.push( new CircularMenu.Item( item ) );
    }.scope(this) );
  },
  
  arrangeElements : function arrangeElements() {
    var blocks = this.items.length;
    var radius = 180;
    var center = { x : 200, y : 200 };
    this.items.iterate( function( item, count ) {
      var deg = ( ( ( Math.PI * 2 ) / blocks ) * count ) + this.offset;
      var x = Math.cos(deg) * radius;
      var y = Math.sin(deg) * radius;
      item.goto( center.x + x, center.y - y );
    }.scope(this) );
  },
  
  rotate: function rotate() {
    this.offset -= 0.001;
    this.arrangeElements();
    this.rotate.scope(this).after(5);
  }
} );

CircularMenu.Item = Class.extend( {
  init : function init( elem ) {
    this.li = elem;
    this.li.style.position = "absolute";
    this.li.style.float    = "none";
    this.width = this.li.offsetWidth;
    this.height = this.li.offsetHeight;
    this.center = { x : this.width / 2, y : this.height /2 };
  },
  
  goto : function goto(left, top) {
    // TODO: animate movement
    this.li.style.left = ( this.width + left ) + "px";
    this.li.style.top  = ( top ) + "px";
  }
} );

new CircularMenu("circular-menu");

/* </circular menu> */
