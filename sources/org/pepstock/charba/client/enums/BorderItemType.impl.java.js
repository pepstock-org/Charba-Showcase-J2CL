goog.module('org.pepstock.charba.client.enums.BorderItemType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<BorderItemType>}
 * @implements {Key}
 */
class BorderItemType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_BorderItemType_;
 }
 /** @return {!BorderItemType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new BorderItemType();
  $instance.$ctor__org_pepstock_charba_client_enums_BorderItemType__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_BorderItemType__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_BorderItemType_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_BorderItemType_;
 }
 /** @return {!BorderItemType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  BorderItemType.$clinit();
  if ($Equality.$same(BorderItemType.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderItemType_, null)) {
   BorderItemType.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderItemType_ = $Enums.createMapFromValues(BorderItemType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, BorderItemType.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderItemType_);
 }
 /** @return {!Array<!BorderItemType>} */
 static m_values__() {
  BorderItemType.$clinit();
  return /**@type {!Array<BorderItemType>}*/ ($Arrays.$init([BorderItemType.$static_INTEGERS__org_pepstock_charba_client_enums_BorderItemType, BorderItemType.$static_OBJECTS__org_pepstock_charba_client_enums_BorderItemType, BorderItemType.$static_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType], BorderItemType));
 }
 /** @return {!BorderItemType} */
 static get f_INTEGERS__org_pepstock_charba_client_enums_BorderItemType() {
  return (BorderItemType.$clinit(), BorderItemType.$static_INTEGERS__org_pepstock_charba_client_enums_BorderItemType);
 }
 /** @return {!BorderItemType} */
 static get f_OBJECTS__org_pepstock_charba_client_enums_BorderItemType() {
  return (BorderItemType.$clinit(), BorderItemType.$static_OBJECTS__org_pepstock_charba_client_enums_BorderItemType);
 }
 /** @return {!BorderItemType} */
 static get f_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType() {
  return (BorderItemType.$clinit(), BorderItemType.$static_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType);
 }
 
 static $clinit() {
  BorderItemType.$clinit = () =>{};
  BorderItemType.$loadModules();
  Enum.$clinit();
  BorderItemType.$static_INTEGERS__org_pepstock_charba_client_enums_BorderItemType = BorderItemType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INTEGERS"), BorderItemType.$ordinal_INTEGERS__org_pepstock_charba_client_enums_BorderItemType, "integers");
  BorderItemType.$static_OBJECTS__org_pepstock_charba_client_enums_BorderItemType = BorderItemType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OBJECTS"), BorderItemType.$ordinal_OBJECTS__org_pepstock_charba_client_enums_BorderItemType, "objects");
  BorderItemType.$static_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType = BorderItemType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UNKNOWN"), BorderItemType.$ordinal_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType, "unknown");
  BorderItemType.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderItemType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BorderItemType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!BorderItemType}*/
BorderItemType.$static_INTEGERS__org_pepstock_charba_client_enums_BorderItemType;
/**@private {!BorderItemType}*/
BorderItemType.$static_OBJECTS__org_pepstock_charba_client_enums_BorderItemType;
/**@private {!BorderItemType}*/
BorderItemType.$static_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType;
/**@type {Map<?string, !BorderItemType>}*/
BorderItemType.f_namesToValuesMap__org_pepstock_charba_client_enums_BorderItemType_;
/**@const {number}*/
BorderItemType.$ordinal_INTEGERS__org_pepstock_charba_client_enums_BorderItemType = 0;
/**@const {number}*/
BorderItemType.$ordinal_OBJECTS__org_pepstock_charba_client_enums_BorderItemType = 1;
/**@const {number}*/
BorderItemType.$ordinal_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType = 2;
Key.$markImplementor(BorderItemType);
$Util.$setClassMetadataForEnum(BorderItemType, "org.pepstock.charba.client.enums.BorderItemType");

exports = BorderItemType;

//# sourceMappingURL=BorderItemType.js.map
