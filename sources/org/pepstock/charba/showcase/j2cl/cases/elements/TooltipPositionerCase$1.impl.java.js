goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.TooltipPositionerCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipPositioner = goog.require('org.pepstock.charba.client.positioner.TooltipPositioner$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let CustomTooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.positioner.CustomTooltipPosition$impl');
let Point = goog.forwardDeclare('org.pepstock.charba.client.positioner.Point$impl');
let TooltipPositionerCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.TooltipPositionerCase$impl');

/**
 * @implements {TooltipPositioner}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TooltipPositionerCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipPositionerCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipPositionerCase(/** TooltipPositionerCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipPositionerCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipPositionerCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipPositionerCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipPositionerCase(/** TooltipPositionerCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipPositionerCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {CustomTooltipPosition} */
 m_getName__() {
  return TooltipPositionerCase.f_newPosition__org_pepstock_charba_showcase_j2cl_cases_elements_TooltipPositionerCase_;
 }
 /** @override @return {Point} */
 m_computePosition__org_pepstock_charba_client_IsChart__java_util_List__org_pepstock_charba_client_positioner_Point(/** IsChart */ chart, /** List<DatasetReference> */ items, /** Point */ eventPoint) {
  let area = chart.m_getNode__().m_getChartArea__();
  let p = Point.$create__();
  p.m_setX__double(area.m_getLeft__());
  p.m_setY__double(area.m_getTop__());
  return p;
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
  Point = goog.module.get('org.pepstock.charba.client.positioner.Point$impl');
  TooltipPositionerCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.TooltipPositionerCase$impl');
 }
}
TooltipPositioner.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.TooltipPositionerCase$1");

exports = $1;

//# sourceMappingURL=TooltipPositionerCase$1.js.map
