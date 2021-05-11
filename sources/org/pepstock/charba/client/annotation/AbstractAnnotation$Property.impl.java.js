goog.module('org.pepstock.charba.client.annotation.AbstractAnnotation.Property$impl');

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
  this.f_value__org_pepstock_charba_client_annotation_AbstractAnnotation_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_annotation_AbstractAnnotation_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_AbstractAnnotation_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_annotation_AbstractAnnotation_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_annotation_AbstractAnnotation_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_annotation_AbstractAnnotation_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_annotation_AbstractAnnotation_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_annotation_AbstractAnnotation_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_TYPE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_BORDER_COLOR__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_BORDER_WIDTH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_ENTER__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_LEAVE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_DOUBLE_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Property.$static_CHARBA_ANNOTATION_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property], Property));
 }
 /** @return {!Property} */
 static get f_TYPE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_TYPE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_COLOR__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_BORDER_COLOR__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_WIDTH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_BORDER_WIDTH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_DASH_OFFSET__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_ENTER__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_ENTER__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_LEAVE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_LEAVE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_DOUBLE_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_DOUBLE_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_ANNOTATION_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_ANNOTATION_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_TYPE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TYPE"), Property.$ordinal_TYPE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "type");
  Property.$static_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ID"), Property.$ordinal_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "id");
  Property.$static_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ADJUST_SCALE_RANGE"), Property.$ordinal_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "adjustScaleRange");
  Property.$static_BORDER_COLOR__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_COLOR"), Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "borderColor");
  Property.$static_BORDER_WIDTH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_WIDTH"), Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "borderWidth");
  Property.$static_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_DASH"), Property.$ordinal_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "borderDash");
  Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_DASH_OFFSET"), Property.$ordinal_BORDER_DASH_OFFSET__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "borderDashOffset");
  Property.$static_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DISPLAY"), Property.$ordinal_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "display");
  Property.$static_ENTER__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ENTER"), Property.$ordinal_ENTER__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "enter");
  Property.$static_LEAVE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEAVE"), Property.$ordinal_LEAVE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "leave");
  Property.$static_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CLICK"), Property.$ordinal_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "click");
  Property.$static_DOUBLE_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DOUBLE_CLICK"), Property.$ordinal_DOUBLE_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "dblclick");
  Property.$static_CHARBA_ANNOTATION_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_ANNOTATION_ID"), Property.$ordinal_CHARBA_ANNOTATION_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, "charbaAnnotationId");
  Property.f_namesToValuesMap__org_pepstock_charba_client_annotation_AbstractAnnotation_Property_ = null;
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
Property.$static_TYPE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_BORDER_COLOR__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_BORDER_WIDTH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_ENTER__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_LEAVE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_DOUBLE_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@private {!Property}*/
Property.$static_CHARBA_ANNOTATION_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_annotation_AbstractAnnotation_Property_;
/**@const {number}*/
Property.$ordinal_TYPE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 0;
/**@const {number}*/
Property.$ordinal_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 1;
/**@const {number}*/
Property.$ordinal_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 2;
/**@const {number}*/
Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 3;
/**@const {number}*/
Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 4;
/**@const {number}*/
Property.$ordinal_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 5;
/**@const {number}*/
Property.$ordinal_BORDER_DASH_OFFSET__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 6;
/**@const {number}*/
Property.$ordinal_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 7;
/**@const {number}*/
Property.$ordinal_ENTER__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 8;
/**@const {number}*/
Property.$ordinal_LEAVE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 9;
/**@const {number}*/
Property.$ordinal_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 10;
/**@const {number}*/
Property.$ordinal_DOUBLE_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 11;
/**@const {number}*/
Property.$ordinal_CHARBA_ANNOTATION_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property = 12;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.annotation.AbstractAnnotation$Property");

exports = Property;

//# sourceMappingURL=AbstractAnnotation$Property.js.map
