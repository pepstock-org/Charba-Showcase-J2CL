goog.module('org.pepstock.charba.client.utils.CTimer.Status$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Status>}
 */
class Status extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Status} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new Status();
  $instance.$ctor__org_pepstock_charba_client_utils_CTimer_Status__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_utils_CTimer_Status__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {!Status} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Status.$clinit();
  if ($Equality.$same(Status.f_namesToValuesMap__org_pepstock_charba_client_utils_CTimer_Status_, null)) {
   Status.f_namesToValuesMap__org_pepstock_charba_client_utils_CTimer_Status_ = $Enums.createMapFromValues(Status.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Status.f_namesToValuesMap__org_pepstock_charba_client_utils_CTimer_Status_);
 }
 /** @return {!Array<!Status>} */
 static m_values__() {
  Status.$clinit();
  return /**@type {!Array<Status>}*/ ($Arrays.$init([Status.$static_INITIALIZED__org_pepstock_charba_client_utils_CTimer_Status, Status.$static_RUNNING__org_pepstock_charba_client_utils_CTimer_Status, Status.$static_STOPPED__org_pepstock_charba_client_utils_CTimer_Status], Status));
 }
 /** @return {!Status} */
 static get f_INITIALIZED__org_pepstock_charba_client_utils_CTimer_Status() {
  return (Status.$clinit(), Status.$static_INITIALIZED__org_pepstock_charba_client_utils_CTimer_Status);
 }
 /** @return {!Status} */
 static get f_RUNNING__org_pepstock_charba_client_utils_CTimer_Status() {
  return (Status.$clinit(), Status.$static_RUNNING__org_pepstock_charba_client_utils_CTimer_Status);
 }
 /** @return {!Status} */
 static get f_STOPPED__org_pepstock_charba_client_utils_CTimer_Status() {
  return (Status.$clinit(), Status.$static_STOPPED__org_pepstock_charba_client_utils_CTimer_Status);
 }
 
 static $clinit() {
  Status.$clinit = () =>{};
  Status.$loadModules();
  Enum.$clinit();
  Status.$static_INITIALIZED__org_pepstock_charba_client_utils_CTimer_Status = Status.$create__java_lang_String__int($Util.$makeEnumName("INITIALIZED"), Status.$ordinal_INITIALIZED__org_pepstock_charba_client_utils_CTimer_Status);
  Status.$static_RUNNING__org_pepstock_charba_client_utils_CTimer_Status = Status.$create__java_lang_String__int($Util.$makeEnumName("RUNNING"), Status.$ordinal_RUNNING__org_pepstock_charba_client_utils_CTimer_Status);
  Status.$static_STOPPED__org_pepstock_charba_client_utils_CTimer_Status = Status.$create__java_lang_String__int($Util.$makeEnumName("STOPPED"), Status.$ordinal_STOPPED__org_pepstock_charba_client_utils_CTimer_Status);
  Status.f_namesToValuesMap__org_pepstock_charba_client_utils_CTimer_Status_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Status;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Status}*/
Status.$static_INITIALIZED__org_pepstock_charba_client_utils_CTimer_Status;
/**@private {!Status}*/
Status.$static_RUNNING__org_pepstock_charba_client_utils_CTimer_Status;
/**@private {!Status}*/
Status.$static_STOPPED__org_pepstock_charba_client_utils_CTimer_Status;
/**@type {Map<?string, !Status>}*/
Status.f_namesToValuesMap__org_pepstock_charba_client_utils_CTimer_Status_;
/**@const {number}*/
Status.$ordinal_INITIALIZED__org_pepstock_charba_client_utils_CTimer_Status = 0;
/**@const {number}*/
Status.$ordinal_RUNNING__org_pepstock_charba_client_utils_CTimer_Status = 1;
/**@const {number}*/
Status.$ordinal_STOPPED__org_pepstock_charba_client_utils_CTimer_Status = 2;
$Util.$setClassMetadataForEnum(Status, "org.pepstock.charba.client.utils.CTimer$Status");

exports = Status;

//# sourceMappingURL=CTimer$Status.js.map
