goog.module('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<CubicInterpolationMode>}
 * @implements {Key}
 */
class CubicInterpolationMode extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_CubicInterpolationMode_;
 }
 /** @return {!CubicInterpolationMode} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new CubicInterpolationMode();
  $instance.$ctor__org_pepstock_charba_client_enums_CubicInterpolationMode__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_CubicInterpolationMode__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_CubicInterpolationMode_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_CubicInterpolationMode_;
 }
 /** @return {!CubicInterpolationMode} */
 static m_valueOf__java_lang_String(/** string */ name) {
  CubicInterpolationMode.$clinit();
  if ($Equality.$same(CubicInterpolationMode.f_namesToValuesMap__org_pepstock_charba_client_enums_CubicInterpolationMode_, null)) {
   CubicInterpolationMode.f_namesToValuesMap__org_pepstock_charba_client_enums_CubicInterpolationMode_ = $Enums.createMapFromValues(CubicInterpolationMode.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CubicInterpolationMode.f_namesToValuesMap__org_pepstock_charba_client_enums_CubicInterpolationMode_);
 }
 /** @return {!Array<!CubicInterpolationMode>} */
 static m_values__() {
  CubicInterpolationMode.$clinit();
  return /**@type {!Array<CubicInterpolationMode>}*/ ($Arrays.$init([CubicInterpolationMode.$static_DEFAULT__org_pepstock_charba_client_enums_CubicInterpolationMode, CubicInterpolationMode.$static_MONOTONE__org_pepstock_charba_client_enums_CubicInterpolationMode], CubicInterpolationMode));
 }
 /** @return {!CubicInterpolationMode} */
 static get f_DEFAULT__org_pepstock_charba_client_enums_CubicInterpolationMode() {
  return (CubicInterpolationMode.$clinit(), CubicInterpolationMode.$static_DEFAULT__org_pepstock_charba_client_enums_CubicInterpolationMode);
 }
 /** @return {!CubicInterpolationMode} */
 static get f_MONOTONE__org_pepstock_charba_client_enums_CubicInterpolationMode() {
  return (CubicInterpolationMode.$clinit(), CubicInterpolationMode.$static_MONOTONE__org_pepstock_charba_client_enums_CubicInterpolationMode);
 }
 
 static $clinit() {
  CubicInterpolationMode.$clinit = () =>{};
  CubicInterpolationMode.$loadModules();
  Enum.$clinit();
  CubicInterpolationMode.$static_DEFAULT__org_pepstock_charba_client_enums_CubicInterpolationMode = CubicInterpolationMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DEFAULT"), CubicInterpolationMode.$ordinal_DEFAULT__org_pepstock_charba_client_enums_CubicInterpolationMode, "default");
  CubicInterpolationMode.$static_MONOTONE__org_pepstock_charba_client_enums_CubicInterpolationMode = CubicInterpolationMode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MONOTONE"), CubicInterpolationMode.$ordinal_MONOTONE__org_pepstock_charba_client_enums_CubicInterpolationMode, "monotone");
  CubicInterpolationMode.f_namesToValuesMap__org_pepstock_charba_client_enums_CubicInterpolationMode_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CubicInterpolationMode;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!CubicInterpolationMode}*/
CubicInterpolationMode.$static_DEFAULT__org_pepstock_charba_client_enums_CubicInterpolationMode;
/**@private {!CubicInterpolationMode}*/
CubicInterpolationMode.$static_MONOTONE__org_pepstock_charba_client_enums_CubicInterpolationMode;
/**@type {Map<?string, !CubicInterpolationMode>}*/
CubicInterpolationMode.f_namesToValuesMap__org_pepstock_charba_client_enums_CubicInterpolationMode_;
/**@const {number}*/
CubicInterpolationMode.$ordinal_DEFAULT__org_pepstock_charba_client_enums_CubicInterpolationMode = 0;
/**@const {number}*/
CubicInterpolationMode.$ordinal_MONOTONE__org_pepstock_charba_client_enums_CubicInterpolationMode = 1;
Key.$markImplementor(CubicInterpolationMode);
$Util.$setClassMetadataForEnum(CubicInterpolationMode, "org.pepstock.charba.client.enums.CubicInterpolationMode");

exports = CubicInterpolationMode;

//# sourceMappingURL=CubicInterpolationMode.js.map
