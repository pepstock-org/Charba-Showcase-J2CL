goog.module('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlLegendCallback = goog.require('org.pepstock.charba.client.callbacks.HtmlLegendCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback.$LambdaAdaptor$impl');
let LegendTitle = goog.forwardDeclare('org.pepstock.charba.client.configuration.LegendTitle$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');

/**
 * @interface
 * @extends {HtmlLegendCallback<LegendTitle>}
 */
class HtmlLegendTitleCallback {
 /** @return {HtmlLegendTitleCallback} */
 static $adapt(/** ?function(IsChart, LegendTitle, ?string):SafeHtml */ fn) {
  HtmlLegendTitleCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  HtmlLegendTitleCallback.$clinit = () =>{};
  HtmlLegendTitleCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  HtmlLegendCallback.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback.$LambdaAdaptor$impl');
 }
}
HtmlLegendTitleCallback.$markImplementor(/**@type {Function}*/ (HtmlLegendTitleCallback));
$Util.$setClassMetadataForInterface(HtmlLegendTitleCallback, "org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback");

exports = HtmlLegendTitleCallback;

//# sourceMappingURL=HtmlLegendTitleCallback.js.map
