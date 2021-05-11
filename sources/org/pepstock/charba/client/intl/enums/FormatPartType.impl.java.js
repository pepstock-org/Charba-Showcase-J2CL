goog.module('org.pepstock.charba.client.intl.enums.FormatPartType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<FormatPartType>}
 * @implements {Key}
 */
class FormatPartType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_FormatPartType_;
 }
 /** @return {!FormatPartType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new FormatPartType();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_FormatPartType__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_FormatPartType__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_FormatPartType_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_FormatPartType_;
 }
 /** @return {!FormatPartType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  FormatPartType.$clinit();
  if ($Equality.$same(FormatPartType.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_FormatPartType_, null)) {
   FormatPartType.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_FormatPartType_ = $Enums.createMapFromValues(FormatPartType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, FormatPartType.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_FormatPartType_);
 }
 /** @return {!Array<!FormatPartType>} */
 static m_values__() {
  FormatPartType.$clinit();
  return /**@type {!Array<FormatPartType>}*/ ($Arrays.$init([FormatPartType.$static_CURRENCY__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_DECIMAL__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_FRACTION__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_GROUP__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_INFINITY__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_INTEGER__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_LITERAL__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_MINUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_NAN__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_PLUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_PERCENT_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_UNIT__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_DAY__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_DAY_PERIOD__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_ERA__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_FRACTIONAL_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_HOUR__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_MINUTE__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_MONTH__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_RELATED_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_TIME_ZONE_NAME__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_WEEK_DAY__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_YEAR_NAME__org_pepstock_charba_client_intl_enums_FormatPartType, FormatPartType.$static_UNKNOWN__org_pepstock_charba_client_intl_enums_FormatPartType], FormatPartType));
 }
 /** @return {!FormatPartType} */
 static get f_CURRENCY__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_CURRENCY__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_DECIMAL__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_DECIMAL__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_FRACTION__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_FRACTION__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_GROUP__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_GROUP__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_INFINITY__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_INFINITY__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_INTEGER__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_INTEGER__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_LITERAL__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_LITERAL__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_MINUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_MINUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_NAN__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_NAN__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_PLUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_PLUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_PERCENT_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_PERCENT_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_UNIT__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_UNIT__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_DAY__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_DAY__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_DAY_PERIOD__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_DAY_PERIOD__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_ERA__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_ERA__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_FRACTIONAL_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_FRACTIONAL_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_HOUR__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_HOUR__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_MINUTE__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_MINUTE__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_MONTH__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_MONTH__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_RELATED_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_RELATED_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_TIME_ZONE_NAME__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_TIME_ZONE_NAME__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_WEEK_DAY__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_WEEK_DAY__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_YEAR_NAME__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_YEAR_NAME__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 /** @return {!FormatPartType} */
 static get f_UNKNOWN__org_pepstock_charba_client_intl_enums_FormatPartType() {
  return (FormatPartType.$clinit(), FormatPartType.$static_UNKNOWN__org_pepstock_charba_client_intl_enums_FormatPartType);
 }
 
 static $clinit() {
  FormatPartType.$clinit = () =>{};
  FormatPartType.$loadModules();
  Enum.$clinit();
  FormatPartType.$static_CURRENCY__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CURRENCY"), FormatPartType.$ordinal_CURRENCY__org_pepstock_charba_client_intl_enums_FormatPartType, "currency");
  FormatPartType.$static_DECIMAL__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DECIMAL"), FormatPartType.$ordinal_DECIMAL__org_pepstock_charba_client_intl_enums_FormatPartType, "decimal");
  FormatPartType.$static_FRACTION__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FRACTION"), FormatPartType.$ordinal_FRACTION__org_pepstock_charba_client_intl_enums_FormatPartType, "fraction");
  FormatPartType.$static_GROUP__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GROUP"), FormatPartType.$ordinal_GROUP__org_pepstock_charba_client_intl_enums_FormatPartType, "group");
  FormatPartType.$static_INFINITY__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INFINITY"), FormatPartType.$ordinal_INFINITY__org_pepstock_charba_client_intl_enums_FormatPartType, "infinity");
  FormatPartType.$static_INTEGER__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INTEGER"), FormatPartType.$ordinal_INTEGER__org_pepstock_charba_client_intl_enums_FormatPartType, "integer");
  FormatPartType.$static_LITERAL__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LITERAL"), FormatPartType.$ordinal_LITERAL__org_pepstock_charba_client_intl_enums_FormatPartType, "literal");
  FormatPartType.$static_MINUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MINUS_SIGN"), FormatPartType.$ordinal_MINUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType, "minusSign");
  FormatPartType.$static_NAN__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NAN"), FormatPartType.$ordinal_NAN__org_pepstock_charba_client_intl_enums_FormatPartType, "nan");
  FormatPartType.$static_PLUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PLUS_SIGN"), FormatPartType.$ordinal_PLUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType, "plusSign");
  FormatPartType.$static_PERCENT_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PERCENT_SIGN"), FormatPartType.$ordinal_PERCENT_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType, "percentSign");
  FormatPartType.$static_UNIT__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UNIT"), FormatPartType.$ordinal_UNIT__org_pepstock_charba_client_intl_enums_FormatPartType, "unit");
  FormatPartType.$static_DAY__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DAY"), FormatPartType.$ordinal_DAY__org_pepstock_charba_client_intl_enums_FormatPartType, "day");
  FormatPartType.$static_DAY_PERIOD__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DAY_PERIOD"), FormatPartType.$ordinal_DAY_PERIOD__org_pepstock_charba_client_intl_enums_FormatPartType, "dayPeriod");
  FormatPartType.$static_ERA__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ERA"), FormatPartType.$ordinal_ERA__org_pepstock_charba_client_intl_enums_FormatPartType, "era");
  FormatPartType.$static_FRACTIONAL_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FRACTIONAL_SECOND"), FormatPartType.$ordinal_FRACTIONAL_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType, "fractionalSecond");
  FormatPartType.$static_HOUR__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOUR"), FormatPartType.$ordinal_HOUR__org_pepstock_charba_client_intl_enums_FormatPartType, "hour");
  FormatPartType.$static_MINUTE__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MINUTE"), FormatPartType.$ordinal_MINUTE__org_pepstock_charba_client_intl_enums_FormatPartType, "minute");
  FormatPartType.$static_MONTH__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MONTH"), FormatPartType.$ordinal_MONTH__org_pepstock_charba_client_intl_enums_FormatPartType, "month");
  FormatPartType.$static_RELATED_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RELATED_YEAR"), FormatPartType.$ordinal_RELATED_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType, "relatedYear");
  FormatPartType.$static_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SECOND"), FormatPartType.$ordinal_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType, "second");
  FormatPartType.$static_TIME_ZONE_NAME__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TIME_ZONE_NAME"), FormatPartType.$ordinal_TIME_ZONE_NAME__org_pepstock_charba_client_intl_enums_FormatPartType, "timeZoneName");
  FormatPartType.$static_WEEK_DAY__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WEEK_DAY"), FormatPartType.$ordinal_WEEK_DAY__org_pepstock_charba_client_intl_enums_FormatPartType, "weekday");
  FormatPartType.$static_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YEAR"), FormatPartType.$ordinal_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType, "year");
  FormatPartType.$static_YEAR_NAME__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YEAR_NAME"), FormatPartType.$ordinal_YEAR_NAME__org_pepstock_charba_client_intl_enums_FormatPartType, "yearName");
  FormatPartType.$static_UNKNOWN__org_pepstock_charba_client_intl_enums_FormatPartType = FormatPartType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UNKNOWN"), FormatPartType.$ordinal_UNKNOWN__org_pepstock_charba_client_intl_enums_FormatPartType, "unknown");
  FormatPartType.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_FormatPartType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormatPartType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!FormatPartType}*/
