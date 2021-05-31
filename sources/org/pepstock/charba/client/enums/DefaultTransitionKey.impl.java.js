goog.module('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TransitionKey = goog.require('org.pepstock.charba.client.options.TransitionKey$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DefaultTransitionKey>}
 * @implements {TransitionKey}
 */
class DefaultTransitionKey extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_DefaultTransitionKey_;
 }
 /** @return {!DefaultTransitionKey} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new DefaultTransitionKey();
  $instance.$ctor__org_pepstock_charba_client_enums_DefaultTransitionKey__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_DefaultTransitionKey__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_DefaultTransitionKey_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_DefaultTransitionKey_;
 }
 /** @return {boolean} */
 static m_is__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ mode) {
  DefaultTransitionKey.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(mode)) {
   return DefaultTransitionKey.m_is__java_lang_String(mode.m_value__());
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__java_lang_String(/** ?string */ mode) {
  DefaultTransitionKey.$clinit();
  return Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(DefaultTransitionKey.m_values__(), mode);
 }
 /** @return {!DefaultTransitionKey} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DefaultTransitionKey.$clinit();
  if ($Equality.$same(DefaultTransitionKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultTransitionKey_, null)) {
   DefaultTransitionKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultTransitionKey_ = $Enums.createMapFromValues(DefaultTransitionKey.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DefaultTransitionKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultTransitionKey_);
 }
 /** @return {!Array<!DefaultTransitionKey>} */
 static m_values__() {
  DefaultTransitionKey.$clinit();
  return /**@type {!Array<DefaultTransitionKey>}*/ ($Arrays.$init([DefaultTransitionKey.$static_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey, DefaultTransitionKey.$static_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey, DefaultTransitionKey.$static_HIDE__org_pepstock_charba_client_enums_DefaultTransitionKey, DefaultTransitionKey.$static_RESET__org_pepstock_charba_client_enums_DefaultTransitionKey, DefaultTransitionKey.$static_RESIZE__org_pepstock_charba_client_enums_DefaultTransitionKey, DefaultTransitionKey.$static_SHOW__org_pepstock_charba_client_enums_DefaultTransitionKey, DefaultTransitionKey.$static_NONE__org_pepstock_charba_client_enums_DefaultTransitionKey], DefaultTransitionKey));
 }
 /** @return {!DefaultTransitionKey} */
 static get f_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey() {
  return (DefaultTransitionKey.$clinit(), DefaultTransitionKey.$static_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 /** @return {!DefaultTransitionKey} */
 static get f_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey() {
  return (DefaultTransitionKey.$clinit(), DefaultTransitionKey.$static_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 /** @return {!DefaultTransitionKey} */
 static get f_HIDE__org_pepstock_charba_client_enums_DefaultTransitionKey() {
  return (DefaultTransitionKey.$clinit(), DefaultTransitionKey.$static_HIDE__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 /** @return {!DefaultTransitionKey} */
 static get f_RESET__org_pepstock_charba_client_enums_DefaultTransitionKey() {
  return (DefaultTransitionKey.$clinit(), DefaultTransitionKey.$static_RESET__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 /** @return {!DefaultTransitionKey} */
 static get f_RESIZE__org_pepstock_charba_client_enums_DefaultTransitionKey() {
  return (DefaultTransitionKey.$clinit(), DefaultTransitionKey.$static_RESIZE__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 /** @return {!DefaultTransitionKey} */
 static get f_SHOW__org_pepstock_charba_client_enums_DefaultTransitionKey() {
  return (DefaultTransitionKey.$clinit(), DefaultTransitionKey.$static_SHOW__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 /** @return {!DefaultTransitionKey} */
 static get f_NONE__org_pepstock_charba_client_enums_DefaultTransitionKey() {
  return (DefaultTransitionKey.$clinit(), DefaultTransitionKey.$static_NONE__org_pepstock_charba_client_enums_DefaultTransitionKey);
 }
 
 static $clinit() {
  DefaultTransitionKey.$clinit = () =>{};
  DefaultTransitionKey.$loadModules();
  Enum.$clinit();
  DefaultTransitionKey.$static_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey = DefaultTransitionKey.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DEFAULT"), DefaultTransitionKey.$ordinal_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey, "default");
  DefaultTransitionKey.$static_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey = DefaultTransitionKey.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ACTIVE"), DefaultTransitionKey.$ordinal_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey, "active");
  DefaultTransitionKey.$static_HIDE__org_pepstock_charba_client_enums_DefaultTransitionKey = DefaultTransitionKey.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HIDE"), DefaultTransitionKey.$ordinal_HIDE__org_pepstock_charba_client_enums_DefaultTransitionKey, "hide");
  DefaultTransitionKey.$static_RESET__org_pepstock_charba_client_enums_DefaultTransitionKey = DefaultTransitionKey.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RESET"), DefaultTransitionKey.$ordinal_RESET__org_pepstock_charba_client_enums_DefaultTransitionKey, "reset");
  DefaultTransitionKey.$static_RESIZE__org_pepstock_charba_client_enums_DefaultTransitionKey = DefaultTransitionKey.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RESIZE"), DefaultTransitionKey.$ordinal_RESIZE__org_pepstock_charba_client_enums_DefaultTransitionKey, "resize");
  DefaultTransitionKey.$static_SHOW__org_pepstock_charba_client_enums_DefaultTransitionKey = DefaultTransitionKey.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHOW"), DefaultTransitionKey.$ordinal_SHOW__org_pepstock_charba_client_enums_DefaultTransitionKey, "show");
  DefaultTransitionKey.$static_NONE__org_pepstock_charba_client_enums_DefaultTransitionKey = DefaultTransitionKey.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NONE"), DefaultTransitionKey.$ordinal_NONE__org_pepstock_charba_client_enums_DefaultTransitionKey, "none");
  DefaultTransitionKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultTransitionKey_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultTransitionKey;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DefaultTransitionKey}*/
DefaultTransitionKey.$static_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey;
/**@private {!DefaultTransitionKey}*/
DefaultTransitionKey.$static_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey;
/**@private {!DefaultTransitionKey}*/
DefaultTransitionKey.$static_HIDE__org_pepstock_charba_client_enums_DefaultTransitionKey;
/**@private {!DefaultTransitionKey}*/
DefaultTransitionKey.$static_RESET__org_pepstock_charba_client_enums_DefaultTransitionKey;
/**@private {!DefaultTransitionKey}*/
DefaultTransitionKey.$static_RESIZE__org_pepstock_charba_client_enums_DefaultTransitionKey;
/**@private {!DefaultTransitionKey}*/
DefaultTransitionKey.$static_SHOW__org_pepstock_charba_client_enums_DefaultTransitionKey;
/**@private {!DefaultTransitionKey}*/
DefaultTransitionKey.$static_NONE__org_pepstock_charba_client_enums_DefaultTransitionKey;
/**@type {Map<?string, !DefaultTransitionKey>}*/
DefaultTransitionKey.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultTransitionKey_;
/**@const {number}*/
DefaultTransitionKey.$ordinal_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey = 0;
/**@const {number}*/
DefaultTransitionKey.$ordinal_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey = 1;
/**@const {number}*/
DefaultTransitionKey.$ordinal_HIDE__org_pepstock_charba_client_enums_DefaultTransitionKey = 2;
/**@const {number}*/
DefaultTransitionKey.$ordinal_RESET__org_pepstock_charba_client_enums_DefaultTransitionKey = 3;
/**@const {number}*/
DefaultTransitionKey.$ordinal_RESIZE__org_pepstock_charba_client_enums_DefaultTransitionKey = 4;
/**@const {number}*/
DefaultTransitionKey.$ordinal_SHOW__org_pepstock_charba_client_enums_DefaultTransitionKey = 5;
/**@const {number}*/
DefaultTransitionKey.$ordinal_NONE__org_pepstock_charba_client_enums_DefaultTransitionKey = 6;
TransitionKey.$markImplementor(DefaultTransitionKey);
$Util.$setClassMetadataForEnum(DefaultTransitionKey, "org.pepstock.charba.client.enums.DefaultTransitionKey");

exports = DefaultTransitionKey;

//# sourceMappingURL=DefaultTransitionKey.js.map
