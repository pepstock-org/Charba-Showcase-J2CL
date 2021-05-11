goog.module('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlLegendCallback = goog.require('org.pepstock.charba.client.callbacks.HtmlLegendCallback$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback.$LambdaAdaptor$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');

/**
 * @interface
 * @extends {HtmlLegendCallback<LegendLabelItem>}
 */
class HtmlLegendItemCallback {
 /** @return {HtmlLegendItemCallback} */
 static $adapt(/** ?function(IsChart, LegendLabelItem, ?string):SafeHtml */ fn) {
  HtmlLegendItemCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  HtmlLegendItemCallback.$clinit = () =>{};
  HtmlLegendItemCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  HtmlLegendCallback.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback.$LambdaAdaptor$impl');
 }
}
HtmlLegendItemCallback.$markImplementor(/**@type {Function}*/ (HtmlLegendItemCallback));
$Util.$setClassMetadataForInterface(HtmlLegendItemCallback, "org.pepstock.charba.client.callbacks.HtmlLegendItemCallback");

exports = HtmlLegendItemCallback;

//# sourceMappingURL=HtmlLegendItemCallback.js.map