FormatPartType.$static_CURRENCY__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_DECIMAL__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_FRACTION__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_GROUP__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_INFINITY__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_INTEGER__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_LITERAL__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_MINUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_NAN__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_PLUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_PERCENT_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_UNIT__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_DAY__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_DAY_PERIOD__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_ERA__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_FRACTIONAL_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_HOUR__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_MINUTE__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_MONTH__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_RELATED_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_TIME_ZONE_NAME__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_WEEK_DAY__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_YEAR_NAME__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@private {!FormatPartType}*/
FormatPartType.$static_UNKNOWN__org_pepstock_charba_client_intl_enums_FormatPartType;
/**@type {Map<?string, !FormatPartType>}*/
FormatPartType.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_FormatPartType_;
/**@const {number}*/
FormatPartType.$ordinal_CURRENCY__org_pepstock_charba_client_intl_enums_FormatPartType = 0;
/**@const {number}*/
FormatPartType.$ordinal_DECIMAL__org_pepstock_charba_client_intl_enums_FormatPartType = 1;
/**@const {number}*/
FormatPartType.$ordinal_FRACTION__org_pepstock_charba_client_intl_enums_FormatPartType = 2;
/**@const {number}*/
FormatPartType.$ordinal_GROUP__org_pepstock_charba_client_intl_enums_FormatPartType = 3;
/**@const {number}*/
FormatPartType.$ordinal_INFINITY__org_pepstock_charba_client_intl_enums_FormatPartType = 4;
/**@const {number}*/
FormatPartType.$ordinal_INTEGER__org_pepstock_charba_client_intl_enums_FormatPartType = 5;
/**@const {number}*/
FormatPartType.$ordinal_LITERAL__org_pepstock_charba_client_intl_enums_FormatPartType = 6;
/**@const {number}*/
FormatPartType.$ordinal_MINUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType = 7;
/**@const {number}*/
FormatPartType.$ordinal_NAN__org_pepstock_charba_client_intl_enums_FormatPartType = 8;
/**@const {number}*/
FormatPartType.$ordinal_PLUS_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType = 9;
/**@const {number}*/
FormatPartType.$ordinal_PERCENT_SIGN__org_pepstock_charba_client_intl_enums_FormatPartType = 10;
/**@const {number}*/
FormatPartType.$ordinal_UNIT__org_pepstock_charba_client_intl_enums_FormatPartType = 11;
/**@const {number}*/
FormatPartType.$ordinal_DAY__org_pepstock_charba_client_intl_enums_FormatPartType = 12;
/**@const {number}*/
FormatPartType.$ordinal_DAY_PERIOD__org_pepstock_charba_client_intl_enums_FormatPartType = 13;
/**@const {number}*/
FormatPartType.$ordinal_ERA__org_pepstock_charba_client_intl_enums_FormatPartType = 14;
/**@const {number}*/
FormatPartType.$ordinal_FRACTIONAL_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType = 15;
/**@const {number}*/
FormatPartType.$ordinal_HOUR__org_pepstock_charba_client_intl_enums_FormatPartType = 16;
/**@const {number}*/
FormatPartType.$ordinal_MINUTE__org_pepstock_charba_client_intl_enums_FormatPartType = 17;
/**@const {number}*/
FormatPartType.$ordinal_MONTH__org_pepstock_charba_client_intl_enums_FormatPartType = 18;
/**@const {number}*/
FormatPartType.$ordinal_RELATED_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType = 19;
/**@const {number}*/
FormatPartType.$ordinal_SECOND__org_pepstock_charba_client_intl_enums_FormatPartType = 20;
/**@const {number}*/
FormatPartType.$ordinal_TIME_ZONE_NAME__org_pepstock_charba_client_intl_enums_FormatPartType = 21;
/**@const {number}*/
FormatPartType.$ordinal_WEEK_DAY__org_pepstock_charba_client_intl_enums_FormatPartType = 22;
/**@const {number}*/
FormatPartType.$ordinal_YEAR__org_pepstock_charba_client_intl_enums_FormatPartType = 23;
/**@const {number}*/
FormatPartType.$ordinal_YEAR_NAME__org_pepstock_charba_client_intl_enums_FormatPartType = 24;
/**@const {number}*/
FormatPartType.$ordinal_UNKNOWN__org_pepstock_charba_client_intl_enums_FormatPartType = 25;
Key.$markImplementor(FormatPartType);
$Util.$setClassMetadataForEnum(FormatPartType, "org.pepstock.charba.client.intl.enums.FormatPartType");

exports = FormatPartType;

//# sourceMappingURL=FormatPartType.js.map
