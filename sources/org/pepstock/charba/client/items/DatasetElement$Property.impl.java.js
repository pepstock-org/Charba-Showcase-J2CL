goog.module('org.pepstock.charba.client.items.DatasetElement.Property$impl');

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
  this.f_value__org_pepstock_charba_client_items_DatasetElement_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetElement_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_DatasetElement_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_items_DatasetElement_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_items_DatasetElement_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetElement_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetElement_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetElement_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_ACTIVE__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_X__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_Y__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_OPTIONS__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_PARSED__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_BASE__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_HEIGHT__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_HORIZONTAL__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_WIDTH__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_END_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_INNER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_OUTER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_START_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_SKIP__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_STOP__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_CONTROL_POINT_PREVIOUS_X__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_CONTROL_POINT_PREVIOUS_Y__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_CONTROL_POINT_NEXT_X__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_CONTROL_POINT_NEXT_Y__org_pepstock_charba_client_items_DatasetElement_Property, Property.$static_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property], Property));
 }
 /** @return {!Property} */
 static get f_ACTIVE__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_ACTIVE__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_X__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_X__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_Y__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_Y__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_OPTIONS__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_OPTIONS__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_PARSED__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_PARSED__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_BASE__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_BASE__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_HEIGHT__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_HEIGHT__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_HORIZONTAL__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_HORIZONTAL__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_WIDTH__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_WIDTH__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_CIRCUMFERENCE__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_END_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_END_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_INNER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_INNER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_OUTER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_OUTER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_START_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_START_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_SKIP__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_SKIP__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_STOP__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_STOP__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_CONTROL_POINT_PREVIOUS_X__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_CONTROL_POINT_PREVIOUS_X__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_CONTROL_POINT_PREVIOUS_Y__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_CONTROL_POINT_PREVIOUS_Y__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_CONTROL_POINT_NEXT_X__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_CONTROL_POINT_NEXT_X__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_CONTROL_POINT_NEXT_Y__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_CONTROL_POINT_NEXT_Y__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 /** @return {!Property} */
 static get f_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property() {
  return (Property.$clinit(), Property.$static_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_ACTIVE__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ACTIVE"), Property.$ordinal_ACTIVE__org_pepstock_charba_client_items_DatasetElement_Property, "active");
  Property.$static_X__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X"), Property.$ordinal_X__org_pepstock_charba_client_items_DatasetElement_Property, "x");
  Property.$static_Y__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y"), Property.$ordinal_Y__org_pepstock_charba_client_items_DatasetElement_Property, "y");
  Property.$static_OPTIONS__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OPTIONS"), Property.$ordinal_OPTIONS__org_pepstock_charba_client_items_DatasetElement_Property, "options");
  Property.$static_PARSED__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PARSED"), Property.$ordinal_PARSED__org_pepstock_charba_client_items_DatasetElement_Property, "parsed");
  Property.$static_BASE__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BASE"), Property.$ordinal_BASE__org_pepstock_charba_client_items_DatasetElement_Property, "base");
  Property.$static_HEIGHT__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HEIGHT"), Property.$ordinal_HEIGHT__org_pepstock_charba_client_items_DatasetElement_Property, "height");
  Property.$static_HORIZONTAL__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HORIZONTAL"), Property.$ordinal_HORIZONTAL__org_pepstock_charba_client_items_DatasetElement_Property, "horizontal");
  Property.$static_WIDTH__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WIDTH"), Property.$ordinal_WIDTH__org_pepstock_charba_client_items_DatasetElement_Property, "width");
  Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CIRCUMFERENCE"), Property.$ordinal_CIRCUMFERENCE__org_pepstock_charba_client_items_DatasetElement_Property, "circumference");
  Property.$static_END_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("END_ANGLE"), Property.$ordinal_END_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property, "endAngle");
  Property.$static_INNER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INNER_RADIUS"), Property.$ordinal_INNER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property, "innerRadius");
  Property.$static_OUTER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OUTER_RADIUS"), Property.$ordinal_OUTER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property, "outerRadius");
  Property.$static_START_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("START_ANGLE"), Property.$ordinal_START_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property, "startAngle");
  Property.$static_SKIP__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SKIP"), Property.$ordinal_SKIP__org_pepstock_charba_client_items_DatasetElement_Property, "skip");
  Property.$static_STOP__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STOP"), Property.$ordinal_STOP__org_pepstock_charba_client_items_DatasetElement_Property, "stop");
  Property.$static_CONTROL_POINT_PREVIOUS_X__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTROL_POINT_PREVIOUS_X"), Property.$ordinal_CONTROL_POINT_PREVIOUS_X__org_pepstock_charba_client_items_DatasetElement_Property, "cp1x");
  Property.$static_CONTROL_POINT_PREVIOUS_Y__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTROL_POINT_PREVIOUS_Y"), Property.$ordinal_CONTROL_POINT_PREVIOUS_Y__org_pepstock_charba_client_items_DatasetElement_Property, "cp1y");
  Property.$static_CONTROL_POINT_NEXT_X__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTROL_POINT_NEXT_X"), Property.$ordinal_CONTROL_POINT_NEXT_X__org_pepstock_charba_client_items_DatasetElement_Property, "cp2x");
  Property.$static_CONTROL_POINT_NEXT_Y__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTROL_POINT_NEXT_Y"), Property.$ordinal_CONTROL_POINT_NEXT_Y__org_pepstock_charba_client_items_DatasetElement_Property, "cp2y");
  Property.$static_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ANGLE"), Property.$ordinal_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property, "angle");
  Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetElement_Property_ = null;
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
Property.$static_ACTIVE__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_X__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_Y__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_OPTIONS__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_PARSED__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_BASE__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_HEIGHT__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_HORIZONTAL__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_WIDTH__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_END_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_INNER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_OUTER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_START_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_SKIP__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_STOP__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_CONTROL_POINT_PREVIOUS_X__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_CONTROL_POINT_PREVIOUS_Y__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_CONTROL_POINT_NEXT_X__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_CONTROL_POINT_NEXT_Y__org_pepstock_charba_client_items_DatasetElement_Property;
/**@private {!Property}*/
Property.$static_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetElement_Property_;
/**@const {number}*/
Property.$ordinal_ACTIVE__org_pepstock_charba_client_items_DatasetElement_Property = 0;
/**@const {number}*/
Property.$ordinal_X__org_pepstock_charba_client_items_DatasetElement_Property = 1;
/**@const {number}*/
Property.$ordinal_Y__org_pepstock_charba_client_items_DatasetElement_Property = 2;
/**@const {number}*/
Property.$ordinal_OPTIONS__org_pepstock_charba_client_items_DatasetElement_Property = 3;
/**@const {number}*/
Property.$ordinal_PARSED__org_pepstock_charba_client_items_DatasetElement_Property = 4;
/**@const {number}*/
Property.$ordinal_BASE__org_pepstock_charba_client_items_DatasetElement_Property = 5;
/**@const {number}*/
Property.$ordinal_HEIGHT__org_pepstock_charba_client_items_DatasetElement_Property = 6;
/**@const {number}*/
Property.$ordinal_HORIZONTAL__org_pepstock_charba_client_items_DatasetElement_Property = 7;
/**@const {number}*/
Property.$ordinal_WIDTH__org_pepstock_charba_client_items_DatasetElement_Property = 8;
/**@const {number}*/
Property.$ordinal_CIRCUMFERENCE__org_pepstock_charba_client_items_DatasetElement_Property = 9;
/**@const {number}*/
Property.$ordinal_END_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property = 10;
/**@const {number}*/
Property.$ordinal_INNER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property = 11;
/**@const {number}*/
Property.$ordinal_OUTER_RADIUS__org_pepstock_charba_client_items_DatasetElement_Property = 12;
/**@const {number}*/
Property.$ordinal_START_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property = 13;
/**@const {number}*/
Property.$ordinal_SKIP__org_pepstock_charba_client_items_DatasetElement_Property = 14;
/**@const {number}*/
Property.$ordinal_STOP__org_pepstock_charba_client_items_DatasetElement_Property = 15;
/**@const {number}*/
Property.$ordinal_CONTROL_POINT_PREVIOUS_X__org_pepstock_charba_client_items_DatasetElement_Property = 16;
/**@const {number}*/
Property.$ordinal_CONTROL_POINT_PREVIOUS_Y__org_pepstock_charba_client_items_DatasetElement_Property = 17;
/**@const {number}*/
Property.$ordinal_CONTROL_POINT_NEXT_X__org_pepstock_charba_client_items_DatasetElement_Property = 18;
/**@const {number}*/
Property.$ordinal_CONTROL_POINT_NEXT_Y__org_pepstock_charba_client_items_DatasetElement_Property = 19;
/**@const {number}*/
Property.$ordinal_ANGLE__org_pepstock_charba_client_items_DatasetElement_Property = 20;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.items.DatasetElement$Property");

exports = Property;

//# sourceMappingURL=DatasetElement$Property.js.map
