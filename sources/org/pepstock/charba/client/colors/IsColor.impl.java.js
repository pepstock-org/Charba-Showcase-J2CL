goog.module('org.pepstock.charba.client.colors.IsColor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Color = goog.forwardDeclare('org.pepstock.charba.client.colors.Color$impl');
let ColorUtil = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorUtil$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @interface
 */
class IsColor {
 /** @return {boolean} */
 static m_isConsistent__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  IsColor.$clinit();
  return IsColor.m_isValid__org_pepstock_charba_client_colors_IsColor(color) && !$Equality.$same(color.m_toRGBA__(), null);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  IsColor.$clinit();
  return !$Equality.$same(color, null) && ColorUtil.m_isChannelWithinBounds__int(color.m_getRed__()) && ColorUtil.m_isChannelWithinBounds__int(color.m_getGreen__()) && ColorUtil.m_isChannelWithinBounds__int(color.m_getBlue__()) && ColorUtil.m_isAlphaWithinBounds__double(color.m_getAlpha__());
 }
 
 static m_checkIfValid__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  IsColor.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(color, "Color");
  ColorUtil.m_checkChannelWithinBounds__int(color.m_getRed__());
  ColorUtil.m_checkChannelWithinBounds__int(color.m_getGreen__());
  ColorUtil.m_checkChannelWithinBounds__int(color.m_getBlue__());
  ColorUtil.m_checkAlphaWithinBounds__double(color.m_getAlpha__());
 }
 /** @return {?string} */
 static m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(/** IsColor */ value) {
  IsColor.$clinit();
  return IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(value) ? value.m_toRGBA__() : null;
 }
 /** @abstract @return {number} */
 m_getRed__() {}
 /** @abstract @return {number} */
 m_getGreen__() {}
 /** @abstract @return {number} */
 m_getBlue__() {}
 /** @abstract @return {number} */
 m_getAlpha__() {}
 /** @abstract @return {IsColor} */
 m_alpha__double(/** number */ alpha) {}
 /** @abstract @return {?string} */
 m_toRGBA__() {}
 /** @abstract @return {?string} */
 m_toRGB__() {}
 /** @abstract @return {?string} */
 m_toHex__() {}
 /** @abstract @return {?string} */
 m_toHSLA__() {}
 /** @abstract @return {?string} */
 m_toHSL__() {}
 /** @abstract @return {number} */
 m_toRGBs__() {}
 /** @abstract @return {IsColor} */
 m_brighter__() {}
 /** @abstract @return {IsColor} */
 m_brighter__double(/** number */ alpha) {}
 /** @abstract @return {IsColor} */
 m_darker__() {}
 /** @abstract @return {IsColor} */
 m_darker__double(/** number */ alpha) {}
 /** @return {IsColor} */
 static m_alpha__$default__org_pepstock_charba_client_colors_IsColor__double(/** !IsColor */ $thisArg, /** number */ alpha) {
  IsColor.$clinit();
  ColorUtil.m_checkAlphaWithinBounds__double(alpha);
  return Color.$create__int__int__int__double($thisArg.m_getRed__(), $thisArg.m_getGreen__(), $thisArg.m_getBlue__(), alpha);
 }
 /** @return {?string} */
 static m_toRGBA__$default__org_pepstock_charba_client_colors_IsColor(/** !IsColor */ $thisArg) {
  IsColor.$clinit();
  return ColorUtil.m_toRGB__org_pepstock_charba_client_colors_IsColor__boolean($thisArg, true);
 }
 /** @return {?string} */
 static m_toRGB__$default__org_pepstock_charba_client_colors_IsColor(/** !IsColor */ $thisArg) {
  IsColor.$clinit();
  return ColorUtil.m_toRGB__org_pepstock_charba_client_colors_IsColor__boolean($thisArg, false);
 }
 /** @return {?string} */
 static m_toHex__$default__org_pepstock_charba_client_colors_IsColor(/** !IsColor */ $thisArg) {
  IsColor.$clinit();
  return ColorUtil.m_toHex__org_pepstock_charba_client_colors_IsColor($thisArg);
 }
 /** @return {?string} */
 static m_toHSLA__$default__org_pepstock_charba_client_colors_IsColor(/** !IsColor */ $thisArg) {
  IsColor.$clinit();
  return ColorUtil.m_toHSL__org_pepstock_charba_client_colors_IsColor__boolean($thisArg, true);
 }
 /** @return {?string} */
 static m_toHSL__$default__org_pepstock_charba_client_colors_IsColor(/** !IsColor */ $thisArg) {
  IsColor.$clinit();
  return ColorUtil.m_toHSL__org_pepstock_charba_client_colors_IsColor__boolean($thisArg, false);
 }
 /** @return {number} */
 static m_toRGBs__$default__org_pepstock_charba_client_colors_IsColor(/** !IsColor */ $thisArg) {
  IsColor.$clinit();
  IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor($thisArg);
  return $Primitives.$narrowLongToInt(j_l_Math.m_round__double($thisArg.m_getAlpha__() * 255)) << 24 | $thisArg.m_getRed__() << 16 | $thisArg.m_getGreen__() << 8 | $thisArg.m_getBlue__();
 }
 /** @return {IsColor} */
 static m_brighter__$default__org_pepstock_charba_client_colors_IsColor(/** !IsColor */ $thisArg) {
  IsColor.$clinit();
  return $thisArg.m_brighter__double(Double.f_NaN__java_lang_Double);
 }
 /** @return {IsColor} */
 static m_brighter__$default__org_pepstock_charba_client_colors_IsColor__double(/** !IsColor */ $thisArg, /** number */ alpha) {
  IsColor.$clinit();
  IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor($thisArg);
  let alphaToUse = Undefined.m_is__double(alpha) ? $thisArg.m_getAlpha__() : alpha;
  ColorUtil.m_checkAlphaWithinBounds__double(alphaToUse);
  let r = $thisArg.m_getRed__();
  let g = $thisArg.m_getGreen__();
  let b = $thisArg.m_getBlue__();
  let defaultRGBItem = $Primitives.$narrowDoubleToInt(1 / (1 - ColorUtil.f_FACTOR__org_pepstock_charba_client_colors_ColorUtil));
  if (r == 0 && g == 0 && b == 0) {
   return Color.$create__int__int__int__double(defaultRGBItem, defaultRGBItem, defaultRGBItem, alphaToUse);
  }
  if (r > 0 && r < defaultRGBItem) {
   r = defaultRGBItem;
  }
  if (g > 0 && g < defaultRGBItem) {
   g = defaultRGBItem;
  }
  if (b > 0 && b < defaultRGBItem) {
   b = defaultRGBItem;
  }
  let newRed = Math.min($Primitives.$narrowDoubleToInt(r / ColorUtil.f_FACTOR__org_pepstock_charba_client_colors_ColorUtil), 255);
  let newGreen = Math.min($Primitives.$narrowDoubleToInt(g / ColorUtil.f_FACTOR__org_pepstock_charba_client_colors_ColorUtil), 255);
  let newBlue = Math.min($Primitives.$narrowDoubleToInt(b / ColorUtil.f_FACTOR__org_pepstock_charba_client_colors_ColorUtil), 255);
  return Color.$create__int__int__int__double(newRed, newGreen, newBlue, alphaToUse);
 }
 /** @return {IsColor} */
 static m_darker__$default__org_pepstock_charba_client_colors_IsColor(/** !IsColor */ $thisArg) {
  IsColor.$clinit();
  return $thisArg.m_darker__double(Double.f_NaN__java_lang_Double);
 }
 /** @return {IsColor} */
 static m_darker__$default__org_pepstock_charba_client_colors_IsColor__double(/** !IsColor */ $thisArg, /** number */ alpha) {
  IsColor.$clinit();
  IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor($thisArg);
  let alphaToUse = Undefined.m_is__double(alpha) ? $thisArg.m_getAlpha__() : alpha;
  ColorUtil.m_checkAlphaWithinBounds__double(alphaToUse);
  let newRed = Math.max($Primitives.$narrowDoubleToInt($thisArg.m_getRed__() * ColorUtil.f_FACTOR__org_pepstock_charba_client_colors_ColorUtil), 0);
  let newGreen = Math.max($Primitives.$narrowDoubleToInt($thisArg.m_getGreen__() * ColorUtil.f_FACTOR__org_pepstock_charba_client_colors_ColorUtil), 0);
  let newBlue = Math.max($Primitives.$narrowDoubleToInt($thisArg.m_getBlue__() * ColorUtil.f_FACTOR__org_pepstock_charba_client_colors_ColorUtil), 0);
  return Color.$create__int__int__int__double(newRed, newGreen, newBlue, alphaToUse);
 }
 
 static $clinit() {
  IsColor.$clinit = () =>{};
  IsColor.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_colors_IsColor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_colors_IsColor;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  j_l_Math = goog.module.get('java.lang.Math$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Color = goog.module.get('org.pepstock.charba.client.colors.Color$impl');
  ColorUtil = goog.module.get('org.pepstock.charba.client.colors.ColorUtil$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
IsColor.$markImplementor(/**@type {Function}*/ (IsColor));
$Util.$setClassMetadataForInterface(IsColor, "org.pepstock.charba.client.colors.IsColor");

exports = IsColor;

//# sourceMappingURL=IsColor.js.map
