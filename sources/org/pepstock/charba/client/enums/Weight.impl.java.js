goog.module('org.pepstock.charba.client.enums.Weight$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Weight>}
 * @implements {Key}
 */
class Weight extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_Weight_;
 }
 /** @return {!Weight} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Weight();
  $instance.$ctor__org_pepstock_charba_client_enums_Weight__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_Weight__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_Weight_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_Weight_;
 }
 /** @return {!Weight} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Weight.$clinit();
  if ($Equality.$same(Weight.f_namesToValuesMap__org_pepstock_charba_client_enums_Weight_, null)) {
   Weight.f_namesToValuesMap__org_pepstock_charba_client_enums_Weight_ = $Enums.createMapFromValues(Weight.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Weight.f_namesToValuesMap__org_pepstock_charba_client_enums_Weight_);
 }
 /** @return {!Array<!Weight>} */
 static m_values__() {
  Weight.$clinit();
  return /**@type {!Array<Weight>}*/ ($Arrays.$init([Weight.$static_NORMAL__org_pepstock_charba_client_enums_Weight, Weight.$static_BOLD__org_pepstock_charba_client_enums_Weight, Weight.$static_BOLDER__org_pepstock_charba_client_enums_Weight, Weight.$static_LIGHTER__org_pepstock_charba_client_enums_Weight, Weight.$static_INITIAL__org_pepstock_charba_client_enums_Weight, Weight.$static_INHERIT__org_pepstock_charba_client_enums_Weight], Weight));
 }
 /** @return {!Weight} */
 static get f_NORMAL__org_pepstock_charba_client_enums_Weight() {
  return (Weight.$clinit(), Weight.$static_NORMAL__org_pepstock_charba_client_enums_Weight);
 }
 /** @return {!Weight} */
 static get f_BOLD__org_pepstock_charba_client_enums_Weight() {
  return (Weight.$clinit(), Weight.$static_BOLD__org_pepstock_charba_client_enums_Weight);
 }
 /** @return {!Weight} */
 static get f_BOLDER__org_pepstock_charba_client_enums_Weight() {
  return (Weight.$clinit(), Weight.$static_BOLDER__org_pepstock_charba_client_enums_Weight);
 }
 /** @return {!Weight} */
 static get f_LIGHTER__org_pepstock_charba_client_enums_Weight() {
  return (Weight.$clinit(), Weight.$static_LIGHTER__org_pepstock_charba_client_enums_Weight);
 }
 /** @return {!Weight} */
 static get f_INITIAL__org_pepstock_charba_client_enums_Weight() {
  return (Weight.$clinit(), Weight.$static_INITIAL__org_pepstock_charba_client_enums_Weight);
 }
 /** @return {!Weight} */
 static get f_INHERIT__org_pepstock_charba_client_enums_Weight() {
  return (Weight.$clinit(), Weight.$static_INHERIT__org_pepstock_charba_client_enums_Weight);
 }
 
 static $clinit() {
  Weight.$clinit = () =>{};
  Weight.$loadModules();
  Enum.$clinit();
  Weight.$static_NORMAL__org_pepstock_charba_client_enums_Weight = Weight.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NORMAL"), Weight.$ordinal_NORMAL__org_pepstock_charba_client_enums_Weight, "normal");
  Weight.$static_BOLD__org_pepstock_charba_client_enums_Weight = Weight.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BOLD"), Weight.$ordinal_BOLD__org_pepstock_charba_client_enums_Weight, "bold");
  Weight.$static_BOLDER__org_pepstock_charba_client_enums_Weight = Weight.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BOLDER"), Weight.$ordinal_BOLDER__org_pepstock_charba_client_enums_Weight, "bolder");
  Weight.$static_LIGHTER__org_pepstock_charba_client_enums_Weight = Weight.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHTER"), Weight.$ordinal_LIGHTER__org_pepstock_charba_client_enums_Weight, "lighter");
  Weight.$static_INITIAL__org_pepstock_charba_client_enums_Weight = Weight.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INITIAL"), Weight.$ordinal_INITIAL__org_pepstock_charba_client_enums_Weight, "initial");
  Weight.$static_INHERIT__org_pepstock_charba_client_enums_Weight = Weight.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INHERIT"), Weight.$ordinal_INHERIT__org_pepstock_charba_client_enums_Weight, "inherit");
  Weight.f_namesToValuesMap__org_pepstock_charba_client_enums_Weight_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Weight;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Weight}*/
Weight.$static_NORMAL__org_pepstock_charba_client_enums_Weight;
/**@private {!Weight}*/
Weight.$static_BOLD__org_pepstock_charba_client_enums_Weight;
/**@private {!Weight}*/
Weight.$static_BOLDER__org_pepstock_charba_client_enums_Weight;
/**@private {!Weight}*/
Weight.$static_LIGHTER__org_pepstock_charba_client_enums_Weight;
/**@private {!Weight}*/
Weight.$static_INITIAL__org_pepstock_charba_client_enums_Weight;
/**@private {!Weight}*/
Weight.$static_INHERIT__org_pepstock_charba_client_enums_Weight;
/**@type {Map<?string, !Weight>}*/
Weight.f_namesToValuesMap__org_pepstock_charba_client_enums_Weight_;
/**@const {number}*/
Weight.$ordinal_NORMAL__org_pepstock_charba_client_enums_Weight = 0;
/**@const {number}*/
Weight.$ordinal_BOLD__org_pepstock_charba_client_enums_Weight = 1;
/**@const {number}*/
Weight.$ordinal_BOLDER__org_pepstock_charba_client_enums_Weight = 2;
/**@const {number}*/
Weight.$ordinal_LIGHTER__org_pepstock_charba_client_enums_Weight = 3;
/**@const {number}*/
Weight.$ordinal_INITIAL__org_pepstock_charba_client_enums_Weight = 4;
/**@const {number}*/
Weight.$ordinal_INHERIT__org_pepstock_charba_client_enums_Weight = 5;
Key.$markImplementor(Weight);
$Util.$setClassMetadataForEnum(Weight, "org.pepstock.charba.client.enums.Weight");

exports = Weight;

//# sourceMappingURL=Weight.js.map
