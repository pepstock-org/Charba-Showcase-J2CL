goog.module('org.pepstock.charba.client.enums.FontStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<FontStyle>}
 * @implements {Key}
 */
class FontStyle extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_FontStyle_;
 }
 /** @return {!FontStyle} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new FontStyle();
  $instance.$ctor__org_pepstock_charba_client_enums_FontStyle__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_FontStyle__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_FontStyle_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_FontStyle_;
 }
 /** @return {!FontStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  FontStyle.$clinit();
  if ($Equality.$same(FontStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_FontStyle_, null)) {
   FontStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_FontStyle_ = $Enums.createMapFromValues(FontStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, FontStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_FontStyle_);
 }
 /** @return {!Array<!FontStyle>} */
 static m_values__() {
  FontStyle.$clinit();
  return /**@type {!Array<FontStyle>}*/ ($Arrays.$init([FontStyle.$static_NORMAL__org_pepstock_charba_client_enums_FontStyle, FontStyle.$static_BOLD__org_pepstock_charba_client_enums_FontStyle, FontStyle.$static_OBLIQUE__org_pepstock_charba_client_enums_FontStyle, FontStyle.$static_ITALIC__org_pepstock_charba_client_enums_FontStyle], FontStyle));
 }
 /** @return {!FontStyle} */
 static get f_NORMAL__org_pepstock_charba_client_enums_FontStyle() {
  return (FontStyle.$clinit(), FontStyle.$static_NORMAL__org_pepstock_charba_client_enums_FontStyle);
 }
 /** @return {!FontStyle} */
 static get f_BOLD__org_pepstock_charba_client_enums_FontStyle() {
  return (FontStyle.$clinit(), FontStyle.$static_BOLD__org_pepstock_charba_client_enums_FontStyle);
 }
 /** @return {!FontStyle} */
 static get f_OBLIQUE__org_pepstock_charba_client_enums_FontStyle() {
  return (FontStyle.$clinit(), FontStyle.$static_OBLIQUE__org_pepstock_charba_client_enums_FontStyle);
 }
 /** @return {!FontStyle} */
 static get f_ITALIC__org_pepstock_charba_client_enums_FontStyle() {
  return (FontStyle.$clinit(), FontStyle.$static_ITALIC__org_pepstock_charba_client_enums_FontStyle);
 }
 
 static $clinit() {
  FontStyle.$clinit = () =>{};
  FontStyle.$loadModules();
  Enum.$clinit();
  FontStyle.$static_NORMAL__org_pepstock_charba_client_enums_FontStyle = FontStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NORMAL"), FontStyle.$ordinal_NORMAL__org_pepstock_charba_client_enums_FontStyle, "normal");
  FontStyle.$static_BOLD__org_pepstock_charba_client_enums_FontStyle = FontStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BOLD"), FontStyle.$ordinal_BOLD__org_pepstock_charba_client_enums_FontStyle, "bold");
  FontStyle.$static_OBLIQUE__org_pepstock_charba_client_enums_FontStyle = FontStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OBLIQUE"), FontStyle.$ordinal_OBLIQUE__org_pepstock_charba_client_enums_FontStyle, "oblique");
  FontStyle.$static_ITALIC__org_pepstock_charba_client_enums_FontStyle = FontStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ITALIC"), FontStyle.$ordinal_ITALIC__org_pepstock_charba_client_enums_FontStyle, "italic");
  FontStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_FontStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FontStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!FontStyle}*/
FontStyle.$static_NORMAL__org_pepstock_charba_client_enums_FontStyle;
/**@private {!FontStyle}*/
FontStyle.$static_BOLD__org_pepstock_charba_client_enums_FontStyle;
/**@private {!FontStyle}*/
FontStyle.$static_OBLIQUE__org_pepstock_charba_client_enums_FontStyle;
/**@private {!FontStyle}*/
FontStyle.$static_ITALIC__org_pepstock_charba_client_enums_FontStyle;
/**@type {Map<?string, !FontStyle>}*/
FontStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_FontStyle_;
/**@const {number}*/
FontStyle.$ordinal_NORMAL__org_pepstock_charba_client_enums_FontStyle = 0;
/**@const {number}*/
FontStyle.$ordinal_BOLD__org_pepstock_charba_client_enums_FontStyle = 1;
/**@const {number}*/
FontStyle.$ordinal_OBLIQUE__org_pepstock_charba_client_enums_FontStyle = 2;
/**@const {number}*/
FontStyle.$ordinal_ITALIC__org_pepstock_charba_client_enums_FontStyle = 3;
Key.$markImplementor(FontStyle);
$Util.$setClassMetadataForEnum(FontStyle, "org.pepstock.charba.client.enums.FontStyle");

exports = FontStyle;

//# sourceMappingURL=FontStyle.js.map
