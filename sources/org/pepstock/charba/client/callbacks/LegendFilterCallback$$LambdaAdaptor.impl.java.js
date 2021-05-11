goog.module('org.pepstock.charba.client.callbacks.LegendFilterCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendFilterCallback = goog.require('org.pepstock.charba.client.callbacks.LegendFilterCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LegendFilterCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, LegendItem):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, LegendItem):boolean}*/
  this.f_fn__org_pepstock_charba_client_callbacks_LegendFilterCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_LegendFilterCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_LegendFilterCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_LegendFilterCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_LegendFilterCallback_$JsFunction(/** ?function(IsChart, LegendItem):boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_LegendFilterCallback_$LambdaAdaptor = fn;
 }
 /** @return {boolean} */
 m_onFilter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem(/** IsChart */ arg0, /** LegendItem */ arg1) {
  let /** ?function(IsChart, LegendItem):boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_LegendFilterCallback_$LambdaAdaptor, $function(arg0, arg1));
 }
 //Bridge method.
 /** @override @return {boolean} */
 m_onFilter__org_pepstock_charba_client_IsChart__java_lang_Object(/** IsChart */ arg0, /** LegendItem */ arg1) {
  return this.m_onFilter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem(arg0, /**@type {LegendItem}*/ ($Casts.$to(arg1, LegendItem)));
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
LegendFilterCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.LegendFilterCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=LegendFilterCallback$$LambdaAdaptor.js.map
