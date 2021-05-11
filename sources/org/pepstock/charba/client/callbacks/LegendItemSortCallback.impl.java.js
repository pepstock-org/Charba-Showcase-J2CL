goog.module('org.pepstock.charba.client.callbacks.LegendItemSortCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ItemSortCallback = goog.require('org.pepstock.charba.client.callbacks.ItemSortCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LegendItemSortCallback.$LambdaAdaptor$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');

/**
 * @interface
 * @extends {ItemSortCallback<LegendItem>}
 */
class LegendItemSortCallback {
 /** @return {LegendItemSortCallback} */
 static $adapt(/** ?function(IsChart, LegendItem, LegendItem):number */ fn) {
  LegendItemSortCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LegendItemSortCallback.$clinit = () =>{};
  LegendItemSortCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ItemSortCallback.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_LegendItemSortCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_LegendItemSortCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.LegendItemSortCallback.$LambdaAdaptor$impl');
 }
}
LegendItemSortCallback.$markImplementor(/**@type {Function}*/ (LegendItemSortCallback));
$Util.$setClassMetadataForInterface(LegendItemSortCallback, "org.pepstock.charba.client.callbacks.LegendItemSortCallback");

exports = LegendItemSortCallback;

//# sourceMappingURL=LegendItemSortCallback.js.map
