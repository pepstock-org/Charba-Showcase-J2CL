goog.module('org.pepstock.charba.client.datalabels.IsDefaultLabels$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsDataLabelId = goog.forwardDeclare('org.pepstock.charba.client.datalabels.IsDataLabelId$impl');
let LabelItem = goog.forwardDeclare('org.pepstock.charba.client.datalabels.LabelItem$impl');

/**
 * @interface
 */
class IsDefaultLabels {
 /** @abstract @return {LabelItem} */
 m_getLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(/** IsDataLabelId */ key) {}
 /** @abstract @return {boolean} */
 m_hasLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(/** IsDataLabelId */ key) {}
 /** @return {LabelItem} */
 static m_getLabel__$default__org_pepstock_charba_client_datalabels_IsDefaultLabels__org_pepstock_charba_client_datalabels_IsDataLabelId(/** !IsDefaultLabels */ $thisArg, /** IsDataLabelId */ key) {
  IsDefaultLabels.$clinit();
  return null;
 }
 /** @return {boolean} */
 static m_hasLabel__$default__org_pepstock_charba_client_datalabels_IsDefaultLabels__org_pepstock_charba_client_datalabels_IsDataLabelId(/** !IsDefaultLabels */ $thisArg, /** IsDataLabelId */ key) {
  IsDefaultLabels.$clinit();
  return false;
 }
 
 static $clinit() {
  IsDefaultLabels.$clinit = () =>{};
  IsDefaultLabels.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_IsDefaultLabels = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_IsDefaultLabels;
 }
 
 static $loadModules() {}
}
IsDefaultLabels.$markImplementor(/**@type {Function}*/ (IsDefaultLabels));
$Util.$setClassMetadataForInterface(IsDefaultLabels, "org.pepstock.charba.client.datalabels.IsDefaultLabels");

exports = IsDefaultLabels;

//# sourceMappingURL=IsDefaultLabels.js.map
