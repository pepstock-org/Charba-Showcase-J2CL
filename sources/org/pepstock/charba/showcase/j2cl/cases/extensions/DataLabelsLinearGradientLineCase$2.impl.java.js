goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay$impl');
let DataLabelsLinearGradientLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DataLabelsContext>}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsLinearGradientLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2;
  /**@type {CanvasGradient}*/
  this.f_gr1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase(/** DataLabelsLinearGradientLineCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase(/** DataLabelsLinearGradientLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2();
 }
 /** @return {CanvasGradient} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  if ($Equality.$same(this.f_gr1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2, null)) {
   this.f_gr1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2 = Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_.m_getCanvas__()).createLinearGradient(-25 | 0, -25 | 0, 25, 25);
   $Overlay.m_addColorStop__$devirt__org_pepstock_charba_client_dom_elements_CanvasGradientItem__double__java_lang_String(this.f_gr1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2, 1, HtmlColor.f_ORANGE__org_pepstock_charba_client_colors_HtmlColor.m_toRGBA__());
   $Overlay.m_addColorStop__$devirt__org_pepstock_charba_client_dom_elements_CanvasGradientItem__double__java_lang_String(this.f_gr1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2, 0, HtmlColor.f_PURPLE__org_pepstock_charba_client_colors_HtmlColor.m_toRGBA__());
  }
  return this.f_gr1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2;
 }
 //Bridge method.
 /** @override @return {CanvasGradient} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DataLabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/**@type {DataLabelsContext}*/ ($Casts.$to(arg0, DataLabelsContext)));
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2() {
  this.f_gr1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLinearGradientLineCase_2 = null;
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase$2");

exports = $2;

//# sourceMappingURL=DataLabelsLinearGradientLineCase$2.js.map
