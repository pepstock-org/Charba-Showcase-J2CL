goog.module('org.pepstock.charba.client.data.LiningDataset.Property$impl');

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
  this.f_value__org_pepstock_charba_client_data_LiningDataset_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_data_LiningDataset_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_LiningDataset_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_data_LiningDataset_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_data_LiningDataset_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_data_LiningDataset_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_data_LiningDataset_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_data_LiningDataset_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_TENSION__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property, Property.$static_CHARBA_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property], Property));
 }
 /** @return {!Property} */
 static get f_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_TENSION__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_TENSION__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_DASH"), Property.$ordinal_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property, "borderDash");
  Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_DASH_OFFSET"), Property.$ordinal_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, "borderDashOffset");
  Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_CAP_STYLE"), Property.$ordinal_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, "borderCapStyle");
  Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_JOIN_STYLE"), Property.$ordinal_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, "borderJoinStyle");
  Property.$static_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOVER_BORDER_DASH"), Property.$ordinal_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property, "hoverBorderDash");
  Property.$static_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOVER_BORDER_DASH_OFFSET"), Property.$ordinal_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, "hoverBorderDashOffset");
  Property.$static_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOVER_BORDER_CAP_STYLE"), Property.$ordinal_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, "hoverBorderCapStyle");
  Property.$static_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOVER_BORDER_JOIN_STYLE"), Property.$ordinal_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, "hoverBorderJoinStyle");
  Property.$static_TENSION__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TENSION"), Property.$ordinal_TENSION__org_pepstock_charba_client_data_LiningDataset_Property, "tension");
  Property.$static_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_BORDER_WIDTH"), Property.$ordinal_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, "pointBorderWidth");
  Property.$static_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_RADIUS"), Property.$ordinal_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, "pointRadius");
  Property.$static_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_STYLE"), Property.$ordinal_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, "pointStyle");
  Property.$static_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_HIT_RADIUS"), Property.$ordinal_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, "pointHitRadius");
  Property.$static_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_HOVER_BORDER_WIDTH"), Property.$ordinal_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, "pointHoverBorderWidth");
  Property.$static_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_HOVER_RADIUS"), Property.$ordinal_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, "pointHoverRadius");
  Property.$static_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_ROTATION"), Property.$ordinal_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property, "pointRotation");
  Property.$static_CHARBA_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_POINT_STYLE"), Property.$ordinal_CHARBA_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, "charbaPointStyle");
  Property.f_namesToValuesMap__org_pepstock_charba_client_data_LiningDataset_Property_ = null;
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
Property.$static_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_TENSION__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property;
/**@private {!Property}*/
Property.$static_CHARBA_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_data_LiningDataset_Property_;
/**@const {number}*/
Property.$ordinal_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property = 0;
/**@const {number}*/
Property.$ordinal_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property = 1;
/**@const {number}*/
Property.$ordinal_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = 2;
/**@const {number}*/
Property.$ordinal_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = 3;
/**@const {number}*/
Property.$ordinal_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property = 4;
/**@const {number}*/
Property.$ordinal_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property = 5;
/**@const {number}*/
Property.$ordinal_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = 6;
/**@const {number}*/
Property.$ordinal_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = 7;
/**@const {number}*/
Property.$ordinal_TENSION__org_pepstock_charba_client_data_LiningDataset_Property = 8;
/**@const {number}*/
Property.$ordinal_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property = 9;
/**@const {number}*/
Property.$ordinal_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property = 10;
/**@const {number}*/
Property.$ordinal_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = 11;
/**@const {number}*/
Property.$ordinal_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property = 12;
/**@const {number}*/
Property.$ordinal_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property = 13;
/**@const {number}*/
Property.$ordinal_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property = 14;
/**@const {number}*/
Property.$ordinal_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property = 15;
/**@const {number}*/
Property.$ordinal_CHARBA_POINT_STYLE__org_pepstock_charba_client_data_LiningDataset_Property = 16;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.data.LiningDataset$Property");

exports = Property;

//# sourceMappingURL=LiningDataset$Property.js.map
