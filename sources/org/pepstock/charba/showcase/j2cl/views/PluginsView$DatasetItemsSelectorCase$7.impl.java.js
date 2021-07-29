goog.module('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$7$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let DatasetItemsSelectorDrillingDownCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase$impl');

/**
 * @implements {CaseFactory}
 */
class $7 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$7} */
 static $create__() {
  $7.$clinit();
  let $instance = new $7();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_7__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_7__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return DatasetItemsSelectorDrillingDownCase.$create__();
 }
 
 static $clinit() {
  $7.$clinit = () =>{};
  $7.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $7;
 }
 
 static $loadModules() {
  DatasetItemsSelectorDrillingDownCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase$impl');
 }
}
CaseFactory.$markImplementor($7);
$Util.$setClassMetadata($7, "org.pepstock.charba.showcase.j2cl.views.PluginsView$DatasetItemsSelectorCase$7");

exports = $7;

//# sourceMappingURL=PluginsView$DatasetItemsSelectorCase$7.js.map