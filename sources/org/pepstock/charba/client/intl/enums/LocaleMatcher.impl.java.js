goog.module('org.pepstock.charba.client.intl.enums.LocaleMatcher$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<LocaleMatcher>}
 * @implements {Key}
 */
class LocaleMatcher extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_LocaleMatcher_;
 }
 /** @return {!LocaleMatcher} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new LocaleMatcher();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_LocaleMatcher__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_LocaleMatcher__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_LocaleMatcher_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_LocaleMatcher_;
 }
 /** @return {!LocaleMatcher} */
 static m_valueOf__java_lang_String(/** string */ name) {
  LocaleMatcher.$clinit();
  if ($Equality.$same(LocaleMatcher.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_LocaleMatcher_, null)) {
   LocaleMatcher.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_LocaleMatcher_ = $Enums.createMapFromValues(LocaleMatcher.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, LocaleMatcher.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_LocaleMatcher_);
 }
 /** @return {!Array<!LocaleMatcher>} */
 static m_values__() {
  LocaleMatcher.$clinit();
  return /**@type {!Array<LocaleMatcher>}*/ ($Arrays.$init([LocaleMatcher.$static_LOOKUP__org_pepstock_charba_client_intl_enums_LocaleMatcher, LocaleMatcher.$static_BEST_FIT__org_pepstock_charba_client_intl_enums_LocaleMatcher], LocaleMatcher));
 }
 /** @return {!LocaleMatcher} */
 static get f_LOOKUP__org_pepstock_charba_client_intl_enums_LocaleMatcher() {
  return (LocaleMatcher.$clinit(), LocaleMatcher.$static_LOOKUP__org_pepstock_charba_client_intl_enums_LocaleMatcher);
 }
 /** @return {!LocaleMatcher} */
 static get f_BEST_FIT__org_pepstock_charba_client_intl_enums_LocaleMatcher() {
  return (LocaleMatcher.$clinit(), LocaleMatcher.$static_BEST_FIT__org_pepstock_charba_client_intl_enums_LocaleMatcher);
 }
 
 static $clinit() {
  LocaleMatcher.$clinit = () =>{};
  LocaleMatcher.$loadModules();
  Enum.$clinit();
  LocaleMatcher.$static_LOOKUP__org_pepstock_charba_client_intl_enums_LocaleMatcher = LocaleMatcher.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LOOKUP"), LocaleMatcher.$ordinal_LOOKUP__org_pepstock_charba_client_intl_enums_LocaleMatcher, "lookup");
  LocaleMatcher.$static_BEST_FIT__org_pepstock_charba_client_intl_enums_LocaleMatcher = LocaleMatcher.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEST_FIT"), LocaleMatcher.$ordinal_BEST_FIT__org_pepstock_charba_client_intl_enums_LocaleMatcher, "best fit");
  LocaleMatcher.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_LocaleMatcher_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocaleMatcher;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!LocaleMatcher}*/
LocaleMatcher.$static_LOOKUP__org_pepstock_charba_client_intl_enums_LocaleMatcher;
/**@private {!LocaleMatcher}*/
LocaleMatcher.$static_BEST_FIT__org_pepstock_charba_client_intl_enums_LocaleMatcher;
/**@type {Map<?string, !LocaleMatcher>}*/
LocaleMatcher.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_LocaleMatcher_;
/**@const {number}*/
LocaleMatcher.$ordinal_LOOKUP__org_pepstock_charba_client_intl_enums_LocaleMatcher = 0;
/**@const {number}*/
LocaleMatcher.$ordinal_BEST_FIT__org_pepstock_charba_client_intl_enums_LocaleMatcher = 1;
Key.$markImplementor(LocaleMatcher);
$Util.$setClassMetadataForEnum(LocaleMatcher, "org.pepstock.charba.client.intl.enums.LocaleMatcher");

exports = LocaleMatcher;

//# sourceMappingURL=LocaleMatcher.js.map
