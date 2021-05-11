goog.module('org.pepstock.charba.client.callbacks.LegendFilterCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FilterCallback = goog.require('org.pepstock.charba.client.callbacks.FilterCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LegendFilterCallback.$LambdaAdaptor$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');

/**
 * @interface
 * @extends {FilterCallback<LegendItem>}
 */
class LegendFilterCallback {
 /** @return {LegendFilterCallback} */
 static $adapt(/** ?function(IsChart, LegendItem):boolean */ fn) {
  LegendFilterCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LegendFilterCallback.$clinit = () =>{};
  LegendFilterCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  FilterCallback.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_LegendFilterCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_LegendFilterCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.LegendFilterCallback.$LambdaAdaptor$impl');
 }
}
LegendFilterCallback.$markImplementor(/**@type {Function}*/ (LegendFilterCallback));
$Util.$setClassMetadataForInterface(LegendFilterCallback, "org.pepstock.charba.client.callbacks.LegendFilterCallback");

exports = LegendFilterCallback;

//# sourceMappingURL=LegendFilterCallback.js.map
