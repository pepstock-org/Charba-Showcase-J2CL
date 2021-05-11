goog.module('org.pepstock.charba.client.callbacks.RotationCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RotationCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<?number, C>}
 */
class RotationCallback {
 /** @template C @return {RotationCallback<C>} */
 static $adapt(/** ?function(C):?number */ fn) {
  RotationCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  RotationCallback.$clinit = () =>{};
  RotationCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_RotationCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_RotationCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.RotationCallback.$LambdaAdaptor$impl');
 }
}
RotationCallback.$markImplementor(/**@type {Function}*/ (RotationCallback));
$Util.$setClassMetadataForInterface(RotationCallback, "org.pepstock.charba.client.callbacks.RotationCallback");

exports = RotationCallback;

//# sourceMappingURL=RotationCallback.js.map
