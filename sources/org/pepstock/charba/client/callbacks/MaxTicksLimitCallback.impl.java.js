goog.module('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback.$LambdaAdaptor$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');

/**
 * @interface
 * @extends {Scriptable<Integer, ScaleContext>}
 */
class MaxTicksLimitCallback {
 /** @return {MaxTicksLimitCallback} */
 static $adapt(/** ?function(ScaleContext):Integer */ fn) {
  MaxTicksLimitCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  MaxTicksLimitCallback.$clinit = () =>{};
  MaxTicksLimitCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback.$LambdaAdaptor$impl');
 }
}
MaxTicksLimitCallback.$markImplementor(/**@type {Function}*/ (MaxTicksLimitCallback));
$Util.$setClassMetadataForInterface(MaxTicksLimitCallback, "org.pepstock.charba.client.callbacks.MaxTicksLimitCallback");

exports = MaxTicksLimitCallback;

//# sourceMappingURL=MaxTicksLimitCallback.js.map
