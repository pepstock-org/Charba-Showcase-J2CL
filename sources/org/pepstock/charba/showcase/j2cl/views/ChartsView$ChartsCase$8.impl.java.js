goog.module('org.pepstock.charba.showcase.j2cl.views.ChartsView.ChartsCase.$8$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let PolarAreaCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.PolarAreaCase$impl');
let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

/**
 * @implements {CaseFactory}
 */
class $8 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$8} */
 static $create__() {
  $8.$clinit();
  let $instance = new $8();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_8__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_ChartsCase_8__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return PolarAreaCase.$create__();
 }
 
 static $clinit() {
  $8.$clinit = () =>{};
  $8.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $8;
 }
 
 static $loadModules() {
  PolarAreaCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.PolarAreaCase$impl');
 }
}
CaseFactory.$markImplementor($8);
$Util.$setClassMetadata($8, "org.pepstock.charba.showcase.j2cl.views.ChartsView$ChartsCase$8");

exports = $8;

//# sourceMappingURL=ChartsView$ChartsCase$8.js.map
