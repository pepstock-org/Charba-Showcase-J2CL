goog.module('org.pepstock.charba.client.configuration.AbstractTitle.Property$impl');

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
  this.f_value__org_pepstock_charba_client_configuration_AbstractTitle_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_configuration_AbstractTitle_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_AbstractTitle_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_configuration_AbstractTitle_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_configuration_AbstractTitle_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_AbstractTitle_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_AbstractTitle_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_AbstractTitle_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_ALIGN__org_pepstock_charba_client_configuration_AbstractTitle_Property, Property.$static_DISPLAY__org_pepstock_charba_client_configuration_AbstractTitle_Property, Property.$static_COLOR__org_pepstock_charba_client_configuration_AbstractTitle_Property, Property.$static_FONT__org_pepstock_charba_client_configuration_AbstractTitle_Property, Property.$static_FULL_SIZE__org_pepstock_charba_client_configuration_AbstractTitle_Property, Property.$static_PADDING__org_pepstock_charba_client_configuration_AbstractTitle_Property, Property.$static_POSITION__org_pepstock_charba_client_configuration_AbstractTitle_Property, Property.$static_TEXT__org_pepstock_charba_client_configuration_AbstractTitle_Property], Property));
 }
 /** @return {!Property} */
 static get f_ALIGN__org_pepstock_charba_client_configuration_AbstractTitle_Property() {
  return (Property.$clinit(), Property.$static_ALIGN__org_pepstock_charba_client_configuration_AbstractTitle_Property);
 }
 /** @return {!Property} */
 static get f_DISPLAY__org_pepstock_charba_client_configuration_AbstractTitle_Property() {
  return (Property.$clinit(), Property.$static_DISPLAY__org_pepstock_charba_client_configuration_AbstractTitle_Property);
 }
 /** @return {!Property} */
 static get f_COLOR__org_pepstock_charba_client_configuration_AbstractTitle_Property() {
  return (Property.$clinit(), Property.$static_COLOR__org_pepstock_charba_client_configuration_AbstractTitle_Property);
 }
 /** @return {!Property} */
 static get f_FONT__org_pepstock_charba_client_configuration_AbstractTitle_Property() {
  return (Property.$clinit(), Property.$static_FONT__org_pepstock_charba_client_configuration_AbstractTitle_Property);
 }
 /** @return {!Property} */
 static get f_FULL_SIZE__org_pepstock_charba_client_configuration_AbstractTitle_Property() {
  return (Property.$clinit(), Property.$static_FULL_SIZE__org_pepstock_charba_client_configuration_AbstractTitle_Property);
 }
 /** @return {!Property} */
 static get f_PADDING__org_pepstock_charba_client_configuration_AbstractTitle_Property() {
  return (Property.$clinit(), Property.$static_PADDING__org_pepstock_charba_client_configuration_AbstractTitle_Property);
 }
 /** @return {!Property} */
 static get f_POSITION__org_pepstock_charba_client_configuration_AbstractTitle_Property() {
  return (Property.$clinit(), Property.$static_POSITION__org_pepstock_charba_client_configuration_AbstractTitle_Property);
 }
 /** @return {!Property} */
 static get f_TEXT__org_pepstock_charba_client_configuration_AbstractTitle_Property() {
  return (Property.$clinit(), Property.$static_TEXT__org_pepstock_charba_client_configuration_AbstractTitle_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_ALIGN__org_pepstock_charba_client_configuration_AbstractTitle_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALIGN"), Property.$ordinal_ALIGN__org_pepstock_charba_client_configuration_AbstractTitle_Property, "align");
  Property.$static_DISPLAY__org_pepstock_charba_client_configuration_AbstractTitle_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DISPLAY"), Property.$ordinal_DISPLAY__org_pepstock_charba_client_configuration_AbstractTitle_Property, "display");
  Property.$static_COLOR__org_pepstock_charba_client_configuration_AbstractTitle_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR"), Property.$ordinal_COLOR__org_pepstock_charba_client_configuration_AbstractTitle_Property, "color");
  Property.$static_FONT__org_pepstock_charba_client_configuration_AbstractTitle_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FONT"), Property.$ordinal_FONT__org_pepstock_charba_client_configuration_AbstractTitle_Property, "font");
  Property.$static_FULL_SIZE__org_pepstock_charba_client_configuration_AbstractTitle_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FULL_SIZE"), Property.$ordinal_FULL_SIZE__org_pepstock_charba_client_configuration_AbstractTitle_Property, "fullSize");
  Property.$static_PADDING__org_pepstock_charba_client_configuration_AbstractTitle_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PADDING"), Property.$ordinal_PADDING__org_pepstock_charba_client_configuration_AbstractTitle_Property, "padding");
  Property.$static_POSITION__org_pepstock_charba_client_configuration_AbstractTitle_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POSITION"), Property.$ordinal_POSITION__org_pepstock_charba_client_configuration_AbstractTitle_Property, "position");
  Property.$static_TEXT__org_pepstock_charba_client_configuration_AbstractTitle_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT"), Property.$ordinal_TEXT__org_pepstock_charba_client_configuration_AbstractTitle_Property, "text");
  Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_AbstractTitle_Property_ = null;
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
Property.$static_ALIGN__org_pepstock_charba_client_configuration_AbstractTitle_Property;
/**@private {!Property}*/
Property.$static_DISPLAY__org_pepstock_charba_client_configuration_AbstractTitle_Property;
/**@private {!Property}*/
Property.$static_COLOR__org_pepstock_charba_client_configuration_AbstractTitle_Property;
/**@private {!Property}*/
Property.$static_FONT__org_pepstock_charba_client_configuration_AbstractTitle_Property;
/**@private {!Property}*/
Property.$static_FULL_SIZE__org_pepstock_charba_client_configuration_AbstractTitle_Property;
/**@private {!Property}*/
Property.$static_PADDING__org_pepstock_charba_client_configuration_AbstractTitle_Property;
/**@private {!Property}*/
Property.$static_POSITION__org_pepstock_charba_client_configuration_AbstractTitle_Property;
/**@private {!Property}*/
Property.$static_TEXT__org_pepstock_charba_client_configuration_AbstractTitle_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_AbstractTitle_Property_;
/**@const {number}*/
Property.$ordinal_ALIGN__org_pepstock_charba_client_configuration_AbstractTitle_Property = 0;
/**@const {number}*/
Property.$ordinal_DISPLAY__org_pepstock_charba_client_configuration_AbstractTitle_Property = 1;
/**@const {number}*/
Property.$ordinal_COLOR__org_pepstock_charba_client_configuration_AbstractTitle_Property = 2;
/**@const {number}*/
Property.$ordinal_FONT__org_pepstock_charba_client_configuration_AbstractTitle_Property = 3;
/**@const {number}*/
Property.$ordinal_FULL_SIZE__org_pepstock_charba_client_configuration_AbstractTitle_Property = 4;
/**@const {number}*/
Property.$ordinal_PADDING__org_pepstock_charba_client_configuration_AbstractTitle_Property = 5;
/**@const {number}*/
Property.$ordinal_POSITION__org_pepstock_charba_client_configuration_AbstractTitle_Property = 6;
/**@const {number}*/
Property.$ordinal_TEXT__org_pepstock_charba_client_configuration_AbstractTitle_Property = 7;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.configuration.AbstractTitle$Property");

exports = Property;

//# sourceMappingURL=AbstractTitle$Property.js.map