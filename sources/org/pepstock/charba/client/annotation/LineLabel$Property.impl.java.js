goog.module('org.pepstock.charba.client.annotation.LineLabel.Property$impl');

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
  this.f_value__org_pepstock_charba_client_annotation_LineLabel_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_annotation_LineLabel_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_LineLabel_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_annotation_LineLabel_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_annotation_LineLabel_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_annotation_LineLabel_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_annotation_LineLabel_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_annotation_LineLabel_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_COLOR__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_ENABLED__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_FONT__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_POSITION__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_X_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property, Property.$static_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property], Property));
 }
 /** @return {!Property} */
 static get f_COLOR__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_COLOR__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_ENABLED__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_ENABLED__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_FONT__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_FONT__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_POSITION__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_POSITION__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_X_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_X_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 /** @return {!Property} */
 static get f_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property() {
  return (Property.$clinit(), Property.$static_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_COLOR__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR"), Property.$ordinal_COLOR__org_pepstock_charba_client_annotation_LineLabel_Property, "color");
  Property.$static_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTENT"), Property.$ordinal_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property, "content");
  Property.$static_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CORNER_RADIUS"), Property.$ordinal_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel_Property, "cornerRadius");
  Property.$static_ENABLED__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ENABLED"), Property.$ordinal_ENABLED__org_pepstock_charba_client_annotation_LineLabel_Property, "enabled");
  Property.$static_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HEIGHT"), Property.$ordinal_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property, "height");
  Property.$static_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WIDTH"), Property.$ordinal_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property, "width");
  Property.$static_FONT__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FONT"), Property.$ordinal_FONT__org_pepstock_charba_client_annotation_LineLabel_Property, "font");
  Property.$static_POSITION__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POSITION"), Property.$ordinal_POSITION__org_pepstock_charba_client_annotation_LineLabel_Property, "position");
  Property.$static_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROTATION"), Property.$ordinal_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property, "rotation");
  Property.$static_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT_ALIGN"), Property.$ordinal_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel_Property, "textAlign");
  Property.$static_X_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X_PADDING"), Property.$ordinal_X_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property, "xPadding");
  Property.$static_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y_PADDING"), Property.$ordinal_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property, "yPadding");
  Property.$static_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X_ADJUST"), Property.$ordinal_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property, "xAdjust");
  Property.$static_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y_ADJUST"), Property.$ordinal_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property, "yAdjust");
  Property.f_namesToValuesMap__org_pepstock_charba_client_annotation_LineLabel_Property_ = null;
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
Property.$static_COLOR__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_ENABLED__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_FONT__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_POSITION__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_X_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@private {!Property}*/
Property.$static_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_annotation_LineLabel_Property_;
/**@const {number}*/
Property.$ordinal_COLOR__org_pepstock_charba_client_annotation_LineLabel_Property = 0;
/**@const {number}*/
Property.$ordinal_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property = 1;
/**@const {number}*/
Property.$ordinal_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel_Property = 2;
/**@const {number}*/
Property.$ordinal_ENABLED__org_pepstock_charba_client_annotation_LineLabel_Property = 3;
/**@const {number}*/
Property.$ordinal_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property = 4;
/**@const {number}*/
Property.$ordinal_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property = 5;
/**@const {number}*/
Property.$ordinal_FONT__org_pepstock_charba_client_annotation_LineLabel_Property = 6;
/**@const {number}*/
Property.$ordinal_POSITION__org_pepstock_charba_client_annotation_LineLabel_Property = 7;
/**@const {number}*/
Property.$ordinal_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property = 8;
/**@const {number}*/
Property.$ordinal_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel_Property = 9;
/**@const {number}*/
Property.$ordinal_X_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property = 10;
/**@const {number}*/
Property.$ordinal_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property = 11;
/**@const {number}*/
Property.$ordinal_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property = 12;
/**@const {number}*/
Property.$ordinal_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property = 13;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.annotation.LineLabel$Property");

exports = Property;

//# sourceMappingURL=LineLabel$Property.js.map
