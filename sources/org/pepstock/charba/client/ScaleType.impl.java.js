goog.module('org.pepstock.charba.client.ScaleType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ScaleType>}
 */
class ScaleType extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ScaleType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new ScaleType();
  $instance.$ctor__org_pepstock_charba_client_ScaleType__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_ScaleType__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {!ScaleType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ScaleType.$clinit();
  if ($Equality.$same(ScaleType.f_namesToValuesMap__org_pepstock_charba_client_ScaleType_, null)) {
   ScaleType.f_namesToValuesMap__org_pepstock_charba_client_ScaleType_ = $Enums.createMapFromValues(ScaleType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ScaleType.f_namesToValuesMap__org_pepstock_charba_client_ScaleType_);
 }
 /** @return {!Array<!ScaleType>} */
 static m_values__() {
  ScaleType.$clinit();
  return /**@type {!Array<ScaleType>}*/ ($Arrays.$init([ScaleType.$static_MULTI__org_pepstock_charba_client_ScaleType, ScaleType.$static_SINGLE__org_pepstock_charba_client_ScaleType, ScaleType.$static_NONE__org_pepstock_charba_client_ScaleType], ScaleType));
 }
 /** @return {!ScaleType} */
 static get f_MULTI__org_pepstock_charba_client_ScaleType() {
  return (ScaleType.$clinit(), ScaleType.$static_MULTI__org_pepstock_charba_client_ScaleType);
 }
 /** @return {!ScaleType} */
 static get f_SINGLE__org_pepstock_charba_client_ScaleType() {
  return (ScaleType.$clinit(), ScaleType.$static_SINGLE__org_pepstock_charba_client_ScaleType);
 }
 /** @return {!ScaleType} */
 static get f_NONE__org_pepstock_charba_client_ScaleType() {
  return (ScaleType.$clinit(), ScaleType.$static_NONE__org_pepstock_charba_client_ScaleType);
 }
 
 static $clinit() {
  ScaleType.$clinit = () =>{};
  ScaleType.$loadModules();
  Enum.$clinit();
  ScaleType.$static_MULTI__org_pepstock_charba_client_ScaleType = ScaleType.$create__java_lang_String__int($Util.$makeEnumName("MULTI"), ScaleType.$ordinal_MULTI__org_pepstock_charba_client_ScaleType);
  ScaleType.$static_SINGLE__org_pepstock_charba_client_ScaleType = ScaleType.$create__java_lang_String__int($Util.$makeEnumName("SINGLE"), ScaleType.$ordinal_SINGLE__org_pepstock_charba_client_ScaleType);
  ScaleType.$static_NONE__org_pepstock_charba_client_ScaleType = ScaleType.$create__java_lang_String__int($Util.$makeEnumName("NONE"), ScaleType.$ordinal_NONE__org_pepstock_charba_client_ScaleType);
  ScaleType.f_namesToValuesMap__org_pepstock_charba_client_ScaleType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ScaleType}*/
ScaleType.$static_MULTI__org_pepstock_charba_client_ScaleType;
/**@private {!ScaleType}*/
ScaleType.$static_SINGLE__org_pepstock_charba_client_ScaleType;
/**@private {!ScaleType}*/
ScaleType.$static_NONE__org_pepstock_charba_client_ScaleType;
/**@type {Map<?string, !ScaleType>}*/
ScaleType.f_namesToValuesMap__org_pepstock_charba_client_ScaleType_;
/**@const {number}*/
ScaleType.$ordinal_MULTI__org_pepstock_charba_client_ScaleType = 0;
/**@const {number}*/
ScaleType.$ordinal_SINGLE__org_pepstock_charba_client_ScaleType = 1;
/**@const {number}*/
ScaleType.$ordinal_NONE__org_pepstock_charba_client_ScaleType = 2;
$Util.$setClassMetadataForEnum(ScaleType, "org.pepstock.charba.client.ScaleType");

exports = ScaleType;

//# sourceMappingURL=ScaleType.js.map
