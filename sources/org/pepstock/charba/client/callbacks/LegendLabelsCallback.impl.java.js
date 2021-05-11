goog.module('org.pepstock.charba.client.callbacks.LegendLabelsCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LegendLabelsCallback.$LambdaAdaptor$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');

/**
 * @interface
 */
class LegendLabelsCallback {
 /** @abstract @return {List<LegendLabelItem>} */
 m_generateLegendLabels__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<LegendLabelItem> */ defaultLabels) {}
 /** @return {LegendLabelsCallback} */
 static $adapt(/** ?function(IsChart, List<LegendLabelItem>):List<LegendLabelItem> */ fn) {
  LegendLabelsCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LegendLabelsCallback.$clinit = () =>{};
  LegendLabelsCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_LegendLabelsCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_LegendLabelsCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.LegendLabelsCallback.$LambdaAdaptor$impl');
 }
}
LegendLabelsCallback.$markImplementor(/**@type {Function}*/ (LegendLabelsCallback));
$Util.$setClassMetadataForInterface(LegendLabelsCallback, "org.pepstock.charba.client.callbacks.LegendLabelsCallback");

exports = LegendLabelsCallback;

//# sourceMappingURL=LegendLabelsCallback.js.map
