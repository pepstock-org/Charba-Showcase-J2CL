goog.module('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlLegendItemCallback = goog.require('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HtmlLegendItemCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, LegendLabelItem, ?string):SafeHtml */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, LegendLabelItem, ?string):SafeHtml}*/
  this.f_fn__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback_$JsFunction(/** ?function(IsChart, LegendLabelItem, ?string):SafeHtml */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback_$LambdaAdaptor = fn;
 }
 /** @return {SafeHtml} */
 m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendLabelItem__java_lang_String(/** IsChart */ arg0, /** LegendLabelItem */ arg1, /** ?string */ arg2) {
  let /** ?function(IsChart, LegendLabelItem, ?string):SafeHtml */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback_$LambdaAdaptor, $function(arg0, arg1, arg2));
 }
 //Bridge method.
 /** @override @return {SafeHtml} */
 m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__java_lang_String(/** IsChart */ arg0, /** LegendLabelItem */ arg1, /** ?string */ arg2) {
  return this.m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendLabelItem__java_lang_String(arg0, /**@type {LegendLabelItem}*/ ($Casts.$to(arg1, LegendLabelItem)), arg2);
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
  LegendLabelItem = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HtmlLegendItemCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.HtmlLegendItemCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HtmlLegendItemCallback$$LambdaAdaptor.js.map
