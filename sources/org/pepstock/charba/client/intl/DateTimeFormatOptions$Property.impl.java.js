goog.module('org.pepstock.charba.client.intl.DateTimeFormatOptions.Property$impl');

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
  this.f_value__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_DATE_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_TIME_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_CALENDAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_DAY_PERIOD__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_TIME_ZONE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_HOUR_12__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_HOUR_CYCLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_FORMAT_MATCHER__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_WEEK_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_ERA__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_YEAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_MONTH__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_HOUR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_MINUTE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_SECOND__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, Property.$static_TIME_ZONE_NAME__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property], Property));
 }
 /** @return {!Property} */
 static get f_DATE_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_DATE_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_TIME_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_TIME_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_CALENDAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_CALENDAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_DAY_PERIOD__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_DAY_PERIOD__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_TIME_ZONE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_TIME_ZONE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_HOUR_12__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_HOUR_12__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_HOUR_CYCLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_HOUR_CYCLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_FORMAT_MATCHER__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_FORMAT_MATCHER__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_WEEK_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_WEEK_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_ERA__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_ERA__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_YEAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_YEAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_MONTH__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_MONTH__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_HOUR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_HOUR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_MINUTE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_MINUTE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_SECOND__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_SECOND__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 /** @return {!Property} */
 static get f_TIME_ZONE_NAME__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property() {
  return (Property.$clinit(), Property.$static_TIME_ZONE_NAME__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_DATE_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATE_STYLE"), Property.$ordinal_DATE_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "dateStyle");
  Property.$static_TIME_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TIME_STYLE"), Property.$ordinal_TIME_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "timeStyle");
  Property.$static_CALENDAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CALENDAR"), Property.$ordinal_CALENDAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "calendar");
  Property.$static_DAY_PERIOD__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DAY_PERIOD"), Property.$ordinal_DAY_PERIOD__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "dayPeriod");
  Property.$static_TIME_ZONE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TIME_ZONE"), Property.$ordinal_TIME_ZONE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "timeZone");
  Property.$static_HOUR_12__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOUR_12"), Property.$ordinal_HOUR_12__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "hour12");
  Property.$static_HOUR_CYCLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOUR_CYCLE"), Property.$ordinal_HOUR_CYCLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "hourCycle");
  Property.$static_FORMAT_MATCHER__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FORMAT_MATCHER"), Property.$ordinal_FORMAT_MATCHER__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "formatMatcher");
  Property.$static_WEEK_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WEEK_DAY"), Property.$ordinal_WEEK_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "weekday");
  Property.$static_ERA__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ERA"), Property.$ordinal_ERA__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "era");
  Property.$static_YEAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YEAR"), Property.$ordinal_YEAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "year");
  Property.$static_MONTH__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MONTH"), Property.$ordinal_MONTH__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "month");
  Property.$static_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DAY"), Property.$ordinal_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "day");
  Property.$static_HOUR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOUR"), Property.$ordinal_HOUR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "hour");
  Property.$static_MINUTE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MINUTE"), Property.$ordinal_MINUTE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "minute");
  Property.$static_SECOND__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SECOND"), Property.$ordinal_SECOND__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "second");
  Property.$static_TIME_ZONE_NAME__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TIME_ZONE_NAME"), Property.$ordinal_TIME_ZONE_NAME__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property, "timeZoneName");
  Property.f_namesToValuesMap__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property_ = null;
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
Property.$static_DATE_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_TIME_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_CALENDAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_DAY_PERIOD__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_TIME_ZONE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_HOUR_12__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_HOUR_CYCLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_FORMAT_MATCHER__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_WEEK_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_ERA__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_YEAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_MONTH__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_HOUR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_MINUTE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_SECOND__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@private {!Property}*/
Property.$static_TIME_ZONE_NAME__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property_;
/**@const {number}*/
Property.$ordinal_DATE_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 0;
/**@const {number}*/
Property.$ordinal_TIME_STYLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 1;
/**@const {number}*/
Property.$ordinal_CALENDAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 2;
/**@const {number}*/
Property.$ordinal_DAY_PERIOD__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 3;
/**@const {number}*/
Property.$ordinal_TIME_ZONE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 4;
/**@const {number}*/
Property.$ordinal_HOUR_12__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 5;
/**@const {number}*/
Property.$ordinal_HOUR_CYCLE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 6;
/**@const {number}*/
Property.$ordinal_FORMAT_MATCHER__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 7;
/**@const {number}*/
Property.$ordinal_WEEK_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 8;
/**@const {number}*/
Property.$ordinal_ERA__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 9;
/**@const {number}*/
Property.$ordinal_YEAR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 10;
/**@const {number}*/
Property.$ordinal_MONTH__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 11;
/**@const {number}*/
Property.$ordinal_DAY__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 12;
/**@const {number}*/
Property.$ordinal_HOUR__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 13;
/**@const {number}*/
Property.$ordinal_MINUTE__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 14;
/**@const {number}*/
Property.$ordinal_SECOND__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 15;
/**@const {number}*/
Property.$ordinal_TIME_ZONE_NAME__org_pepstock_charba_client_intl_DateTimeFormatOptions_Property = 16;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.intl.DateTimeFormatOptions$Property");

exports = Property;

//# sourceMappingURL=DateTimeFormatOptions$Property.js.map
