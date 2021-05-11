goog.module('org.pepstock.charba.client.colors.Gradient.Property$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
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
  this.f_value__org_pepstock_charba_client_colors_Gradient_Property_;
  /**@type {ObjectType}*/
  this.f_type__org_pepstock_charba_client_colors_Gradient_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_commons_ObjectType(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ObjectType */ type) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_colors_Gradient_Property__java_lang_String__int__java_lang_String__org_pepstock_charba_client_commons_ObjectType($name, $ordinal, value, type);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_Gradient_Property__java_lang_String__int__java_lang_String__org_pepstock_charba_client_commons_ObjectType(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** ObjectType */ type) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_colors_Gradient_Property_ = value;
  this.f_type__org_pepstock_charba_client_colors_Gradient_Property_ = type;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_colors_Gradient_Property_;
 }
 /** @return {ObjectType} */
 m_type___$pp_org_pepstock_charba_client_colors() {
  return this.f_type__org_pepstock_charba_client_colors_Gradient_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_colors_Gradient_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_colors_Gradient_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_colors_Gradient_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_CHARBA_GRADIENT_COLORS__org_pepstock_charba_client_colors_Gradient_Property, Property.$static_CHARBA_GRADIENT_TYPE__org_pepstock_charba_client_colors_Gradient_Property, Property.$static_CHARBA_GRADIENT_ORIENTATION__org_pepstock_charba_client_colors_Gradient_Property, Property.$static_CHARBA_GRADIENT_SCOPE__org_pepstock_charba_client_colors_Gradient_Property], Property));
 }
 /** @return {!Property} */
 static get f_CHARBA_GRADIENT_COLORS__org_pepstock_charba_client_colors_Gradient_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_GRADIENT_COLORS__org_pepstock_charba_client_colors_Gradient_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_GRADIENT_TYPE__org_pepstock_charba_client_colors_Gradient_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_GRADIENT_TYPE__org_pepstock_charba_client_colors_Gradient_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_GRADIENT_ORIENTATION__org_pepstock_charba_client_colors_Gradient_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_GRADIENT_ORIENTATION__org_pepstock_charba_client_colors_Gradient_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_GRADIENT_SCOPE__org_pepstock_charba_client_colors_Gradient_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_GRADIENT_SCOPE__org_pepstock_charba_client_colors_Gradient_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_CHARBA_GRADIENT_COLORS__org_pepstock_charba_client_colors_Gradient_Property = Property.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_commons_ObjectType($Util.$makeEnumName("CHARBA_GRADIENT_COLORS"), Property.$ordinal_CHARBA_GRADIENT_COLORS__org_pepstock_charba_client_colors_Gradient_Property, "charbaGradientColors", ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType);
  Property.$static_CHARBA_GRADIENT_TYPE__org_pepstock_charba_client_colors_Gradient_Property = Property.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_commons_ObjectType($Util.$makeEnumName("CHARBA_GRADIENT_TYPE"), Property.$ordinal_CHARBA_GRADIENT_TYPE__org_pepstock_charba_client_colors_Gradient_Property, "charbaGradientType", ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
  Property.$static_CHARBA_GRADIENT_ORIENTATION__org_pepstock_charba_client_colors_Gradient_Property = Property.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_commons_ObjectType($Util.$makeEnumName("CHARBA_GRADIENT_ORIENTATION"), Property.$ordinal_CHARBA_GRADIENT_ORIENTATION__org_pepstock_charba_client_colors_Gradient_Property, "charbaGradientOrientation", ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
  Property.$static_CHARBA_GRADIENT_SCOPE__org_pepstock_charba_client_colors_Gradient_Property = Property.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_client_commons_ObjectType($Util.$makeEnumName("CHARBA_GRADIENT_SCOPE"), Property.$ordinal_CHARBA_GRADIENT_SCOPE__org_pepstock_charba_client_colors_Gradient_Property, "charbaGradientScope", ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
  Property.f_namesToValuesMap__org_pepstock_charba_client_colors_Gradient_Property_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Property;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Property}*/
Property.$static_CHARBA_GRADIENT_COLORS__org_pepstock_charba_client_colors_Gradient_Property;
/**@private {!Property}*/
Property.$static_CHARBA_GRADIENT_TYPE__org_pepstock_charba_client_colors_Gradient_Property;
/**@private {!Property}*/
Property.$static_CHARBA_GRADIENT_ORIENTATION__org_pepstock_charba_client_colors_Gradient_Property;
/**@private {!Property}*/
Property.$static_CHARBA_GRADIENT_SCOPE__org_pepstock_charba_client_colors_Gradient_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_colors_Gradient_Property_;
/**@const {number}*/
Property.$ordinal_CHARBA_GRADIENT_COLORS__org_pepstock_charba_client_colors_Gradient_Property = 0;
/**@const {number}*/
Property.$ordinal_CHARBA_GRADIENT_TYPE__org_pepstock_charba_client_colors_Gradient_Property = 1;
/**@const {number}*/
Property.$ordinal_CHARBA_GRADIENT_ORIENTATION__org_pepstock_charba_client_colors_Gradient_Property = 2;
/**@const {number}*/
Property.$ordinal_CHARBA_GRADIENT_SCOPE__org_pepstock_charba_client_colors_Gradient_Property = 3;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.colors.Gradient$Property");

exports = Property;

//# sourceMappingURL=Gradient$Property.js.map
