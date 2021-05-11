goog.module('org.pepstock.charba.client.dom.enums.BorderStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<BorderStyle>}
 * @implements {Key}
 */
class BorderStyle extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_dom_enums_BorderStyle_;
 }
 /** @return {!BorderStyle} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new BorderStyle();
  $instance.$ctor__org_pepstock_charba_client_dom_enums_BorderStyle__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_enums_BorderStyle__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_dom_enums_BorderStyle_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_dom_enums_BorderStyle_;
 }
 /** @return {!BorderStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  BorderStyle.$clinit();
  if ($Equality.$same(BorderStyle.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_BorderStyle_, null)) {
   BorderStyle.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_BorderStyle_ = $Enums.createMapFromValues(BorderStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, BorderStyle.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_BorderStyle_);
 }
 /** @return {!Array<!BorderStyle>} */
 static m_values__() {
  BorderStyle.$clinit();
  return /**@type {!Array<BorderStyle>}*/ ($Arrays.$init([BorderStyle.$static_NONE__org_pepstock_charba_client_dom_enums_BorderStyle, BorderStyle.$static_DOTTED__org_pepstock_charba_client_dom_enums_BorderStyle, BorderStyle.$static_DASHED__org_pepstock_charba_client_dom_enums_BorderStyle, BorderStyle.$static_HIDDEN__org_pepstock_charba_client_dom_enums_BorderStyle, BorderStyle.$static_SOLID__org_pepstock_charba_client_dom_enums_BorderStyle, BorderStyle.$static_DOUBLE__org_pepstock_charba_client_dom_enums_BorderStyle, BorderStyle.$static_GROOVE__org_pepstock_charba_client_dom_enums_BorderStyle, BorderStyle.$static_RIDGE__org_pepstock_charba_client_dom_enums_BorderStyle, BorderStyle.$static_INSET__org_pepstock_charba_client_dom_enums_BorderStyle, BorderStyle.$static_OUTSET__org_pepstock_charba_client_dom_enums_BorderStyle], BorderStyle));
 }
 /** @return {!BorderStyle} */
 static get f_NONE__org_pepstock_charba_client_dom_enums_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$static_NONE__org_pepstock_charba_client_dom_enums_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_DOTTED__org_pepstock_charba_client_dom_enums_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$static_DOTTED__org_pepstock_charba_client_dom_enums_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_DASHED__org_pepstock_charba_client_dom_enums_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$static_DASHED__org_pepstock_charba_client_dom_enums_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_HIDDEN__org_pepstock_charba_client_dom_enums_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$static_HIDDEN__org_pepstock_charba_client_dom_enums_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_SOLID__org_pepstock_charba_client_dom_enums_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$static_SOLID__org_pepstock_charba_client_dom_enums_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_DOUBLE__org_pepstock_charba_client_dom_enums_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$static_DOUBLE__org_pepstock_charba_client_dom_enums_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_GROOVE__org_pepstock_charba_client_dom_enums_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$static_GROOVE__org_pepstock_charba_client_dom_enums_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_RIDGE__org_pepstock_charba_client_dom_enums_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$static_RIDGE__org_pepstock_charba_client_dom_enums_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_INSET__org_pepstock_charba_client_dom_enums_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$static_INSET__org_pepstock_charba_client_dom_enums_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_OUTSET__org_pepstock_charba_client_dom_enums_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$static_OUTSET__org_pepstock_charba_client_dom_enums_BorderStyle);
 }
 
 static $clinit() {
  BorderStyle.$clinit = () =>{};
  BorderStyle.$loadModules();
  Enum.$clinit();
  BorderStyle.$static_NONE__org_pepstock_charba_client_dom_enums_BorderStyle = BorderStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NONE"), BorderStyle.$ordinal_NONE__org_pepstock_charba_client_dom_enums_BorderStyle, "none");
  BorderStyle.$static_DOTTED__org_pepstock_charba_client_dom_enums_BorderStyle = BorderStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DOTTED"), BorderStyle.$ordinal_DOTTED__org_pepstock_charba_client_dom_enums_BorderStyle, "dotted");
  BorderStyle.$static_DASHED__org_pepstock_charba_client_dom_enums_BorderStyle = BorderStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DASHED"), BorderStyle.$ordinal_DASHED__org_pepstock_charba_client_dom_enums_BorderStyle, "dashed");
  BorderStyle.$static_HIDDEN__org_pepstock_charba_client_dom_enums_BorderStyle = BorderStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HIDDEN"), BorderStyle.$ordinal_HIDDEN__org_pepstock_charba_client_dom_enums_BorderStyle, "hidden");
  BorderStyle.$static_SOLID__org_pepstock_charba_client_dom_enums_BorderStyle = BorderStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SOLID"), BorderStyle.$ordinal_SOLID__org_pepstock_charba_client_dom_enums_BorderStyle, "solid");
  BorderStyle.$static_DOUBLE__org_pepstock_charba_client_dom_enums_BorderStyle = BorderStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DOUBLE"), BorderStyle.$ordinal_DOUBLE__org_pepstock_charba_client_dom_enums_BorderStyle, "double");
  BorderStyle.$static_GROOVE__org_pepstock_charba_client_dom_enums_BorderStyle = BorderStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GROOVE"), BorderStyle.$ordinal_GROOVE__org_pepstock_charba_client_dom_enums_BorderStyle, "groove");
  BorderStyle.$static_RIDGE__org_pepstock_charba_client_dom_enums_BorderStyle = BorderStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RIDGE"), BorderStyle.$ordinal_RIDGE__org_pepstock_charba_client_dom_enums_BorderStyle, "ridge");
  BorderStyle.$static_INSET__org_pepstock_charba_client_dom_enums_BorderStyle = BorderStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INSET"), BorderStyle.$ordinal_INSET__org_pepstock_charba_client_dom_enums_BorderStyle, "inset");
  BorderStyle.$static_OUTSET__org_pepstock_charba_client_dom_enums_BorderStyle = BorderStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OUTSET"), BorderStyle.$ordinal_OUTSET__org_pepstock_charba_client_dom_enums_BorderStyle, "outset");
  BorderStyle.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_BorderStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BorderStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!BorderStyle}*/
