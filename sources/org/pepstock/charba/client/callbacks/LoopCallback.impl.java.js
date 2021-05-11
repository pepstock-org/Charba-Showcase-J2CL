goog.module('org.pepstock.charba.client.callbacks.LoopCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LoopCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<?boolean, DatasetContext>}
 */
class LoopCallback {
 /** @return {LoopCallback} */
 static $adapt(/** ?function(DatasetContext):?boolean */ fn) {
  LoopCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LoopCallback.$clinit = () =>{};
  LoopCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_LoopCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_LoopCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.LoopCallback.$LambdaAdaptor$impl');
 }
}
LoopCallback.$markImplementor(/**@type {Function}*/ (LoopCallback));
$Util.$setClassMetadataForInterface(LoopCallback, "org.pepstock.charba.client.callbacks.LoopCallback");

exports = LoopCallback;

//# sourceMappingURL=LoopCallback.js.map
