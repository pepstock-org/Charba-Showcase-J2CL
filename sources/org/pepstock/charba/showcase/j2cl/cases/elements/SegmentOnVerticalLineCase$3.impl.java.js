goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnVerticalLineCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const WidthCallback = goog.require('org.pepstock.charba.client.callbacks.WidthCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let SegmentContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.SegmentContext$impl');
let SegmentOnVerticalLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnVerticalLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {WidthCallback<SegmentContext>}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {SegmentOnVerticalLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase(/** SegmentOnVerticalLineCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase_3__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase_3__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase(/** SegmentOnVerticalLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_SegmentContext(/** SegmentContext */ context) {
  return context.m_getEndPoint__().m_getParsed__().m_getX__() < context.m_getStartPoint__().m_getParsed__().m_getX__() ? Integer.m_valueOf__int(5) : null;
 }
 //Bridge method.
 /** @override @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** SegmentContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_SegmentContext(/**@type {SegmentContext}*/ ($Casts.$to(arg0, SegmentContext)));
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  SegmentContext = goog.module.get('org.pepstock.charba.client.callbacks.SegmentContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
WidthCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnVerticalLineCase$3");

exports = $3;

//# sourceMappingURL=SegmentOnVerticalLineCase$3.js.map
