goog.module('org.pepstock.charba.showcase.j2cl.views.PluginsView.HtmlLegendCase.$8$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseFactory = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');

let BaseComposite = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');
let HtmlLegendRadialGradientCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendRadialGradientCase$impl');

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
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_8__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_HtmlLegendCase_8__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {BaseComposite} */
 m_create__() {
  return HtmlLegendRadialGradientCase.$create__();
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
  HtmlLegendRadialGradientCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendRadialGradientCase$impl');
 }
}
CaseFactory.$markImplementor($8);
$Util.$setClassMetadata($8, "org.pepstock.charba.showcase.j2cl.views.PluginsView$HtmlLegendCase$8");

exports = $8;

//# sourceMappingURL=PluginsView$HtmlLegendCase$8.js.map
