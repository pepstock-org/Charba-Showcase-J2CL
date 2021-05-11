goog.module('org.pepstock.charba.client.datalabels.callbacks.AnchorCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.AnchorCallback.$LambdaAdaptor$impl');
let Anchor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Anchor$impl');

/**
 * @interface
 * @extends {Scriptable<Anchor, DataLabelsContext>}
 */
class AnchorCallback {
 /** @return {AnchorCallback} */
 static $adapt(/** ?function(DataLabelsContext):Anchor */ fn) {
  AnchorCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AnchorCallback.$clinit = () =>{};
  AnchorCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.AnchorCallback.$LambdaAdaptor$impl');
 }
}
AnchorCallback.$markImplementor(/**@type {Function}*/ (AnchorCallback));
$Util.$setClassMetadataForInterface(AnchorCallback, "org.pepstock.charba.client.datalabels.callbacks.AnchorCallback");

exports = AnchorCallback;

//# sourceMappingURL=AnchorCallback.js.map
