goog.module('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$13$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let HtmlLegendCustomCallbackCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendCustomCallbackCase$impl');

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
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_13__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_13__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return HtmlLegendCustomCallbackCase.$create__();
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
  HtmlLegendCustomCallbackCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendCustomCallbackCase$impl');
 }
}
CaseFactory.$markImplementor($13);
$Util.$setClassMetadata($13, "org.pepstock.charba.showcase.j2cl.views.PluginsView$HtmlLegendCase$13");

exports = $13;

//# sourceMappingURL=PluginsView$HtmlLegendCase$13.js.map
