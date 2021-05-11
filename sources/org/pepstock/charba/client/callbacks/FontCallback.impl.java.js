goog.module('org.pepstock.charba.client.callbacks.FontCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback.$LambdaAdaptor$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<FontItem, C>}
 */
class FontCallback {
 /** @template C @return {FontCallback<C>} */
 static $adapt(/** ?function(C):FontItem */ fn) {
  FontCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  FontCallback.$clinit = () =>{};
  FontCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_FontCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_FontCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.FontCallback.$LambdaAdaptor$impl');
 }
}
FontCallback.$markImplementor(/**@type {Function}*/ (FontCallback));
$Util.$setClassMetadataForInterface(FontCallback, "org.pepstock.charba.client.callbacks.FontCallback");

exports = FontCallback;

//# sourceMappingURL=FontCallback.js.map
