goog.module('org.pepstock.charba.client.datalabels.LabelItem.Property$impl');

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
  this.f_value__org_pepstock_charba_client_datalabels_LabelItem_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_datalabels_LabelItem_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_LabelItem_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_datalabels_LabelItem_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_datalabels_LabelItem_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_datalabels_LabelItem_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_datalabels_LabelItem_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_datalabels_LabelItem_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_ANCHOR__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_BORDER_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_BORDER_RADIUS__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_BORDER_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_CLAMP__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_CLIP__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_FONT__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_FORMATTER__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_LISTENERS__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_OFFSET__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_OPACITY__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_ROTATION__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_TEXT_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_TEXT_STROKE_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_LabelItem_Property, Property.$static_TEXT_SHADOW_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property], Property));
 }
 /** @return {!Property} */
 static get f_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_ANCHOR__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_ANCHOR__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_BORDER_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_RADIUS__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_BORDER_RADIUS__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_BORDER_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_CLAMP__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_CLAMP__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_CLIP__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_CLIP__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_FONT__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_FONT__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_FORMATTER__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_FORMATTER__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_LISTENERS__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_LISTENERS__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_OFFSET__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_OFFSET__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_OPACITY__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_OPACITY__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_ROTATION__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_ROTATION__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_TEXT_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_TEXT_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_TEXT_STROKE_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_TEXT_STROKE_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 /** @return {!Property} */
 static get f_TEXT_SHADOW_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property() {
  return (Property.$clinit(), Property.$static_TEXT_SHADOW_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALIGN"), Property.$ordinal_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property, "align");
  Property.$static_ANCHOR__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ANCHOR"), Property.$ordinal_ANCHOR__org_pepstock_charba_client_datalabels_LabelItem_Property, "anchor");
  Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BACKGROUND_COLOR"), Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, "backgroundColor");
  Property.$static_BORDER_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_COLOR"), Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, "borderColor");
  Property.$static_BORDER_RADIUS__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_RADIUS"), Property.$ordinal_BORDER_RADIUS__org_pepstock_charba_client_datalabels_LabelItem_Property, "borderRadius");
  Property.$static_BORDER_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_WIDTH"), Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property, "borderWidth");
  Property.$static_CLAMP__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CLAMP"), Property.$ordinal_CLAMP__org_pepstock_charba_client_datalabels_LabelItem_Property, "clamp");
  Property.$static_CLIP__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CLIP"), Property.$ordinal_CLIP__org_pepstock_charba_client_datalabels_LabelItem_Property, "clip");
  Property.$static_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR"), Property.$ordinal_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, "color");
  Property.$static_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DISPLAY"), Property.$ordinal_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property, "display");
  Property.$static_FONT__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FONT"), Property.$ordinal_FONT__org_pepstock_charba_client_datalabels_LabelItem_Property, "font");
  Property.$static_FORMATTER__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FORMATTER"), Property.$ordinal_FORMATTER__org_pepstock_charba_client_datalabels_LabelItem_Property, "formatter");
  Property.$static_LISTENERS__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LISTENERS"), Property.$ordinal_LISTENERS__org_pepstock_charba_client_datalabels_LabelItem_Property, "listeners");
  Property.$static_OFFSET__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OFFSET"), Property.$ordinal_OFFSET__org_pepstock_charba_client_datalabels_LabelItem_Property, "offset");
  Property.$static_OPACITY__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OPACITY"), Property.$ordinal_OPACITY__org_pepstock_charba_client_datalabels_LabelItem_Property, "opacity");
  Property.$static_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PADDING"), Property.$ordinal_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property, "padding");
  Property.$static_ROTATION__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROTATION"), Property.$ordinal_ROTATION__org_pepstock_charba_client_datalabels_LabelItem_Property, "rotation");
  Property.$static_TEXT_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT_ALIGN"), Property.$ordinal_TEXT_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property, "textAlign");
  Property.$static_TEXT_STROKE_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT_STROKE_COLOR"), Property.$ordinal_TEXT_STROKE_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, "textStrokeColor");
  Property.$static_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT_STROKE_WIDTH"), Property.$ordinal_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property, "textStrokeWidth");
  Property.$static_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT_SHADOW_BLUR"), Property.$ordinal_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_LabelItem_Property, "textShadowBlur");
  Property.$static_TEXT_SHADOW_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT_SHADOW_COLOR"), Property.$ordinal_TEXT_SHADOW_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, "textShadowColor");
  Property.f_namesToValuesMap__org_pepstock_charba_client_datalabels_LabelItem_Property_ = null;
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
Property.$static_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_ANCHOR__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_BORDER_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_BORDER_RADIUS__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_BORDER_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_CLAMP__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_CLIP__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_FONT__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_FORMATTER__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_LISTENERS__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_OFFSET__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_OPACITY__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_ROTATION__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_TEXT_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_TEXT_STROKE_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@private {!Property}*/
Property.$static_TEXT_SHADOW_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_datalabels_LabelItem_Property_;
/**@const {number}*/
Property.$ordinal_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property = 0;
/**@const {number}*/
Property.$ordinal_ANCHOR__org_pepstock_charba_client_datalabels_LabelItem_Property = 1;
/**@const {number}*/
Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property = 2;
/**@const {number}*/
Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property = 3;
/**@const {number}*/
Property.$ordinal_BORDER_RADIUS__org_pepstock_charba_client_datalabels_LabelItem_Property = 4;
/**@const {number}*/
Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property = 5;
/**@const {number}*/
Property.$ordinal_CLAMP__org_pepstock_charba_client_datalabels_LabelItem_Property = 6;
/**@const {number}*/
Property.$ordinal_CLIP__org_pepstock_charba_client_datalabels_LabelItem_Property = 7;
/**@const {number}*/
Property.$ordinal_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property = 8;
/**@const {number}*/
Property.$ordinal_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property = 9;
/**@const {number}*/
Property.$ordinal_FONT__org_pepstock_charba_client_datalabels_LabelItem_Property = 10;
/**@const {number}*/
Property.$ordinal_FORMATTER__org_pepstock_charba_client_datalabels_LabelItem_Property = 11;
/**@const {number}*/
Property.$ordinal_LISTENERS__org_pepstock_charba_client_datalabels_LabelItem_Property = 12;
/**@const {number}*/
Property.$ordinal_OFFSET__org_pepstock_charba_client_datalabels_LabelItem_Property = 13;
/**@const {number}*/
Property.$ordinal_OPACITY__org_pepstock_charba_client_datalabels_LabelItem_Property = 14;
/**@const {number}*/
Property.$ordinal_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property = 15;
/**@const {number}*/
Property.$ordinal_ROTATION__org_pepstock_charba_client_datalabels_LabelItem_Property = 16;
/**@const {number}*/
Property.$ordinal_TEXT_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property = 17;
/**@const {number}*/
Property.$ordinal_TEXT_STROKE_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property = 18;
/**@const {number}*/
Property.$ordinal_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property = 19;
/**@const {number}*/
Property.$ordinal_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_LabelItem_Property = 20;
/**@const {number}*/
Property.$ordinal_TEXT_SHADOW_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property = 21;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.datalabels.LabelItem$Property");

exports = Property;

//# sourceMappingURL=LabelItem$Property.js.map
