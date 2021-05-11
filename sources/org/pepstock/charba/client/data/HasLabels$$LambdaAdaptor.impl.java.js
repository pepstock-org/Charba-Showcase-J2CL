goog.module('org.pepstock.charba.client.data.HasLabels.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasLabels = goog.require('org.pepstock.charba.client.data.HasLabels$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Labels = goog.forwardDeclare('org.pepstock.charba.client.data.Labels$impl');
let LabelsHandler = goog.forwardDeclare('org.pepstock.charba.client.data.LabelsHandler$impl');

/**
 * @implements {HasLabels}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():LabelsHandler */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():LabelsHandler}*/
  this.f_fn__org_pepstock_charba_client_data_HasLabels_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_data_HasLabels_$LambdaAdaptor__org_pepstock_charba_client_data_HasLabels_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_data_HasLabels_$LambdaAdaptor__org_pepstock_charba_client_data_HasLabels_$JsFunction(/** ?function():LabelsHandler */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_data_HasLabels_$LambdaAdaptor = fn;
 }
 /** @override @return {LabelsHandler} */
 m_getLabelsHandler__() {
  let /** ?function():LabelsHandler */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_data_HasLabels_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {Labels} */
 m_getLabels__() {
  return HasLabels.m_getLabels__$default__org_pepstock_charba_client_data_HasLabels(this);
 }
 //Default method forwarding stub.
 /** @override @return {Labels} */
 m_getLabels__boolean(/** boolean */ arg0) {
  return HasLabels.m_getLabels__$default__org_pepstock_charba_client_data_HasLabels__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setLabels__arrayOf_java_lang_String(/** Array<?string> */ arg0) {
  HasLabels.m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__arrayOf_java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setLabels__java_util_List(/** List<?string> */ arg0) {
  HasLabels.m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__java_util_List(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setLabels__org_pepstock_charba_client_data_Labels(/** Labels */ arg0) {
  HasLabels.m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__org_pepstock_charba_client_data_Labels(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasLabels.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasLabels.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.data.HasLabels$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasLabels$$LambdaAdaptor.js.map
