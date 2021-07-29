goog.module('org.pepstock.charba.client.configuration.Axis.Property$impl');

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
  this.f_value__org_pepstock_charba_client_configuration_Axis_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_configuration_Axis_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Axis_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_configuration_Axis_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_configuration_Axis_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_Axis_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_Axis_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_Axis_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_BEFORE_UPDATE__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_AFTER_UPDATE__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_BEFORE_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_AFTER_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_BEFORE_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_AFTER_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_BEFORE_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_AFTER_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_BEFORE_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_AFTER_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_BEFORE_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_AFTER_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_BEFORE_FIT__org_pepstock_charba_client_configuration_Axis_Property, Property.$static_AFTER_FIT__org_pepstock_charba_client_configuration_Axis_Property], Property));
 }
 /** @return {!Property} */
 static get f_BEFORE_UPDATE__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_UPDATE__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_UPDATE__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_AFTER_UPDATE__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_AFTER_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_AFTER_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_AFTER_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_AFTER_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_AFTER_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_FIT__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_FIT__org_pepstock_charba_client_configuration_Axis_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_FIT__org_pepstock_charba_client_configuration_Axis_Property() {
  return (Property.$clinit(), Property.$static_AFTER_FIT__org_pepstock_charba_client_configuration_Axis_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_BEFORE_UPDATE__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_UPDATE"), Property.$ordinal_BEFORE_UPDATE__org_pepstock_charba_client_configuration_Axis_Property, "beforeUpdate");
  Property.$static_AFTER_UPDATE__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_UPDATE"), Property.$ordinal_AFTER_UPDATE__org_pepstock_charba_client_configuration_Axis_Property, "afterUpdate");
  Property.$static_BEFORE_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_SET_DIMENSIONS"), Property.$ordinal_BEFORE_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property, "beforeSetDimensions");
  Property.$static_AFTER_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_SET_DIMENSIONS"), Property.$ordinal_AFTER_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property, "afterSetDimensions");
  Property.$static_BEFORE_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_DATA_LIMITS"), Property.$ordinal_BEFORE_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property, "beforeDataLimits");
  Property.$static_AFTER_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_DATA_LIMITS"), Property.$ordinal_AFTER_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property, "afterDataLimits");
  Property.$static_BEFORE_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_BUILD_TICKS"), Property.$ordinal_BEFORE_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property, "beforeBuildTicks");
  Property.$static_AFTER_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_BUILD_TICKS"), Property.$ordinal_AFTER_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property, "afterBuildTicks");
  Property.$static_BEFORE_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_TICK_TO_LABEL_CONVERSION"), Property.$ordinal_BEFORE_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property, "beforeTickToLabelConversion");
  Property.$static_AFTER_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_TICK_TO_LABEL_CONVERSION"), Property.$ordinal_AFTER_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property, "afterTickToLabelConversion");
  Property.$static_BEFORE_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_CALCULATE_LABEL_ROTATION"), Property.$ordinal_BEFORE_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property, "beforeCalculateLabelRotation");
  Property.$static_AFTER_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_CALCULATE_LABEL_ROTATION"), Property.$ordinal_AFTER_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property, "afterCalculateLabelRotation");
  Property.$static_BEFORE_FIT__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_FIT"), Property.$ordinal_BEFORE_FIT__org_pepstock_charba_client_configuration_Axis_Property, "beforeFit");
  Property.$static_AFTER_FIT__org_pepstock_charba_client_configuration_Axis_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_FIT"), Property.$ordinal_AFTER_FIT__org_pepstock_charba_client_configuration_Axis_Property, "afterFit");
  Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_Axis_Property_ = null;
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
Property.$static_BEFORE_UPDATE__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_AFTER_UPDATE__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_BEFORE_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_AFTER_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_BEFORE_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_AFTER_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_BEFORE_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_AFTER_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_BEFORE_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_AFTER_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_BEFORE_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_AFTER_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_BEFORE_FIT__org_pepstock_charba_client_configuration_Axis_Property;
/**@private {!Property}*/
Property.$static_AFTER_FIT__org_pepstock_charba_client_configuration_Axis_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_Axis_Property_;
/**@const {number}*/
Property.$ordinal_BEFORE_UPDATE__org_pepstock_charba_client_configuration_Axis_Property = 0;
/**@const {number}*/
Property.$ordinal_AFTER_UPDATE__org_pepstock_charba_client_configuration_Axis_Property = 1;
/**@const {number}*/
Property.$ordinal_BEFORE_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property = 2;
/**@const {number}*/
Property.$ordinal_AFTER_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property = 3;
/**@const {number}*/
Property.$ordinal_BEFORE_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property = 4;
/**@const {number}*/
Property.$ordinal_AFTER_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property = 5;
/**@const {number}*/
Property.$ordinal_BEFORE_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property = 6;
/**@const {number}*/
Property.$ordinal_AFTER_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property = 7;
/**@const {number}*/
Property.$ordinal_BEFORE_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property = 8;
/**@const {number}*/
Property.$ordinal_AFTER_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property = 9;
/**@const {number}*/
Property.$ordinal_BEFORE_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property = 10;
/**@const {number}*/
Property.$ordinal_AFTER_CALCULATE_LABEL_ROTATION__org_pepstock_charba_client_configuration_Axis_Property = 11;
/**@const {number}*/
Property.$ordinal_BEFORE_FIT__org_pepstock_charba_client_configuration_Axis_Property = 12;
/**@const {number}*/
Property.$ordinal_AFTER_FIT__org_pepstock_charba_client_configuration_Axis_Property = 13;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.configuration.Axis$Property");

exports = Property;

//# sourceMappingURL=Axis$Property.js.map
