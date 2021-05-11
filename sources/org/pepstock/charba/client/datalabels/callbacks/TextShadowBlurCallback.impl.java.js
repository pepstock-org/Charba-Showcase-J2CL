goog.module('org.pepstock.charba.client.datalabels.callbacks.TextShadowBlurCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.TextShadowBlurCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Scriptable<?number, DataLabelsContext>}
 */
class TextShadowBlurCallback {
 /** @return {TextShadowBlurCallback} */
 static $adapt(/** ?function(DataLabelsContext):?number */ fn) {
  TextShadowBlurCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TextShadowBlurCallback.$clinit = () =>{};
  TextShadowBlurCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_callbacks_TextShadowBlurCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_callbacks_TextShadowBlurCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.TextShadowBlurCallback.$LambdaAdaptor$impl');
 }
}
TextShadowBlurCallback.$markImplementor(/**@type {Function}*/ (TextShadowBlurCallback));
$Util.$setClassMetadataForInterface(TextShadowBlurCallback, "org.pepstock.charba.client.datalabels.callbacks.TextShadowBlurCallback");

exports = TextShadowBlurCallback;

//# sourceMappingURL=TextShadowBlurCallback.js.map
