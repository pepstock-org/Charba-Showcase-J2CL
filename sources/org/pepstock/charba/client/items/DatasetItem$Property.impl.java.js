goog.module('org.pepstock.charba.client.items.DatasetItem.Property$impl');

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
  this.f_value__org_pepstock_charba_client_items_DatasetItem_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_items_DatasetItem_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_DatasetItem_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_items_DatasetItem_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_items_DatasetItem_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetItem_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetItem_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetItem_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_CONTROLLER__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_DATA__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_HIDDEN__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_INDEX__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_INDEX_AXIS__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_LABEL__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_ORDER__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_TYPE__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_VISIBLE__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_Y_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_X_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_R_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_V_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_I_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_Y_SCALE__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_X_SCALE__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_R_SCALE__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_V_SCALE__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_I_SCALE__org_pepstock_charba_client_items_DatasetItem_Property, Property.$static_TOTAL__org_pepstock_charba_client_items_DatasetItem_Property], Property));
 }
 /** @return {!Property} */
 static get f_CONTROLLER__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_CONTROLLER__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_DATA__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_DATA__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_HIDDEN__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_HIDDEN__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_INDEX__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_INDEX__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_INDEX_AXIS__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_INDEX_AXIS__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_LABEL__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_LABEL__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_ORDER__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_ORDER__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_TYPE__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_TYPE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_VISIBLE__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_VISIBLE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_Y_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_Y_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_X_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_X_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_R_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_R_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_V_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_V_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_I_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_I_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_Y_SCALE__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_Y_SCALE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_X_SCALE__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_X_SCALE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_R_SCALE__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_R_SCALE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_V_SCALE__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_V_SCALE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_I_SCALE__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_I_SCALE__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 /** @return {!Property} */
 static get f_TOTAL__org_pepstock_charba_client_items_DatasetItem_Property() {
  return (Property.$clinit(), Property.$static_TOTAL__org_pepstock_charba_client_items_DatasetItem_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_CONTROLLER__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTROLLER"), Property.$ordinal_CONTROLLER__org_pepstock_charba_client_items_DatasetItem_Property, "controller");
  Property.$static_DATA__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATA"), Property.$ordinal_DATA__org_pepstock_charba_client_items_DatasetItem_Property, "data");
  Property.$static_HIDDEN__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HIDDEN"), Property.$ordinal_HIDDEN__org_pepstock_charba_client_items_DatasetItem_Property, "hidden");
  Property.$static_INDEX__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INDEX"), Property.$ordinal_INDEX__org_pepstock_charba_client_items_DatasetItem_Property, "index");
  Property.$static_INDEX_AXIS__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INDEX_AXIS"), Property.$ordinal_INDEX_AXIS__org_pepstock_charba_client_items_DatasetItem_Property, "indexAxis");
  Property.$static_LABEL__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL"), Property.$ordinal_LABEL__org_pepstock_charba_client_items_DatasetItem_Property, "label");
  Property.$static_ORDER__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ORDER"), Property.$ordinal_ORDER__org_pepstock_charba_client_items_DatasetItem_Property, "order");
  Property.$static_TYPE__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TYPE"), Property.$ordinal_TYPE__org_pepstock_charba_client_items_DatasetItem_Property, "type");
  Property.$static_VISIBLE__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("VISIBLE"), Property.$ordinal_VISIBLE__org_pepstock_charba_client_items_DatasetItem_Property, "visible");
  Property.$static_Y_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y_AXIS_ID"), Property.$ordinal_Y_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, "yAxisID");
  Property.$static_X_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X_AXIS_ID"), Property.$ordinal_X_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, "xAxisID");
  Property.$static_R_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("R_AXIS_ID"), Property.$ordinal_R_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, "rAxisID");
  Property.$static_V_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("V_AXIS_ID"), Property.$ordinal_V_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, "vAxisID");
  Property.$static_I_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("I_AXIS_ID"), Property.$ordinal_I_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property, "iAxisID");
  Property.$static_Y_SCALE__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y_SCALE"), Property.$ordinal_Y_SCALE__org_pepstock_charba_client_items_DatasetItem_Property, "yScale");
  Property.$static_X_SCALE__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X_SCALE"), Property.$ordinal_X_SCALE__org_pepstock_charba_client_items_DatasetItem_Property, "xScale");
  Property.$static_R_SCALE__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("R_SCALE"), Property.$ordinal_R_SCALE__org_pepstock_charba_client_items_DatasetItem_Property, "rScale");
  Property.$static_V_SCALE__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("V_SCALE"), Property.$ordinal_V_SCALE__org_pepstock_charba_client_items_DatasetItem_Property, "vScale");
  Property.$static_I_SCALE__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("I_SCALE"), Property.$ordinal_I_SCALE__org_pepstock_charba_client_items_DatasetItem_Property, "iScale");
  Property.$static_TOTAL__org_pepstock_charba_client_items_DatasetItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TOTAL"), Property.$ordinal_TOTAL__org_pepstock_charba_client_items_DatasetItem_Property, "total");
  Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetItem_Property_ = null;
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
Property.$static_CONTROLLER__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_DATA__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_HIDDEN__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_INDEX__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_INDEX_AXIS__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_LABEL__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_ORDER__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_TYPE__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_VISIBLE__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_Y_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_X_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_R_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_V_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_I_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_Y_SCALE__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_X_SCALE__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_R_SCALE__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_V_SCALE__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_I_SCALE__org_pepstock_charba_client_items_DatasetItem_Property;
/**@private {!Property}*/
Property.$static_TOTAL__org_pepstock_charba_client_items_DatasetItem_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_items_DatasetItem_Property_;
/**@const {number}*/
Property.$ordinal_CONTROLLER__org_pepstock_charba_client_items_DatasetItem_Property = 0;
/**@const {number}*/
Property.$ordinal_DATA__org_pepstock_charba_client_items_DatasetItem_Property = 1;
/**@const {number}*/
Property.$ordinal_HIDDEN__org_pepstock_charba_client_items_DatasetItem_Property = 2;
/**@const {number}*/
Property.$ordinal_INDEX__org_pepstock_charba_client_items_DatasetItem_Property = 3;
/**@const {number}*/
Property.$ordinal_INDEX_AXIS__org_pepstock_charba_client_items_DatasetItem_Property = 4;
/**@const {number}*/
Property.$ordinal_LABEL__org_pepstock_charba_client_items_DatasetItem_Property = 5;
/**@const {number}*/
Property.$ordinal_ORDER__org_pepstock_charba_client_items_DatasetItem_Property = 6;
/**@const {number}*/
Property.$ordinal_TYPE__org_pepstock_charba_client_items_DatasetItem_Property = 7;
/**@const {number}*/
Property.$ordinal_VISIBLE__org_pepstock_charba_client_items_DatasetItem_Property = 8;
/**@const {number}*/
Property.$ordinal_Y_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property = 9;
/**@const {number}*/
Property.$ordinal_X_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property = 10;
/**@const {number}*/
Property.$ordinal_R_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property = 11;
/**@const {number}*/
Property.$ordinal_V_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property = 12;
/**@const {number}*/
Property.$ordinal_I_AXIS_ID__org_pepstock_charba_client_items_DatasetItem_Property = 13;
/**@const {number}*/
Property.$ordinal_Y_SCALE__org_pepstock_charba_client_items_DatasetItem_Property = 14;
/**@const {number}*/
Property.$ordinal_X_SCALE__org_pepstock_charba_client_items_DatasetItem_Property = 15;
/**@const {number}*/
Property.$ordinal_R_SCALE__org_pepstock_charba_client_items_DatasetItem_Property = 16;
/**@const {number}*/
Property.$ordinal_V_SCALE__org_pepstock_charba_client_items_DatasetItem_Property = 17;
/**@const {number}*/
Property.$ordinal_I_SCALE__org_pepstock_charba_client_items_DatasetItem_Property = 18;
/**@const {number}*/
Property.$ordinal_TOTAL__org_pepstock_charba_client_items_DatasetItem_Property = 19;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.items.DatasetItem$Property");

exports = Property;

//# sourceMappingURL=DatasetItem$Property.js.map
