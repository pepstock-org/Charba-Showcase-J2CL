goog.module('org.pepstock.charba.client.items.DatasetElementOptions.Property$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Property>}
 * @implements {Key}
 */
class Property extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_items_DatasetElementOptions_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetElementOptions_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_DatasetElementOptions_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_items_DatasetElementOptions_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_items_DatasetElementOptions_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetElementOptions_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetElementOptions_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetElementOptions_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_BORDER_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_BAR_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_CATEGORY_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_BORDER_ALIGN__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_WEIGHT__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_ANGLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_BORDER_SKIPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_TENSION__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_BORDER_DASH__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_CAP_BEZIER_POINTS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_FILL__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_STEPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_HIT_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_HOVER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_HOVER_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, Property.$static_ROTATION__org_pepstock_charba_client_items_DatasetElementOptions_Property], Property));
 }
 /** @return {!Property} */
 static get f_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_BORDER_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_BAR_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_BAR_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_CATEGORY_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_CATEGORY_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_ALIGN__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_BORDER_ALIGN__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_WEIGHT__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_WEIGHT__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_ANGLE__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_ANGLE__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_SKIPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_BORDER_SKIPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_TENSION__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_TENSION__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_CAP_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_DASH__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_BORDER_DASH__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_DASH_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_JOIN_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_CAP_BEZIER_POINTS__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_CAP_BEZIER_POINTS__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_FILL__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_FILL__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_STEPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_STEPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_HIT_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_HIT_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_HOVER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_HOVER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_HOVER_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 /** @return {!Property} */
 static get f_ROTATION__org_pepstock_charba_client_items_DatasetElementOptions_Property() {
  return (Property.$clinit(), Property.$static_ROTATION__org_pepstock_charba_client_items_DatasetElementOptions_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BACKGROUND_COLOR"), Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property, "backgroundColor");
  Property.$static_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_WIDTH"), Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property, "borderWidth");
  Property.$static_BORDER_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_COLOR"), Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property, "borderColor");
  Property.$static_BAR_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BAR_PERCENTAGE"), Property.$ordinal_BAR_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property, "barPercentage");
  Property.$static_CATEGORY_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CATEGORY_PERCENTAGE"), Property.$ordinal_CATEGORY_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property, "categoryPercentage");
  Property.$static_BORDER_ALIGN__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_ALIGN"), Property.$ordinal_BORDER_ALIGN__org_pepstock_charba_client_items_DatasetElementOptions_Property, "borderAlign");
  Property.$static_WEIGHT__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WEIGHT"), Property.$ordinal_WEIGHT__org_pepstock_charba_client_items_DatasetElementOptions_Property, "weight");
  Property.$static_ANGLE__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ANGLE"), Property.$ordinal_ANGLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, "angle");
  Property.$static_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OFFSET"), Property.$ordinal_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property, "offset");
  Property.$static_BORDER_SKIPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_SKIPPED"), Property.$ordinal_BORDER_SKIPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property, "borderSkipped");
  Property.$static_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_RADIUS"), Property.$ordinal_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, "borderRadius");
  Property.$static_TENSION__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TENSION"), Property.$ordinal_TENSION__org_pepstock_charba_client_items_DatasetElementOptions_Property, "tension");
  Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_CAP_STYLE"), Property.$ordinal_BORDER_CAP_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, "borderCapStyle");
  Property.$static_BORDER_DASH__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_DASH"), Property.$ordinal_BORDER_DASH__org_pepstock_charba_client_items_DatasetElementOptions_Property, "borderDash");
  Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_DASH_OFFSET"), Property.$ordinal_BORDER_DASH_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property, "borderDashOffset");
  Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_JOIN_STYLE"), Property.$ordinal_BORDER_JOIN_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, "borderJoinStyle");
  Property.$static_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CUBIC_INTERPOLATION_MODE"), Property.$ordinal_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_items_DatasetElementOptions_Property, "cubicInterpolationMode");
  Property.$static_CAP_BEZIER_POINTS__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CAP_BEZIER_POINTS"), Property.$ordinal_CAP_BEZIER_POINTS__org_pepstock_charba_client_items_DatasetElementOptions_Property, "capBezierPoints");
  Property.$static_FILL__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FILL"), Property.$ordinal_FILL__org_pepstock_charba_client_items_DatasetElementOptions_Property, "fill");
  Property.$static_STEPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STEPPED"), Property.$ordinal_STEPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property, "stepped");
  Property.$static_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RADIUS"), Property.$ordinal_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, "radius");
  Property.$static_HIT_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HIT_RADIUS"), Property.$ordinal_HIT_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, "hitRadius");
  Property.$static_HOVER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOVER_RADIUS"), Property.$ordinal_HOVER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property, "hoverRadius");
  Property.$static_HOVER_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOVER_BORDER_WIDTH"), Property.$ordinal_HOVER_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property, "hoverBorderWidth");
  Property.$static_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_STYLE"), Property.$ordinal_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property, "pointStyle");
  Property.$static_ROTATION__org_pepstock_charba_client_items_DatasetElementOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROTATION"), Property.$ordinal_ROTATION__org_pepstock_charba_client_items_DatasetElementOptions_Property, "rotation");
  Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetElementOptions_Property_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Property;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Property}*/
Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_BORDER_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_BAR_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_CATEGORY_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_BORDER_ALIGN__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_WEIGHT__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_ANGLE__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_BORDER_SKIPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_TENSION__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_BORDER_DASH__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_CAP_BEZIER_POINTS__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_FILL__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_STEPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_HIT_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_HOVER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_HOVER_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@private {!Property}*/
Property.$static_ROTATION__org_pepstock_charba_client_items_DatasetElementOptions_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetElementOptions_Property_;
/**@const {number}*/
Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property = 0;
/**@const {number}*/
Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property = 1;
/**@const {number}*/
Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_items_DatasetElementOptions_Property = 2;
/**@const {number}*/
Property.$ordinal_BAR_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property = 3;
/**@const {number}*/
Property.$ordinal_CATEGORY_PERCENTAGE__org_pepstock_charba_client_items_DatasetElementOptions_Property = 4;
/**@const {number}*/
Property.$ordinal_BORDER_ALIGN__org_pepstock_charba_client_items_DatasetElementOptions_Property = 5;
/**@const {number}*/
Property.$ordinal_WEIGHT__org_pepstock_charba_client_items_DatasetElementOptions_Property = 6;
/**@const {number}*/
Property.$ordinal_ANGLE__org_pepstock_charba_client_items_DatasetElementOptions_Property = 7;
/**@const {number}*/
Property.$ordinal_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property = 8;
/**@const {number}*/
Property.$ordinal_BORDER_SKIPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property = 9;
/**@const {number}*/
Property.$ordinal_BORDER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property = 10;
/**@const {number}*/
Property.$ordinal_TENSION__org_pepstock_charba_client_items_DatasetElementOptions_Property = 11;
/**@const {number}*/
Property.$ordinal_BORDER_CAP_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property = 12;
/**@const {number}*/
Property.$ordinal_BORDER_DASH__org_pepstock_charba_client_items_DatasetElementOptions_Property = 13;
/**@const {number}*/
Property.$ordinal_BORDER_DASH_OFFSET__org_pepstock_charba_client_items_DatasetElementOptions_Property = 14;
/**@const {number}*/
Property.$ordinal_BORDER_JOIN_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property = 15;
/**@const {number}*/
Property.$ordinal_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_items_DatasetElementOptions_Property = 16;
/**@const {number}*/
Property.$ordinal_CAP_BEZIER_POINTS__org_pepstock_charba_client_items_DatasetElementOptions_Property = 17;
/**@const {number}*/
Property.$ordinal_FILL__org_pepstock_charba_client_items_DatasetElementOptions_Property = 18;
/**@const {number}*/
Property.$ordinal_STEPPED__org_pepstock_charba_client_items_DatasetElementOptions_Property = 19;
/**@const {number}*/
Property.$ordinal_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property = 20;
/**@const {number}*/
Property.$ordinal_HIT_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property = 21;
/**@const {number}*/
Property.$ordinal_HOVER_RADIUS__org_pepstock_charba_client_items_DatasetElementOptions_Property = 22;
/**@const {number}*/
Property.$ordinal_HOVER_BORDER_WIDTH__org_pepstock_charba_client_items_DatasetElementOptions_Property = 23;
/**@const {number}*/
Property.$ordinal_POINT_STYLE__org_pepstock_charba_client_items_DatasetElementOptions_Property = 24;
/**@const {number}*/
Property.$ordinal_ROTATION__org_pepstock_charba_client_items_DatasetElementOptions_Property = 25;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.items.DatasetElementOptions$Property");

exports = Property;

//# sourceMappingURL=DatasetElementOptions$Property.js.map
