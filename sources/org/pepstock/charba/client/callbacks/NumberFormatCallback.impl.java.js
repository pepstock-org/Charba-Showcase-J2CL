goog.module('org.pepstock.charba.client.callbacks.NumberFormatCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.NumberFormatCallback.$LambdaAdaptor$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let NumberFormatItem = goog.forwardDeclare('org.pepstock.charba.client.items.NumberFormatItem$impl');

/**
 * @interface
 * @extends {Scriptable<NumberFormatItem, ScaleContext>}
 */
class NumberFormatCallback {
 /** @return {NumberFormatCallback} */
 static $adapt(/** ?function(ScaleContext):NumberFormatItem */ fn) {
  NumberFormatCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  NumberFormatCallback.$clinit = () =>{};
  NumberFormatCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_NumberFormatCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_NumberFormatCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.NumberFormatCallback.$LambdaAdaptor$impl');
 }
}
NumberFormatCallback.$markImplementor(/**@type {Function}*/ (NumberFormatCallback));
$Util.$setClassMetadataForInterface(NumberFormatCallback, "org.pepstock.charba.client.callbacks.NumberFormatCallback");

exports = NumberFormatCallback;

//# sourceMappingURL=NumberFormatCallback.js.map
