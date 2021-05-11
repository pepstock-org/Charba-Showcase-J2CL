goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$17$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let DataLabelsMultiLabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase$impl');

/**
 * @implements {CaseFactory}
 */
class $17 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$17} */
 static $create__() {
  $17.$clinit();
  let $instance = new $17();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_17__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_17__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return DataLabelsMultiLabelsCase.$create__();
 }
 
 static $clinit() {
  $17.$clinit = () =>{};
  $17.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $17;
 }
 
 static $loadModules() {
  DataLabelsMultiLabelsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase$impl');
 }
}
CaseFactory.$markImplementor($17);
$Util.$setClassMetadata($17, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$DataLabelsCase$17");

exports = $17;

//# sourceMappingURL=ExtensionsView$DataLabelsCase$17.js.map
