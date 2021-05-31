goog.module('org.pepstock.charba.client.options.Ticks.Property$impl');

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
  this.f_value__org_pepstock_charba_client_options_Ticks_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_options_Ticks_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Ticks_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_options_Ticks_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_options_Ticks_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_options_Ticks_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_options_Ticks_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_options_Ticks_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_DISPLAY__org_pepstock_charba_client_options_Ticks_Property, Property.$static_MAJOR__org_pepstock_charba_client_options_Ticks_Property, Property.$static_PADDING__org_pepstock_charba_client_options_Ticks_Property, Property.$static_TEXT_STROKE_COLOR__org_pepstock_charba_client_options_Ticks_Property, Property.$static_TEXT_STROKE_WIDTH__org_pepstock_charba_client_options_Ticks_Property, Property.$static_Z__org_pepstock_charba_client_options_Ticks_Property, Property.$static_AUTO_SKIP__org_pepstock_charba_client_options_Ticks_Property, Property.$static_AUTO_SKIP_PADDING__org_pepstock_charba_client_options_Ticks_Property, Property.$static_ALIGN__org_pepstock_charba_client_options_Ticks_Property, Property.$static_CROSS_ALIGN__org_pepstock_charba_client_options_Ticks_Property, Property.$static_INCLUDE_BOUNDS__org_pepstock_charba_client_options_Ticks_Property, Property.$static_LABEL_OFFSET__org_pepstock_charba_client_options_Ticks_Property, Property.$static_MAX_ROTATION__org_pepstock_charba_client_options_Ticks_Property, Property.$static_MIN_ROTATION__org_pepstock_charba_client_options_Ticks_Property, Property.$static_MIRROR__org_pepstock_charba_client_options_Ticks_Property, Property.$static_SAMPLE_SIZE__org_pepstock_charba_client_options_Ticks_Property, Property.$static_FORMAT__org_pepstock_charba_client_options_Ticks_Property, Property.$static_COUNT__org_pepstock_charba_client_options_Ticks_Property, Property.$static_MAX_TICKS_LIMIT__org_pepstock_charba_client_options_Ticks_Property, Property.$static_PRECISION__org_pepstock_charba_client_options_Ticks_Property, Property.$static_STEP_SIZE__org_pepstock_charba_client_options_Ticks_Property, Property.$static_BACKDROP_COLOR__org_pepstock_charba_client_options_Ticks_Property, Property.$static_BACKDROP_PADDING__org_pepstock_charba_client_options_Ticks_Property, Property.$static_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_options_Ticks_Property, Property.$static_SOURCE__org_pepstock_charba_client_options_Ticks_Property], Property));
 }
 /** @return {!Property} */
 static get f_DISPLAY__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_DISPLAY__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_MAJOR__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_MAJOR__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_PADDING__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_PADDING__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_TEXT_STROKE_COLOR__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_TEXT_STROKE_COLOR__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_TEXT_STROKE_WIDTH__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_TEXT_STROKE_WIDTH__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_Z__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_Z__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_AUTO_SKIP__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_AUTO_SKIP__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_AUTO_SKIP_PADDING__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_AUTO_SKIP_PADDING__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_ALIGN__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_ALIGN__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_CROSS_ALIGN__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_CROSS_ALIGN__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_INCLUDE_BOUNDS__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_INCLUDE_BOUNDS__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_OFFSET__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_LABEL_OFFSET__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_MAX_ROTATION__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_MAX_ROTATION__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_MIN_ROTATION__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_MIN_ROTATION__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_MIRROR__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_MIRROR__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_SAMPLE_SIZE__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_SAMPLE_SIZE__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_FORMAT__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_FORMAT__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_COUNT__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_COUNT__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_MAX_TICKS_LIMIT__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_MAX_TICKS_LIMIT__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_PRECISION__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_PRECISION__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_STEP_SIZE__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_STEP_SIZE__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_BACKDROP_COLOR__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_BACKDROP_COLOR__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_BACKDROP_PADDING__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_BACKDROP_PADDING__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_options_Ticks_Property);
 }
 /** @return {!Property} */
 static get f_SOURCE__org_pepstock_charba_client_options_Ticks_Property() {
  return (Property.$clinit(), Property.$static_SOURCE__org_pepstock_charba_client_options_Ticks_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_DISPLAY__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DISPLAY"), Property.$ordinal_DISPLAY__org_pepstock_charba_client_options_Ticks_Property, "display");
  Property.$static_MAJOR__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAJOR"), Property.$ordinal_MAJOR__org_pepstock_charba_client_options_Ticks_Property, "major");
  Property.$static_PADDING__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PADDING"), Property.$ordinal_PADDING__org_pepstock_charba_client_options_Ticks_Property, "padding");
  Property.$static_TEXT_STROKE_COLOR__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT_STROKE_COLOR"), Property.$ordinal_TEXT_STROKE_COLOR__org_pepstock_charba_client_options_Ticks_Property, "textStrokeColor");
  Property.$static_TEXT_STROKE_WIDTH__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT_STROKE_WIDTH"), Property.$ordinal_TEXT_STROKE_WIDTH__org_pepstock_charba_client_options_Ticks_Property, "textStrokeWidth");
  Property.$static_Z__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Z"), Property.$ordinal_Z__org_pepstock_charba_client_options_Ticks_Property, "z");
  Property.$static_AUTO_SKIP__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AUTO_SKIP"), Property.$ordinal_AUTO_SKIP__org_pepstock_charba_client_options_Ticks_Property, "autoSkip");
  Property.$static_AUTO_SKIP_PADDING__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AUTO_SKIP_PADDING"), Property.$ordinal_AUTO_SKIP_PADDING__org_pepstock_charba_client_options_Ticks_Property, "autoSkipPadding");
  Property.$static_ALIGN__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALIGN"), Property.$ordinal_ALIGN__org_pepstock_charba_client_options_Ticks_Property, "align");
  Property.$static_CROSS_ALIGN__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CROSS_ALIGN"), Property.$ordinal_CROSS_ALIGN__org_pepstock_charba_client_options_Ticks_Property, "crossAlign");
  Property.$static_INCLUDE_BOUNDS__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INCLUDE_BOUNDS"), Property.$ordinal_INCLUDE_BOUNDS__org_pepstock_charba_client_options_Ticks_Property, "includeBounds");
  Property.$static_LABEL_OFFSET__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_OFFSET"), Property.$ordinal_LABEL_OFFSET__org_pepstock_charba_client_options_Ticks_Property, "labelOffset");
  Property.$static_MAX_ROTATION__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAX_ROTATION"), Property.$ordinal_MAX_ROTATION__org_pepstock_charba_client_options_Ticks_Property, "maxRotation");
  Property.$static_MIN_ROTATION__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MIN_ROTATION"), Property.$ordinal_MIN_ROTATION__org_pepstock_charba_client_options_Ticks_Property, "minRotation");
  Property.$static_MIRROR__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MIRROR"), Property.$ordinal_MIRROR__org_pepstock_charba_client_options_Ticks_Property, "mirror");
  Property.$static_SAMPLE_SIZE__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SAMPLE_SIZE"), Property.$ordinal_SAMPLE_SIZE__org_pepstock_charba_client_options_Ticks_Property, "sampleSize");
  Property.$static_FORMAT__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FORMAT"), Property.$ordinal_FORMAT__org_pepstock_charba_client_options_Ticks_Property, "format");
  Property.$static_COUNT__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COUNT"), Property.$ordinal_COUNT__org_pepstock_charba_client_options_Ticks_Property, "count");
  Property.$static_MAX_TICKS_LIMIT__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAX_TICKS_LIMIT"), Property.$ordinal_MAX_TICKS_LIMIT__org_pepstock_charba_client_options_Ticks_Property, "maxTicksLimit");
  Property.$static_PRECISION__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PRECISION"), Property.$ordinal_PRECISION__org_pepstock_charba_client_options_Ticks_Property, "precision");
  Property.$static_STEP_SIZE__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STEP_SIZE"), Property.$ordinal_STEP_SIZE__org_pepstock_charba_client_options_Ticks_Property, "stepSize");
  Property.$static_BACKDROP_COLOR__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BACKDROP_COLOR"), Property.$ordinal_BACKDROP_COLOR__org_pepstock_charba_client_options_Ticks_Property, "backdropColor");
  Property.$static_BACKDROP_PADDING__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BACKDROP_PADDING"), Property.$ordinal_BACKDROP_PADDING__org_pepstock_charba_client_options_Ticks_Property, "backdropPadding");
  Property.$static_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHOW_LABEL_BACKDROP"), Property.$ordinal_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_options_Ticks_Property, "showLabelBackdrop");
  Property.$static_SOURCE__org_pepstock_charba_client_options_Ticks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SOURCE"), Property.$ordinal_SOURCE__org_pepstock_charba_client_options_Ticks_Property, "source");
  Property.f_namesToValuesMap__org_pepstock_charba_client_options_Ticks_Property_ = null;
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
Property.$static_DISPLAY__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_MAJOR__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_PADDING__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_TEXT_STROKE_COLOR__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_TEXT_STROKE_WIDTH__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_Z__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_AUTO_SKIP__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_AUTO_SKIP_PADDING__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_ALIGN__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_CROSS_ALIGN__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_INCLUDE_BOUNDS__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_LABEL_OFFSET__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_MAX_ROTATION__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_MIN_ROTATION__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_MIRROR__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_SAMPLE_SIZE__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_FORMAT__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_COUNT__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_MAX_TICKS_LIMIT__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_PRECISION__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_STEP_SIZE__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_BACKDROP_COLOR__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_BACKDROP_PADDING__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_options_Ticks_Property;
/**@private {!Property}*/
Property.$static_SOURCE__org_pepstock_charba_client_options_Ticks_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_options_Ticks_Property_;
/**@const {number}*/
Property.$ordinal_DISPLAY__org_pepstock_charba_client_options_Ticks_Property = 0;
/**@const {number}*/
Property.$ordinal_MAJOR__org_pepstock_charba_client_options_Ticks_Property = 1;
/**@const {number}*/
Property.$ordinal_PADDING__org_pepstock_charba_client_options_Ticks_Property = 2;
/**@const {number}*/
Property.$ordinal_TEXT_STROKE_COLOR__org_pepstock_charba_client_options_Ticks_Property = 3;
/**@const {number}*/
Property.$ordinal_TEXT_STROKE_WIDTH__org_pepstock_charba_client_options_Ticks_Property = 4;
/**@const {number}*/
Property.$ordinal_Z__org_pepstock_charba_client_options_Ticks_Property = 5;
/**@const {number}*/
Property.$ordinal_AUTO_SKIP__org_pepstock_charba_client_options_Ticks_Property = 6;
/**@const {number}*/
Property.$ordinal_AUTO_SKIP_PADDING__org_pepstock_charba_client_options_Ticks_Property = 7;
/**@const {number}*/
Property.$ordinal_ALIGN__org_pepstock_charba_client_options_Ticks_Property = 8;
/**@const {number}*/
Property.$ordinal_CROSS_ALIGN__org_pepstock_charba_client_options_Ticks_Property = 9;
/**@const {number}*/
Property.$ordinal_INCLUDE_BOUNDS__org_pepstock_charba_client_options_Ticks_Property = 10;
/**@const {number}*/
Property.$ordinal_LABEL_OFFSET__org_pepstock_charba_client_options_Ticks_Property = 11;
/**@const {number}*/
Property.$ordinal_MAX_ROTATION__org_pepstock_charba_client_options_Ticks_Property = 12;
/**@const {number}*/
Property.$ordinal_MIN_ROTATION__org_pepstock_charba_client_options_Ticks_Property = 13;
/**@const {number}*/
Property.$ordinal_MIRROR__org_pepstock_charba_client_options_Ticks_Property = 14;
/**@const {number}*/
Property.$ordinal_SAMPLE_SIZE__org_pepstock_charba_client_options_Ticks_Property = 15;
/**@const {number}*/
Property.$ordinal_FORMAT__org_pepstock_charba_client_options_Ticks_Property = 16;
/**@const {number}*/
Property.$ordinal_COUNT__org_pepstock_charba_client_options_Ticks_Property = 17;
/**@const {number}*/
Property.$ordinal_MAX_TICKS_LIMIT__org_pepstock_charba_client_options_Ticks_Property = 18;
/**@const {number}*/
Property.$ordinal_PRECISION__org_pepstock_charba_client_options_Ticks_Property = 19;
/**@const {number}*/
Property.$ordinal_STEP_SIZE__org_pepstock_charba_client_options_Ticks_Property = 20;
/**@const {number}*/
Property.$ordinal_BACKDROP_COLOR__org_pepstock_charba_client_options_Ticks_Property = 21;
/**@const {number}*/
Property.$ordinal_BACKDROP_PADDING__org_pepstock_charba_client_options_Ticks_Property = 22;
/**@const {number}*/
Property.$ordinal_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_options_Ticks_Property = 23;
/**@const {number}*/
Property.$ordinal_SOURCE__org_pepstock_charba_client_options_Ticks_Property = 24;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.options.Ticks$Property");

exports = Property;

//# sourceMappingURL=Ticks$Property.js.map
