goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.AxesClickEventCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisClickEventHandler = goog.require('org.pepstock.charba.client.events.AxisClickEventHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let AxisClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEvent$impl');
let AxesClickEventCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.AxesClickEventCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {AxisClickEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AxesClickEventCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase(/** AxesClickEventCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase(/** AxesClickEventCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_1 = $outer_this;
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
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_.m_addLogEvent__java_lang_String("> CLICK: Scale label: " + j_l_String.m_valueOf__java_lang_Object(scaleLabel));
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
  j_l_String = goog.module.get('java.lang.String$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
AxisClickEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.charts.AxesClickEventCase$1");

exports = $1;

//# sourceMappingURL=AxesClickEventCase$1.js.map
