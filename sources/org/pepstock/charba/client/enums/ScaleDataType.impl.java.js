goog.module('org.pepstock.charba.client.enums.ScaleDataType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ScaleDataType>}
 */
class ScaleDataType extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ScaleDataType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new ScaleDataType();
  $instance.$ctor__org_pepstock_charba_client_enums_ScaleDataType__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_ScaleDataType__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {!ScaleDataType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ScaleDataType.$clinit();
  if ($Equality.$same(ScaleDataType.f_namesToValuesMap__org_pepstock_charba_client_enums_ScaleDataType_, null)) {
   ScaleDataType.f_namesToValuesMap__org_pepstock_charba_client_enums_ScaleDataType_ = $Enums.createMapFromValues(ScaleDataType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ScaleDataType.f_namesToValuesMap__org_pepstock_charba_client_enums_ScaleDataType_);
 }
 /** @return {!Array<!ScaleDataType>} */
 static m_values__() {
  ScaleDataType.$clinit();
  return /**@type {!Array<ScaleDataType>}*/ ($Arrays.$init([ScaleDataType.$static_NUMBER__org_pepstock_charba_client_enums_ScaleDataType, ScaleDataType.$static_DATE__org_pepstock_charba_client_enums_ScaleDataType, ScaleDataType.$static_STRING__org_pepstock_charba_client_enums_ScaleDataType], ScaleDataType));
 }
 /** @return {!ScaleDataType} */
 static get f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType() {
  return (ScaleDataType.$clinit(), ScaleDataType.$static_NUMBER__org_pepstock_charba_client_enums_ScaleDataType);
 }
 /** @return {!ScaleDataType} */
 static get f_DATE__org_pepstock_charba_client_enums_ScaleDataType() {
  return (ScaleDataType.$clinit(), ScaleDataType.$static_DATE__org_pepstock_charba_client_enums_ScaleDataType);
 }
 /** @return {!ScaleDataType} */
 static get f_STRING__org_pepstock_charba_client_enums_ScaleDataType() {
  return (ScaleDataType.$clinit(), ScaleDataType.$static_STRING__org_pepstock_charba_client_enums_ScaleDataType);
 }
 
 static $clinit() {
  ScaleDataType.$clinit = () =>{};
  ScaleDataType.$loadModules();
  Enum.$clinit();
  ScaleDataType.$static_NUMBER__org_pepstock_charba_client_enums_ScaleDataType = ScaleDataType.$create__java_lang_String__int($Util.$makeEnumName("NUMBER"), ScaleDataType.$ordinal_NUMBER__org_pepstock_charba_client_enums_ScaleDataType);
  ScaleDataType.$static_DATE__org_pepstock_charba_client_enums_ScaleDataType = ScaleDataType.$create__java_lang_String__int($Util.$makeEnumName("DATE"), ScaleDataType.$ordinal_DATE__org_pepstock_charba_client_enums_ScaleDataType);
  ScaleDataType.$static_STRING__org_pepstock_charba_client_enums_ScaleDataType = ScaleDataType.$create__java_lang_String__int($Util.$makeEnumName("STRING"), ScaleDataType.$ordinal_STRING__org_pepstock_charba_client_enums_ScaleDataType);
  ScaleDataType.f_namesToValuesMap__org_pepstock_charba_client_enums_ScaleDataType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleDataType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ScaleDataType}*/
ScaleDataType.$static_NUMBER__org_pepstock_charba_client_enums_ScaleDataType;
/**@private {!ScaleDataType}*/
ScaleDataType.$static_DATE__org_pepstock_charba_client_enums_ScaleDataType;
/**@private {!ScaleDataType}*/
ScaleDataType.$static_STRING__org_pepstock_charba_client_enums_ScaleDataType;
/**@type {Map<?string, !ScaleDataType>}*/
ScaleDataType.f_namesToValuesMap__org_pepstock_charba_client_enums_ScaleDataType_;
/**@const {number}*/
ScaleDataType.$ordinal_NUMBER__org_pepstock_charba_client_enums_ScaleDataType = 0;
/**@const {number}*/
ScaleDataType.$ordinal_DATE__org_pepstock_charba_client_enums_ScaleDataType = 1;
/**@const {number}*/
ScaleDataType.$ordinal_STRING__org_pepstock_charba_client_enums_ScaleDataType = 2;
$Util.$setClassMetadataForEnum(ScaleDataType, "org.pepstock.charba.client.enums.ScaleDataType");

exports = ScaleDataType;

//# sourceMappingURL=ScaleDataType.js.map
