goog.module('org.pepstock.charba.client.options.Grid.Property$impl');

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
  this.f_value__org_pepstock_charba_client_options_Grid_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_options_Grid_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Grid_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_options_Grid_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_options_Grid_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_options_Grid_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_options_Grid_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_options_Grid_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_CIRCULAR__org_pepstock_charba_client_options_Grid_Property, Property.$static_COLOR__org_pepstock_charba_client_options_Grid_Property, Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Grid_Property, Property.$static_BORDER_WIDTH__org_pepstock_charba_client_options_Grid_Property, Property.$static_DISPLAY__org_pepstock_charba_client_options_Grid_Property, Property.$static_DRAW_BORDER__org_pepstock_charba_client_options_Grid_Property, Property.$static_DRAW_ON_CHART_AREA__org_pepstock_charba_client_options_Grid_Property, Property.$static_DRAW_TICKS__org_pepstock_charba_client_options_Grid_Property, Property.$static_LINE_WIDTH__org_pepstock_charba_client_options_Grid_Property, Property.$static_OFFSET__org_pepstock_charba_client_options_Grid_Property, Property.$static_TICK_LENGTH__org_pepstock_charba_client_options_Grid_Property, Property.$static_TICK_BORDER_DASH__org_pepstock_charba_client_options_Grid_Property, Property.$static_TICK_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_Grid_Property, Property.$static_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property, Property.$static_TICK_WIDTH__org_pepstock_charba_client_options_Grid_Property, Property.$static_Z__org_pepstock_charba_client_options_Grid_Property], Property));
 }
 /** @return {!Property} */
 static get f_CIRCULAR__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_CIRCULAR__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_COLOR__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_COLOR__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_COLOR__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_WIDTH__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_BORDER_WIDTH__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_DISPLAY__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_DISPLAY__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_DRAW_BORDER__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_DRAW_BORDER__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_DRAW_ON_CHART_AREA__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_DRAW_ON_CHART_AREA__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_DRAW_TICKS__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_DRAW_TICKS__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_LINE_WIDTH__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_LINE_WIDTH__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_OFFSET__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_OFFSET__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_TICK_LENGTH__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_TICK_LENGTH__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_TICK_BORDER_DASH__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_TICK_BORDER_DASH__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_TICK_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_TICK_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_TICK_WIDTH__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_TICK_WIDTH__org_pepstock_charba_client_options_Grid_Property);
 }
 /** @return {!Property} */
 static get f_Z__org_pepstock_charba_client_options_Grid_Property() {
  return (Property.$clinit(), Property.$static_Z__org_pepstock_charba_client_options_Grid_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_CIRCULAR__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CIRCULAR"), Property.$ordinal_CIRCULAR__org_pepstock_charba_client_options_Grid_Property, "circular");
  Property.$static_COLOR__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR"), Property.$ordinal_COLOR__org_pepstock_charba_client_options_Grid_Property, "color");
  Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_COLOR"), Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_options_Grid_Property, "borderColor");
  Property.$static_BORDER_WIDTH__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_WIDTH"), Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_options_Grid_Property, "borderWidth");
  Property.$static_DISPLAY__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DISPLAY"), Property.$ordinal_DISPLAY__org_pepstock_charba_client_options_Grid_Property, "display");
  Property.$static_DRAW_BORDER__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DRAW_BORDER"), Property.$ordinal_DRAW_BORDER__org_pepstock_charba_client_options_Grid_Property, "drawBorder");
  Property.$static_DRAW_ON_CHART_AREA__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DRAW_ON_CHART_AREA"), Property.$ordinal_DRAW_ON_CHART_AREA__org_pepstock_charba_client_options_Grid_Property, "drawOnChartArea");
  Property.$static_DRAW_TICKS__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DRAW_TICKS"), Property.$ordinal_DRAW_TICKS__org_pepstock_charba_client_options_Grid_Property, "drawTicks");
  Property.$static_LINE_WIDTH__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINE_WIDTH"), Property.$ordinal_LINE_WIDTH__org_pepstock_charba_client_options_Grid_Property, "lineWidth");
  Property.$static_OFFSET__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OFFSET"), Property.$ordinal_OFFSET__org_pepstock_charba_client_options_Grid_Property, "offset");
  Property.$static_TICK_LENGTH__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TICK_LENGTH"), Property.$ordinal_TICK_LENGTH__org_pepstock_charba_client_options_Grid_Property, "tickLength");
  Property.$static_TICK_BORDER_DASH__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TICK_BORDER_DASH"), Property.$ordinal_TICK_BORDER_DASH__org_pepstock_charba_client_options_Grid_Property, "tickBorderDash");
  Property.$static_TICK_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TICK_BORDER_DASH_OFFSET"), Property.$ordinal_TICK_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_Grid_Property, "tickBorderDashOffset");
  Property.$static_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TICK_COLOR"), Property.$ordinal_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property, "tickColor");
  Property.$static_TICK_WIDTH__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TICK_WIDTH"), Property.$ordinal_TICK_WIDTH__org_pepstock_charba_client_options_Grid_Property, "tickWidth");
  Property.$static_Z__org_pepstock_charba_client_options_Grid_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Z"), Property.$ordinal_Z__org_pepstock_charba_client_options_Grid_Property, "z");
  Property.f_namesToValuesMap__org_pepstock_charba_client_options_Grid_Property_ = null;
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
Property.$static_CIRCULAR__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_COLOR__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_BORDER_WIDTH__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_DISPLAY__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_DRAW_BORDER__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_DRAW_ON_CHART_AREA__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_DRAW_TICKS__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_LINE_WIDTH__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_OFFSET__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_TICK_LENGTH__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_TICK_BORDER_DASH__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_TICK_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_TICK_WIDTH__org_pepstock_charba_client_options_Grid_Property;
/**@private {!Property}*/
Property.$static_Z__org_pepstock_charba_client_options_Grid_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_options_Grid_Property_;
/**@const {number}*/
Property.$ordinal_CIRCULAR__org_pepstock_charba_client_options_Grid_Property = 0;
/**@const {number}*/
Property.$ordinal_COLOR__org_pepstock_charba_client_options_Grid_Property = 1;
/**@const {number}*/
Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_options_Grid_Property = 2;
/**@const {number}*/
Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_options_Grid_Property = 3;
/**@const {number}*/
Property.$ordinal_DISPLAY__org_pepstock_charba_client_options_Grid_Property = 4;
/**@const {number}*/
Property.$ordinal_DRAW_BORDER__org_pepstock_charba_client_options_Grid_Property = 5;
/**@const {number}*/
Property.$ordinal_DRAW_ON_CHART_AREA__org_pepstock_charba_client_options_Grid_Property = 6;
/**@const {number}*/
Property.$ordinal_DRAW_TICKS__org_pepstock_charba_client_options_Grid_Property = 7;
/**@const {number}*/
Property.$ordinal_LINE_WIDTH__org_pepstock_charba_client_options_Grid_Property = 8;
/**@const {number}*/
Property.$ordinal_OFFSET__org_pepstock_charba_client_options_Grid_Property = 9;
/**@const {number}*/
Property.$ordinal_TICK_LENGTH__org_pepstock_charba_client_options_Grid_Property = 10;
/**@const {number}*/
Property.$ordinal_TICK_BORDER_DASH__org_pepstock_charba_client_options_Grid_Property = 11;
/**@const {number}*/
Property.$ordinal_TICK_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_Grid_Property = 12;
/**@const {number}*/
Property.$ordinal_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property = 13;
/**@const {number}*/
Property.$ordinal_TICK_WIDTH__org_pepstock_charba_client_options_Grid_Property = 14;
/**@const {number}*/
Property.$ordinal_Z__org_pepstock_charba_client_options_Grid_Property = 15;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.options.Grid$Property");

exports = Property;

//# sourceMappingURL=Grid$Property.js.map
