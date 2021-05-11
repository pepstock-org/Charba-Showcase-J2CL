goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.ZoomCase.$10$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let ZoomApiZoomScaleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomApiZoomScaleCase$impl');

/**
 * @implements {CaseFactory}
 */
class $10 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$10} */
 static $create__() {
  $10.$clinit();
  let $instance = new $10();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_10__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_ZoomCase_10__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return ZoomApiZoomScaleCase.$create__();
 }
 
 static $clinit() {
  $10.$clinit = () =>{};
  $10.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $10;
 }
 
 static $loadModules() {
  ZoomApiZoomScaleCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomApiZoomScaleCase$impl');
 }
}
CaseFactory.$markImplementor($10);
$Util.$setClassMetadata($10, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$ZoomCase$10");

exports = $10;

//# sourceMappingURL=ExtensionsView$ZoomCase$10.js.map
