goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisClickEventHandler = goog.require('org.pepstock.charba.client.events.AxisClickEventHandler$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let AxisClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEvent$impl');
let PointerLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {AxisClickEventHandler}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {PointerLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(/** PointerLineCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_3__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_3__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(/** PointerLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_AxisClickEvent(/** AxisClickEvent */ event) {
  let axis = event.m_getAxis__();
  let scaleLabel = null;
  if (CartesianCategoryAxis.$isInstance(axis)) {
   let category = /**@type {CartesianCategoryAxis}*/ ($Casts.$to(axis, CartesianCategoryAxis));
   scaleLabel = $Objects.m_toString__java_lang_Object(category.m_getTitle__().m_getText__());
  } else {
   let linear = /**@type {CartesianLinearAxis}*/ ($Casts.$to(axis, CartesianLinearAxis));
   scaleLabel = $Objects.m_toString__java_lang_Object(linear.m_getTitle__().m_getText__());
  }
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("Axis: ").m_append__java_lang_String(scaleLabel);
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_3.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_addLogEvent__java_lang_String(sb.toString());
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
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
AxisClickEventHandler.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase$3");

exports = $3;

//# sourceMappingURL=PointerLineCase$3.js.map
