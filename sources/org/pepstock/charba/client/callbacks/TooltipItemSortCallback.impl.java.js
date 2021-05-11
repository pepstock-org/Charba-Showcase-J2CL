goog.module('org.pepstock.charba.client.callbacks.TooltipItemSortCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ItemSortCallback = goog.require('org.pepstock.charba.client.callbacks.ItemSortCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TooltipItemSortCallback.$LambdaAdaptor$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');

/**
 * @interface
 * @extends {ItemSortCallback<TooltipItem>}
 */
class TooltipItemSortCallback {
 /** @return {TooltipItemSortCallback} */
 static $adapt(/** ?function(IsChart, TooltipItem, TooltipItem):number */ fn) {
  TooltipItemSortCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TooltipItemSortCallback.$clinit = () =>{};
  TooltipItemSortCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ItemSortCallback.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_TooltipItemSortCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_TooltipItemSortCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.TooltipItemSortCallback.$LambdaAdaptor$impl');
 }
}
TooltipItemSortCallback.$markImplementor(/**@type {Function}*/ (TooltipItemSortCallback));
$Util.$setClassMetadataForInterface(TooltipItemSortCallback, "org.pepstock.charba.client.callbacks.TooltipItemSortCallback");

exports = TooltipItemSortCallback;

//# sourceMappingURL=TooltipItemSortCallback.js.map
