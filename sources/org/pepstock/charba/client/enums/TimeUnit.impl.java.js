goog.module('org.pepstock.charba.client.enums.TimeUnit$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TimeUnit>}
 * @implements {Key}
 */
class TimeUnit extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_TimeUnit_;
 }
 /** @return {!TimeUnit} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TimeUnit();
  $instance.$ctor__org_pepstock_charba_client_enums_TimeUnit__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_TimeUnit__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_TimeUnit_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_TimeUnit_;
 }
 /** @return {!TimeUnit} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TimeUnit.$clinit();
  if ($Equality.$same(TimeUnit.f_namesToValuesMap__org_pepstock_charba_client_enums_TimeUnit_, null)) {
   TimeUnit.f_namesToValuesMap__org_pepstock_charba_client_enums_TimeUnit_ = $Enums.createMapFromValues(TimeUnit.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TimeUnit.f_namesToValuesMap__org_pepstock_charba_client_enums_TimeUnit_);
 }
 /** @return {!Array<!TimeUnit>} */
 static m_values__() {
  TimeUnit.$clinit();
  return /**@type {!Array<TimeUnit>}*/ ($Arrays.$init([TimeUnit.$static_MILLISECOND__org_pepstock_charba_client_enums_TimeUnit, TimeUnit.$static_SECOND__org_pepstock_charba_client_enums_TimeUnit, TimeUnit.$static_MINUTE__org_pepstock_charba_client_enums_TimeUnit, TimeUnit.$static_HOUR__org_pepstock_charba_client_enums_TimeUnit, TimeUnit.$static_DAY__org_pepstock_charba_client_enums_TimeUnit, TimeUnit.$static_WEEK__org_pepstock_charba_client_enums_TimeUnit, TimeUnit.$static_MONTH__org_pepstock_charba_client_enums_TimeUnit, TimeUnit.$static_QUARTER__org_pepstock_charba_client_enums_TimeUnit, TimeUnit.$static_YEAR__org_pepstock_charba_client_enums_TimeUnit], TimeUnit));
 }
 /** @return {!TimeUnit} */
 static get f_MILLISECOND__org_pepstock_charba_client_enums_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_MILLISECOND__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {!TimeUnit} */
 static get f_SECOND__org_pepstock_charba_client_enums_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_SECOND__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {!TimeUnit} */
 static get f_MINUTE__org_pepstock_charba_client_enums_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_MINUTE__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {!TimeUnit} */
 static get f_HOUR__org_pepstock_charba_client_enums_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_HOUR__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {!TimeUnit} */
 static get f_DAY__org_pepstock_charba_client_enums_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_DAY__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {!TimeUnit} */
 static get f_WEEK__org_pepstock_charba_client_enums_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_WEEK__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {!TimeUnit} */
 static get f_MONTH__org_pepstock_charba_client_enums_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_MONTH__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {!TimeUnit} */
 static get f_QUARTER__org_pepstock_charba_client_enums_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_QUARTER__org_pepstock_charba_client_enums_TimeUnit);
 }
 /** @return {!TimeUnit} */
 static get f_YEAR__org_pepstock_charba_client_enums_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_YEAR__org_pepstock_charba_client_enums_TimeUnit);
 }
 
 static $clinit() {
  TimeUnit.$clinit = () =>{};
  TimeUnit.$loadModules();
  Enum.$clinit();
  TimeUnit.$static_MILLISECOND__org_pepstock_charba_client_enums_TimeUnit = TimeUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MILLISECOND"), TimeUnit.$ordinal_MILLISECOND__org_pepstock_charba_client_enums_TimeUnit, "millisecond");
  TimeUnit.$static_SECOND__org_pepstock_charba_client_enums_TimeUnit = TimeUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SECOND"), TimeUnit.$ordinal_SECOND__org_pepstock_charba_client_enums_TimeUnit, "second");
  TimeUnit.$static_MINUTE__org_pepstock_charba_client_enums_TimeUnit = TimeUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MINUTE"), TimeUnit.$ordinal_MINUTE__org_pepstock_charba_client_enums_TimeUnit, "minute");
  TimeUnit.$static_HOUR__org_pepstock_charba_client_enums_TimeUnit = TimeUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOUR"), TimeUnit.$ordinal_HOUR__org_pepstock_charba_client_enums_TimeUnit, "hour");
  TimeUnit.$static_DAY__org_pepstock_charba_client_enums_TimeUnit = TimeUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DAY"), TimeUnit.$ordinal_DAY__org_pepstock_charba_client_enums_TimeUnit, "day");
  TimeUnit.$static_WEEK__org_pepstock_charba_client_enums_TimeUnit = TimeUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WEEK"), TimeUnit.$ordinal_WEEK__org_pepstock_charba_client_enums_TimeUnit, "week");
  TimeUnit.$static_MONTH__org_pepstock_charba_client_enums_TimeUnit = TimeUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MONTH"), TimeUnit.$ordinal_MONTH__org_pepstock_charba_client_enums_TimeUnit, "month");
  TimeUnit.$static_QUARTER__org_pepstock_charba_client_enums_TimeUnit = TimeUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("QUARTER"), TimeUnit.$ordinal_QUARTER__org_pepstock_charba_client_enums_TimeUnit, "quarter");
  TimeUnit.$static_YEAR__org_pepstock_charba_client_enums_TimeUnit = TimeUnit.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YEAR"), TimeUnit.$ordinal_YEAR__org_pepstock_charba_client_enums_TimeUnit, "year");
  TimeUnit.f_namesToValuesMap__org_pepstock_charba_client_enums_TimeUnit_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeUnit;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TimeUnit}*/
