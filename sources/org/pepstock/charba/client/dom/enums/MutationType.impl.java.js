goog.module('org.pepstock.charba.client.dom.enums.MutationType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<MutationType>}
 * @implements {Key}
 */
class MutationType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_dom_enums_MutationType_;
 }
 /** @return {!MutationType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new MutationType();
  $instance.$ctor__org_pepstock_charba_client_dom_enums_MutationType__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_enums_MutationType__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_dom_enums_MutationType_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_dom_enums_MutationType_;
 }
 /** @return {!MutationType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  MutationType.$clinit();
  if ($Equality.$same(MutationType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_MutationType_, null)) {
   MutationType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_MutationType_ = $Enums.createMapFromValues(MutationType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, MutationType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_MutationType_);
 }
 /** @return {!Array<!MutationType>} */
 static m_values__() {
  MutationType.$clinit();
  return /**@type {!Array<MutationType>}*/ ($Arrays.$init([MutationType.$static_ATTRIBUTES__org_pepstock_charba_client_dom_enums_MutationType, MutationType.$static_CHARACTER_DATA__org_pepstock_charba_client_dom_enums_MutationType, MutationType.$static_CHILD_LIST__org_pepstock_charba_client_dom_enums_MutationType], MutationType));
 }
 /** @return {!MutationType} */
 static get f_ATTRIBUTES__org_pepstock_charba_client_dom_enums_MutationType() {
  return (MutationType.$clinit(), MutationType.$static_ATTRIBUTES__org_pepstock_charba_client_dom_enums_MutationType);
 }
 /** @return {!MutationType} */
 static get f_CHARACTER_DATA__org_pepstock_charba_client_dom_enums_MutationType() {
  return (MutationType.$clinit(), MutationType.$static_CHARACTER_DATA__org_pepstock_charba_client_dom_enums_MutationType);
 }
 /** @return {!MutationType} */
 static get f_CHILD_LIST__org_pepstock_charba_client_dom_enums_MutationType() {
  return (MutationType.$clinit(), MutationType.$static_CHILD_LIST__org_pepstock_charba_client_dom_enums_MutationType);
 }
 
 static $clinit() {
  MutationType.$clinit = () =>{};
  MutationType.$loadModules();
  Enum.$clinit();
  MutationType.$static_ATTRIBUTES__org_pepstock_charba_client_dom_enums_MutationType = MutationType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ATTRIBUTES"), MutationType.$ordinal_ATTRIBUTES__org_pepstock_charba_client_dom_enums_MutationType, "attributes");
  MutationType.$static_CHARACTER_DATA__org_pepstock_charba_client_dom_enums_MutationType = MutationType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARACTER_DATA"), MutationType.$ordinal_CHARACTER_DATA__org_pepstock_charba_client_dom_enums_MutationType, "characterData");
  MutationType.$static_CHILD_LIST__org_pepstock_charba_client_dom_enums_MutationType = MutationType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHILD_LIST"), MutationType.$ordinal_CHILD_LIST__org_pepstock_charba_client_dom_enums_MutationType, "childList");
  MutationType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_MutationType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MutationType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!MutationType}*/
MutationType.$static_ATTRIBUTES__org_pepstock_charba_client_dom_enums_MutationType;
/**@private {!MutationType}*/
MutationType.$static_CHARACTER_DATA__org_pepstock_charba_client_dom_enums_MutationType;
/**@private {!MutationType}*/
MutationType.$static_CHILD_LIST__org_pepstock_charba_client_dom_enums_MutationType;
/**@type {Map<?string, !MutationType>}*/
MutationType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_MutationType_;
/**@const {number}*/
MutationType.$ordinal_ATTRIBUTES__org_pepstock_charba_client_dom_enums_MutationType = 0;
/**@const {number}*/
MutationType.$ordinal_CHARACTER_DATA__org_pepstock_charba_client_dom_enums_MutationType = 1;
/**@const {number}*/
MutationType.$ordinal_CHILD_LIST__org_pepstock_charba_client_dom_enums_MutationType = 2;
Key.$markImplementor(MutationType);
$Util.$setClassMetadataForEnum(MutationType, "org.pepstock.charba.client.dom.enums.MutationType");

exports = MutationType;

//# sourceMappingURL=MutationType.js.map
