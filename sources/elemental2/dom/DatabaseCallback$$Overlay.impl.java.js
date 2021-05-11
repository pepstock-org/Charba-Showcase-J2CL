goog.module('elemental2.dom.DatabaseCallback.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('elemental2.dom.DatabaseCallback.$LambdaAdaptor$impl');

class $Overlay {
 /** @return {DatabaseCallback} */
 static $adapt__elemental2_dom_DatabaseCallback_$JsFunction(/** ?function(Database):void */ fn) {
  $Overlay.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('elemental2.dom.DatabaseCallback.$LambdaAdaptor$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DatabaseCallback$$Overlay.js.map
