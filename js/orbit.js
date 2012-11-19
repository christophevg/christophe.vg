/**
 * orbit.js - a simple rotating menu
 * author: Christophe VG <contact+obit@christophe.vg>
 */

/**
 * we register one top-level Orbit namespace to hold everything we need.
 */

var Orbit = {
  // like the really missing getElements(ByClass)
  getElements : function getElements( type, root, tag ) {
    root = root || document;
    tag  = tag  || "*";

    var elems = [];
    $A(document.getElementsByTagName( tag )).iterate( function( element ) {
      var classes = $A(element.className.split( / / ));
      if( classes.has( "orbit" ) && classes.has( type ) ) {
        elems.push(element);
      }
    } );
    return elems;
  },

  // credits go to http://www.quirksmode.org/dom/getstyles.html
  getStyle : function getStyle(el,styleProp) {
    var mapping = { 
                    "font-size" : "fontSize",
                    "font-family" : "fontFamily",
                    "background-color" : "backgroundColor"
                  };
    if( ProtoJS.Browser.IE && mapping[styleProp] ) { 
      styleProp = mapping[styleProp]; 
    }
	  if( el.currentStyle ) {
		  var y = el.currentStyle[styleProp];
	  } else if( window.getComputedStyle ) {
		  var y = document.defaultView.getComputedStyle( el, null )
		                  .getPropertyValue(styleProp);
		}
	  return y;
  }
};

/**
 * an Orbit.menu is any element that contains Orbit.items and Orbit.info
 */

Orbit.menu = Class.extend( {
  init : function init( menu ) {
    this.menu   = menu;
    this.offset = 0.0;

    this.setupMenu();
    this.setupInfo();
    this.setupItems();
    this.arrangeElements();
    
    this.start();
  },
  
  setupMenu : function setupMenu() {
    this.width      = parseInt(this.menu.offsetWidth);
    this.height     = parseInt(this.menu.offsetHeight);
    this.paddingTop = parseInt(this.menu.offsetTop);
    this.center     = { x: this.width / 2, y: this.height / 2 };
    // TODO: make this exact based on width of an item
    this.radius     = this.width / 2.5;
  },

  setupInfo : function setupInfo() {
    var info, elems = Orbit.getElements( "info", this.menu );
    if( elems.length > 0 ) {
      info = elems.shift();
    }
    this.info = new Orbit.Info(info);
  },
  
  setupItems : function setupItems() {
    this.items = [];
    Orbit.getElements( "item", this.menu ).iterate( function( item ) {
      this.items.push( new Orbit.Item( item, this ) );
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
  
  startAfter : function startAfter(delay) {
    this.waitStart = new Date().valueOf();
    this.waitFor   = delay;
    if( ! this.waitingToStart ) { this.waitForStart(); }
  },
  
  waitForStart : function waitForStart() {
    if( this.waitStart == 0 ) { return; } // has been reset or something
    this.waitingToStart = true;
    var now = new Date().valueOf();
    if( now - this.waitStart > this.waitFor ) {
      this.stopWaitingToStart();
      this.start();
      return;
    }
    this.waitForStart.scope(this).after(10);
  },
  
  stopWaitingToStart : function stopWaitingToStart() {
    this.waitStart = 0;
    this.waitFor = 0;
    this.waitingToStart = false;
  },

  stop: function stop() {
    this.rotating = false;
    this.stopWaitingToStart();
  }
} );

/**
 * an Orbit.info is an element whose innerHTML is filled with a title and
 * description of the Orbit.item that currently has the focus or if none is
 * selected, its own (default) content.
 */

Orbit.Info = Class.extend( {
  init : function init( element ) {
    if( ! element ) { return; }
    this.element = element;
    this.defaultContent = this.element.innerHTML;
  },
  
  show : function show( html ) {
    if( ! this.element ) { return };
    this.element.innerHTML = html;
  },
  
  hide : function hide() {
    if( ! this.element ) { return };
    this.show( this.defaultContent );
  }
} );

/**
 * an Orbit.item is the element that is moved around and grown/shrunk on focus
 */

Orbit.Item = Class.extend( {
  init : function init( elem, menu ) {
    this.element = elem;
    this.menu    = menu;

    this.scale = 0.60;

    this.analyzeElement();
    this.setupElement();
    this.updateElement();
  },
  
  analyzeElement : function analyzeElement() {
    this.width  = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.fontSize = parseInt(Orbit.getStyle( this.element, "font-size" )) / this.scale;
    this.center = { x : this.width / 2, y : this.height /2 };
  },

  setupElement : function setupElement() {
    this.element.style.position = "absolute"; // make sure
    this.left = 0;
    this.top  = 0;
    ProtoJS.Event.observe( this.element, "mouseover", 
                           this.handleFocus.scope(this) );
    ProtoJS.Event.observe( this.element, "mouseout", 
                           this.handleLostFocus.scope(this) );
  },
  
  updateElement : function updateElement() {
    // size
    var width = this.width * this.scale;
    var height = this.height * this.scale;
    this.element.style.width  = width  + "px";
    this.element.style.height = height + "px";

    // position
    var dx = ( this.width * this.scale ) / 2;
    var dy = ( this.height * this.scale ) / 2;
    this.element.style.left = ( this.left - dx ) + "px";
    this.element.style.top  = ( this.top - dy ) + "px";
    
    // font size
    this.element.style.fontSize = ( this.fontSize * this.scale ) + "px";
  },
    
  handleFocus : function handleFocus() { 
    this.menu.stop();
    this.grow();
    this.menu.info.show( "<h1>" + this.getTitle() + "</h1>" + 
                         this.getDescription() );
  },
  
  getTitle: function getTitle() {
    return this.element.title ? this.element.title : this.element.innerHTML;
  },
  
  getDescription: function getDescription() {
    return this.element.getAttribute("data-description") || "";
  },
  
  handleLostFocus : function handleLostFocus() { 
    this.menu.info.hide();
    this.shrink(); 
    this.menu.startAfter(750);
  },
  
  grow : function grow() {
    this.scaleDelta = 0.10;
    this.processModification()
  },
  
  shrink : function shrink() {
    this.scaleDelta = -0.10;
    this.processModification();
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

  goTo : function goTo(left, top) {
    this.left = left;
    this.top  = top;
    this.updateElement();
  },
  
  moveTo : function moveTo(left, top) {
    this.goTo(left, top);
  }
} );

/**
 * register an event handler when the window has been loaded to look for orbit
 * menu's and activate them by creating a new instance of the Orbit.menu class
 * for them.
 */
ProtoJS.Event.observe( window, "load", function() {
  Orbit.getElements( "menu" ).iterate( function( menu ) {
    new Orbit.menu( menu );
  } );
} );
