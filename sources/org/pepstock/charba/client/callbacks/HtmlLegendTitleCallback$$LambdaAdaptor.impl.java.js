goog.module('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlLegendTitleCallback = goog.require('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let LegendTitle = goog.forwardDeclare('org.pepstock.charba.client.configuration.LegendTitle$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HtmlLegendTitleCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, LegendTitle, ?string):SafeHtml */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, LegendTitle, ?string):SafeHtml}*/
  this.f_fn__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback_$JsFunction(/** ?function(IsChart, LegendTitle, ?string):SafeHtml */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback_$LambdaAdaptor = fn;
 }
 /** @return {SafeHtml} */
 m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_LegendTitle__java_lang_String(/** IsChart */ arg0, /** LegendTitle */ arg1, /** ?string */ arg2) {
  let /** ?function(IsChart, LegendTitle, ?string):SafeHtml */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback_$LambdaAdaptor, $function(arg0, arg1, arg2));
 }
 //Bridge method.
 /** @override @return {SafeHtml} */
 m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__java_lang_String(/** IsChart */ arg0, /** LegendTitle */ arg1, /** ?string */ arg2) {
  return this.m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_LegendTitle__java_lang_String(arg0, /**@type {LegendTitle}*/ ($Casts.$to(arg1, LegendTitle)), arg2);
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
  LegendTitle = goog.module.get('org.pepstock.charba.client.configuration.LegendTitle$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HtmlLegendTitleCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HtmlLegendTitleCallback$$LambdaAdaptor.js.map
