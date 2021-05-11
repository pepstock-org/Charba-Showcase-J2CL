goog.module('org.pepstock.charba.client.controllers.WrapperController.Property$impl');

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
  this.f_value__org_pepstock_charba_client_controllers_WrapperController_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_controllers_WrapperController_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_controllers_WrapperController_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_controllers_WrapperController_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_controllers_WrapperController_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_controllers_WrapperController_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_controllers_WrapperController_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_controllers_WrapperController_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_TYPE__org_pepstock_charba_client_controllers_WrapperController_Property, Property.$static_INITIALIZE__org_pepstock_charba_client_controllers_WrapperController_Property, Property.$static_ADD_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property, Property.$static_DRAW__org_pepstock_charba_client_controllers_WrapperController_Property, Property.$static_REMOVE_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property, Property.$static_SET_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property, Property.$static_UPDATE__org_pepstock_charba_client_controllers_WrapperController_Property, Property.$static_LINK_SCALES__org_pepstock_charba_client_controllers_WrapperController_Property, Property.$static_BUILD_OR_UPDATE_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property], Property));
 }
 /** @return {!Property} */
 static get f_TYPE__org_pepstock_charba_client_controllers_WrapperController_Property() {
  return (Property.$clinit(), Property.$static_TYPE__org_pepstock_charba_client_controllers_WrapperController_Property);
 }
 /** @return {!Property} */
 static get f_INITIALIZE__org_pepstock_charba_client_controllers_WrapperController_Property() {
  return (Property.$clinit(), Property.$static_INITIALIZE__org_pepstock_charba_client_controllers_WrapperController_Property);
 }
 /** @return {!Property} */
 static get f_ADD_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property() {
  return (Property.$clinit(), Property.$static_ADD_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property);
 }
 /** @return {!Property} */
 static get f_DRAW__org_pepstock_charba_client_controllers_WrapperController_Property() {
  return (Property.$clinit(), Property.$static_DRAW__org_pepstock_charba_client_controllers_WrapperController_Property);
 }
 /** @return {!Property} */
 static get f_REMOVE_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property() {
  return (Property.$clinit(), Property.$static_REMOVE_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property);
 }
 /** @return {!Property} */
 static get f_SET_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property() {
  return (Property.$clinit(), Property.$static_SET_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property);
 }
 /** @return {!Property} */
 static get f_UPDATE__org_pepstock_charba_client_controllers_WrapperController_Property() {
  return (Property.$clinit(), Property.$static_UPDATE__org_pepstock_charba_client_controllers_WrapperController_Property);
 }
 /** @return {!Property} */
 static get f_LINK_SCALES__org_pepstock_charba_client_controllers_WrapperController_Property() {
  return (Property.$clinit(), Property.$static_LINK_SCALES__org_pepstock_charba_client_controllers_WrapperController_Property);
 }
 /** @return {!Property} */
 static get f_BUILD_OR_UPDATE_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property() {
  return (Property.$clinit(), Property.$static_BUILD_OR_UPDATE_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_TYPE__org_pepstock_charba_client_controllers_WrapperController_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TYPE"), Property.$ordinal_TYPE__org_pepstock_charba_client_controllers_WrapperController_Property, "type");
  Property.$static_INITIALIZE__org_pepstock_charba_client_controllers_WrapperController_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INITIALIZE"), Property.$ordinal_INITIALIZE__org_pepstock_charba_client_controllers_WrapperController_Property, "initialize");
  Property.$static_ADD_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ADD_ELEMENTS"), Property.$ordinal_ADD_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property, "addElements");
  Property.$static_DRAW__org_pepstock_charba_client_controllers_WrapperController_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DRAW"), Property.$ordinal_DRAW__org_pepstock_charba_client_controllers_WrapperController_Property, "draw");
  Property.$static_REMOVE_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REMOVE_HOVER_STYLE"), Property.$ordinal_REMOVE_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property, "removeHoverStyle");
  Property.$static_SET_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SET_HOVER_STYLE"), Property.$ordinal_SET_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property, "setHoverStyle");
  Property.$static_UPDATE__org_pepstock_charba_client_controllers_WrapperController_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("UPDATE"), Property.$ordinal_UPDATE__org_pepstock_charba_client_controllers_WrapperController_Property, "update");
  Property.$static_LINK_SCALES__org_pepstock_charba_client_controllers_WrapperController_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINK_SCALES"), Property.$ordinal_LINK_SCALES__org_pepstock_charba_client_controllers_WrapperController_Property, "linkScales");
  Property.$static_BUILD_OR_UPDATE_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BUILD_OR_UPDATE_ELEMENTS"), Property.$ordinal_BUILD_OR_UPDATE_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property, "buildOrUpdateElements");
  Property.f_namesToValuesMap__org_pepstock_charba_client_controllers_WrapperController_Property_ = null;
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
Property.$static_TYPE__org_pepstock_charba_client_controllers_WrapperController_Property;
/**@private {!Property}*/
Property.$static_INITIALIZE__org_pepstock_charba_client_controllers_WrapperController_Property;
/**@private {!Property}*/
Property.$static_ADD_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property;
/**@private {!Property}*/
Property.$static_DRAW__org_pepstock_charba_client_controllers_WrapperController_Property;
/**@private {!Property}*/
Property.$static_REMOVE_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property;
/**@private {!Property}*/
Property.$static_SET_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property;
/**@private {!Property}*/
Property.$static_UPDATE__org_pepstock_charba_client_controllers_WrapperController_Property;
/**@private {!Property}*/
Property.$static_LINK_SCALES__org_pepstock_charba_client_controllers_WrapperController_Property;
/**@private {!Property}*/
Property.$static_BUILD_OR_UPDATE_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_controllers_WrapperController_Property_;
/**@const {number}*/
Property.$ordinal_TYPE__org_pepstock_charba_client_controllers_WrapperController_Property = 0;
/**@const {number}*/
Property.$ordinal_INITIALIZE__org_pepstock_charba_client_controllers_WrapperController_Property = 1;
/**@const {number}*/
Property.$ordinal_ADD_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property = 2;
/**@const {number}*/
Property.$ordinal_DRAW__org_pepstock_charba_client_controllers_WrapperController_Property = 3;
/**@const {number}*/
Property.$ordinal_REMOVE_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property = 4;
/**@const {number}*/
Property.$ordinal_SET_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property = 5;
/**@const {number}*/
Property.$ordinal_UPDATE__org_pepstock_charba_client_controllers_WrapperController_Property = 6;
/**@const {number}*/
Property.$ordinal_LINK_SCALES__org_pepstock_charba_client_controllers_WrapperController_Property = 7;
/**@const {number}*/
Property.$ordinal_BUILD_OR_UPDATE_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property = 8;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.controllers.WrapperController$Property");

exports = Property;

//# sourceMappingURL=WrapperController$Property.js.map
