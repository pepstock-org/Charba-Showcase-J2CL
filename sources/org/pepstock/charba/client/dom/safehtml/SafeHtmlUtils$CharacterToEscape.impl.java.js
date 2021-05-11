goog.module('org.pepstock.charba.client.dom.safehtml.SafeHtmlUtils.CharacterToEscape$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<CharacterToEscape>}
 */
class CharacterToEscape extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape_;
  /**@type {?string}*/
  this.f_replacement__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape_;
 }
 /** @return {!CharacterToEscape} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ replacement) {
  let $instance = new CharacterToEscape();
  $instance.$ctor__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape__java_lang_String__int__java_lang_String__java_lang_String($name, $ordinal, value, replacement);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ replacement) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape_ = value;
  this.f_replacement__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape_ = replacement;
 }
 /** @return {?string} */
 m_getValue___$pp_org_pepstock_charba_client_dom_safehtml() {
  return this.f_value__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape_;
 }
 /** @return {?string} */
 m_getReplacement___$pp_org_pepstock_charba_client_dom_safehtml() {
  return this.f_replacement__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape_;
 }
 /** @return {?string} */
 static m_escape__char(/** number */ input) {
  CharacterToEscape.$clinit();
  for (let $array = CharacterToEscape.m_values__(), $index = 0; $index < $array.length; $index++) {
   let charToEscape = $array[$index];
   {
    let charToTest = j_l_String.m_charAt__java_lang_String__int(charToEscape.m_getValue___$pp_org_pepstock_charba_client_dom_safehtml(), 0);
    if (input == charToTest) {
     return charToEscape.m_getReplacement___$pp_org_pepstock_charba_client_dom_safehtml();
    }
   }
  }
  return j_l_String.m_valueOf__java_lang_Object(Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants) + j_l_String.m_valueOf__char(input);
 }
 /** @return {?string} */
 static m_escapeAll__java_lang_String(/** ?string */ input) {
  CharacterToEscape.$clinit();
  let result = input;
  if (!$Equality.$same(input, null)) {
   for (let $array = CharacterToEscape.m_values__(), $index = 0; $index < $array.length; $index++) {
    let charToEscape = $array[$index];
    {
     if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence(result, charToEscape.m_getValue___$pp_org_pepstock_charba_client_dom_safehtml())) {
      result = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(result, charToEscape.m_getValue___$pp_org_pepstock_charba_client_dom_safehtml(), charToEscape.m_getReplacement___$pp_org_pepstock_charba_client_dom_safehtml());
     }
    }
   }
  }
  return result;
 }
 /** @return {!CharacterToEscape} */
 static m_valueOf__java_lang_String(/** string */ name) {
  CharacterToEscape.$clinit();
  if ($Equality.$same(CharacterToEscape.f_namesToValuesMap__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape_, null)) {
   CharacterToEscape.f_namesToValuesMap__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape_ = $Enums.createMapFromValues(CharacterToEscape.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CharacterToEscape.f_namesToValuesMap__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape_);
 }
 /** @return {!Array<!CharacterToEscape>} */
 static m_values__() {
  CharacterToEscape.$clinit();
  return /**@type {!Array<CharacterToEscape>}*/ ($Arrays.$init([CharacterToEscape.$static_AMPERSAND__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape, CharacterToEscape.$static_GREATER_THAN__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape, CharacterToEscape.$static_LESS_THANT__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape, CharacterToEscape.$static_SINGLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape, CharacterToEscape.$static_DOUBLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape], CharacterToEscape));
 }
 /** @return {!CharacterToEscape} */
 static get f_AMPERSAND__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape() {
  return (CharacterToEscape.$clinit(), CharacterToEscape.$static_AMPERSAND__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape);
 }
 /** @return {!CharacterToEscape} */
 static get f_GREATER_THAN__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape() {
  return (CharacterToEscape.$clinit(), CharacterToEscape.$static_GREATER_THAN__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape);
 }
 /** @return {!CharacterToEscape} */
 static get f_LESS_THANT__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape() {
  return (CharacterToEscape.$clinit(), CharacterToEscape.$static_LESS_THANT__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape);
 }
 /** @return {!CharacterToEscape} */
 static get f_SINGLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape() {
  return (CharacterToEscape.$clinit(), CharacterToEscape.$static_SINGLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape);
 }
 /** @return {!CharacterToEscape} */
 static get f_DOUBLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape() {
  return (CharacterToEscape.$clinit(), CharacterToEscape.$static_DOUBLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape);
 }
 
 static $clinit() {
  CharacterToEscape.$clinit = () =>{};
  CharacterToEscape.$loadModules();
  Enum.$clinit();
  CharacterToEscape.$static_AMPERSAND__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape = CharacterToEscape.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("AMPERSAND"), CharacterToEscape.$ordinal_AMPERSAND__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape, Constants.f_AMPERSAND__org_pepstock_charba_client_commons_Constants, "&amp;");
  CharacterToEscape.$static_GREATER_THAN__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape = CharacterToEscape.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("GREATER_THAN"), CharacterToEscape.$ordinal_GREATER_THAN__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape, Constants.f_GT__org_pepstock_charba_client_commons_Constants, "&gt;");
  CharacterToEscape.$static_LESS_THANT__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape = CharacterToEscape.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LESS_THANT"), CharacterToEscape.$ordinal_LESS_THANT__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape, Constants.f_LT__org_pepstock_charba_client_commons_Constants, "&lt;");
  CharacterToEscape.$static_SINGLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape = CharacterToEscape.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("SINGLE_QUOTE"), CharacterToEscape.$ordinal_SINGLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape, "'", "&#39;");
  CharacterToEscape.$static_DOUBLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape = CharacterToEscape.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("DOUBLE_QUOTE"), CharacterToEscape.$ordinal_DOUBLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape, "\"", "&quot;");
  CharacterToEscape.f_namesToValuesMap__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CharacterToEscape;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!CharacterToEscape}*/
CharacterToEscape.$static_AMPERSAND__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape;
/**@private {!CharacterToEscape}*/
CharacterToEscape.$static_GREATER_THAN__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape;
/**@private {!CharacterToEscape}*/
CharacterToEscape.$static_LESS_THANT__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape;
/**@private {!CharacterToEscape}*/
CharacterToEscape.$static_SINGLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape;
/**@private {!CharacterToEscape}*/
CharacterToEscape.$static_DOUBLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape;
/**@type {Map<?string, !CharacterToEscape>}*/
CharacterToEscape.f_namesToValuesMap__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape_;
/**@const {number}*/
CharacterToEscape.$ordinal_AMPERSAND__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape = 0;
/**@const {number}*/
CharacterToEscape.$ordinal_GREATER_THAN__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape = 1;
/**@const {number}*/
CharacterToEscape.$ordinal_LESS_THANT__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape = 2;
/**@const {number}*/
CharacterToEscape.$ordinal_SINGLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape = 3;
/**@const {number}*/
CharacterToEscape.$ordinal_DOUBLE_QUOTE__org_pepstock_charba_client_dom_safehtml_SafeHtmlUtils_CharacterToEscape = 4;
$Util.$setClassMetadataForEnum(CharacterToEscape, "org.pepstock.charba.client.dom.safehtml.SafeHtmlUtils$CharacterToEscape");

exports = CharacterToEscape;

//# sourceMappingURL=SafeHtmlUtils$CharacterToEscape.js.map
