goog.module('org.pepstock.charba.client.callbacks.CountCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CountCallback.$LambdaAdaptor$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');

/**
 * @interface
 * @extends {Scriptable<Integer, ScaleContext>}
 */
class CountCallback {
 /** @return {CountCallback} */
 static $adapt(/** ?function(ScaleContext):Integer */ fn) {
  CountCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  CountCallback.$clinit = () =>{};
  CountCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_CountCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_CountCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.CountCallback.$LambdaAdaptor$impl');
 }
}
CountCallback.$markImplementor(/**@type {Function}*/ (CountCallback));
$Util.$setClassMetadataForInterface(CountCallback, "org.pepstock.charba.client.callbacks.CountCallback");

exports = CountCallback;

//# sourceMappingURL=CountCallback.js.map
