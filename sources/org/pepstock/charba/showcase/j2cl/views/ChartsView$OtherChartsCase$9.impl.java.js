goog.module('org.pepstock.charba.showcase.j2cl.views.ChartsView.OtherChartsCase.$9$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let ComboBarLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.ComboBarLineCase$impl');
let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

/**
 * @implements {CaseFactory}
 */
class $9 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$9} */
 static $create__() {
  $9.$clinit();
  let $instance = new $9();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_9__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_OtherChartsCase_9__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return ComboBarLineCase.$create__();
 }
 
 static $clinit() {
  $9.$clinit = () =>{};
  $9.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $9;
 }
 
 static $loadModules() {
  ComboBarLineCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.charts.ComboBarLineCase$impl');
 }
}
CaseFactory.$markImplementor($9);
$Util.$setClassMetadata($9, "org.pepstock.charba.showcase.j2cl.views.ChartsView$OtherChartsCase$9");

exports = $9;

//# sourceMappingURL=ChartsView$OtherChartsCase$9.js.map
