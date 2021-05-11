goog.module('org.pepstock.charba.client.colors.HtmlColor$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsEnumeratedColor = goog.require('org.pepstock.charba.client.colors.IsEnumeratedColor$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<HtmlColor>}
 * @implements {IsEnumeratedColor}
 */
class HtmlColor extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {IsColor}*/
  this.f_color__org_pepstock_charba_client_colors_HtmlColor_;
 }
 //Factory method corresponding to constructor 'HtmlColor(String, int, String)'.
 /** @return {!HtmlColor} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ hexValue) {
  let $instance = new HtmlColor();
  $instance.$ctor__org_pepstock_charba_client_colors_HtmlColor__java_lang_String__int__java_lang_String($name, $ordinal, hexValue);
  return $instance;
 }
 //Initialization from constructor 'HtmlColor(String, int, String)'.
 
 $ctor__org_pepstock_charba_client_colors_HtmlColor__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ hexValue) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_color__org_pepstock_charba_client_colors_HtmlColor_ = ColorBuilder.m_buildByHexValue__java_lang_String__boolean(hexValue, false);
 }
 //Factory method corresponding to constructor 'HtmlColor(String, int, String, double)'.
 /** @return {!HtmlColor} */
 static $create__java_lang_String__int__java_lang_String__double(/** ?string */ $name, /** number */ $ordinal, /** ?string */ hexValue, /** number */ alpha) {
  let $instance = new HtmlColor();
  $instance.$ctor__org_pepstock_charba_client_colors_HtmlColor__java_lang_String__int__java_lang_String__double($name, $ordinal, hexValue, alpha);
  return $instance;
 }
 //Initialization from constructor 'HtmlColor(String, int, String, double)'.
 
 $ctor__org_pepstock_charba_client_colors_HtmlColor__java_lang_String__int__java_lang_String__double(/** ?string */ $name, /** number */ $ordinal, /** ?string */ hexValue, /** number */ alpha) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  let internalColor = ColorBuilder.m_buildByHexValue__java_lang_String__boolean(hexValue, false);
  this.f_color__org_pepstock_charba_client_colors_HtmlColor_ = internalColor.m_alpha__double(alpha);
 }
 /** @override @return {IsColor} */
 m_getColor__() {
  return this.f_color__org_pepstock_charba_client_colors_HtmlColor_;
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_alpha__double(/** number */ arg0) {
  return IsColor.m_alpha__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_brighter__() {
  return IsColor.m_brighter__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_brighter__double(/** number */ arg0) {
  return IsColor.m_brighter__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_darker__() {
  return IsColor.m_darker__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_darker__double(/** number */ arg0) {
  return IsColor.m_darker__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getAlpha__() {
  return IsEnumeratedColor.m_getAlpha__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBlue__() {
  return IsEnumeratedColor.m_getBlue__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getGreen__() {
  return IsEnumeratedColor.m_getGreen__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getRed__() {
  return IsEnumeratedColor.m_getRed__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHSL__() {
  return IsColor.m_toHSL__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHSLA__() {
  return IsColor.m_toHSLA__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHex__() {
  return IsColor.m_toHex__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toRGB__() {
  return IsColor.m_toRGB__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toRGBA__() {
  return IsColor.m_toRGBA__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_toRGBs__() {
  return IsColor.m_toRGBs__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 /** @return {!HtmlColor} */
 static m_valueOf__java_lang_String(/** string */ name) {
  HtmlColor.$clinit();
  if ($Equality.$same(HtmlColor.f_namesToValuesMap__org_pepstock_charba_client_colors_HtmlColor_, null)) {
   HtmlColor.f_namesToValuesMap__org_pepstock_charba_client_colors_HtmlColor_ = $Enums.createMapFromValues(HtmlColor.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, HtmlColor.f_namesToValuesMap__org_pepstock_charba_client_colors_HtmlColor_);
 }
 /** @return {!Array<!HtmlColor>} */
 static m_values__() {
  HtmlColor.$clinit();
  return /**@type {!Array<HtmlColor>}*/ ($Arrays.$init([HtmlColor.$static_ALICE_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_ANTIQUE_WHITE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_AQUA__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_AQUAMARINE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_AZURE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_BEIGE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_BISQUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_BLACK__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_BLANCHED_ALMOND__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_BLUE_VIOLET__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_BROWN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_BURLY_WOOD__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_CADET_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_CHARTREUSE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_CHOCOLATE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_CORAL__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_CORNFLOWER_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_CORNSILK__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_CRIMSON__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_CYAN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_CYAN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_GRAY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_GREY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_KHAKI__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_MAGENTA__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_OLIVE_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_ORANGE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_ORCHID__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_RED__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_SALMON__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DARK_VIOLET__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DEEP_PINK__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DEEP_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DIM_GRAY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DIM_GREY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_DODGER_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_FIRE_BRICK__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_FLORAL_WHITE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_FOREST_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_FUCHSIA__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_GAINSBORO__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_GHOST_WHITE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_GOLD__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_GRAY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_GREY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_GREEN_YELLOW__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_HONEY_DEW__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_HOT_PINK__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_INDIAN_RED__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_INDIGO__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_IVORY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_KHAKI__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LAVENDER__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LAVENDER_BLUSH__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LAWN_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LEMON_CHIFFON__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_CORAL__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_CYAN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_GOLDEN_ROD_YELLOW__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_GRAY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_GREY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_PINK__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_SALMON__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIGHT_YELLOW__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIME__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LIME_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_LINEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MAGENTA__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MAROON__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MEDIUM_AQUA_MARINE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MEDIUM_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MEDIUM_ORCHID__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MEDIUM_PURPLE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MEDIUM_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MEDIUM_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MEDIUM_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MEDIUM_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MEDIUM_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MIDNIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MINT_CREAM__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MISTY_ROSE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_MOCCASIN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_NAVAJO_WHITE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_NAVY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_OLD_LACE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_OLIVE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_OLIVE_DRAB__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_ORANGE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_ORANGE_RED__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_ORCHID__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_PALE_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_PALE_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_PALE_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_PALE_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_PAPAYA_WHIP__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_PEACH_PUFF__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_PERU__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_PINK__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_PLUM__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_POWDER_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_PURPLE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_REBECCA_PURPLE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_RED__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_ROSY_BROWN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_ROYAL_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SADDLE_BROWN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SALMON__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SANDY_BROWN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SEA_SHELL__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SIENNA__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SILVER__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SNOW__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_TAN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_TEAL__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_THISTLE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_TOMATO__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_VIOLET__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_WHEAT__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_WHITE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_WHITE_SMOKE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_YELLOW__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_YELLOW_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.$static_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor], HtmlColor));
 }
 /** @return {!HtmlColor} */
 static get f_ALICE_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_ALICE_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_ANTIQUE_WHITE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_ANTIQUE_WHITE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_AQUA__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_AQUA__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_AQUAMARINE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_AQUAMARINE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_AZURE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_AZURE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_BEIGE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_BEIGE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_BISQUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_BISQUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_BLACK__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_BLACK__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_BLANCHED_ALMOND__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_BLANCHED_ALMOND__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_BLUE_VIOLET__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_BLUE_VIOLET__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_BROWN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_BROWN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_BURLY_WOOD__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_BURLY_WOOD__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_CADET_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_CADET_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_CHARTREUSE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_CHARTREUSE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_CHOCOLATE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_CHOCOLATE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_CORAL__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_CORAL__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_CORNFLOWER_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_CORNFLOWER_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_CORNSILK__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_CORNSILK__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_CRIMSON__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_CRIMSON__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_CYAN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_CYAN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_CYAN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_CYAN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_GRAY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_GRAY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_GREY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_GREY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_KHAKI__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_KHAKI__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_MAGENTA__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_MAGENTA__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_OLIVE_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_OLIVE_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_ORANGE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_ORANGE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_ORCHID__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_ORCHID__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_RED__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_RED__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_SALMON__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_SALMON__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DARK_VIOLET__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DARK_VIOLET__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DEEP_PINK__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DEEP_PINK__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DEEP_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DEEP_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DIM_GRAY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DIM_GRAY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DIM_GREY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DIM_GREY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_DODGER_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_DODGER_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_FIRE_BRICK__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_FIRE_BRICK__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_FLORAL_WHITE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_FLORAL_WHITE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_FOREST_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_FOREST_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_FUCHSIA__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_FUCHSIA__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_GAINSBORO__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_GAINSBORO__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_GHOST_WHITE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_GHOST_WHITE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_GOLD__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_GOLD__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_GRAY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_GRAY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_GREY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_GREY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_GREEN_YELLOW__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_GREEN_YELLOW__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_HONEY_DEW__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_HONEY_DEW__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_HOT_PINK__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_HOT_PINK__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_INDIAN_RED__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_INDIAN_RED__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_INDIGO__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_INDIGO__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_IVORY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_IVORY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_KHAKI__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_KHAKI__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LAVENDER__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LAVENDER__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LAVENDER_BLUSH__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LAVENDER_BLUSH__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LAWN_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LAWN_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LEMON_CHIFFON__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LEMON_CHIFFON__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_CORAL__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_CORAL__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_CYAN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_CYAN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_GOLDEN_ROD_YELLOW__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_GOLDEN_ROD_YELLOW__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_GRAY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_GRAY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_GREY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_GREY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_PINK__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_PINK__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_SALMON__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_SALMON__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIGHT_YELLOW__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIGHT_YELLOW__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIME__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIME__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LIME_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LIME_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_LINEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_LINEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MAGENTA__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MAGENTA__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MAROON__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MAROON__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MEDIUM_AQUA_MARINE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MEDIUM_AQUA_MARINE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MEDIUM_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MEDIUM_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MEDIUM_ORCHID__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MEDIUM_ORCHID__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MEDIUM_PURPLE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MEDIUM_PURPLE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MEDIUM_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MEDIUM_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MEDIUM_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MEDIUM_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MEDIUM_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MEDIUM_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MEDIUM_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MEDIUM_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MEDIUM_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MEDIUM_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MIDNIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MIDNIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MINT_CREAM__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MINT_CREAM__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MISTY_ROSE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MISTY_ROSE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_MOCCASIN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_MOCCASIN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_NAVAJO_WHITE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_NAVAJO_WHITE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_NAVY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_NAVY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_OLD_LACE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_OLD_LACE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_OLIVE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_OLIVE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_OLIVE_DRAB__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_OLIVE_DRAB__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_ORANGE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_ORANGE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_ORANGE_RED__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_ORANGE_RED__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_ORCHID__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_ORCHID__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_PALE_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_PALE_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_PALE_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_PALE_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_PALE_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_PALE_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_PALE_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_PALE_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_PAPAYA_WHIP__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_PAPAYA_WHIP__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_PEACH_PUFF__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_PEACH_PUFF__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_PERU__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_PERU__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_PINK__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_PINK__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_PLUM__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_PLUM__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_POWDER_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_POWDER_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_PURPLE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_PURPLE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_REBECCA_PURPLE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_REBECCA_PURPLE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_RED__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_RED__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_ROSY_BROWN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_ROSY_BROWN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_ROYAL_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_ROYAL_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SADDLE_BROWN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SADDLE_BROWN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SALMON__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SALMON__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SANDY_BROWN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SANDY_BROWN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SEA_SHELL__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SEA_SHELL__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SIENNA__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SIENNA__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SILVER__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SILVER__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SNOW__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SNOW__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_TAN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_TAN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_TEAL__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_TEAL__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_THISTLE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_THISTLE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_TOMATO__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_TOMATO__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_VIOLET__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_VIOLET__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_WHEAT__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_WHEAT__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_WHITE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_WHITE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_WHITE_SMOKE__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_WHITE_SMOKE__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_YELLOW__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_YELLOW__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_YELLOW_GREEN__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_YELLOW_GREEN__org_pepstock_charba_client_colors_HtmlColor);
 }
 /** @return {!HtmlColor} */
 static get f_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor() {
  return (HtmlColor.$clinit(), HtmlColor.$static_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor);
 }
 
 static $clinit() {
  HtmlColor.$clinit = () =>{};
  HtmlColor.$loadModules();
  Enum.$clinit();
  IsEnumeratedColor.$clinit();
  HtmlColor.$static_ALICE_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALICE_BLUE"), HtmlColor.$ordinal_ALICE_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#F0F8FF");
  HtmlColor.$static_ANTIQUE_WHITE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ANTIQUE_WHITE"), HtmlColor.$ordinal_ANTIQUE_WHITE__org_pepstock_charba_client_colors_HtmlColor, "#FAEBD7");
  HtmlColor.$static_AQUA__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AQUA"), HtmlColor.$ordinal_AQUA__org_pepstock_charba_client_colors_HtmlColor, "#00FFFF");
  HtmlColor.$static_AQUAMARINE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AQUAMARINE"), HtmlColor.$ordinal_AQUAMARINE__org_pepstock_charba_client_colors_HtmlColor, "#7FFFD4");
  HtmlColor.$static_AZURE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AZURE"), HtmlColor.$ordinal_AZURE__org_pepstock_charba_client_colors_HtmlColor, "#F0FFFF");
  HtmlColor.$static_BEIGE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEIGE"), HtmlColor.$ordinal_BEIGE__org_pepstock_charba_client_colors_HtmlColor, "#F5F5DC");
  HtmlColor.$static_BISQUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BISQUE"), HtmlColor.$ordinal_BISQUE__org_pepstock_charba_client_colors_HtmlColor, "#FFE4C4");
  HtmlColor.$static_BLACK__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BLACK"), HtmlColor.$ordinal_BLACK__org_pepstock_charba_client_colors_HtmlColor, "#000000");
  HtmlColor.$static_BLANCHED_ALMOND__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BLANCHED_ALMOND"), HtmlColor.$ordinal_BLANCHED_ALMOND__org_pepstock_charba_client_colors_HtmlColor, "#FFEBCD");
  HtmlColor.$static_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BLUE"), HtmlColor.$ordinal_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#0000FF");
  HtmlColor.$static_BLUE_VIOLET__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BLUE_VIOLET"), HtmlColor.$ordinal_BLUE_VIOLET__org_pepstock_charba_client_colors_HtmlColor, "#8A2BE2");
  HtmlColor.$static_BROWN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BROWN"), HtmlColor.$ordinal_BROWN__org_pepstock_charba_client_colors_HtmlColor, "#A52A2A");
  HtmlColor.$static_BURLY_WOOD__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BURLY_WOOD"), HtmlColor.$ordinal_BURLY_WOOD__org_pepstock_charba_client_colors_HtmlColor, "#DEB887");
  HtmlColor.$static_CADET_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CADET_BLUE"), HtmlColor.$ordinal_CADET_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#5F9EA0");
  HtmlColor.$static_CHARTREUSE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHARTREUSE"), HtmlColor.$ordinal_CHARTREUSE__org_pepstock_charba_client_colors_HtmlColor, "#7FFF00");
  HtmlColor.$static_CHOCOLATE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHOCOLATE"), HtmlColor.$ordinal_CHOCOLATE__org_pepstock_charba_client_colors_HtmlColor, "#D2691E");
  HtmlColor.$static_CORAL__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CORAL"), HtmlColor.$ordinal_CORAL__org_pepstock_charba_client_colors_HtmlColor, "#FF7F50");
  HtmlColor.$static_CORNFLOWER_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CORNFLOWER_BLUE"), HtmlColor.$ordinal_CORNFLOWER_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#6495ED");
  HtmlColor.$static_CORNSILK__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CORNSILK"), HtmlColor.$ordinal_CORNSILK__org_pepstock_charba_client_colors_HtmlColor, "#FFF8DC");
  HtmlColor.$static_CRIMSON__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CRIMSON"), HtmlColor.$ordinal_CRIMSON__org_pepstock_charba_client_colors_HtmlColor, "#DC143C");
  HtmlColor.$static_CYAN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CYAN"), HtmlColor.$ordinal_CYAN__org_pepstock_charba_client_colors_HtmlColor, "#00FFFF");
  HtmlColor.$static_DARK_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_BLUE"), HtmlColor.$ordinal_DARK_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#00008B");
  HtmlColor.$static_DARK_CYAN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_CYAN"), HtmlColor.$ordinal_DARK_CYAN__org_pepstock_charba_client_colors_HtmlColor, "#008B8B");
  HtmlColor.$static_DARK_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_GOLDEN_ROD"), HtmlColor.$ordinal_DARK_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor, "#B8860B");
  HtmlColor.$static_DARK_GRAY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_GRAY"), HtmlColor.$ordinal_DARK_GRAY__org_pepstock_charba_client_colors_HtmlColor, "#A9A9A9");
  HtmlColor.$static_DARK_GREY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_GREY"), HtmlColor.$ordinal_DARK_GREY__org_pepstock_charba_client_colors_HtmlColor, "#A9A9A9");
  HtmlColor.$static_DARK_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_GREEN"), HtmlColor.$ordinal_DARK_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#006400");
  HtmlColor.$static_DARK_KHAKI__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_KHAKI"), HtmlColor.$ordinal_DARK_KHAKI__org_pepstock_charba_client_colors_HtmlColor, "#BDB76B");
  HtmlColor.$static_DARK_MAGENTA__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_MAGENTA"), HtmlColor.$ordinal_DARK_MAGENTA__org_pepstock_charba_client_colors_HtmlColor, "#8B008B");
  HtmlColor.$static_DARK_OLIVE_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_OLIVE_GREEN"), HtmlColor.$ordinal_DARK_OLIVE_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#556B2F");
  HtmlColor.$static_DARK_ORANGE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_ORANGE"), HtmlColor.$ordinal_DARK_ORANGE__org_pepstock_charba_client_colors_HtmlColor, "#FF8C00");
  HtmlColor.$static_DARK_ORCHID__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_ORCHID"), HtmlColor.$ordinal_DARK_ORCHID__org_pepstock_charba_client_colors_HtmlColor, "#9932CC");
  HtmlColor.$static_DARK_RED__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_RED"), HtmlColor.$ordinal_DARK_RED__org_pepstock_charba_client_colors_HtmlColor, "#8B0000");
  HtmlColor.$static_DARK_SALMON__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_SALMON"), HtmlColor.$ordinal_DARK_SALMON__org_pepstock_charba_client_colors_HtmlColor, "#E9967A");
  HtmlColor.$static_DARK_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_SEA_GREEN"), HtmlColor.$ordinal_DARK_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#8FBC8F");
  HtmlColor.$static_DARK_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_SLATE_BLUE"), HtmlColor.$ordinal_DARK_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#483D8B");
  HtmlColor.$static_DARK_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_SLATE_GRAY"), HtmlColor.$ordinal_DARK_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor, "#2F4F4F");
  HtmlColor.$static_DARK_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_SLATE_GREY"), HtmlColor.$ordinal_DARK_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor, "#2F4F4F");
  HtmlColor.$static_DARK_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_TURQUOISE"), HtmlColor.$ordinal_DARK_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor, "#00CED1");
  HtmlColor.$static_DARK_VIOLET__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARK_VIOLET"), HtmlColor.$ordinal_DARK_VIOLET__org_pepstock_charba_client_colors_HtmlColor, "#9400D3");
  HtmlColor.$static_DEEP_PINK__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DEEP_PINK"), HtmlColor.$ordinal_DEEP_PINK__org_pepstock_charba_client_colors_HtmlColor, "#FF1493");
  HtmlColor.$static_DEEP_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DEEP_SKY_BLUE"), HtmlColor.$ordinal_DEEP_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#00BFFF");
  HtmlColor.$static_DIM_GRAY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DIM_GRAY"), HtmlColor.$ordinal_DIM_GRAY__org_pepstock_charba_client_colors_HtmlColor, "#696969");
  HtmlColor.$static_DIM_GREY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DIM_GREY"), HtmlColor.$ordinal_DIM_GREY__org_pepstock_charba_client_colors_HtmlColor, "#696969");
  HtmlColor.$static_DODGER_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DODGER_BLUE"), HtmlColor.$ordinal_DODGER_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#1E90FF");
  HtmlColor.$static_FIRE_BRICK__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FIRE_BRICK"), HtmlColor.$ordinal_FIRE_BRICK__org_pepstock_charba_client_colors_HtmlColor, "#B22222");
  HtmlColor.$static_FLORAL_WHITE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FLORAL_WHITE"), HtmlColor.$ordinal_FLORAL_WHITE__org_pepstock_charba_client_colors_HtmlColor, "#FFFAF0");
  HtmlColor.$static_FOREST_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FOREST_GREEN"), HtmlColor.$ordinal_FOREST_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#228B22");
  HtmlColor.$static_FUCHSIA__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FUCHSIA"), HtmlColor.$ordinal_FUCHSIA__org_pepstock_charba_client_colors_HtmlColor, "#FF00FF");
  HtmlColor.$static_GAINSBORO__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GAINSBORO"), HtmlColor.$ordinal_GAINSBORO__org_pepstock_charba_client_colors_HtmlColor, "#DCDCDC");
  HtmlColor.$static_GHOST_WHITE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GHOST_WHITE"), HtmlColor.$ordinal_GHOST_WHITE__org_pepstock_charba_client_colors_HtmlColor, "#F8F8FF");
  HtmlColor.$static_GOLD__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GOLD"), HtmlColor.$ordinal_GOLD__org_pepstock_charba_client_colors_HtmlColor, "#FFD700");
  HtmlColor.$static_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GOLDEN_ROD"), HtmlColor.$ordinal_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor, "#DAA520");
  HtmlColor.$static_GRAY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GRAY"), HtmlColor.$ordinal_GRAY__org_pepstock_charba_client_colors_HtmlColor, "#808080");
  HtmlColor.$static_GREY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GREY"), HtmlColor.$ordinal_GREY__org_pepstock_charba_client_colors_HtmlColor, "#808080");
  HtmlColor.$static_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GREEN"), HtmlColor.$ordinal_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#008000");
  HtmlColor.$static_GREEN_YELLOW__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GREEN_YELLOW"), HtmlColor.$ordinal_GREEN_YELLOW__org_pepstock_charba_client_colors_HtmlColor, "#ADFF2F");
  HtmlColor.$static_HONEY_DEW__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HONEY_DEW"), HtmlColor.$ordinal_HONEY_DEW__org_pepstock_charba_client_colors_HtmlColor, "#F0FFF0");
  HtmlColor.$static_HOT_PINK__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HOT_PINK"), HtmlColor.$ordinal_HOT_PINK__org_pepstock_charba_client_colors_HtmlColor, "#FF69B4");
  HtmlColor.$static_INDIAN_RED__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INDIAN_RED"), HtmlColor.$ordinal_INDIAN_RED__org_pepstock_charba_client_colors_HtmlColor, "#CD5C5C");
  HtmlColor.$static_INDIGO__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INDIGO"), HtmlColor.$ordinal_INDIGO__org_pepstock_charba_client_colors_HtmlColor, "#4B0082");
  HtmlColor.$static_IVORY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("IVORY"), HtmlColor.$ordinal_IVORY__org_pepstock_charba_client_colors_HtmlColor, "#FFFFF0");
  HtmlColor.$static_KHAKI__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("KHAKI"), HtmlColor.$ordinal_KHAKI__org_pepstock_charba_client_colors_HtmlColor, "#F0E68C");
  HtmlColor.$static_LAVENDER__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LAVENDER"), HtmlColor.$ordinal_LAVENDER__org_pepstock_charba_client_colors_HtmlColor, "#E6E6FA");
  HtmlColor.$static_LAVENDER_BLUSH__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LAVENDER_BLUSH"), HtmlColor.$ordinal_LAVENDER_BLUSH__org_pepstock_charba_client_colors_HtmlColor, "#FFF0F5");
  HtmlColor.$static_LAWN_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LAWN_GREEN"), HtmlColor.$ordinal_LAWN_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#7CFC00");
  HtmlColor.$static_LEMON_CHIFFON__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEMON_CHIFFON"), HtmlColor.$ordinal_LEMON_CHIFFON__org_pepstock_charba_client_colors_HtmlColor, "#FFFACD");
  HtmlColor.$static_LIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_BLUE"), HtmlColor.$ordinal_LIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#ADD8E6");
  HtmlColor.$static_LIGHT_CORAL__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_CORAL"), HtmlColor.$ordinal_LIGHT_CORAL__org_pepstock_charba_client_colors_HtmlColor, "#F08080");
  HtmlColor.$static_LIGHT_CYAN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_CYAN"), HtmlColor.$ordinal_LIGHT_CYAN__org_pepstock_charba_client_colors_HtmlColor, "#E0FFFF");
  HtmlColor.$static_LIGHT_GOLDEN_ROD_YELLOW__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_GOLDEN_ROD_YELLOW"), HtmlColor.$ordinal_LIGHT_GOLDEN_ROD_YELLOW__org_pepstock_charba_client_colors_HtmlColor, "#FAFAD2");
  HtmlColor.$static_LIGHT_GRAY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_GRAY"), HtmlColor.$ordinal_LIGHT_GRAY__org_pepstock_charba_client_colors_HtmlColor, "#D3D3D3");
  HtmlColor.$static_LIGHT_GREY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_GREY"), HtmlColor.$ordinal_LIGHT_GREY__org_pepstock_charba_client_colors_HtmlColor, "#D3D3D3");
  HtmlColor.$static_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_GREEN"), HtmlColor.$ordinal_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#90EE90");
  HtmlColor.$static_LIGHT_PINK__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_PINK"), HtmlColor.$ordinal_LIGHT_PINK__org_pepstock_charba_client_colors_HtmlColor, "#FFB6C1");
  HtmlColor.$static_LIGHT_SALMON__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_SALMON"), HtmlColor.$ordinal_LIGHT_SALMON__org_pepstock_charba_client_colors_HtmlColor, "#FFA07A");
  HtmlColor.$static_LIGHT_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_SEA_GREEN"), HtmlColor.$ordinal_LIGHT_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#20B2AA");
  HtmlColor.$static_LIGHT_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_SKY_BLUE"), HtmlColor.$ordinal_LIGHT_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#87CEFA");
  HtmlColor.$static_LIGHT_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_SLATE_GRAY"), HtmlColor.$ordinal_LIGHT_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor, "#778899");
  HtmlColor.$static_LIGHT_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_SLATE_GREY"), HtmlColor.$ordinal_LIGHT_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor, "#778899");
  HtmlColor.$static_LIGHT_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_STEEL_BLUE"), HtmlColor.$ordinal_LIGHT_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#B0C4DE");
  HtmlColor.$static_LIGHT_YELLOW__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHT_YELLOW"), HtmlColor.$ordinal_LIGHT_YELLOW__org_pepstock_charba_client_colors_HtmlColor, "#FFFFE0");
  HtmlColor.$static_LIME__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIME"), HtmlColor.$ordinal_LIME__org_pepstock_charba_client_colors_HtmlColor, "#00FF00");
  HtmlColor.$static_LIME_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIME_GREEN"), HtmlColor.$ordinal_LIME_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#32CD32");
  HtmlColor.$static_LINEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINEN"), HtmlColor.$ordinal_LINEN__org_pepstock_charba_client_colors_HtmlColor, "#FAF0E6");
  HtmlColor.$static_MAGENTA__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAGENTA"), HtmlColor.$ordinal_MAGENTA__org_pepstock_charba_client_colors_HtmlColor, "#FF00FF");
  HtmlColor.$static_MAROON__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAROON"), HtmlColor.$ordinal_MAROON__org_pepstock_charba_client_colors_HtmlColor, "#800000");
  HtmlColor.$static_MEDIUM_AQUA_MARINE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEDIUM_AQUA_MARINE"), HtmlColor.$ordinal_MEDIUM_AQUA_MARINE__org_pepstock_charba_client_colors_HtmlColor, "#66CDAA");
  HtmlColor.$static_MEDIUM_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEDIUM_BLUE"), HtmlColor.$ordinal_MEDIUM_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#0000CD");
  HtmlColor.$static_MEDIUM_ORCHID__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEDIUM_ORCHID"), HtmlColor.$ordinal_MEDIUM_ORCHID__org_pepstock_charba_client_colors_HtmlColor, "#BA55D3");
  HtmlColor.$static_MEDIUM_PURPLE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEDIUM_PURPLE"), HtmlColor.$ordinal_MEDIUM_PURPLE__org_pepstock_charba_client_colors_HtmlColor, "#9370DB");
  HtmlColor.$static_MEDIUM_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEDIUM_SEA_GREEN"), HtmlColor.$ordinal_MEDIUM_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#3CB371");
  HtmlColor.$static_MEDIUM_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEDIUM_SLATE_BLUE"), HtmlColor.$ordinal_MEDIUM_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#7B68EE");
  HtmlColor.$static_MEDIUM_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEDIUM_SPRING_GREEN"), HtmlColor.$ordinal_MEDIUM_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#00FA9A");
  HtmlColor.$static_MEDIUM_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEDIUM_TURQUOISE"), HtmlColor.$ordinal_MEDIUM_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor, "#48D1CC");
  HtmlColor.$static_MEDIUM_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MEDIUM_VIOLET_RED"), HtmlColor.$ordinal_MEDIUM_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor, "#C71585");
  HtmlColor.$static_MIDNIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MIDNIGHT_BLUE"), HtmlColor.$ordinal_MIDNIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#191970");
  HtmlColor.$static_MINT_CREAM__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MINT_CREAM"), HtmlColor.$ordinal_MINT_CREAM__org_pepstock_charba_client_colors_HtmlColor, "#F5FFFA");
  HtmlColor.$static_MISTY_ROSE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MISTY_ROSE"), HtmlColor.$ordinal_MISTY_ROSE__org_pepstock_charba_client_colors_HtmlColor, "#FFE4E1");
  HtmlColor.$static_MOCCASIN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MOCCASIN"), HtmlColor.$ordinal_MOCCASIN__org_pepstock_charba_client_colors_HtmlColor, "#FFE4B5");
  HtmlColor.$static_NAVAJO_WHITE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NAVAJO_WHITE"), HtmlColor.$ordinal_NAVAJO_WHITE__org_pepstock_charba_client_colors_HtmlColor, "#FFDEAD");
  HtmlColor.$static_NAVY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NAVY"), HtmlColor.$ordinal_NAVY__org_pepstock_charba_client_colors_HtmlColor, "#000080");
  HtmlColor.$static_OLD_LACE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OLD_LACE"), HtmlColor.$ordinal_OLD_LACE__org_pepstock_charba_client_colors_HtmlColor, "#FDF5E6");
  HtmlColor.$static_OLIVE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OLIVE"), HtmlColor.$ordinal_OLIVE__org_pepstock_charba_client_colors_HtmlColor, "#808000");
  HtmlColor.$static_OLIVE_DRAB__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OLIVE_DRAB"), HtmlColor.$ordinal_OLIVE_DRAB__org_pepstock_charba_client_colors_HtmlColor, "#6B8E23");
  HtmlColor.$static_ORANGE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ORANGE"), HtmlColor.$ordinal_ORANGE__org_pepstock_charba_client_colors_HtmlColor, "#FFA500");
  HtmlColor.$static_ORANGE_RED__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ORANGE_RED"), HtmlColor.$ordinal_ORANGE_RED__org_pepstock_charba_client_colors_HtmlColor, "#FF4500");
  HtmlColor.$static_ORCHID__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ORCHID"), HtmlColor.$ordinal_ORCHID__org_pepstock_charba_client_colors_HtmlColor, "#DA70D6");
  HtmlColor.$static_PALE_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PALE_GOLDEN_ROD"), HtmlColor.$ordinal_PALE_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor, "#EEE8AA");
  HtmlColor.$static_PALE_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PALE_GREEN"), HtmlColor.$ordinal_PALE_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#98FB98");
  HtmlColor.$static_PALE_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PALE_TURQUOISE"), HtmlColor.$ordinal_PALE_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor, "#AFEEEE");
  HtmlColor.$static_PALE_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PALE_VIOLET_RED"), HtmlColor.$ordinal_PALE_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor, "#DB7093");
  HtmlColor.$static_PAPAYA_WHIP__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PAPAYA_WHIP"), HtmlColor.$ordinal_PAPAYA_WHIP__org_pepstock_charba_client_colors_HtmlColor, "#FFEFD5");
  HtmlColor.$static_PEACH_PUFF__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PEACH_PUFF"), HtmlColor.$ordinal_PEACH_PUFF__org_pepstock_charba_client_colors_HtmlColor, "#FFDAB9");
  HtmlColor.$static_PERU__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PERU"), HtmlColor.$ordinal_PERU__org_pepstock_charba_client_colors_HtmlColor, "#CD853F");
  HtmlColor.$static_PINK__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PINK"), HtmlColor.$ordinal_PINK__org_pepstock_charba_client_colors_HtmlColor, "#FFC0CB");
  HtmlColor.$static_PLUM__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PLUM"), HtmlColor.$ordinal_PLUM__org_pepstock_charba_client_colors_HtmlColor, "#DDA0DD");
  HtmlColor.$static_POWDER_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POWDER_BLUE"), HtmlColor.$ordinal_POWDER_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#B0E0E6");
  HtmlColor.$static_PURPLE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PURPLE"), HtmlColor.$ordinal_PURPLE__org_pepstock_charba_client_colors_HtmlColor, "#800080");
  HtmlColor.$static_REBECCA_PURPLE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REBECCA_PURPLE"), HtmlColor.$ordinal_REBECCA_PURPLE__org_pepstock_charba_client_colors_HtmlColor, "#663399");
  HtmlColor.$static_RED__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RED"), HtmlColor.$ordinal_RED__org_pepstock_charba_client_colors_HtmlColor, "#FF0000");
  HtmlColor.$static_ROSY_BROWN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROSY_BROWN"), HtmlColor.$ordinal_ROSY_BROWN__org_pepstock_charba_client_colors_HtmlColor, "#BC8F8F");
  HtmlColor.$static_ROYAL_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROYAL_BLUE"), HtmlColor.$ordinal_ROYAL_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#4169E1");
  HtmlColor.$static_SADDLE_BROWN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SADDLE_BROWN"), HtmlColor.$ordinal_SADDLE_BROWN__org_pepstock_charba_client_colors_HtmlColor, "#8B4513");
  HtmlColor.$static_SALMON__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SALMON"), HtmlColor.$ordinal_SALMON__org_pepstock_charba_client_colors_HtmlColor, "#FA8072");
  HtmlColor.$static_SANDY_BROWN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SANDY_BROWN"), HtmlColor.$ordinal_SANDY_BROWN__org_pepstock_charba_client_colors_HtmlColor, "#F4A460");
  HtmlColor.$static_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SEA_GREEN"), HtmlColor.$ordinal_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#2E8B57");
  HtmlColor.$static_SEA_SHELL__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SEA_SHELL"), HtmlColor.$ordinal_SEA_SHELL__org_pepstock_charba_client_colors_HtmlColor, "#FFF5EE");
  HtmlColor.$static_SIENNA__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SIENNA"), HtmlColor.$ordinal_SIENNA__org_pepstock_charba_client_colors_HtmlColor, "#A0522D");
  HtmlColor.$static_SILVER__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SILVER"), HtmlColor.$ordinal_SILVER__org_pepstock_charba_client_colors_HtmlColor, "#C0C0C0");
  HtmlColor.$static_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SKY_BLUE"), HtmlColor.$ordinal_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#87CEEB");
  HtmlColor.$static_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SLATE_BLUE"), HtmlColor.$ordinal_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#6A5ACD");
  HtmlColor.$static_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SLATE_GRAY"), HtmlColor.$ordinal_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor, "#708090");
  HtmlColor.$static_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SLATE_GREY"), HtmlColor.$ordinal_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor, "#708090");
  HtmlColor.$static_SNOW__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SNOW"), HtmlColor.$ordinal_SNOW__org_pepstock_charba_client_colors_HtmlColor, "#FFFAFA");
  HtmlColor.$static_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SPRING_GREEN"), HtmlColor.$ordinal_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#00FF7F");
  HtmlColor.$static_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STEEL_BLUE"), HtmlColor.$ordinal_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor, "#4682B4");
  HtmlColor.$static_TAN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TAN"), HtmlColor.$ordinal_TAN__org_pepstock_charba_client_colors_HtmlColor, "#D2B48C");
  HtmlColor.$static_TEAL__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEAL"), HtmlColor.$ordinal_TEAL__org_pepstock_charba_client_colors_HtmlColor, "#008080");
  HtmlColor.$static_THISTLE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("THISTLE"), HtmlColor.$ordinal_THISTLE__org_pepstock_charba_client_colors_HtmlColor, "#D8BFD8");
  HtmlColor.$static_TOMATO__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TOMATO"), HtmlColor.$ordinal_TOMATO__org_pepstock_charba_client_colors_HtmlColor, "#FF6347");
  HtmlColor.$static_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TURQUOISE"), HtmlColor.$ordinal_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor, "#40E0D0");
  HtmlColor.$static_VIOLET__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("VIOLET"), HtmlColor.$ordinal_VIOLET__org_pepstock_charba_client_colors_HtmlColor, "#EE82EE");
  HtmlColor.$static_WHEAT__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WHEAT"), HtmlColor.$ordinal_WHEAT__org_pepstock_charba_client_colors_HtmlColor, "#F5DEB3");
  HtmlColor.$static_WHITE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WHITE"), HtmlColor.$ordinal_WHITE__org_pepstock_charba_client_colors_HtmlColor, "#FFFFFF");
  HtmlColor.$static_WHITE_SMOKE__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WHITE_SMOKE"), HtmlColor.$ordinal_WHITE_SMOKE__org_pepstock_charba_client_colors_HtmlColor, "#F5F5F5");
  HtmlColor.$static_YELLOW__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YELLOW"), HtmlColor.$ordinal_YELLOW__org_pepstock_charba_client_colors_HtmlColor, "#FFFF00");
  HtmlColor.$static_YELLOW_GREEN__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YELLOW_GREEN"), HtmlColor.$ordinal_YELLOW_GREEN__org_pepstock_charba_client_colors_HtmlColor, "#9ACD32");
  HtmlColor.$static_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor = HtmlColor.$create__java_lang_String__int__java_lang_String__double($Util.$makeEnumName("TRANSPARENT"), HtmlColor.$ordinal_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor, "#FFFFFF", 0);
  HtmlColor.f_namesToValuesMap__org_pepstock_charba_client_colors_HtmlColor_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlColor;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!HtmlColor}*/
