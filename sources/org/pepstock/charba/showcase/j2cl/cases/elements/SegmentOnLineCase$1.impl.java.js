goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let SegmentContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.SegmentContext$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let SegmentOnLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<SegmentContext>}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {SegmentOnLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase(/** SegmentOnLineCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase(/** SegmentOnLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnLineCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_SegmentContext(/** SegmentContext */ context) {
  return context.m_getEndPoint__().m_getParsed__().m_getY__() < context.m_getStartPoint__().m_getParsed__().m_getY__() ? HtmlColor.f_GRAY__org_pepstock_charba_client_colors_HtmlColor : HtmlColor.f_GREEN__org_pepstock_charba_client_colors_HtmlColor;
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** SegmentContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_SegmentContext(/**@type {SegmentContext}*/ ($Casts.$to(arg0, SegmentContext)));
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
  SegmentContext = goog.module.get('org.pepstock.charba.client.callbacks.SegmentContext$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnLineCase$1");

exports = $1;

//# sourceMappingURL=SegmentOnLineCase$1.js.map
