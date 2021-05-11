goog.module('org.pepstock.charba.client.intl.NumberFormatOptions.Property$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Property>}
 * @implements {Key}
 */
class Property extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_NumberFormatOptions_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_intl_NumberFormatOptions_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_NumberFormatOptions_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_NumberFormatOptions_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_NumberFormatOptions_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_intl_NumberFormatOptions_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_intl_NumberFormatOptions_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_intl_NumberFormatOptions_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_COMPACT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_CURRENCY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_CURRENCY_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_CURRENCY_SIGN__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_NOTATION__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_SIGN_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_STYLE__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_UNIT__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_UNIT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_USE_GROUPING__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_MINIMUM_INTEGER_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_MINIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_MAXIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_MINIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, Property.$static_MAXIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property], Property));
 }
 /** @return {!Property} */
 static get f_COMPACT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_COMPACT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_CURRENCY__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_CURRENCY__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_CURRENCY_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_CURRENCY_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_CURRENCY_SIGN__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_CURRENCY_SIGN__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_NOTATION__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_NOTATION__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_SIGN_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_SIGN_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_STYLE__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_STYLE__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_UNIT__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_UNIT__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_UNIT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_UNIT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_USE_GROUPING__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_USE_GROUPING__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_MINIMUM_INTEGER_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_MINIMUM_INTEGER_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_MINIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_MINIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_MAXIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_MAXIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_MINIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_MINIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_MAXIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_MAXIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_COMPACT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COMPACT_DISPLAY"), Property.$ordinal_COMPACT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "compactDisplay");
  Property.$static_CURRENCY__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CURRENCY"), Property.$ordinal_CURRENCY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "currency");
  Property.$static_CURRENCY_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CURRENCY_DISPLAY"), Property.$ordinal_CURRENCY_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "currencyDisplay");
  Property.$static_CURRENCY_SIGN__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CURRENCY_SIGN"), Property.$ordinal_CURRENCY_SIGN__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "currencySign");
  Property.$static_NOTATION__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NOTATION"), Property.$ordinal_NOTATION__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "notation");
  Property.$static_SIGN_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SIGN_DISPLAY"), Property.$ordinal_SIGN_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "signDisplay");
  Property.$static_STYLE__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STYLE"), Property.$ordinal_STYLE__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "style");
  Property.$static_UNIT__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UNIT"), Property.$ordinal_UNIT__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "unit");
  Property.$static_UNIT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UNIT_DISPLAY"), Property.$ordinal_UNIT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "unitDisplay");
  Property.$static_USE_GROUPING__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("USE_GROUPING"), Property.$ordinal_USE_GROUPING__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "useGrouping");
  Property.$static_MINIMUM_INTEGER_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MINIMUM_INTEGER_DIGITS"), Property.$ordinal_MINIMUM_INTEGER_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "minimumIntegerDigits");
  Property.$static_MINIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MINIMUM_FRACTION_DIGITS"), Property.$ordinal_MINIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "minimumFractionDigits");
  Property.$static_MAXIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAXIMUM_FRACTION_DIGITS"), Property.$ordinal_MAXIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "maximumFractionDigits");
  Property.$static_MINIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MINIMUM_SIGNIFICANT_DIGITS"), Property.$ordinal_MINIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "minimumSignificantDigits");
  Property.$static_MAXIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAXIMUM_SIGNIFICANT_DIGITS"), Property.$ordinal_MAXIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property, "maximumSignificantDigits");
  Property.f_namesToValuesMap__org_pepstock_charba_client_intl_NumberFormatOptions_Property_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Property;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Property}*/
Property.$static_COMPACT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_CURRENCY__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_CURRENCY_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_CURRENCY_SIGN__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_NOTATION__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_SIGN_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_STYLE__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_UNIT__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_UNIT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_USE_GROUPING__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_MINIMUM_INTEGER_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_MINIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_MAXIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_MINIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@private {!Property}*/
Property.$static_MAXIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_intl_NumberFormatOptions_Property_;
/**@const {number}*/
Property.$ordinal_COMPACT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 0;
/**@const {number}*/
Property.$ordinal_CURRENCY__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 1;
/**@const {number}*/
Property.$ordinal_CURRENCY_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 2;
/**@const {number}*/
Property.$ordinal_CURRENCY_SIGN__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 3;
/**@const {number}*/
Property.$ordinal_NOTATION__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 4;
/**@const {number}*/
Property.$ordinal_SIGN_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 5;
/**@const {number}*/
Property.$ordinal_STYLE__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 6;
/**@const {number}*/
Property.$ordinal_UNIT__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 7;
/**@const {number}*/
Property.$ordinal_UNIT_DISPLAY__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 8;
/**@const {number}*/
Property.$ordinal_USE_GROUPING__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 9;
/**@const {number}*/
Property.$ordinal_MINIMUM_INTEGER_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 10;
/**@const {number}*/
Property.$ordinal_MINIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 11;
/**@const {number}*/
Property.$ordinal_MAXIMUM_FRACTION_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 12;
/**@const {number}*/
Property.$ordinal_MINIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 13;
/**@const {number}*/
Property.$ordinal_MAXIMUM_SIGNIFICANT_DIGITS__org_pepstock_charba_client_intl_NumberFormatOptions_Property = 14;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.intl.NumberFormatOptions$Property");

exports = Property;

//# sourceMappingURL=NumberFormatOptions$Property.js.map
