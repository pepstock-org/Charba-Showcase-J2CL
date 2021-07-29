goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let GeoBubbleMapLogarithmicCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapLogarithmicCase$impl');

/**
 * @implements {CaseFactory}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$2} */
 static $create__() {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_2__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_2__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return GeoBubbleMapLogarithmicCase.$create__();
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  GeoBubbleMapLogarithmicCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapLogarithmicCase$impl');
 }
}
CaseFactory.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$GeoChartsCase$2");

exports = $2;

//# sourceMappingURL=ExtensionsView$GeoChartsCase$2.js.map
