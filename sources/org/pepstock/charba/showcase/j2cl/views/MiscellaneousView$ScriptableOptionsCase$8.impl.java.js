goog.module('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.ScriptableOptionsCase.$8$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let CallbacksWithThresholdBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase$impl');

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
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_8__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_ScriptableOptionsCase_8__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return CallbacksWithThresholdBarCase.$create__();
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
  CallbacksWithThresholdBarCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase$impl');
 }
}
CaseFactory.$markImplementor($8);
$Util.$setClassMetadata($8, "org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$ScriptableOptionsCase$8");

exports = $8;

//# sourceMappingURL=MiscellaneousView$ScriptableOptionsCase$8.js.map
