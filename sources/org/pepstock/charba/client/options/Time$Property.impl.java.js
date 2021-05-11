goog.module('org.pepstock.charba.client.options.Time.Property$impl');

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
  this.f_value__org_pepstock_charba_client_options_Time_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_options_Time_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Time_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_options_Time_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_options_Time_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_options_Time_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_options_Time_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_options_Time_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_DISPLAY_FORMATS__org_pepstock_charba_client_options_Time_Property, Property.$static_ISO_WEEKDAY__org_pepstock_charba_client_options_Time_Property, Property.$static_PARSER__org_pepstock_charba_client_options_Time_Property, Property.$static_ROUND__org_pepstock_charba_client_options_Time_Property, Property.$static_TOOLTIP_FORMAT__org_pepstock_charba_client_options_Time_Property, Property.$static_UNIT__org_pepstock_charba_client_options_Time_Property, Property.$static_STEP_SIZE__org_pepstock_charba_client_options_Time_Property, Property.$static_MIN_UNIT__org_pepstock_charba_client_options_Time_Property], Property));
 }
 /** @return {!Property} */
 static get f_DISPLAY_FORMATS__org_pepstock_charba_client_options_Time_Property() {
  return (Property.$clinit(), Property.$static_DISPLAY_FORMATS__org_pepstock_charba_client_options_Time_Property);
 }
 /** @return {!Property} */
 static get f_ISO_WEEKDAY__org_pepstock_charba_client_options_Time_Property() {
  return (Property.$clinit(), Property.$static_ISO_WEEKDAY__org_pepstock_charba_client_options_Time_Property);
 }
 /** @return {!Property} */
 static get f_PARSER__org_pepstock_charba_client_options_Time_Property() {
  return (Property.$clinit(), Property.$static_PARSER__org_pepstock_charba_client_options_Time_Property);
 }
 /** @return {!Property} */
 static get f_ROUND__org_pepstock_charba_client_options_Time_Property() {
  return (Property.$clinit(), Property.$static_ROUND__org_pepstock_charba_client_options_Time_Property);
 }
 /** @return {!Property} */
 static get f_TOOLTIP_FORMAT__org_pepstock_charba_client_options_Time_Property() {
  return (Property.$clinit(), Property.$static_TOOLTIP_FORMAT__org_pepstock_charba_client_options_Time_Property);
 }
 /** @return {!Property} */
 static get f_UNIT__org_pepstock_charba_client_options_Time_Property() {
  return (Property.$clinit(), Property.$static_UNIT__org_pepstock_charba_client_options_Time_Property);
 }
 /** @return {!Property} */
 static get f_STEP_SIZE__org_pepstock_charba_client_options_Time_Property() {
  return (Property.$clinit(), Property.$static_STEP_SIZE__org_pepstock_charba_client_options_Time_Property);
 }
 /** @return {!Property} */
 static get f_MIN_UNIT__org_pepstock_charba_client_options_Time_Property() {
  return (Property.$clinit(), Property.$static_MIN_UNIT__org_pepstock_charba_client_options_Time_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_DISPLAY_FORMATS__org_pepstock_charba_client_options_Time_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DISPLAY_FORMATS"), Property.$ordinal_DISPLAY_FORMATS__org_pepstock_charba_client_options_Time_Property, "displayFormats");
  Property.$static_ISO_WEEKDAY__org_pepstock_charba_client_options_Time_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ISO_WEEKDAY"), Property.$ordinal_ISO_WEEKDAY__org_pepstock_charba_client_options_Time_Property, "isoWeekday");
  Property.$static_PARSER__org_pepstock_charba_client_options_Time_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PARSER"), Property.$ordinal_PARSER__org_pepstock_charba_client_options_Time_Property, "parser");
  Property.$static_ROUND__org_pepstock_charba_client_options_Time_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROUND"), Property.$ordinal_ROUND__org_pepstock_charba_client_options_Time_Property, "round");
  Property.$static_TOOLTIP_FORMAT__org_pepstock_charba_client_options_Time_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TOOLTIP_FORMAT"), Property.$ordinal_TOOLTIP_FORMAT__org_pepstock_charba_client_options_Time_Property, "tooltipFormat");
  Property.$static_UNIT__org_pepstock_charba_client_options_Time_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UNIT"), Property.$ordinal_UNIT__org_pepstock_charba_client_options_Time_Property, "unit");
  Property.$static_STEP_SIZE__org_pepstock_charba_client_options_Time_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STEP_SIZE"), Property.$ordinal_STEP_SIZE__org_pepstock_charba_client_options_Time_Property, "stepSize");
  Property.$static_MIN_UNIT__org_pepstock_charba_client_options_Time_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MIN_UNIT"), Property.$ordinal_MIN_UNIT__org_pepstock_charba_client_options_Time_Property, "minUnit");
  Property.f_namesToValuesMap__org_pepstock_charba_client_options_Time_Property_ = null;
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
Property.$static_DISPLAY_FORMATS__org_pepstock_charba_client_options_Time_Property;
/**@private {!Property}*/
Property.$static_ISO_WEEKDAY__org_pepstock_charba_client_options_Time_Property;
/**@private {!Property}*/
Property.$static_PARSER__org_pepstock_charba_client_options_Time_Property;
/**@private {!Property}*/
Property.$static_ROUND__org_pepstock_charba_client_options_Time_Property;
/**@private {!Property}*/
Property.$static_TOOLTIP_FORMAT__org_pepstock_charba_client_options_Time_Property;
/**@private {!Property}*/
Property.$static_UNIT__org_pepstock_charba_client_options_Time_Property;
/**@private {!Property}*/
Property.$static_STEP_SIZE__org_pepstock_charba_client_options_Time_Property;
/**@private {!Property}*/
Property.$static_MIN_UNIT__org_pepstock_charba_client_options_Time_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_options_Time_Property_;
/**@const {number}*/
Property.$ordinal_DISPLAY_FORMATS__org_pepstock_charba_client_options_Time_Property = 0;
/**@const {number}*/
Property.$ordinal_ISO_WEEKDAY__org_pepstock_charba_client_options_Time_Property = 1;
/**@const {number}*/
Property.$ordinal_PARSER__org_pepstock_charba_client_options_Time_Property = 2;
/**@const {number}*/
Property.$ordinal_ROUND__org_pepstock_charba_client_options_Time_Property = 3;
/**@const {number}*/
Property.$ordinal_TOOLTIP_FORMAT__org_pepstock_charba_client_options_Time_Property = 4;
/**@const {number}*/
Property.$ordinal_UNIT__org_pepstock_charba_client_options_Time_Property = 5;
/**@const {number}*/
Property.$ordinal_STEP_SIZE__org_pepstock_charba_client_options_Time_Property = 6;
/**@const {number}*/
Property.$ordinal_MIN_UNIT__org_pepstock_charba_client_options_Time_Property = 7;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.options.Time$Property");

exports = Property;

//# sourceMappingURL=Time$Property.js.map
