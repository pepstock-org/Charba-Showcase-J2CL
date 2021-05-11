goog.module('org.pepstock.charba.client.enums.PointStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<PointStyle>}
 * @implements {Key}
 */
class PointStyle extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_PointStyle_;
 }
 /** @return {!PointStyle} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new PointStyle();
  $instance.$ctor__org_pepstock_charba_client_enums_PointStyle__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_PointStyle__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_PointStyle_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_PointStyle_;
 }
 /** @return {!PointStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  PointStyle.$clinit();
  if ($Equality.$same(PointStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_PointStyle_, null)) {
   PointStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_PointStyle_ = $Enums.createMapFromValues(PointStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, PointStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_PointStyle_);
 }
 /** @return {!Array<!PointStyle>} */
 static m_values__() {
  PointStyle.$clinit();
  return /**@type {!Array<PointStyle>}*/ ($Arrays.$init([PointStyle.$static_CIRCLE__org_pepstock_charba_client_enums_PointStyle, PointStyle.$static_CROSS__org_pepstock_charba_client_enums_PointStyle, PointStyle.$static_CROSS_ROT__org_pepstock_charba_client_enums_PointStyle, PointStyle.$static_DASH__org_pepstock_charba_client_enums_PointStyle, PointStyle.$static_LINE__org_pepstock_charba_client_enums_PointStyle, PointStyle.$static_RECT__org_pepstock_charba_client_enums_PointStyle, PointStyle.$static_RECT_ROUNDED__org_pepstock_charba_client_enums_PointStyle, PointStyle.$static_RECT_ROT__org_pepstock_charba_client_enums_PointStyle, PointStyle.$static_STAR__org_pepstock_charba_client_enums_PointStyle, PointStyle.$static_TRIANGLE__org_pepstock_charba_client_enums_PointStyle], PointStyle));
 }
 /** @return {!PointStyle} */
 static get f_CIRCLE__org_pepstock_charba_client_enums_PointStyle() {
  return (PointStyle.$clinit(), PointStyle.$static_CIRCLE__org_pepstock_charba_client_enums_PointStyle);
 }
 /** @return {!PointStyle} */
 static get f_CROSS__org_pepstock_charba_client_enums_PointStyle() {
  return (PointStyle.$clinit(), PointStyle.$static_CROSS__org_pepstock_charba_client_enums_PointStyle);
 }
 /** @return {!PointStyle} */
 static get f_CROSS_ROT__org_pepstock_charba_client_enums_PointStyle() {
  return (PointStyle.$clinit(), PointStyle.$static_CROSS_ROT__org_pepstock_charba_client_enums_PointStyle);
 }
 /** @return {!PointStyle} */
 static get f_DASH__org_pepstock_charba_client_enums_PointStyle() {
  return (PointStyle.$clinit(), PointStyle.$static_DASH__org_pepstock_charba_client_enums_PointStyle);
 }
 /** @return {!PointStyle} */
 static get f_LINE__org_pepstock_charba_client_enums_PointStyle() {
  return (PointStyle.$clinit(), PointStyle.$static_LINE__org_pepstock_charba_client_enums_PointStyle);
 }
 /** @return {!PointStyle} */
 static get f_RECT__org_pepstock_charba_client_enums_PointStyle() {
  return (PointStyle.$clinit(), PointStyle.$static_RECT__org_pepstock_charba_client_enums_PointStyle);
 }
 /** @return {!PointStyle} */
 static get f_RECT_ROUNDED__org_pepstock_charba_client_enums_PointStyle() {
  return (PointStyle.$clinit(), PointStyle.$static_RECT_ROUNDED__org_pepstock_charba_client_enums_PointStyle);
 }
 /** @return {!PointStyle} */
 static get f_RECT_ROT__org_pepstock_charba_client_enums_PointStyle() {
  return (PointStyle.$clinit(), PointStyle.$static_RECT_ROT__org_pepstock_charba_client_enums_PointStyle);
 }
 /** @return {!PointStyle} */
 static get f_STAR__org_pepstock_charba_client_enums_PointStyle() {
  return (PointStyle.$clinit(), PointStyle.$static_STAR__org_pepstock_charba_client_enums_PointStyle);
 }
 /** @return {!PointStyle} */
 static get f_TRIANGLE__org_pepstock_charba_client_enums_PointStyle() {
  return (PointStyle.$clinit(), PointStyle.$static_TRIANGLE__org_pepstock_charba_client_enums_PointStyle);
 }
 
 static $clinit() {
  PointStyle.$clinit = () =>{};
  PointStyle.$loadModules();
  Enum.$clinit();
  PointStyle.$static_CIRCLE__org_pepstock_charba_client_enums_PointStyle = PointStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CIRCLE"), PointStyle.$ordinal_CIRCLE__org_pepstock_charba_client_enums_PointStyle, "circle");
  PointStyle.$static_CROSS__org_pepstock_charba_client_enums_PointStyle = PointStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CROSS"), PointStyle.$ordinal_CROSS__org_pepstock_charba_client_enums_PointStyle, "cross");
  PointStyle.$static_CROSS_ROT__org_pepstock_charba_client_enums_PointStyle = PointStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CROSS_ROT"), PointStyle.$ordinal_CROSS_ROT__org_pepstock_charba_client_enums_PointStyle, "crossRot");
  PointStyle.$static_DASH__org_pepstock_charba_client_enums_PointStyle = PointStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DASH"), PointStyle.$ordinal_DASH__org_pepstock_charba_client_enums_PointStyle, "dash");
  PointStyle.$static_LINE__org_pepstock_charba_client_enums_PointStyle = PointStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINE"), PointStyle.$ordinal_LINE__org_pepstock_charba_client_enums_PointStyle, "line");
  PointStyle.$static_RECT__org_pepstock_charba_client_enums_PointStyle = PointStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RECT"), PointStyle.$ordinal_RECT__org_pepstock_charba_client_enums_PointStyle, "rect");
  PointStyle.$static_RECT_ROUNDED__org_pepstock_charba_client_enums_PointStyle = PointStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RECT_ROUNDED"), PointStyle.$ordinal_RECT_ROUNDED__org_pepstock_charba_client_enums_PointStyle, "rectRounded");
  PointStyle.$static_RECT_ROT__org_pepstock_charba_client_enums_PointStyle = PointStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RECT_ROT"), PointStyle.$ordinal_RECT_ROT__org_pepstock_charba_client_enums_PointStyle, "rectRot");
  PointStyle.$static_STAR__org_pepstock_charba_client_enums_PointStyle = PointStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STAR"), PointStyle.$ordinal_STAR__org_pepstock_charba_client_enums_PointStyle, "star");
  PointStyle.$static_TRIANGLE__org_pepstock_charba_client_enums_PointStyle = PointStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TRIANGLE"), PointStyle.$ordinal_TRIANGLE__org_pepstock_charba_client_enums_PointStyle, "triangle");
  PointStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_PointStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!PointStyle}*/
