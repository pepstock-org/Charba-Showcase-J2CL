goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let GeoChoroplethLogarithmicCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethLogarithmicCase$impl');

/**
 * @implements {CaseFactory}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$1} */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_1__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_GeoChartsCase_1__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return GeoChoroplethLogarithmicCase.$create__();
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  GeoChoroplethLogarithmicCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethLogarithmicCase$impl');
 }
}
CaseFactory.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$GeoChartsCase$1");

exports = $1;

//# sourceMappingURL=ExtensionsView$GeoChartsCase$1.js.map
