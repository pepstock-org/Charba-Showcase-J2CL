goog.module('org.pepstock.charba.client.options.AbstractScale.Property$impl');

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
  this.f_value__org_pepstock_charba_client_options_AbstractScale_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_options_AbstractScale_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractScale_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_options_AbstractScale_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_options_AbstractScale_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_options_AbstractScale_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_options_AbstractScale_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_options_AbstractScale_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_ALIGN_TO_PIXELS__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_TICKS__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_BOUNDS__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_POSITION__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_OFFSET__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_GRID__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_STACK__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_STACK_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_TITLE__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_BEGIN_AT_ZERO__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_GRACE__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_MIN__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_MAX__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_SUGGESTED_MAX__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_SUGGESTED_MIN__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_ADAPTERS__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_TIME__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_ANIMATE__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_ANGLE_LINES__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_POINT_LABELS__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_REVERSE__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_STACKED__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_START_ANGLE__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_CHARBA_MIN_INDEX__org_pepstock_charba_client_options_AbstractScale_Property, Property.$static_CHARBA_MAX_INDEX__org_pepstock_charba_client_options_AbstractScale_Property], Property));
 }
 /** @return {!Property} */
 static get f_ALIGN_TO_PIXELS__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_ALIGN_TO_PIXELS__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_TICKS__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_TICKS__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_BOUNDS__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_BOUNDS__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_POSITION__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_POSITION__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_OFFSET__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_OFFSET__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_GRID__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_GRID__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_STACK__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_STACK__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_STACK_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_STACK_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_TITLE__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_TITLE__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_BEGIN_AT_ZERO__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_BEGIN_AT_ZERO__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_GRACE__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_GRACE__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_MIN__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_MIN__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_MAX__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_MAX__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_SUGGESTED_MAX__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_SUGGESTED_MAX__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_SUGGESTED_MIN__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_SUGGESTED_MIN__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_ADAPTERS__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_ADAPTERS__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_TIME__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_TIME__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_ANIMATE__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_ANIMATE__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_ANGLE_LINES__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_ANGLE_LINES__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_POINT_LABELS__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_POINT_LABELS__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_REVERSE__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_REVERSE__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_STACKED__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_STACKED__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_START_ANGLE__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_START_ANGLE__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_MIN_INDEX__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_MIN_INDEX__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_MAX_INDEX__org_pepstock_charba_client_options_AbstractScale_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_MAX_INDEX__org_pepstock_charba_client_options_AbstractScale_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_ALIGN_TO_PIXELS__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALIGN_TO_PIXELS"), Property.$ordinal_ALIGN_TO_PIXELS__org_pepstock_charba_client_options_AbstractScale_Property, "alignToPixels");
  Property.$static_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DISPLAY"), Property.$ordinal_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property, "display");
  Property.$static_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WEIGHT"), Property.$ordinal_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property, "weight");
  Property.$static_TICKS__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TICKS"), Property.$ordinal_TICKS__org_pepstock_charba_client_options_AbstractScale_Property, "ticks");
  Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BACKGROUND_COLOR"), Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractScale_Property, "backgroundColor");
  Property.$static_BOUNDS__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BOUNDS"), Property.$ordinal_BOUNDS__org_pepstock_charba_client_options_AbstractScale_Property, "bounds");
  Property.$static_POSITION__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POSITION"), Property.$ordinal_POSITION__org_pepstock_charba_client_options_AbstractScale_Property, "position");
  Property.$static_OFFSET__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OFFSET"), Property.$ordinal_OFFSET__org_pepstock_charba_client_options_AbstractScale_Property, "offset");
  Property.$static_GRID__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GRID"), Property.$ordinal_GRID__org_pepstock_charba_client_options_AbstractScale_Property, "grid");
  Property.$static_STACK__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STACK"), Property.$ordinal_STACK__org_pepstock_charba_client_options_AbstractScale_Property, "stack");
  Property.$static_STACK_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STACK_WEIGHT"), Property.$ordinal_STACK_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property, "stackWeight");
  Property.$static_TITLE__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TITLE"), Property.$ordinal_TITLE__org_pepstock_charba_client_options_AbstractScale_Property, "title");
  Property.$static_BEGIN_AT_ZERO__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEGIN_AT_ZERO"), Property.$ordinal_BEGIN_AT_ZERO__org_pepstock_charba_client_options_AbstractScale_Property, "beginAtZero");
  Property.$static_GRACE__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GRACE"), Property.$ordinal_GRACE__org_pepstock_charba_client_options_AbstractScale_Property, "grace");
  Property.$static_MIN__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MIN"), Property.$ordinal_MIN__org_pepstock_charba_client_options_AbstractScale_Property, "min");
  Property.$static_MAX__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAX"), Property.$ordinal_MAX__org_pepstock_charba_client_options_AbstractScale_Property, "max");
  Property.$static_SUGGESTED_MAX__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SUGGESTED_MAX"), Property.$ordinal_SUGGESTED_MAX__org_pepstock_charba_client_options_AbstractScale_Property, "suggestedMax");
  Property.$static_SUGGESTED_MIN__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SUGGESTED_MIN"), Property.$ordinal_SUGGESTED_MIN__org_pepstock_charba_client_options_AbstractScale_Property, "suggestedMin");
  Property.$static_ADAPTERS__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ADAPTERS"), Property.$ordinal_ADAPTERS__org_pepstock_charba_client_options_AbstractScale_Property, "adapters");
  Property.$static_TIME__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TIME"), Property.$ordinal_TIME__org_pepstock_charba_client_options_AbstractScale_Property, "time");
  Property.$static_ANIMATE__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ANIMATE"), Property.$ordinal_ANIMATE__org_pepstock_charba_client_options_AbstractScale_Property, "animate");
  Property.$static_ANGLE_LINES__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ANGLE_LINES"), Property.$ordinal_ANGLE_LINES__org_pepstock_charba_client_options_AbstractScale_Property, "angleLines");
  Property.$static_POINT_LABELS__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_LABELS"), Property.$ordinal_POINT_LABELS__org_pepstock_charba_client_options_AbstractScale_Property, "pointLabels");
  Property.$static_REVERSE__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REVERSE"), Property.$ordinal_REVERSE__org_pepstock_charba_client_options_AbstractScale_Property, "reverse");
  Property.$static_STACKED__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STACKED"), Property.$ordinal_STACKED__org_pepstock_charba_client_options_AbstractScale_Property, "stacked");
  Property.$static_START_ANGLE__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("START_ANGLE"), Property.$ordinal_START_ANGLE__org_pepstock_charba_client_options_AbstractScale_Property, "startAngle");
  Property.$static_CHARBA_MIN_INDEX__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_MIN_INDEX"), Property.$ordinal_CHARBA_MIN_INDEX__org_pepstock_charba_client_options_AbstractScale_Property, "charbaMinIndex");
  Property.$static_CHARBA_MAX_INDEX__org_pepstock_charba_client_options_AbstractScale_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_MAX_INDEX"), Property.$ordinal_CHARBA_MAX_INDEX__org_pepstock_charba_client_options_AbstractScale_Property, "charbaMaxIndex");
  Property.f_namesToValuesMap__org_pepstock_charba_client_options_AbstractScale_Property_ = null;
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
Property.$static_ALIGN_TO_PIXELS__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_TICKS__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_BOUNDS__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_POSITION__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_OFFSET__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_GRID__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_STACK__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_STACK_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_TITLE__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_BEGIN_AT_ZERO__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_GRACE__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_MIN__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_MAX__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_SUGGESTED_MAX__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_SUGGESTED_MIN__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_ADAPTERS__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_TIME__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_ANIMATE__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_ANGLE_LINES__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_POINT_LABELS__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_REVERSE__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_STACKED__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_START_ANGLE__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_CHARBA_MIN_INDEX__org_pepstock_charba_client_options_AbstractScale_Property;
/**@private {!Property}*/
Property.$static_CHARBA_MAX_INDEX__org_pepstock_charba_client_options_AbstractScale_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_options_AbstractScale_Property_;
/**@const {number}*/
Property.$ordinal_ALIGN_TO_PIXELS__org_pepstock_charba_client_options_AbstractScale_Property = 0;
/**@const {number}*/
Property.$ordinal_DISPLAY__org_pepstock_charba_client_options_AbstractScale_Property = 1;
/**@const {number}*/
Property.$ordinal_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property = 2;
/**@const {number}*/
Property.$ordinal_TICKS__org_pepstock_charba_client_options_AbstractScale_Property = 3;
/**@const {number}*/
Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractScale_Property = 4;
/**@const {number}*/
Property.$ordinal_BOUNDS__org_pepstock_charba_client_options_AbstractScale_Property = 5;
/**@const {number}*/
Property.$ordinal_POSITION__org_pepstock_charba_client_options_AbstractScale_Property = 6;
/**@const {number}*/
Property.$ordinal_OFFSET__org_pepstock_charba_client_options_AbstractScale_Property = 7;
/**@const {number}*/
Property.$ordinal_GRID__org_pepstock_charba_client_options_AbstractScale_Property = 8;
/**@const {number}*/
Property.$ordinal_STACK__org_pepstock_charba_client_options_AbstractScale_Property = 9;
/**@const {number}*/
Property.$ordinal_STACK_WEIGHT__org_pepstock_charba_client_options_AbstractScale_Property = 10;
/**@const {number}*/
Property.$ordinal_TITLE__org_pepstock_charba_client_options_AbstractScale_Property = 11;
/**@const {number}*/
Property.$ordinal_BEGIN_AT_ZERO__org_pepstock_charba_client_options_AbstractScale_Property = 12;
/**@const {number}*/
Property.$ordinal_GRACE__org_pepstock_charba_client_options_AbstractScale_Property = 13;
/**@const {number}*/
Property.$ordinal_MIN__org_pepstock_charba_client_options_AbstractScale_Property = 14;
/**@const {number}*/
Property.$ordinal_MAX__org_pepstock_charba_client_options_AbstractScale_Property = 15;
/**@const {number}*/
Property.$ordinal_SUGGESTED_MAX__org_pepstock_charba_client_options_AbstractScale_Property = 16;
/**@const {number}*/
Property.$ordinal_SUGGESTED_MIN__org_pepstock_charba_client_options_AbstractScale_Property = 17;
/**@const {number}*/
Property.$ordinal_ADAPTERS__org_pepstock_charba_client_options_AbstractScale_Property = 18;
/**@const {number}*/
Property.$ordinal_TIME__org_pepstock_charba_client_options_AbstractScale_Property = 19;
/**@const {number}*/
Property.$ordinal_ANIMATE__org_pepstock_charba_client_options_AbstractScale_Property = 20;
/**@const {number}*/
Property.$ordinal_ANGLE_LINES__org_pepstock_charba_client_options_AbstractScale_Property = 21;
/**@const {number}*/
Property.$ordinal_POINT_LABELS__org_pepstock_charba_client_options_AbstractScale_Property = 22;
/**@const {number}*/
Property.$ordinal_REVERSE__org_pepstock_charba_client_options_AbstractScale_Property = 23;
/**@const {number}*/
Property.$ordinal_STACKED__org_pepstock_charba_client_options_AbstractScale_Property = 24;
/**@const {number}*/
Property.$ordinal_START_ANGLE__org_pepstock_charba_client_options_AbstractScale_Property = 25;
/**@const {number}*/
Property.$ordinal_CHARBA_MIN_INDEX__org_pepstock_charba_client_options_AbstractScale_Property = 26;
/**@const {number}*/
Property.$ordinal_CHARBA_MAX_INDEX__org_pepstock_charba_client_options_AbstractScale_Property = 27;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.options.AbstractScale$Property");

exports = Property;

//# sourceMappingURL=AbstractScale$Property.js.map
