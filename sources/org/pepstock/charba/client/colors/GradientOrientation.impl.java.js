goog.module('org.pepstock.charba.client.colors.GradientOrientation$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {Enum<GradientOrientation>}
 * @implements {Key}
 */
class GradientOrientation extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_colors_GradientOrientation_;
  /**@type {GradientType}*/
  this.f_type__org_pepstock_charba_client_colors_GradientOrientation_;
  /**@type {?string}*/
  this.f_cssStatement__org_pepstock_charba_client_colors_GradientOrientation_;
 }
 /** @return {!GradientOrientation} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** GradientType */ type, /** ?string */ cssStatement) {
  let $instance = new GradientOrientation();
  $instance.$ctor__org_pepstock_charba_client_colors_GradientOrientation__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String($name, $ordinal, value, type, cssStatement);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_GradientOrientation__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** GradientType */ type, /** ?string */ cssStatement) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_colors_GradientOrientation_ = value;
  this.f_type__org_pepstock_charba_client_colors_GradientOrientation_ = type;
  this.f_cssStatement__org_pepstock_charba_client_colors_GradientOrientation_ = cssStatement;
 }
 /** @return {GradientType} */
 m_getType__() {
  return this.f_type__org_pepstock_charba_client_colors_GradientOrientation_;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_colors_GradientOrientation_;
 }
 /** @return {GradientOrientation} */
 static m_getDefaultByType__org_pepstock_charba_client_colors_GradientType(/** GradientType */ type) {
  GradientOrientation.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, type)) {
   return GradientOrientation.$static_TOP_DOWN__org_pepstock_charba_client_colors_GradientOrientation;
  } else {
   return GradientOrientation.$static_IN_OUT__org_pepstock_charba_client_colors_GradientOrientation;
  }
 }
 /** @return {?string} */
 m_getCssStatement__() {
  return this.f_cssStatement__org_pepstock_charba_client_colors_GradientOrientation_;
 }
 /** @return {!GradientOrientation} */
 static m_valueOf__java_lang_String(/** string */ name) {
  GradientOrientation.$clinit();
  if ($Equality.$same(GradientOrientation.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientOrientation_, null)) {
   GradientOrientation.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientOrientation_ = $Enums.createMapFromValues(GradientOrientation.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, GradientOrientation.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientOrientation_);
 }
 /** @return {!Array<!GradientOrientation>} */
 static m_values__() {
  GradientOrientation.$clinit();
  return /**@type {!Array<GradientOrientation>}*/ ($Arrays.$init([GradientOrientation.$static_TOP_DOWN__org_pepstock_charba_client_colors_GradientOrientation, GradientOrientation.$static_BOTTOM_UP__org_pepstock_charba_client_colors_GradientOrientation, GradientOrientation.$static_LEFT_RIGHT__org_pepstock_charba_client_colors_GradientOrientation, GradientOrientation.$static_RIGHT_LEFT__org_pepstock_charba_client_colors_GradientOrientation, GradientOrientation.$static_TOP_RIGHT__org_pepstock_charba_client_colors_GradientOrientation, GradientOrientation.$static_BOTTOM_LEFT__org_pepstock_charba_client_colors_GradientOrientation, GradientOrientation.$static_TOP_LEFT__org_pepstock_charba_client_colors_GradientOrientation, GradientOrientation.$static_BOTTOM_RIGHT__org_pepstock_charba_client_colors_GradientOrientation, GradientOrientation.$static_IN_OUT__org_pepstock_charba_client_colors_GradientOrientation, GradientOrientation.$static_OUT_IN__org_pepstock_charba_client_colors_GradientOrientation], GradientOrientation));
 }
 /** @return {!GradientOrientation} */
 static get f_TOP_DOWN__org_pepstock_charba_client_colors_GradientOrientation() {
  return (GradientOrientation.$clinit(), GradientOrientation.$static_TOP_DOWN__org_pepstock_charba_client_colors_GradientOrientation);
 }
 /** @return {!GradientOrientation} */
 static get f_BOTTOM_UP__org_pepstock_charba_client_colors_GradientOrientation() {
  return (GradientOrientation.$clinit(), GradientOrientation.$static_BOTTOM_UP__org_pepstock_charba_client_colors_GradientOrientation);
 }
 /** @return {!GradientOrientation} */
 static get f_LEFT_RIGHT__org_pepstock_charba_client_colors_GradientOrientation() {
  return (GradientOrientation.$clinit(), GradientOrientation.$static_LEFT_RIGHT__org_pepstock_charba_client_colors_GradientOrientation);
 }
 /** @return {!GradientOrientation} */
 static get f_RIGHT_LEFT__org_pepstock_charba_client_colors_GradientOrientation() {
  return (GradientOrientation.$clinit(), GradientOrientation.$static_RIGHT_LEFT__org_pepstock_charba_client_colors_GradientOrientation);
 }
 /** @return {!GradientOrientation} */
 static get f_TOP_RIGHT__org_pepstock_charba_client_colors_GradientOrientation() {
  return (GradientOrientation.$clinit(), GradientOrientation.$static_TOP_RIGHT__org_pepstock_charba_client_colors_GradientOrientation);
 }
 /** @return {!GradientOrientation} */
 static get f_BOTTOM_LEFT__org_pepstock_charba_client_colors_GradientOrientation() {
  return (GradientOrientation.$clinit(), GradientOrientation.$static_BOTTOM_LEFT__org_pepstock_charba_client_colors_GradientOrientation);
 }
 /** @return {!GradientOrientation} */
 static get f_TOP_LEFT__org_pepstock_charba_client_colors_GradientOrientation() {
  return (GradientOrientation.$clinit(), GradientOrientation.$static_TOP_LEFT__org_pepstock_charba_client_colors_GradientOrientation);
 }
 /** @return {!GradientOrientation} */
 static get f_BOTTOM_RIGHT__org_pepstock_charba_client_colors_GradientOrientation() {
  return (GradientOrientation.$clinit(), GradientOrientation.$static_BOTTOM_RIGHT__org_pepstock_charba_client_colors_GradientOrientation);
 }
 /** @return {!GradientOrientation} */
 static get f_IN_OUT__org_pepstock_charba_client_colors_GradientOrientation() {
  return (GradientOrientation.$clinit(), GradientOrientation.$static_IN_OUT__org_pepstock_charba_client_colors_GradientOrientation);
 }
 /** @return {!GradientOrientation} */
 static get f_OUT_IN__org_pepstock_charba_client_colors_GradientOrientation() {
  return (GradientOrientation.$clinit(), GradientOrientation.$static_OUT_IN__org_pepstock_charba_client_colors_GradientOrientation);
 }
 
 static $clinit() {
  GradientOrientation.$clinit = () =>{};
  GradientOrientation.$loadModules();
  Enum.$clinit();
  GradientOrientation.$static_TOP_DOWN__org_pepstock_charba_client_colors_GradientOrientation = GradientOrientation.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String($Util.$makeEnumName("TOP_DOWN"), GradientOrientation.$ordinal_TOP_DOWN__org_pepstock_charba_client_colors_GradientOrientation, "topDown", GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, "to bottom");
  GradientOrientation.$static_BOTTOM_UP__org_pepstock_charba_client_colors_GradientOrientation = GradientOrientation.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String($Util.$makeEnumName("BOTTOM_UP"), GradientOrientation.$ordinal_BOTTOM_UP__org_pepstock_charba_client_colors_GradientOrientation, "bottomUp", GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, "to top");
  GradientOrientation.$static_LEFT_RIGHT__org_pepstock_charba_client_colors_GradientOrientation = GradientOrientation.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String($Util.$makeEnumName("LEFT_RIGHT"), GradientOrientation.$ordinal_LEFT_RIGHT__org_pepstock_charba_client_colors_GradientOrientation, "leftRight", GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, "to right");
  GradientOrientation.$static_RIGHT_LEFT__org_pepstock_charba_client_colors_GradientOrientation = GradientOrientation.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String($Util.$makeEnumName("RIGHT_LEFT"), GradientOrientation.$ordinal_RIGHT_LEFT__org_pepstock_charba_client_colors_GradientOrientation, "rightLeft", GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, "to left");
  GradientOrientation.$static_TOP_RIGHT__org_pepstock_charba_client_colors_GradientOrientation = GradientOrientation.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String($Util.$makeEnumName("TOP_RIGHT"), GradientOrientation.$ordinal_TOP_RIGHT__org_pepstock_charba_client_colors_GradientOrientation, "topRight", GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, "to bottom right");
  GradientOrientation.$static_BOTTOM_LEFT__org_pepstock_charba_client_colors_GradientOrientation = GradientOrientation.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String($Util.$makeEnumName("BOTTOM_LEFT"), GradientOrientation.$ordinal_BOTTOM_LEFT__org_pepstock_charba_client_colors_GradientOrientation, "bottomLeft", GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, "to top left");
  GradientOrientation.$static_TOP_LEFT__org_pepstock_charba_client_colors_GradientOrientation = GradientOrientation.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String($Util.$makeEnumName("TOP_LEFT"), GradientOrientation.$ordinal_TOP_LEFT__org_pepstock_charba_client_colors_GradientOrientation, "topLeft", GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, "to bottom left");
  GradientOrientation.$static_BOTTOM_RIGHT__org_pepstock_charba_client_colors_GradientOrientation = GradientOrientation.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String($Util.$makeEnumName("BOTTOM_RIGHT"), GradientOrientation.$ordinal_BOTTOM_RIGHT__org_pepstock_charba_client_colors_GradientOrientation, "bottomRight", GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, "to top right");
  GradientOrientation.$static_IN_OUT__org_pepstock_charba_client_colors_GradientOrientation = GradientOrientation.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String($Util.$makeEnumName("IN_OUT"), GradientOrientation.$ordinal_IN_OUT__org_pepstock_charba_client_colors_GradientOrientation, "inOut", GradientType.f_RADIAL__org_pepstock_charba_client_colors_GradientType, "circle");
  GradientOrientation.$static_OUT_IN__org_pepstock_charba_client_colors_GradientOrientation = GradientOrientation.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_colors_GradientType__java_lang_String($Util.$makeEnumName("OUT_IN"), GradientOrientation.$ordinal_OUT_IN__org_pepstock_charba_client_colors_GradientOrientation, "outIn", GradientType.f_RADIAL__org_pepstock_charba_client_colors_GradientType, "circle");
  GradientOrientation.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientOrientation_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GradientOrientation;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  GradientType = goog.module.get('org.pepstock.charba.client.colors.GradientType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@private {!GradientOrientation}*/
GradientOrientation.$static_TOP_DOWN__org_pepstock_charba_client_colors_GradientOrientation;
/**@private {!GradientOrientation}*/
GradientOrientation.$static_BOTTOM_UP__org_pepstock_charba_client_colors_GradientOrientation;
/**@private {!GradientOrientation}*/
GradientOrientation.$static_LEFT_RIGHT__org_pepstock_charba_client_colors_GradientOrientation;
/**@private {!GradientOrientation}*/
GradientOrientation.$static_RIGHT_LEFT__org_pepstock_charba_client_colors_GradientOrientation;
/**@private {!GradientOrientation}*/
GradientOrientation.$static_TOP_RIGHT__org_pepstock_charba_client_colors_GradientOrientation;
/**@private {!GradientOrientation}*/
GradientOrientation.$static_BOTTOM_LEFT__org_pepstock_charba_client_colors_GradientOrientation;
/**@private {!GradientOrientation}*/
GradientOrientation.$static_TOP_LEFT__org_pepstock_charba_client_colors_GradientOrientation;
/**@private {!GradientOrientation}*/
GradientOrientation.$static_BOTTOM_RIGHT__org_pepstock_charba_client_colors_GradientOrientation;
/**@private {!GradientOrientation}*/
GradientOrientation.$static_IN_OUT__org_pepstock_charba_client_colors_GradientOrientation;
/**@private {!GradientOrientation}*/
GradientOrientation.$static_OUT_IN__org_pepstock_charba_client_colors_GradientOrientation;
/**@type {Map<?string, !GradientOrientation>}*/
GradientOrientation.f_namesToValuesMap__org_pepstock_charba_client_colors_GradientOrientation_;
/**@const {number}*/
GradientOrientation.$ordinal_TOP_DOWN__org_pepstock_charba_client_colors_GradientOrientation = 0;
/**@const {number}*/
GradientOrientation.$ordinal_BOTTOM_UP__org_pepstock_charba_client_colors_GradientOrientation = 1;
/**@const {number}*/
GradientOrientation.$ordinal_LEFT_RIGHT__org_pepstock_charba_client_colors_GradientOrientation = 2;
/**@const {number}*/
GradientOrientation.$ordinal_RIGHT_LEFT__org_pepstock_charba_client_colors_GradientOrientation = 3;
/**@const {number}*/
GradientOrientation.$ordinal_TOP_RIGHT__org_pepstock_charba_client_colors_GradientOrientation = 4;
/**@const {number}*/
GradientOrientation.$ordinal_BOTTOM_LEFT__org_pepstock_charba_client_colors_GradientOrientation = 5;
/**@const {number}*/
GradientOrientation.$ordinal_TOP_LEFT__org_pepstock_charba_client_colors_GradientOrientation = 6;
/**@const {number}*/
GradientOrientation.$ordinal_BOTTOM_RIGHT__org_pepstock_charba_client_colors_GradientOrientation = 7;
/**@const {number}*/
GradientOrientation.$ordinal_IN_OUT__org_pepstock_charba_client_colors_GradientOrientation = 8;
/**@const {number}*/
GradientOrientation.$ordinal_OUT_IN__org_pepstock_charba_client_colors_GradientOrientation = 9;
Key.$markImplementor(GradientOrientation);
$Util.$setClassMetadataForEnum(GradientOrientation, "org.pepstock.charba.client.colors.GradientOrientation");

exports = GradientOrientation;

//# sourceMappingURL=GradientOrientation.js.map
