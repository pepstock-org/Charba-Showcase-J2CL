goog.module('org.pepstock.charba.client.colors.ColorBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Color = goog.forwardDeclare('org.pepstock.charba.client.colors.Color$impl');
let ColorUtil = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorUtil$impl');
let GwtMaterialColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GwtMaterialColor$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.RegExpResult.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ColorBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ColorBuilder} */
 static $create__() {
  let $instance = new ColorBuilder();
  $instance.$ctor__org_pepstock_charba_client_colors_ColorBuilder__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_ColorBuilder__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {List<IsColor>} */
 static m_parse__java_util_List(/** List<?string> */ colorsAsString) {
  ColorBuilder.$clinit();
  let colors = /**@type {!LinkedList<IsColor>}*/ (LinkedList.$create__());
  if (!$Equality.$same(colorsAsString, null)) {
   for (let $iterator = colorsAsString.m_iterator__(); $iterator.m_hasNext__(); ) {
    let colorAsString = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
    {
     colors.add(ColorBuilder.m_parse__java_lang_String(colorAsString));
    }
   }
  }
  return colors;
 }
 /** @return {IsColor} */
 static m_build__int__int__int(/** number */ r, /** number */ g, /** number */ b) {
  ColorBuilder.$clinit();
  for (let $array = HtmlColor.m_values__(), $index = 0; $index < $array.length; $index++) {
   let color = $array[$index];
   {
    if (color.m_getRed__() == r && color.m_getGreen__() == g && color.m_getBlue__() == b) {
     return color;
    }
   }
  }
  for (let $array_1 = GwtMaterialColor.m_values__(), $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
   let color_1 = $array_1[$index_1];
   {
    if (color_1.m_getRed__() == r && color_1.m_getGreen__() == g && color_1.m_getBlue__() == b) {
     return color_1;
    }
   }
  }
  return Color.$create__int__int__int(r, g, b);
 }
 /** @return {IsColor} */
 static m_parse__java_lang_String(/** ?string */ value) {
  ColorBuilder.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(value, "Color argument");
  let newValue = j_l_String.m_trim__java_lang_String(value);
  if (j_l_String.m_startsWith__java_lang_String__java_lang_String(newValue, ColorUtil.f_HEX_STARTING_CHAR__org_pepstock_charba_client_colors_ColorUtil)) {
   return ColorBuilder.m_buildByHexValue__java_lang_String(newValue);
  } else if (j_l_String.m_startsWith__java_lang_String__java_lang_String(value, ColorUtil.f_RGBA_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil)) {
   return ColorBuilder.m_buildByRGBAValue__java_lang_String(newValue);
  } else if (j_l_String.m_startsWith__java_lang_String__java_lang_String(value, ColorUtil.f_RGB_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil)) {
   return ColorBuilder.m_buildByRGBValue__java_lang_String(newValue);
  } else if (j_l_String.m_startsWith__java_lang_String__java_lang_String(value, ColorUtil.f_HSLA_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil)) {
   return ColorBuilder.m_buildByHSLAValue__java_lang_String(newValue);
  } else if (j_l_String.m_startsWith__java_lang_String__java_lang_String(value, ColorUtil.f_HSL_STARTING_CHARS__org_pepstock_charba_client_colors_ColorUtil)) {
   return ColorBuilder.m_buildByHSLValue__java_lang_String(newValue);
  } else {
   for (let $array = HtmlColor.m_values__(), $index = 0; $index < $array.length; $index++) {
    let color = $array[$index];
    {
     if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(color.name(), newValue)) {
      return color;
     }
    }
   }
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Invalid format for a color: " + j_l_String.m_valueOf__java_lang_Object(value)));
  }
 }
 /** @return {IsColor} */
 static m_build__int__int__int__double(/** number */ r, /** number */ g, /** number */ b, /** number */ alpha) {
  for (let $array = HtmlColor.m_values__(), $index = 0; $index < $array.length; $index++) {
   let color = $array[$index];
   {
    if (color.m_getRed__() == r && color.m_getGreen__() == g && color.m_getBlue__() == b) {
     return color.m_alpha__double(alpha);
    }
   }
  }
  for (let $array_1 = GwtMaterialColor.m_values__(), $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
   let color_1 = $array_1[$index_1];
   {
    if (color_1.m_getRed__() == r && color_1.m_getGreen__() == g && color_1.m_getBlue__() == b) {
     return color_1.m_alpha__double(alpha);
    }
   }
  }
  return Color.$create__int__int__int__double(r, g, b, alpha);
 }
 /** @return {IsColor} */
 static m_buildByHexValue__java_lang_String(/** ?string */ hexvalue) {
  ColorBuilder.$clinit();
  return ColorBuilder.m_buildByHexValue__java_lang_String__boolean(hexvalue, true);
 }
 /** @return {IsColor} */
 static m_buildByHexValue__java_lang_String__boolean(/** ?string */ hexvalue, /** boolean */ searchOnEnum) {
  ColorBuilder.$clinit();
  let newHexvalue = j_l_String.m_substring__java_lang_String__int(hexvalue, 1);
  if (j_l_String.m_length__java_lang_String(newHexvalue) == 3) {
   let redValue = j_l_String.m_valueOf__java_lang_Object(j_l_String.m_substring__java_lang_String__int__int(newHexvalue, 0, 1)) + j_l_String.m_valueOf__java_lang_Object(j_l_String.m_substring__java_lang_String__int__int(newHexvalue, 0, 1));
   let red = Integer.m_parseInt__java_lang_String__int(redValue, 16);
   let greenValue = j_l_String.m_valueOf__java_lang_Object(j_l_String.m_substring__java_lang_String__int__int(newHexvalue, 1, 2)) + j_l_String.m_valueOf__java_lang_Object(j_l_String.m_substring__java_lang_String__int__int(newHexvalue, 1, 2));
   let green = Integer.m_parseInt__java_lang_String__int(greenValue, 16);
   let blueValue = j_l_String.m_valueOf__java_lang_Object(j_l_String.m_substring__java_lang_String__int(newHexvalue, 2)) + j_l_String.m_valueOf__java_lang_Object(j_l_String.m_substring__java_lang_String__int(newHexvalue, 2));
   let blue = Integer.m_parseInt__java_lang_String__int(blueValue, 16);
   return ColorBuilder.m_build__int__int__int(red, green, blue);
  } else if (j_l_String.m_length__java_lang_String(newHexvalue) == 6) {
   let redValue_1 = j_l_String.m_substring__java_lang_String__int__int(newHexvalue, 0, 2);
   let red_1 = Integer.m_parseInt__java_lang_String__int(redValue_1, 16);
   let greenValue_1 = j_l_String.m_substring__java_lang_String__int__int(newHexvalue, 2, 4);
   let green_1 = Integer.m_parseInt__java_lang_String__int(greenValue_1, 16);
   let blueValue_1 = j_l_String.m_substring__java_lang_String__int(newHexvalue, 4);
   let blue_1 = Integer.m_parseInt__java_lang_String__int(blueValue_1, 16);
   return searchOnEnum ? ColorBuilder.m_build__int__int__int(red_1, green_1, blue_1) : Color.$create__int__int__int__double(red_1, green_1, blue_1, Color.f_DEFAULT_ALPHA__org_pepstock_charba_client_colors_Color);
  } else {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Color length in HEX format is not valid. Must have a length of 3 or 6 charactes"));
  }
 }
 /** @return {IsColor} */
 static m_buildByRGBValue__java_lang_String(/** ?string */ rgbvalue) {
  let matcher = ColorBuilder.f_REGEXP_RGB__org_pepstock_charba_client_colors_ColorBuilder_.exec(rgbvalue);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(matcher, "Invalid RGB format for color: " + j_l_String.m_valueOf__java_lang_Object(rgbvalue));
  Checker.m_checkIfEqualTo__int__int__java_lang_String(matcher.length, 4, "Invalid RGB format for color: " + j_l_String.m_valueOf__java_lang_Object(rgbvalue));
  let red = 0;
  let green = 0;
  let blue = 0;
  for (let i = 1; i < matcher.length; i = i + 1 | 0) {
   let groupStr = $Overlay.m_get__$devirt__org_pepstock_charba_client_utils_RegExpResult__int(matcher, i);
   switch (i) {
    case 1: 
     red = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    case 2: 
     green = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    case 3: 
     blue = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    default: 
     break;
   }
  }
  return ColorBuilder.m_build__int__int__int(red, green, blue);
 }
 /** @return {IsColor} */
 static m_buildByRGBAValue__java_lang_String(/** ?string */ rgbavalue) {
  let matcher = ColorBuilder.f_REGEXP_RGBA__org_pepstock_charba_client_colors_ColorBuilder_.exec(rgbavalue);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(matcher, "Invalid RGBA format for color: " + j_l_String.m_valueOf__java_lang_Object(rgbavalue));
  Checker.m_checkIfEqualTo__int__int__java_lang_String(matcher.length, 5, "Invalid RGBA format for color: " + j_l_String.m_valueOf__java_lang_Object(rgbavalue));
  let red = 0;
  let green = 0;
  let blue = 0;
  let alpha = Color.f_DEFAULT_ALPHA__org_pepstock_charba_client_colors_Color;
  for (let i = 1; i < matcher.length; i = i + 1 | 0) {
   let groupStr = $Overlay.m_get__$devirt__org_pepstock_charba_client_utils_RegExpResult__int(matcher, i);
   switch (i) {
    case 1: 
     red = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    case 2: 
     green = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    case 3: 
     blue = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    case 4: 
     alpha = Double.m_parseDouble__java_lang_String(groupStr);
     break;
    default: 
     break;
   }
  }
  return ColorBuilder.m_build__int__int__int__double(red, green, blue, alpha);
 }
 /** @return {IsColor} */
 static m_buildByHSLValue__java_lang_String(/** ?string */ hslvalue) {
  let matcher = ColorBuilder.f_REGEXP_HSL__org_pepstock_charba_client_colors_ColorBuilder_.exec(hslvalue);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(matcher, "Invalid HSL format for color: " + j_l_String.m_valueOf__java_lang_Object(hslvalue));
  Checker.m_checkIfEqualTo__int__int__java_lang_String(matcher.length, 4, "Invalid HSL format for color: " + j_l_String.m_valueOf__java_lang_Object(hslvalue));
  let hue = 0;
  let saturation = 0;
  let lightness = 0;
  for (let i = 1; i < matcher.length; i = i + 1 | 0) {
   let groupStr = $Overlay.m_get__$devirt__org_pepstock_charba_client_utils_RegExpResult__int(matcher, i);
   switch (i) {
    case 1: 
     hue = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    case 2: 
     saturation = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    case 3: 
     lightness = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    default: 
     break;
   }
  }
  return ColorBuilder.m_convertHSL2RGB__int__int__int__double(hue, saturation, lightness, Double.f_NaN__java_lang_Double);
 }
 /** @return {IsColor} */
 static m_buildByHSLAValue__java_lang_String(/** ?string */ hslavalue) {
  let matcher = ColorBuilder.f_REGEXP_HSLA__org_pepstock_charba_client_colors_ColorBuilder_.exec(hslavalue);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(matcher, "Invalid HSLA format for color: " + j_l_String.m_valueOf__java_lang_Object(hslavalue));
  Checker.m_checkIfEqualTo__int__int__java_lang_String(matcher.length, 5, "HSLA HSL format for color: " + j_l_String.m_valueOf__java_lang_Object(hslavalue));
  let hue = 0;
  let saturation = 0;
  let lightness = 0;
  let alpha = Color.f_DEFAULT_ALPHA__org_pepstock_charba_client_colors_Color;
  for (let i = 1; i < matcher.length; i = i + 1 | 0) {
   let groupStr = $Overlay.m_get__$devirt__org_pepstock_charba_client_utils_RegExpResult__int(matcher, i);
   switch (i) {
    case 1: 
     hue = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    case 2: 
     saturation = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    case 3: 
     lightness = Integer.m_parseInt__java_lang_String(groupStr);
     break;
    case 4: 
     alpha = Double.m_parseDouble__java_lang_String(groupStr);
     break;
    default: 
     break;
   }
  }
  return ColorBuilder.m_convertHSL2RGB__int__int__int__double(hue, saturation, lightness, alpha);
 }
 /** @return {IsColor} */
 static m_convertHSL2RGB__int__int__int__double(/** number */ hue, /** number */ saturation, /** number */ lightness, /** number */ alpha) {
  Checker.m_checkIfBetween__int__int__int__java_lang_String(hue, 0, 260, "Hue argument");
  Checker.m_checkIfBetween__int__int__int__java_lang_String(saturation, 0, 100, "Saturation argument");
  Checker.m_checkIfBetween__int__int__int__java_lang_String(lightness, 0, 100, "Lightness argument");
  let transientHue = hue % 360;
  transientHue /= 360;
  let transientSaturation = saturation / 100;
  let transientLightness = lightness / 100;
  let /** number */ temporary1;
  if (transientLightness < 0.5) {
   temporary1 = transientLightness * (1 + transientSaturation);
  } else {
   temporary1 = transientLightness + transientSaturation - transientSaturation * transientLightness;
  }
  let temporary2 = 2 * transientLightness - temporary1;
  let temporaryRed = Math.max(0, ColorBuilder.m_hueToRGB__double__double__double(temporary2, temporary1, transientHue + 1 / 3));
  let temporaryGreen = Math.max(0, ColorBuilder.m_hueToRGB__double__double__double(temporary2, temporary1, transientHue));
  let temporaryBlue = Math.max(0, ColorBuilder.m_hueToRGB__double__double__double(temporary2, temporary1, transientHue - 1 / 3));
  let red = $Primitives.$narrowLongToInt(j_l_Math.m_round__double(Math.min(temporaryRed, 1) * 255));
  let green = $Primitives.$narrowLongToInt(j_l_Math.m_round__double(Math.min(temporaryGreen, 1) * 255));
  let blue = $Primitives.$narrowLongToInt(j_l_Math.m_round__double(Math.min(temporaryBlue, 1) * 255));
  return Checker.m_isBetween__double__double__double(alpha, 0, 1) ? ColorBuilder.m_build__int__int__int__double(red, green, blue, alpha) : ColorBuilder.m_build__int__int__int(red, green, blue);
 }
 /** @return {number} */
 static m_hueToRGB__double__double__double(/** number */ temporary2, /** number */ temporary1, /** number */ temporaryChannelValue) {
  if (temporaryChannelValue < 0) {
   temporaryChannelValue += 1;
  }
  if (temporaryChannelValue > 1) {
   temporaryChannelValue -= 1;
  }
  if (6 * temporaryChannelValue < 1) {
   return temporary2 + (temporary1 - temporary2) * 6 * temporaryChannelValue;
  }
  if (2 * temporaryChannelValue < 1) {
   return temporary1;
  }
  if (3 * temporaryChannelValue < 2) {
   return temporary2 + (temporary1 - temporary2) * 6 * (2 / 3 - temporaryChannelValue);
  }
  return temporary2;
 }
 
 static $clinit() {
  ColorBuilder.$clinit = () =>{};
  ColorBuilder.$loadModules();
  j_l_Object.$clinit();
  ColorBuilder.f_REGEXP_RGB__org_pepstock_charba_client_colors_ColorBuilder_ = new RegExp(ColorBuilder.f_REGEXP_RGB_PATTERN__org_pepstock_charba_client_colors_ColorBuilder_);
  ColorBuilder.f_REGEXP_RGBA__org_pepstock_charba_client_colors_ColorBuilder_ = new RegExp(ColorBuilder.f_REGEXP_RGBA_PATTERN__org_pepstock_charba_client_colors_ColorBuilder_);
  ColorBuilder.f_REGEXP_HSL__org_pepstock_charba_client_colors_ColorBuilder_ = new RegExp(ColorBuilder.f_REGEXP_HSL_PATTERN__org_pepstock_charba_client_colors_ColorBuilder_);
  ColorBuilder.f_REGEXP_HSLA__org_pepstock_charba_client_colors_ColorBuilder_ = new RegExp(ColorBuilder.f_REGEXP_HSLA_PATTERN__org_pepstock_charba_client_colors_ColorBuilder_);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorBuilder;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Color = goog.module.get('org.pepstock.charba.client.colors.Color$impl');
  ColorUtil = goog.module.get('org.pepstock.charba.client.colors.ColorUtil$impl');
  GwtMaterialColor = goog.module.get('org.pepstock.charba.client.colors.GwtMaterialColor$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.utils.RegExpResult.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {?string}*/
ColorBuilder.f_REGEXP_RGB_PATTERN__org_pepstock_charba_client_colors_ColorBuilder_ = "rgb\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*\\)";
/**@const {?string}*/
ColorBuilder.f_REGEXP_RGBA_PATTERN__org_pepstock_charba_client_colors_ColorBuilder_ = "rgba\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d*\\.?\\d*)\\s*\\)";
/**@const {?string}*/
ColorBuilder.f_REGEXP_HSL_PATTERN__org_pepstock_charba_client_colors_ColorBuilder_ = "hsl\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})%\\s*,\\s*(\\d{1,3})%\\s*\\)";
/**@const {?string}*/
ColorBuilder.f_REGEXP_HSLA_PATTERN__org_pepstock_charba_client_colors_ColorBuilder_ = "hsla\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})%\\s*,\\s*(\\d{1,3})%\\s*,\\s*(\\d*\\.?\\d*)\\s*\\)";
/**@type {RegExp}*/
ColorBuilder.f_REGEXP_RGB__org_pepstock_charba_client_colors_ColorBuilder_;
/**@type {RegExp}*/
ColorBuilder.f_REGEXP_RGBA__org_pepstock_charba_client_colors_ColorBuilder_;
/**@type {RegExp}*/
ColorBuilder.f_REGEXP_HSL__org_pepstock_charba_client_colors_ColorBuilder_;
/**@type {RegExp}*/
ColorBuilder.f_REGEXP_HSLA__org_pepstock_charba_client_colors_ColorBuilder_;
$Util.$setClassMetadata(ColorBuilder, "org.pepstock.charba.client.colors.ColorBuilder");

exports = ColorBuilder;

//# sourceMappingURL=ColorBuilder.js.map
