goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$14$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let DataLabelsHighlightCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase$impl');

/**
 * @implements {CaseFactory}
 */
class $14 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$14} */
 static $create__() {
  $14.$clinit();
  let $instance = new $14();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_14__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_14__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return DataLabelsHighlightCase.$create__();
 }
 
 static $clinit() {
  $14.$clinit = () =>{};
  $14.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $14;
 }
 
 static $loadModules() {
  DataLabelsHighlightCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase$impl');
 }
}
CaseFactory.$markImplementor($14);
$Util.$setClassMetadata($14, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$DataLabelsCase$14");

exports = $14;

//# sourceMappingURL=ExtensionsView$DataLabelsCase$14.js.map
