goog.module('org.pepstock.charba.client.utils.Utilities$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let BigDecimal = goog.forwardDeclare('java.math.BigDecimal$impl');
let RoundingMode = goog.forwardDeclare('java.math.RoundingMode$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientColor$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let BaseStyleProperties_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let Repetition = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Repetition$impl');
let Unit = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Unit$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let BorderRadiusItem = goog.forwardDeclare('org.pepstock.charba.client.items.BorderRadiusItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class Utilities extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Utilities} */
 static $create__() {
  let $instance = new Utilities();
  $instance.$ctor__org_pepstock_charba_client_utils_Utilities__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_utils_Utilities__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 static m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ font) {
  Utilities.$clinit();
  if (!$Equality.$same(font, null)) {
   if ($Equality.$same(font.m_getLineHeightAsString__(), null)) {
    return Utilities.m_toCSSFontProperty__org_pepstock_charba_client_enums_FontStyle__org_pepstock_charba_client_enums_Weight__int__double__java_lang_String(font.m_getStyle__(), font.m_getWeight__(), font.m_getSize__(), font.m_getLineHeight__(), font.m_getFamily__());
   }
   return Utilities.m_toCSSFontProperty__org_pepstock_charba_client_enums_FontStyle__org_pepstock_charba_client_enums_Weight__int__java_lang_String__java_lang_String(font.m_getStyle__(), font.m_getWeight__(), font.m_getSize__(), font.m_getLineHeightAsString__(), font.m_getFamily__());
  }
  let globalFont = Defaults.m_get__().m_getGlobal__().m_getFont__();
  return Utilities.m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(globalFont);
 }
 /** @return {?string} */
 static m_toCSSFontProperty__org_pepstock_charba_client_enums_FontStyle__org_pepstock_charba_client_enums_Weight__int__double__java_lang_String(/** FontStyle */ style, /** Weight */ weight, /** number */ size, /** number */ lineHeight, /** ?string */ family) {
  Utilities.$clinit();
  let lineHeightAsString = null;
  if (Undefined.m_isNot__double(lineHeight)) {
   lineHeightAsString = Utilities.m_applyPrecision__double__int(lineHeight, 1);
  }
  return Utilities.m_toCSSFontProperty__org_pepstock_charba_client_enums_FontStyle__org_pepstock_charba_client_enums_Weight__int__java_lang_String__java_lang_String(style, weight, size, lineHeightAsString, family);
 }
 /** @return {?string} */
 static m_toCSSFontProperty__org_pepstock_charba_client_enums_FontStyle__org_pepstock_charba_client_enums_Weight__int__java_lang_String__java_lang_String(/** FontStyle */ style, /** Weight */ weight, /** number */ size, /** ?string */ lineHeight, /** ?string */ family) {
  Utilities.$clinit();
  let result = Utilities.f_FONT_TEMPLATE__org_pepstock_charba_client_utils_Utilities_;
  let fontSize = Math.max(size, Utilities.f_MINIMUM_FONT_SIZE__org_pepstock_charba_client_utils_Utilities_);
  let fontStyle = $Equality.$same(style, null) ? Defaults.m_get__().m_getGlobal__().m_getFont__().m_getStyle__() : style;
  let fontWeight = $Equality.$same(weight, null) ? Defaults.m_get__().m_getGlobal__().m_getFont__().m_getWeight__() : weight;
  let fontFamily = $Equality.$same(family, null) ? Defaults.m_get__().m_getGlobal__().m_getFont__().m_getFamily__() : family;
  let fontLineHeight = $Equality.$same(lineHeight, null) || j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(lineHeight)) == 0 ? Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants : j_l_String.m_valueOf__java_lang_Object(Constants.f_SLASH__org_pepstock_charba_client_commons_Constants) + j_l_String.m_valueOf__java_lang_Object(lineHeight);
  return j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(result, Utilities.f_REGEXP_FONT_STYLE_PATTERN__org_pepstock_charba_client_utils_Utilities_, fontStyle.m_value__()), Utilities.f_REGEXP_FONT_WEIGHT_PATTERN__org_pepstock_charba_client_utils_Utilities_, fontWeight.m_value__()), Utilities.f_REGEXP_FONT_SIZE_PATTERN__org_pepstock_charba_client_utils_Utilities_, j_l_String.m_valueOf__int(fontSize)), Utilities.f_REGEXP_FONT_LINE_HEIGHT_PATTERN__org_pepstock_charba_client_utils_Utilities_, j_l_String.m_valueOf__java_lang_Object(fontLineHeight)), Utilities.f_REGEXP_FONT_FAMILY_PATTERN__org_pepstock_charba_client_utils_Utilities_, fontFamily);
 }
 /** @return {?string} */
 static m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Pattern(/** Pattern */ pattern) {
  Utilities.$clinit();
  return Utilities.m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Pattern__int(pattern, Integer.f_MIN_VALUE__java_lang_Integer);
 }
 /** @return {?string} */
 static m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Pattern__int(/** Pattern */ pattern, /** number */ squareSize) {
  Utilities.$clinit();
  return Utilities.m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Pattern__int__int(pattern, squareSize, squareSize);
 }
 /** @return {?string} */
 static m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Pattern__int__int(/** Pattern */ pattern, /** number */ width, /** number */ height) {
  Utilities.$clinit();
  if (!$Equality.$same(pattern, null)) {
   let image = pattern.m_getImage__();
   let canvasPattern = pattern.m_getCanvasPattern__();
   if (!$Equality.$same(image, null)) {
    return Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(Utilities.f_PATTERN_TEMPLATE__org_pepstock_charba_client_utils_Utilities_, [pattern.m_getImage__().src, pattern.m_getRepetition__().m_value__()]);
   } else if (!$Equality.$same(canvasPattern, null)) {
    let widthToUse = Math.max(width, pattern.m_getWidth__());
    let heightToUse = Math.max(height, pattern.m_getHeight__());
    return Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(Utilities.f_PATTERN_TEMPLATE__org_pepstock_charba_client_utils_Utilities_, [Utilities.m_getImageURLFromCanvasPattern__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(canvasPattern, widthToUse, heightToUse), Repetition.f_REPEAT__org_pepstock_charba_client_dom_enums_Repetition.m_value__()]);
   }
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {?string} */
 static m_toCSSBackgroundProperty__java_lang_String(/** ?string */ dataUrl) {
  Utilities.$clinit();
  return Utilities.m_toCSSBackgroundProperty__java_lang_String__org_pepstock_charba_client_dom_enums_Repetition(dataUrl, Repetition.f_REPEAT__org_pepstock_charba_client_dom_enums_Repetition);
 }
 /** @return {?string} */
 static m_toCSSBackgroundProperty__java_lang_String__org_pepstock_charba_client_dom_enums_Repetition(/** ?string */ dataUrl, /** Repetition */ repetition) {
  Utilities.$clinit();
  if (!$Equality.$same(dataUrl, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(dataUrl)) > 0) {
   let repetitionToApply = Key.m_isValid__org_pepstock_charba_client_commons_Key(repetition) ? repetition.m_value__() : Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
   return Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(Utilities.f_PATTERN_TEMPLATE__org_pepstock_charba_client_utils_Utilities_, [dataUrl, repetitionToApply]);
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {?string} */
 static m_toCSSBackgroundProperty__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ image) {
  Utilities.$clinit();
  if (!$Equality.$same(image, null)) {
   return Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(Utilities.f_PATTERN_TEMPLATE__org_pepstock_charba_client_utils_Utilities_, [image.src, Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants]);
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {?string} */
 static m_toCSSBorderRadiusProperty__org_pepstock_charba_client_items_BorderRadiusItem(/** BorderRadiusItem */ borderRadius) {
  Utilities.$clinit();
  if (!$Equality.$same(borderRadius, null)) {
   let result = StringBuilder.$create__();
   result.m_append__java_lang_String(Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(borderRadius.m_getTopLeft__())).m_append__java_lang_String(Constants.f_BLANK__org_pepstock_charba_client_commons_Constants);
   result.m_append__java_lang_String(Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(borderRadius.m_getTopRight__())).m_append__java_lang_String(Constants.f_BLANK__org_pepstock_charba_client_commons_Constants);
   result.m_append__java_lang_String(Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(borderRadius.m_getBottomRight__())).m_append__java_lang_String(Constants.f_BLANK__org_pepstock_charba_client_commons_Constants);
   result.m_append__java_lang_String(Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(borderRadius.m_getBottomLeft__()));
   return result.toString();
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {?string} */
 static m_getImageURLFromCanvasPattern__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(/** CanvasPattern */ pattern, /** number */ width, /** number */ height) {
  Utilities.$clinit();
  if ($Equality.$same(pattern, null) || $Equality.$same(Utilities.f_WORKING_CANVAS__org_pepstock_charba_client_utils_Utilities_, null)) {
   return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
  }
  Utilities.f_WORKING_CANVAS__org_pepstock_charba_client_utils_Utilities_.width = width;
  Utilities.f_WORKING_CANVAS__org_pepstock_charba_client_utils_Utilities_.height = height;
  let context = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(Utilities.f_WORKING_CANVAS__org_pepstock_charba_client_utils_Utilities_);
  context.save();
  context.clearRect(0, 0, Utilities.f_WORKING_CANVAS__org_pepstock_charba_client_utils_Utilities_.width, Utilities.f_WORKING_CANVAS__org_pepstock_charba_client_utils_Utilities_.height);
  Context2dItem_$Overlay.m_setFillPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_CanvasPatternItem(context, pattern);
  context.beginPath();
  context.fillRect(0, 0, width, height);
  context.closePath();
  let dataUrl = Canvas_$Overlay.m_toDataURL__$devirt__org_pepstock_charba_client_dom_elements_Canvas(Utilities.f_WORKING_CANVAS__org_pepstock_charba_client_utils_Utilities_);
  context.restore();
  return dataUrl;
 }
 /** @return {?string} */
 static m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Gradient(/** Gradient */ gradient) {
  Utilities.$clinit();
  if (!$Equality.$same(gradient, null)) {
   let type = gradient.m_getType__();
   let orientation = gradient.m_getOrientation__();
   let sortableColors = /**@type {!LinkedList<GradientColor>}*/ (LinkedList.$create__());
   sortableColors.addAll(gradient.m_getColors__());
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientType.f_RADIAL__org_pepstock_charba_client_colors_GradientType, gradient.m_getType__()) && $Objects.m_equals__java_lang_Object__java_lang_Object(GradientOrientation.f_OUT_IN__org_pepstock_charba_client_colors_GradientOrientation, orientation)) {
    Collections.m_sort__java_util_List__java_util_Comparator(sortableColors, Utilities.f_REVERSE_COMPARATOR__org_pepstock_charba_client_utils_Utilities_);
   } else {
    Collections.m_sort__java_util_List__java_util_Comparator(sortableColors, Utilities.f_COMPARATOR__org_pepstock_charba_client_utils_Utilities_);
   }
   let builder = StringBuilder.$create__();
   for (let $iterator = sortableColors.m_iterator__(); $iterator.m_hasNext__(); ) {
    let color = /**@type {GradientColor}*/ ($Casts.$to($iterator.m_next__(), GradientColor));
    {
     if (builder.m_length__() > 0) {
      builder.m_append__java_lang_String(Constants.f_COMMA__org_pepstock_charba_client_commons_Constants);
     }
     builder.m_append__java_lang_String(color.m_getColor__().m_toRGBA__());
     let percentage = $Primitives.$narrowLongToInt(j_l_Math.m_round__double(color.m_getOffset__() * 100));
     builder.m_append__java_lang_String(Constants.f_BLANK__org_pepstock_charba_client_commons_Constants).m_append__int(percentage).m_append__java_lang_String(Constants.f_PERCENT__org_pepstock_charba_client_commons_Constants);
    }
   }
   return Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(Utilities.f_GRADIENT_TEMPLATE__org_pepstock_charba_client_utils_Utilities_, [type.m_getCssStatement__(), orientation.m_getCssStatement__(), builder]);
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {HTMLImageElement} */
 static m_toImageElement__java_lang_String(/** ?string */ url) {
  Utilities.$clinit();
  return Utilities.m_toImageElement__java_lang_String__int__int(url, Integer.f_MIN_VALUE__java_lang_Integer, Integer.f_MIN_VALUE__java_lang_Integer);
 }
 /** @return {HTMLImageElement} */
 static m_toImageElement__java_lang_String__int__int(/** ?string */ url, /** number */ width, /** number */ height) {
  Utilities.$clinit();
  if (!$Equality.$same(url, null)) {
   let image = DOMBuilder.m_get__().m_createImageElement__();
   image.src = url;
   if (width > 0 && height > 0) {
    image.width = width;
    image.height = height;
   }
   return image;
  }
  return null;
 }
 /** @return {CursorType} */
 static m_getCursorOfChart__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  Utilities.$clinit();
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   return BaseStyleProperties_$Overlay.m_getCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties(chart.m_getChartElement__().style);
  }
  return CursorType.f_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType;
 }
 /** @return {?string} */
 static m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(/** ?string */ template, /** Array<*> */ values) {
  Utilities.$clinit();
  let result = template;
  if (!$Equality.$same(template, null) && j_l_String.m_length__java_lang_String(template) > 0 && !$Equality.$same(values, null) && values.length > 0) {
   for (let i = 0; i < values.length; i = i + 1 | 0) {
    let replacement = Constants.f_NULL_STRING__org_pepstock_charba_client_commons_Constants;
    if (!$Equality.$same(values[i], null)) {
     replacement = $Objects.m_toString__java_lang_Object(values[i]);
    }
    result = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(result, "\\{" + i + "\\}", replacement);
   }
  }
  if ($Equality.$same(result, null)) {
   return Constants.f_NULL_STRING__org_pepstock_charba_client_commons_Constants;
  }
  return result;
 }
 /** @return {?string} */
 static m_applyPrecision__double__int(/** number */ value, /** number */ precision) {
  Utilities.$clinit();
  if (Undefined.m_isNot__double(value)) {
   let checkedPrecision = Math.max(precision, 0);
   let decimalValue = BigDecimal.m_valueOf__double(value);
   return decimalValue.m_setScale__int__java_math_RoundingMode(checkedPrecision, RoundingMode.f_DOWN__java_math_RoundingMode).m_toPlainString__();
  }
  return Constants.f_NULL_STRING__org_pepstock_charba_client_commons_Constants;
 }
 
 static $clinit() {
  Utilities.$clinit = () =>{};
  Utilities.$loadModules();
  j_l_Object.$clinit();
  Utilities.f_WORKING_CANVAS__org_pepstock_charba_client_utils_Utilities_ = DOMBuilder.m_get__().m_isCanvasSupported__() ? DOMBuilder.m_get__().m_createCanvasElement__() : null;
  Utilities.f_COMPARATOR__org_pepstock_charba_client_utils_Utilities_ = Comparator.$adapt((o1, o2) =>{
   let o1_1 = /**@type {GradientColor}*/ ($Casts.$to(o1, GradientColor));
   let o2_1 = /**@type {GradientColor}*/ ($Casts.$to(o2, GradientColor));
   return Double.m_compare__double__double(o1_1.m_getOffset__(), o2_1.m_getOffset__());
  });
  Utilities.f_REVERSE_COMPARATOR__org_pepstock_charba_client_utils_Utilities_ = Comparator.$adapt((o1_2, o2_2) =>{
   let o1_3 = /**@type {GradientColor}*/ ($Casts.$to(o1_2, GradientColor));
   let o2_3 = /**@type {GradientColor}*/ ($Casts.$to(o2_2, GradientColor));
   return Double.m_compare__double__double(o2_3.m_getOffset__(), o1_3.m_getOffset__());
  });
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Utilities;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  BigDecimal = goog.module.get('java.math.BigDecimal$impl');
  RoundingMode = goog.module.get('java.math.RoundingMode$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  GradientColor = goog.module.get('org.pepstock.charba.client.colors.GradientColor$impl');
  GradientOrientation = goog.module.get('org.pepstock.charba.client.colors.GradientOrientation$impl');
  GradientType = goog.module.get('org.pepstock.charba.client.colors.GradientType$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  BaseStyleProperties_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  CursorType = goog.module.get('org.pepstock.charba.client.dom.enums.CursorType$impl');
  Repetition = goog.module.get('org.pepstock.charba.client.dom.enums.Repetition$impl');
  Unit = goog.module.get('org.pepstock.charba.client.dom.enums.Unit$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {?string}*/
Utilities.f_GRADIENT_TEMPLATE__org_pepstock_charba_client_utils_Utilities_ = "{0}({1},{2})";
/**@const {?string}*/
Utilities.f_PATTERN_TEMPLATE__org_pepstock_charba_client_utils_Utilities_ = "url({0}) {1}";
/**@const {number}*/
Utilities.f_MINIMUM_FONT_SIZE__org_pepstock_charba_client_utils_Utilities_ = 4;
/**@const {?string}*/
Utilities.f_FONT_TEMPLATE__org_pepstock_charba_client_utils_Utilities_ = "{0} normal {1} {2}px{3} {4}";
/**@const {?string}*/
Utilities.f_REGEXP_FONT_STYLE_PATTERN__org_pepstock_charba_client_utils_Utilities_ = "{0}";
/**@const {?string}*/
Utilities.f_REGEXP_FONT_WEIGHT_PATTERN__org_pepstock_charba_client_utils_Utilities_ = "{1}";
/**@const {?string}*/
Utilities.f_REGEXP_FONT_SIZE_PATTERN__org_pepstock_charba_client_utils_Utilities_ = "{2}";
/**@const {?string}*/
Utilities.f_REGEXP_FONT_LINE_HEIGHT_PATTERN__org_pepstock_charba_client_utils_Utilities_ = "{3}";
/**@const {?string}*/
Utilities.f_REGEXP_FONT_FAMILY_PATTERN__org_pepstock_charba_client_utils_Utilities_ = "{4}";
/**@type {HTMLCanvasElement}*/
Utilities.f_WORKING_CANVAS__org_pepstock_charba_client_utils_Utilities_;
/**@type {Comparator<GradientColor>}*/
Utilities.f_COMPARATOR__org_pepstock_charba_client_utils_Utilities_;
/**@type {Comparator<GradientColor>}*/
Utilities.f_REVERSE_COMPARATOR__org_pepstock_charba_client_utils_Utilities_;
$Util.$setClassMetadata(Utilities, "org.pepstock.charba.client.utils.Utilities");

exports = Utilities;

//# sourceMappingURL=Utilities.js.map
