goog.module('elemental2.dom.WritableStreamDefaultController.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.WritableStreamDefaultController.$LambdaAdaptor$impl');

class $Overlay {
 /** @return {WritableStreamDefaultController} */
 static $adapt__elemental2_dom_WritableStreamDefaultController_$JsFunction(/** ?function(*):Promise<?void> */ fn) {
  $Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.WritableStreamDefaultController.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=WritableStreamDefaultController$$Overlay.js.map
