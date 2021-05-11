goog.module('org.pepstock.charba.client.utils.CScheduler.RunnableWrapper.Status$impl');

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
  $instance.$ctor__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {!Status} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Status.$clinit();
  if ($Equality.$same(Status.f_namesToValuesMap__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status_, null)) {
   Status.f_namesToValuesMap__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status_ = $Enums.createMapFromValues(Status.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Status.f_namesToValuesMap__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status_);
 }
 /** @return {!Array<!Status>} */
 static m_values__() {
  Status.$clinit();
  return /**@type {!Array<Status>}*/ ($Arrays.$init([Status.$static_NOT_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status, Status.$static_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status, Status.$static_ENDED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status], Status));
 }
 /** @return {!Status} */
 static get f_NOT_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status() {
  return (Status.$clinit(), Status.$static_NOT_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status);
 }
 /** @return {!Status} */
 static get f_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status() {
  return (Status.$clinit(), Status.$static_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status);
 }
 /** @return {!Status} */
 static get f_ENDED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status() {
  return (Status.$clinit(), Status.$static_ENDED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status);
 }
 
 static $clinit() {
  Status.$clinit = () =>{};
  Status.$loadModules();
  Enum.$clinit();
  Status.$static_NOT_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status = Status.$create__java_lang_String__int($Util.$makeEnumName("NOT_STARTED"), Status.$ordinal_NOT_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status);
  Status.$static_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status = Status.$create__java_lang_String__int($Util.$makeEnumName("STARTED"), Status.$ordinal_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status);
  Status.$static_ENDED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status = Status.$create__java_lang_String__int($Util.$makeEnumName("ENDED"), Status.$ordinal_ENDED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status);
  Status.f_namesToValuesMap__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status_ = null;
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
Status.$static_NOT_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status;
/**@private {!Status}*/
Status.$static_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status;
/**@private {!Status}*/
Status.$static_ENDED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status;
/**@type {Map<?string, !Status>}*/
Status.f_namesToValuesMap__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status_;
/**@const {number}*/
Status.$ordinal_NOT_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status = 0;
/**@const {number}*/
Status.$ordinal_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status = 1;
/**@const {number}*/
Status.$ordinal_ENDED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status = 2;
$Util.$setClassMetadataForEnum(Status, "org.pepstock.charba.client.utils.CScheduler$RunnableWrapper$Status");

exports = Status;

//# sourceMappingURL=CScheduler$RunnableWrapper$Status.js.map
