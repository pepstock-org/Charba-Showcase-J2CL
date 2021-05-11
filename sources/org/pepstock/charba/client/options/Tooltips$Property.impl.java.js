goog.module('org.pepstock.charba.client.options.Tooltips.Property$impl');

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
  this.f_value__org_pepstock_charba_client_options_Tooltips_Property_;
 }
 /** @return {!Property} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Property();
  $instance.$ctor__org_pepstock_charba_client_options_Tooltips_Property__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Tooltips_Property__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_options_Tooltips_Property_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_options_Tooltips_Property_;
 }
 /** @return {!Property} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Property.$clinit();
  if ($Equality.$same(Property.f_namesToValuesMap__org_pepstock_charba_client_options_Tooltips_Property_, null)) {
   Property.f_namesToValuesMap__org_pepstock_charba_client_options_Tooltips_Property_ = $Enums.createMapFromValues(Property.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Property.f_namesToValuesMap__org_pepstock_charba_client_options_Tooltips_Property_);
 }
 /** @return {!Array<!Property>} */
 static m_values__() {
  Property.$clinit();
  return /**@type {!Array<Property>}*/ ($Arrays.$init([Property.$static_CALLBACKS__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_ENABLED__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_EVENTS__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_POSITION__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_X_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_Y_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_TITLE_COLOR__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_TITLE_FONT__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_TITLE_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_TITLE_SPACING__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_TITLE_MARGIN_BOTTOM__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_BODY_COLOR__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_BODY_FONT__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_BODY_SPACING__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_BODY_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_FOOTER_COLOR__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_FOOTER_FONT__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_FOOTER_SPACING__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_FOOTER_MARGIN_TOP__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_FOOTER_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_PADDING__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_CARET_PADDING__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_CARET_SIZE__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_CORNER_RADIUS__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_MULTI_KEY_BACKGROUND__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_DISPLAY_COLORS__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_BORDER_WIDTH__org_pepstock_charba_client_options_Tooltips_Property, Property.$static_USE_POINT_STYLE__org_pepstock_charba_client_options_Tooltips_Property], Property));
 }
 /** @return {!Property} */
 static get f_CALLBACKS__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_CALLBACKS__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_ENABLED__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_ENABLED__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_EVENTS__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_EVENTS__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_POSITION__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_POSITION__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_X_ALIGN__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_X_ALIGN__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_Y_ALIGN__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_Y_ALIGN__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_BACKGROUND_COLOR__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_TITLE_COLOR__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_TITLE_COLOR__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_TITLE_FONT__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_TITLE_FONT__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_TITLE_ALIGN__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_TITLE_ALIGN__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_TITLE_SPACING__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_TITLE_SPACING__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_TITLE_MARGIN_BOTTOM__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_TITLE_MARGIN_BOTTOM__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_BODY_COLOR__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_BODY_COLOR__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_BODY_FONT__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_BODY_FONT__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_BODY_SPACING__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_BODY_SPACING__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_BODY_ALIGN__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_BODY_ALIGN__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_FOOTER_COLOR__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_FOOTER_COLOR__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_FOOTER_FONT__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_FOOTER_FONT__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_FOOTER_SPACING__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_FOOTER_SPACING__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_FOOTER_MARGIN_TOP__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_FOOTER_MARGIN_TOP__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_FOOTER_ALIGN__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_FOOTER_ALIGN__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_PADDING__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_PADDING__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_CARET_PADDING__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_CARET_PADDING__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_CARET_SIZE__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_CARET_SIZE__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_CORNER_RADIUS__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_CORNER_RADIUS__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_MULTI_KEY_BACKGROUND__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_MULTI_KEY_BACKGROUND__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_DISPLAY_COLORS__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_DISPLAY_COLORS__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_COLOR__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_BORDER_WIDTH__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_BORDER_WIDTH__org_pepstock_charba_client_options_Tooltips_Property);
 }
 /** @return {!Property} */
 static get f_USE_POINT_STYLE__org_pepstock_charba_client_options_Tooltips_Property() {
  return (Property.$clinit(), Property.$static_USE_POINT_STYLE__org_pepstock_charba_client_options_Tooltips_Property);
 }
 
 static $clinit() {
  Property.$clinit = () =>{};
  Property.$loadModules();
  Enum.$clinit();
  Property.$static_CALLBACKS__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CALLBACKS"), Property.$ordinal_CALLBACKS__org_pepstock_charba_client_options_Tooltips_Property, "callbacks");
  Property.$static_ENABLED__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ENABLED"), Property.$ordinal_ENABLED__org_pepstock_charba_client_options_Tooltips_Property, "enabled");
  Property.$static_EVENTS__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EVENTS"), Property.$ordinal_EVENTS__org_pepstock_charba_client_options_Tooltips_Property, "events");
  Property.$static_POSITION__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POSITION"), Property.$ordinal_POSITION__org_pepstock_charba_client_options_Tooltips_Property, "position");
  Property.$static_X_ALIGN__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X_ALIGN"), Property.$ordinal_X_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, "xAlign");
  Property.$static_Y_ALIGN__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y_ALIGN"), Property.$ordinal_Y_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, "yAlign");
  Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BACKGROUND_COLOR"), Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_options_Tooltips_Property, "backgroundColor");
  Property.$static_TITLE_COLOR__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TITLE_COLOR"), Property.$ordinal_TITLE_COLOR__org_pepstock_charba_client_options_Tooltips_Property, "titleColor");
  Property.$static_TITLE_FONT__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TITLE_FONT"), Property.$ordinal_TITLE_FONT__org_pepstock_charba_client_options_Tooltips_Property, "titleFont");
  Property.$static_TITLE_ALIGN__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TITLE_ALIGN"), Property.$ordinal_TITLE_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, "titleAlign");
  Property.$static_TITLE_SPACING__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TITLE_SPACING"), Property.$ordinal_TITLE_SPACING__org_pepstock_charba_client_options_Tooltips_Property, "titleSpacing");
  Property.$static_TITLE_MARGIN_BOTTOM__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TITLE_MARGIN_BOTTOM"), Property.$ordinal_TITLE_MARGIN_BOTTOM__org_pepstock_charba_client_options_Tooltips_Property, "titleMarginBottom");
  Property.$static_BODY_COLOR__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BODY_COLOR"), Property.$ordinal_BODY_COLOR__org_pepstock_charba_client_options_Tooltips_Property, "bodyColor");
  Property.$static_BODY_FONT__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BODY_FONT"), Property.$ordinal_BODY_FONT__org_pepstock_charba_client_options_Tooltips_Property, "bodyFont");
  Property.$static_BODY_SPACING__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BODY_SPACING"), Property.$ordinal_BODY_SPACING__org_pepstock_charba_client_options_Tooltips_Property, "bodySpacing");
  Property.$static_BODY_ALIGN__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BODY_ALIGN"), Property.$ordinal_BODY_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, "bodyAlign");
  Property.$static_FOOTER_COLOR__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FOOTER_COLOR"), Property.$ordinal_FOOTER_COLOR__org_pepstock_charba_client_options_Tooltips_Property, "footerColor");
  Property.$static_FOOTER_FONT__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FOOTER_FONT"), Property.$ordinal_FOOTER_FONT__org_pepstock_charba_client_options_Tooltips_Property, "footerFont");
  Property.$static_FOOTER_SPACING__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FOOTER_SPACING"), Property.$ordinal_FOOTER_SPACING__org_pepstock_charba_client_options_Tooltips_Property, "footerSpacing");
  Property.$static_FOOTER_MARGIN_TOP__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FOOTER_MARGIN_TOP"), Property.$ordinal_FOOTER_MARGIN_TOP__org_pepstock_charba_client_options_Tooltips_Property, "footerMarginTop");
  Property.$static_FOOTER_ALIGN__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FOOTER_ALIGN"), Property.$ordinal_FOOTER_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, "footerAlign");
  Property.$static_PADDING__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PADDING"), Property.$ordinal_PADDING__org_pepstock_charba_client_options_Tooltips_Property, "padding");
  Property.$static_CARET_PADDING__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CARET_PADDING"), Property.$ordinal_CARET_PADDING__org_pepstock_charba_client_options_Tooltips_Property, "caretPadding");
  Property.$static_CARET_SIZE__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CARET_SIZE"), Property.$ordinal_CARET_SIZE__org_pepstock_charba_client_options_Tooltips_Property, "caretSize");
  Property.$static_CORNER_RADIUS__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CORNER_RADIUS"), Property.$ordinal_CORNER_RADIUS__org_pepstock_charba_client_options_Tooltips_Property, "cornerRadius");
  Property.$static_MULTI_KEY_BACKGROUND__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MULTI_KEY_BACKGROUND"), Property.$ordinal_MULTI_KEY_BACKGROUND__org_pepstock_charba_client_options_Tooltips_Property, "multiKeyBackground");
  Property.$static_DISPLAY_COLORS__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DISPLAY_COLORS"), Property.$ordinal_DISPLAY_COLORS__org_pepstock_charba_client_options_Tooltips_Property, "displayColors");
  Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_COLOR"), Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_options_Tooltips_Property, "borderColor");
  Property.$static_BORDER_WIDTH__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BORDER_WIDTH"), Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_options_Tooltips_Property, "borderWidth");
  Property.$static_USE_POINT_STYLE__org_pepstock_charba_client_options_Tooltips_Property = Property.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("USE_POINT_STYLE"), Property.$ordinal_USE_POINT_STYLE__org_pepstock_charba_client_options_Tooltips_Property, "usePointStyle");
  Property.f_namesToValuesMap__org_pepstock_charba_client_options_Tooltips_Property_ = null;
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
Property.$static_CALLBACKS__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_ENABLED__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_EVENTS__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_POSITION__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_X_ALIGN__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_Y_ALIGN__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_BACKGROUND_COLOR__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_TITLE_COLOR__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_TITLE_FONT__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_TITLE_ALIGN__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_TITLE_SPACING__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_TITLE_MARGIN_BOTTOM__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_BODY_COLOR__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_BODY_FONT__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_BODY_SPACING__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_BODY_ALIGN__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_FOOTER_COLOR__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_FOOTER_FONT__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_FOOTER_SPACING__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_FOOTER_MARGIN_TOP__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_FOOTER_ALIGN__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_PADDING__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_CARET_PADDING__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_CARET_SIZE__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_CORNER_RADIUS__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_MULTI_KEY_BACKGROUND__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_DISPLAY_COLORS__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_BORDER_COLOR__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_BORDER_WIDTH__org_pepstock_charba_client_options_Tooltips_Property;
/**@private {!Property}*/
Property.$static_USE_POINT_STYLE__org_pepstock_charba_client_options_Tooltips_Property;
/**@type {Map<?string, !Property>}*/
Property.f_namesToValuesMap__org_pepstock_charba_client_options_Tooltips_Property_;
/**@const {number}*/
Property.$ordinal_CALLBACKS__org_pepstock_charba_client_options_Tooltips_Property = 0;
/**@const {number}*/
Property.$ordinal_ENABLED__org_pepstock_charba_client_options_Tooltips_Property = 1;
/**@const {number}*/
Property.$ordinal_EVENTS__org_pepstock_charba_client_options_Tooltips_Property = 2;
/**@const {number}*/
Property.$ordinal_POSITION__org_pepstock_charba_client_options_Tooltips_Property = 3;
/**@const {number}*/
Property.$ordinal_X_ALIGN__org_pepstock_charba_client_options_Tooltips_Property = 4;
/**@const {number}*/
Property.$ordinal_Y_ALIGN__org_pepstock_charba_client_options_Tooltips_Property = 5;
/**@const {number}*/
Property.$ordinal_BACKGROUND_COLOR__org_pepstock_charba_client_options_Tooltips_Property = 6;
/**@const {number}*/
Property.$ordinal_TITLE_COLOR__org_pepstock_charba_client_options_Tooltips_Property = 7;
/**@const {number}*/
Property.$ordinal_TITLE_FONT__org_pepstock_charba_client_options_Tooltips_Property = 8;
/**@const {number}*/
Property.$ordinal_TITLE_ALIGN__org_pepstock_charba_client_options_Tooltips_Property = 9;
/**@const {number}*/
Property.$ordinal_TITLE_SPACING__org_pepstock_charba_client_options_Tooltips_Property = 10;
/**@const {number}*/
Property.$ordinal_TITLE_MARGIN_BOTTOM__org_pepstock_charba_client_options_Tooltips_Property = 11;
/**@const {number}*/
Property.$ordinal_BODY_COLOR__org_pepstock_charba_client_options_Tooltips_Property = 12;
/**@const {number}*/
Property.$ordinal_BODY_FONT__org_pepstock_charba_client_options_Tooltips_Property = 13;
/**@const {number}*/
Property.$ordinal_BODY_SPACING__org_pepstock_charba_client_options_Tooltips_Property = 14;
/**@const {number}*/
Property.$ordinal_BODY_ALIGN__org_pepstock_charba_client_options_Tooltips_Property = 15;
/**@const {number}*/
Property.$ordinal_FOOTER_COLOR__org_pepstock_charba_client_options_Tooltips_Property = 16;
/**@const {number}*/
Property.$ordinal_FOOTER_FONT__org_pepstock_charba_client_options_Tooltips_Property = 17;
/**@const {number}*/
Property.$ordinal_FOOTER_SPACING__org_pepstock_charba_client_options_Tooltips_Property = 18;
/**@const {number}*/
Property.$ordinal_FOOTER_MARGIN_TOP__org_pepstock_charba_client_options_Tooltips_Property = 19;
/**@const {number}*/
Property.$ordinal_FOOTER_ALIGN__org_pepstock_charba_client_options_Tooltips_Property = 20;
/**@const {number}*/
Property.$ordinal_PADDING__org_pepstock_charba_client_options_Tooltips_Property = 21;
/**@const {number}*/
Property.$ordinal_CARET_PADDING__org_pepstock_charba_client_options_Tooltips_Property = 22;
/**@const {number}*/
Property.$ordinal_CARET_SIZE__org_pepstock_charba_client_options_Tooltips_Property = 23;
/**@const {number}*/
Property.$ordinal_CORNER_RADIUS__org_pepstock_charba_client_options_Tooltips_Property = 24;
/**@const {number}*/
Property.$ordinal_MULTI_KEY_BACKGROUND__org_pepstock_charba_client_options_Tooltips_Property = 25;
/**@const {number}*/
Property.$ordinal_DISPLAY_COLORS__org_pepstock_charba_client_options_Tooltips_Property = 26;
/**@const {number}*/
Property.$ordinal_BORDER_COLOR__org_pepstock_charba_client_options_Tooltips_Property = 27;
/**@const {number}*/
Property.$ordinal_BORDER_WIDTH__org_pepstock_charba_client_options_Tooltips_Property = 28;
/**@const {number}*/
Property.$ordinal_USE_POINT_STYLE__org_pepstock_charba_client_options_Tooltips_Property = 29;
Key.$markImplementor(Property);
$Util.$setClassMetadataForEnum(Property, "org.pepstock.charba.client.options.Tooltips$Property");

exports = Property;

//# sourceMappingURL=Tooltips$Property.js.map