BorderStyle.$static_NONE__org_pepstock_charba_client_dom_enums_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$static_DOTTED__org_pepstock_charba_client_dom_enums_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$static_DASHED__org_pepstock_charba_client_dom_enums_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$static_HIDDEN__org_pepstock_charba_client_dom_enums_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$static_SOLID__org_pepstock_charba_client_dom_enums_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$static_DOUBLE__org_pepstock_charba_client_dom_enums_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$static_GROOVE__org_pepstock_charba_client_dom_enums_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$static_RIDGE__org_pepstock_charba_client_dom_enums_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$static_INSET__org_pepstock_charba_client_dom_enums_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$static_OUTSET__org_pepstock_charba_client_dom_enums_BorderStyle;
/**@type {Map<?string, !BorderStyle>}*/
BorderStyle.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_BorderStyle_;
/**@const {number}*/
BorderStyle.$ordinal_NONE__org_pepstock_charba_client_dom_enums_BorderStyle = 0;
/**@const {number}*/
BorderStyle.$ordinal_DOTTED__org_pepstock_charba_client_dom_enums_BorderStyle = 1;
/**@const {number}*/
BorderStyle.$ordinal_DASHED__org_pepstock_charba_client_dom_enums_BorderStyle = 2;
/**@const {number}*/
BorderStyle.$ordinal_HIDDEN__org_pepstock_charba_client_dom_enums_BorderStyle = 3;
/**@const {number}*/
BorderStyle.$ordinal_SOLID__org_pepstock_charba_client_dom_enums_BorderStyle = 4;
/**@const {number}*/
BorderStyle.$ordinal_DOUBLE__org_pepstock_charba_client_dom_enums_BorderStyle = 5;
/**@const {number}*/
BorderStyle.$ordinal_GROOVE__org_pepstock_charba_client_dom_enums_BorderStyle = 6;
/**@const {number}*/
BorderStyle.$ordinal_RIDGE__org_pepstock_charba_client_dom_enums_BorderStyle = 7;
/**@const {number}*/
BorderStyle.$ordinal_INSET__org_pepstock_charba_client_dom_enums_BorderStyle = 8;
/**@const {number}*/
BorderStyle.$ordinal_OUTSET__org_pepstock_charba_client_dom_enums_BorderStyle = 9;
Key.$markImplementor(BorderStyle);
$Util.$setClassMetadataForEnum(BorderStyle, "org.pepstock.charba.client.dom.enums.BorderStyle");

exports = BorderStyle;

//# sourceMappingURL=BorderStyle.js.map
