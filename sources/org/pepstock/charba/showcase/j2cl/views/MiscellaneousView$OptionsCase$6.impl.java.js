goog.module('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$6$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let ApplyingPointSizesOnLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointSizesOnLineCase$impl');

/**
 * @implements {CaseFactory}
 */
class $6 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$6} */
 static $create__() {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_6__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_6__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return ApplyingPointSizesOnLineCase.$create__();
 }
 
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 static $loadModules() {
  ApplyingPointSizesOnLineCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointSizesOnLineCase$impl');
 }
}
CaseFactory.$markImplementor($6);
$Util.$setClassMetadata($6, "org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$OptionsCase$6");

exports = $6;

//# sourceMappingURL=MiscellaneousView$OptionsCase$6.js.map
