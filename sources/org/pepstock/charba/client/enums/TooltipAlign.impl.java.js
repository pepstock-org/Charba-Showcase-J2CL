goog.module('org.pepstock.charba.client.enums.TooltipAlign$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TooltipAlign>}
 * @implements {Key}
 */
class TooltipAlign extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_TooltipAlign_;
  /**@type {boolean}*/
  this.f_xValue__org_pepstock_charba_client_enums_TooltipAlign_ = false;
  /**@type {boolean}*/
  this.f_yValue__org_pepstock_charba_client_enums_TooltipAlign_ = false;
 }
 /** @return {!TooltipAlign} */
 static $create__java_lang_String__int__java_lang_String__boolean__boolean(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** boolean */ xValue, /** boolean */ yValue) {
  let $instance = new TooltipAlign();
  $instance.$ctor__org_pepstock_charba_client_enums_TooltipAlign__java_lang_String__int__java_lang_String__boolean__boolean($name, $ordinal, value, xValue, yValue);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_TooltipAlign__java_lang_String__int__java_lang_String__boolean__boolean(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** boolean */ xValue, /** boolean */ yValue) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_TooltipAlign_ = value;
  this.f_xValue__org_pepstock_charba_client_enums_TooltipAlign_ = xValue;
  this.f_yValue__org_pepstock_charba_client_enums_TooltipAlign_ = yValue;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_TooltipAlign_;
 }
 /** @return {boolean} */
 m_isHorizontal__() {
  return this.f_xValue__org_pepstock_charba_client_enums_TooltipAlign_;
 }
 /** @return {boolean} */
 m_isVertical__() {
  return this.f_yValue__org_pepstock_charba_client_enums_TooltipAlign_;
 }
 /** @return {!TooltipAlign} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TooltipAlign.$clinit();
  if ($Equality.$same(TooltipAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_TooltipAlign_, null)) {
   TooltipAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_TooltipAlign_ = $Enums.createMapFromValues(TooltipAlign.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TooltipAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_TooltipAlign_);
 }
 /** @return {!Array<!TooltipAlign>} */
 static m_values__() {
  TooltipAlign.$clinit();
  return /**@type {!Array<TooltipAlign>}*/ ($Arrays.$init([TooltipAlign.$static_CENTER__org_pepstock_charba_client_enums_TooltipAlign, TooltipAlign.$static_RIGHT__org_pepstock_charba_client_enums_TooltipAlign, TooltipAlign.$static_BOTTOM__org_pepstock_charba_client_enums_TooltipAlign, TooltipAlign.$static_LEFT__org_pepstock_charba_client_enums_TooltipAlign, TooltipAlign.$static_TOP__org_pepstock_charba_client_enums_TooltipAlign, TooltipAlign.$static_AUTO__org_pepstock_charba_client_enums_TooltipAlign], TooltipAlign));
 }
 /** @return {!TooltipAlign} */
 static get f_CENTER__org_pepstock_charba_client_enums_TooltipAlign() {
  return (TooltipAlign.$clinit(), TooltipAlign.$static_CENTER__org_pepstock_charba_client_enums_TooltipAlign);
 }
 /** @return {!TooltipAlign} */
 static get f_RIGHT__org_pepstock_charba_client_enums_TooltipAlign() {
  return (TooltipAlign.$clinit(), TooltipAlign.$static_RIGHT__org_pepstock_charba_client_enums_TooltipAlign);
 }
 /** @return {!TooltipAlign} */
 static get f_BOTTOM__org_pepstock_charba_client_enums_TooltipAlign() {
  return (TooltipAlign.$clinit(), TooltipAlign.$static_BOTTOM__org_pepstock_charba_client_enums_TooltipAlign);
 }
 /** @return {!TooltipAlign} */
 static get f_LEFT__org_pepstock_charba_client_enums_TooltipAlign() {
  return (TooltipAlign.$clinit(), TooltipAlign.$static_LEFT__org_pepstock_charba_client_enums_TooltipAlign);
 }
 /** @return {!TooltipAlign} */
 static get f_TOP__org_pepstock_charba_client_enums_TooltipAlign() {
  return (TooltipAlign.$clinit(), TooltipAlign.$static_TOP__org_pepstock_charba_client_enums_TooltipAlign);
 }
 /** @return {!TooltipAlign} */
 static get f_AUTO__org_pepstock_charba_client_enums_TooltipAlign() {
  return (TooltipAlign.$clinit(), TooltipAlign.$static_AUTO__org_pepstock_charba_client_enums_TooltipAlign);
 }
 
 static $clinit() {
  TooltipAlign.$clinit = () =>{};
  TooltipAlign.$loadModules();
  Enum.$clinit();
  TooltipAlign.$static_CENTER__org_pepstock_charba_client_enums_TooltipAlign = TooltipAlign.$create__java_lang_String__int__java_lang_String__boolean__boolean($Util.$makeEnumName("CENTER"), TooltipAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_TooltipAlign, "center", true, true);
  TooltipAlign.$static_RIGHT__org_pepstock_charba_client_enums_TooltipAlign = TooltipAlign.$create__java_lang_String__int__java_lang_String__boolean__boolean($Util.$makeEnumName("RIGHT"), TooltipAlign.$ordinal_RIGHT__org_pepstock_charba_client_enums_TooltipAlign, "right", true, false);
  TooltipAlign.$static_BOTTOM__org_pepstock_charba_client_enums_TooltipAlign = TooltipAlign.$create__java_lang_String__int__java_lang_String__boolean__boolean($Util.$makeEnumName("BOTTOM"), TooltipAlign.$ordinal_BOTTOM__org_pepstock_charba_client_enums_TooltipAlign, "bottom", false, true);
  TooltipAlign.$static_LEFT__org_pepstock_charba_client_enums_TooltipAlign = TooltipAlign.$create__java_lang_String__int__java_lang_String__boolean__boolean($Util.$makeEnumName("LEFT"), TooltipAlign.$ordinal_LEFT__org_pepstock_charba_client_enums_TooltipAlign, "left", true, false);
  TooltipAlign.$static_TOP__org_pepstock_charba_client_enums_TooltipAlign = TooltipAlign.$create__java_lang_String__int__java_lang_String__boolean__boolean($Util.$makeEnumName("TOP"), TooltipAlign.$ordinal_TOP__org_pepstock_charba_client_enums_TooltipAlign, "top", false, true);
  TooltipAlign.$static_AUTO__org_pepstock_charba_client_enums_TooltipAlign = TooltipAlign.$create__java_lang_String__int__java_lang_String__boolean__boolean($Util.$makeEnumName("AUTO"), TooltipAlign.$ordinal_AUTO__org_pepstock_charba_client_enums_TooltipAlign, "auto", false, false);
  TooltipAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_TooltipAlign_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipAlign;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TooltipAlign}*/
