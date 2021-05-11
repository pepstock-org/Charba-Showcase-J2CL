goog.module('org.pepstock.charba.client.intl.enums.Calendar$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Calendar>}
 * @implements {Key}
 */
class Calendar extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_Calendar_;
 }
 /** @return {!Calendar} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Calendar();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_Calendar__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_Calendar__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_Calendar_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_Calendar_;
 }
 /** @return {!Calendar} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Calendar.$clinit();
  if ($Equality.$same(Calendar.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Calendar_, null)) {
   Calendar.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Calendar_ = $Enums.createMapFromValues(Calendar.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Calendar.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Calendar_);
 }
 /** @return {!Array<!Calendar>} */
 static m_values__() {
  Calendar.$clinit();
  return /**@type {!Array<Calendar>}*/ ($Arrays.$init([Calendar.$static_BUDDHIST__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_CHINESE__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_COPTIC__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_ETHIOPIA__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_ETHIOPIC__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_GREGORY__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_HEBREW__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_INDIAN__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_ISLAMIC__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_ISO8601__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_JAPANESE__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_PERSIAN__org_pepstock_charba_client_intl_enums_Calendar, Calendar.$static_ROC__org_pepstock_charba_client_intl_enums_Calendar], Calendar));
 }
 /** @return {!Calendar} */
 static get f_BUDDHIST__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_BUDDHIST__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_CHINESE__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_CHINESE__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_COPTIC__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_COPTIC__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_ETHIOPIA__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_ETHIOPIA__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_ETHIOPIC__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_ETHIOPIC__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_GREGORY__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_GREGORY__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_HEBREW__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_HEBREW__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_INDIAN__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_INDIAN__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_ISLAMIC__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_ISLAMIC__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_ISO8601__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_ISO8601__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_JAPANESE__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_JAPANESE__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_PERSIAN__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_PERSIAN__org_pepstock_charba_client_intl_enums_Calendar);
 }
 /** @return {!Calendar} */
 static get f_ROC__org_pepstock_charba_client_intl_enums_Calendar() {
  return (Calendar.$clinit(), Calendar.$static_ROC__org_pepstock_charba_client_intl_enums_Calendar);
 }
 
 static $clinit() {
  Calendar.$clinit = () =>{};
  Calendar.$loadModules();
  Enum.$clinit();
  Calendar.$static_BUDDHIST__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BUDDHIST"), Calendar.$ordinal_BUDDHIST__org_pepstock_charba_client_intl_enums_Calendar, "buddhist");
  Calendar.$static_CHINESE__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHINESE"), Calendar.$ordinal_CHINESE__org_pepstock_charba_client_intl_enums_Calendar, "chinese");
  Calendar.$static_COPTIC__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COPTIC"), Calendar.$ordinal_COPTIC__org_pepstock_charba_client_intl_enums_Calendar, "coptic");
  Calendar.$static_ETHIOPIA__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ETHIOPIA"), Calendar.$ordinal_ETHIOPIA__org_pepstock_charba_client_intl_enums_Calendar, "ethiopia");
  Calendar.$static_ETHIOPIC__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ETHIOPIC"), Calendar.$ordinal_ETHIOPIC__org_pepstock_charba_client_intl_enums_Calendar, "ethiopic");
  Calendar.$static_GREGORY__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GREGORY"), Calendar.$ordinal_GREGORY__org_pepstock_charba_client_intl_enums_Calendar, "gregory");
  Calendar.$static_HEBREW__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HEBREW"), Calendar.$ordinal_HEBREW__org_pepstock_charba_client_intl_enums_Calendar, "hebrew");
  Calendar.$static_INDIAN__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INDIAN"), Calendar.$ordinal_INDIAN__org_pepstock_charba_client_intl_enums_Calendar, "indian");
  Calendar.$static_ISLAMIC__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ISLAMIC"), Calendar.$ordinal_ISLAMIC__org_pepstock_charba_client_intl_enums_Calendar, "islamic");
  Calendar.$static_ISO8601__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ISO8601"), Calendar.$ordinal_ISO8601__org_pepstock_charba_client_intl_enums_Calendar, "iso8601");
  Calendar.$static_JAPANESE__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("JAPANESE"), Calendar.$ordinal_JAPANESE__org_pepstock_charba_client_intl_enums_Calendar, "japanese");
  Calendar.$static_PERSIAN__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PERSIAN"), Calendar.$ordinal_PERSIAN__org_pepstock_charba_client_intl_enums_Calendar, "persian");
  Calendar.$static_ROC__org_pepstock_charba_client_intl_enums_Calendar = Calendar.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROC"), Calendar.$ordinal_ROC__org_pepstock_charba_client_intl_enums_Calendar, "roc");
  Calendar.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Calendar_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Calendar;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Calendar}*/
Calendar.$static_BUDDHIST__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_CHINESE__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_COPTIC__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_ETHIOPIA__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_ETHIOPIC__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_GREGORY__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_HEBREW__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_INDIAN__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_ISLAMIC__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_ISO8601__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_JAPANESE__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_PERSIAN__org_pepstock_charba_client_intl_enums_Calendar;
/**@private {!Calendar}*/
Calendar.$static_ROC__org_pepstock_charba_client_intl_enums_Calendar;
/**@type {Map<?string, !Calendar>}*/
Calendar.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Calendar_;
/**@const {number}*/
Calendar.$ordinal_BUDDHIST__org_pepstock_charba_client_intl_enums_Calendar = 0;
/**@const {number}*/
Calendar.$ordinal_CHINESE__org_pepstock_charba_client_intl_enums_Calendar = 1;
/**@const {number}*/
Calendar.$ordinal_COPTIC__org_pepstock_charba_client_intl_enums_Calendar = 2;
/**@const {number}*/
Calendar.$ordinal_ETHIOPIA__org_pepstock_charba_client_intl_enums_Calendar = 3;
/**@const {number}*/
Calendar.$ordinal_ETHIOPIC__org_pepstock_charba_client_intl_enums_Calendar = 4;
/**@const {number}*/
Calendar.$ordinal_GREGORY__org_pepstock_charba_client_intl_enums_Calendar = 5;
/**@const {number}*/
Calendar.$ordinal_HEBREW__org_pepstock_charba_client_intl_enums_Calendar = 6;
/**@const {number}*/
Calendar.$ordinal_INDIAN__org_pepstock_charba_client_intl_enums_Calendar = 7;
/**@const {number}*/
Calendar.$ordinal_ISLAMIC__org_pepstock_charba_client_intl_enums_Calendar = 8;
/**@const {number}*/
Calendar.$ordinal_ISO8601__org_pepstock_charba_client_intl_enums_Calendar = 9;
/**@const {number}*/
Calendar.$ordinal_JAPANESE__org_pepstock_charba_client_intl_enums_Calendar = 10;
/**@const {number}*/
Calendar.$ordinal_PERSIAN__org_pepstock_charba_client_intl_enums_Calendar = 11;
/**@const {number}*/
Calendar.$ordinal_ROC__org_pepstock_charba_client_intl_enums_Calendar = 12;
Key.$markImplementor(Calendar);
$Util.$setClassMetadataForEnum(Calendar, "org.pepstock.charba.client.intl.enums.Calendar");

exports = Calendar;

//# sourceMappingURL=Calendar.js.map
