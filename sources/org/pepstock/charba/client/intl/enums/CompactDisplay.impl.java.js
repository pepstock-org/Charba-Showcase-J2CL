goog.module('org.pepstock.charba.client.intl.enums.CompactDisplay$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<CompactDisplay>}
 * @implements {Key}
 */
class CompactDisplay extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_CompactDisplay_;
 }
 /** @return {!CompactDisplay} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new CompactDisplay();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_CompactDisplay__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_CompactDisplay__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_CompactDisplay_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_CompactDisplay_;
 }
 /** @return {!CompactDisplay} */
 static m_valueOf__java_lang_String(/** string */ name) {
  CompactDisplay.$clinit();
  if ($Equality.$same(CompactDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CompactDisplay_, null)) {
   CompactDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CompactDisplay_ = $Enums.createMapFromValues(CompactDisplay.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CompactDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CompactDisplay_);
 }
 /** @return {!Array<!CompactDisplay>} */
 static m_values__() {
  CompactDisplay.$clinit();
  return /**@type {!Array<CompactDisplay>}*/ ($Arrays.$init([CompactDisplay.$static_SHORT__org_pepstock_charba_client_intl_enums_CompactDisplay, CompactDisplay.$static_LONG__org_pepstock_charba_client_intl_enums_CompactDisplay], CompactDisplay));
 }
 /** @return {!CompactDisplay} */
 static get f_SHORT__org_pepstock_charba_client_intl_enums_CompactDisplay() {
  return (CompactDisplay.$clinit(), CompactDisplay.$static_SHORT__org_pepstock_charba_client_intl_enums_CompactDisplay);
 }
 /** @return {!CompactDisplay} */
 static get f_LONG__org_pepstock_charba_client_intl_enums_CompactDisplay() {
  return (CompactDisplay.$clinit(), CompactDisplay.$static_LONG__org_pepstock_charba_client_intl_enums_CompactDisplay);
 }
 
 static $clinit() {
  CompactDisplay.$clinit = () =>{};
  CompactDisplay.$loadModules();
  Enum.$clinit();
  CompactDisplay.$static_SHORT__org_pepstock_charba_client_intl_enums_CompactDisplay = CompactDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHORT"), CompactDisplay.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_CompactDisplay, "short");
  CompactDisplay.$static_LONG__org_pepstock_charba_client_intl_enums_CompactDisplay = CompactDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LONG"), CompactDisplay.$ordinal_LONG__org_pepstock_charba_client_intl_enums_CompactDisplay, "long");
  CompactDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CompactDisplay_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CompactDisplay;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!CompactDisplay}*/
CompactDisplay.$static_SHORT__org_pepstock_charba_client_intl_enums_CompactDisplay;
/**@private {!CompactDisplay}*/
CompactDisplay.$static_LONG__org_pepstock_charba_client_intl_enums_CompactDisplay;
/**@type {Map<?string, !CompactDisplay>}*/
CompactDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_CompactDisplay_;
/**@const {number}*/
CompactDisplay.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_CompactDisplay = 0;
/**@const {number}*/
CompactDisplay.$ordinal_LONG__org_pepstock_charba_client_intl_enums_CompactDisplay = 1;
Key.$markImplementor(CompactDisplay);
$Util.$setClassMetadataForEnum(CompactDisplay, "org.pepstock.charba.client.intl.enums.CompactDisplay");

exports = CompactDisplay;

//# sourceMappingURL=CompactDisplay.js.map
