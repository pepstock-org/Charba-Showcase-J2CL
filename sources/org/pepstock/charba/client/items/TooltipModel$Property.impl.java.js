goog.module('org.pepstock.charba.client.items.TooltipModel.Property$impl');

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
  this.f_value__org_pepstock_charba_client_items_TooltipModel_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipModel_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_TooltipModel_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_items_TooltipModel_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_items_TooltipModel_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_items_TooltipModel_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_items_TooltipModel_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_items_TooltipModel_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_DATA_POINTS__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_X_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_Y_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_X__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_Y__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_WIDTH__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_HEIGHT__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_CARET_X__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_CARET_Y__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_BODY__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_BEFORE_BODY__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_AFTER_BODY__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_TITLE__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_FOOTER__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_LABEL_COLORS__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_LABEL_POINT_STYLES__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_LABEL_TEXT_COLORS__org_pepstock_charba_client_items_TooltipModel_Property, Property.$static_OPACITY__org_pepstock_charba_client_items_TooltipModel_Property], Property));
 }
 /** @return {!Property} */
 static get f_DATA_POINTS__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_DATA_POINTS__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_X_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_X_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_Y_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_Y_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_X__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_X__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_Y__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_Y__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_WIDTH__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_WIDTH__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_HEIGHT__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_HEIGHT__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_CARET_X__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_CARET_X__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_CARET_Y__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_CARET_Y__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_BODY__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_BODY__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_BODY__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_BODY__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_BODY__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_AFTER_BODY__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_TITLE__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_TITLE__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_FOOTER__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_FOOTER__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_COLORS__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_LABEL_COLORS__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_POINT_STYLES__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_LABEL_POINT_STYLES__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_TEXT_COLORS__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_LABEL_TEXT_COLORS__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 /** @return {!Property} */
 static get f_OPACITY__org_pepstock_charba_client_items_TooltipModel_Property() {
  return (Property.$clinit(), Property.$static_OPACITY__org_pepstock_charba_client_items_TooltipModel_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_DATA_POINTS__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATA_POINTS"), Property.$ordinal_DATA_POINTS__org_pepstock_charba_client_items_TooltipModel_Property, "dataPoints");
  Property.$static_X_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X_ALIGN"), Property.$ordinal_X_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property, "xAlign");
  Property.$static_Y_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y_ALIGN"), Property.$ordinal_Y_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property, "yAlign");
  Property.$static_X__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X"), Property.$ordinal_X__org_pepstock_charba_client_items_TooltipModel_Property, "x");
  Property.$static_Y__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y"), Property.$ordinal_Y__org_pepstock_charba_client_items_TooltipModel_Property, "y");
  Property.$static_WIDTH__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WIDTH"), Property.$ordinal_WIDTH__org_pepstock_charba_client_items_TooltipModel_Property, "width");
  Property.$static_HEIGHT__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HEIGHT"), Property.$ordinal_HEIGHT__org_pepstock_charba_client_items_TooltipModel_Property, "height");
  Property.$static_CARET_X__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CARET_X"), Property.$ordinal_CARET_X__org_pepstock_charba_client_items_TooltipModel_Property, "caretX");
  Property.$static_CARET_Y__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CARET_Y"), Property.$ordinal_CARET_Y__org_pepstock_charba_client_items_TooltipModel_Property, "caretY");
  Property.$static_BODY__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BODY"), Property.$ordinal_BODY__org_pepstock_charba_client_items_TooltipModel_Property, "body");
  Property.$static_BEFORE_BODY__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_BODY"), Property.$ordinal_BEFORE_BODY__org_pepstock_charba_client_items_TooltipModel_Property, "beforeBody");
  Property.$static_AFTER_BODY__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_BODY"), Property.$ordinal_AFTER_BODY__org_pepstock_charba_client_items_TooltipModel_Property, "afterBody");
  Property.$static_TITLE__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TITLE"), Property.$ordinal_TITLE__org_pepstock_charba_client_items_TooltipModel_Property, "title");
  Property.$static_FOOTER__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FOOTER"), Property.$ordinal_FOOTER__org_pepstock_charba_client_items_TooltipModel_Property, "footer");
  Property.$static_LABEL_COLORS__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_COLORS"), Property.$ordinal_LABEL_COLORS__org_pepstock_charba_client_items_TooltipModel_Property, "labelColors");
  Property.$static_LABEL_POINT_STYLES__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_POINT_STYLES"), Property.$ordinal_LABEL_POINT_STYLES__org_pepstock_charba_client_items_TooltipModel_Property, "labelPointStyles");
  Property.$static_LABEL_TEXT_COLORS__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_TEXT_COLORS"), Property.$ordinal_LABEL_TEXT_COLORS__org_pepstock_charba_client_items_TooltipModel_Property, "labelTextColors");
  Property.$static_OPACITY__org_pepstock_charba_client_items_TooltipModel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OPACITY"), Property.$ordinal_OPACITY__org_pepstock_charba_client_items_TooltipModel_Property, "opacity");
  Property.f_namesToValuesMap__org_pepstock_charba_client_items_TooltipModel_Property_ = null;
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
Property.$static_DATA_POINTS__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_X_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_Y_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_X__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_Y__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_WIDTH__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_HEIGHT__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_CARET_X__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_CARET_Y__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_BODY__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_BEFORE_BODY__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_AFTER_BODY__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_TITLE__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_FOOTER__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_LABEL_COLORS__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_LABEL_POINT_STYLES__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_LABEL_TEXT_COLORS__org_pepstock_charba_client_items_TooltipModel_Property;
/**@private {!Property}*/
Property.$static_OPACITY__org_pepstock_charba_client_items_TooltipModel_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_items_TooltipModel_Property_;
/**@const {number}*/
Property.$ordinal_DATA_POINTS__org_pepstock_charba_client_items_TooltipModel_Property = 0;
/**@const {number}*/
Property.$ordinal_X_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property = 1;
/**@const {number}*/
Property.$ordinal_Y_ALIGN__org_pepstock_charba_client_items_TooltipModel_Property = 2;
/**@const {number}*/
Property.$ordinal_X__org_pepstock_charba_client_items_TooltipModel_Property = 3;
/**@const {number}*/
Property.$ordinal_Y__org_pepstock_charba_client_items_TooltipModel_Property = 4;
/**@const {number}*/
Property.$ordinal_WIDTH__org_pepstock_charba_client_items_TooltipModel_Property = 5;
/**@const {number}*/
Property.$ordinal_HEIGHT__org_pepstock_charba_client_items_TooltipModel_Property = 6;
/**@const {number}*/
Property.$ordinal_CARET_X__org_pepstock_charba_client_items_TooltipModel_Property = 7;
/**@const {number}*/
Property.$ordinal_CARET_Y__org_pepstock_charba_client_items_TooltipModel_Property = 8;
/**@const {number}*/
Property.$ordinal_BODY__org_pepstock_charba_client_items_TooltipModel_Property = 9;
/**@const {number}*/
Property.$ordinal_BEFORE_BODY__org_pepstock_charba_client_items_TooltipModel_Property = 10;
/**@const {number}*/
Property.$ordinal_AFTER_BODY__org_pepstock_charba_client_items_TooltipModel_Property = 11;
/**@const {number}*/
Property.$ordinal_TITLE__org_pepstock_charba_client_items_TooltipModel_Property = 12;
/**@const {number}*/
Property.$ordinal_FOOTER__org_pepstock_charba_client_items_TooltipModel_Property = 13;
/**@const {number}*/
Property.$ordinal_LABEL_COLORS__org_pepstock_charba_client_items_TooltipModel_Property = 14;
/**@const {number}*/
Property.$ordinal_LABEL_POINT_STYLES__org_pepstock_charba_client_items_TooltipModel_Property = 15;
/**@const {number}*/
Property.$ordinal_LABEL_TEXT_COLORS__org_pepstock_charba_client_items_TooltipModel_Property = 16;
/**@const {number}*/
Property.$ordinal_OPACITY__org_pepstock_charba_client_items_TooltipModel_Property = 17;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.items.TooltipModel$Property");

exports = Property;

//# sourceMappingURL=TooltipModel$Property.js.map
