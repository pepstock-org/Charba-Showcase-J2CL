goog.module('org.pepstock.charba.client.callbacks.TooltipItemSortCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipItemSortCallback = goog.require('org.pepstock.charba.client.callbacks.TooltipItemSortCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {TooltipItemSortCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, TooltipItem, TooltipItem):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, TooltipItem, TooltipItem):number}*/
  this.f_fn__org_pepstock_charba_client_callbacks_TooltipItemSortCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_TooltipItemSortCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TooltipItemSortCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_TooltipItemSortCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TooltipItemSortCallback_$JsFunction(/** ?function(IsChart, TooltipItem, TooltipItem):number */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_TooltipItemSortCallback_$LambdaAdaptor = fn;
 }
 /** @return {number} */
 m_onItemSort__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ arg0, /** TooltipItem */ arg1, /** TooltipItem */ arg2) {
  let /** ?function(IsChart, TooltipItem, TooltipItem):number */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_TooltipItemSortCallback_$LambdaAdaptor, $function(arg0, arg1, arg2));
 }
 //Bridge method.
 /** @override @return {number} */
 m_onItemSort__org_pepstock_charba_client_IsChart__java_lang_Object__java_lang_Object(/** IsChart */ arg0, /** TooltipItem */ arg1, /** TooltipItem */ arg2) {
  return this.m_onItemSort__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem__org_pepstock_charba_client_items_TooltipItem(arg0, /**@type {TooltipItem}*/ ($Casts.$to(arg1, TooltipItem)), /**@type {TooltipItem}*/ ($Casts.$to(arg2, TooltipItem)));
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
  TooltipItem = goog.module.get('org.pepstock.charba.client.items.TooltipItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
TooltipItemSortCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.TooltipItemSortCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=TooltipItemSortCallback$$LambdaAdaptor.js.map
