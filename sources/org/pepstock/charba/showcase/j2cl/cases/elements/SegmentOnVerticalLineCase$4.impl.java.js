goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnVerticalLineCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BorderDashCallback = goog.require('org.pepstock.charba.client.callbacks.BorderDashCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let SegmentContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.SegmentContext$impl');
let SegmentOnVerticalLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnVerticalLineCase$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {BorderDashCallback<SegmentContext>}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {SegmentOnVerticalLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase_4;
 }
 /** @return {!$4} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase(/** SegmentOnVerticalLineCase */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase_4__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase_4__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase(/** SegmentOnVerticalLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnVerticalLineCase_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {List<Integer>} */
 m_invoke__org_pepstock_charba_client_callbacks_SegmentContext(/** SegmentContext */ context) {
  return context.m_getEndPoint__().m_getParsed__().m_getX__() < context.m_getStartPoint__().m_getParsed__().m_getX__() ? /**@type {List<Integer>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<Integer>}*/ ($Arrays.$init([Integer.m_valueOf__int(6), Integer.m_valueOf__int(6)], Integer)))) : /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 //Bridge method.
 /** @override @return {List<Integer>} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** SegmentContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_SegmentContext(/**@type {SegmentContext}*/ ($Casts.$to(arg0, SegmentContext)));
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
  Integer = goog.module.get('java.lang.Integer$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  SegmentContext = goog.module.get('org.pepstock.charba.client.callbacks.SegmentContext$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
BorderDashCallback.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnVerticalLineCase$4");

exports = $4;

//# sourceMappingURL=SegmentOnVerticalLineCase$4.js.map
