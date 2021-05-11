goog.module('org.pepstock.charba.client.callbacks.PositionCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scriptable = goog.require('org.pepstock.charba.client.callbacks.Scriptable$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PositionCallback.$LambdaAdaptor$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');

/**
 * @interface
 * @template C
 * @extends {Scriptable<Position, C>}
 */
class PositionCallback {
 /** @template C @return {PositionCallback<C>} */
 static $adapt(/** ?function(C):Position */ fn) {
  PositionCallback.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  PositionCallback.$clinit = () =>{};
  PositionCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Scriptable.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_PositionCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_PositionCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.PositionCallback.$LambdaAdaptor$impl');
 }
}
PositionCallback.$markImplementor(/**@type {Function}*/ (PositionCallback));
$Util.$setClassMetadataForInterface(PositionCallback, "org.pepstock.charba.client.callbacks.PositionCallback");

exports = PositionCallback;

//# sourceMappingURL=PositionCallback.js.map
