goog.module('org.pepstock.charba.client.labels.IsDefaultOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Label = goog.forwardDeclare('org.pepstock.charba.client.labels.Label$impl');
let LabelId = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelId$impl');

/**
 * @interface
 */
class IsDefaultOptions {
 /** @abstract @return {boolean} */
 m_hasLabel__org_pepstock_charba_client_labels_LabelId(/** LabelId */ id) {}
 /** @abstract @return {List<Label>} */
 m_getLabels__() {}
 /** @abstract @return {Label} */
 m_getLabel__org_pepstock_charba_client_labels_LabelId(/** LabelId */ id) {}
 /** @return {boolean} */
 static m_hasLabel__$default__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_labels_LabelId(/** !IsDefaultOptions */ $thisArg, /** LabelId */ id) {
  IsDefaultOptions.$clinit();
  return false;
 }
 /** @return {List<Label>} */
 static m_getLabels__$default__org_pepstock_charba_client_labels_IsDefaultOptions(/** !IsDefaultOptions */ $thisArg) {
  IsDefaultOptions.$clinit();
  return /**@type {List<Label>}*/ (Collections.m_emptyList__());
 }
 /** @return {Label} */
 static m_getLabel__$default__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_labels_LabelId(/** !IsDefaultOptions */ $thisArg, /** LabelId */ id) {
  IsDefaultOptions.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultOptions.$clinit = () =>{};
  IsDefaultOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_labels_IsDefaultOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_labels_IsDefaultOptions;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
 }
}
IsDefaultOptions.$markImplementor(/**@type {Function}*/ (IsDefaultOptions));
$Util.$setClassMetadataForInterface(IsDefaultOptions, "org.pepstock.charba.client.labels.IsDefaultOptions");

exports = IsDefaultOptions;

//# sourceMappingURL=IsDefaultOptions.js.map
