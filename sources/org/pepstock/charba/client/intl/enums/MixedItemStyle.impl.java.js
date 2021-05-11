goog.module('org.pepstock.charba.client.intl.enums.MixedItemStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<MixedItemStyle>}
 * @implements {Key}
 */
class MixedItemStyle extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_MixedItemStyle_;
 }
 /** @return {!MixedItemStyle} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new MixedItemStyle();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_MixedItemStyle__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_MixedItemStyle__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_MixedItemStyle_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_MixedItemStyle_;
 }
 /** @return {!MixedItemStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  MixedItemStyle.$clinit();
  if ($Equality.$same(MixedItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MixedItemStyle_, null)) {
   MixedItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MixedItemStyle_ = $Enums.createMapFromValues(MixedItemStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, MixedItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MixedItemStyle_);
 }
 /** @return {!Array<!MixedItemStyle>} */
 static m_values__() {
  MixedItemStyle.$clinit();
  return /**@type {!Array<MixedItemStyle>}*/ ($Arrays.$init([MixedItemStyle.$static_NUMERIC__org_pepstock_charba_client_intl_enums_MixedItemStyle, MixedItemStyle.$static_TWO_DIGITS__org_pepstock_charba_client_intl_enums_MixedItemStyle, MixedItemStyle.$static_NARROW__org_pepstock_charba_client_intl_enums_MixedItemStyle, MixedItemStyle.$static_LONG__org_pepstock_charba_client_intl_enums_MixedItemStyle, MixedItemStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_MixedItemStyle], MixedItemStyle));
 }
 /** @return {!MixedItemStyle} */
 static get f_NUMERIC__org_pepstock_charba_client_intl_enums_MixedItemStyle() {
  return (MixedItemStyle.$clinit(), MixedItemStyle.$static_NUMERIC__org_pepstock_charba_client_intl_enums_MixedItemStyle);
 }
 /** @return {!MixedItemStyle} */
 static get f_TWO_DIGITS__org_pepstock_charba_client_intl_enums_MixedItemStyle() {
  return (MixedItemStyle.$clinit(), MixedItemStyle.$static_TWO_DIGITS__org_pepstock_charba_client_intl_enums_MixedItemStyle);
 }
 /** @return {!MixedItemStyle} */
 static get f_NARROW__org_pepstock_charba_client_intl_enums_MixedItemStyle() {
  return (MixedItemStyle.$clinit(), MixedItemStyle.$static_NARROW__org_pepstock_charba_client_intl_enums_MixedItemStyle);
 }
 /** @return {!MixedItemStyle} */
 static get f_LONG__org_pepstock_charba_client_intl_enums_MixedItemStyle() {
  return (MixedItemStyle.$clinit(), MixedItemStyle.$static_LONG__org_pepstock_charba_client_intl_enums_MixedItemStyle);
 }
 /** @return {!MixedItemStyle} */
 static get f_SHORT__org_pepstock_charba_client_intl_enums_MixedItemStyle() {
  return (MixedItemStyle.$clinit(), MixedItemStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_MixedItemStyle);
 }
 
 static $clinit() {
  MixedItemStyle.$clinit = () =>{};
  MixedItemStyle.$loadModules();
  Enum.$clinit();
  MixedItemStyle.$static_NUMERIC__org_pepstock_charba_client_intl_enums_MixedItemStyle = MixedItemStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NUMERIC"), MixedItemStyle.$ordinal_NUMERIC__org_pepstock_charba_client_intl_enums_MixedItemStyle, "numeric");
  MixedItemStyle.$static_TWO_DIGITS__org_pepstock_charba_client_intl_enums_MixedItemStyle = MixedItemStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TWO_DIGITS"), MixedItemStyle.$ordinal_TWO_DIGITS__org_pepstock_charba_client_intl_enums_MixedItemStyle, "2-digit");
  MixedItemStyle.$static_NARROW__org_pepstock_charba_client_intl_enums_MixedItemStyle = MixedItemStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NARROW"), MixedItemStyle.$ordinal_NARROW__org_pepstock_charba_client_intl_enums_MixedItemStyle, "narrow");
  MixedItemStyle.$static_LONG__org_pepstock_charba_client_intl_enums_MixedItemStyle = MixedItemStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LONG"), MixedItemStyle.$ordinal_LONG__org_pepstock_charba_client_intl_enums_MixedItemStyle, "long");
  MixedItemStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_MixedItemStyle = MixedItemStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHORT"), MixedItemStyle.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_MixedItemStyle, "short");
  MixedItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MixedItemStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MixedItemStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!MixedItemStyle}*/
MixedItemStyle.$static_NUMERIC__org_pepstock_charba_client_intl_enums_MixedItemStyle;
/**@private {!MixedItemStyle}*/
MixedItemStyle.$static_TWO_DIGITS__org_pepstock_charba_client_intl_enums_MixedItemStyle;
/**@private {!MixedItemStyle}*/
MixedItemStyle.$static_NARROW__org_pepstock_charba_client_intl_enums_MixedItemStyle;
/**@private {!MixedItemStyle}*/
MixedItemStyle.$static_LONG__org_pepstock_charba_client_intl_enums_MixedItemStyle;
/**@private {!MixedItemStyle}*/
MixedItemStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_MixedItemStyle;
/**@type {Map<?string, !MixedItemStyle>}*/
MixedItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MixedItemStyle_;
/**@const {number}*/
MixedItemStyle.$ordinal_NUMERIC__org_pepstock_charba_client_intl_enums_MixedItemStyle = 0;
/**@const {number}*/
MixedItemStyle.$ordinal_TWO_DIGITS__org_pepstock_charba_client_intl_enums_MixedItemStyle = 1;
/**@const {number}*/
MixedItemStyle.$ordinal_NARROW__org_pepstock_charba_client_intl_enums_MixedItemStyle = 2;
/**@const {number}*/
MixedItemStyle.$ordinal_LONG__org_pepstock_charba_client_intl_enums_MixedItemStyle = 3;
/**@const {number}*/
MixedItemStyle.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_MixedItemStyle = 4;
Key.$markImplementor(MixedItemStyle);
$Util.$setClassMetadataForEnum(MixedItemStyle, "org.pepstock.charba.client.intl.enums.MixedItemStyle");

exports = MixedItemStyle;

//# sourceMappingURL=MixedItemStyle.js.map
