/* <circular menu> */

var CircularMenu = Class.extend( {
  init : function init( id ) {
    this.id = id;
    this.offset = 0.0;

    this.setupMenu();
    this.setupItems();
    this.arrangeElements();
    
    this.start();
  },
  
  setupMenu : function setupMenu() {
    this.menu   = document.getElementById(this.id);
    this.width  = parseInt(this.menu.offsetWidth);
    this.height = parseInt(this.menu.offsetHeight);
    this.paddingTop = parseInt(this.menu.offsetTop);
    this.center = { x: this.width / 2, y: this.height / 2 };
    this.radius = this.width / 2.5;
    this.info = document.createElement( "DIV" );
    this.info.className = "info";
    this.menu.appendChild(this.info);
  },
  
  setupItems : function setupItems() {
    this.items = [];
    $A(this.menu.getElementsByTagName("IMG")).iterate( function( image ) {
      var item  = new CircularMenu.Item( image, this );
      this.items.push( item );
    }.scope(this) );
  },
  
  arrangeElements : function arrangeElements() {
    var paddingLeft = this.menu.offsetLeft;
    var blocks = this.items.length;
    this.items.iterate( function( item, count ) {
      var deg = ( ( ( Math.PI * 2 ) / blocks ) * count ) - this.offset;
      var x = Math.cos(deg) * this.radius;
      var y = Math.sin(deg) * this.radius;
      item.moveTo( paddingLeft + this.center.x + x, this.paddingTop + this.center.y - y );
    }.scope(this) );
    this.info.style.left = ( paddingLeft + this.center.x - ( this.info.offsetWidth / 2)) + "px";
    this.info.style.top  = ( this.paddingTop + this.center.y - ( this.info.offsetHeight / 2)) + "px";
  },
  
  rotate: function rotate() {
    if( this.rotating ) {
      this.offset += 0.005;
      if( this.offset >= ( 2 * Math.PI ) ) { this.offset -= ( 2 * Math.PI ); }
      this.arrangeElements();
      this.rotate.scope(this).after(25);
    }
  },
  
  start : function start() {
    this.rotating = true;
    this.rotate();
  },
  
  stop: function stop() {
    this.rotating = false;
  }
} );

CircularMenu.info = {};

CircularMenu.Item = Class.extend( {
  init : function init( elem, menu ) {
    this.element = elem;
    this.menu    = menu;
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
    ProtoJS.Event.observe( this.element, "click",
                           this.handleClick.scope(this) );
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
  
  handleFocus : function handleFocus() { 
    this.menu.stop();
    this.grow();
    this.menu.info.innerHTML = 
      "<h1>" + this.element.title + "</h1>" + this.getDescription();
  },
  
  handleLostFocus : function handleLostFocus() { 
    this.menu.info.innerHTML = "";
    this.shrink(); 
    this.menu.start();
  },
  
  getURL : function getURL() {
    return CircularMenu.info[this.menu.id][this.element.title].url;
  },
  
  getDescription : function getDescription() {
    return CircularMenu.info[this.menu.id][this.element.title].description;
  },
  
  handleClick     : function handleClick()     {
    var url = this.getURL();
    if( url.substring(0,7) == "http://" ) {
      window.open( url );
    } else {
      window.location = url;
    }
  },
  
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
    var dx = ( this.width * this.scale ) / 2;
    var dy = ( this.height * this.scale ) / 2;
    this.element.style.left = ( this.left - dx ) + "px";
    this.element.style.top  = ( this.top - dy ) + "px";
  },
  
  moveTo : function moveTo(left, top) {
    // TODO: animate ;-)
    this.goto(left, top);
  }
} );

new CircularMenu("circular-menu");

/* </circular menu> */
