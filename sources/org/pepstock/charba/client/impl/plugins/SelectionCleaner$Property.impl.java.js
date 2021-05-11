goog.module('org.pepstock.charba.client.impl.plugins.SelectionCleaner.Property$impl');

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
  this.f_value__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_DISPLAY__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_LABEL__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_COLOR__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_FONT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_IMAGE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_MARGIN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_SPACING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_USE_SELECTION_STYLE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_IMAGE_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_IMAGE_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_IMAGE_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_IMAGE_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_LABEL_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_LABEL_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_LABEL_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_LABEL_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, Property.$static_LAYOUT_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property], Property));
 }
 /** @return {!Property} */
 static get f_DISPLAY__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_DISPLAY__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_LABEL__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_LABEL__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_COLOR__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_COLOR__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_FONT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_FONT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_IMAGE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_IMAGE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_MARGIN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_MARGIN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_SPACING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_SPACING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_USE_SELECTION_STYLE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_USE_SELECTION_STYLE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_IMAGE_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_IMAGE_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_IMAGE_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_IMAGE_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_IMAGE_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_IMAGE_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_IMAGE_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_IMAGE_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_LABEL_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_LABEL_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_LABEL_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_LABEL_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 /** @return {!Property} */
 static get f_LAYOUT_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property() {
  return (Property.$clinit(), Property.$static_LAYOUT_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_DISPLAY__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DISPLAY"), Property.$ordinal_DISPLAY__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "display");
  Property.$static_LABEL__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL"), Property.$ordinal_LABEL__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "label");
  Property.$static_COLOR__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR"), Property.$ordinal_COLOR__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "color");
  Property.$static_FONT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FONT"), Property.$ordinal_FONT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "font");
  Property.$static_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALIGN"), Property.$ordinal_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "align");
  Property.$static_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POSITION"), Property.$ordinal_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "position");
  Property.$static_IMAGE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("IMAGE"), Property.$ordinal_IMAGE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "image");
  Property.$static_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RENDER"), Property.$ordinal_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "render");
  Property.$static_MARGIN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MARGIN"), Property.$ordinal_MARGIN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "margin");
  Property.$static_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PADDING"), Property.$ordinal_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "padding");
  Property.$static_SPACING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SPACING"), Property.$ordinal_SPACING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "spacing");
  Property.$static_USE_SELECTION_STYLE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("USE_SELECTION_STYLE"), Property.$ordinal_USE_SELECTION_STYLE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "useSelectionStyle");
  Property.$static_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X"), Property.$ordinal_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "x");
  Property.$static_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y"), Property.$ordinal_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "y");
  Property.$static_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WIDTH"), Property.$ordinal_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "width");
  Property.$static_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HEIGHT"), Property.$ordinal_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "height");
  Property.$static_IMAGE_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("IMAGE_X"), Property.$ordinal_IMAGE_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "imageX");
  Property.$static_IMAGE_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("IMAGE_Y"), Property.$ordinal_IMAGE_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "imageY");
  Property.$static_IMAGE_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("IMAGE_WIDTH"), Property.$ordinal_IMAGE_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "imageWidth");
  Property.$static_IMAGE_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("IMAGE_HEIGHT"), Property.$ordinal_IMAGE_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "imageHeight");
  Property.$static_LABEL_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_X"), Property.$ordinal_LABEL_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "labelX");
  Property.$static_LABEL_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_Y"), Property.$ordinal_LABEL_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "labelY");
  Property.$static_LABEL_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_WIDTH"), Property.$ordinal_LABEL_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "labelWidth");
  Property.$static_LABEL_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_HEIGHT"), Property.$ordinal_LABEL_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "labelHeight");
  Property.$static_LAYOUT_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LAYOUT_PADDING"), Property.$ordinal_LAYOUT_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property, "layoutPadding");
  Property.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property_ = null;
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
Property.$static_DISPLAY__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_LABEL__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_COLOR__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_FONT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_IMAGE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_MARGIN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_SPACING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_USE_SELECTION_STYLE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_IMAGE_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_IMAGE_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_IMAGE_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_IMAGE_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_LABEL_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_LABEL_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_LABEL_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_LABEL_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@private {!Property}*/
Property.$static_LAYOUT_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property_;
/**@const {number}*/
Property.$ordinal_DISPLAY__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 0;
/**@const {number}*/
Property.$ordinal_LABEL__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 1;
/**@const {number}*/
Property.$ordinal_COLOR__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 2;
/**@const {number}*/
Property.$ordinal_FONT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 3;
/**@const {number}*/
Property.$ordinal_ALIGN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 4;
/**@const {number}*/
Property.$ordinal_POSITION__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 5;
/**@const {number}*/
Property.$ordinal_IMAGE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 6;
/**@const {number}*/
Property.$ordinal_RENDER__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 7;
/**@const {number}*/
Property.$ordinal_MARGIN__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 8;
/**@const {number}*/
Property.$ordinal_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 9;
/**@const {number}*/
Property.$ordinal_SPACING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 10;
/**@const {number}*/
Property.$ordinal_USE_SELECTION_STYLE__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 11;
/**@const {number}*/
Property.$ordinal_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 12;
/**@const {number}*/
Property.$ordinal_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 13;
/**@const {number}*/
Property.$ordinal_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 14;
/**@const {number}*/
Property.$ordinal_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 15;
/**@const {number}*/
Property.$ordinal_IMAGE_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 16;
/**@const {number}*/
Property.$ordinal_IMAGE_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 17;
/**@const {number}*/
Property.$ordinal_IMAGE_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 18;
/**@const {number}*/
Property.$ordinal_IMAGE_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 19;
/**@const {number}*/
Property.$ordinal_LABEL_X__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 20;
/**@const {number}*/
Property.$ordinal_LABEL_Y__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 21;
/**@const {number}*/
Property.$ordinal_LABEL_WIDTH__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 22;
/**@const {number}*/
Property.$ordinal_LABEL_HEIGHT__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 23;
/**@const {number}*/
Property.$ordinal_LAYOUT_PADDING__org_pepstock_charba_client_impl_plugins_SelectionCleaner_Property = 24;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.impl.plugins.SelectionCleaner$Property");

exports = Property;

//# sourceMappingURL=SelectionCleaner$Property.js.map
