goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomPanRegionCase.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let ZoomPanRegionCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomPanRegionCase$impl');

class $2 extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
  /**@type {ZoomPanRegionCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase__java_lang_String(/** ZoomPanRegionCase */ $outer_this, /** ?string */ $_0) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase__java_lang_String($outer_this, $_0);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase__java_lang_String(/** ZoomPanRegionCase */ $outer_this, /** ?string */ $_0) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomPanRegionCase_2 = $outer_this;
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String($_0);
 }
 /** @override @return {boolean} */
 m_onBeforeDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let area = chart.m_getNode__().m_getChartArea__();
  let ctx = $Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(chart.m_getCanvas__());
  ctx.save();
  Context2dItem_$Overlay.m_setStrokeColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, "rgba(255, 0, 0, 0.3)");
  ctx.lineWidth = 1;
  ctx.strokeRect(area.m_getLeft__() + area.m_getWidth__() * 0.25, area.m_getTop__() + area.m_getHeight__() * 0.25, area.m_getWidth__() / 2, area.m_getHeight__() / 2);
  ctx.restore();
  return true;
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  AbstractPlugin.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
 }
}
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomPanRegionCase$2");

exports = $2;

//# sourceMappingURL=ZoomPanRegionCase$2.js.map
