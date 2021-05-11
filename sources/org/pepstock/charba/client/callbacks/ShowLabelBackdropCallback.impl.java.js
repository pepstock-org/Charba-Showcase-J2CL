goog.module('org.pepstock.charba.client.callbacks.ShowLabelBackdropCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ShowLabelBackdropCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<?boolean, ScaleContext>}
 */
class ShowLabelBackdropCallback {
 /** @return {ShowLabelBackdropCallback} */
 static $adapt(/** ?function(ScaleContext):?boolean */ fn) {
  ShowLabelBackdropCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ShowLabelBackdropCallback.$clinit = () =>{};
  ShowLabelBackdropCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_ShowLabelBackdropCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_ShowLabelBackdropCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.ShowLabelBackdropCallback.$LambdaAdaptor$impl');
 }
}
ShowLabelBackdropCallback.$markImplementor(/**@type {Function}*/ (ShowLabelBackdropCallback));
$Util.$setClassMetadataForInterface(ShowLabelBackdropCallback, "org.pepstock.charba.client.callbacks.ShowLabelBackdropCallback");

exports = ShowLabelBackdropCallback;

//# sourceMappingURL=ShowLabelBackdropCallback.js.map
