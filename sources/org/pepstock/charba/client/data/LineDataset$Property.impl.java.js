goog.module('org.pepstock.charba.client.data.LineDataset.Property$impl');

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
  this.f_value__org_pepstock_charba_client_data_LineDataset_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_data_LineDataset_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_LineDataset_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_data_LineDataset_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_data_LineDataset_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_data_LineDataset_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_data_LineDataset_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_data_LineDataset_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_X_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property, Property.$static_Y_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property, Property.$static_INDEX_AXIS__org_pepstock_charba_client_data_LineDataset_Property, Property.$static_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_data_LineDataset_Property, Property.$static_SHOW_LINE__org_pepstock_charba_client_data_LineDataset_Property, Property.$static_STEPPED__org_pepstock_charba_client_data_LineDataset_Property], Property));
 }
 /** @return {!Property} */
 static get f_X_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property() {
  return (Property.$clinit(), Property.$static_X_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property);
 }
 /** @return {!Property} */
 static get f_Y_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property() {
  return (Property.$clinit(), Property.$static_Y_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property);
 }
 /** @return {!Property} */
 static get f_INDEX_AXIS__org_pepstock_charba_client_data_LineDataset_Property() {
  return (Property.$clinit(), Property.$static_INDEX_AXIS__org_pepstock_charba_client_data_LineDataset_Property);
 }
 /** @return {!Property} */
 static get f_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_data_LineDataset_Property() {
  return (Property.$clinit(), Property.$static_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_data_LineDataset_Property);
 }
 /** @return {!Property} */
 static get f_SHOW_LINE__org_pepstock_charba_client_data_LineDataset_Property() {
  return (Property.$clinit(), Property.$static_SHOW_LINE__org_pepstock_charba_client_data_LineDataset_Property);
 }
 /** @return {!Property} */
 static get f_STEPPED__org_pepstock_charba_client_data_LineDataset_Property() {
  return (Property.$clinit(), Property.$static_STEPPED__org_pepstock_charba_client_data_LineDataset_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_X_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X_AXIS_ID"), Property.$ordinal_X_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property, "xAxisID");
  Property.$static_Y_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y_AXIS_ID"), Property.$ordinal_Y_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property, "yAxisID");
  Property.$static_INDEX_AXIS__org_pepstock_charba_client_data_LineDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INDEX_AXIS"), Property.$ordinal_INDEX_AXIS__org_pepstock_charba_client_data_LineDataset_Property, "indexAxis");
  Property.$static_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_data_LineDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CUBIC_INTERPOLATION_MODE"), Property.$ordinal_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_data_LineDataset_Property, "cubicInterpolationMode");
  Property.$static_SHOW_LINE__org_pepstock_charba_client_data_LineDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SHOW_LINE"), Property.$ordinal_SHOW_LINE__org_pepstock_charba_client_data_LineDataset_Property, "showLine");
  Property.$static_STEPPED__org_pepstock_charba_client_data_LineDataset_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STEPPED"), Property.$ordinal_STEPPED__org_pepstock_charba_client_data_LineDataset_Property, "stepped");
  Property.f_namesToValuesMap__org_pepstock_charba_client_data_LineDataset_Property_ = null;
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
Property.$static_X_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property;
/**@private {!Property}*/
Property.$static_Y_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property;
/**@private {!Property}*/
Property.$static_INDEX_AXIS__org_pepstock_charba_client_data_LineDataset_Property;
/**@private {!Property}*/
Property.$static_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_data_LineDataset_Property;
/**@private {!Property}*/
Property.$static_SHOW_LINE__org_pepstock_charba_client_data_LineDataset_Property;
/**@private {!Property}*/
Property.$static_STEPPED__org_pepstock_charba_client_data_LineDataset_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_data_LineDataset_Property_;
/**@const {number}*/
Property.$ordinal_X_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property = 0;
/**@const {number}*/
Property.$ordinal_Y_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property = 1;
/**@const {number}*/
Property.$ordinal_INDEX_AXIS__org_pepstock_charba_client_data_LineDataset_Property = 2;
/**@const {number}*/
Property.$ordinal_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_data_LineDataset_Property = 3;
/**@const {number}*/
Property.$ordinal_SHOW_LINE__org_pepstock_charba_client_data_LineDataset_Property = 4;
/**@const {number}*/
Property.$ordinal_STEPPED__org_pepstock_charba_client_data_LineDataset_Property = 5;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.data.LineDataset$Property");

exports = Property;

//# sourceMappingURL=LineDataset$Property.js.map
