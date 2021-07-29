goog.module('org.pepstock.charba.client.geo.Legend.Property$impl');

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
  this.f_value__org_pepstock_charba_client_geo_Legend_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_geo_Legend_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_Legend_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_geo_Legend_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_geo_Legend_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_geo_Legend_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_geo_Legend_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_geo_Legend_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_POSITION__org_pepstock_charba_client_geo_Legend_Property, Property.$static_ALIGN__org_pepstock_charba_client_geo_Legend_Property, Property.$static_LENGTH__org_pepstock_charba_client_geo_Legend_Property, Property.$static_WIDTH__org_pepstock_charba_client_geo_Legend_Property, Property.$static_INDICATOR_WIDTH__org_pepstock_charba_client_geo_Legend_Property, Property.$static_MARGIN__org_pepstock_charba_client_geo_Legend_Property], Property));
 }
 /** @return {!Property} */
 static get f_POSITION__org_pepstock_charba_client_geo_Legend_Property() {
  return (Property.$clinit(), Property.$static_POSITION__org_pepstock_charba_client_geo_Legend_Property);
 }
 /** @return {!Property} */
 static get f_ALIGN__org_pepstock_charba_client_geo_Legend_Property() {
  return (Property.$clinit(), Property.$static_ALIGN__org_pepstock_charba_client_geo_Legend_Property);
 }
 /** @return {!Property} */
 static get f_LENGTH__org_pepstock_charba_client_geo_Legend_Property() {
  return (Property.$clinit(), Property.$static_LENGTH__org_pepstock_charba_client_geo_Legend_Property);
 }
 /** @return {!Property} */
 static get f_WIDTH__org_pepstock_charba_client_geo_Legend_Property() {
  return (Property.$clinit(), Property.$static_WIDTH__org_pepstock_charba_client_geo_Legend_Property);
 }
 /** @return {!Property} */
 static get f_INDICATOR_WIDTH__org_pepstock_charba_client_geo_Legend_Property() {
  return (Property.$clinit(), Property.$static_INDICATOR_WIDTH__org_pepstock_charba_client_geo_Legend_Property);
 }
 /** @return {!Property} */
 static get f_MARGIN__org_pepstock_charba_client_geo_Legend_Property() {
  return (Property.$clinit(), Property.$static_MARGIN__org_pepstock_charba_client_geo_Legend_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_POSITION__org_pepstock_charba_client_geo_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POSITION"), Property.$ordinal_POSITION__org_pepstock_charba_client_geo_Legend_Property, "position");
  Property.$static_ALIGN__org_pepstock_charba_client_geo_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALIGN"), Property.$ordinal_ALIGN__org_pepstock_charba_client_geo_Legend_Property, "align");
  Property.$static_LENGTH__org_pepstock_charba_client_geo_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LENGTH"), Property.$ordinal_LENGTH__org_pepstock_charba_client_geo_Legend_Property, "length");
  Property.$static_WIDTH__org_pepstock_charba_client_geo_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WIDTH"), Property.$ordinal_WIDTH__org_pepstock_charba_client_geo_Legend_Property, "width");
  Property.$static_INDICATOR_WIDTH__org_pepstock_charba_client_geo_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INDICATOR_WIDTH"), Property.$ordinal_INDICATOR_WIDTH__org_pepstock_charba_client_geo_Legend_Property, "indicatorWidth");
  Property.$static_MARGIN__org_pepstock_charba_client_geo_Legend_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MARGIN"), Property.$ordinal_MARGIN__org_pepstock_charba_client_geo_Legend_Property, "margin");
  Property.f_namesToValuesMap__org_pepstock_charba_client_geo_Legend_Property_ = null;
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
Property.$static_POSITION__org_pepstock_charba_client_geo_Legend_Property;
/**@private {!Property}*/
Property.$static_ALIGN__org_pepstock_charba_client_geo_Legend_Property;
/**@private {!Property}*/
Property.$static_LENGTH__org_pepstock_charba_client_geo_Legend_Property;
/**@private {!Property}*/
Property.$static_WIDTH__org_pepstock_charba_client_geo_Legend_Property;
/**@private {!Property}*/
Property.$static_INDICATOR_WIDTH__org_pepstock_charba_client_geo_Legend_Property;
/**@private {!Property}*/
Property.$static_MARGIN__org_pepstock_charba_client_geo_Legend_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_geo_Legend_Property_;
/**@const {number}*/
Property.$ordinal_POSITION__org_pepstock_charba_client_geo_Legend_Property = 0;
/**@const {number}*/
Property.$ordinal_ALIGN__org_pepstock_charba_client_geo_Legend_Property = 1;
/**@const {number}*/
Property.$ordinal_LENGTH__org_pepstock_charba_client_geo_Legend_Property = 2;
/**@const {number}*/
Property.$ordinal_WIDTH__org_pepstock_charba_client_geo_Legend_Property = 3;
/**@const {number}*/
Property.$ordinal_INDICATOR_WIDTH__org_pepstock_charba_client_geo_Legend_Property = 4;
/**@const {number}*/
Property.$ordinal_MARGIN__org_pepstock_charba_client_geo_Legend_Property = 5;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.geo.Legend$Property");

exports = Property;

//# sourceMappingURL=Legend$Property.js.map
