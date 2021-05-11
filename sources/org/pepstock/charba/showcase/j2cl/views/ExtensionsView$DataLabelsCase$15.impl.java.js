goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$15$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let DataLabelsSelectionCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase$impl');

/**
 * @implements {CaseFactory}
 */
class $15 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$15} */
 static $create__() {
  $15.$clinit();
  let $instance = new $15();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_15__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_15__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return DataLabelsSelectionCase.$create__();
 }
 
 static $clinit() {
  $15.$clinit = () =>{};
  $15.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $15;
 }
 
 static $loadModules() {
  DataLabelsSelectionCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase$impl');
 }
}
CaseFactory.$markImplementor($15);
$Util.$setClassMetadata($15, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$DataLabelsCase$15");

exports = $15;

//# sourceMappingURL=ExtensionsView$DataLabelsCase$15.js.map
