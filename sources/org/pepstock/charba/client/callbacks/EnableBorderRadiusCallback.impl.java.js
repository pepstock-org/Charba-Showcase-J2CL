goog.module('org.pepstock.charba.client.callbacks.EnableBorderRadiusCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.EnableBorderRadiusCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<?boolean, DatasetContext>}
 */
class EnableBorderRadiusCallback {
 /** @return {EnableBorderRadiusCallback} */
 static $adapt(/** ?function(DatasetContext):?boolean */ fn) {
  EnableBorderRadiusCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  EnableBorderRadiusCallback.$clinit = () =>{};
  EnableBorderRadiusCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_EnableBorderRadiusCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_EnableBorderRadiusCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.EnableBorderRadiusCallback.$LambdaAdaptor$impl');
 }
}
EnableBorderRadiusCallback.$markImplementor(/**@type {Function}*/ (EnableBorderRadiusCallback));
$Util.$setClassMetadataForInterface(EnableBorderRadiusCallback, "org.pepstock.charba.client.callbacks.EnableBorderRadiusCallback");

exports = EnableBorderRadiusCallback;

//# sourceMappingURL=EnableBorderRadiusCallback.js.map
