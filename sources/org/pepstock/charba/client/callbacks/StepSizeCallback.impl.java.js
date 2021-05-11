goog.module('org.pepstock.charba.client.callbacks.StepSizeCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.StepSizeCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<?number, ScaleContext>}
 */
class StepSizeCallback {
 /** @return {StepSizeCallback} */
 static $adapt(/** ?function(ScaleContext):?number */ fn) {
  StepSizeCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  StepSizeCallback.$clinit = () =>{};
  StepSizeCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_StepSizeCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_StepSizeCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.StepSizeCallback.$LambdaAdaptor$impl');
 }
}
StepSizeCallback.$markImplementor(/**@type {Function}*/ (StepSizeCallback));
$Util.$setClassMetadataForInterface(StepSizeCallback, "org.pepstock.charba.client.callbacks.StepSizeCallback");

exports = StepSizeCallback;

//# sourceMappingURL=StepSizeCallback.js.map
