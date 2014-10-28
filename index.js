'use strict';

var dispatch = require('d3-dispatch')
  , rebind   = require('d3-rebind')

module.exports = function(){
  
  var dispatcher = dispatch('toggling','opening','closing','toggle','open','close')
    , state
    , parent

  render.parent = function(_){
    parent = _; return this;
  }

  render.toggle = function(){
    setState( (state === undefined ? false : !state) );
    return this;
  }

  render.open = function(){
    setState(true); return this;
  }

  render.close = function(){
    setState(false); return this;
  }

  function render(el){
    dispatcher.on('toggle.rerender', rerender(el));
    parent = parent || el.parentNode;
    el.classList.add('drawer');
    var w = el.getBoundingClientRect()['width'];
    el.style.left = (state ? '0px' : (-w + 'px') );
    parent.style['padding-left'] = (!state ? '0px' : (w + 'px') );
  }

  function rerender(el){
    return function(){ render(el); };
  }

  function setState(v){
    if (v === state) return;
    state = v;
    dispatcher.toggling(state);
    dispatcher[ state ? 'opening' : 'closing' ]();
    dispatcher.toggle(state);                // rerender happens here
    dispatcher[ state ? 'open' : 'close' ]();
  }

  rebind(render,dispatcher,'on');
  return render;
}

