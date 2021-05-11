goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.SimpleLabelPluginOnBarCase.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let TextBaseline = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let SimpleLabelPluginOnBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.SimpleLabelPluginOnBarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class $1 extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
  /**@type {SimpleLabelPluginOnBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SimpleLabelPluginOnBarCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SimpleLabelPluginOnBarCase__java_lang_String(/** SimpleLabelPluginOnBarCase */ $outer_this, /** ?string */ $_0) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SimpleLabelPluginOnBarCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SimpleLabelPluginOnBarCase__java_lang_String($outer_this, $_0);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SimpleLabelPluginOnBarCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SimpleLabelPluginOnBarCase__java_lang_String(/** SimpleLabelPluginOnBarCase */ $outer_this, /** ?string */ $_0) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_SimpleLabelPluginOnBarCase_1 = $outer_this;
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String($_0);
 }
 /** @override */
 m_onAfterDatasetsDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let fontSize = Defaults.m_get__().m_getGlobal__().m_getFont__().m_getSize__();
  let padding = 5;
  let ctx = $Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(chart.m_getCanvas__());
  let dss = chart.m_getData__().m_getDatasets__();
  for (let i = 0; i < dss.size(); i = i + 1 | 0) {
   let item = chart.m_getDatasetItem__int(i);
   if (!item.m_isHidden__()) {
    let ds = /**@type {Dataset}*/ ($Casts.$to(dss.getAtIndex(i), Dataset));
    let elements = item.m_getElements__();
    for (let k = 0; k < elements.size(); k = k + 1 | 0) {
     let elem = /**@type {DatasetElement}*/ ($Casts.$to(elements.getAtIndex(k), DatasetElement));
     let dataString = Double.m_toString__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ds.m_getData__().getAtIndex(k), Double)));
     Context2dItem_$Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(ctx, "rgb(0, 0, 0)");
     let fontString = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_enums_FontStyle__org_pepstock_charba_client_enums_Weight__int__java_lang_String__java_lang_String(FontStyle.f_NORMAL__org_pepstock_charba_client_enums_FontStyle, Weight.f_NORMAL__org_pepstock_charba_client_enums_Weight, fontSize, null, Defaults.m_get__().m_getGlobal__().m_getFont__().m_getFamily__());
     ctx.font = fontString;
     Context2dItem_$Overlay.m_setTextAlign__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_enums_TextAlign(ctx, TextAlign.f_CENTER__org_pepstock_charba_client_enums_TextAlign);
     Context2dItem_$Overlay.m_setTextBaseline__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_enums_TextBaseline(ctx, TextBaseline.f_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline);
     ctx.fillText(dataString, elem.m_getX__(), elem.m_getY__() - $Primitives.$coerceDivision(fontSize / 2) - padding);
    }
   }
  }
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  AbstractPlugin.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  TextBaseline = goog.module.get('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
  FontStyle = goog.module.get('org.pepstock.charba.client.enums.FontStyle$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.SimpleLabelPluginOnBarCase$1");

exports = $1;

//# sourceMappingURL=SimpleLabelPluginOnBarCase$1.js.map
