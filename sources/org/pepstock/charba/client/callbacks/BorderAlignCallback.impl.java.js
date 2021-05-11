goog.module('org.pepstock.charba.client.callbacks.BorderAlignCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderAlignCallback.$LambdaAdaptor$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');

/**
 * @interface
 * @extends {Scriptable<BorderAlign, DatasetContext>}
 */
class BorderAlignCallback {
 /** @return {BorderAlignCallback} */
 static $adapt(/** ?function(DatasetContext):BorderAlign */ fn) {
  BorderAlignCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  BorderAlignCallback.$clinit = () =>{};
  BorderAlignCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_BorderAlignCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_BorderAlignCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.BorderAlignCallback.$LambdaAdaptor$impl');
 }
}
BorderAlignCallback.$markImplementor(/**@type {Function}*/ (BorderAlignCallback));
$Util.$setClassMetadataForInterface(BorderAlignCallback, "org.pepstock.charba.client.callbacks.BorderAlignCallback");

exports = BorderAlignCallback;

//# sourceMappingURL=BorderAlignCallback.js.map
