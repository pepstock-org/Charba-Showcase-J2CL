goog.module('org.pepstock.charba.client.colors.CanvasObjectFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Area = goog.forwardDeclare('org.pepstock.charba.client.colors.Area$impl');
let Center = goog.forwardDeclare('org.pepstock.charba.client.colors.Center$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientColor$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let Radius = goog.forwardDeclare('org.pepstock.charba.client.colors.Radius$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay$impl');
let CanvasPatternItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 */
class CanvasObjectFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, Map<?string, CanvasGradient>>}*/
  this.f_gradientsCache__org_pepstock_charba_client_colors_CanvasObjectFactory_;
  /**@type {Map<?string, Map<?string, CanvasPattern>>}*/
  this.f_patternCache__org_pepstock_charba_client_colors_CanvasObjectFactory_;
  /**@type {Key}*/
  this.f_scope__org_pepstock_charba_client_colors_CanvasObjectFactory_;
 }
 
 $ctor__org_pepstock_charba_client_colors_CanvasObjectFactory__org_pepstock_charba_client_commons_Key(/** Key */ scope) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_colors_CanvasObjectFactory();
  this.f_scope__org_pepstock_charba_client_colors_CanvasObjectFactory_ = Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(scope);
 }
 /** @return {Key} */
 m_getScope__() {
  return this.f_scope__org_pepstock_charba_client_colors_CanvasObjectFactory_;
 }
 /** @return {CanvasPattern} */
 m_createPattern__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Pattern(/** IsChart */ chart, /** Pattern */ pattern) {
  IsChart.m_checkIfValid__org_pepstock_charba_client_IsChart(chart);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(pattern, "Pattern argument");
  let /** Map<?string, CanvasPattern> */ patternsMap;
  if (this.f_patternCache__org_pepstock_charba_client_colors_CanvasObjectFactory_.containsKey(chart.m_getId__())) {
   patternsMap = /**@type {Map<?string, CanvasPattern>}*/ ($Casts.$to(this.f_patternCache__org_pepstock_charba_client_colors_CanvasObjectFactory_.get(chart.m_getId__()), Map));
   if (patternsMap.containsKey(pattern.m_getId__())) {
    return /**@type {CanvasPattern}*/ ($Casts.$to(patternsMap.get(pattern.m_getId__()), CanvasPatternItem_$Overlay));
   }
  } else {
   patternsMap = /**@type {!HashMap<?string, CanvasPattern>}*/ (HashMap.$create__());
   this.f_patternCache__org_pepstock_charba_client_colors_CanvasObjectFactory_.put(chart.m_getId__(), patternsMap);
  }
  if (!$Equality.$same(pattern.m_getCanvasPattern__(), null)) {
   let result = pattern.m_getCanvasPattern__();
   patternsMap.put(pattern.m_getId__(), result);
   return result;
  }
  let canvas = chart.m_getCanvas__();
  let context = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(canvas);
  let result_1 = Context2dItem_$Overlay.m_createPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition(context, pattern.m_getImage__(), pattern.m_getRepetition__());
  if (!$Equality.$same(result_1, null)) {
   pattern.m_store__org_pepstock_charba_client_dom_IsCastable_$pp_org_pepstock_charba_client_colors(result_1);
   patternsMap.put(pattern.m_getId__(), result_1);
  }
  return result_1;
 }
 
 m_resetGradients__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_gradientsCache__org_pepstock_charba_client_colors_CanvasObjectFactory_.remove(chart.m_getId__());
  }
 }
 
 m_clear__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   this.f_patternCache__org_pepstock_charba_client_colors_CanvasObjectFactory_.remove(chart.m_getId__());
   this.f_gradientsCache__org_pepstock_charba_client_colors_CanvasObjectFactory_.remove(chart.m_getId__());
  }
 }
 /** @return {CanvasGradient} */
 m_createGradient__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(/** IsChart */ chart, /** Gradient */ gradient, /** number */ datasetIndex, /** number */ index) {
  IsChart.m_checkIfValid__org_pepstock_charba_client_IsChart(chart);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(gradient, "Gradient argument");
  let /** Map<?string, CanvasGradient> */ gradientsMap;
  let uniqueId = this.m_createGradientUniqueId__org_pepstock_charba_client_colors_Gradient_$p_org_pepstock_charba_client_colors_CanvasObjectFactory(gradient);
  if (this.f_gradientsCache__org_pepstock_charba_client_colors_CanvasObjectFactory_.containsKey(chart.m_getId__())) {
   gradientsMap = /**@type {Map<?string, CanvasGradient>}*/ ($Casts.$to(this.f_gradientsCache__org_pepstock_charba_client_colors_CanvasObjectFactory_.get(chart.m_getId__()), Map));
   if (gradientsMap.containsKey(uniqueId)) {
    return /**@type {CanvasGradient}*/ ($Casts.$to(gradientsMap.get(uniqueId), $Overlay));
   }
  } else {
   gradientsMap = /**@type {!HashMap<?string, CanvasGradient>}*/ (HashMap.$create__());
   this.f_gradientsCache__org_pepstock_charba_client_colors_CanvasObjectFactory_.put(chart.m_getId__(), gradientsMap);
  }
  Checker.m_assertCheck__boolean__java_lang_String(chart.m_isInitialized__() || Charts.m_hasNative__java_lang_String(chart.m_getId__()), "Chart is not initialized");
  let result = null;
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType, gradient.m_getType__())) {
   result = this.m_createLinearGradient__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient_$p_org_pepstock_charba_client_colors_CanvasObjectFactory(chart, gradient);
  } else {
   result = this.m_createRadialGradient__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int_$p_org_pepstock_charba_client_colors_CanvasObjectFactory(chart, gradient, datasetIndex, index);
  }
  if (!$Equality.$same(result, null)) {
   gradient.m_store__org_pepstock_charba_client_dom_IsCastable_$pp_org_pepstock_charba_client_colors(result);
   for (let $iterator = gradient.m_getColors__().m_iterator__(); $iterator.m_hasNext__(); ) {
    let color = /**@type {GradientColor}*/ ($Casts.$to($iterator.m_next__(), GradientColor));
    {
     $Overlay.m_addColorStop__$devirt__org_pepstock_charba_client_dom_elements_CanvasGradientItem__double__java_lang_String(result, color.m_getOffset__(), color.m_getColorAsString__());
    }
   }
   gradientsMap.put(uniqueId, result);
  }
  return result;
 }
 /** @return {CanvasGradient} */
 m_createLinearGradient__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient_$p_org_pepstock_charba_client_colors_CanvasObjectFactory(/** IsChart */ chart, /** Gradient */ gradient) {
  let canvas = chart.m_getCanvas__();
  let context = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(canvas);
  let x0 = 0;
  let y0 = 0;
  let x1 = 0;
  let y1 = 0;
  let area = this.m_getArea__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient(chart, gradient);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(area, "Area for linear gradient");
  let top = area.m_getTop__();
  let bottom = area.m_getBottom__();
  let left = area.m_getLeft__();
  let right = area.m_getRight__();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientOrientation.f_TOP_DOWN__org_pepstock_charba_client_colors_GradientOrientation, gradient.m_getOrientation__())) {
   x0 = left;
   y0 = top;
   x1 = left;
   y1 = bottom;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientOrientation.f_BOTTOM_UP__org_pepstock_charba_client_colors_GradientOrientation, gradient.m_getOrientation__())) {
   x0 = left;
   y0 = bottom;
   x1 = left;
   y1 = top;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientOrientation.f_LEFT_RIGHT__org_pepstock_charba_client_colors_GradientOrientation, gradient.m_getOrientation__())) {
   x0 = left;
   y0 = top;
   x1 = right;
   y1 = top;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientOrientation.f_RIGHT_LEFT__org_pepstock_charba_client_colors_GradientOrientation, gradient.m_getOrientation__())) {
   x0 = right;
   y0 = top;
   x1 = left;
   y1 = top;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientOrientation.f_TOP_RIGHT__org_pepstock_charba_client_colors_GradientOrientation, gradient.m_getOrientation__())) {
   x0 = left;
   y0 = top;
   x1 = right;
   y1 = bottom;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientOrientation.f_BOTTOM_LEFT__org_pepstock_charba_client_colors_GradientOrientation, gradient.m_getOrientation__())) {
   x0 = right;
   y0 = bottom;
   x1 = left;
   y1 = top;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientOrientation.f_TOP_LEFT__org_pepstock_charba_client_colors_GradientOrientation, gradient.m_getOrientation__())) {
   x0 = right;
   y0 = top;
   x1 = left;
   y1 = bottom;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientOrientation.f_BOTTOM_RIGHT__org_pepstock_charba_client_colors_GradientOrientation, gradient.m_getOrientation__())) {
   x0 = left;
   y0 = bottom;
   x1 = right;
   y1 = top;
  } else {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Gradient orientation is wrong [" + j_l_String.m_valueOf__java_lang_Object(gradient.m_getOrientation__()) + "]"));
  }
  return context.createLinearGradient(x0, y0, x1, y1);
 }
 /** @return {CanvasGradient} */
 m_createRadialGradient__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int_$p_org_pepstock_charba_client_colors_CanvasObjectFactory(/** IsChart */ chart, /** Gradient */ gradient, /** number */ datasetIndex, /** number */ index) {
  let canvas = chart.m_getCanvas__();
  let context = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(canvas);
  let x0 = 0;
  let y0 = 0;
  let r0 = 0;
  let x1 = 0;
  let y1 = 0;
  let r1 = 0;
  let center = this.m_getCenter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(chart, gradient, datasetIndex, index);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(center, "Center for radial gradient");
  let centerX = center.m_getX__();
  let centerY = center.m_getY__();
  let radius = this.m_getRadius__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(chart, gradient, datasetIndex, index);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(radius, "Radius for radial gradient");
  let radius0 = radius.m_getInner__();
  let radius1 = radius.m_getOuter__();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientOrientation.f_IN_OUT__org_pepstock_charba_client_colors_GradientOrientation, gradient.m_getOrientation__())) {
   x0 = centerX;
   y0 = centerY;
   r0 = radius0;
   x1 = centerX;
   y1 = centerY;
   r1 = radius1;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientOrientation.f_OUT_IN__org_pepstock_charba_client_colors_GradientOrientation, gradient.m_getOrientation__())) {
   x0 = centerX;
   y0 = centerY;
   r0 = radius1;
   x1 = centerX;
   y1 = centerY;
   r1 = radius0;
  } else {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Gradient orientation is wrong [" + j_l_String.m_valueOf__java_lang_Object(gradient.m_getOrientation__()) + "]"));
  }
  return context.createRadialGradient(x0, y0, r0, x1, y1, r1);
 }
 /** @return {?string} */
 m_createGradientUniqueId__org_pepstock_charba_client_colors_Gradient_$p_org_pepstock_charba_client_colors_CanvasObjectFactory(/** Gradient */ gradient) {
  let sb = StringBuilder.$create__java_lang_String(gradient.m_getId__());
  return sb.m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(this.m_getScope__().m_value__()).toString();
 }
 /** @abstract @return {Area} */
 m_getArea__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient(/** IsChart */ chart, /** Gradient */ gradient) {}
 /** @abstract @return {Center} */
 m_getCenter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(/** IsChart */ chart, /** Gradient */ gradient, /** number */ datasetIndex, /** number */ index) {}
 /** @abstract @return {Radius} */
 m_getRadius__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(/** IsChart */ chart, /** Gradient */ gradient, /** number */ datasetIndex, /** number */ index) {}
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_CanvasObjectFactory() {
  this.f_gradientsCache__org_pepstock_charba_client_colors_CanvasObjectFactory_ = /**@type {!HashMap<?string, Map<?string, CanvasGradient>>}*/ (HashMap.$create__());
  this.f_patternCache__org_pepstock_charba_client_colors_CanvasObjectFactory_ = /**@type {!HashMap<?string, Map<?string, CanvasPattern>>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  CanvasObjectFactory.$clinit = () =>{};
  CanvasObjectFactory.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CanvasObjectFactory;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Map = goog.module.get('java.util.Map$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Charts = goog.module.get('org.pepstock.charba.client.Charts$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  GradientColor = goog.module.get('org.pepstock.charba.client.colors.GradientColor$impl');
  GradientOrientation = goog.module.get('org.pepstock.charba.client.colors.GradientOrientation$impl');
  GradientType = goog.module.get('org.pepstock.charba.client.colors.GradientType$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay$impl');
  CanvasPatternItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(CanvasObjectFactory, "org.pepstock.charba.client.colors.CanvasObjectFactory");

exports = CanvasObjectFactory;

//# sourceMappingURL=CanvasObjectFactory.js.map
