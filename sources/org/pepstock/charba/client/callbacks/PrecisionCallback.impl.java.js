goog.module('org.pepstock.charba.client.callbacks.PrecisionCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PrecisionCallback.$LambdaAdaptor$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');

/**
 * @interface
 * @extends {Scriptable<Integer, ScaleContext>}
 */
class PrecisionCallback {
 /** @return {PrecisionCallback} */
 static $adapt(/** ?function(ScaleContext):Integer */ fn) {
  PrecisionCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  PrecisionCallback.$clinit = () =>{};
  PrecisionCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_PrecisionCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_PrecisionCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.PrecisionCallback.$LambdaAdaptor$impl');
 }
}
PrecisionCallback.$markImplementor(/**@type {Function}*/ (PrecisionCallback));
$Util.$setClassMetadataForInterface(PrecisionCallback, "org.pepstock.charba.client.callbacks.PrecisionCallback");

exports = PrecisionCallback;

//# sourceMappingURL=PrecisionCallback.js.map
