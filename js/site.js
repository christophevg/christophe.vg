/* <circular menu> */

var CircularMenu = Class.extend( {
  init : function init( id ) {
    this.id = id;
    this.offset = 0.0;
    this.radius = 130;

    this.setupMenu();
    this.setupItems();
    this.arrangeElements();
    this.rotate();
  },
  
  setupMenu : function setupMenu() {
    this.menu   = document.getElementById(this.id);
    this.width  = parseInt(this.menu.offsetWidth);
    this.height = parseInt(this.menu.offsetHeight);
    this.paddingTop = parseInt(this.menu.offsetTop);
    this.center = { x: this.width / 2, y: this.height / 2 };
  },
  
  setupItems : function setupItems() {
    this.items = [];
    $A(this.menu.getElementsByTagName("IMG")).iterate( function( image ) {
      var item  = new CircularMenu.Item( image );
      this.items.push( item );
    }.scope(this) );
  },
  
  arrangeElements : function arrangeElements() {
    var blocks = this.items.length;
    this.items.iterate( function( item, count ) {
      var deg = ( ( ( Math.PI * 2 ) / blocks ) * count ) + this.offset;
      var x = Math.cos(deg) * this.radius;
      var y = Math.sin(deg) * this.radius;
      item.moveTo( this.center.x + x, this.paddingTop + this.center.y - y );
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
    this.element = elem;
    this.analyzeElement();
    
    this.scale = 0.60;
    this.setupElement();
    
    this.updateElement();
  },
  
  analyzeElement : function analyzeElement() {
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.center = { x : this.width / 2, y : this.height /2 };
  },

  setupElement : function setupElement() {
    this.element.style.position = "absolute";
    this.element.style.float    = "none";
    ProtoJS.Event.observe( this.element, "mouseover", 
                           this.handleFocus.scope(this) );
    ProtoJS.Event.observe( this.element, "mouseout", 
                           this.handleLostFocus.scope(this) );
  },
  
  updateElement : function updateElement() {
    var width = this.width * this.scale;
    var height = this.height * this.scale;
    this.element.style.width  = width  + "px";
    this.element.style.height = height + "px";
  },
    
  processModification : function processModification() {
    if( this.scaleDelta == 0 ) { return; }

    // scaling
    this.scale += this.scaleDelta;
    if( this.scale >= 1.00 ) { this.scale = 1.00; this.scaleDelta = 0; }
    if( this.scale <  0.60 ) { this.scale = 0.60; this.scaleDelta = 0; }

    this.updateElement();
    
    this.processModification.scope(this).after(30); 
  },
  
  handleFocus     : function handleFocus()     {  this.grow();  },
  handleLostFocus : function handleLostFocus() { this.shrink(); },
  
  grow : function grow() {
    this.scaleDelta = 0.10;
    this.processModification()
  },
  
  shrink : function shrink() {
    this.scaleDelta = -0.10;
    this.processModification();
  },

  goto : function goto(left, top) {
    this.left = left;
    this.top  = top;
    var paddingLeft = this.element.parentNode.offsetLeft;
    var dx = ( this.width * this.scale ) / 2;
    var dy = ( this.height * this.scale ) / 2;
    this.element.style.left = ( paddingLeft + this.left - dx ) + "px";
    this.element.style.top  = ( this.top - dy ) + "px";
  },
  
  moveTo : function moveTo(left, top) {
    // TODO: animate ;-)
    this.goto(left, top);
  }
} );

new CircularMenu("circular-menu");

/* </circular menu> */
