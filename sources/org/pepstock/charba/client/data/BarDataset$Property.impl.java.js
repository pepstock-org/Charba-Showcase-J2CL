goog.module('org.pepstock.charba.client.data.BarDataset.Property$impl');

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
  this.f_value__org_pepstock_charba_client_data_BarDataset_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_data_BarDataset_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_BarDataset_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_data_BarDataset_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_data_BarDataset_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_data_BarDataset_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_data_BarDataset_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_data_BarDataset_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_BASE__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_X_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_Y_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_INDEX_AXIS__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, Property.$static_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property], Property));
 }
 /** @return {!Property} */
 static get f_BASE__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_BASE__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_X_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_X_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_Y_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_Y_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_INDEX_AXIS__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_INDEX_AXIS__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_BASE__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BASE"), Property.$ordinal_BASE__org_pepstock_charba_client_data_BarDataset_Property, "base");
  Property.$static_X_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X_AXIS_ID"), Property.$ordinal_X_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property, "xAxisID");
  Property.$static_Y_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y_AXIS_ID"), Property.$ordinal_Y_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property, "yAxisID");
  Property.$static_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_SKIPPED"), Property.$ordinal_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property, "borderSkipped");
  Property.$static_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_RADIUS"), Property.$ordinal_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, "borderRadius");
  Property.$static_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOVER_BORDER_RADIUS"), Property.$ordinal_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, "hoverBorderRadius");
  Property.$static_INDEX_AXIS__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INDEX_AXIS"), Property.$ordinal_INDEX_AXIS__org_pepstock_charba_client_data_BarDataset_Property, "indexAxis");
  Property.$static_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_STYLE"), Property.$ordinal_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property, "pointStyle");
  Property.$static_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ENABLE_BORDER_RADIUS"), Property.$ordinal_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, "enableBorderRadius");
  Property.$static_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_BORDER_WIDTH_TYPE"), Property.$ordinal_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, "charbaBorderWidthType");
  Property.$static_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_HOVER_BORDER_WIDTH_TYPE"), Property.$ordinal_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, "charbaHoverBorderWidthType");
  Property.$static_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_BORDER_RADIUS_TYPE"), Property.$ordinal_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, "charbaBorderRadiusType");
  Property.$static_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_HOVER_BORDER_RADIUS_TYPE"), Property.$ordinal_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, "charbaHoverBorderRadiusType");
  Property.f_namesToValuesMap__org_pepstock_charba_client_data_BarDataset_Property_ = null;
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
Property.$static_BASE__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_X_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_Y_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_INDEX_AXIS__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property;
/**@private {!Property}*/
Property.$static_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_data_BarDataset_Property_;
/**@const {number}*/
Property.$ordinal_BASE__org_pepstock_charba_client_data_BarDataset_Property = 0;
/**@const {number}*/
Property.$ordinal_X_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property = 1;
/**@const {number}*/
Property.$ordinal_Y_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property = 2;
/**@const {number}*/
Property.$ordinal_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property = 3;
/**@const {number}*/
Property.$ordinal_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property = 4;
/**@const {number}*/
Property.$ordinal_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property = 5;
/**@const {number}*/
Property.$ordinal_INDEX_AXIS__org_pepstock_charba_client_data_BarDataset_Property = 6;
/**@const {number}*/
Property.$ordinal_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property = 7;
/**@const {number}*/
Property.$ordinal_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property = 8;
/**@const {number}*/
Property.$ordinal_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property = 9;
/**@const {number}*/
Property.$ordinal_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property = 10;
/**@const {number}*/
Property.$ordinal_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property = 11;
/**@const {number}*/
Property.$ordinal_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property = 12;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.data.BarDataset$Property");

exports = Property;

//# sourceMappingURL=BarDataset$Property.js.map
