goog.module('org.pepstock.charba.client.callbacks.Scriptable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.Scriptable.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T, C
 */
class Scriptable {
 /** @abstract @return {T} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** C */ context) {}
 /** @template T, C @return {Scriptable<T, C>} */
 static $adapt(/** ?function(C):T */ fn) {
  Scriptable.$clinit();
  return /**@type {!$LambdaAdaptor<T, C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  Scriptable.$clinit = () =>{};
  Scriptable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_Scriptable = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_Scriptable;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.Scriptable.$LambdaAdaptor$impl');
 }
}
Scriptable.$markImplementor(/**@type {Function}*/ (Scriptable));
$Util.$setClassMetadataForInterface(Scriptable, "org.pepstock.charba.client.callbacks.Scriptable");

exports = Scriptable;

//# sourceMappingURL=Scriptable.js.map
