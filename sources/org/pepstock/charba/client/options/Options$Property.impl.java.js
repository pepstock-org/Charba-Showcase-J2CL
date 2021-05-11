goog.module('org.pepstock.charba.client.options.Options.Property$impl');

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
  this.f_value__org_pepstock_charba_client_options_Options_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_options_Options_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Options_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_options_Options_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_options_Options_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_options_Options_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_options_Options_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_options_Options_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_FONT__org_pepstock_charba_client_options_Options_Property, Property.$static_INTERACTION__org_pepstock_charba_client_options_Options_Property, Property.$static_HOVER__org_pepstock_charba_client_options_Options_Property, Property.$static_ELEMENTS__org_pepstock_charba_client_options_Options_Property, Property.$static_PLUGINS__org_pepstock_charba_client_options_Options_Property, Property.$static_LAYOUT__org_pepstock_charba_client_options_Options_Property, Property.$static_DATASETS__org_pepstock_charba_client_options_Options_Property, Property.$static_COLOR__org_pepstock_charba_client_options_Options_Property, Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_Options_Property, Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Options_Property, Property.$static_RESPONSIVE__org_pepstock_charba_client_options_Options_Property, Property.$static_MAINTAIN_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property, Property.$static_RESIZE_DELAY__org_pepstock_charba_client_options_Options_Property, Property.$static_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property, Property.$static_DEVICE_PIXEL_RATIO__org_pepstock_charba_client_options_Options_Property, Property.$static_EVENTS__org_pepstock_charba_client_options_Options_Property, Property.$static_SHOW_LINE__org_pepstock_charba_client_options_Options_Property, Property.$static_SKIP_NULL__org_pepstock_charba_client_options_Options_Property, Property.$static_CUTOUT__org_pepstock_charba_client_options_Options_Property, Property.$static_RADIUS__org_pepstock_charba_client_options_Options_Property, Property.$static_ROTATION__org_pepstock_charba_client_options_Options_Property, Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_options_Options_Property, Property.$static_INDEX_AXIS__org_pepstock_charba_client_options_Options_Property, Property.$static_CHARBA_DRAW_ON_ATTACH__org_pepstock_charba_client_options_Options_Property, Property.$static_CHARBA_DESTROY_ON_DETACH__org_pepstock_charba_client_options_Options_Property], Property));
 }
 /** @return {!Property} */
 static get f_FONT__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_FONT__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_INTERACTION__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_INTERACTION__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_HOVER__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_HOVER__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_ELEMENTS__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_ELEMENTS__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_PLUGINS__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_PLUGINS__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_LAYOUT__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_LAYOUT__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_DATASETS__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_DATASETS__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_COLOR__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_COLOR__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_BACKGROUND_COLOR__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_COLOR__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_RESPONSIVE__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_RESPONSIVE__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_MAINTAIN_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_MAINTAIN_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_RESIZE_DELAY__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_RESIZE_DELAY__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_DEVICE_PIXEL_RATIO__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_DEVICE_PIXEL_RATIO__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_EVENTS__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_EVENTS__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_SHOW_LINE__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_SHOW_LINE__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_SKIP_NULL__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_SKIP_NULL__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_CUTOUT__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_CUTOUT__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_RADIUS__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_RADIUS__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_ROTATION__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_ROTATION__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_CIRCUMFERENCE__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_INDEX_AXIS__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_INDEX_AXIS__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_DRAW_ON_ATTACH__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_DRAW_ON_ATTACH__org_pepstock_charba_client_options_Options_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_DESTROY_ON_DETACH__org_pepstock_charba_client_options_Options_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_DESTROY_ON_DETACH__org_pepstock_charba_client_options_Options_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_FONT__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FONT"), Property.$ordinal_FONT__org_pepstock_charba_client_options_Options_Property, "font");
  Property.$static_INTERACTION__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INTERACTION"), Property.$ordinal_INTERACTION__org_pepstock_charba_client_options_Options_Property, "interaction");
  Property.$static_HOVER__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOVER"), Property.$ordinal_HOVER__org_pepstock_charba_client_options_Options_Property, "hover");
  Property.$static_ELEMENTS__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ELEMENTS"), Property.$ordinal_ELEMENTS__org_pepstock_charba_client_options_Options_Property, "elements");
  Property.$static_PLUGINS__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PLUGINS"), Property.$ordinal_PLUGINS__org_pepstock_charba_client_options_Options_Property, "plugins");
  Property.$static_LAYOUT__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LAYOUT"), Property.$ordinal_LAYOUT__org_pepstock_charba_client_options_Options_Property, "layout");
  Property.$static_DATASETS__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATASETS"), Property.$ordinal_DATASETS__org_pepstock_charba_client_options_Options_Property, "datasets");
  Property.$static_COLOR__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR"), Property.$ordinal_COLOR__org_pepstock_charba_client_options_Options_Property, "color");
  Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BACKGROUND_COLOR"), Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_options_Options_Property, "backgroundColor");
  Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_COLOR"), Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_options_Options_Property, "borderColor");
  Property.$static_RESPONSIVE__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RESPONSIVE"), Property.$ordinal_RESPONSIVE__org_pepstock_charba_client_options_Options_Property, "responsive");
  Property.$static_MAINTAIN_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAINTAIN_ASPECT_RATIO"), Property.$ordinal_MAINTAIN_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property, "maintainAspectRatio");
  Property.$static_RESIZE_DELAY__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RESIZE_DELAY"), Property.$ordinal_RESIZE_DELAY__org_pepstock_charba_client_options_Options_Property, "resizeDelay");
  Property.$static_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ASPECT_RATIO"), Property.$ordinal_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property, "aspectRatio");
  Property.$static_DEVICE_PIXEL_RATIO__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DEVICE_PIXEL_RATIO"), Property.$ordinal_DEVICE_PIXEL_RATIO__org_pepstock_charba_client_options_Options_Property, "devicePixelRatio");
  Property.$static_EVENTS__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EVENTS"), Property.$ordinal_EVENTS__org_pepstock_charba_client_options_Options_Property, "events");
  Property.$static_SHOW_LINE__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHOW_LINE"), Property.$ordinal_SHOW_LINE__org_pepstock_charba_client_options_Options_Property, "showLine");
  Property.$static_SKIP_NULL__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SKIP_NULL"), Property.$ordinal_SKIP_NULL__org_pepstock_charba_client_options_Options_Property, "skipNull");
  Property.$static_CUTOUT__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CUTOUT"), Property.$ordinal_CUTOUT__org_pepstock_charba_client_options_Options_Property, "cutout");
  Property.$static_RADIUS__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RADIUS"), Property.$ordinal_RADIUS__org_pepstock_charba_client_options_Options_Property, "radius");
  Property.$static_ROTATION__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROTATION"), Property.$ordinal_ROTATION__org_pepstock_charba_client_options_Options_Property, "rotation");
  Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CIRCUMFERENCE"), Property.$ordinal_CIRCUMFERENCE__org_pepstock_charba_client_options_Options_Property, "circumference");
  Property.$static_INDEX_AXIS__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INDEX_AXIS"), Property.$ordinal_INDEX_AXIS__org_pepstock_charba_client_options_Options_Property, "indexAxis");
  Property.$static_CHARBA_DRAW_ON_ATTACH__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_DRAW_ON_ATTACH"), Property.$ordinal_CHARBA_DRAW_ON_ATTACH__org_pepstock_charba_client_options_Options_Property, "charbaDrawOnAttach");
  Property.$static_CHARBA_DESTROY_ON_DETACH__org_pepstock_charba_client_options_Options_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_DESTROY_ON_DETACH"), Property.$ordinal_CHARBA_DESTROY_ON_DETACH__org_pepstock_charba_client_options_Options_Property, "charbaDestroyOnDetach");
  Property.f_namesToValuesMap__org_pepstock_charba_client_options_Options_Property_ = null;
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
Property.$static_FONT__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_INTERACTION__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_HOVER__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_ELEMENTS__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_PLUGINS__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_LAYOUT__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_DATASETS__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_COLOR__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_RESPONSIVE__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_MAINTAIN_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_RESIZE_DELAY__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_DEVICE_PIXEL_RATIO__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_EVENTS__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_SHOW_LINE__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_SKIP_NULL__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_CUTOUT__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_RADIUS__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_ROTATION__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_CIRCUMFERENCE__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_INDEX_AXIS__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_CHARBA_DRAW_ON_ATTACH__org_pepstock_charba_client_options_Options_Property;
/**@private {!Property}*/
Property.$static_CHARBA_DESTROY_ON_DETACH__org_pepstock_charba_client_options_Options_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_options_Options_Property_;
/**@const {number}*/
Property.$ordinal_FONT__org_pepstock_charba_client_options_Options_Property = 0;
/**@const {number}*/
Property.$ordinal_INTERACTION__org_pepstock_charba_client_options_Options_Property = 1;
/**@const {number}*/
Property.$ordinal_HOVER__org_pepstock_charba_client_options_Options_Property = 2;
/**@const {number}*/
Property.$ordinal_ELEMENTS__org_pepstock_charba_client_options_Options_Property = 3;
/**@const {number}*/
Property.$ordinal_PLUGINS__org_pepstock_charba_client_options_Options_Property = 4;
/**@const {number}*/
Property.$ordinal_LAYOUT__org_pepstock_charba_client_options_Options_Property = 5;
/**@const {number}*/
Property.$ordinal_DATASETS__org_pepstock_charba_client_options_Options_Property = 6;
/**@const {number}*/
Property.$ordinal_COLOR__org_pepstock_charba_client_options_Options_Property = 7;
/**@const {number}*/
Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_options_Options_Property = 8;
/**@const {number}*/
Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_options_Options_Property = 9;
/**@const {number}*/
Property.$ordinal_RESPONSIVE__org_pepstock_charba_client_options_Options_Property = 10;
/**@const {number}*/
Property.$ordinal_MAINTAIN_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property = 11;
/**@const {number}*/
Property.$ordinal_RESIZE_DELAY__org_pepstock_charba_client_options_Options_Property = 12;
/**@const {number}*/
Property.$ordinal_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property = 13;
/**@const {number}*/
Property.$ordinal_DEVICE_PIXEL_RATIO__org_pepstock_charba_client_options_Options_Property = 14;
/**@const {number}*/
Property.$ordinal_EVENTS__org_pepstock_charba_client_options_Options_Property = 15;
/**@const {number}*/
Property.$ordinal_SHOW_LINE__org_pepstock_charba_client_options_Options_Property = 16;
/**@const {number}*/
Property.$ordinal_SKIP_NULL__org_pepstock_charba_client_options_Options_Property = 17;
/**@const {number}*/
Property.$ordinal_CUTOUT__org_pepstock_charba_client_options_Options_Property = 18;
/**@const {number}*/
Property.$ordinal_RADIUS__org_pepstock_charba_client_options_Options_Property = 19;
/**@const {number}*/
Property.$ordinal_ROTATION__org_pepstock_charba_client_options_Options_Property = 20;
/**@const {number}*/
Property.$ordinal_CIRCUMFERENCE__org_pepstock_charba_client_options_Options_Property = 21;
/**@const {number}*/
Property.$ordinal_INDEX_AXIS__org_pepstock_charba_client_options_Options_Property = 22;
/**@const {number}*/
Property.$ordinal_CHARBA_DRAW_ON_ATTACH__org_pepstock_charba_client_options_Options_Property = 23;
/**@const {number}*/
Property.$ordinal_CHARBA_DESTROY_ON_DETACH__org_pepstock_charba_client_options_Options_Property = 24;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.options.Options$Property");

exports = Property;

//# sourceMappingURL=Options$Property.js.map
