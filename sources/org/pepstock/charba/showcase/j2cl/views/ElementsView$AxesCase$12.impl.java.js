goog.module('org.pepstock.charba.showcase.j2cl.views.ElementsView.AxesCase.$12$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let LogarithmicAxisOnScatterCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase$impl');

/**
 * @implements {CaseFactory}
 */
class $12 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$12} */
 static $create__() {
  $12.$clinit();
  let $instance = new $12();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_12__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_AxesCase_12__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return LogarithmicAxisOnScatterCase.$create__();
 }
 
 static $clinit() {
  $12.$clinit = () =>{};
  $12.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $12;
 }
 
 static $loadModules() {
  LogarithmicAxisOnScatterCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase$impl');
 }
}
CaseFactory.$markImplementor($12);
$Util.$setClassMetadata($12, "org.pepstock.charba.showcase.j2cl.views.ElementsView$AxesCase$12");

exports = $12;

//# sourceMappingURL=ElementsView$AxesCase$12.js.map
