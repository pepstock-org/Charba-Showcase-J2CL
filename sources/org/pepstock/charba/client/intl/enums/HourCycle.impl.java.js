goog.module('org.pepstock.charba.client.intl.enums.HourCycle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<HourCycle>}
 * @implements {Key}
 */
class HourCycle extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_HourCycle_;
 }
 /** @return {!HourCycle} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new HourCycle();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_HourCycle__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_HourCycle__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_HourCycle_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_HourCycle_;
 }
 /** @return {!HourCycle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  HourCycle.$clinit();
  if ($Equality.$same(HourCycle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_HourCycle_, null)) {
   HourCycle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_HourCycle_ = $Enums.createMapFromValues(HourCycle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, HourCycle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_HourCycle_);
 }
 /** @return {!Array<!HourCycle>} */
 static m_values__() {
  HourCycle.$clinit();
  return /**@type {!Array<HourCycle>}*/ ($Arrays.$init([HourCycle.$static_H11__org_pepstock_charba_client_intl_enums_HourCycle, HourCycle.$static_H12__org_pepstock_charba_client_intl_enums_HourCycle, HourCycle.$static_H23__org_pepstock_charba_client_intl_enums_HourCycle, HourCycle.$static_H24__org_pepstock_charba_client_intl_enums_HourCycle], HourCycle));
 }
 /** @return {!HourCycle} */
 static get f_H11__org_pepstock_charba_client_intl_enums_HourCycle() {
  return (HourCycle.$clinit(), HourCycle.$static_H11__org_pepstock_charba_client_intl_enums_HourCycle);
 }
 /** @return {!HourCycle} */
 static get f_H12__org_pepstock_charba_client_intl_enums_HourCycle() {
  return (HourCycle.$clinit(), HourCycle.$static_H12__org_pepstock_charba_client_intl_enums_HourCycle);
 }
 /** @return {!HourCycle} */
 static get f_H23__org_pepstock_charba_client_intl_enums_HourCycle() {
  return (HourCycle.$clinit(), HourCycle.$static_H23__org_pepstock_charba_client_intl_enums_HourCycle);
 }
 /** @return {!HourCycle} */
 static get f_H24__org_pepstock_charba_client_intl_enums_HourCycle() {
  return (HourCycle.$clinit(), HourCycle.$static_H24__org_pepstock_charba_client_intl_enums_HourCycle);
 }
 
 static $clinit() {
  HourCycle.$clinit = () =>{};
  HourCycle.$loadModules();
  Enum.$clinit();
  HourCycle.$static_H11__org_pepstock_charba_client_intl_enums_HourCycle = HourCycle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("H11"), HourCycle.$ordinal_H11__org_pepstock_charba_client_intl_enums_HourCycle, "h11");
  HourCycle.$static_H12__org_pepstock_charba_client_intl_enums_HourCycle = HourCycle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("H12"), HourCycle.$ordinal_H12__org_pepstock_charba_client_intl_enums_HourCycle, "h12");
  HourCycle.$static_H23__org_pepstock_charba_client_intl_enums_HourCycle = HourCycle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("H23"), HourCycle.$ordinal_H23__org_pepstock_charba_client_intl_enums_HourCycle, "h23");
  HourCycle.$static_H24__org_pepstock_charba_client_intl_enums_HourCycle = HourCycle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("H24"), HourCycle.$ordinal_H24__org_pepstock_charba_client_intl_enums_HourCycle, "h24");
  HourCycle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_HourCycle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HourCycle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!HourCycle}*/
HourCycle.$static_H11__org_pepstock_charba_client_intl_enums_HourCycle;
/**@private {!HourCycle}*/
HourCycle.$static_H12__org_pepstock_charba_client_intl_enums_HourCycle;
/**@private {!HourCycle}*/
HourCycle.$static_H23__org_pepstock_charba_client_intl_enums_HourCycle;
/**@private {!HourCycle}*/
HourCycle.$static_H24__org_pepstock_charba_client_intl_enums_HourCycle;
/**@type {Map<?string, !HourCycle>}*/
HourCycle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_HourCycle_;
/**@const {number}*/
HourCycle.$ordinal_H11__org_pepstock_charba_client_intl_enums_HourCycle = 0;
/**@const {number}*/
HourCycle.$ordinal_H12__org_pepstock_charba_client_intl_enums_HourCycle = 1;
/**@const {number}*/
HourCycle.$ordinal_H23__org_pepstock_charba_client_intl_enums_HourCycle = 2;
/**@const {number}*/
HourCycle.$ordinal_H24__org_pepstock_charba_client_intl_enums_HourCycle = 3;
Key.$markImplementor(HourCycle);
$Util.$setClassMetadataForEnum(HourCycle, "org.pepstock.charba.client.intl.enums.HourCycle");

exports = HourCycle;

//# sourceMappingURL=HourCycle.js.map
