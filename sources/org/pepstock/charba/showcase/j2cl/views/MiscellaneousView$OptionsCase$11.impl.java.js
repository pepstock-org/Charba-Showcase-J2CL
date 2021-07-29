goog.module('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$11$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let AutoUpdateLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AutoUpdateLineCase$impl');

/**
 * @implements {CaseFactory}
 */
class $11 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$11} */
 static $create__() {
  $11.$clinit();
  let $instance = new $11();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_11__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_11__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return AutoUpdateLineCase.$create__();
 }
 
 static $clinit() {
  $11.$clinit = () =>{};
  $11.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $11;
 }
 
 static $loadModules() {
  AutoUpdateLineCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AutoUpdateLineCase$impl');
 }
}
CaseFactory.$markImplementor($11);
$Util.$setClassMetadata($11, "org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$OptionsCase$11");

exports = $11;

//# sourceMappingURL=MiscellaneousView$OptionsCase$11.js.map