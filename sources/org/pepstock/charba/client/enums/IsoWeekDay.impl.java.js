goog.module('org.pepstock.charba.client.enums.IsoWeekDay$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<IsoWeekDay>}
 */
class IsoWeekDay extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_value__org_pepstock_charba_client_enums_IsoWeekDay_ = 0;
 }
 /** @return {!IsoWeekDay} */
 static $create__java_lang_String__int__int(/** ?string */ $name, /** number */ $ordinal, /** number */ value) {
  let $instance = new IsoWeekDay();
  $instance.$ctor__org_pepstock_charba_client_enums_IsoWeekDay__java_lang_String__int__int($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_IsoWeekDay__java_lang_String__int__int(/** ?string */ $name, /** number */ $ordinal, /** number */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_IsoWeekDay_ = value;
 }
 /** @return {number} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_IsoWeekDay_;
 }
 /** @return {IsoWeekDay} */
 static m_getIsoWeekDayByValue__int(/** number */ value) {
  IsoWeekDay.$clinit();
  if (value >= IsoWeekDay.$static_SUNDAY__org_pepstock_charba_client_enums_IsoWeekDay.m_value__() && value <= IsoWeekDay.$static_SATURDAY__org_pepstock_charba_client_enums_IsoWeekDay.m_value__()) {
   for (let $array = IsoWeekDay.m_values__(), $index = 0; $index < $array.length; $index++) {
    let item = $array[$index];
    {
     if (item.m_value__() == value) {
      return item;
     }
    }
   }
  }
  return IsoWeekDay.$static_SUNDAY__org_pepstock_charba_client_enums_IsoWeekDay;
 }
 /** @return {!IsoWeekDay} */
 static m_valueOf__java_lang_String(/** string */ name) {
  IsoWeekDay.$clinit();
  if ($Equality.$same(IsoWeekDay.f_namesToValuesMap__org_pepstock_charba_client_enums_IsoWeekDay_, null)) {
   IsoWeekDay.f_namesToValuesMap__org_pepstock_charba_client_enums_IsoWeekDay_ = $Enums.createMapFromValues(IsoWeekDay.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, IsoWeekDay.f_namesToValuesMap__org_pepstock_charba_client_enums_IsoWeekDay_);
 }
 /** @return {!Array<!IsoWeekDay>} */
 static m_values__() {
  IsoWeekDay.$clinit();
  return /**@type {!Array<IsoWeekDay>}*/ ($Arrays.$init([IsoWeekDay.$static_SUNDAY__org_pepstock_charba_client_enums_IsoWeekDay, IsoWeekDay.$static_MONDAY__org_pepstock_charba_client_enums_IsoWeekDay, IsoWeekDay.$static_TUESDAY__org_pepstock_charba_client_enums_IsoWeekDay, IsoWeekDay.$static_WEDNESDAY__org_pepstock_charba_client_enums_IsoWeekDay, IsoWeekDay.$static_THURSDAY__org_pepstock_charba_client_enums_IsoWeekDay, IsoWeekDay.$static_FRIDAY__org_pepstock_charba_client_enums_IsoWeekDay, IsoWeekDay.$static_SATURDAY__org_pepstock_charba_client_enums_IsoWeekDay], IsoWeekDay));
 }
 /** @return {!IsoWeekDay} */
 static get f_SUNDAY__org_pepstock_charba_client_enums_IsoWeekDay() {
  return (IsoWeekDay.$clinit(), IsoWeekDay.$static_SUNDAY__org_pepstock_charba_client_enums_IsoWeekDay);
 }
 /** @return {!IsoWeekDay} */
 static get f_MONDAY__org_pepstock_charba_client_enums_IsoWeekDay() {
  return (IsoWeekDay.$clinit(), IsoWeekDay.$static_MONDAY__org_pepstock_charba_client_enums_IsoWeekDay);
 }
 /** @return {!IsoWeekDay} */
 static get f_TUESDAY__org_pepstock_charba_client_enums_IsoWeekDay() {
  return (IsoWeekDay.$clinit(), IsoWeekDay.$static_TUESDAY__org_pepstock_charba_client_enums_IsoWeekDay);
 }
 /** @return {!IsoWeekDay} */
 static get f_WEDNESDAY__org_pepstock_charba_client_enums_IsoWeekDay() {
  return (IsoWeekDay.$clinit(), IsoWeekDay.$static_WEDNESDAY__org_pepstock_charba_client_enums_IsoWeekDay);
 }
 /** @return {!IsoWeekDay} */
 static get f_THURSDAY__org_pepstock_charba_client_enums_IsoWeekDay() {
  return (IsoWeekDay.$clinit(), IsoWeekDay.$static_THURSDAY__org_pepstock_charba_client_enums_IsoWeekDay);
 }
 /** @return {!IsoWeekDay} */
 static get f_FRIDAY__org_pepstock_charba_client_enums_IsoWeekDay() {
  return (IsoWeekDay.$clinit(), IsoWeekDay.$static_FRIDAY__org_pepstock_charba_client_enums_IsoWeekDay);
 }
 /** @return {!IsoWeekDay} */
 static get f_SATURDAY__org_pepstock_charba_client_enums_IsoWeekDay() {
  return (IsoWeekDay.$clinit(), IsoWeekDay.$static_SATURDAY__org_pepstock_charba_client_enums_IsoWeekDay);
 }
 
 static $clinit() {
  IsoWeekDay.$clinit = () =>{};
  IsoWeekDay.$loadModules();
  Enum.$clinit();
  IsoWeekDay.$static_SUNDAY__org_pepstock_charba_client_enums_IsoWeekDay = IsoWeekDay.$create__java_lang_String__int__int($Util.$makeEnumName("SUNDAY"), IsoWeekDay.$ordinal_SUNDAY__org_pepstock_charba_client_enums_IsoWeekDay, 0);
  IsoWeekDay.$static_MONDAY__org_pepstock_charba_client_enums_IsoWeekDay = IsoWeekDay.$create__java_lang_String__int__int($Util.$makeEnumName("MONDAY"), IsoWeekDay.$ordinal_MONDAY__org_pepstock_charba_client_enums_IsoWeekDay, 1);
  IsoWeekDay.$static_TUESDAY__org_pepstock_charba_client_enums_IsoWeekDay = IsoWeekDay.$create__java_lang_String__int__int($Util.$makeEnumName("TUESDAY"), IsoWeekDay.$ordinal_TUESDAY__org_pepstock_charba_client_enums_IsoWeekDay, 2);
  IsoWeekDay.$static_WEDNESDAY__org_pepstock_charba_client_enums_IsoWeekDay = IsoWeekDay.$create__java_lang_String__int__int($Util.$makeEnumName("WEDNESDAY"), IsoWeekDay.$ordinal_WEDNESDAY__org_pepstock_charba_client_enums_IsoWeekDay, 3);
  IsoWeekDay.$static_THURSDAY__org_pepstock_charba_client_enums_IsoWeekDay = IsoWeekDay.$create__java_lang_String__int__int($Util.$makeEnumName("THURSDAY"), IsoWeekDay.$ordinal_THURSDAY__org_pepstock_charba_client_enums_IsoWeekDay, 4);
  IsoWeekDay.$static_FRIDAY__org_pepstock_charba_client_enums_IsoWeekDay = IsoWeekDay.$create__java_lang_String__int__int($Util.$makeEnumName("FRIDAY"), IsoWeekDay.$ordinal_FRIDAY__org_pepstock_charba_client_enums_IsoWeekDay, 5);
  IsoWeekDay.$static_SATURDAY__org_pepstock_charba_client_enums_IsoWeekDay = IsoWeekDay.$create__java_lang_String__int__int($Util.$makeEnumName("SATURDAY"), IsoWeekDay.$ordinal_SATURDAY__org_pepstock_charba_client_enums_IsoWeekDay, 6);
  IsoWeekDay.f_namesToValuesMap__org_pepstock_charba_client_enums_IsoWeekDay_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IsoWeekDay;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!IsoWeekDay}*/
IsoWeekDay.$static_SUNDAY__org_pepstock_charba_client_enums_IsoWeekDay;
/**@private {!IsoWeekDay}*/
IsoWeekDay.$static_MONDAY__org_pepstock_charba_client_enums_IsoWeekDay;
/**@private {!IsoWeekDay}*/
IsoWeekDay.$static_TUESDAY__org_pepstock_charba_client_enums_IsoWeekDay;
/**@private {!IsoWeekDay}*/
IsoWeekDay.$static_WEDNESDAY__org_pepstock_charba_client_enums_IsoWeekDay;
/**@private {!IsoWeekDay}*/
IsoWeekDay.$static_THURSDAY__org_pepstock_charba_client_enums_IsoWeekDay;
/**@private {!IsoWeekDay}*/
IsoWeekDay.$static_FRIDAY__org_pepstock_charba_client_enums_IsoWeekDay;
/**@private {!IsoWeekDay}*/
IsoWeekDay.$static_SATURDAY__org_pepstock_charba_client_enums_IsoWeekDay;
/**@type {Map<?string, !IsoWeekDay>}*/
IsoWeekDay.f_namesToValuesMap__org_pepstock_charba_client_enums_IsoWeekDay_;
/**@const {number}*/
IsoWeekDay.$ordinal_SUNDAY__org_pepstock_charba_client_enums_IsoWeekDay = 0;
/**@const {number}*/
IsoWeekDay.$ordinal_MONDAY__org_pepstock_charba_client_enums_IsoWeekDay = 1;
/**@const {number}*/
IsoWeekDay.$ordinal_TUESDAY__org_pepstock_charba_client_enums_IsoWeekDay = 2;
/**@const {number}*/
IsoWeekDay.$ordinal_WEDNESDAY__org_pepstock_charba_client_enums_IsoWeekDay = 3;
/**@const {number}*/
IsoWeekDay.$ordinal_THURSDAY__org_pepstock_charba_client_enums_IsoWeekDay = 4;
/**@const {number}*/
IsoWeekDay.$ordinal_FRIDAY__org_pepstock_charba_client_enums_IsoWeekDay = 5;
/**@const {number}*/
IsoWeekDay.$ordinal_SATURDAY__org_pepstock_charba_client_enums_IsoWeekDay = 6;
$Util.$setClassMetadataForEnum(IsoWeekDay, "org.pepstock.charba.client.enums.IsoWeekDay");

exports = IsoWeekDay;

//# sourceMappingURL=IsoWeekDay.js.map
