goog.module('org.pepstock.charba.showcase.j2cl.views.ColoringView.GradientsCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let RadialGradientPolarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.coloring.RadialGradientPolarCase$impl');
let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

/**
 * @implements {CaseFactory}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$4} */
 static $create__() {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_4__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_GradientsCase_4__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return RadialGradientPolarCase.$create__();
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  RadialGradientPolarCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.coloring.RadialGradientPolarCase$impl');
 }
}
CaseFactory.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.views.ColoringView$GradientsCase$4");

exports = $4;

//# sourceMappingURL=ColoringView$GradientsCase$4.js.map
