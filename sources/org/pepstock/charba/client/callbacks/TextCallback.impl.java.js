goog.module('org.pepstock.charba.client.callbacks.TextCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TextCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<*, C>}
 */
class TextCallback {
 /** @template C @return {TextCallback<C>} */
 static $adapt(/** ?function(C):* */ fn) {
  TextCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  TextCallback.$clinit = () =>{};
  TextCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_TextCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_TextCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.TextCallback.$LambdaAdaptor$impl');
 }
}
TextCallback.$markImplementor(/**@type {Function}*/ (TextCallback));
$Util.$setClassMetadataForInterface(TextCallback, "org.pepstock.charba.client.callbacks.TextCallback");

exports = TextCallback;

//# sourceMappingURL=TextCallback.js.map
