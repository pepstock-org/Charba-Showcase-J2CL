goog.module('org.pepstock.charba.client.items.LegendItem.Property$impl');

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
  this.f_value__org_pepstock_charba_client_items_LegendItem_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_items_LegendItem_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_LegendItem_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_items_LegendItem_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_items_LegendItem_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_items_LegendItem_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_items_LegendItem_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_items_LegendItem_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_DATASET_INDEX__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_INDEX__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_FONT_COLOR__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_LINE_CAP__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_LINE_DASH__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_LINE_DASH_OFFSET__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_LINE_JOIN__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_LINE_WIDTH__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_ROTATION__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property, Property.$static_TEXT__org_pepstock_charba_client_items_LegendItem_Property], Property));
 }
 /** @return {!Property} */
 static get f_DATASET_INDEX__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_DATASET_INDEX__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_INDEX__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_INDEX__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_FONT_COLOR__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_FONT_COLOR__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_LINE_CAP__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_LINE_CAP__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_LINE_DASH__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_LINE_DASH__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_LINE_DASH_OFFSET__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_LINE_DASH_OFFSET__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_LINE_JOIN__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_LINE_JOIN__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_LINE_WIDTH__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_LINE_WIDTH__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_ROTATION__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_ROTATION__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property);
 }
 /** @return {!Property} */
 static get f_TEXT__org_pepstock_charba_client_items_LegendItem_Property() {
  return (Property.$clinit(), Property.$static_TEXT__org_pepstock_charba_client_items_LegendItem_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_DATASET_INDEX__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATASET_INDEX"), Property.$ordinal_DATASET_INDEX__org_pepstock_charba_client_items_LegendItem_Property, "datasetIndex");
  Property.$static_INDEX__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INDEX"), Property.$ordinal_INDEX__org_pepstock_charba_client_items_LegendItem_Property, "index");
  Property.$static_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FILL_STYLE"), Property.$ordinal_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property, "fillStyle");
  Property.$static_FONT_COLOR__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FONT_COLOR"), Property.$ordinal_FONT_COLOR__org_pepstock_charba_client_items_LegendItem_Property, "fontColor");
  Property.$static_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_RADIUS"), Property.$ordinal_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property, "borderRadius");
  Property.$static_LINE_CAP__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINE_CAP"), Property.$ordinal_LINE_CAP__org_pepstock_charba_client_items_LegendItem_Property, "lineCap");
  Property.$static_LINE_DASH__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINE_DASH"), Property.$ordinal_LINE_DASH__org_pepstock_charba_client_items_LegendItem_Property, "lineDash");
  Property.$static_LINE_DASH_OFFSET__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINE_DASH_OFFSET"), Property.$ordinal_LINE_DASH_OFFSET__org_pepstock_charba_client_items_LegendItem_Property, "lineDashOffset");
  Property.$static_LINE_JOIN__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINE_JOIN"), Property.$ordinal_LINE_JOIN__org_pepstock_charba_client_items_LegendItem_Property, "lineJoin");
  Property.$static_LINE_WIDTH__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINE_WIDTH"), Property.$ordinal_LINE_WIDTH__org_pepstock_charba_client_items_LegendItem_Property, "lineWidth");
  Property.$static_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_STYLE"), Property.$ordinal_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property, "pointStyle");
  Property.$static_ROTATION__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROTATION"), Property.$ordinal_ROTATION__org_pepstock_charba_client_items_LegendItem_Property, "rotation");
  Property.$static_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STROKE_STYLE"), Property.$ordinal_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property, "strokeStyle");
  Property.$static_TEXT__org_pepstock_charba_client_items_LegendItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT"), Property.$ordinal_TEXT__org_pepstock_charba_client_items_LegendItem_Property, "text");
  Property.f_namesToValuesMap__org_pepstock_charba_client_items_LegendItem_Property_ = null;
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
Property.$static_DATASET_INDEX__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_INDEX__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_FONT_COLOR__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_LINE_CAP__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_LINE_DASH__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_LINE_DASH_OFFSET__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_LINE_JOIN__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_LINE_WIDTH__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_ROTATION__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property;
/**@private {!Property}*/
Property.$static_TEXT__org_pepstock_charba_client_items_LegendItem_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_items_LegendItem_Property_;
/**@const {number}*/
Property.$ordinal_DATASET_INDEX__org_pepstock_charba_client_items_LegendItem_Property = 0;
/**@const {number}*/
Property.$ordinal_INDEX__org_pepstock_charba_client_items_LegendItem_Property = 1;
/**@const {number}*/
Property.$ordinal_FILL_STYLE__org_pepstock_charba_client_items_LegendItem_Property = 2;
/**@const {number}*/
Property.$ordinal_FONT_COLOR__org_pepstock_charba_client_items_LegendItem_Property = 3;
/**@const {number}*/
Property.$ordinal_BORDER_RADIUS__org_pepstock_charba_client_items_LegendItem_Property = 4;
/**@const {number}*/
Property.$ordinal_LINE_CAP__org_pepstock_charba_client_items_LegendItem_Property = 5;
/**@const {number}*/
Property.$ordinal_LINE_DASH__org_pepstock_charba_client_items_LegendItem_Property = 6;
/**@const {number}*/
Property.$ordinal_LINE_DASH_OFFSET__org_pepstock_charba_client_items_LegendItem_Property = 7;
/**@const {number}*/
Property.$ordinal_LINE_JOIN__org_pepstock_charba_client_items_LegendItem_Property = 8;
/**@const {number}*/
Property.$ordinal_LINE_WIDTH__org_pepstock_charba_client_items_LegendItem_Property = 9;
/**@const {number}*/
Property.$ordinal_POINT_STYLE__org_pepstock_charba_client_items_LegendItem_Property = 10;
/**@const {number}*/
Property.$ordinal_ROTATION__org_pepstock_charba_client_items_LegendItem_Property = 11;
/**@const {number}*/
Property.$ordinal_STROKE_STYLE__org_pepstock_charba_client_items_LegendItem_Property = 12;
/**@const {number}*/
Property.$ordinal_TEXT__org_pepstock_charba_client_items_LegendItem_Property = 13;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.items.LegendItem$Property");

exports = Property;

//# sourceMappingURL=LegendItem$Property.js.map
