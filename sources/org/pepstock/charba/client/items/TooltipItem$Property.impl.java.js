goog.module('org.pepstock.charba.client.items.TooltipItem.Property$impl');

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
  this.f_value__org_pepstock_charba_client_items_TooltipItem_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipItem_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_TooltipItem_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_items_TooltipItem_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_items_TooltipItem_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_items_TooltipItem_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_items_TooltipItem_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_items_TooltipItem_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_CHART__org_pepstock_charba_client_items_TooltipItem_Property, Property.$static_LABEL__org_pepstock_charba_client_items_TooltipItem_Property, Property.$static_DATA_POINT__org_pepstock_charba_client_items_TooltipItem_Property, Property.$static_FORMATTED_VALUE__org_pepstock_charba_client_items_TooltipItem_Property, Property.$static_DATASET_INDEX__org_pepstock_charba_client_items_TooltipItem_Property, Property.$static_DATA_INDEX__org_pepstock_charba_client_items_TooltipItem_Property, Property.$static_ELEMENT__org_pepstock_charba_client_items_TooltipItem_Property], Property));
 }
 /** @return {!Property} */
 static get f_CHART__org_pepstock_charba_client_items_TooltipItem_Property() {
  return (Property.$clinit(), Property.$static_CHART__org_pepstock_charba_client_items_TooltipItem_Property);
 }
 /** @return {!Property} */
 static get f_LABEL__org_pepstock_charba_client_items_TooltipItem_Property() {
  return (Property.$clinit(), Property.$static_LABEL__org_pepstock_charba_client_items_TooltipItem_Property);
 }
 /** @return {!Property} */
 static get f_DATA_POINT__org_pepstock_charba_client_items_TooltipItem_Property() {
  return (Property.$clinit(), Property.$static_DATA_POINT__org_pepstock_charba_client_items_TooltipItem_Property);
 }
 /** @return {!Property} */
 static get f_FORMATTED_VALUE__org_pepstock_charba_client_items_TooltipItem_Property() {
  return (Property.$clinit(), Property.$static_FORMATTED_VALUE__org_pepstock_charba_client_items_TooltipItem_Property);
 }
 /** @return {!Property} */
 static get f_DATASET_INDEX__org_pepstock_charba_client_items_TooltipItem_Property() {
  return (Property.$clinit(), Property.$static_DATASET_INDEX__org_pepstock_charba_client_items_TooltipItem_Property);
 }
 /** @return {!Property} */
 static get f_DATA_INDEX__org_pepstock_charba_client_items_TooltipItem_Property() {
  return (Property.$clinit(), Property.$static_DATA_INDEX__org_pepstock_charba_client_items_TooltipItem_Property);
 }
 /** @return {!Property} */
 static get f_ELEMENT__org_pepstock_charba_client_items_TooltipItem_Property() {
  return (Property.$clinit(), Property.$static_ELEMENT__org_pepstock_charba_client_items_TooltipItem_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_CHART__org_pepstock_charba_client_items_TooltipItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHART"), Property.$ordinal_CHART__org_pepstock_charba_client_items_TooltipItem_Property, "chart");
  Property.$static_LABEL__org_pepstock_charba_client_items_TooltipItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL"), Property.$ordinal_LABEL__org_pepstock_charba_client_items_TooltipItem_Property, "label");
  Property.$static_DATA_POINT__org_pepstock_charba_client_items_TooltipItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATA_POINT"), Property.$ordinal_DATA_POINT__org_pepstock_charba_client_items_TooltipItem_Property, "dataPoint");
  Property.$static_FORMATTED_VALUE__org_pepstock_charba_client_items_TooltipItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FORMATTED_VALUE"), Property.$ordinal_FORMATTED_VALUE__org_pepstock_charba_client_items_TooltipItem_Property, "formattedValue");
  Property.$static_DATASET_INDEX__org_pepstock_charba_client_items_TooltipItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATASET_INDEX"), Property.$ordinal_DATASET_INDEX__org_pepstock_charba_client_items_TooltipItem_Property, "datasetIndex");
  Property.$static_DATA_INDEX__org_pepstock_charba_client_items_TooltipItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATA_INDEX"), Property.$ordinal_DATA_INDEX__org_pepstock_charba_client_items_TooltipItem_Property, "dataIndex");
  Property.$static_ELEMENT__org_pepstock_charba_client_items_TooltipItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ELEMENT"), Property.$ordinal_ELEMENT__org_pepstock_charba_client_items_TooltipItem_Property, "element");
  Property.f_namesToValuesMap__org_pepstock_charba_client_items_TooltipItem_Property_ = null;
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
Property.$static_CHART__org_pepstock_charba_client_items_TooltipItem_Property;
/**@private {!Property}*/
Property.$static_LABEL__org_pepstock_charba_client_items_TooltipItem_Property;
/**@private {!Property}*/
Property.$static_DATA_POINT__org_pepstock_charba_client_items_TooltipItem_Property;
/**@private {!Property}*/
Property.$static_FORMATTED_VALUE__org_pepstock_charba_client_items_TooltipItem_Property;
/**@private {!Property}*/
Property.$static_DATASET_INDEX__org_pepstock_charba_client_items_TooltipItem_Property;
/**@private {!Property}*/
Property.$static_DATA_INDEX__org_pepstock_charba_client_items_TooltipItem_Property;
/**@private {!Property}*/
Property.$static_ELEMENT__org_pepstock_charba_client_items_TooltipItem_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_items_TooltipItem_Property_;
/**@const {number}*/
Property.$ordinal_CHART__org_pepstock_charba_client_items_TooltipItem_Property = 0;
/**@const {number}*/
Property.$ordinal_LABEL__org_pepstock_charba_client_items_TooltipItem_Property = 1;
/**@const {number}*/
Property.$ordinal_DATA_POINT__org_pepstock_charba_client_items_TooltipItem_Property = 2;
/**@const {number}*/
Property.$ordinal_FORMATTED_VALUE__org_pepstock_charba_client_items_TooltipItem_Property = 3;
/**@const {number}*/
Property.$ordinal_DATASET_INDEX__org_pepstock_charba_client_items_TooltipItem_Property = 4;
/**@const {number}*/
Property.$ordinal_DATA_INDEX__org_pepstock_charba_client_items_TooltipItem_Property = 5;
/**@const {number}*/
Property.$ordinal_ELEMENT__org_pepstock_charba_client_items_TooltipItem_Property = 6;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.items.TooltipItem$Property");

exports = Property;

//# sourceMappingURL=TooltipItem$Property.js.map