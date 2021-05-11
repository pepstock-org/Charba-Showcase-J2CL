goog.module('org.pepstock.charba.client.callbacks.HtmlLegendCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlLegendCallback = goog.require('org.pepstock.charba.client.callbacks.HtmlLegendCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let HasLegendText = goog.forwardDeclare('org.pepstock.charba.client.items.HasLegendText$impl');

/**
 * @template T
 * @implements {HtmlLegendCallback<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, T, ?string):SafeHtml */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, T, ?string):SafeHtml}*/
  this.f_fn__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$JsFunction(/** ?function(IsChart, T, ?string):SafeHtml */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {SafeHtml} */
 m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__java_lang_String(/** IsChart */ arg0, /** T */ arg1, /** ?string */ arg2) {
  let /** ?function(IsChart, T, ?string):SafeHtml */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$LambdaAdaptor, $function(arg0, arg1, arg2));
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
 
 static $loadModules() {}
}
HtmlLegendCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.HtmlLegendCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HtmlLegendCallback$$LambdaAdaptor.js.map
