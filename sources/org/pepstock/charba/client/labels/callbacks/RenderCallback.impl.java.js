goog.module('org.pepstock.charba.client.labels.callbacks.RenderCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let LabelsContext = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.labels.callbacks.RenderCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<*, LabelsContext>}
 */
class RenderCallback {
 /** @return {RenderCallback} */
 static $adapt(/** ?function(LabelsContext):* */ fn) {
  RenderCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  RenderCallback.$clinit = () =>{};
  RenderCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_labels_callbacks_RenderCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_labels_callbacks_RenderCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.labels.callbacks.RenderCallback.$LambdaAdaptor$impl');
 }
}
RenderCallback.$markImplementor(/**@type {Function}*/ (RenderCallback));
$Util.$setClassMetadataForInterface(RenderCallback, "org.pepstock.charba.client.labels.callbacks.RenderCallback");

exports = RenderCallback;

//# sourceMappingURL=RenderCallback.js.map
