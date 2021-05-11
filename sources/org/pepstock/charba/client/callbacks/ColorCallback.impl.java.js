goog.module('org.pepstock.charba.client.callbacks.ColorCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<*, C>}
 */
class ColorCallback {
 /** @template C @return {ColorCallback<C>} */
 static $adapt(/** ?function(C):* */ fn) {
  ColorCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  ColorCallback.$clinit = () =>{};
  ColorCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_ColorCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_ColorCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.ColorCallback.$LambdaAdaptor$impl');
 }
}
ColorCallback.$markImplementor(/**@type {Function}*/ (ColorCallback));
$Util.$setClassMetadataForInterface(ColorCallback, "org.pepstock.charba.client.callbacks.ColorCallback");

exports = ColorCallback;

//# sourceMappingURL=ColorCallback.js.map
