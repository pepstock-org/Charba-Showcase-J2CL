goog.module('org.pepstock.charba.client.intl.enums.NumberItemStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<NumberItemStyle>}
 * @implements {Key}
 */
class NumberItemStyle extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_NumberItemStyle_;
 }
 /** @return {!NumberItemStyle} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new NumberItemStyle();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_NumberItemStyle__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_NumberItemStyle__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_NumberItemStyle_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_NumberItemStyle_;
 }
 /** @return {!NumberItemStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  NumberItemStyle.$clinit();
  if ($Equality.$same(NumberItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_NumberItemStyle_, null)) {
   NumberItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_NumberItemStyle_ = $Enums.createMapFromValues(NumberItemStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, NumberItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_NumberItemStyle_);
 }
 /** @return {!Array<!NumberItemStyle>} */
 static m_values__() {
  NumberItemStyle.$clinit();
  return /**@type {!Array<NumberItemStyle>}*/ ($Arrays.$init([NumberItemStyle.$static_NUMERIC__org_pepstock_charba_client_intl_enums_NumberItemStyle, NumberItemStyle.$static_TWO_DIGITS__org_pepstock_charba_client_intl_enums_NumberItemStyle], NumberItemStyle));
 }
 /** @return {!NumberItemStyle} */
 static get f_NUMERIC__org_pepstock_charba_client_intl_enums_NumberItemStyle() {
  return (NumberItemStyle.$clinit(), NumberItemStyle.$static_NUMERIC__org_pepstock_charba_client_intl_enums_NumberItemStyle);
 }
 /** @return {!NumberItemStyle} */
 static get f_TWO_DIGITS__org_pepstock_charba_client_intl_enums_NumberItemStyle() {
  return (NumberItemStyle.$clinit(), NumberItemStyle.$static_TWO_DIGITS__org_pepstock_charba_client_intl_enums_NumberItemStyle);
 }
 
 static $clinit() {
  NumberItemStyle.$clinit = () =>{};
  NumberItemStyle.$loadModules();
  Enum.$clinit();
  NumberItemStyle.$static_NUMERIC__org_pepstock_charba_client_intl_enums_NumberItemStyle = NumberItemStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NUMERIC"), NumberItemStyle.$ordinal_NUMERIC__org_pepstock_charba_client_intl_enums_NumberItemStyle, "numeric");
  NumberItemStyle.$static_TWO_DIGITS__org_pepstock_charba_client_intl_enums_NumberItemStyle = NumberItemStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TWO_DIGITS"), NumberItemStyle.$ordinal_TWO_DIGITS__org_pepstock_charba_client_intl_enums_NumberItemStyle, "2-digit");
  NumberItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_NumberItemStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberItemStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!NumberItemStyle}*/
NumberItemStyle.$static_NUMERIC__org_pepstock_charba_client_intl_enums_NumberItemStyle;
/**@private {!NumberItemStyle}*/
NumberItemStyle.$static_TWO_DIGITS__org_pepstock_charba_client_intl_enums_NumberItemStyle;
/**@type {Map<?string, !NumberItemStyle>}*/
NumberItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_NumberItemStyle_;
/**@const {number}*/
NumberItemStyle.$ordinal_NUMERIC__org_pepstock_charba_client_intl_enums_NumberItemStyle = 0;
/**@const {number}*/
NumberItemStyle.$ordinal_TWO_DIGITS__org_pepstock_charba_client_intl_enums_NumberItemStyle = 1;
Key.$markImplementor(NumberItemStyle);
$Util.$setClassMetadataForEnum(NumberItemStyle, "org.pepstock.charba.client.intl.enums.NumberItemStyle");

exports = NumberItemStyle;

//# sourceMappingURL=NumberItemStyle.js.map
