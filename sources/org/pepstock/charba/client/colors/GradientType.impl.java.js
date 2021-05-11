goog.module('org.pepstock.charba.client.colors.GradientType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<GradientType>}
 * @implements {Key}
 */
class GradientType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_colors_GradientType_;
  /**@type {?string}*/
  this.f_cssStatement__org_pepstock_charba_client_colors_GradientType_;
 }
 /** @return {!GradientType} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ cssStatement) {
  let $instance = new GradientType();
  $instance.$ctor__org_pepstock_charba_client_colors_GradientType__java_lang_String__int__java_lang_String__java_lang_String($name, $ordinal, value, cssStatement);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_GradientType__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ?string */ cssStatement) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_colors_GradientType_ = value;
  this.f_cssStatement__org_pepstock_charba_client_colors_GradientType_ = cssStatement;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_colors_GradientType_;
 }
 /** @return {?string} */
 m_getCssStatement__() {
  return this.f_cssStatement__org_pepstock_charba_client_colors_GradientType_;
 }
 /** @return {!GradientType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  GradientType.$clinit();
  if ($Equality.$same(GradientType.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientType_, null)) {
   GradientType.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientType_ = $Enums.createMapFromValues(GradientType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, GradientType.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientType_);
 }
 /** @return {!Array<!GradientType>} */
 static m_values__() {
  GradientType.$clinit();
  return /**@type {!Array<GradientType>}*/ ($Arrays.$init([GradientType.$static_LINEAR__org_pepstock_charba_client_colors_GradientType, GradientType.$static_RADIAL__org_pepstock_charba_client_colors_GradientType], GradientType));
 }
 /** @return {!GradientType} */
 static get f_LINEAR__org_pepstock_charba_client_colors_GradientType() {
  return (GradientType.$clinit(), GradientType.$static_LINEAR__org_pepstock_charba_client_colors_GradientType);
 }
 /** @return {!GradientType} */
 static get f_RADIAL__org_pepstock_charba_client_colors_GradientType() {
  return (GradientType.$clinit(), GradientType.$static_RADIAL__org_pepstock_charba_client_colors_GradientType);
 }
 
 static $clinit() {
  GradientType.$clinit = () =>{};
  GradientType.$loadModules();
  Enum.$clinit();
  GradientType.$static_LINEAR__org_pepstock_charba_client_colors_GradientType = GradientType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("LINEAR"), GradientType.$ordinal_LINEAR__org_pepstock_charba_client_colors_GradientType, "linear", "linear-gradient");
  GradientType.$static_RADIAL__org_pepstock_charba_client_colors_GradientType = GradientType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("RADIAL"), GradientType.$ordinal_RADIAL__org_pepstock_charba_client_colors_GradientType, "radial", "radial-gradient");
  GradientType.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GradientType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!GradientType}*/
GradientType.$static_LINEAR__org_pepstock_charba_client_colors_GradientType;
/**@private {!GradientType}*/
GradientType.$static_RADIAL__org_pepstock_charba_client_colors_GradientType;
/**@type {Map<?string, !GradientType>}*/
GradientType.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientType_;
/**@const {number}*/
GradientType.$ordinal_LINEAR__org_pepstock_charba_client_colors_GradientType = 0;
/**@const {number}*/
GradientType.$ordinal_RADIAL__org_pepstock_charba_client_colors_GradientType = 1;
Key.$markImplementor(GradientType);
$Util.$setClassMetadataForEnum(GradientType, "org.pepstock.charba.client.colors.GradientType");

exports = GradientType;

//# sourceMappingURL=GradientType.js.map
