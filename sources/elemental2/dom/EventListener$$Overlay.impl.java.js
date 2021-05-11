goog.module('elemental2.dom.EventListener.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.EventListener.$LambdaAdaptor$impl');

class $Overlay {
 /** @return {EventListener} */
 static $adapt__elemental2_dom_EventListener_$JsFunction(/** ?function(Event):void */ fn) {
  $Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.EventListener.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=EventListener$$Overlay.js.map
