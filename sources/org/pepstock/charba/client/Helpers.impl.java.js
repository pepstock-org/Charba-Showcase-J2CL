goog.module('org.pepstock.charba.client.Helpers$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let IsArea = goog.forwardDeclare('org.pepstock.charba.client.items.IsArea$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class Helpers extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaChartHelpers}*/
  this.f_nativeObject__org_pepstock_charba_client_Helpers_;
 }
 /** @return {!Helpers} */
 static $create__() {
  let $instance = new Helpers();
  $instance.$ctor__org_pepstock_charba_client_Helpers__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Helpers__() {
  this.$ctor__java_lang_Object__();
  ResourcesType.m_getResources__().m_inject__();
  this.f_nativeObject__org_pepstock_charba_client_Helpers_ = Chart.helpers;
 }
 /** @return {Helpers} */
 static m_get__() {
  Helpers.$clinit();
  return Helpers.f_INSTANCE__org_pepstock_charba_client_Helpers_;
 }
 /** @return {?} */
 m_mergeIf__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject(/** ? */ target, /** ? */ source) {
  if (!$Equality.$same(target, null)) {
   if (!$Equality.$same(source, null)) {
    return this.f_nativeObject__org_pepstock_charba_client_Helpers_.mergeIf(target, source);
   } else {
    return target;
   }
  } else if (!$Equality.$same(source, null)) {
   return this.m_clone__org_pepstock_charba_client_commons_NativeObject(source);
  }
  return null;
 }
 /** @return {?} */
 m_clone__org_pepstock_charba_client_commons_NativeObject(/** ? */ source) {
  if (!$Equality.$same(source, null)) {
   return this.f_nativeObject__org_pepstock_charba_client_Helpers_.clone(source);
  }
  return null;
 }
 
 m_clipArea__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   this.m_clipArea__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_IsArea(chart, chart.m_getNode__().m_getChartArea__());
  }
 }
 
 m_clipArea__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_IsArea(/** IsChart */ chart, /** IsArea */ area) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   this.m_clipArea__org_pepstock_charba_client_dom_elements_Canvas__org_pepstock_charba_client_items_IsArea(chart.m_getCanvas__(), area);
  }
 }
 
 m_clipArea__org_pepstock_charba_client_IsChart__double__double(/** IsChart */ chart, /** number */ width, /** number */ height) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   this.m_clipArea__org_pepstock_charba_client_dom_elements_Canvas__double__double(chart.m_getCanvas__(), width, height);
  }
 }
 
 m_clipArea__org_pepstock_charba_client_IsChart__double__double__double__double(/** IsChart */ chart, /** number */ x, /** number */ y, /** number */ width, /** number */ height) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   this.m_clipArea__org_pepstock_charba_client_dom_elements_Canvas__double__double__double__double(chart.m_getCanvas__(), x, y, width, height);
  }
 }
 
 m_clipArea__org_pepstock_charba_client_dom_elements_Canvas__org_pepstock_charba_client_items_IsArea(/** HTMLCanvasElement */ canvas, /** IsArea */ area) {
  if (!$Equality.$same(canvas, null)) {
   this.m_clipArea__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_items_IsArea(Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(canvas), area);
  }
 }
 
 m_clipArea__org_pepstock_charba_client_dom_elements_Canvas__double__double(/** HTMLCanvasElement */ canvas, /** number */ width, /** number */ height) {
  if (!$Equality.$same(canvas, null)) {
   this.m_clipArea__org_pepstock_charba_client_dom_elements_Context2dItem__double__double(Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(canvas), width, height);
  }
 }
 
 m_clipArea__org_pepstock_charba_client_dom_elements_Canvas__double__double__double__double(/** HTMLCanvasElement */ canvas, /** number */ x, /** number */ y, /** number */ width, /** number */ height) {
  if (!$Equality.$same(canvas, null)) {
   this.m_clipArea__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double(Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(canvas), x, y, width, height);
  }
 }
 
 m_clipArea__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_items_IsArea(/** CanvasRenderingContext2D */ context, /** IsArea */ area) {
  if (!$Equality.$same(area, null) && IsArea.m_isConsistent__org_pepstock_charba_client_items_IsArea(area)) {
   this.m_clipArea__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double(context, area.m_getLeft__(), area.m_getTop__(), area.m_getWidth__(), area.m_getHeight__());
  }
 }
 
 m_clipArea__org_pepstock_charba_client_dom_elements_Context2dItem__double__double(/** CanvasRenderingContext2D */ context, /** number */ width, /** number */ height) {
  this.m_clipArea__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double(context, 0, 0, width, height);
 }
 
 m_clipArea__org_pepstock_charba_client_dom_elements_Context2dItem__double__double__double__double(/** CanvasRenderingContext2D */ context, /** number */ x, /** number */ y, /** number */ width, /** number */ height) {
  if (!$Equality.$same(context, null) && this.m_areValuesConsistent__arrayOf_double_$p_org_pepstock_charba_client_Helpers(/**@type {!Array<number>}*/ ($Arrays.$init([x, y, width, height], $double))) && width >= 0 && height >= 0) {
   context.save();
   context.beginPath();
   context.rect(x, y, width, height);
   context.clip();
  }
 }
 
 m_unclipArea__org_pepstock_charba_client_dom_elements_Context2dItem(/** CanvasRenderingContext2D */ context) {
  if (!$Equality.$same(context, null)) {
   context.restore();
  }
 }
 /** @return {boolean} */
 m_areValuesConsistent__arrayOf_double_$p_org_pepstock_charba_client_Helpers(/** Array<number> */ values) {
  for (let $array = values, $index = 0; $index < $array.length; $index++) {
   let value = $array[$index];
   {
    if (Checker.m_isNegative__double(value)) {
     return false;
    }
   }
  }
  return true;
 }
 
 static $clinit() {
  Helpers.$clinit = () =>{};
  Helpers.$loadModules();
  j_l_Object.$clinit();
  Helpers.f_INSTANCE__org_pepstock_charba_client_Helpers_ = Helpers.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Helpers;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  IsArea = goog.module.get('org.pepstock.charba.client.items.IsArea$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
/**@type {Helpers}*/
Helpers.f_INSTANCE__org_pepstock_charba_client_Helpers_;
$Util.$setClassMetadata(Helpers, "org.pepstock.charba.client.Helpers");

exports = Helpers;

//# sourceMappingURL=Helpers.js.map
