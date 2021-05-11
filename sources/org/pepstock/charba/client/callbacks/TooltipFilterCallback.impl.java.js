goog.module('org.pepstock.charba.client.callbacks.TooltipFilterCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FilterCallback = goog.require('org.pepstock.charba.client.callbacks.FilterCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TooltipFilterCallback.$LambdaAdaptor$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');

/**
 * @interface
 * @extends {FilterCallback<TooltipItem>}
 */
class TooltipFilterCallback {
 /** @return {TooltipFilterCallback} */
 static $adapt(/** ?function(IsChart, TooltipItem):boolean */ fn) {
  TooltipFilterCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TooltipFilterCallback.$clinit = () =>{};
  TooltipFilterCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  FilterCallback.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_TooltipFilterCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_TooltipFilterCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.TooltipFilterCallback.$LambdaAdaptor$impl');
 }
}
TooltipFilterCallback.$markImplementor(/**@type {Function}*/ (TooltipFilterCallback));
$Util.$setClassMetadataForInterface(TooltipFilterCallback, "org.pepstock.charba.client.callbacks.TooltipFilterCallback");

exports = TooltipFilterCallback;

//# sourceMappingURL=TooltipFilterCallback.js.map
