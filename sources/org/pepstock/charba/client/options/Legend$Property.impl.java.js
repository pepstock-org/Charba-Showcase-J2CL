goog.module('org.pepstock.charba.client.options.Legend.Property$impl');

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
  this.f_value__org_pepstock_charba_client_options_Legend_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_options_Legend_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Legend_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_options_Legend_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_options_Legend_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_options_Legend_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_options_Legend_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_options_Legend_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_LABELS__org_pepstock_charba_client_options_Legend_Property, Property.$static_TITLE__org_pepstock_charba_client_options_Legend_Property, Property.$static_EVENTS__org_pepstock_charba_client_options_Legend_Property, Property.$static_MAX_WIDTH__org_pepstock_charba_client_options_Legend_Property, Property.$static_MAX_HEIGHT__org_pepstock_charba_client_options_Legend_Property, Property.$static_FULL_SIZE__org_pepstock_charba_client_options_Legend_Property, Property.$static_REVERSE__org_pepstock_charba_client_options_Legend_Property, Property.$static_RTL__org_pepstock_charba_client_options_Legend_Property, Property.$static_TEXT_DIRECTION__org_pepstock_charba_client_options_Legend_Property], Property));
 }
 /** @return {!Property} */
 static get f_LABELS__org_pepstock_charba_client_options_Legend_Property() {
  return (Property.$clinit(), Property.$static_LABELS__org_pepstock_charba_client_options_Legend_Property);
 }
 /** @return {!Property} */
 static get f_TITLE__org_pepstock_charba_client_options_Legend_Property() {
  return (Property.$clinit(), Property.$static_TITLE__org_pepstock_charba_client_options_Legend_Property);
 }
 /** @return {!Property} */
 static get f_EVENTS__org_pepstock_charba_client_options_Legend_Property() {
  return (Property.$clinit(), Property.$static_EVENTS__org_pepstock_charba_client_options_Legend_Property);
 }
 /** @return {!Property} */
 static get f_MAX_WIDTH__org_pepstock_charba_client_options_Legend_Property() {
  return (Property.$clinit(), Property.$static_MAX_WIDTH__org_pepstock_charba_client_options_Legend_Property);
 }
 /** @return {!Property} */
 static get f_MAX_HEIGHT__org_pepstock_charba_client_options_Legend_Property() {
  return (Property.$clinit(), Property.$static_MAX_HEIGHT__org_pepstock_charba_client_options_Legend_Property);
 }
 /** @return {!Property} */
 static get f_FULL_SIZE__org_pepstock_charba_client_options_Legend_Property() {
  return (Property.$clinit(), Property.$static_FULL_SIZE__org_pepstock_charba_client_options_Legend_Property);
 }
 /** @return {!Property} */
 static get f_REVERSE__org_pepstock_charba_client_options_Legend_Property() {
  return (Property.$clinit(), Property.$static_REVERSE__org_pepstock_charba_client_options_Legend_Property);
 }
 /** @return {!Property} */
 static get f_RTL__org_pepstock_charba_client_options_Legend_Property() {
  return (Property.$clinit(), Property.$static_RTL__org_pepstock_charba_client_options_Legend_Property);
 }
 /** @return {!Property} */
 static get f_TEXT_DIRECTION__org_pepstock_charba_client_options_Legend_Property() {
  return (Property.$clinit(), Property.$static_TEXT_DIRECTION__org_pepstock_charba_client_options_Legend_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_LABELS__org_pepstock_charba_client_options_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABELS"), Property.$ordinal_LABELS__org_pepstock_charba_client_options_Legend_Property, "labels");
  Property.$static_TITLE__org_pepstock_charba_client_options_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TITLE"), Property.$ordinal_TITLE__org_pepstock_charba_client_options_Legend_Property, "title");
  Property.$static_EVENTS__org_pepstock_charba_client_options_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EVENTS"), Property.$ordinal_EVENTS__org_pepstock_charba_client_options_Legend_Property, "events");
  Property.$static_MAX_WIDTH__org_pepstock_charba_client_options_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAX_WIDTH"), Property.$ordinal_MAX_WIDTH__org_pepstock_charba_client_options_Legend_Property, "maxWidth");
  Property.$static_MAX_HEIGHT__org_pepstock_charba_client_options_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAX_HEIGHT"), Property.$ordinal_MAX_HEIGHT__org_pepstock_charba_client_options_Legend_Property, "maxWidth");
  Property.$static_FULL_SIZE__org_pepstock_charba_client_options_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FULL_SIZE"), Property.$ordinal_FULL_SIZE__org_pepstock_charba_client_options_Legend_Property, "fullSize");
  Property.$static_REVERSE__org_pepstock_charba_client_options_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REVERSE"), Property.$ordinal_REVERSE__org_pepstock_charba_client_options_Legend_Property, "reverse");
  Property.$static_RTL__org_pepstock_charba_client_options_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RTL"), Property.$ordinal_RTL__org_pepstock_charba_client_options_Legend_Property, "rtl");
  Property.$static_TEXT_DIRECTION__org_pepstock_charba_client_options_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT_DIRECTION"), Property.$ordinal_TEXT_DIRECTION__org_pepstock_charba_client_options_Legend_Property, "textDirection");
  Property.f_namesToValuesMap__org_pepstock_charba_client_options_Legend_Property_ = null;
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
Property.$static_LABELS__org_pepstock_charba_client_options_Legend_Property;
/**@private {!Property}*/
Property.$static_TITLE__org_pepstock_charba_client_options_Legend_Property;
/**@private {!Property}*/
Property.$static_EVENTS__org_pepstock_charba_client_options_Legend_Property;
/**@private {!Property}*/
Property.$static_MAX_WIDTH__org_pepstock_charba_client_options_Legend_Property;
/**@private {!Property}*/
Property.$static_MAX_HEIGHT__org_pepstock_charba_client_options_Legend_Property;
/**@private {!Property}*/
Property.$static_FULL_SIZE__org_pepstock_charba_client_options_Legend_Property;
/**@private {!Property}*/
Property.$static_REVERSE__org_pepstock_charba_client_options_Legend_Property;
/**@private {!Property}*/
Property.$static_RTL__org_pepstock_charba_client_options_Legend_Property;
/**@private {!Property}*/
Property.$static_TEXT_DIRECTION__org_pepstock_charba_client_options_Legend_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_options_Legend_Property_;
/**@const {number}*/
Property.$ordinal_LABELS__org_pepstock_charba_client_options_Legend_Property = 0;
/**@const {number}*/
Property.$ordinal_TITLE__org_pepstock_charba_client_options_Legend_Property = 1;
/**@const {number}*/
Property.$ordinal_EVENTS__org_pepstock_charba_client_options_Legend_Property = 2;
/**@const {number}*/
Property.$ordinal_MAX_WIDTH__org_pepstock_charba_client_options_Legend_Property = 3;
/**@const {number}*/
Property.$ordinal_MAX_HEIGHT__org_pepstock_charba_client_options_Legend_Property = 4;
/**@const {number}*/
Property.$ordinal_FULL_SIZE__org_pepstock_charba_client_options_Legend_Property = 5;
/**@const {number}*/
Property.$ordinal_REVERSE__org_pepstock_charba_client_options_Legend_Property = 6;
/**@const {number}*/
Property.$ordinal_RTL__org_pepstock_charba_client_options_Legend_Property = 7;
/**@const {number}*/
Property.$ordinal_TEXT_DIRECTION__org_pepstock_charba_client_options_Legend_Property = 8;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.options.Legend$Property");

exports = Property;

//# sourceMappingURL=Legend$Property.js.map
