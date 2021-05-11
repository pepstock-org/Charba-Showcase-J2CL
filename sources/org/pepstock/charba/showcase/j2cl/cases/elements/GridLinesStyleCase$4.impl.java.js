goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let GridLinesStyleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<ScaleContext>}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {GridLinesStyleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_4;
 }
 /** @return {!$4} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase(/** GridLinesStyleCase */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_4__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_4__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase(/** GridLinesStyleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/** ScaleContext */ context) {
  return HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor;
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** ScaleContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/**@type {ScaleContext}*/ ($Casts.$to(arg0, ScaleContext)));
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  ScaleContext = goog.module.get('org.pepstock.charba.client.callbacks.ScaleContext$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase$4");

exports = $4;

//# sourceMappingURL=GridLinesStyleCase$4.js.map
