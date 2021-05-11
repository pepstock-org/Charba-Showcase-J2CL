goog.module('org.pepstock.charba.client.data.PieDataset.Property$impl');

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
  this.f_value__org_pepstock_charba_client_data_PieDataset_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_data_PieDataset_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_PieDataset_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_data_PieDataset_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_data_PieDataset_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_data_PieDataset_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_data_PieDataset_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_data_PieDataset_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_WEIGHT__org_pepstock_charba_client_data_PieDataset_Property, Property.$static_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, Property.$static_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, Property.$static_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property, Property.$static_ROTATION__org_pepstock_charba_client_data_PieDataset_Property, Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_data_PieDataset_Property, Property.$static_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property], Property));
 }
 /** @return {!Property} */
 static get f_WEIGHT__org_pepstock_charba_client_data_PieDataset_Property() {
  return (Property.$clinit(), Property.$static_WEIGHT__org_pepstock_charba_client_data_PieDataset_Property);
 }
 /** @return {!Property} */
 static get f_OFFSET__org_pepstock_charba_client_data_PieDataset_Property() {
  return (Property.$clinit(), Property.$static_OFFSET__org_pepstock_charba_client_data_PieDataset_Property);
 }
 /** @return {!Property} */
 static get f_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property() {
  return (Property.$clinit(), Property.$static_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property() {
  return (Property.$clinit(), Property.$static_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property);
 }
 /** @return {!Property} */
 static get f_ROTATION__org_pepstock_charba_client_data_PieDataset_Property() {
  return (Property.$clinit(), Property.$static_ROTATION__org_pepstock_charba_client_data_PieDataset_Property);
 }
 /** @return {!Property} */
 static get f_CIRCUMFERENCE__org_pepstock_charba_client_data_PieDataset_Property() {
  return (Property.$clinit(), Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_data_PieDataset_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_WEIGHT__org_pepstock_charba_client_data_PieDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WEIGHT"), Property.$ordinal_WEIGHT__org_pepstock_charba_client_data_PieDataset_Property, "weight");
  Property.$static_OFFSET__org_pepstock_charba_client_data_PieDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OFFSET"), Property.$ordinal_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, "offset");
  Property.$static_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOVER_OFFSET"), Property.$ordinal_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, "hoverOffset");
  Property.$static_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_RADIUS"), Property.$ordinal_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property, "borderRadius");
  Property.$static_ROTATION__org_pepstock_charba_client_data_PieDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROTATION"), Property.$ordinal_ROTATION__org_pepstock_charba_client_data_PieDataset_Property, "rotation");
  Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_data_PieDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CIRCUMFERENCE"), Property.$ordinal_CIRCUMFERENCE__org_pepstock_charba_client_data_PieDataset_Property, "circumference");
  Property.$static_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_BORDER_RADIUS_TYPE"), Property.$ordinal_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property, "charbaBorderRadiusType");
  Property.f_namesToValuesMap__org_pepstock_charba_client_data_PieDataset_Property_ = null;
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
Property.$static_WEIGHT__org_pepstock_charba_client_data_PieDataset_Property;
/**@private {!Property}*/
Property.$static_OFFSET__org_pepstock_charba_client_data_PieDataset_Property;
/**@private {!Property}*/
Property.$static_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property;
/**@private {!Property}*/
Property.$static_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property;
/**@private {!Property}*/
Property.$static_ROTATION__org_pepstock_charba_client_data_PieDataset_Property;
/**@private {!Property}*/
Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_data_PieDataset_Property;
/**@private {!Property}*/
Property.$static_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_data_PieDataset_Property_;
/**@const {number}*/
Property.$ordinal_WEIGHT__org_pepstock_charba_client_data_PieDataset_Property = 0;
/**@const {number}*/
Property.$ordinal_OFFSET__org_pepstock_charba_client_data_PieDataset_Property = 1;
/**@const {number}*/
Property.$ordinal_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property = 2;
/**@const {number}*/
Property.$ordinal_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property = 3;
/**@const {number}*/
Property.$ordinal_ROTATION__org_pepstock_charba_client_data_PieDataset_Property = 4;
/**@const {number}*/
Property.$ordinal_CIRCUMFERENCE__org_pepstock_charba_client_data_PieDataset_Property = 5;
/**@const {number}*/
Property.$ordinal_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property = 6;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.data.PieDataset$Property");

exports = Property;

//# sourceMappingURL=PieDataset$Property.js.map
