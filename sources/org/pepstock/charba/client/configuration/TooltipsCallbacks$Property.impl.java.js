goog.module('org.pepstock.charba.client.configuration.TooltipsCallbacks.Property$impl');

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
  this.f_value__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_BEFORE_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_AFTER_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_BEFORE_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_AFTER_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_BEFORE_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_LABEL_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_LABEL_TEXT_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_LABEL_POINT_STYLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_AFTER_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_BEFORE_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, Property.$static_AFTER_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property], Property));
 }
 /** @return {!Property} */
 static get f_BEFORE_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_AFTER_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_AFTER_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_LABEL_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_TEXT_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_LABEL_TEXT_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_POINT_STYLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_LABEL_POINT_STYLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_AFTER_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_BEFORE_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_BEFORE_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 /** @return {!Property} */
 static get f_AFTER_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property() {
  return (Property.$clinit(), Property.$static_AFTER_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_BEFORE_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_TITLE"), Property.$ordinal_BEFORE_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "beforeTitle");
  Property.$static_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TITLE"), Property.$ordinal_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "title");
  Property.$static_AFTER_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_TITLE"), Property.$ordinal_AFTER_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "afterTitle");
  Property.$static_BEFORE_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_BODY"), Property.$ordinal_BEFORE_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "beforeBody");
  Property.$static_AFTER_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_BODY"), Property.$ordinal_AFTER_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "afterBody");
  Property.$static_BEFORE_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_LABEL"), Property.$ordinal_BEFORE_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "beforeLabel");
  Property.$static_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL"), Property.$ordinal_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "label");
  Property.$static_LABEL_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_COLOR"), Property.$ordinal_LABEL_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "labelColor");
  Property.$static_LABEL_TEXT_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_TEXT_COLOR"), Property.$ordinal_LABEL_TEXT_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "labelTextColor");
  Property.$static_LABEL_POINT_STYLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_POINT_STYLE"), Property.$ordinal_LABEL_POINT_STYLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "labelPointStyle");
  Property.$static_AFTER_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_LABEL"), Property.$ordinal_AFTER_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "afterLabel");
  Property.$static_BEFORE_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_FOOTER"), Property.$ordinal_BEFORE_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "beforeFooter");
  Property.$static_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FOOTER"), Property.$ordinal_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "footer");
  Property.$static_AFTER_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER_FOOTER"), Property.$ordinal_AFTER_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, "afterFooter");
  Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property_ = null;
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
Property.$static_BEFORE_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_AFTER_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_BEFORE_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_AFTER_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_BEFORE_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_LABEL_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_LABEL_TEXT_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_LABEL_POINT_STYLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_AFTER_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_BEFORE_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@private {!Property}*/
Property.$static_AFTER_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property_;
/**@const {number}*/
Property.$ordinal_BEFORE_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 0;
/**@const {number}*/
Property.$ordinal_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 1;
/**@const {number}*/
Property.$ordinal_AFTER_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 2;
/**@const {number}*/
Property.$ordinal_BEFORE_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 3;
/**@const {number}*/
Property.$ordinal_AFTER_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 4;
/**@const {number}*/
Property.$ordinal_BEFORE_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 5;
/**@const {number}*/
Property.$ordinal_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 6;
/**@const {number}*/
Property.$ordinal_LABEL_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 7;
/**@const {number}*/
Property.$ordinal_LABEL_TEXT_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 8;
/**@const {number}*/
Property.$ordinal_LABEL_POINT_STYLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 9;
/**@const {number}*/
Property.$ordinal_AFTER_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 10;
/**@const {number}*/
Property.$ordinal_BEFORE_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 11;
/**@const {number}*/
Property.$ordinal_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 12;
/**@const {number}*/
Property.$ordinal_AFTER_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property = 13;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.configuration.TooltipsCallbacks$Property");

exports = Property;

//# sourceMappingURL=TooltipsCallbacks$Property.js.map