TimeUnit.$static_MILLISECOND__org_pepstock_charba_client_enums_TimeUnit;
/**@private {!TimeUnit}*/
TimeUnit.$static_SECOND__org_pepstock_charba_client_enums_TimeUnit;
/**@private {!TimeUnit}*/
TimeUnit.$static_MINUTE__org_pepstock_charba_client_enums_TimeUnit;
/**@private {!TimeUnit}*/
TimeUnit.$static_HOUR__org_pepstock_charba_client_enums_TimeUnit;
/**@private {!TimeUnit}*/
TimeUnit.$static_DAY__org_pepstock_charba_client_enums_TimeUnit;
/**@private {!TimeUnit}*/
TimeUnit.$static_WEEK__org_pepstock_charba_client_enums_TimeUnit;
/**@private {!TimeUnit}*/
TimeUnit.$static_MONTH__org_pepstock_charba_client_enums_TimeUnit;
/**@private {!TimeUnit}*/
TimeUnit.$static_QUARTER__org_pepstock_charba_client_enums_TimeUnit;
/**@private {!TimeUnit}*/
TimeUnit.$static_YEAR__org_pepstock_charba_client_enums_TimeUnit;
/**@type {Map<?string, !TimeUnit>}*/
TimeUnit.f_namesToValuesMap__org_pepstock_charba_client_enums_TimeUnit_;
/**@const {number}*/
TimeUnit.$ordinal_MILLISECOND__org_pepstock_charba_client_enums_TimeUnit = 0;
/**@const {number}*/
TimeUnit.$ordinal_SECOND__org_pepstock_charba_client_enums_TimeUnit = 1;
/**@const {number}*/
TimeUnit.$ordinal_MINUTE__org_pepstock_charba_client_enums_TimeUnit = 2;
/**@const {number}*/
TimeUnit.$ordinal_HOUR__org_pepstock_charba_client_enums_TimeUnit = 3;
/**@const {number}*/
TimeUnit.$ordinal_DAY__org_pepstock_charba_client_enums_TimeUnit = 4;
/**@const {number}*/
TimeUnit.$ordinal_WEEK__org_pepstock_charba_client_enums_TimeUnit = 5;
/**@const {number}*/
TimeUnit.$ordinal_MONTH__org_pepstock_charba_client_enums_TimeUnit = 6;
/**@const {number}*/
TimeUnit.$ordinal_QUARTER__org_pepstock_charba_client_enums_TimeUnit = 7;
/**@const {number}*/
TimeUnit.$ordinal_YEAR__org_pepstock_charba_client_enums_TimeUnit = 8;
Key.$markImplementor(TimeUnit);
$Util.$setClassMetadataForEnum(TimeUnit, "org.pepstock.charba.client.enums.TimeUnit");

exports = TimeUnit;

//# sourceMappingURL=TimeUnit.js.map
