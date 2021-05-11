goog.module('org.pepstock.charba.client.callbacks.LegendLabelsCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendLabelsCallback = goog.require('org.pepstock.charba.client.callbacks.LegendLabelsCallback$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');

/**
 * @implements {LegendLabelsCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart, List<LegendLabelItem>):List<LegendLabelItem> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart, List<LegendLabelItem>):List<LegendLabelItem>}*/
  this.f_fn__org_pepstock_charba_client_callbacks_LegendLabelsCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_callbacks_LegendLabelsCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_LegendLabelsCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_callbacks_LegendLabelsCallback_$LambdaAdaptor__org_pepstock_charba_client_callbacks_LegendLabelsCallback_$JsFunction(/** ?function(IsChart, List<LegendLabelItem>):List<LegendLabelItem> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_callbacks_LegendLabelsCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {List<LegendLabelItem>} */
 m_generateLegendLabels__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ arg0, /** List<LegendLabelItem> */ arg1) {
  let /** ?function(IsChart, List<LegendLabelItem>):List<LegendLabelItem> */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_callbacks_LegendLabelsCallback_$LambdaAdaptor, $function(arg0, arg1));
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
LegendLabelsCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.callbacks.LegendLabelsCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=LegendLabelsCallback$$LambdaAdaptor.js.map
