goog.module('org.pepstock.charba.client.configuration.Segment.Property$impl');

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
  this.f_value__org_pepstock_charba_client_configuration_Segment_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_configuration_Segment_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Segment_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_configuration_Segment_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_configuration_Segment_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_Segment_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_Segment_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_Segment_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_Segment_Property, Property.$static_BORDER_WIDTH__org_pepstock_charba_client_configuration_Segment_Property, Property.$static_BORDER_COLOR__org_pepstock_charba_client_configuration_Segment_Property, Property.$static_BORDER_DASH__org_pepstock_charba_client_configuration_Segment_Property, Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_Segment_Property, Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_configuration_Segment_Property, Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_configuration_Segment_Property, Property.$static_CHART__org_pepstock_charba_client_configuration_Segment_Property], Property));
 }
 /** @return {!Property} */
 static get f_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_Segment_Property() {
  return (Property.$clinit(), Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_Segment_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_WIDTH__org_pepstock_charba_client_configuration_Segment_Property() {
  return (Property.$clinit(), Property.$static_BORDER_WIDTH__org_pepstock_charba_client_configuration_Segment_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_COLOR__org_pepstock_charba_client_configuration_Segment_Property() {
  return (Property.$clinit(), Property.$static_BORDER_COLOR__org_pepstock_charba_client_configuration_Segment_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_DASH__org_pepstock_charba_client_configuration_Segment_Property() {
  return (Property.$clinit(), Property.$static_BORDER_DASH__org_pepstock_charba_client_configuration_Segment_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_Segment_Property() {
  return (Property.$clinit(), Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_Segment_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_CAP_STYLE__org_pepstock_charba_client_configuration_Segment_Property() {
  return (Property.$clinit(), Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_configuration_Segment_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_JOIN_STYLE__org_pepstock_charba_client_configuration_Segment_Property() {
  return (Property.$clinit(), Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_configuration_Segment_Property);
 }
 /** @return {!Property} */
 static get f_CHART__org_pepstock_charba_client_configuration_Segment_Property() {
  return (Property.$clinit(), Property.$static_CHART__org_pepstock_charba_client_configuration_Segment_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_Segment_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BACKGROUND_COLOR"), Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_Segment_Property, "backgroundColor");
  Property.$static_BORDER_WIDTH__org_pepstock_charba_client_configuration_Segment_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_WIDTH"), Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_configuration_Segment_Property, "borderWidth");
  Property.$static_BORDER_COLOR__org_pepstock_charba_client_configuration_Segment_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_COLOR"), Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_configuration_Segment_Property, "borderColor");
  Property.$static_BORDER_DASH__org_pepstock_charba_client_configuration_Segment_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_DASH"), Property.$ordinal_BORDER_DASH__org_pepstock_charba_client_configuration_Segment_Property, "borderDash");
  Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_Segment_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_DASH_OFFSET"), Property.$ordinal_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_Segment_Property, "borderDashOffset");
  Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_configuration_Segment_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_CAP_STYLE"), Property.$ordinal_BORDER_CAP_STYLE__org_pepstock_charba_client_configuration_Segment_Property, "borderCapStyle");
  Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_configuration_Segment_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_JOIN_STYLE"), Property.$ordinal_BORDER_JOIN_STYLE__org_pepstock_charba_client_configuration_Segment_Property, "borderJoinStyle");
  Property.$static_CHART__org_pepstock_charba_client_configuration_Segment_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHART"), Property.$ordinal_CHART__org_pepstock_charba_client_configuration_Segment_Property, "chart");
  Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_Segment_Property_ = null;
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
Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_Segment_Property;
/**@private {!Property}*/
Property.$static_BORDER_WIDTH__org_pepstock_charba_client_configuration_Segment_Property;
/**@private {!Property}*/
Property.$static_BORDER_COLOR__org_pepstock_charba_client_configuration_Segment_Property;
/**@private {!Property}*/
Property.$static_BORDER_DASH__org_pepstock_charba_client_configuration_Segment_Property;
/**@private {!Property}*/
Property.$static_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_Segment_Property;
/**@private {!Property}*/
Property.$static_BORDER_CAP_STYLE__org_pepstock_charba_client_configuration_Segment_Property;
/**@private {!Property}*/
Property.$static_BORDER_JOIN_STYLE__org_pepstock_charba_client_configuration_Segment_Property;
/**@private {!Property}*/
Property.$static_CHART__org_pepstock_charba_client_configuration_Segment_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_Segment_Property_;
/**@const {number}*/
Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_Segment_Property = 0;
/**@const {number}*/
Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_configuration_Segment_Property = 1;
/**@const {number}*/
Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_configuration_Segment_Property = 2;
/**@const {number}*/
Property.$ordinal_BORDER_DASH__org_pepstock_charba_client_configuration_Segment_Property = 3;
/**@const {number}*/
Property.$ordinal_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_Segment_Property = 4;
/**@const {number}*/
Property.$ordinal_BORDER_CAP_STYLE__org_pepstock_charba_client_configuration_Segment_Property = 5;
/**@const {number}*/
Property.$ordinal_BORDER_JOIN_STYLE__org_pepstock_charba_client_configuration_Segment_Property = 6;
/**@const {number}*/
Property.$ordinal_CHART__org_pepstock_charba_client_configuration_Segment_Property = 7;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.configuration.Segment$Property");

exports = Property;

//# sourceMappingURL=Segment$Property.js.map
