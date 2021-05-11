goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let TextBaseline = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let StandingPluginOnLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
  /**@type {StandingPluginOnLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase__java_lang_String(/** StandingPluginOnLineCase */ $outer_this, /** ?string */ $_0) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase__java_lang_String($outer_this, $_0);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase__java_lang_String(/** StandingPluginOnLineCase */ $outer_this, /** ?string */ $_0) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_2 = $outer_this;
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String($_0);
 }
 /** @override */
 m_onAfterDatasetsDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let padding = 30;
  let datasetsCount = chart.m_getData__().m_getDatasets__().size();
  let ctx = $Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(chart.m_getCanvas__());
  let scaleX = /**@type {ScaleItem}*/ ($Casts.$to(chart.m_getNode__().m_getScales__().m_getItems__().get(DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId.m_value__()), ScaleItem));
  let scaleY = /**@type {ScaleItem}*/ ($Casts.$to(chart.m_getNode__().m_getScales__().m_getItems__().get(DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId.m_value__()), ScaleItem));
  let heightAmongLabels = (scaleY.m_getBottom__() - scaleY.m_getTop__()) / (datasetsCount - 1 | 0);
  let x = scaleX.m_getRight__() + padding;
  let y = scaleY.m_getTop__();
  for (let i = 0; i < datasetsCount; i = i + 1 | 0) {
   let index = i + 1 | 0;
   Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, "rgb(0, 0, 0)");
   ctx.font = "22px bold Helvetica Neue";
   Context2dItem_$Overlay.m_setTextAlign__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_enums_TextAlign(ctx, TextAlign.f_CENTER__org_pepstock_charba_client_enums_TextAlign);
   Context2dItem_$Overlay.m_setTextBaseline__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_enums_TextBaseline(ctx, TextBaseline.f_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline);
   ctx.fillText(j_l_String.m_valueOf__int(index), x, y);
   y = y + heightAmongLabels;
  }
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
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  TextBaseline = goog.module.get('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase$2");

exports = $2;

//# sourceMappingURL=StandingPluginOnLineCase$2.js.map
