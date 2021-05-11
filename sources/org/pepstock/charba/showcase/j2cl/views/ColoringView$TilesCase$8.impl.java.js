goog.module('org.pepstock.charba.showcase.j2cl.views.ColoringView.TilesCase.$8$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let TilesPointStylesCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.coloring.TilesPointStylesCase$impl');
let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

/**
 * @implements {CaseFactory}
 */
class $8 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$8} */
 static $create__() {
  $8.$clinit();
  let $instance = new $8();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_8__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ColoringView_TilesCase_8__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return TilesPointStylesCase.$create__();
 }
 
 static $clinit() {
  $8.$clinit = () =>{};
  $8.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $8;
 }
 
 static $loadModules() {
  TilesPointStylesCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.coloring.TilesPointStylesCase$impl');
 }
}
CaseFactory.$markImplementor($8);
$Util.$setClassMetadata($8, "org.pepstock.charba.showcase.j2cl.views.ColoringView$TilesCase$8");

exports = $8;

//# sourceMappingURL=ColoringView$TilesCase$8.js.map
