goog.module('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView.DatasetsCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let FloatingDataTimeSeriesByBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataTimeSeriesByBarCase$impl');

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
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_4__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MiscellaneousView_DatasetsCase_4__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return FloatingDataTimeSeriesByBarCase.$create__();
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
  FloatingDataTimeSeriesByBarCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataTimeSeriesByBarCase$impl');
 }
}
CaseFactory.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$DatasetsCase$4");

exports = $4;

//# sourceMappingURL=MiscellaneousView$DatasetsCase$4.js.map
