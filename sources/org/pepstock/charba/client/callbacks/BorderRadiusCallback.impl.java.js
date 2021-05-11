goog.module('org.pepstock.charba.client.callbacks.BorderRadiusCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderRadiusCallback.$LambdaAdaptor$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');

/**
 * @interface
 * @extends {Scriptable<*, DatasetContext>}
 */
class BorderRadiusCallback {
 /** @return {BorderRadiusCallback} */
 static $adapt(/** ?function(DatasetContext):* */ fn) {
  BorderRadiusCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  BorderRadiusCallback.$clinit = () =>{};
  BorderRadiusCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_BorderRadiusCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_BorderRadiusCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.BorderRadiusCallback.$LambdaAdaptor$impl');
 }
}
BorderRadiusCallback.$markImplementor(/**@type {Function}*/ (BorderRadiusCallback));
$Util.$setClassMetadataForInterface(BorderRadiusCallback, "org.pepstock.charba.client.callbacks.BorderRadiusCallback");

exports = BorderRadiusCallback;

//# sourceMappingURL=BorderRadiusCallback.js.map