PointStyle.$static_CIRCLE__org_pepstock_charba_client_enums_PointStyle;
/**@private {!PointStyle}*/
PointStyle.$static_CROSS__org_pepstock_charba_client_enums_PointStyle;
/**@private {!PointStyle}*/
PointStyle.$static_CROSS_ROT__org_pepstock_charba_client_enums_PointStyle;
/**@private {!PointStyle}*/
PointStyle.$static_DASH__org_pepstock_charba_client_enums_PointStyle;
/**@private {!PointStyle}*/
PointStyle.$static_LINE__org_pepstock_charba_client_enums_PointStyle;
/**@private {!PointStyle}*/
PointStyle.$static_RECT__org_pepstock_charba_client_enums_PointStyle;
/**@private {!PointStyle}*/
PointStyle.$static_RECT_ROUNDED__org_pepstock_charba_client_enums_PointStyle;
/**@private {!PointStyle}*/
PointStyle.$static_RECT_ROT__org_pepstock_charba_client_enums_PointStyle;
/**@private {!PointStyle}*/
PointStyle.$static_STAR__org_pepstock_charba_client_enums_PointStyle;
/**@private {!PointStyle}*/
PointStyle.$static_TRIANGLE__org_pepstock_charba_client_enums_PointStyle;
/**@type {Map<?string, !PointStyle>}*/
PointStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_PointStyle_;
/**@const {number}*/
PointStyle.$ordinal_CIRCLE__org_pepstock_charba_client_enums_PointStyle = 0;
/**@const {number}*/
PointStyle.$ordinal_CROSS__org_pepstock_charba_client_enums_PointStyle = 1;
/**@const {number}*/
PointStyle.$ordinal_CROSS_ROT__org_pepstock_charba_client_enums_PointStyle = 2;
/**@const {number}*/
PointStyle.$ordinal_DASH__org_pepstock_charba_client_enums_PointStyle = 3;
/**@const {number}*/
PointStyle.$ordinal_LINE__org_pepstock_charba_client_enums_PointStyle = 4;
/**@const {number}*/
PointStyle.$ordinal_RECT__org_pepstock_charba_client_enums_PointStyle = 5;
/**@const {number}*/
PointStyle.$ordinal_RECT_ROUNDED__org_pepstock_charba_client_enums_PointStyle = 6;
/**@const {number}*/
PointStyle.$ordinal_RECT_ROT__org_pepstock_charba_client_enums_PointStyle = 7;
/**@const {number}*/
PointStyle.$ordinal_STAR__org_pepstock_charba_client_enums_PointStyle = 8;
/**@const {number}*/
PointStyle.$ordinal_TRIANGLE__org_pepstock_charba_client_enums_PointStyle = 9;
Key.$markImplementor(PointStyle);
$Util.$setClassMetadataForEnum(PointStyle, "org.pepstock.charba.client.enums.PointStyle");

exports = PointStyle;

//# sourceMappingURL=PointStyle.js.map
