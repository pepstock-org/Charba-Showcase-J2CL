goog.module('org.pepstock.charba.client.intl.enums.StringItemStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<StringItemStyle>}
 * @implements {Key}
 */
class StringItemStyle extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_StringItemStyle_;
 }
 /** @return {!StringItemStyle} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new StringItemStyle();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_StringItemStyle__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_StringItemStyle__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_StringItemStyle_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_StringItemStyle_;
 }
 /** @return {!StringItemStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  StringItemStyle.$clinit();
  if ($Equality.$same(StringItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_StringItemStyle_, null)) {
   StringItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_StringItemStyle_ = $Enums.createMapFromValues(StringItemStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, StringItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_StringItemStyle_);
 }
 /** @return {!Array<!StringItemStyle>} */
 static m_values__() {
  StringItemStyle.$clinit();
  return /**@type {!Array<StringItemStyle>}*/ ($Arrays.$init([StringItemStyle.$static_NARROW__org_pepstock_charba_client_intl_enums_StringItemStyle, StringItemStyle.$static_LONG__org_pepstock_charba_client_intl_enums_StringItemStyle, StringItemStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_StringItemStyle], StringItemStyle));
 }
 /** @return {!StringItemStyle} */
 static get f_NARROW__org_pepstock_charba_client_intl_enums_StringItemStyle() {
  return (StringItemStyle.$clinit(), StringItemStyle.$static_NARROW__org_pepstock_charba_client_intl_enums_StringItemStyle);
 }
 /** @return {!StringItemStyle} */
 static get f_LONG__org_pepstock_charba_client_intl_enums_StringItemStyle() {
  return (StringItemStyle.$clinit(), StringItemStyle.$static_LONG__org_pepstock_charba_client_intl_enums_StringItemStyle);
 }
 /** @return {!StringItemStyle} */
 static get f_SHORT__org_pepstock_charba_client_intl_enums_StringItemStyle() {
  return (StringItemStyle.$clinit(), StringItemStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_StringItemStyle);
 }
 
 static $clinit() {
  StringItemStyle.$clinit = () =>{};
  StringItemStyle.$loadModules();
  Enum.$clinit();
  StringItemStyle.$static_NARROW__org_pepstock_charba_client_intl_enums_StringItemStyle = StringItemStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NARROW"), StringItemStyle.$ordinal_NARROW__org_pepstock_charba_client_intl_enums_StringItemStyle, "narrow");
  StringItemStyle.$static_LONG__org_pepstock_charba_client_intl_enums_StringItemStyle = StringItemStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LONG"), StringItemStyle.$ordinal_LONG__org_pepstock_charba_client_intl_enums_StringItemStyle, "long");
  StringItemStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_StringItemStyle = StringItemStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHORT"), StringItemStyle.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_StringItemStyle, "short");
  StringItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_StringItemStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StringItemStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!StringItemStyle}*/
StringItemStyle.$static_NARROW__org_pepstock_charba_client_intl_enums_StringItemStyle;
/**@private {!StringItemStyle}*/
StringItemStyle.$static_LONG__org_pepstock_charba_client_intl_enums_StringItemStyle;
/**@private {!StringItemStyle}*/
StringItemStyle.$static_SHORT__org_pepstock_charba_client_intl_enums_StringItemStyle;
/**@type {Map<?string, !StringItemStyle>}*/
StringItemStyle.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_StringItemStyle_;
/**@const {number}*/
StringItemStyle.$ordinal_NARROW__org_pepstock_charba_client_intl_enums_StringItemStyle = 0;
/**@const {number}*/
StringItemStyle.$ordinal_LONG__org_pepstock_charba_client_intl_enums_StringItemStyle = 1;
/**@const {number}*/
StringItemStyle.$ordinal_SHORT__org_pepstock_charba_client_intl_enums_StringItemStyle = 2;
Key.$markImplementor(StringItemStyle);
$Util.$setClassMetadataForEnum(StringItemStyle, "org.pepstock.charba.client.intl.enums.StringItemStyle");

exports = StringItemStyle;

//# sourceMappingURL=StringItemStyle.js.map
