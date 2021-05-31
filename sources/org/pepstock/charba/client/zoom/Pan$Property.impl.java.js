goog.module('org.pepstock.charba.client.zoom.Pan.Property$impl');

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
  this.f_value__org_pepstock_charba_client_zoom_Pan_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_zoom_Pan_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_Pan_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_zoom_Pan_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_zoom_Pan_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_zoom_Pan_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_zoom_Pan_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_zoom_Pan_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_ENABLED__org_pepstock_charba_client_zoom_Pan_Property, Property.$static_MODIFIER_KEY__org_pepstock_charba_client_zoom_Pan_Property, Property.$static_ON_PAN__org_pepstock_charba_client_zoom_Pan_Property, Property.$static_ON_PAN_START__org_pepstock_charba_client_zoom_Pan_Property, Property.$static_ON_PAN_COMPLETED__org_pepstock_charba_client_zoom_Pan_Property, Property.$static_ON_PAN_REJECTED__org_pepstock_charba_client_zoom_Pan_Property, Property.$static_THRESHOLD__org_pepstock_charba_client_zoom_Pan_Property], Property));
 }
 /** @return {!Property} */
 static get f_ENABLED__org_pepstock_charba_client_zoom_Pan_Property() {
  return (Property.$clinit(), Property.$static_ENABLED__org_pepstock_charba_client_zoom_Pan_Property);
 }
 /** @return {!Property} */
 static get f_MODIFIER_KEY__org_pepstock_charba_client_zoom_Pan_Property() {
  return (Property.$clinit(), Property.$static_MODIFIER_KEY__org_pepstock_charba_client_zoom_Pan_Property);
 }
 /** @return {!Property} */
 static get f_ON_PAN__org_pepstock_charba_client_zoom_Pan_Property() {
  return (Property.$clinit(), Property.$static_ON_PAN__org_pepstock_charba_client_zoom_Pan_Property);
 }
 /** @return {!Property} */
 static get f_ON_PAN_START__org_pepstock_charba_client_zoom_Pan_Property() {
  return (Property.$clinit(), Property.$static_ON_PAN_START__org_pepstock_charba_client_zoom_Pan_Property);
 }
 /** @return {!Property} */
 static get f_ON_PAN_COMPLETED__org_pepstock_charba_client_zoom_Pan_Property() {
  return (Property.$clinit(), Property.$static_ON_PAN_COMPLETED__org_pepstock_charba_client_zoom_Pan_Property);
 }
 /** @return {!Property} */
 static get f_ON_PAN_REJECTED__org_pepstock_charba_client_zoom_Pan_Property() {
  return (Property.$clinit(), Property.$static_ON_PAN_REJECTED__org_pepstock_charba_client_zoom_Pan_Property);
 }
 /** @return {!Property} */
 static get f_THRESHOLD__org_pepstock_charba_client_zoom_Pan_Property() {
  return (Property.$clinit(), Property.$static_THRESHOLD__org_pepstock_charba_client_zoom_Pan_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_ENABLED__org_pepstock_charba_client_zoom_Pan_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ENABLED"), Property.$ordinal_ENABLED__org_pepstock_charba_client_zoom_Pan_Property, "enabled");
  Property.$static_MODIFIER_KEY__org_pepstock_charba_client_zoom_Pan_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MODIFIER_KEY"), Property.$ordinal_MODIFIER_KEY__org_pepstock_charba_client_zoom_Pan_Property, "modifierKey");
  Property.$static_ON_PAN__org_pepstock_charba_client_zoom_Pan_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ON_PAN"), Property.$ordinal_ON_PAN__org_pepstock_charba_client_zoom_Pan_Property, "onPan");
  Property.$static_ON_PAN_START__org_pepstock_charba_client_zoom_Pan_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ON_PAN_START"), Property.$ordinal_ON_PAN_START__org_pepstock_charba_client_zoom_Pan_Property, "onPanStart");
  Property.$static_ON_PAN_COMPLETED__org_pepstock_charba_client_zoom_Pan_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ON_PAN_COMPLETED"), Property.$ordinal_ON_PAN_COMPLETED__org_pepstock_charba_client_zoom_Pan_Property, "onPanComplete");
  Property.$static_ON_PAN_REJECTED__org_pepstock_charba_client_zoom_Pan_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ON_PAN_REJECTED"), Property.$ordinal_ON_PAN_REJECTED__org_pepstock_charba_client_zoom_Pan_Property, "onPanRejected");
  Property.$static_THRESHOLD__org_pepstock_charba_client_zoom_Pan_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("THRESHOLD"), Property.$ordinal_THRESHOLD__org_pepstock_charba_client_zoom_Pan_Property, "threshold");
  Property.f_namesToValuesMap__org_pepstock_charba_client_zoom_Pan_Property_ = null;
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
Property.$static_ENABLED__org_pepstock_charba_client_zoom_Pan_Property;
/**@private {!Property}*/
Property.$static_MODIFIER_KEY__org_pepstock_charba_client_zoom_Pan_Property;
/**@private {!Property}*/
Property.$static_ON_PAN__org_pepstock_charba_client_zoom_Pan_Property;
/**@private {!Property}*/
Property.$static_ON_PAN_START__org_pepstock_charba_client_zoom_Pan_Property;
/**@private {!Property}*/
Property.$static_ON_PAN_COMPLETED__org_pepstock_charba_client_zoom_Pan_Property;
/**@private {!Property}*/
Property.$static_ON_PAN_REJECTED__org_pepstock_charba_client_zoom_Pan_Property;
/**@private {!Property}*/
Property.$static_THRESHOLD__org_pepstock_charba_client_zoom_Pan_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_zoom_Pan_Property_;
/**@const {number}*/
Property.$ordinal_ENABLED__org_pepstock_charba_client_zoom_Pan_Property = 0;
/**@const {number}*/
Property.$ordinal_MODIFIER_KEY__org_pepstock_charba_client_zoom_Pan_Property = 1;
/**@const {number}*/
Property.$ordinal_ON_PAN__org_pepstock_charba_client_zoom_Pan_Property = 2;
/**@const {number}*/
Property.$ordinal_ON_PAN_START__org_pepstock_charba_client_zoom_Pan_Property = 3;
/**@const {number}*/
Property.$ordinal_ON_PAN_COMPLETED__org_pepstock_charba_client_zoom_Pan_Property = 4;
/**@const {number}*/
Property.$ordinal_ON_PAN_REJECTED__org_pepstock_charba_client_zoom_Pan_Property = 5;
/**@const {number}*/
Property.$ordinal_THRESHOLD__org_pepstock_charba_client_zoom_Pan_Property = 6;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.zoom.Pan$Property");

exports = Property;

//# sourceMappingURL=Pan$Property.js.map
