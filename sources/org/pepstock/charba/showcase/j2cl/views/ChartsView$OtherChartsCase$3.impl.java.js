goog.module('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let TimeSeriesByLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesByLineCase$impl');
let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

/**
 * @implements {CaseFactory}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$3} */
 static $create__() {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_3__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_3__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return TimeSeriesByLineCase.$create__();
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
  TimeSeriesByLineCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesByLineCase$impl');
 }
}
CaseFactory.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.views.ChartsView$OtherChartsCase$3");

exports = $3;

//# sourceMappingURL=ChartsView$OtherChartsCase$3.js.map
