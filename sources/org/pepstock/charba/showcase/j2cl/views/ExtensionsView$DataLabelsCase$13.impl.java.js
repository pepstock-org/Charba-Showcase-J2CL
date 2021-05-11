goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$13$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let DataLabelsListenersCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsListenersCase$impl');

/**
 * @implements {CaseFactory}
 */
class $13 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$13} */
 static $create__() {
  $13.$clinit();
  let $instance = new $13();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_13__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_13__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return DataLabelsListenersCase.$create__();
 }
 
 static $clinit() {
  $13.$clinit = () =>{};
  $13.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $13;
 }
 
 static $loadModules() {
  DataLabelsListenersCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsListenersCase$impl');
 }
}
CaseFactory.$markImplementor($13);
$Util.$setClassMetadata($13, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$DataLabelsCase$13");

exports = $13;

//# sourceMappingURL=ExtensionsView$DataLabelsCase$13.js.map
