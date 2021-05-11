goog.module('org.pepstock.charba.client.enums.DataType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DataType>}
 * @implements {Key}
 */
class DataType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_DataType_;
 }
 /** @return {!DataType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new DataType();
  $instance.$ctor__org_pepstock_charba_client_enums_DataType__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_DataType__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_DataType_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_DataType_;
 }
 /** @return {!DataType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DataType.$clinit();
  if ($Equality.$same(DataType.f_namesToValuesMap__org_pepstock_charba_client_enums_DataType_, null)) {
   DataType.f_namesToValuesMap__org_pepstock_charba_client_enums_DataType_ = $Enums.createMapFromValues(DataType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DataType.f_namesToValuesMap__org_pepstock_charba_client_enums_DataType_);
 }
 /** @return {!Array<!DataType>} */
 static m_values__() {
  DataType.$clinit();
  return /**@type {!Array<DataType>}*/ ($Arrays.$init([DataType.$static_UNKNOWN__org_pepstock_charba_client_enums_DataType, DataType.$static_NUMBERS__org_pepstock_charba_client_enums_DataType, DataType.$static_POINTS__org_pepstock_charba_client_enums_DataType, DataType.$static_ARRAYS__org_pepstock_charba_client_enums_DataType, DataType.$static_STRINGS__org_pepstock_charba_client_enums_DataType], DataType));
 }
 /** @return {!DataType} */
 static get f_UNKNOWN__org_pepstock_charba_client_enums_DataType() {
  return (DataType.$clinit(), DataType.$static_UNKNOWN__org_pepstock_charba_client_enums_DataType);
 }
 /** @return {!DataType} */
 static get f_NUMBERS__org_pepstock_charba_client_enums_DataType() {
  return (DataType.$clinit(), DataType.$static_NUMBERS__org_pepstock_charba_client_enums_DataType);
 }
 /** @return {!DataType} */
 static get f_POINTS__org_pepstock_charba_client_enums_DataType() {
  return (DataType.$clinit(), DataType.$static_POINTS__org_pepstock_charba_client_enums_DataType);
 }
 /** @return {!DataType} */
 static get f_ARRAYS__org_pepstock_charba_client_enums_DataType() {
  return (DataType.$clinit(), DataType.$static_ARRAYS__org_pepstock_charba_client_enums_DataType);
 }
 /** @return {!DataType} */
 static get f_STRINGS__org_pepstock_charba_client_enums_DataType() {
  return (DataType.$clinit(), DataType.$static_STRINGS__org_pepstock_charba_client_enums_DataType);
 }
 
 static $clinit() {
  DataType.$clinit = () =>{};
  DataType.$loadModules();
  Enum.$clinit();
  DataType.$static_UNKNOWN__org_pepstock_charba_client_enums_DataType = DataType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UNKNOWN"), DataType.$ordinal_UNKNOWN__org_pepstock_charba_client_enums_DataType, "unknown");
  DataType.$static_NUMBERS__org_pepstock_charba_client_enums_DataType = DataType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NUMBERS"), DataType.$ordinal_NUMBERS__org_pepstock_charba_client_enums_DataType, "numbers");
  DataType.$static_POINTS__org_pepstock_charba_client_enums_DataType = DataType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINTS"), DataType.$ordinal_POINTS__org_pepstock_charba_client_enums_DataType, "points");
  DataType.$static_ARRAYS__org_pepstock_charba_client_enums_DataType = DataType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ARRAYS"), DataType.$ordinal_ARRAYS__org_pepstock_charba_client_enums_DataType, "arrays");
  DataType.$static_STRINGS__org_pepstock_charba_client_enums_DataType = DataType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STRINGS"), DataType.$ordinal_STRINGS__org_pepstock_charba_client_enums_DataType, "strings");
  DataType.f_namesToValuesMap__org_pepstock_charba_client_enums_DataType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DataType}*/
DataType.$static_UNKNOWN__org_pepstock_charba_client_enums_DataType;
/**@private {!DataType}*/
DataType.$static_NUMBERS__org_pepstock_charba_client_enums_DataType;
/**@private {!DataType}*/
DataType.$static_POINTS__org_pepstock_charba_client_enums_DataType;
/**@private {!DataType}*/
DataType.$static_ARRAYS__org_pepstock_charba_client_enums_DataType;
/**@private {!DataType}*/
DataType.$static_STRINGS__org_pepstock_charba_client_enums_DataType;
/**@type {Map<?string, !DataType>}*/
DataType.f_namesToValuesMap__org_pepstock_charba_client_enums_DataType_;
/**@const {number}*/
DataType.$ordinal_UNKNOWN__org_pepstock_charba_client_enums_DataType = 0;
/**@const {number}*/
DataType.$ordinal_NUMBERS__org_pepstock_charba_client_enums_DataType = 1;
/**@const {number}*/
DataType.$ordinal_POINTS__org_pepstock_charba_client_enums_DataType = 2;
/**@const {number}*/
DataType.$ordinal_ARRAYS__org_pepstock_charba_client_enums_DataType = 3;
/**@const {number}*/
DataType.$ordinal_STRINGS__org_pepstock_charba_client_enums_DataType = 4;
Key.$markImplementor(DataType);
$Util.$setClassMetadataForEnum(DataType, "org.pepstock.charba.client.enums.DataType");

exports = DataType;

//# sourceMappingURL=DataType.js.map
