goog.module('org.pepstock.charba.client.intl.enums.MeasureUnit$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<MeasureUnit>}
 * @implements {Key}
 */
class MeasureUnit extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_MeasureUnit_;
 }
 /** @return {!MeasureUnit} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new MeasureUnit();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_MeasureUnit__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_MeasureUnit__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_MeasureUnit_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_MeasureUnit_;
 }
 /** @return {!MeasureUnit} */
 static m_valueOf__java_lang_String(/** string */ name) {
  MeasureUnit.$clinit();
  if ($Equality.$same(MeasureUnit.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MeasureUnit_, null)) {
   MeasureUnit.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MeasureUnit_ = $Enums.createMapFromValues(MeasureUnit.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, MeasureUnit.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MeasureUnit_);
 }
 /** @return {!Array<!MeasureUnit>} */
 static m_values__() {
  MeasureUnit.$clinit();
  return /**@type {!Array<MeasureUnit>}*/ ($Arrays.$init([MeasureUnit.$static_ACRE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_BIT__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_BYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_CELSIUS__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_CENTIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_DAY__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_DEGREE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_FAHRENHEIT__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_FLUID_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_FOOT__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_GALLON__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_GIGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_GIGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_GRAM__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_HECTARE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_HOUR__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_INCH__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_KILOBIT__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_KILOBYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_KILOGRAM__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_KILOMETER__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_LITER__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_MEGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_MEGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_METER__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_MILE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_MILE_SCANDINAVIAN__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_MILLILITER__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_MILLIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_MILLISECOND__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_MINUTE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_MONTH__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_PERCENT__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_PETABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_POUND__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_SECOND__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_STONE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_TERABIT__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_TERABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_WEEK__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_YARD__org_pepstock_charba_client_intl_enums_MeasureUnit, MeasureUnit.$static_YEAR__org_pepstock_charba_client_intl_enums_MeasureUnit], MeasureUnit));
 }
 /** @return {!MeasureUnit} */
 static get f_ACRE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_ACRE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_BIT__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_BIT__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_BYTE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_BYTE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_CELSIUS__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_CELSIUS__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_CENTIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_CENTIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_DAY__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_DAY__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_DEGREE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_DEGREE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_FAHRENHEIT__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_FAHRENHEIT__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_FLUID_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_FLUID_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_FOOT__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_FOOT__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_GALLON__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_GALLON__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_GIGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_GIGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_GIGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_GIGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_GRAM__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_GRAM__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_HECTARE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_HECTARE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_HOUR__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_HOUR__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_INCH__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_INCH__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_KILOBIT__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_KILOBIT__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_KILOBYTE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_KILOBYTE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_KILOGRAM__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_KILOGRAM__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_KILOMETER__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_KILOMETER__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_LITER__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_LITER__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_MEGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_MEGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_MEGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_MEGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_METER__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_METER__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_MILE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_MILE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_MILE_SCANDINAVIAN__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_MILE_SCANDINAVIAN__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_MILLILITER__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_MILLILITER__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_MILLIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_MILLIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_MILLISECOND__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_MILLISECOND__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_MINUTE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_MINUTE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_MONTH__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_MONTH__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_PERCENT__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_PERCENT__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_PETABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_PETABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_POUND__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_POUND__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_SECOND__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_SECOND__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_STONE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_STONE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_TERABIT__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_TERABIT__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_TERABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_TERABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_WEEK__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_WEEK__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_YARD__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_YARD__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 /** @return {!MeasureUnit} */
 static get f_YEAR__org_pepstock_charba_client_intl_enums_MeasureUnit() {
  return (MeasureUnit.$clinit(), MeasureUnit.$static_YEAR__org_pepstock_charba_client_intl_enums_MeasureUnit);
 }
 
 static $clinit() {
  MeasureUnit.$clinit = () =>{};
  MeasureUnit.$loadModules();
  Enum.$clinit();
  MeasureUnit.$static_ACRE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ACRE"), MeasureUnit.$ordinal_ACRE__org_pepstock_charba_client_intl_enums_MeasureUnit, "acre");
  MeasureUnit.$static_BIT__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BIT"), MeasureUnit.$ordinal_BIT__org_pepstock_charba_client_intl_enums_MeasureUnit, "bit");
  MeasureUnit.$static_BYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BYTE"), MeasureUnit.$ordinal_BYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, "byte");
  MeasureUnit.$static_CELSIUS__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CELSIUS"), MeasureUnit.$ordinal_CELSIUS__org_pepstock_charba_client_intl_enums_MeasureUnit, "celsius");
  MeasureUnit.$static_CENTIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CENTIMETER"), MeasureUnit.$ordinal_CENTIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit, "centimeter");
  MeasureUnit.$static_DAY__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DAY"), MeasureUnit.$ordinal_DAY__org_pepstock_charba_client_intl_enums_MeasureUnit, "day");
  MeasureUnit.$static_DEGREE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DEGREE"), MeasureUnit.$ordinal_DEGREE__org_pepstock_charba_client_intl_enums_MeasureUnit, "degree");
  MeasureUnit.$static_FAHRENHEIT__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FAHRENHEIT"), MeasureUnit.$ordinal_FAHRENHEIT__org_pepstock_charba_client_intl_enums_MeasureUnit, "fahrenheit");
  MeasureUnit.$static_FLUID_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FLUID_OUNCE"), MeasureUnit.$ordinal_FLUID_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit, "fluid-ounce");
  MeasureUnit.$static_FOOT__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FOOT"), MeasureUnit.$ordinal_FOOT__org_pepstock_charba_client_intl_enums_MeasureUnit, "foot");
  MeasureUnit.$static_GALLON__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GALLON"), MeasureUnit.$ordinal_GALLON__org_pepstock_charba_client_intl_enums_MeasureUnit, "gallon");
  MeasureUnit.$static_GIGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GIGABIT"), MeasureUnit.$ordinal_GIGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit, "gigabit");
  MeasureUnit.$static_GIGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GIGABYTE"), MeasureUnit.$ordinal_GIGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, "gigabyte");
  MeasureUnit.$static_GRAM__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GRAM"), MeasureUnit.$ordinal_GRAM__org_pepstock_charba_client_intl_enums_MeasureUnit, "gram");
  MeasureUnit.$static_HECTARE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HECTARE"), MeasureUnit.$ordinal_HECTARE__org_pepstock_charba_client_intl_enums_MeasureUnit, "hectare");
  MeasureUnit.$static_HOUR__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOUR"), MeasureUnit.$ordinal_HOUR__org_pepstock_charba_client_intl_enums_MeasureUnit, "hour");
  MeasureUnit.$static_INCH__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INCH"), MeasureUnit.$ordinal_INCH__org_pepstock_charba_client_intl_enums_MeasureUnit, "inch");
  MeasureUnit.$static_KILOBIT__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("KILOBIT"), MeasureUnit.$ordinal_KILOBIT__org_pepstock_charba_client_intl_enums_MeasureUnit, "kilobit");
  MeasureUnit.$static_KILOBYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("KILOBYTE"), MeasureUnit.$ordinal_KILOBYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, "kilobyte");
  MeasureUnit.$static_KILOGRAM__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("KILOGRAM"), MeasureUnit.$ordinal_KILOGRAM__org_pepstock_charba_client_intl_enums_MeasureUnit, "kilogram");
  MeasureUnit.$static_KILOMETER__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("KILOMETER"), MeasureUnit.$ordinal_KILOMETER__org_pepstock_charba_client_intl_enums_MeasureUnit, "kilometer");
  MeasureUnit.$static_LITER__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LITER"), MeasureUnit.$ordinal_LITER__org_pepstock_charba_client_intl_enums_MeasureUnit, "liter");
  MeasureUnit.$static_MEGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEGABIT"), MeasureUnit.$ordinal_MEGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit, "megabit");
  MeasureUnit.$static_MEGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEGABYTE"), MeasureUnit.$ordinal_MEGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, "megabyte");
  MeasureUnit.$static_METER__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("METER"), MeasureUnit.$ordinal_METER__org_pepstock_charba_client_intl_enums_MeasureUnit, "meter");
  MeasureUnit.$static_MILE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MILE"), MeasureUnit.$ordinal_MILE__org_pepstock_charba_client_intl_enums_MeasureUnit, "mile");
  MeasureUnit.$static_MILE_SCANDINAVIAN__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MILE_SCANDINAVIAN"), MeasureUnit.$ordinal_MILE_SCANDINAVIAN__org_pepstock_charba_client_intl_enums_MeasureUnit, "mile-scandinavian");
  MeasureUnit.$static_MILLILITER__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MILLILITER"), MeasureUnit.$ordinal_MILLILITER__org_pepstock_charba_client_intl_enums_MeasureUnit, "milliliter");
  MeasureUnit.$static_MILLIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MILLIMETER"), MeasureUnit.$ordinal_MILLIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit, "millimeter");
  MeasureUnit.$static_MILLISECOND__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MILLISECOND"), MeasureUnit.$ordinal_MILLISECOND__org_pepstock_charba_client_intl_enums_MeasureUnit, "millisecond");
  MeasureUnit.$static_MINUTE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MINUTE"), MeasureUnit.$ordinal_MINUTE__org_pepstock_charba_client_intl_enums_MeasureUnit, "minute");
  MeasureUnit.$static_MONTH__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MONTH"), MeasureUnit.$ordinal_MONTH__org_pepstock_charba_client_intl_enums_MeasureUnit, "month");
  MeasureUnit.$static_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OUNCE"), MeasureUnit.$ordinal_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit, "ounce");
  MeasureUnit.$static_PERCENT__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PERCENT"), MeasureUnit.$ordinal_PERCENT__org_pepstock_charba_client_intl_enums_MeasureUnit, "percent");
  MeasureUnit.$static_PETABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PETABYTE"), MeasureUnit.$ordinal_PETABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, "petabyte");
  MeasureUnit.$static_POUND__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POUND"), MeasureUnit.$ordinal_POUND__org_pepstock_charba_client_intl_enums_MeasureUnit, "pound");
  MeasureUnit.$static_SECOND__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SECOND"), MeasureUnit.$ordinal_SECOND__org_pepstock_charba_client_intl_enums_MeasureUnit, "second");
  MeasureUnit.$static_STONE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STONE"), MeasureUnit.$ordinal_STONE__org_pepstock_charba_client_intl_enums_MeasureUnit, "stone");
  MeasureUnit.$static_TERABIT__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TERABIT"), MeasureUnit.$ordinal_TERABIT__org_pepstock_charba_client_intl_enums_MeasureUnit, "terabit");
  MeasureUnit.$static_TERABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TERABYTE"), MeasureUnit.$ordinal_TERABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit, "terabyte");
  MeasureUnit.$static_WEEK__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WEEK"), MeasureUnit.$ordinal_WEEK__org_pepstock_charba_client_intl_enums_MeasureUnit, "week");
  MeasureUnit.$static_YARD__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YARD"), MeasureUnit.$ordinal_YARD__org_pepstock_charba_client_intl_enums_MeasureUnit, "yard");
  MeasureUnit.$static_YEAR__org_pepstock_charba_client_intl_enums_MeasureUnit = MeasureUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YEAR"), MeasureUnit.$ordinal_YEAR__org_pepstock_charba_client_intl_enums_MeasureUnit, "year");
  MeasureUnit.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MeasureUnit_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MeasureUnit;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!MeasureUnit}*/