HtmlColor.$static_ALICE_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_ANTIQUE_WHITE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_AQUA__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_AQUAMARINE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_AZURE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_BEIGE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_BISQUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_BLACK__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_BLANCHED_ALMOND__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_BLUE_VIOLET__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_BROWN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_BURLY_WOOD__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_CADET_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_CHARTREUSE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_CHOCOLATE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_CORAL__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_CORNFLOWER_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_CORNSILK__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_CRIMSON__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_CYAN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_CYAN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_GRAY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_GREY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_KHAKI__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_MAGENTA__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_OLIVE_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_ORANGE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_ORCHID__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_RED__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_SALMON__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DARK_VIOLET__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DEEP_PINK__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DEEP_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DIM_GRAY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DIM_GREY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_DODGER_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_FIRE_BRICK__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_FLORAL_WHITE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_FOREST_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_FUCHSIA__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_GAINSBORO__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_GHOST_WHITE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_GOLD__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_GRAY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_GREY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_GREEN_YELLOW__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_HONEY_DEW__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_HOT_PINK__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_INDIAN_RED__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_INDIGO__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_IVORY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_KHAKI__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LAVENDER__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LAVENDER_BLUSH__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LAWN_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LEMON_CHIFFON__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_CORAL__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_CYAN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_GOLDEN_ROD_YELLOW__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_GRAY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_GREY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_PINK__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_SALMON__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIGHT_YELLOW__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIME__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LIME_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_LINEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MAGENTA__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MAROON__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MEDIUM_AQUA_MARINE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MEDIUM_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MEDIUM_ORCHID__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MEDIUM_PURPLE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MEDIUM_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MEDIUM_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MEDIUM_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MEDIUM_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MEDIUM_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MIDNIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MINT_CREAM__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MISTY_ROSE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_MOCCASIN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_NAVAJO_WHITE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_NAVY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_OLD_LACE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_OLIVE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_OLIVE_DRAB__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_ORANGE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_ORANGE_RED__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_ORCHID__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_PALE_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_PALE_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_PALE_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_PALE_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_PAPAYA_WHIP__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_PEACH_PUFF__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_PERU__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_PINK__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_PLUM__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_POWDER_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_PURPLE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_REBECCA_PURPLE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_RED__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_ROSY_BROWN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_ROYAL_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SADDLE_BROWN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SALMON__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SANDY_BROWN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SEA_SHELL__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SIENNA__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SILVER__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SNOW__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_TAN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_TEAL__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_THISTLE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_TOMATO__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_VIOLET__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_WHEAT__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_WHITE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_WHITE_SMOKE__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_YELLOW__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_YELLOW_GREEN__org_pepstock_charba_client_colors_HtmlColor;
/**@private {!HtmlColor}*/
HtmlColor.$static_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor;
/**@type {Map<?string, !HtmlColor>}*/
HtmlColor.f_namesToValuesMap__org_pepstock_charba_client_colors_HtmlColor_;
/**@const {number}*/
HtmlColor.$ordinal_ALICE_BLUE__org_pepstock_charba_client_colors_HtmlColor = 0;
/**@const {number}*/
HtmlColor.$ordinal_ANTIQUE_WHITE__org_pepstock_charba_client_colors_HtmlColor = 1;
/**@const {number}*/
HtmlColor.$ordinal_AQUA__org_pepstock_charba_client_colors_HtmlColor = 2;
/**@const {number}*/
HtmlColor.$ordinal_AQUAMARINE__org_pepstock_charba_client_colors_HtmlColor = 3;
/**@const {number}*/
HtmlColor.$ordinal_AZURE__org_pepstock_charba_client_colors_HtmlColor = 4;
/**@const {number}*/
HtmlColor.$ordinal_BEIGE__org_pepstock_charba_client_colors_HtmlColor = 5;
/**@const {number}*/
HtmlColor.$ordinal_BISQUE__org_pepstock_charba_client_colors_HtmlColor = 6;
/**@const {number}*/
HtmlColor.$ordinal_BLACK__org_pepstock_charba_client_colors_HtmlColor = 7;
/**@const {number}*/
HtmlColor.$ordinal_BLANCHED_ALMOND__org_pepstock_charba_client_colors_HtmlColor = 8;
/**@const {number}*/
HtmlColor.$ordinal_BLUE__org_pepstock_charba_client_colors_HtmlColor = 9;
/**@const {number}*/
HtmlColor.$ordinal_BLUE_VIOLET__org_pepstock_charba_client_colors_HtmlColor = 10;
/**@const {number}*/
HtmlColor.$ordinal_BROWN__org_pepstock_charba_client_colors_HtmlColor = 11;
/**@const {number}*/
HtmlColor.$ordinal_BURLY_WOOD__org_pepstock_charba_client_colors_HtmlColor = 12;
/**@const {number}*/
HtmlColor.$ordinal_CADET_BLUE__org_pepstock_charba_client_colors_HtmlColor = 13;
/**@const {number}*/
HtmlColor.$ordinal_CHARTREUSE__org_pepstock_charba_client_colors_HtmlColor = 14;
/**@const {number}*/
HtmlColor.$ordinal_CHOCOLATE__org_pepstock_charba_client_colors_HtmlColor = 15;
/**@const {number}*/
HtmlColor.$ordinal_CORAL__org_pepstock_charba_client_colors_HtmlColor = 16;
/**@const {number}*/
HtmlColor.$ordinal_CORNFLOWER_BLUE__org_pepstock_charba_client_colors_HtmlColor = 17;
/**@const {number}*/
HtmlColor.$ordinal_CORNSILK__org_pepstock_charba_client_colors_HtmlColor = 18;
/**@const {number}*/
HtmlColor.$ordinal_CRIMSON__org_pepstock_charba_client_colors_HtmlColor = 19;
/**@const {number}*/
HtmlColor.$ordinal_CYAN__org_pepstock_charba_client_colors_HtmlColor = 20;
/**@const {number}*/
HtmlColor.$ordinal_DARK_BLUE__org_pepstock_charba_client_colors_HtmlColor = 21;
/**@const {number}*/
HtmlColor.$ordinal_DARK_CYAN__org_pepstock_charba_client_colors_HtmlColor = 22;
/**@const {number}*/
HtmlColor.$ordinal_DARK_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor = 23;
/**@const {number}*/
HtmlColor.$ordinal_DARK_GRAY__org_pepstock_charba_client_colors_HtmlColor = 24;
/**@const {number}*/
HtmlColor.$ordinal_DARK_GREY__org_pepstock_charba_client_colors_HtmlColor = 25;
/**@const {number}*/
HtmlColor.$ordinal_DARK_GREEN__org_pepstock_charba_client_colors_HtmlColor = 26;
/**@const {number}*/
HtmlColor.$ordinal_DARK_KHAKI__org_pepstock_charba_client_colors_HtmlColor = 27;
/**@const {number}*/
HtmlColor.$ordinal_DARK_MAGENTA__org_pepstock_charba_client_colors_HtmlColor = 28;
/**@const {number}*/
HtmlColor.$ordinal_DARK_OLIVE_GREEN__org_pepstock_charba_client_colors_HtmlColor = 29;
/**@const {number}*/
HtmlColor.$ordinal_DARK_ORANGE__org_pepstock_charba_client_colors_HtmlColor = 30;
/**@const {number}*/
HtmlColor.$ordinal_DARK_ORCHID__org_pepstock_charba_client_colors_HtmlColor = 31;
/**@const {number}*/
HtmlColor.$ordinal_DARK_RED__org_pepstock_charba_client_colors_HtmlColor = 32;
/**@const {number}*/
HtmlColor.$ordinal_DARK_SALMON__org_pepstock_charba_client_colors_HtmlColor = 33;
/**@const {number}*/
HtmlColor.$ordinal_DARK_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor = 34;
/**@const {number}*/
HtmlColor.$ordinal_DARK_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor = 35;
/**@const {number}*/
HtmlColor.$ordinal_DARK_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor = 36;
/**@const {number}*/
HtmlColor.$ordinal_DARK_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor = 37;
/**@const {number}*/
HtmlColor.$ordinal_DARK_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor = 38;
/**@const {number}*/
HtmlColor.$ordinal_DARK_VIOLET__org_pepstock_charba_client_colors_HtmlColor = 39;
/**@const {number}*/
HtmlColor.$ordinal_DEEP_PINK__org_pepstock_charba_client_colors_HtmlColor = 40;
/**@const {number}*/
HtmlColor.$ordinal_DEEP_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor = 41;
/**@const {number}*/
HtmlColor.$ordinal_DIM_GRAY__org_pepstock_charba_client_colors_HtmlColor = 42;
/**@const {number}*/
HtmlColor.$ordinal_DIM_GREY__org_pepstock_charba_client_colors_HtmlColor = 43;
/**@const {number}*/
HtmlColor.$ordinal_DODGER_BLUE__org_pepstock_charba_client_colors_HtmlColor = 44;
/**@const {number}*/
HtmlColor.$ordinal_FIRE_BRICK__org_pepstock_charba_client_colors_HtmlColor = 45;
/**@const {number}*/
HtmlColor.$ordinal_FLORAL_WHITE__org_pepstock_charba_client_colors_HtmlColor = 46;
/**@const {number}*/
HtmlColor.$ordinal_FOREST_GREEN__org_pepstock_charba_client_colors_HtmlColor = 47;
/**@const {number}*/
HtmlColor.$ordinal_FUCHSIA__org_pepstock_charba_client_colors_HtmlColor = 48;
/**@const {number}*/
HtmlColor.$ordinal_GAINSBORO__org_pepstock_charba_client_colors_HtmlColor = 49;
/**@const {number}*/
HtmlColor.$ordinal_GHOST_WHITE__org_pepstock_charba_client_colors_HtmlColor = 50;
/**@const {number}*/
HtmlColor.$ordinal_GOLD__org_pepstock_charba_client_colors_HtmlColor = 51;
/**@const {number}*/
HtmlColor.$ordinal_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor = 52;
/**@const {number}*/
HtmlColor.$ordinal_GRAY__org_pepstock_charba_client_colors_HtmlColor = 53;
/**@const {number}*/
HtmlColor.$ordinal_GREY__org_pepstock_charba_client_colors_HtmlColor = 54;
/**@const {number}*/
HtmlColor.$ordinal_GREEN__org_pepstock_charba_client_colors_HtmlColor = 55;
/**@const {number}*/
HtmlColor.$ordinal_GREEN_YELLOW__org_pepstock_charba_client_colors_HtmlColor = 56;
/**@const {number}*/
HtmlColor.$ordinal_HONEY_DEW__org_pepstock_charba_client_colors_HtmlColor = 57;
/**@const {number}*/
HtmlColor.$ordinal_HOT_PINK__org_pepstock_charba_client_colors_HtmlColor = 58;
/**@const {number}*/
HtmlColor.$ordinal_INDIAN_RED__org_pepstock_charba_client_colors_HtmlColor = 59;
/**@const {number}*/
HtmlColor.$ordinal_INDIGO__org_pepstock_charba_client_colors_HtmlColor = 60;
/**@const {number}*/
HtmlColor.$ordinal_IVORY__org_pepstock_charba_client_colors_HtmlColor = 61;
/**@const {number}*/
HtmlColor.$ordinal_KHAKI__org_pepstock_charba_client_colors_HtmlColor = 62;
/**@const {number}*/
HtmlColor.$ordinal_LAVENDER__org_pepstock_charba_client_colors_HtmlColor = 63;
/**@const {number}*/
HtmlColor.$ordinal_LAVENDER_BLUSH__org_pepstock_charba_client_colors_HtmlColor = 64;
/**@const {number}*/
HtmlColor.$ordinal_LAWN_GREEN__org_pepstock_charba_client_colors_HtmlColor = 65;
/**@const {number}*/
HtmlColor.$ordinal_LEMON_CHIFFON__org_pepstock_charba_client_colors_HtmlColor = 66;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor = 67;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_CORAL__org_pepstock_charba_client_colors_HtmlColor = 68;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_CYAN__org_pepstock_charba_client_colors_HtmlColor = 69;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_GOLDEN_ROD_YELLOW__org_pepstock_charba_client_colors_HtmlColor = 70;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_GRAY__org_pepstock_charba_client_colors_HtmlColor = 71;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_GREY__org_pepstock_charba_client_colors_HtmlColor = 72;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor = 73;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_PINK__org_pepstock_charba_client_colors_HtmlColor = 74;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_SALMON__org_pepstock_charba_client_colors_HtmlColor = 75;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor = 76;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor = 77;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor = 78;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor = 79;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor = 80;
/**@const {number}*/
HtmlColor.$ordinal_LIGHT_YELLOW__org_pepstock_charba_client_colors_HtmlColor = 81;
/**@const {number}*/
HtmlColor.$ordinal_LIME__org_pepstock_charba_client_colors_HtmlColor = 82;
/**@const {number}*/
HtmlColor.$ordinal_LIME_GREEN__org_pepstock_charba_client_colors_HtmlColor = 83;
/**@const {number}*/
HtmlColor.$ordinal_LINEN__org_pepstock_charba_client_colors_HtmlColor = 84;
/**@const {number}*/
HtmlColor.$ordinal_MAGENTA__org_pepstock_charba_client_colors_HtmlColor = 85;
/**@const {number}*/
HtmlColor.$ordinal_MAROON__org_pepstock_charba_client_colors_HtmlColor = 86;
/**@const {number}*/
HtmlColor.$ordinal_MEDIUM_AQUA_MARINE__org_pepstock_charba_client_colors_HtmlColor = 87;
/**@const {number}*/
HtmlColor.$ordinal_MEDIUM_BLUE__org_pepstock_charba_client_colors_HtmlColor = 88;
/**@const {number}*/
HtmlColor.$ordinal_MEDIUM_ORCHID__org_pepstock_charba_client_colors_HtmlColor = 89;
/**@const {number}*/
HtmlColor.$ordinal_MEDIUM_PURPLE__org_pepstock_charba_client_colors_HtmlColor = 90;
/**@const {number}*/
HtmlColor.$ordinal_MEDIUM_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor = 91;
/**@const {number}*/
HtmlColor.$ordinal_MEDIUM_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor = 92;
/**@const {number}*/
HtmlColor.$ordinal_MEDIUM_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor = 93;
/**@const {number}*/
HtmlColor.$ordinal_MEDIUM_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor = 94;
/**@const {number}*/
HtmlColor.$ordinal_MEDIUM_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor = 95;
/**@const {number}*/
HtmlColor.$ordinal_MIDNIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor = 96;
/**@const {number}*/
HtmlColor.$ordinal_MINT_CREAM__org_pepstock_charba_client_colors_HtmlColor = 97;
/**@const {number}*/
HtmlColor.$ordinal_MISTY_ROSE__org_pepstock_charba_client_colors_HtmlColor = 98;
/**@const {number}*/
HtmlColor.$ordinal_MOCCASIN__org_pepstock_charba_client_colors_HtmlColor = 99;
/**@const {number}*/
HtmlColor.$ordinal_NAVAJO_WHITE__org_pepstock_charba_client_colors_HtmlColor = 100;
/**@const {number}*/
HtmlColor.$ordinal_NAVY__org_pepstock_charba_client_colors_HtmlColor = 101;
/**@const {number}*/
HtmlColor.$ordinal_OLD_LACE__org_pepstock_charba_client_colors_HtmlColor = 102;
/**@const {number}*/
HtmlColor.$ordinal_OLIVE__org_pepstock_charba_client_colors_HtmlColor = 103;
/**@const {number}*/
HtmlColor.$ordinal_OLIVE_DRAB__org_pepstock_charba_client_colors_HtmlColor = 104;
/**@const {number}*/
HtmlColor.$ordinal_ORANGE__org_pepstock_charba_client_colors_HtmlColor = 105;
/**@const {number}*/
HtmlColor.$ordinal_ORANGE_RED__org_pepstock_charba_client_colors_HtmlColor = 106;
/**@const {number}*/
HtmlColor.$ordinal_ORCHID__org_pepstock_charba_client_colors_HtmlColor = 107;
/**@const {number}*/
HtmlColor.$ordinal_PALE_GOLDEN_ROD__org_pepstock_charba_client_colors_HtmlColor = 108;
/**@const {number}*/
HtmlColor.$ordinal_PALE_GREEN__org_pepstock_charba_client_colors_HtmlColor = 109;
/**@const {number}*/
HtmlColor.$ordinal_PALE_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor = 110;
/**@const {number}*/
HtmlColor.$ordinal_PALE_VIOLET_RED__org_pepstock_charba_client_colors_HtmlColor = 111;
/**@const {number}*/
HtmlColor.$ordinal_PAPAYA_WHIP__org_pepstock_charba_client_colors_HtmlColor = 112;
/**@const {number}*/
HtmlColor.$ordinal_PEACH_PUFF__org_pepstock_charba_client_colors_HtmlColor = 113;
/**@const {number}*/
HtmlColor.$ordinal_PERU__org_pepstock_charba_client_colors_HtmlColor = 114;
/**@const {number}*/
HtmlColor.$ordinal_PINK__org_pepstock_charba_client_colors_HtmlColor = 115;
/**@const {number}*/
HtmlColor.$ordinal_PLUM__org_pepstock_charba_client_colors_HtmlColor = 116;
/**@const {number}*/
HtmlColor.$ordinal_POWDER_BLUE__org_pepstock_charba_client_colors_HtmlColor = 117;
/**@const {number}*/
HtmlColor.$ordinal_PURPLE__org_pepstock_charba_client_colors_HtmlColor = 118;
/**@const {number}*/
HtmlColor.$ordinal_REBECCA_PURPLE__org_pepstock_charba_client_colors_HtmlColor = 119;
/**@const {number}*/
HtmlColor.$ordinal_RED__org_pepstock_charba_client_colors_HtmlColor = 120;
/**@const {number}*/
HtmlColor.$ordinal_ROSY_BROWN__org_pepstock_charba_client_colors_HtmlColor = 121;
/**@const {number}*/
HtmlColor.$ordinal_ROYAL_BLUE__org_pepstock_charba_client_colors_HtmlColor = 122;
/**@const {number}*/
HtmlColor.$ordinal_SADDLE_BROWN__org_pepstock_charba_client_colors_HtmlColor = 123;
/**@const {number}*/
HtmlColor.$ordinal_SALMON__org_pepstock_charba_client_colors_HtmlColor = 124;
/**@const {number}*/
HtmlColor.$ordinal_SANDY_BROWN__org_pepstock_charba_client_colors_HtmlColor = 125;
/**@const {number}*/
HtmlColor.$ordinal_SEA_GREEN__org_pepstock_charba_client_colors_HtmlColor = 126;
/**@const {number}*/
HtmlColor.$ordinal_SEA_SHELL__org_pepstock_charba_client_colors_HtmlColor = 127;
/**@const {number}*/
HtmlColor.$ordinal_SIENNA__org_pepstock_charba_client_colors_HtmlColor = 128;
/**@const {number}*/
HtmlColor.$ordinal_SILVER__org_pepstock_charba_client_colors_HtmlColor = 129;
/**@const {number}*/
HtmlColor.$ordinal_SKY_BLUE__org_pepstock_charba_client_colors_HtmlColor = 130;
/**@const {number}*/
HtmlColor.$ordinal_SLATE_BLUE__org_pepstock_charba_client_colors_HtmlColor = 131;
/**@const {number}*/
HtmlColor.$ordinal_SLATE_GRAY__org_pepstock_charba_client_colors_HtmlColor = 132;
/**@const {number}*/
HtmlColor.$ordinal_SLATE_GREY__org_pepstock_charba_client_colors_HtmlColor = 133;
/**@const {number}*/
HtmlColor.$ordinal_SNOW__org_pepstock_charba_client_colors_HtmlColor = 134;
/**@const {number}*/
HtmlColor.$ordinal_SPRING_GREEN__org_pepstock_charba_client_colors_HtmlColor = 135;
/**@const {number}*/
HtmlColor.$ordinal_STEEL_BLUE__org_pepstock_charba_client_colors_HtmlColor = 136;
/**@const {number}*/
HtmlColor.$ordinal_TAN__org_pepstock_charba_client_colors_HtmlColor = 137;
/**@const {number}*/
HtmlColor.$ordinal_TEAL__org_pepstock_charba_client_colors_HtmlColor = 138;
/**@const {number}*/
HtmlColor.$ordinal_THISTLE__org_pepstock_charba_client_colors_HtmlColor = 139;
/**@const {number}*/
HtmlColor.$ordinal_TOMATO__org_pepstock_charba_client_colors_HtmlColor = 140;
/**@const {number}*/
HtmlColor.$ordinal_TURQUOISE__org_pepstock_charba_client_colors_HtmlColor = 141;
/**@const {number}*/
HtmlColor.$ordinal_VIOLET__org_pepstock_charba_client_colors_HtmlColor = 142;
/**@const {number}*/
HtmlColor.$ordinal_WHEAT__org_pepstock_charba_client_colors_HtmlColor = 143;
/**@const {number}*/
HtmlColor.$ordinal_WHITE__org_pepstock_charba_client_colors_HtmlColor = 144;
/**@const {number}*/
HtmlColor.$ordinal_WHITE_SMOKE__org_pepstock_charba_client_colors_HtmlColor = 145;
/**@const {number}*/
HtmlColor.$ordinal_YELLOW__org_pepstock_charba_client_colors_HtmlColor = 146;
/**@const {number}*/
HtmlColor.$ordinal_YELLOW_GREEN__org_pepstock_charba_client_colors_HtmlColor = 147;
/**@const {number}*/
HtmlColor.$ordinal_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor = 148;
IsEnumeratedColor.$markImplementor(HtmlColor);
$Util.$setClassMetadataForEnum(HtmlColor, "org.pepstock.charba.client.colors.HtmlColor");

exports = HtmlColor;

//# sourceMappingURL=HtmlColor.js.map
