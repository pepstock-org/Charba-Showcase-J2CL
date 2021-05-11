goog.module('org.pepstock.charba.client.items.LegendNode.Property$impl');

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
  this.f_value__org_pepstock_charba_client_items_LegendNode_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_items_LegendNode_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_LegendNode_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_items_LegendNode_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_items_LegendNode_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_items_LegendNode_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_items_LegendNode_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_items_LegendNode_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_DOUGHNUT_MODE__org_pepstock_charba_client_items_LegendNode_Property, Property.$static_LEGEND_ITEMS__org_pepstock_charba_client_items_LegendNode_Property, Property.$static_LEGEND_HIT_BOXES__org_pepstock_charba_client_items_LegendNode_Property, Property.$static_LINE_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property, Property.$static_COLUMN_HEIGHTS__org_pepstock_charba_client_items_LegendNode_Property, Property.$static_COLUMN_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property], Property));
 }
 /** @return {!Property} */
 static get f_DOUGHNUT_MODE__org_pepstock_charba_client_items_LegendNode_Property() {
  return (Property.$clinit(), Property.$static_DOUGHNUT_MODE__org_pepstock_charba_client_items_LegendNode_Property);
 }
 /** @return {!Property} */
 static get f_LEGEND_ITEMS__org_pepstock_charba_client_items_LegendNode_Property() {
  return (Property.$clinit(), Property.$static_LEGEND_ITEMS__org_pepstock_charba_client_items_LegendNode_Property);
 }
 /** @return {!Property} */
 static get f_LEGEND_HIT_BOXES__org_pepstock_charba_client_items_LegendNode_Property() {
  return (Property.$clinit(), Property.$static_LEGEND_HIT_BOXES__org_pepstock_charba_client_items_LegendNode_Property);
 }
 /** @return {!Property} */
 static get f_LINE_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property() {
  return (Property.$clinit(), Property.$static_LINE_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property);
 }
 /** @return {!Property} */
 static get f_COLUMN_HEIGHTS__org_pepstock_charba_client_items_LegendNode_Property() {
  return (Property.$clinit(), Property.$static_COLUMN_HEIGHTS__org_pepstock_charba_client_items_LegendNode_Property);
 }
 /** @return {!Property} */
 static get f_COLUMN_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property() {
  return (Property.$clinit(), Property.$static_COLUMN_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_DOUGHNUT_MODE__org_pepstock_charba_client_items_LegendNode_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DOUGHNUT_MODE"), Property.$ordinal_DOUGHNUT_MODE__org_pepstock_charba_client_items_LegendNode_Property, "doughnutMode");
  Property.$static_LEGEND_ITEMS__org_pepstock_charba_client_items_LegendNode_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEGEND_ITEMS"), Property.$ordinal_LEGEND_ITEMS__org_pepstock_charba_client_items_LegendNode_Property, "legendItems");
  Property.$static_LEGEND_HIT_BOXES__org_pepstock_charba_client_items_LegendNode_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEGEND_HIT_BOXES"), Property.$ordinal_LEGEND_HIT_BOXES__org_pepstock_charba_client_items_LegendNode_Property, "legendHitBoxes");
  Property.$static_LINE_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINE_WIDTHS"), Property.$ordinal_LINE_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property, "lineWidths");
  Property.$static_COLUMN_HEIGHTS__org_pepstock_charba_client_items_LegendNode_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLUMN_HEIGHTS"), Property.$ordinal_COLUMN_HEIGHTS__org_pepstock_charba_client_items_LegendNode_Property, "columnHights");
  Property.$static_COLUMN_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLUMN_WIDTHS"), Property.$ordinal_COLUMN_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property, "columnWidths");
  Property.f_namesToValuesMap__org_pepstock_charba_client_items_LegendNode_Property_ = null;
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
Property.$static_DOUGHNUT_MODE__org_pepstock_charba_client_items_LegendNode_Property;
/**@private {!Property}*/
Property.$static_LEGEND_ITEMS__org_pepstock_charba_client_items_LegendNode_Property;
/**@private {!Property}*/
Property.$static_LEGEND_HIT_BOXES__org_pepstock_charba_client_items_LegendNode_Property;
/**@private {!Property}*/
Property.$static_LINE_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property;
/**@private {!Property}*/
Property.$static_COLUMN_HEIGHTS__org_pepstock_charba_client_items_LegendNode_Property;
/**@private {!Property}*/
Property.$static_COLUMN_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_items_LegendNode_Property_;
/**@const {number}*/
Property.$ordinal_DOUGHNUT_MODE__org_pepstock_charba_client_items_LegendNode_Property = 0;
/**@const {number}*/
Property.$ordinal_LEGEND_ITEMS__org_pepstock_charba_client_items_LegendNode_Property = 1;
/**@const {number}*/
Property.$ordinal_LEGEND_HIT_BOXES__org_pepstock_charba_client_items_LegendNode_Property = 2;
/**@const {number}*/
Property.$ordinal_LINE_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property = 3;
/**@const {number}*/
Property.$ordinal_COLUMN_HEIGHTS__org_pepstock_charba_client_items_LegendNode_Property = 4;
/**@const {number}*/
Property.$ordinal_COLUMN_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property = 5;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.items.LegendNode$Property");

exports = Property;

//# sourceMappingURL=LegendNode$Property.js.map