MeasureUnit.$static_ACRE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_BIT__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_BYTE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_CELSIUS__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_CENTIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_DAY__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_DEGREE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_FAHRENHEIT__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_FLUID_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_FOOT__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_GALLON__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_GIGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_GIGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_GRAM__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_HECTARE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_HOUR__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_INCH__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_KILOBIT__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_KILOBYTE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_KILOGRAM__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_KILOMETER__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_LITER__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_MEGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_MEGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_METER__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_MILE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_MILE_SCANDINAVIAN__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_MILLILITER__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_MILLIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_MILLISECOND__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_MINUTE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_MONTH__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_PERCENT__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_PETABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_POUND__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_SECOND__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_STONE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_TERABIT__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_TERABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_WEEK__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_YARD__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@private {!MeasureUnit}*/
MeasureUnit.$static_YEAR__org_pepstock_charba_client_intl_enums_MeasureUnit;
/**@type {Map<?string, !MeasureUnit>}*/
MeasureUnit.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_MeasureUnit_;
/**@const {number}*/
MeasureUnit.$ordinal_ACRE__org_pepstock_charba_client_intl_enums_MeasureUnit = 0;
/**@const {number}*/
MeasureUnit.$ordinal_BIT__org_pepstock_charba_client_intl_enums_MeasureUnit = 1;
/**@const {number}*/
MeasureUnit.$ordinal_BYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = 2;
/**@const {number}*/
MeasureUnit.$ordinal_CELSIUS__org_pepstock_charba_client_intl_enums_MeasureUnit = 3;
/**@const {number}*/
MeasureUnit.$ordinal_CENTIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit = 4;
/**@const {number}*/
MeasureUnit.$ordinal_DAY__org_pepstock_charba_client_intl_enums_MeasureUnit = 5;
/**@const {number}*/
MeasureUnit.$ordinal_DEGREE__org_pepstock_charba_client_intl_enums_MeasureUnit = 6;
/**@const {number}*/
MeasureUnit.$ordinal_FAHRENHEIT__org_pepstock_charba_client_intl_enums_MeasureUnit = 7;
/**@const {number}*/
MeasureUnit.$ordinal_FLUID_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit = 8;
/**@const {number}*/
MeasureUnit.$ordinal_FOOT__org_pepstock_charba_client_intl_enums_MeasureUnit = 9;
/**@const {number}*/
MeasureUnit.$ordinal_GALLON__org_pepstock_charba_client_intl_enums_MeasureUnit = 10;
/**@const {number}*/
MeasureUnit.$ordinal_GIGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit = 11;
/**@const {number}*/
MeasureUnit.$ordinal_GIGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = 12;
/**@const {number}*/
MeasureUnit.$ordinal_GRAM__org_pepstock_charba_client_intl_enums_MeasureUnit = 13;
/**@const {number}*/
MeasureUnit.$ordinal_HECTARE__org_pepstock_charba_client_intl_enums_MeasureUnit = 14;
/**@const {number}*/
MeasureUnit.$ordinal_HOUR__org_pepstock_charba_client_intl_enums_MeasureUnit = 15;
/**@const {number}*/
MeasureUnit.$ordinal_INCH__org_pepstock_charba_client_intl_enums_MeasureUnit = 16;
/**@const {number}*/
MeasureUnit.$ordinal_KILOBIT__org_pepstock_charba_client_intl_enums_MeasureUnit = 17;
/**@const {number}*/
MeasureUnit.$ordinal_KILOBYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = 18;
/**@const {number}*/
MeasureUnit.$ordinal_KILOGRAM__org_pepstock_charba_client_intl_enums_MeasureUnit = 19;
/**@const {number}*/
MeasureUnit.$ordinal_KILOMETER__org_pepstock_charba_client_intl_enums_MeasureUnit = 20;
/**@const {number}*/
MeasureUnit.$ordinal_LITER__org_pepstock_charba_client_intl_enums_MeasureUnit = 21;
/**@const {number}*/
MeasureUnit.$ordinal_MEGABIT__org_pepstock_charba_client_intl_enums_MeasureUnit = 22;
/**@const {number}*/
MeasureUnit.$ordinal_MEGABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = 23;
/**@const {number}*/
MeasureUnit.$ordinal_METER__org_pepstock_charba_client_intl_enums_MeasureUnit = 24;
/**@const {number}*/
MeasureUnit.$ordinal_MILE__org_pepstock_charba_client_intl_enums_MeasureUnit = 25;
/**@const {number}*/
MeasureUnit.$ordinal_MILE_SCANDINAVIAN__org_pepstock_charba_client_intl_enums_MeasureUnit = 26;
/**@const {number}*/
MeasureUnit.$ordinal_MILLILITER__org_pepstock_charba_client_intl_enums_MeasureUnit = 27;
/**@const {number}*/
MeasureUnit.$ordinal_MILLIMETER__org_pepstock_charba_client_intl_enums_MeasureUnit = 28;
/**@const {number}*/
MeasureUnit.$ordinal_MILLISECOND__org_pepstock_charba_client_intl_enums_MeasureUnit = 29;
/**@const {number}*/
MeasureUnit.$ordinal_MINUTE__org_pepstock_charba_client_intl_enums_MeasureUnit = 30;
/**@const {number}*/
MeasureUnit.$ordinal_MONTH__org_pepstock_charba_client_intl_enums_MeasureUnit = 31;
/**@const {number}*/
MeasureUnit.$ordinal_OUNCE__org_pepstock_charba_client_intl_enums_MeasureUnit = 32;
/**@const {number}*/
MeasureUnit.$ordinal_PERCENT__org_pepstock_charba_client_intl_enums_MeasureUnit = 33;
/**@const {number}*/
MeasureUnit.$ordinal_PETABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = 34;
/**@const {number}*/
MeasureUnit.$ordinal_POUND__org_pepstock_charba_client_intl_enums_MeasureUnit = 35;
/**@const {number}*/
MeasureUnit.$ordinal_SECOND__org_pepstock_charba_client_intl_enums_MeasureUnit = 36;
/**@const {number}*/
MeasureUnit.$ordinal_STONE__org_pepstock_charba_client_intl_enums_MeasureUnit = 37;
/**@const {number}*/
MeasureUnit.$ordinal_TERABIT__org_pepstock_charba_client_intl_enums_MeasureUnit = 38;
/**@const {number}*/
MeasureUnit.$ordinal_TERABYTE__org_pepstock_charba_client_intl_enums_MeasureUnit = 39;
/**@const {number}*/
MeasureUnit.$ordinal_WEEK__org_pepstock_charba_client_intl_enums_MeasureUnit = 40;
/**@const {number}*/
MeasureUnit.$ordinal_YARD__org_pepstock_charba_client_intl_enums_MeasureUnit = 41;
/**@const {number}*/
MeasureUnit.$ordinal_YEAR__org_pepstock_charba_client_intl_enums_MeasureUnit = 42;
Key.$markImplementor(MeasureUnit);
$Util.$setClassMetadataForEnum(MeasureUnit, "org.pepstock.charba.client.intl.enums.MeasureUnit");

exports = MeasureUnit;

//# sourceMappingURL=MeasureUnit.js.map
