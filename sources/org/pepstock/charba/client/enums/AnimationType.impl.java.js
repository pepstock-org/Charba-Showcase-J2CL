goog.module('org.pepstock.charba.client.enums.AnimationType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AnimationType>}
 * @implements {Key}
 */
class AnimationType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_AnimationType_;
 }
 /** @return {!AnimationType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new AnimationType();
  $instance.$ctor__org_pepstock_charba_client_enums_AnimationType__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_AnimationType__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_AnimationType_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_AnimationType_;
 }
 /** @return {!AnimationType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  AnimationType.$clinit();
  if ($Equality.$same(AnimationType.f_namesToValuesMap__org_pepstock_charba_client_enums_AnimationType_, null)) {
   AnimationType.f_namesToValuesMap__org_pepstock_charba_client_enums_AnimationType_ = $Enums.createMapFromValues(AnimationType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AnimationType.f_namesToValuesMap__org_pepstock_charba_client_enums_AnimationType_);
 }
 /** @return {!Array<!AnimationType>} */
 static m_values__() {
  AnimationType.$clinit();
  return /**@type {!Array<AnimationType>}*/ ($Arrays.$init([AnimationType.$static_NUMBER__org_pepstock_charba_client_enums_AnimationType, AnimationType.$static_COLOR__org_pepstock_charba_client_enums_AnimationType, AnimationType.$static_BOOLEAN__org_pepstock_charba_client_enums_AnimationType], AnimationType));
 }
 /** @return {!AnimationType} */
 static get f_NUMBER__org_pepstock_charba_client_enums_AnimationType() {
  return (AnimationType.$clinit(), AnimationType.$static_NUMBER__org_pepstock_charba_client_enums_AnimationType);
 }
 /** @return {!AnimationType} */
 static get f_COLOR__org_pepstock_charba_client_enums_AnimationType() {
  return (AnimationType.$clinit(), AnimationType.$static_COLOR__org_pepstock_charba_client_enums_AnimationType);
 }
 /** @return {!AnimationType} */
 static get f_BOOLEAN__org_pepstock_charba_client_enums_AnimationType() {
  return (AnimationType.$clinit(), AnimationType.$static_BOOLEAN__org_pepstock_charba_client_enums_AnimationType);
 }
 
 static $clinit() {
  AnimationType.$clinit = () =>{};
  AnimationType.$loadModules();
  Enum.$clinit();
  AnimationType.$static_NUMBER__org_pepstock_charba_client_enums_AnimationType = AnimationType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NUMBER"), AnimationType.$ordinal_NUMBER__org_pepstock_charba_client_enums_AnimationType, "number");
  AnimationType.$static_COLOR__org_pepstock_charba_client_enums_AnimationType = AnimationType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR"), AnimationType.$ordinal_COLOR__org_pepstock_charba_client_enums_AnimationType, "color");
  AnimationType.$static_BOOLEAN__org_pepstock_charba_client_enums_AnimationType = AnimationType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BOOLEAN"), AnimationType.$ordinal_BOOLEAN__org_pepstock_charba_client_enums_AnimationType, "boolean");
  AnimationType.f_namesToValuesMap__org_pepstock_charba_client_enums_AnimationType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!AnimationType}*/
AnimationType.$static_NUMBER__org_pepstock_charba_client_enums_AnimationType;
/**@private {!AnimationType}*/
AnimationType.$static_COLOR__org_pepstock_charba_client_enums_AnimationType;
/**@private {!AnimationType}*/
AnimationType.$static_BOOLEAN__org_pepstock_charba_client_enums_AnimationType;
/**@type {Map<?string, !AnimationType>}*/
AnimationType.f_namesToValuesMap__org_pepstock_charba_client_enums_AnimationType_;
/**@const {number}*/
AnimationType.$ordinal_NUMBER__org_pepstock_charba_client_enums_AnimationType = 0;
/**@const {number}*/
AnimationType.$ordinal_COLOR__org_pepstock_charba_client_enums_AnimationType = 1;
/**@const {number}*/
AnimationType.$ordinal_BOOLEAN__org_pepstock_charba_client_enums_AnimationType = 2;
Key.$markImplementor(AnimationType);
$Util.$setClassMetadataForEnum(AnimationType, "org.pepstock.charba.client.enums.AnimationType");

exports = AnimationType;

//# sourceMappingURL=AnimationType.js.map
