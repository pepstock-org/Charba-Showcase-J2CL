goog.module('org.pepstock.charba.client.callbacks.ElementAlignCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ElementAlignCallback.$LambdaAdaptor$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<ElementAlign, C>}
 */
class ElementAlignCallback {
 /** @template C @return {ElementAlignCallback<C>} */
 static $adapt(/** ?function(C):ElementAlign */ fn) {
  ElementAlignCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  ElementAlignCallback.$clinit = () =>{};
  ElementAlignCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_ElementAlignCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_ElementAlignCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.ElementAlignCallback.$LambdaAdaptor$impl');
 }
}
ElementAlignCallback.$markImplementor(/**@type {Function}*/ (ElementAlignCallback));
$Util.$setClassMetadataForInterface(ElementAlignCallback, "org.pepstock.charba.client.callbacks.ElementAlignCallback");

exports = ElementAlignCallback;

//# sourceMappingURL=ElementAlignCallback.js.map
