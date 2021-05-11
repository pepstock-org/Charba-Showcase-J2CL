goog.module('org.pepstock.charba.client.intl.enums.DateTimeStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DateTimeStyle>}
 * @implements {Key}
 */
class DateTimeStyle extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_DateTimeStyle_;
 }
 /** @return {!DateTimeStyle} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new DateTimeStyle();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_DateTimeStyle__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_DateTimeStyle__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_DateTimeStyle_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_DateTimeStyle_;
 }
 /** @return {!DateTimeStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DateTimeStyle.$clinit();
  if ($Equality.$same(DateTimeStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_DateTimeStyle_, null)) {
   DateTimeStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_DateTimeStyle_ = $Enums.createMapFromValues(DateTimeStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DateTimeStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_DateTimeStyle_);
 }
 /** @return {!Array<!DateTimeStyle>} */
 static m_values__() {
  DateTimeStyle.$clinit();
  return /**@type {!Array<DateTimeStyle>}*/ ($Arrays.$init([DateTimeStyle.$static_FULL__org_pepstock_charba_client_intl_enums_DateTimeStyle, DateTimeStyle.$static_LONG__org_pepstock_charba_client_intl_enums_DateTimeStyle, DateTimeStyle.$static_MEDIUM__org_pepstock_charba_client_intl_enums_DateTimeStyle, DateTimeStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_DateTimeStyle], DateTimeStyle));
 }
 /** @return {!DateTimeStyle} */
 static get f_FULL__org_pepstock_charba_client_intl_enums_DateTimeStyle() {
  return (DateTimeStyle.$clinit(), DateTimeStyle.$static_FULL__org_pepstock_charba_client_intl_enums_DateTimeStyle);
 }
 /** @return {!DateTimeStyle} */
 static get f_LONG__org_pepstock_charba_client_intl_enums_DateTimeStyle() {
  return (DateTimeStyle.$clinit(), DateTimeStyle.$static_LONG__org_pepstock_charba_client_intl_enums_DateTimeStyle);
 }
 /** @return {!DateTimeStyle} */
 static get f_MEDIUM__org_pepstock_charba_client_intl_enums_DateTimeStyle() {
  return (DateTimeStyle.$clinit(), DateTimeStyle.$static_MEDIUM__org_pepstock_charba_client_intl_enums_DateTimeStyle);
 }
 /** @return {!DateTimeStyle} */
 static get f_SHORT__org_pepstock_charba_client_intl_enums_DateTimeStyle() {
  return (DateTimeStyle.$clinit(), DateTimeStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_DateTimeStyle);
 }
 
 static $clinit() {
  DateTimeStyle.$clinit = () =>{};
  DateTimeStyle.$loadModules();
  Enum.$clinit();
  DateTimeStyle.$static_FULL__org_pepstock_charba_client_intl_enums_DateTimeStyle = DateTimeStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FULL"), DateTimeStyle.$ordinal_FULL__org_pepstock_charba_client_intl_enums_DateTimeStyle, "short");
  DateTimeStyle.$static_LONG__org_pepstock_charba_client_intl_enums_DateTimeStyle = DateTimeStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LONG"), DateTimeStyle.$ordinal_LONG__org_pepstock_charba_client_intl_enums_DateTimeStyle, "long");
  DateTimeStyle.$static_MEDIUM__org_pepstock_charba_client_intl_enums_DateTimeStyle = DateTimeStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEDIUM"), DateTimeStyle.$ordinal_MEDIUM__org_pepstock_charba_client_intl_enums_DateTimeStyle, "medium");
  DateTimeStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_DateTimeStyle = DateTimeStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHORT"), DateTimeStyle.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_DateTimeStyle, "short");
  DateTimeStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_DateTimeStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DateTimeStyle}*/
DateTimeStyle.$static_FULL__org_pepstock_charba_client_intl_enums_DateTimeStyle;
/**@private {!DateTimeStyle}*/
DateTimeStyle.$static_LONG__org_pepstock_charba_client_intl_enums_DateTimeStyle;
/**@private {!DateTimeStyle}*/
DateTimeStyle.$static_MEDIUM__org_pepstock_charba_client_intl_enums_DateTimeStyle;
/**@private {!DateTimeStyle}*/
DateTimeStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_DateTimeStyle;
/**@type {Map<?string, !DateTimeStyle>}*/
DateTimeStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_DateTimeStyle_;
/**@const {number}*/
DateTimeStyle.$ordinal_FULL__org_pepstock_charba_client_intl_enums_DateTimeStyle = 0;
/**@const {number}*/
DateTimeStyle.$ordinal_LONG__org_pepstock_charba_client_intl_enums_DateTimeStyle = 1;
/**@const {number}*/
DateTimeStyle.$ordinal_MEDIUM__org_pepstock_charba_client_intl_enums_DateTimeStyle = 2;
/**@const {number}*/
DateTimeStyle.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_DateTimeStyle = 3;
Key.$markImplementor(DateTimeStyle);
$Util.$setClassMetadataForEnum(DateTimeStyle, "org.pepstock.charba.client.intl.enums.DateTimeStyle");

exports = DateTimeStyle;

//# sourceMappingURL=DateTimeStyle.js.map
