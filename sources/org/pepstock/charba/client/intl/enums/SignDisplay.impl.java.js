goog.module('org.pepstock.charba.client.intl.enums.SignDisplay$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<SignDisplay>}
 * @implements {Key}
 */
class SignDisplay extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_SignDisplay_;
 }
 /** @return {!SignDisplay} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new SignDisplay();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_SignDisplay__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_SignDisplay__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_SignDisplay_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_SignDisplay_;
 }
 /** @return {!SignDisplay} */
 static m_valueOf__java_lang_String(/** string */ name) {
  SignDisplay.$clinit();
  if ($Equality.$same(SignDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_SignDisplay_, null)) {
   SignDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_SignDisplay_ = $Enums.createMapFromValues(SignDisplay.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, SignDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_SignDisplay_);
 }
 /** @return {!Array<!SignDisplay>} */
 static m_values__() {
  SignDisplay.$clinit();
  return /**@type {!Array<SignDisplay>}*/ ($Arrays.$init([SignDisplay.$static_AUTO__org_pepstock_charba_client_intl_enums_SignDisplay, SignDisplay.$static_NEVER__org_pepstock_charba_client_intl_enums_SignDisplay, SignDisplay.$static_ALWAYS__org_pepstock_charba_client_intl_enums_SignDisplay, SignDisplay.$static_EXCEPT_ZERO__org_pepstock_charba_client_intl_enums_SignDisplay], SignDisplay));
 }
 /** @return {!SignDisplay} */
 static get f_AUTO__org_pepstock_charba_client_intl_enums_SignDisplay() {
  return (SignDisplay.$clinit(), SignDisplay.$static_AUTO__org_pepstock_charba_client_intl_enums_SignDisplay);
 }
 /** @return {!SignDisplay} */
 static get f_NEVER__org_pepstock_charba_client_intl_enums_SignDisplay() {
  return (SignDisplay.$clinit(), SignDisplay.$static_NEVER__org_pepstock_charba_client_intl_enums_SignDisplay);
 }
 /** @return {!SignDisplay} */
 static get f_ALWAYS__org_pepstock_charba_client_intl_enums_SignDisplay() {
  return (SignDisplay.$clinit(), SignDisplay.$static_ALWAYS__org_pepstock_charba_client_intl_enums_SignDisplay);
 }
 /** @return {!SignDisplay} */
 static get f_EXCEPT_ZERO__org_pepstock_charba_client_intl_enums_SignDisplay() {
  return (SignDisplay.$clinit(), SignDisplay.$static_EXCEPT_ZERO__org_pepstock_charba_client_intl_enums_SignDisplay);
 }
 
 static $clinit() {
  SignDisplay.$clinit = () =>{};
  SignDisplay.$loadModules();
  Enum.$clinit();
  SignDisplay.$static_AUTO__org_pepstock_charba_client_intl_enums_SignDisplay = SignDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AUTO"), SignDisplay.$ordinal_AUTO__org_pepstock_charba_client_intl_enums_SignDisplay, "auto");
  SignDisplay.$static_NEVER__org_pepstock_charba_client_intl_enums_SignDisplay = SignDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NEVER"), SignDisplay.$ordinal_NEVER__org_pepstock_charba_client_intl_enums_SignDisplay, "never");
  SignDisplay.$static_ALWAYS__org_pepstock_charba_client_intl_enums_SignDisplay = SignDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALWAYS"), SignDisplay.$ordinal_ALWAYS__org_pepstock_charba_client_intl_enums_SignDisplay, "always");
  SignDisplay.$static_EXCEPT_ZERO__org_pepstock_charba_client_intl_enums_SignDisplay = SignDisplay.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EXCEPT_ZERO"), SignDisplay.$ordinal_EXCEPT_ZERO__org_pepstock_charba_client_intl_enums_SignDisplay, "exceptZero");
  SignDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_SignDisplay_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SignDisplay;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!SignDisplay}*/
SignDisplay.$static_AUTO__org_pepstock_charba_client_intl_enums_SignDisplay;
/**@private {!SignDisplay}*/
SignDisplay.$static_NEVER__org_pepstock_charba_client_intl_enums_SignDisplay;
/**@private {!SignDisplay}*/
SignDisplay.$static_ALWAYS__org_pepstock_charba_client_intl_enums_SignDisplay;
/**@private {!SignDisplay}*/
SignDisplay.$static_EXCEPT_ZERO__org_pepstock_charba_client_intl_enums_SignDisplay;
/**@type {Map<?string, !SignDisplay>}*/
SignDisplay.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_SignDisplay_;
/**@const {number}*/
SignDisplay.$ordinal_AUTO__org_pepstock_charba_client_intl_enums_SignDisplay = 0;
/**@const {number}*/
SignDisplay.$ordinal_NEVER__org_pepstock_charba_client_intl_enums_SignDisplay = 1;
/**@const {number}*/
SignDisplay.$ordinal_ALWAYS__org_pepstock_charba_client_intl_enums_SignDisplay = 2;
/**@const {number}*/
SignDisplay.$ordinal_EXCEPT_ZERO__org_pepstock_charba_client_intl_enums_SignDisplay = 3;
Key.$markImplementor(SignDisplay);
$Util.$setClassMetadataForEnum(SignDisplay, "org.pepstock.charba.client.intl.enums.SignDisplay");

exports = SignDisplay;

//# sourceMappingURL=SignDisplay.js.map
