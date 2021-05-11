goog.module('org.pepstock.charba.client.intl.enums.Style$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Style>}
 * @implements {Key}
 */
class Style extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_intl_enums_Style_;
 }
 /** @return {!Style} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Style();
  $instance.$ctor__org_pepstock_charba_client_intl_enums_Style__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_enums_Style__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_intl_enums_Style_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_intl_enums_Style_;
 }
 /** @return {!Style} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Style.$clinit();
  if ($Equality.$same(Style.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Style_, null)) {
   Style.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Style_ = $Enums.createMapFromValues(Style.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Style.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Style_);
 }
 /** @return {!Array<!Style>} */
 static m_values__() {
  Style.$clinit();
  return /**@type {!Array<Style>}*/ ($Arrays.$init([Style.$static_DECIMAL__org_pepstock_charba_client_intl_enums_Style, Style.$static_CURRENCY__org_pepstock_charba_client_intl_enums_Style, Style.$static_PERCENT__org_pepstock_charba_client_intl_enums_Style, Style.$static_UNIT__org_pepstock_charba_client_intl_enums_Style], Style));
 }
 /** @return {!Style} */
 static get f_DECIMAL__org_pepstock_charba_client_intl_enums_Style() {
  return (Style.$clinit(), Style.$static_DECIMAL__org_pepstock_charba_client_intl_enums_Style);
 }
 /** @return {!Style} */
 static get f_CURRENCY__org_pepstock_charba_client_intl_enums_Style() {
  return (Style.$clinit(), Style.$static_CURRENCY__org_pepstock_charba_client_intl_enums_Style);
 }
 /** @return {!Style} */
 static get f_PERCENT__org_pepstock_charba_client_intl_enums_Style() {
  return (Style.$clinit(), Style.$static_PERCENT__org_pepstock_charba_client_intl_enums_Style);
 }
 /** @return {!Style} */
 static get f_UNIT__org_pepstock_charba_client_intl_enums_Style() {
  return (Style.$clinit(), Style.$static_UNIT__org_pepstock_charba_client_intl_enums_Style);
 }
 
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
  Enum.$clinit();
  Style.$static_DECIMAL__org_pepstock_charba_client_intl_enums_Style = Style.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DECIMAL"), Style.$ordinal_DECIMAL__org_pepstock_charba_client_intl_enums_Style, "decimal");
  Style.$static_CURRENCY__org_pepstock_charba_client_intl_enums_Style = Style.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CURRENCY"), Style.$ordinal_CURRENCY__org_pepstock_charba_client_intl_enums_Style, "currency");
  Style.$static_PERCENT__org_pepstock_charba_client_intl_enums_Style = Style.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PERCENT"), Style.$ordinal_PERCENT__org_pepstock_charba_client_intl_enums_Style, "percent");
  Style.$static_UNIT__org_pepstock_charba_client_intl_enums_Style = Style.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UNIT"), Style.$ordinal_UNIT__org_pepstock_charba_client_intl_enums_Style, "unit");
  Style.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Style_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Style;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Style}*/
Style.$static_DECIMAL__org_pepstock_charba_client_intl_enums_Style;
/**@private {!Style}*/
Style.$static_CURRENCY__org_pepstock_charba_client_intl_enums_Style;
/**@private {!Style}*/
Style.$static_PERCENT__org_pepstock_charba_client_intl_enums_Style;
/**@private {!Style}*/
Style.$static_UNIT__org_pepstock_charba_client_intl_enums_Style;
/**@type {Map<?string, !Style>}*/
Style.f_namesToValuesMap__org_pepstock_charba_client_intl_enums_Style_;
/**@const {number}*/
Style.$ordinal_DECIMAL__org_pepstock_charba_client_intl_enums_Style = 0;
/**@const {number}*/
Style.$ordinal_CURRENCY__org_pepstock_charba_client_intl_enums_Style = 1;
/**@const {number}*/
Style.$ordinal_PERCENT__org_pepstock_charba_client_intl_enums_Style = 2;
/**@const {number}*/
Style.$ordinal_UNIT__org_pepstock_charba_client_intl_enums_Style = 3;
Key.$markImplementor(Style);
$Util.$setClassMetadataForEnum(Style, "org.pepstock.charba.client.intl.enums.Style");

exports = Style;

//# sourceMappingURL=Style.js.map
