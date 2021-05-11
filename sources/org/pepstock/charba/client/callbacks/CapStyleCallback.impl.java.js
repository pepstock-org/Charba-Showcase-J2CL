goog.module('org.pepstock.charba.client.callbacks.CapStyleCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CapStyleCallback.$LambdaAdaptor$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<CapStyle, C>}
 */
class CapStyleCallback {
 /** @template C @return {CapStyleCallback<C>} */
 static $adapt(/** ?function(C):CapStyle */ fn) {
  CapStyleCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  CapStyleCallback.$clinit = () =>{};
  CapStyleCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_CapStyleCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_CapStyleCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.CapStyleCallback.$LambdaAdaptor$impl');
 }
}
CapStyleCallback.$markImplementor(/**@type {Function}*/ (CapStyleCallback));
$Util.$setClassMetadataForInterface(CapStyleCallback, "org.pepstock.charba.client.callbacks.CapStyleCallback");

exports = CapStyleCallback;

//# sourceMappingURL=CapStyleCallback.js.map
