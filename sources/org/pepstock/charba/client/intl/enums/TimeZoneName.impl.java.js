goog.module('org.pepstock.charba.client.intl.enums.TimeZoneName$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TimeZoneName>}
 * @implements {Key}
 */
class TimeZoneName extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_TimeZoneName_;
 }
 /** @return {!TimeZoneName} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TimeZoneName();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_TimeZoneName__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_TimeZoneName__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_TimeZoneName_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_TimeZoneName_;
 }
 /** @return {!TimeZoneName} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TimeZoneName.$clinit();
  if ($Equality.$same(TimeZoneName.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_TimeZoneName_, null)) {
   TimeZoneName.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_TimeZoneName_ = $Enums.createMapFromValues(TimeZoneName.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TimeZoneName.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_TimeZoneName_);
 }
 /** @return {!Array<!TimeZoneName>} */
 static m_values__() {
  TimeZoneName.$clinit();
  return /**@type {!Array<TimeZoneName>}*/ ($Arrays.$init([TimeZoneName.$static_LONG__org_pepstock_charba_client_intl_enums_TimeZoneName, TimeZoneName.$static_SHORT__org_pepstock_charba_client_intl_enums_TimeZoneName], TimeZoneName));
 }
 /** @return {!TimeZoneName} */
 static get f_LONG__org_pepstock_charba_client_intl_enums_TimeZoneName() {
  return (TimeZoneName.$clinit(), TimeZoneName.$static_LONG__org_pepstock_charba_client_intl_enums_TimeZoneName);
 }
 /** @return {!TimeZoneName} */
 static get f_SHORT__org_pepstock_charba_client_intl_enums_TimeZoneName() {
  return (TimeZoneName.$clinit(), TimeZoneName.$static_SHORT__org_pepstock_charba_client_intl_enums_TimeZoneName);
 }
 
 static $clinit() {
  TimeZoneName.$clinit = () =>{};
  TimeZoneName.$loadModules();
  Enum.$clinit();
  TimeZoneName.$static_LONG__org_pepstock_charba_client_intl_enums_TimeZoneName = TimeZoneName.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LONG"), TimeZoneName.$ordinal_LONG__org_pepstock_charba_client_intl_enums_TimeZoneName, "long");
  TimeZoneName.$static_SHORT__org_pepstock_charba_client_intl_enums_TimeZoneName = TimeZoneName.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHORT"), TimeZoneName.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_TimeZoneName, "short");
  TimeZoneName.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_TimeZoneName_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeZoneName;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TimeZoneName}*/
TimeZoneName.$static_LONG__org_pepstock_charba_client_intl_enums_TimeZoneName;
/**@private {!TimeZoneName}*/
TimeZoneName.$static_SHORT__org_pepstock_charba_client_intl_enums_TimeZoneName;
/**@type {Map<?string, !TimeZoneName>}*/
TimeZoneName.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_TimeZoneName_;
/**@const {number}*/
TimeZoneName.$ordinal_LONG__org_pepstock_charba_client_intl_enums_TimeZoneName = 0;
/**@const {number}*/
TimeZoneName.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_TimeZoneName = 1;
Key.$markImplementor(TimeZoneName);
$Util.$setClassMetadataForEnum(TimeZoneName, "org.pepstock.charba.client.intl.enums.TimeZoneName");

exports = TimeZoneName;

//# sourceMappingURL=TimeZoneName.js.map
