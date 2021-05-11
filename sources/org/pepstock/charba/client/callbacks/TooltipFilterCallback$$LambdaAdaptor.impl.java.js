goog.module('org.pepstock.charba.client.callbacks.TooltipFilterCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipFilterCallback = goog.require('org.pepstock.charba.client.callbacks.TooltipFilterCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {TooltipFilterCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, TooltipItem):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, TooltipItem):boolean}*/
  this.f_fn__org_pepstock_charba_client_callbacks_TooltipFilterCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_TooltipFilterCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TooltipFilterCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_TooltipFilterCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_TooltipFilterCallback_$JsFunction(/** ?function(IsChart, TooltipItem):boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_TooltipFilterCallback_$LambdaAdaptor = fn;
 }
 /** @return {boolean} */
 m_onFilter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ arg0, /** TooltipItem */ arg1) {
  let /** ?function(IsChart, TooltipItem):boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_TooltipFilterCallback_$LambdaAdaptor, $function(arg0, arg1));
 }
 //Bridge method.
 /** @override @return {boolean} */
 m_onFilter__org_pepstock_charba_client_IsChart__java_lang_Object(/** IsChart */ arg0, /** TooltipItem */ arg1) {
  return this.m_onFilter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(arg0, /**@type {TooltipItem}*/ ($Casts.$to(arg1, TooltipItem)));
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
TooltipFilterCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.TooltipFilterCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=TooltipFilterCallback$$LambdaAdaptor.js.map
