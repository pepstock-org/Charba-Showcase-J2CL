goog.module('org.pepstock.charba.client.callbacks.TextAlignCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TextAlignCallback.$LambdaAdaptor$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<TextAlign, C>}
 */
class TextAlignCallback {
 /** @template C @return {TextAlignCallback<C>} */
 static $adapt(/** ?function(C):TextAlign */ fn) {
  TextAlignCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  TextAlignCallback.$clinit = () =>{};
  TextAlignCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_TextAlignCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_TextAlignCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.TextAlignCallback.$LambdaAdaptor$impl');
 }
}
TextAlignCallback.$markImplementor(/**@type {Function}*/ (TextAlignCallback));
$Util.$setClassMetadataForInterface(TextAlignCallback, "org.pepstock.charba.client.callbacks.TextAlignCallback");

exports = TextAlignCallback;

//# sourceMappingURL=TextAlignCallback.js.map
