goog.module('org.pepstock.charba.client.datalabels.callbacks.AlignCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.AlignCallback.$LambdaAdaptor$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Align$impl');

/**
 * @interface
 * @extends {Scriptable<Align, DataLabelsContext>}
 */
class AlignCallback {
 /** @return {AlignCallback} */
 static $adapt(/** ?function(DataLabelsContext):Align */ fn) {
  AlignCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AlignCallback.$clinit = () =>{};
  AlignCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_callbacks_AlignCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_callbacks_AlignCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.AlignCallback.$LambdaAdaptor$impl');
 }
}
AlignCallback.$markImplementor(/**@type {Function}*/ (AlignCallback));
$Util.$setClassMetadataForInterface(AlignCallback, "org.pepstock.charba.client.datalabels.callbacks.AlignCallback");

exports = AlignCallback;

//# sourceMappingURL=AlignCallback.js.map
