goog.module('org.pepstock.charba.client.enums.ColorType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ColorType>}
 * @implements {Key}
 */
class ColorType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_ColorType_;
 }
 /** @return {!ColorType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new ColorType();
  $instance.$ctor__org_pepstock_charba_client_enums_ColorType__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_ColorType__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_ColorType_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_ColorType_;
 }
 /** @return {!ColorType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ColorType.$clinit();
  if ($Equality.$same(ColorType.f_namesToValuesMap__org_pepstock_charba_client_enums_ColorType_, null)) {
   ColorType.f_namesToValuesMap__org_pepstock_charba_client_enums_ColorType_ = $Enums.createMapFromValues(ColorType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ColorType.f_namesToValuesMap__org_pepstock_charba_client_enums_ColorType_);
 }
 /** @return {!Array<!ColorType>} */
 static m_values__() {
  ColorType.$clinit();
  return /**@type {!Array<ColorType>}*/ ($Arrays.$init([ColorType.$static_COLOR__org_pepstock_charba_client_enums_ColorType, ColorType.$static_PATTERN__org_pepstock_charba_client_enums_ColorType, ColorType.$static_GRADIENT__org_pepstock_charba_client_enums_ColorType], ColorType));
 }
 /** @return {!ColorType} */
 static get f_COLOR__org_pepstock_charba_client_enums_ColorType() {
  return (ColorType.$clinit(), ColorType.$static_COLOR__org_pepstock_charba_client_enums_ColorType);
 }
 /** @return {!ColorType} */
 static get f_PATTERN__org_pepstock_charba_client_enums_ColorType() {
  return (ColorType.$clinit(), ColorType.$static_PATTERN__org_pepstock_charba_client_enums_ColorType);
 }
 /** @return {!ColorType} */
 static get f_GRADIENT__org_pepstock_charba_client_enums_ColorType() {
  return (ColorType.$clinit(), ColorType.$static_GRADIENT__org_pepstock_charba_client_enums_ColorType);
 }
 
 static $clinit() {
  ColorType.$clinit = () =>{};
  ColorType.$loadModules();
  Enum.$clinit();
  ColorType.$static_COLOR__org_pepstock_charba_client_enums_ColorType = ColorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR"), ColorType.$ordinal_COLOR__org_pepstock_charba_client_enums_ColorType, "color");
  ColorType.$static_PATTERN__org_pepstock_charba_client_enums_ColorType = ColorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PATTERN"), ColorType.$ordinal_PATTERN__org_pepstock_charba_client_enums_ColorType, "pattern");
  ColorType.$static_GRADIENT__org_pepstock_charba_client_enums_ColorType = ColorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GRADIENT"), ColorType.$ordinal_GRADIENT__org_pepstock_charba_client_enums_ColorType, "gradient");
  ColorType.f_namesToValuesMap__org_pepstock_charba_client_enums_ColorType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ColorType}*/
ColorType.$static_COLOR__org_pepstock_charba_client_enums_ColorType;
/**@private {!ColorType}*/
ColorType.$static_PATTERN__org_pepstock_charba_client_enums_ColorType;
/**@private {!ColorType}*/
ColorType.$static_GRADIENT__org_pepstock_charba_client_enums_ColorType;
/**@type {Map<?string, !ColorType>}*/
ColorType.f_namesToValuesMap__org_pepstock_charba_client_enums_ColorType_;
/**@const {number}*/
ColorType.$ordinal_COLOR__org_pepstock_charba_client_enums_ColorType = 0;
/**@const {number}*/
ColorType.$ordinal_PATTERN__org_pepstock_charba_client_enums_ColorType = 1;
/**@const {number}*/
ColorType.$ordinal_GRADIENT__org_pepstock_charba_client_enums_ColorType = 2;
Key.$markImplementor(ColorType);
$Util.$setClassMetadataForEnum(ColorType, "org.pepstock.charba.client.enums.ColorType");

exports = ColorType;

//# sourceMappingURL=ColorType.js.map
