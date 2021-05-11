goog.module('org.pepstock.charba.client.callbacks.HtmlLegendCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendCallback.$LambdaAdaptor$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let HasLegendText = goog.forwardDeclare('org.pepstock.charba.client.items.HasLegendText$impl');

/**
 * @interface
 * @template T
 */
class HtmlLegendCallback {
 /** @abstract @return {SafeHtml} */
 m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__java_lang_String(/** IsChart */ chart, /** T */ item, /** ?string */ currentText) {}
 /** @template T @return {HtmlLegendCallback<T>} */
 static $adapt(/** ?function(IsChart, T, ?string):SafeHtml */ fn) {
  HtmlLegendCallback.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  HtmlLegendCallback.$clinit = () =>{};
  HtmlLegendCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_HtmlLegendCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_HtmlLegendCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.HtmlLegendCallback.$LambdaAdaptor$impl');
 }
}
HtmlLegendCallback.$markImplementor(/**@type {Function}*/ (HtmlLegendCallback));
$Util.$setClassMetadataForInterface(HtmlLegendCallback, "org.pepstock.charba.client.callbacks.HtmlLegendCallback");

exports = HtmlLegendCallback;

//# sourceMappingURL=HtmlLegendCallback.js.map
