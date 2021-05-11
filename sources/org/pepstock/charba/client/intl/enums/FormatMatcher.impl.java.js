goog.module('org.pepstock.charba.client.intl.enums.FormatMatcher$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<FormatMatcher>}
 * @implements {Key}
 */
class FormatMatcher extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_FormatMatcher_;
 }
 /** @return {!FormatMatcher} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new FormatMatcher();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_FormatMatcher__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_FormatMatcher__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_FormatMatcher_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_FormatMatcher_;
 }
 /** @return {!FormatMatcher} */
 static m_valueOf__java_lang_String(/** string */ name) {
  FormatMatcher.$clinit();
  if ($Equality.$same(FormatMatcher.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_FormatMatcher_, null)) {
   FormatMatcher.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_FormatMatcher_ = $Enums.createMapFromValues(FormatMatcher.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, FormatMatcher.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_FormatMatcher_);
 }
 /** @return {!Array<!FormatMatcher>} */
 static m_values__() {
  FormatMatcher.$clinit();
  return /**@type {!Array<FormatMatcher>}*/ ($Arrays.$init([FormatMatcher.$static_BASIC__org_pepstock_charba_client_intl_enums_FormatMatcher, FormatMatcher.$static_BEST_FIT__org_pepstock_charba_client_intl_enums_FormatMatcher], FormatMatcher));
 }
 /** @return {!FormatMatcher} */
 static get f_BASIC__org_pepstock_charba_client_intl_enums_FormatMatcher() {
  return (FormatMatcher.$clinit(), FormatMatcher.$static_BASIC__org_pepstock_charba_client_intl_enums_FormatMatcher);
 }
 /** @return {!FormatMatcher} */
 static get f_BEST_FIT__org_pepstock_charba_client_intl_enums_FormatMatcher() {
  return (FormatMatcher.$clinit(), FormatMatcher.$static_BEST_FIT__org_pepstock_charba_client_intl_enums_FormatMatcher);
 }
 
 static $clinit() {
  FormatMatcher.$clinit = () =>{};
  FormatMatcher.$loadModules();
  Enum.$clinit();
  FormatMatcher.$static_BASIC__org_pepstock_charba_client_intl_enums_FormatMatcher = FormatMatcher.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BASIC"), FormatMatcher.$ordinal_BASIC__org_pepstock_charba_client_intl_enums_FormatMatcher, "basic");
  FormatMatcher.$static_BEST_FIT__org_pepstock_charba_client_intl_enums_FormatMatcher = FormatMatcher.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEST_FIT"), FormatMatcher.$ordinal_BEST_FIT__org_pepstock_charba_client_intl_enums_FormatMatcher, "best fit");
  FormatMatcher.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_FormatMatcher_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormatMatcher;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!FormatMatcher}*/
FormatMatcher.$static_BASIC__org_pepstock_charba_client_intl_enums_FormatMatcher;
/**@private {!FormatMatcher}*/
FormatMatcher.$static_BEST_FIT__org_pepstock_charba_client_intl_enums_FormatMatcher;
/**@type {Map<?string, !FormatMatcher>}*/
FormatMatcher.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_FormatMatcher_;
/**@const {number}*/
FormatMatcher.$ordinal_BASIC__org_pepstock_charba_client_intl_enums_FormatMatcher = 0;
/**@const {number}*/
FormatMatcher.$ordinal_BEST_FIT__org_pepstock_charba_client_intl_enums_FormatMatcher = 1;
Key.$markImplementor(FormatMatcher);
$Util.$setClassMetadataForEnum(FormatMatcher, "org.pepstock.charba.client.intl.enums.FormatMatcher");

exports = FormatMatcher;

//# sourceMappingURL=FormatMatcher.js.map
