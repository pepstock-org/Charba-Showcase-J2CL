goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationCase.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let AnnotationBuilder = goog.forwardDeclare('org.pepstock.charba.client.utils.AnnotationBuilder$impl');
let HTMLAnnnotationCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLAnnnotationCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1;
  /**@type {BarDataset}*/
  this.$captured_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1;
  /**@type {LineDataset}*/
  this.$captured_dataset2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_data_LineDataset__java_lang_String(/** HTMLAnnnotationCase */ $outer_this, /** BarDataset */ $captured_dataset1, /** LineDataset */ $captured_dataset2, /** ?string */ $_0) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_data_LineDataset__java_lang_String($outer_this, $captured_dataset1, $captured_dataset2, $_0);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_data_LineDataset__java_lang_String(/** HTMLAnnnotationCase */ $outer_this, /** BarDataset */ $captured_dataset1, /** LineDataset */ $captured_dataset2, /** ?string */ $_0) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1 = $outer_this;
  this.$captured_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1 = $captured_dataset1;
  this.$captured_dataset2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1 = $captured_dataset2;
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String($_0);
 }
 /** @override */
 m_onAfterDraw__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let ctx = $Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(chart.m_getCanvas__());
  let node = chart.m_getNode__();
  let chartArea = node.m_getChartArea__();
  let scaleItem = /**@type {ScaleItem}*/ ($Casts.$to(node.m_getScales__().m_getItems__().get(DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId.m_value__()), ScaleItem));
  let topRaster = chartArea.m_getBottom__() + scaleItem.m_getHeight__();
  let heightRaster = chart.m_getCanvas__().offsetHeight - topRaster - 5;
  let areaCount = scaleItem.m_getTicks__().size();
  let scaleTickX = chartArea.m_getLeft__();
  let scaleTickLength = scaleItem.m_getWidth__() / areaCount;
  for (let i = 0; i < areaCount; i = i + 1 | 0) {
   let humidity = Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(this.$captured_dataset1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1.m_getData__().getAtIndex(i), Double)));
   let temperature = Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(this.$captured_dataset2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1.m_getData__().getAtIndex(i), Double)));
   let result = $1.f_ANNOTATION_TEMPLATE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1_;
   result = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(result, "\\{0\\}", HTMLAnnnotationCase.f_SUN_BASE64__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_);
   result = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(result, "\\{1\\}", j_l_String.m_valueOf__double(temperature));
   result = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(result, "\\{2\\}", j_l_String.m_valueOf__double(humidity));
   let img = AnnotationBuilder.m_build__java_lang_String__double__double(result, scaleTickLength - 4, heightRaster);
   Context2dItem_$Overlay.m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__double__double(ctx, img, scaleTickX + 2, topRaster);
   scaleTickX = scaleTickX + scaleTickLength;
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
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  AnnotationBuilder = goog.module.get('org.pepstock.charba.client.utils.AnnotationBuilder$impl');
  HTMLAnnnotationCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationCase$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
$1.f_ANNOTATION_TEMPLATE__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_1_ = "<center><table width=\"100%\" height=\"100%\" style=\"background-color: lightGray;\"><tr><th><img src=\"{0}\"></img></th></tr><tr align=\"center\"><td>Temperature</td><td>{1}</td></tr><tr align=\"center\"><td>Humidity</td><td>{2}</td></tr></table></center>";
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationCase$1");

exports = $1;

//# sourceMappingURL=HTMLAnnnotationCase$1.js.map