TooltipAlign.$static_CENTER__org_pepstock_charba_client_enums_TooltipAlign;
/**@private {!TooltipAlign}*/
TooltipAlign.$static_RIGHT__org_pepstock_charba_client_enums_TooltipAlign;
/**@private {!TooltipAlign}*/
TooltipAlign.$static_BOTTOM__org_pepstock_charba_client_enums_TooltipAlign;
/**@private {!TooltipAlign}*/
TooltipAlign.$static_LEFT__org_pepstock_charba_client_enums_TooltipAlign;
/**@private {!TooltipAlign}*/
TooltipAlign.$static_TOP__org_pepstock_charba_client_enums_TooltipAlign;
/**@private {!TooltipAlign}*/
TooltipAlign.$static_AUTO__org_pepstock_charba_client_enums_TooltipAlign;
/**@type {Map<?string, !TooltipAlign>}*/
TooltipAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_TooltipAlign_;
/**@const {number}*/
TooltipAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_TooltipAlign = 0;
/**@const {number}*/
TooltipAlign.$ordinal_RIGHT__org_pepstock_charba_client_enums_TooltipAlign = 1;
/**@const {number}*/
TooltipAlign.$ordinal_BOTTOM__org_pepstock_charba_client_enums_TooltipAlign = 2;
/**@const {number}*/
TooltipAlign.$ordinal_LEFT__org_pepstock_charba_client_enums_TooltipAlign = 3;
/**@const {number}*/
TooltipAlign.$ordinal_TOP__org_pepstock_charba_client_enums_TooltipAlign = 4;
/**@const {number}*/
TooltipAlign.$ordinal_AUTO__org_pepstock_charba_client_enums_TooltipAlign = 5;
Key.$markImplementor(TooltipAlign);
$Util.$setClassMetadataForEnum(TooltipAlign, "org.pepstock.charba.client.enums.TooltipAlign");

exports = TooltipAlign;

//# sourceMappingURL=TooltipAlign.js.map
