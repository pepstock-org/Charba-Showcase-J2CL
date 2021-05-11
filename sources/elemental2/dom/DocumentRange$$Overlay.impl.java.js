goog.module('elemental2.dom.DocumentRange.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.DocumentRange.$LambdaAdaptor$impl');

class $Overlay {
 /** @return {DocumentRange} */
 static $adapt__elemental2_dom_DocumentRange_$JsFunction(/** ?function():Range */ fn) {
  $Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.DocumentRange.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DocumentRange$$Overlay.js.map
