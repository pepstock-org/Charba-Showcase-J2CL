goog.module('org.pepstock.charba.client.callbacks.ItemSortCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ItemSortCallback.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class ItemSortCallback {
 /** @abstract @return {number} */
 m_onItemSort__org_pepstock_charba_client_IsChart__java_lang_Object__java_lang_Object(/** IsChart */ chart, /** T */ item1, /** T */ item2) {}
 /** @template T @return {ItemSortCallback<T>} */
 static $adapt(/** ?function(IsChart, T, T):number */ fn) {
  ItemSortCallback.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  ItemSortCallback.$clinit = () =>{};
  ItemSortCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_ItemSortCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_ItemSortCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.ItemSortCallback.$LambdaAdaptor$impl');
 }
}
ItemSortCallback.$markImplementor(/**@type {Function}*/ (ItemSortCallback));
$Util.$setClassMetadataForInterface(ItemSortCallback, "org.pepstock.charba.client.callbacks.ItemSortCallback");

exports = ItemSortCallback;

//# sourceMappingURL=ItemSortCallback.js.map
