goog.module('elemental2.dom.DocumentEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.DocumentEvent.$LambdaAdaptor$impl');

class $Overlay {
 /** @return {DocumentEvent} */
 static $adapt__elemental2_dom_DocumentEvent_$JsFunction(/** ?function(?string):Event */ fn) {
  $Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.DocumentEvent.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DocumentEvent$$Overlay.js.map
