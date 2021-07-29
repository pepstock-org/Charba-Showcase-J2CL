goog.module('org.pepstock.charba.client.geo.CommonOptionsElementHandler.Property$impl');

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
  this.f_value__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_OUTLINE_BACKGROUND_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, Property.$static_OUTLINE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, Property.$static_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, Property.$static_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, Property.$static_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property], Property));
 }
 /** @return {!Property} */
 static get f_OUTLINE_BACKGROUND_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property() {
  return (Property.$clinit(), Property.$static_OUTLINE_BACKGROUND_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property);
 }
 /** @return {!Property} */
 static get f_OUTLINE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property() {
  return (Property.$clinit(), Property.$static_OUTLINE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property);
 }
 /** @return {!Property} */
 static get f_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property() {
  return (Property.$clinit(), Property.$static_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property);
 }
 /** @return {!Property} */
 static get f_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property() {
  return (Property.$clinit(), Property.$static_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property);
 }
 /** @return {!Property} */
 static get f_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property() {
  return (Property.$clinit(), Property.$static_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_OUTLINE_BACKGROUND_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OUTLINE_BACKGROUND_COLOR"), Property.$ordinal_OUTLINE_BACKGROUND_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, "outlineBackgroundColor");
  Property.$static_OUTLINE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OUTLINE_BORDER_COLOR"), Property.$ordinal_OUTLINE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, "outlineBorderColor");
  Property.$static_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OUTLINE_BORDER_WIDTH"), Property.$ordinal_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, "outlineBorderWidth");
  Property.$static_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GRATICULE_BORDER_COLOR"), Property.$ordinal_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, "graticuleBorderColor");
  Property.$static_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GRATICULE_BORDER_WIDTH"), Property.$ordinal_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property, "graticuleBorderWidth");
  Property.f_namesToValuesMap__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property_ = null;
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
Property.$static_OUTLINE_BACKGROUND_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property;
/**@private {!Property}*/
Property.$static_OUTLINE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property;
/**@private {!Property}*/
Property.$static_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property;
/**@private {!Property}*/
Property.$static_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property;
/**@private {!Property}*/
Property.$static_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property_;
/**@const {number}*/
Property.$ordinal_OUTLINE_BACKGROUND_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property = 0;
/**@const {number}*/
Property.$ordinal_OUTLINE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property = 1;
/**@const {number}*/
Property.$ordinal_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property = 2;
/**@const {number}*/
Property.$ordinal_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property = 3;
/**@const {number}*/
Property.$ordinal_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler_Property = 4;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.geo.CommonOptionsElementHandler$Property");

exports = Property;

//# sourceMappingURL=CommonOptionsElementHandler$Property.js.map
