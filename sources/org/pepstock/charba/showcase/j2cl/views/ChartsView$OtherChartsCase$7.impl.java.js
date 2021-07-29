goog.module('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$7$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let StackedLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.StackedLineCase$impl');
let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

/**
 * @implements {CaseFactory}
 */
class $7 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$7} */
 static $create__() {
  $7.$clinit();
  let $instance = new $7();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_7__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_7__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return StackedLineCase.$create__();
 }
 
 static $clinit() {
  $7.$clinit = () =>{};
  $7.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $7;
 }
 
 static $loadModules() {
  StackedLineCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.StackedLineCase$impl');
 }
}
CaseFactory.$markImplementor($7);
$Util.$setClassMetadata($7, "org.pepstock.charba.showcase.j2cl.views.ChartsView$OtherChartsCase$7");

exports = $7;

//# sourceMappingURL=ChartsView$OtherChartsCase$7.js.map