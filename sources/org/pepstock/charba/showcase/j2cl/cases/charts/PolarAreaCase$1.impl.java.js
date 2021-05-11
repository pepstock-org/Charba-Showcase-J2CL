goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.PolarAreaCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FontCallback = goog.require('org.pepstock.charba.client.callbacks.FontCallback$impl');

let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');
let PolarAreaCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.PolarAreaCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {FontCallback<ScaleContext>}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {PolarAreaCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_PolarAreaCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_PolarAreaCase(/** PolarAreaCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_PolarAreaCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_PolarAreaCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_PolarAreaCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_PolarAreaCase(/** PolarAreaCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_PolarAreaCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {FontItem} */
 m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/** ScaleContext */ context) {
  let fo = FontItem.$create__();
  fo.m_setSize__int(16);
  return fo;
 }
 //Bridge method.
 /** @override @return {FontItem} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** ScaleContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/**@type {ScaleContext}*/ ($Casts.$to(arg0, ScaleContext)));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  ScaleContext = goog.module.get('org.pepstock.charba.client.callbacks.ScaleContext$impl');
  FontItem = goog.module.get('org.pepstock.charba.client.items.FontItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
FontCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.charts.PolarAreaCase$1");

exports = $1;

//# sourceMappingURL=PolarAreaCase$1.js.map
