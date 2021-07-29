goog.module('org.pepstock.charba.client.items.ScaleItem.Property$impl');

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
  this.f_value__org_pepstock_charba_client_items_ScaleItem_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_items_ScaleItem_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_ScaleItem_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_items_ScaleItem_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_items_ScaleItem_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_items_ScaleItem_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_items_ScaleItem_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_items_ScaleItem_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_ID__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_AXIS__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_MIN__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_MAX__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_TICKS__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_LABEL_ROTATION__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_START__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_END__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_X_CENTER__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_Y_CENTER__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_DRAWING_AREA__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_POINT_LABELS__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_TYPE__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_POSITION__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_OPTIONS__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_CHART__org_pepstock_charba_client_items_ScaleItem_Property, Property.$static_CHARBA_ID__org_pepstock_charba_client_items_ScaleItem_Property], Property));
 }
 /** @return {!Property} */
 static get f_ID__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_ID__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_AXIS__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_AXIS__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_MIN__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_MIN__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_MAX__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_MAX__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_TICKS__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_TICKS__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_LABEL_ROTATION__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_LABEL_ROTATION__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_START__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_START__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_END__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_END__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_X_CENTER__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_X_CENTER__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_Y_CENTER__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_Y_CENTER__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_DRAWING_AREA__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_DRAWING_AREA__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_POINT_LABELS__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_POINT_LABELS__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_TYPE__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_TYPE__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_POSITION__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_POSITION__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_OPTIONS__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_OPTIONS__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_CHART__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_CHART__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 /** @return {!Property} */
 static get f_CHARBA_ID__org_pepstock_charba_client_items_ScaleItem_Property() {
  return (Property.$clinit(), Property.$static_CHARBA_ID__org_pepstock_charba_client_items_ScaleItem_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_ID__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ID"), Property.$ordinal_ID__org_pepstock_charba_client_items_ScaleItem_Property, "id");
  Property.$static_AXIS__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AXIS"), Property.$ordinal_AXIS__org_pepstock_charba_client_items_ScaleItem_Property, "axis");
  Property.$static_MIN__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MIN"), Property.$ordinal_MIN__org_pepstock_charba_client_items_ScaleItem_Property, "min");
  Property.$static_MAX__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAX"), Property.$ordinal_MAX__org_pepstock_charba_client_items_ScaleItem_Property, "max");
  Property.$static_TICKS__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TICKS"), Property.$ordinal_TICKS__org_pepstock_charba_client_items_ScaleItem_Property, "ticks");
  Property.$static_LABEL_ROTATION__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABEL_ROTATION"), Property.$ordinal_LABEL_ROTATION__org_pepstock_charba_client_items_ScaleItem_Property, "labelRotation");
  Property.$static_START__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("START"), Property.$ordinal_START__org_pepstock_charba_client_items_ScaleItem_Property, "start");
  Property.$static_END__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("END"), Property.$ordinal_END__org_pepstock_charba_client_items_ScaleItem_Property, "end");
  Property.$static_X_CENTER__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X_CENTER"), Property.$ordinal_X_CENTER__org_pepstock_charba_client_items_ScaleItem_Property, "xCenter");
  Property.$static_Y_CENTER__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y_CENTER"), Property.$ordinal_Y_CENTER__org_pepstock_charba_client_items_ScaleItem_Property, "yCenter");
  Property.$static_DRAWING_AREA__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DRAWING_AREA"), Property.$ordinal_DRAWING_AREA__org_pepstock_charba_client_items_ScaleItem_Property, "drawingArea");
  Property.$static_POINT_LABELS__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINT_LABELS"), Property.$ordinal_POINT_LABELS__org_pepstock_charba_client_items_ScaleItem_Property, "pointLabels");
  Property.$static_TYPE__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TYPE"), Property.$ordinal_TYPE__org_pepstock_charba_client_items_ScaleItem_Property, "type");
  Property.$static_POSITION__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POSITION"), Property.$ordinal_POSITION__org_pepstock_charba_client_items_ScaleItem_Property, "position");
  Property.$static_OPTIONS__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OPTIONS"), Property.$ordinal_OPTIONS__org_pepstock_charba_client_items_ScaleItem_Property, "options");
  Property.$static_CHART__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHART"), Property.$ordinal_CHART__org_pepstock_charba_client_items_ScaleItem_Property, "chart");
  Property.$static_CHARBA_ID__org_pepstock_charba_client_items_ScaleItem_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARBA_ID"), Property.$ordinal_CHARBA_ID__org_pepstock_charba_client_items_ScaleItem_Property, "charbaId");
  Property.f_namesToValuesMap__org_pepstock_charba_client_items_ScaleItem_Property_ = null;
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
Property.$static_ID__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_AXIS__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_MIN__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_MAX__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_TICKS__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_LABEL_ROTATION__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_START__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_END__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_X_CENTER__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_Y_CENTER__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_DRAWING_AREA__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_POINT_LABELS__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_TYPE__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_POSITION__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_OPTIONS__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_CHART__org_pepstock_charba_client_items_ScaleItem_Property;
/**@private {!Property}*/
Property.$static_CHARBA_ID__org_pepstock_charba_client_items_ScaleItem_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_items_ScaleItem_Property_;
/**@const {number}*/
Property.$ordinal_ID__org_pepstock_charba_client_items_ScaleItem_Property = 0;
/**@const {number}*/
Property.$ordinal_AXIS__org_pepstock_charba_client_items_ScaleItem_Property = 1;
/**@const {number}*/
Property.$ordinal_MIN__org_pepstock_charba_client_items_ScaleItem_Property = 2;
/**@const {number}*/
Property.$ordinal_MAX__org_pepstock_charba_client_items_ScaleItem_Property = 3;
/**@const {number}*/
Property.$ordinal_TICKS__org_pepstock_charba_client_items_ScaleItem_Property = 4;
/**@const {number}*/
Property.$ordinal_LABEL_ROTATION__org_pepstock_charba_client_items_ScaleItem_Property = 5;
/**@const {number}*/
Property.$ordinal_START__org_pepstock_charba_client_items_ScaleItem_Property = 6;
/**@const {number}*/
Property.$ordinal_END__org_pepstock_charba_client_items_ScaleItem_Property = 7;
/**@const {number}*/
Property.$ordinal_X_CENTER__org_pepstock_charba_client_items_ScaleItem_Property = 8;
/**@const {number}*/
Property.$ordinal_Y_CENTER__org_pepstock_charba_client_items_ScaleItem_Property = 9;
/**@const {number}*/
Property.$ordinal_DRAWING_AREA__org_pepstock_charba_client_items_ScaleItem_Property = 10;
/**@const {number}*/
Property.$ordinal_POINT_LABELS__org_pepstock_charba_client_items_ScaleItem_Property = 11;
/**@const {number}*/
Property.$ordinal_TYPE__org_pepstock_charba_client_items_ScaleItem_Property = 12;
/**@const {number}*/
Property.$ordinal_POSITION__org_pepstock_charba_client_items_ScaleItem_Property = 13;
/**@const {number}*/
Property.$ordinal_OPTIONS__org_pepstock_charba_client_items_ScaleItem_Property = 14;
/**@const {number}*/
Property.$ordinal_CHART__org_pepstock_charba_client_items_ScaleItem_Property = 15;
/**@const {number}*/
Property.$ordinal_CHARBA_ID__org_pepstock_charba_client_items_ScaleItem_Property = 16;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.items.ScaleItem$Property");

exports = Property;

//# sourceMappingURL=ScaleItem$Property.js.map
