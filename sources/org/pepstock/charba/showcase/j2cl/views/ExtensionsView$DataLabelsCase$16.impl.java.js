goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$16$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let DataLabelsCustomLabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsCustomLabelsCase$impl');

/**
 * @implements {CaseFactory}
 */
class $16 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$16} */
 static $create__() {
  $16.$clinit();
  let $instance = new $16();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_16__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_16__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return DataLabelsCustomLabelsCase.$create__();
 }
 
 static $clinit() {
  $16.$clinit = () =>{};
  $16.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $16;
 }
 
 static $loadModules() {
  DataLabelsCustomLabelsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsCustomLabelsCase$impl');
 }
}
CaseFactory.$markImplementor($16);
$Util.$setClassMetadata($16, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$DataLabelsCase$16");

exports = $16;

//# sourceMappingURL=ExtensionsView$DataLabelsCase$16.js.map
