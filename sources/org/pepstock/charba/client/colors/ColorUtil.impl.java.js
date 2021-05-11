goog.module('org.pepstock.charba.client.colors.ColorUtil$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ColorUtil extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ColorUtil} */
 static $create__() {
  let $instance = new ColorUtil();
  $instance.$ctor__org_pepstock_charba_client_colors_ColorUtil__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_ColorUtil__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 static m_toRGB__org_pepstock_charba_client_colors_IsColor__boolean(/** IsColor */ color, /** boolean */ withAlpha) {
  ColorUtil.$clinit();
  IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor(color);
  let sb = StringBuilder.$create__();
  if (withAlpha) {
   sb.m_append__java_lang_String(ColorUtil.f_RGBA_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil);
  } else {
   sb.m_append__java_lang_String(ColorUtil.f_RGB_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil);
  }
  sb.m_append__java_lang_String(Constants.f_OPEN_ROUND_BRACKET__org_pepstock_charba_client_commons_Constants).m_append__int(color.m_getRed__()).m_append__java_lang_String(Constants.f_COMMA__org_pepstock_charba_client_commons_Constants).m_append__int(color.m_getGreen__()).m_append__java_lang_String(Constants.f_COMMA__org_pepstock_charba_client_commons_Constants).m_append__int(color.m_getBlue__());
  if (withAlpha) {
   sb.m_append__java_lang_String(Constants.f_COMMA__org_pepstock_charba_client_commons_Constants).m_append__double(color.m_getAlpha__());
  }
  sb.m_append__java_lang_String(Constants.f_CLOSE_ROUND_BRACKET__org_pepstock_charba_client_commons_Constants);
  return sb.toString();
 }
 /** @return {?string} */
 static m_toHex__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  ColorUtil.$clinit();
  IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor(color);
  return j_l_String.m_valueOf__java_lang_Object(ColorUtil.f_HEX_STARTING_CHAR__org_pepstock_charba_client_colors_ColorUtil) + j_l_String.m_valueOf__java_lang_Object(ColorUtil.m_pad__java_lang_String(Integer.m_toHexString__int(color.m_getRed__()))) + j_l_String.m_valueOf__java_lang_Object(ColorUtil.m_pad__java_lang_String(Integer.m_toHexString__int(color.m_getGreen__()))) + j_l_String.m_valueOf__java_lang_Object(ColorUtil.m_pad__java_lang_String(Integer.m_toHexString__int(color.m_getBlue__())));
 }
 /** @return {?string} */
 static m_toHSL__org_pepstock_charba_client_colors_IsColor__boolean(/** IsColor */ color, /** boolean */ withAlpha) {
  ColorUtil.$clinit();
  IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor(color);
  let sb = StringBuilder.$create__();
  if (withAlpha) {
   sb.m_append__java_lang_String(ColorUtil.f_HSLA_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil);
  } else {
   sb.m_append__java_lang_String(ColorUtil.f_HSL_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil);
  }
  sb.m_append__java_lang_String(Constants.f_OPEN_ROUND_BRACKET__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(ColorUtil.m_createHSLAsString__int__int__int(color.m_getRed__(), color.m_getGreen__(), color.m_getBlue__()));
  if (withAlpha) {
   sb.m_append__java_lang_String(Constants.f_COMMA__org_pepstock_charba_client_commons_Constants).m_append__double(color.m_getAlpha__());
  }
  sb.m_append__java_lang_String(Constants.f_CLOSE_ROUND_BRACKET__org_pepstock_charba_client_commons_Constants);
  return sb.toString();
 }
 /** @return {boolean} */
 static m_isChannelWithinBounds__int(/** number */ channel) {
  ColorUtil.$clinit();
  return Checker.m_isBetween__int__int__int(channel, 0, 255);
 }
 
 static m_checkChannelWithinBounds__int(/** number */ channel) {
  ColorUtil.$clinit();
  Checker.m_checkIfBetween__int__int__int__java_lang_String(channel, 0, 255, "Channel value");
 }
 /** @return {boolean} */
 static m_isAlphaWithinBounds__double(/** number */ alpha) {
  ColorUtil.$clinit();
  return Checker.m_isBetween__double__double__double(alpha, 0, 1);
 }
 
 static m_checkAlphaWithinBounds__double(/** number */ alpha) {
  ColorUtil.$clinit();
  Checker.m_checkIfBetween__double__double__double__java_lang_String(alpha, 0, 1, "Alpha value");
 }
 /** @return {?string} */
 static m_createHSLAsString__int__int__int(/** number */ red, /** number */ green, /** number */ blue) {
  ColorUtil.$clinit();
  let sb = StringBuilder.$create__();
  let r = red / 255;
  let g = green / 255;
  let b = blue / 255;
  let min = Math.min(r, Math.min(g, b));
  let max = Math.max(r, Math.max(g, b));
  let hue = 0;
  if (Double.m_compare__double__double(max, min) == 0) {
   hue = 0;
  } else if (Double.m_compare__double__double(max, r) == 0) {
   hue = (60 * (g - b) / (max - min) + 360) % 360;
  } else if (Double.m_compare__double__double(max, g) == 0) {
   hue = 60 * (b - r) / (max - min) + 120;
  } else if (Double.m_compare__double__double(max, b) == 0) {
   hue = 60 * (r - g) / (max - min) + 240;
  }
  let hueInt = $Primitives.$narrowLongToInt(j_l_Math.m_round__double(hue));
  sb.m_append__int(hueInt).m_append__java_lang_String(Constants.f_COMMA__org_pepstock_charba_client_commons_Constants);
  let lightness = (max + min) / 2;
  let lightnessInt = $Primitives.$narrowLongToInt(j_l_Math.m_round__double(lightness * 100));
  let saturation = 0;
  if (Double.m_compare__double__double(max, min) == 0) {
   saturation = 0;
  } else if (lightness <= 0.5) {
   saturation = (max - min) / (max + min);
  } else {
   saturation = (max - min) / (2 - max - min);
  }
  let saturationInt = $Primitives.$narrowLongToInt(j_l_Math.m_round__double(saturation * 100));
  return sb.m_append__int(saturationInt).m_append__java_lang_String(Constants.f_PERCENT__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(Constants.f_COMMA__org_pepstock_charba_client_commons_Constants).m_append__int(lightnessInt).m_append__java_lang_String(Constants.f_PERCENT__org_pepstock_charba_client_commons_Constants).toString();
 }
 /** @return {?string} */
 static m_pad__java_lang_String(/** ?string */ in_1) {
  ColorUtil.$clinit();
  if (j_l_String.m_length__java_lang_String(in_1) == 0) {
   return ColorUtil.f_PADDING_DOUBLE_ZERO__org_pepstock_charba_client_colors_ColorUtil;
  }
  if (j_l_String.m_length__java_lang_String(in_1) == 1) {
   return j_l_String.m_valueOf__java_lang_Object(ColorUtil.f_PADDING_ZERO__org_pepstock_charba_client_colors_ColorUtil) + j_l_String.m_valueOf__java_lang_Object(in_1);
  }
  return in_1;
 }
 
 static $clinit() {
  ColorUtil.$clinit = () =>{};
  ColorUtil.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorUtil;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {?string}*/
ColorUtil.f_HEX_STARTING_CHAR__org_pepstock_charba_client_colors_ColorUtil = "#";
/**@const {?string}*/
ColorUtil.f_RGB_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil = "rgb";
/**@const {?string}*/
ColorUtil.f_RGBA_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil = "rgba";
/**@const {?string}*/
ColorUtil.f_HSL_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil = "hsl";
/**@const {?string}*/
ColorUtil.f_HSLA_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil = "hsla";
/**@const {number}*/
ColorUtil.f_FACTOR__org_pepstock_charba_client_colors_ColorUtil = 0.7;
/**@const {?string}*/
ColorUtil.f_PADDING_ZERO__org_pepstock_charba_client_colors_ColorUtil = "0";
/**@const {?string}*/
ColorUtil.f_PADDING_DOUBLE_ZERO__org_pepstock_charba_client_colors_ColorUtil = "00";
$Util.$setClassMetadata(ColorUtil, "org.pepstock.charba.client.colors.ColorUtil");

exports = ColorUtil;

//# sourceMappingURL=ColorUtil.js.map
