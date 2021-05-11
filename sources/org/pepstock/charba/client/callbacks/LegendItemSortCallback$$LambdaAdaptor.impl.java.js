goog.module('org.pepstock.charba.client.callbacks.LegendItemSortCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendItemSortCallback = goog.require('org.pepstock.charba.client.callbacks.LegendItemSortCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LegendItemSortCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, LegendItem, LegendItem):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, LegendItem, LegendItem):number}*/
  this.f_fn__org_pepstock_charba_client_callbacks_LegendItemSortCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_LegendItemSortCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_LegendItemSortCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_LegendItemSortCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_LegendItemSortCallback_$JsFunction(/** ?function(IsChart, LegendItem, LegendItem):number */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_LegendItemSortCallback_$LambdaAdaptor = fn;
 }
 /** @return {number} */
 m_onItemSort__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_items_LegendItem(/** IsChart */ arg0, /** LegendItem */ arg1, /** LegendItem */ arg2) {
  let /** ?function(IsChart, LegendItem, LegendItem):number */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_LegendItemSortCallback_$LambdaAdaptor, $function(arg0, arg1, arg2));
 }
 //Bridge method.
 /** @override @return {number} */
 m_onItemSort__org_pepstock_charba_client_IsChart__java_lang_Object__java_lang_Object(/** IsChart */ arg0, /** LegendItem */ arg1, /** LegendItem */ arg2) {
  return this.m_onItemSort__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_items_LegendItem(arg0, /**@type {LegendItem}*/ ($Casts.$to(arg1, LegendItem)), /**@type {LegendItem}*/ ($Casts.$to(arg2, LegendItem)));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {
  LegendItem = goog.module.get('org.pepstock.charba.client.items.LegendItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
LegendItemSortCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.LegendItemSortCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=LegendItemSortCallback$$LambdaAdaptor.js.map
