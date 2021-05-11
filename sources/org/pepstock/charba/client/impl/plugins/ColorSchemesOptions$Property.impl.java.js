goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions.Property$impl');

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
  this.f_value__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, Property.$static_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, Property.$static_SCHEME_NAME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, Property.$static_BACKGROUND_COLOR_ALPHA__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, Property.$static_REVERSE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property], Property));
 }
 /** @return {!Property} */
 static get f_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property() {
  return (Property.$clinit(), Property.$static_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property);
 }
 /** @return {!Property} */
 static get f_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property() {
  return (Property.$clinit(), Property.$static_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property);
 }
 /** @return {!Property} */
 static get f_SCHEME_NAME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property() {
  return (Property.$clinit(), Property.$static_SCHEME_NAME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property);
 }
 /** @return {!Property} */
 static get f_BACKGROUND_COLOR_ALPHA__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property() {
  return (Property.$clinit(), Property.$static_BACKGROUND_COLOR_ALPHA__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property);
 }
 /** @return {!Property} */
 static get f_REVERSE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property() {
  return (Property.$clinit(), Property.$static_REVERSE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SCHEME_SCOPE"), Property.$ordinal_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, "schemeScope");
  Property.$static_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SCHEME_CATEGORY"), Property.$ordinal_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, "schemeCategory");
  Property.$static_SCHEME_NAME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SCHEME_NAME"), Property.$ordinal_SCHEME_NAME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, "schemeName");
  Property.$static_BACKGROUND_COLOR_ALPHA__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BACKGROUND_COLOR_ALPHA"), Property.$ordinal_BACKGROUND_COLOR_ALPHA__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, "backgroundColorAlpha");
  Property.$static_REVERSE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REVERSE"), Property.$ordinal_REVERSE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property, "reverse");
  Property.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property_ = null;
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
Property.$static_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property;
/**@private {!Property}*/
Property.$static_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property;
/**@private {!Property}*/
Property.$static_SCHEME_NAME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property;
/**@private {!Property}*/
Property.$static_BACKGROUND_COLOR_ALPHA__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property;
/**@private {!Property}*/
Property.$static_REVERSE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property_;
/**@const {number}*/
Property.$ordinal_SCHEME_SCOPE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property = 0;
/**@const {number}*/
Property.$ordinal_SCHEME_CATEGORY__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property = 1;
/**@const {number}*/
Property.$ordinal_SCHEME_NAME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property = 2;
/**@const {number}*/
Property.$ordinal_BACKGROUND_COLOR_ALPHA__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property = 3;
/**@const {number}*/
Property.$ordinal_REVERSE__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions_Property = 4;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$Property");

exports = Property;

//# sourceMappingURL=ColorSchemesOptions$Property.js.map
