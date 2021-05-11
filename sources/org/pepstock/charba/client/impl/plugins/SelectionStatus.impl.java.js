goog.module('org.pepstock.charba.client.impl.plugins.SelectionStatus$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<SelectionStatus>}
 */
class SelectionStatus extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SelectionStatus} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new SelectionStatus();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_SelectionStatus__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_SelectionStatus__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {!SelectionStatus} */
 static m_valueOf__java_lang_String(/** string */ name) {
  SelectionStatus.$clinit();
  if ($Equality.$same(SelectionStatus.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_SelectionStatus_, null)) {
   SelectionStatus.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_SelectionStatus_ = $Enums.createMapFromValues(SelectionStatus.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, SelectionStatus.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_SelectionStatus_);
 }
 /** @return {!Array<!SelectionStatus>} */
 static m_values__() {
  SelectionStatus.$clinit();
  return /**@type {!Array<SelectionStatus>}*/ ($Arrays.$init([SelectionStatus.$static_READY__org_pepstock_charba_client_impl_plugins_SelectionStatus, SelectionStatus.$static_SELECTING__org_pepstock_charba_client_impl_plugins_SelectionStatus, SelectionStatus.$static_SELECTED__org_pepstock_charba_client_impl_plugins_SelectionStatus], SelectionStatus));
 }
 /** @return {!SelectionStatus} */
 static get f_READY__org_pepstock_charba_client_impl_plugins_SelectionStatus() {
  return (SelectionStatus.$clinit(), SelectionStatus.$static_READY__org_pepstock_charba_client_impl_plugins_SelectionStatus);
 }
 /** @return {!SelectionStatus} */
 static get f_SELECTING__org_pepstock_charba_client_impl_plugins_SelectionStatus() {
  return (SelectionStatus.$clinit(), SelectionStatus.$static_SELECTING__org_pepstock_charba_client_impl_plugins_SelectionStatus);
 }
 /** @return {!SelectionStatus} */
 static get f_SELECTED__org_pepstock_charba_client_impl_plugins_SelectionStatus() {
  return (SelectionStatus.$clinit(), SelectionStatus.$static_SELECTED__org_pepstock_charba_client_impl_plugins_SelectionStatus);
 }
 
 static $clinit() {
  SelectionStatus.$clinit = () =>{};
  SelectionStatus.$loadModules();
  Enum.$clinit();
  SelectionStatus.$static_READY__org_pepstock_charba_client_impl_plugins_SelectionStatus = SelectionStatus.$create__java_lang_String__int($Util.$makeEnumName("READY"), SelectionStatus.$ordinal_READY__org_pepstock_charba_client_impl_plugins_SelectionStatus);
  SelectionStatus.$static_SELECTING__org_pepstock_charba_client_impl_plugins_SelectionStatus = SelectionStatus.$create__java_lang_String__int($Util.$makeEnumName("SELECTING"), SelectionStatus.$ordinal_SELECTING__org_pepstock_charba_client_impl_plugins_SelectionStatus);
  SelectionStatus.$static_SELECTED__org_pepstock_charba_client_impl_plugins_SelectionStatus = SelectionStatus.$create__java_lang_String__int($Util.$makeEnumName("SELECTED"), SelectionStatus.$ordinal_SELECTED__org_pepstock_charba_client_impl_plugins_SelectionStatus);
  SelectionStatus.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_SelectionStatus_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionStatus;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!SelectionStatus}*/
SelectionStatus.$static_READY__org_pepstock_charba_client_impl_plugins_SelectionStatus;
/**@private {!SelectionStatus}*/
SelectionStatus.$static_SELECTING__org_pepstock_charba_client_impl_plugins_SelectionStatus;
/**@private {!SelectionStatus}*/
SelectionStatus.$static_SELECTED__org_pepstock_charba_client_impl_plugins_SelectionStatus;
/**@type {Map<?string, !SelectionStatus>}*/
SelectionStatus.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_SelectionStatus_;
/**@const {number}*/
SelectionStatus.$ordinal_READY__org_pepstock_charba_client_impl_plugins_SelectionStatus = 0;
/**@const {number}*/
SelectionStatus.$ordinal_SELECTING__org_pepstock_charba_client_impl_plugins_SelectionStatus = 1;
/**@const {number}*/
SelectionStatus.$ordinal_SELECTED__org_pepstock_charba_client_impl_plugins_SelectionStatus = 2;
$Util.$setClassMetadataForEnum(SelectionStatus, "org.pepstock.charba.client.impl.plugins.SelectionStatus");

exports = SelectionStatus;

//# sourceMappingURL=SelectionStatus.js.map
