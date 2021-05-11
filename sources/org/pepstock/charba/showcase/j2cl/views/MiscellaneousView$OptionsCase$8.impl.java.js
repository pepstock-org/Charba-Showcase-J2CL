goog.module('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.OptionsCase.$8$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let HoverStyleOnStackedAreaCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HoverStyleOnStackedAreaCase$impl');

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
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_8__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_OptionsCase_8__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return HoverStyleOnStackedAreaCase.$create__();
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
  HoverStyleOnStackedAreaCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HoverStyleOnStackedAreaCase$impl');
 }
}
CaseFactory.$markImplementor($8);
$Util.$setClassMetadata($8, "org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$OptionsCase$8");

exports = $8;

//# sourceMappingURL=MiscellaneousView$OptionsCase$8.js.map
