goog.module('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$5$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let DatasetItemsSelectorTimeSeriesByBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorTimeSeriesByBarCase$impl');

/**
 * @implements {CaseFactory}
 */
class $5 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$5} */
 static $create__() {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_5__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_5__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return DatasetItemsSelectorTimeSeriesByBarCase.$create__();
 }
 
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 static $loadModules() {
  DatasetItemsSelectorTimeSeriesByBarCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorTimeSeriesByBarCase$impl');
 }
}
CaseFactory.$markImplementor($5);
$Util.$setClassMetadata($5, "org.pepstock.charba.showcase.j2cl.views.PluginsView$DatasetItemsSelectorCase$5");

exports = $5;

//# sourceMappingURL=PluginsView$DatasetItemsSelectorCase$5.js.map
