goog.module('org.pepstock.charba.client.labels.Label.Property$impl');

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
  this.f_value__org_pepstock_charba_client_labels_Label_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_labels_Label_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_Label_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_labels_Label_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_labels_Label_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_labels_Label_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_labels_Label_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_labels_Label_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_ID__org_pepstock_charba_client_labels_Label_Property, Property.$static_ARC__org_pepstock_charba_client_labels_Label_Property, Property.$static_COLOR__org_pepstock_charba_client_labels_Label_Property, Property.$static_FONT__org_pepstock_charba_client_labels_Label_Property, Property.$static_IMAGES__org_pepstock_charba_client_labels_Label_Property, Property.$static_OUTSIDE_PADDING__org_pepstock_charba_client_labels_Label_Property, Property.$static_OVERLAP__org_pepstock_charba_client_labels_Label_Property, Property.$static_POSITION__org_pepstock_charba_client_labels_Label_Property, Property.$static_PRECISION__org_pepstock_charba_client_labels_Label_Property, Property.$static_RENDER__org_pepstock_charba_client_labels_Label_Property, Property.$static_SHADOW_BLUR__org_pepstock_charba_client_labels_Label_Property, Property.$static_SHADOW_COLOR__org_pepstock_charba_client_labels_Label_Property, Property.$static_SHADOW_OFFSET_X__org_pepstock_charba_client_labels_Label_Property, Property.$static_SHADOW_OFFSET_Y__org_pepstock_charba_client_labels_Label_Property, Property.$static_SHOW_ACTUAL_PERCENTAGES__org_pepstock_charba_client_labels_Label_Property, Property.$static_SHOW_ZERO__org_pepstock_charba_client_labels_Label_Property, Property.$static_TEXT_SHADOW__org_pepstock_charba_client_labels_Label_Property, Property.$static_TEXT_MARGIN__org_pepstock_charba_client_labels_Label_Property], Property));
 }
 /** @return {!Property} */
 static get f_ID__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_ID__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_ARC__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_ARC__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_COLOR__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_COLOR__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_FONT__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_FONT__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_IMAGES__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_IMAGES__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_OUTSIDE_PADDING__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_OUTSIDE_PADDING__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_OVERLAP__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_OVERLAP__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_POSITION__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_POSITION__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_PRECISION__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_PRECISION__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_RENDER__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_RENDER__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_SHADOW_BLUR__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_SHADOW_BLUR__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_SHADOW_COLOR__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_SHADOW_COLOR__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_SHADOW_OFFSET_X__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_SHADOW_OFFSET_X__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_SHADOW_OFFSET_Y__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_SHADOW_OFFSET_Y__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_SHOW_ACTUAL_PERCENTAGES__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_SHOW_ACTUAL_PERCENTAGES__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_SHOW_ZERO__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_SHOW_ZERO__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_TEXT_SHADOW__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_TEXT_SHADOW__org_pepstock_charba_client_labels_Label_Property);
 }
 /** @return {!Property} */
 static get f_TEXT_MARGIN__org_pepstock_charba_client_labels_Label_Property() {
  return (Property.$clinit(), Property.$static_TEXT_MARGIN__org_pepstock_charba_client_labels_Label_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_ID__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ID"), Property.$ordinal_ID__org_pepstock_charba_client_labels_Label_Property, "id");
  Property.$static_ARC__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ARC"), Property.$ordinal_ARC__org_pepstock_charba_client_labels_Label_Property, "arc");
  Property.$static_COLOR__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR"), Property.$ordinal_COLOR__org_pepstock_charba_client_labels_Label_Property, "color");
  Property.$static_FONT__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FONT"), Property.$ordinal_FONT__org_pepstock_charba_client_labels_Label_Property, "font");
  Property.$static_IMAGES__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("IMAGES"), Property.$ordinal_IMAGES__org_pepstock_charba_client_labels_Label_Property, "images");
  Property.$static_OUTSIDE_PADDING__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OUTSIDE_PADDING"), Property.$ordinal_OUTSIDE_PADDING__org_pepstock_charba_client_labels_Label_Property, "outsidePadding");
  Property.$static_OVERLAP__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OVERLAP"), Property.$ordinal_OVERLAP__org_pepstock_charba_client_labels_Label_Property, "overlap");
  Property.$static_POSITION__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POSITION"), Property.$ordinal_POSITION__org_pepstock_charba_client_labels_Label_Property, "position");
  Property.$static_PRECISION__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PRECISION"), Property.$ordinal_PRECISION__org_pepstock_charba_client_labels_Label_Property, "precision");
  Property.$static_RENDER__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RENDER"), Property.$ordinal_RENDER__org_pepstock_charba_client_labels_Label_Property, "render");
  Property.$static_SHADOW_BLUR__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHADOW_BLUR"), Property.$ordinal_SHADOW_BLUR__org_pepstock_charba_client_labels_Label_Property, "shadowBlur");
  Property.$static_SHADOW_COLOR__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHADOW_COLOR"), Property.$ordinal_SHADOW_COLOR__org_pepstock_charba_client_labels_Label_Property, "shadowColor");
  Property.$static_SHADOW_OFFSET_X__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHADOW_OFFSET_X"), Property.$ordinal_SHADOW_OFFSET_X__org_pepstock_charba_client_labels_Label_Property, "shadowOffsetX");
  Property.$static_SHADOW_OFFSET_Y__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHADOW_OFFSET_Y"), Property.$ordinal_SHADOW_OFFSET_Y__org_pepstock_charba_client_labels_Label_Property, "shadowOffsetY");
  Property.$static_SHOW_ACTUAL_PERCENTAGES__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHOW_ACTUAL_PERCENTAGES"), Property.$ordinal_SHOW_ACTUAL_PERCENTAGES__org_pepstock_charba_client_labels_Label_Property, "showActualPercentages");
  Property.$static_SHOW_ZERO__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHOW_ZERO"), Property.$ordinal_SHOW_ZERO__org_pepstock_charba_client_labels_Label_Property, "showZero");
  Property.$static_TEXT_SHADOW__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT_SHADOW"), Property.$ordinal_TEXT_SHADOW__org_pepstock_charba_client_labels_Label_Property, "textShadow");
  Property.$static_TEXT_MARGIN__org_pepstock_charba_client_labels_Label_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT_MARGIN"), Property.$ordinal_TEXT_MARGIN__org_pepstock_charba_client_labels_Label_Property, "textMargin");
  Property.f_namesToValuesMap__org_pepstock_charba_client_labels_Label_Property_ = null;
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
Property.$static_ID__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_ARC__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_COLOR__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_FONT__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_IMAGES__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_OUTSIDE_PADDING__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_OVERLAP__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_POSITION__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_PRECISION__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_RENDER__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_SHADOW_BLUR__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_SHADOW_COLOR__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_SHADOW_OFFSET_X__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_SHADOW_OFFSET_Y__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_SHOW_ACTUAL_PERCENTAGES__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_SHOW_ZERO__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_TEXT_SHADOW__org_pepstock_charba_client_labels_Label_Property;
/**@private {!Property}*/
Property.$static_TEXT_MARGIN__org_pepstock_charba_client_labels_Label_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_labels_Label_Property_;
/**@const {number}*/
Property.$ordinal_ID__org_pepstock_charba_client_labels_Label_Property = 0;
/**@const {number}*/
Property.$ordinal_ARC__org_pepstock_charba_client_labels_Label_Property = 1;
/**@const {number}*/
Property.$ordinal_COLOR__org_pepstock_charba_client_labels_Label_Property = 2;
/**@const {number}*/
Property.$ordinal_FONT__org_pepstock_charba_client_labels_Label_Property = 3;
/**@const {number}*/
Property.$ordinal_IMAGES__org_pepstock_charba_client_labels_Label_Property = 4;
/**@const {number}*/
Property.$ordinal_OUTSIDE_PADDING__org_pepstock_charba_client_labels_Label_Property = 5;
/**@const {number}*/
Property.$ordinal_OVERLAP__org_pepstock_charba_client_labels_Label_Property = 6;
/**@const {number}*/
Property.$ordinal_POSITION__org_pepstock_charba_client_labels_Label_Property = 7;
/**@const {number}*/
Property.$ordinal_PRECISION__org_pepstock_charba_client_labels_Label_Property = 8;
/**@const {number}*/
Property.$ordinal_RENDER__org_pepstock_charba_client_labels_Label_Property = 9;
/**@const {number}*/
Property.$ordinal_SHADOW_BLUR__org_pepstock_charba_client_labels_Label_Property = 10;
/**@const {number}*/
Property.$ordinal_SHADOW_COLOR__org_pepstock_charba_client_labels_Label_Property = 11;
/**@const {number}*/
Property.$ordinal_SHADOW_OFFSET_X__org_pepstock_charba_client_labels_Label_Property = 12;
/**@const {number}*/
Property.$ordinal_SHADOW_OFFSET_Y__org_pepstock_charba_client_labels_Label_Property = 13;
/**@const {number}*/
Property.$ordinal_SHOW_ACTUAL_PERCENTAGES__org_pepstock_charba_client_labels_Label_Property = 14;
/**@const {number}*/
Property.$ordinal_SHOW_ZERO__org_pepstock_charba_client_labels_Label_Property = 15;
/**@const {number}*/
Property.$ordinal_TEXT_SHADOW__org_pepstock_charba_client_labels_Label_Property = 16;
/**@const {number}*/
Property.$ordinal_TEXT_MARGIN__org_pepstock_charba_client_labels_Label_Property = 17;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.labels.Label$Property");

exports = Property;

//# sourceMappingURL=Label$Property.js.map
