goog.module('org.pepstock.charba.showcase.j2cl.views.ElementsView.SegmentCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let SegmentOnTimeSeriesLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase$impl');

/**
 * @implements {CaseFactory}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$3} */
 static $create__() {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_3__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ElementsView_SegmentCase_3__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return SegmentOnTimeSeriesLineCase.$create__();
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {
  SegmentOnTimeSeriesLineCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase$impl');
 }
}
CaseFactory.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.views.ElementsView$SegmentCase$3");

exports = $3;

//# sourceMappingURL=ElementsView$SegmentCase$3.js.map
