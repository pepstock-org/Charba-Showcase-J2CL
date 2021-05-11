goog.module('org.pepstock.charba.client.enums.ModifierKey$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ModifierKey>}
 * @implements {Key}
 */
class ModifierKey extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_ModifierKey_;
 }
 /** @return {!ModifierKey} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new ModifierKey();
  $instance.$ctor__org_pepstock_charba_client_enums_ModifierKey__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_ModifierKey__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_ModifierKey_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_ModifierKey_;
 }
 /** @return {!ModifierKey} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ModifierKey.$clinit();
  if ($Equality.$same(ModifierKey.f_namesToValuesMap__org_pepstock_charba_client_enums_ModifierKey_, null)) {
   ModifierKey.f_namesToValuesMap__org_pepstock_charba_client_enums_ModifierKey_ = $Enums.createMapFromValues(ModifierKey.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ModifierKey.f_namesToValuesMap__org_pepstock_charba_client_enums_ModifierKey_);
 }
 /** @return {!Array<!ModifierKey>} */
 static m_values__() {
  ModifierKey.$clinit();
  return /**@type {!Array<ModifierKey>}*/ ($Arrays.$init([ModifierKey.$static_ALT__org_pepstock_charba_client_enums_ModifierKey, ModifierKey.$static_CTRL__org_pepstock_charba_client_enums_ModifierKey, ModifierKey.$static_META__org_pepstock_charba_client_enums_ModifierKey, ModifierKey.$static_SHIFT__org_pepstock_charba_client_enums_ModifierKey], ModifierKey));
 }
 /** @return {!ModifierKey} */
 static get f_ALT__org_pepstock_charba_client_enums_ModifierKey() {
  return (ModifierKey.$clinit(), ModifierKey.$static_ALT__org_pepstock_charba_client_enums_ModifierKey);
 }
 /** @return {!ModifierKey} */
 static get f_CTRL__org_pepstock_charba_client_enums_ModifierKey() {
  return (ModifierKey.$clinit(), ModifierKey.$static_CTRL__org_pepstock_charba_client_enums_ModifierKey);
 }
 /** @return {!ModifierKey} */
 static get f_META__org_pepstock_charba_client_enums_ModifierKey() {
  return (ModifierKey.$clinit(), ModifierKey.$static_META__org_pepstock_charba_client_enums_ModifierKey);
 }
 /** @return {!ModifierKey} */
 static get f_SHIFT__org_pepstock_charba_client_enums_ModifierKey() {
  return (ModifierKey.$clinit(), ModifierKey.$static_SHIFT__org_pepstock_charba_client_enums_ModifierKey);
 }
 
 static $clinit() {
  ModifierKey.$clinit = () =>{};
  ModifierKey.$loadModules();
  Enum.$clinit();
  ModifierKey.$static_ALT__org_pepstock_charba_client_enums_ModifierKey = ModifierKey.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALT"), ModifierKey.$ordinal_ALT__org_pepstock_charba_client_enums_ModifierKey, "alt");
  ModifierKey.$static_CTRL__org_pepstock_charba_client_enums_ModifierKey = ModifierKey.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CTRL"), ModifierKey.$ordinal_CTRL__org_pepstock_charba_client_enums_ModifierKey, "ctrl");
  ModifierKey.$static_META__org_pepstock_charba_client_enums_ModifierKey = ModifierKey.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("META"), ModifierKey.$ordinal_META__org_pepstock_charba_client_enums_ModifierKey, "meta");
  ModifierKey.$static_SHIFT__org_pepstock_charba_client_enums_ModifierKey = ModifierKey.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHIFT"), ModifierKey.$ordinal_SHIFT__org_pepstock_charba_client_enums_ModifierKey, "shift");
  ModifierKey.f_namesToValuesMap__org_pepstock_charba_client_enums_ModifierKey_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ModifierKey;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ModifierKey}*/
ModifierKey.$static_ALT__org_pepstock_charba_client_enums_ModifierKey;
/**@private {!ModifierKey}*/
ModifierKey.$static_CTRL__org_pepstock_charba_client_enums_ModifierKey;
/**@private {!ModifierKey}*/
ModifierKey.$static_META__org_pepstock_charba_client_enums_ModifierKey;
/**@private {!ModifierKey}*/
ModifierKey.$static_SHIFT__org_pepstock_charba_client_enums_ModifierKey;
/**@type {Map<?string, !ModifierKey>}*/
ModifierKey.f_namesToValuesMap__org_pepstock_charba_client_enums_ModifierKey_;
/**@const {number}*/
ModifierKey.$ordinal_ALT__org_pepstock_charba_client_enums_ModifierKey = 0;
/**@const {number}*/
ModifierKey.$ordinal_CTRL__org_pepstock_charba_client_enums_ModifierKey = 1;
/**@const {number}*/
ModifierKey.$ordinal_META__org_pepstock_charba_client_enums_ModifierKey = 2;
/**@const {number}*/
ModifierKey.$ordinal_SHIFT__org_pepstock_charba_client_enums_ModifierKey = 3;
Key.$markImplementor(ModifierKey);
$Util.$setClassMetadataForEnum(ModifierKey, "org.pepstock.charba.client.enums.ModifierKey");

exports = ModifierKey;

//# sourceMappingURL=ModifierKey.js.map
