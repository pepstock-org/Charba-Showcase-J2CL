goog.module('org.pepstock.charba.client.items.BaseBoxNodeItem.Property$impl');

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
  this.f_value__org_pepstock_charba_client_items_BaseBoxNodeItem_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_items_BaseBoxNodeItem_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_BaseBoxNodeItem_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_items_BaseBoxNodeItem_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_items_BaseBoxNodeItem_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_items_BaseBoxNodeItem_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_items_BaseBoxNodeItem_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_items_BaseBoxNodeItem_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_ACTIVE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Property.$static_FULL_SIZE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Property.$static_POSITION__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Property.$static_WEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Property.$static_MAX_WIDTH__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Property.$static_MAX_HEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Property.$static_PADDING_TOP__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Property.$static_PADDING_RIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Property.$static_PADDING_LEFT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Property.$static_PADDING_BOTTOM__org_pepstock_charba_client_items_BaseBoxNodeItem_Property], Property));
 }
 /** @return {!Property} */
 static get f_ACTIVE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property() {
  return (Property.$clinit(), Property.$static_ACTIVE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property);
 }
 /** @return {!Property} */
 static get f_FULL_SIZE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property() {
  return (Property.$clinit(), Property.$static_FULL_SIZE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property);
 }
 /** @return {!Property} */
 static get f_POSITION__org_pepstock_charba_client_items_BaseBoxNodeItem_Property() {
  return (Property.$clinit(), Property.$static_POSITION__org_pepstock_charba_client_items_BaseBoxNodeItem_Property);
 }
 /** @return {!Property} */
 static get f_WEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property() {
  return (Property.$clinit(), Property.$static_WEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property);
 }
 /** @return {!Property} */
 static get f_MAX_WIDTH__org_pepstock_charba_client_items_BaseBoxNodeItem_Property() {
  return (Property.$clinit(), Property.$static_MAX_WIDTH__org_pepstock_charba_client_items_BaseBoxNodeItem_Property);
 }
 /** @return {!Property} */
 static get f_MAX_HEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property() {
  return (Property.$clinit(), Property.$static_MAX_HEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property);
 }
 /** @return {!Property} */
 static get f_PADDING_TOP__org_pepstock_charba_client_items_BaseBoxNodeItem_Property() {
  return (Property.$clinit(), Property.$static_PADDING_TOP__org_pepstock_charba_client_items_BaseBoxNodeItem_Property);
 }
 /** @return {!Property} */
 static get f_PADDING_RIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property() {
  return (Property.$clinit(), Property.$static_PADDING_RIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property);
 }
 /** @return {!Property} */
 static get f_PADDING_LEFT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property() {
  return (Property.$clinit(), Property.$static_PADDING_LEFT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property);
 }
 /** @return {!Property} */
 static get f_PADDING_BOTTOM__org_pepstock_charba_client_items_BaseBoxNodeItem_Property() {
  return (Property.$clinit(), Property.$static_PADDING_BOTTOM__org_pepstock_charba_client_items_BaseBoxNodeItem_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_ACTIVE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ACTIVE"), Property.$ordinal_ACTIVE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, "active");
  Property.$static_FULL_SIZE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FULL_SIZE"), Property.$ordinal_FULL_SIZE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, "fullSize");
  Property.$static_POSITION__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POSITION"), Property.$ordinal_POSITION__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, "position");
  Property.$static_WEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WEIGHT"), Property.$ordinal_WEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, "weight");
  Property.$static_MAX_WIDTH__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAX_WIDTH"), Property.$ordinal_MAX_WIDTH__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, "maxWidth");
  Property.$static_MAX_HEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAX_HEIGHT"), Property.$ordinal_MAX_HEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, "maxHeight");
  Property.$static_PADDING_TOP__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PADDING_TOP"), Property.$ordinal_PADDING_TOP__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, "paddingTop");
  Property.$static_PADDING_RIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PADDING_RIGHT"), Property.$ordinal_PADDING_RIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, "paddingRight");
  Property.$static_PADDING_LEFT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PADDING_LEFT"), Property.$ordinal_PADDING_LEFT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, "paddingLeft");
  Property.$static_PADDING_BOTTOM__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PADDING_BOTTOM"), Property.$ordinal_PADDING_BOTTOM__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, "paddingBottom");
  Property.f_namesToValuesMap__org_pepstock_charba_client_items_BaseBoxNodeItem_Property_ = null;
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
Property.$static_ACTIVE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property;
/**@private {!Property}*/
Property.$static_FULL_SIZE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property;
/**@private {!Property}*/
Property.$static_POSITION__org_pepstock_charba_client_items_BaseBoxNodeItem_Property;
/**@private {!Property}*/
Property.$static_WEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property;
/**@private {!Property}*/
Property.$static_MAX_WIDTH__org_pepstock_charba_client_items_BaseBoxNodeItem_Property;
/**@private {!Property}*/
Property.$static_MAX_HEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property;
/**@private {!Property}*/
Property.$static_PADDING_TOP__org_pepstock_charba_client_items_BaseBoxNodeItem_Property;
/**@private {!Property}*/
Property.$static_PADDING_RIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property;
/**@private {!Property}*/
Property.$static_PADDING_LEFT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property;
/**@private {!Property}*/
Property.$static_PADDING_BOTTOM__org_pepstock_charba_client_items_BaseBoxNodeItem_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_items_BaseBoxNodeItem_Property_;
/**@const {number}*/
Property.$ordinal_ACTIVE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = 0;
/**@const {number}*/
Property.$ordinal_FULL_SIZE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = 1;
/**@const {number}*/
Property.$ordinal_POSITION__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = 2;
/**@const {number}*/
Property.$ordinal_WEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = 3;
/**@const {number}*/
Property.$ordinal_MAX_WIDTH__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = 4;
/**@const {number}*/
Property.$ordinal_MAX_HEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = 5;
/**@const {number}*/
Property.$ordinal_PADDING_TOP__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = 6;
/**@const {number}*/
Property.$ordinal_PADDING_RIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = 7;
/**@const {number}*/
Property.$ordinal_PADDING_LEFT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = 8;
/**@const {number}*/
Property.$ordinal_PADDING_BOTTOM__org_pepstock_charba_client_items_BaseBoxNodeItem_Property = 9;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.items.BaseBoxNodeItem$Property");

exports = Property;

//# sourceMappingURL=BaseBoxNodeItem$Property.js.map
