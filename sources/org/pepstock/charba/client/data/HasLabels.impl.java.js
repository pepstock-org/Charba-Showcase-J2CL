goog.module('org.pepstock.charba.client.data.HasLabels$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.data.HasLabels.$LambdaAdaptor$impl');
let Labels = goog.forwardDeclare('org.pepstock.charba.client.data.Labels$impl');
let LabelsHandler = goog.forwardDeclare('org.pepstock.charba.client.data.LabelsHandler$impl');

/**
 * @interface
 */
class HasLabels {
 /** @abstract @return {LabelsHandler} */
 m_getLabelsHandler__() {}
 /** @abstract */
 m_setLabels__arrayOf_java_lang_String(/** Array<?string> */ labels) {}
 /** @abstract */
 m_setLabels__java_util_List(/** List<?string> */ labels) {}
 /** @abstract */
 m_setLabels__org_pepstock_charba_client_data_Labels(/** Labels */ labels) {}
 /** @abstract @return {Labels} */
 m_getLabels__() {}
 /** @abstract @return {Labels} */
 m_getLabels__boolean(/** boolean */ binding) {}
 /** @return {HasLabels} */
 static $adapt(/** ?function():LabelsHandler */ fn) {
  HasLabels.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__arrayOf_java_lang_String(/** !HasLabels */ $thisArg, /** Array<?string> */ labels) {
  HasLabels.$clinit();
  let internalLabels = Labels.m_build__();
  internalLabels.m_load__arrayOf_java_lang_String(labels);
  $thisArg.m_setLabels__org_pepstock_charba_client_data_Labels(internalLabels);
 }
 
 static m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__java_util_List(/** !HasLabels */ $thisArg, /** List<?string> */ labels) {
  HasLabels.$clinit();
  let internalLabels = Labels.m_build__();
  internalLabels.m_load__java_util_List(labels);
  $thisArg.m_setLabels__org_pepstock_charba_client_data_Labels(internalLabels);
 }
 
 static m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__org_pepstock_charba_client_data_Labels(/** !HasLabels */ $thisArg, /** Labels */ labels) {
  HasLabels.$clinit();
  if (!$Equality.$same($thisArg.m_getLabelsHandler__(), null)) {
   $thisArg.m_getLabelsHandler__().m_setLabels__org_pepstock_charba_client_data_Labels_$pp_org_pepstock_charba_client_data(labels);
  }
 }
 /** @return {Labels} */
 static m_getLabels__$default__org_pepstock_charba_client_data_HasLabels(/** !HasLabels */ $thisArg) {
  HasLabels.$clinit();
  return $thisArg.m_getLabels__boolean(false);
 }
 /** @return {Labels} */
 static m_getLabels__$default__org_pepstock_charba_client_data_HasLabels__boolean(/** !HasLabels */ $thisArg, /** boolean */ binding) {
  HasLabels.$clinit();
  if (!$Equality.$same($thisArg.m_getLabelsHandler__(), null)) {
   return $thisArg.m_getLabelsHandler__().m_getLabels__boolean_$pp_org_pepstock_charba_client_data(binding);
  }
  return Labels.m_build__();
 }
 
 static $clinit() {
  HasLabels.$clinit = () =>{};
  HasLabels.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_data_HasLabels = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_data_HasLabels;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.data.HasLabels.$LambdaAdaptor$impl');
  Labels = goog.module.get('org.pepstock.charba.client.data.Labels$impl');
 }
}
HasLabels.$markImplementor(/**@type {Function}*/ (HasLabels));
$Util.$setClassMetadataForInterface(HasLabels, "org.pepstock.charba.client.data.HasLabels");

exports = HasLabels;

//# sourceMappingURL=HasLabels.js.map
