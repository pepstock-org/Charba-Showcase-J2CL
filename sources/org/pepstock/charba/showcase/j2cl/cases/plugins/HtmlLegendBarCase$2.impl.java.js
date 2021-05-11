goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendBarCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlLegendTitleCallback = goog.require('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let LegendTitle = goog.forwardDeclare('org.pepstock.charba.client.configuration.LegendTitle$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtmlBuilder$impl');
let HtmlLegendBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendBarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HtmlLegendTitleCallback}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HtmlLegendBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_2;
  /**@type {Map<?string, SafeHtml>}*/
  this.f_values__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase(/** HtmlLegendBarCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_2__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_2__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase(/** HtmlLegendBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_2();
 }
 /** @return {SafeHtml} */
 m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_LegendTitle__java_lang_String(/** IsChart */ chart, /** LegendTitle */ item, /** ?string */ currentText) {
  if (!this.f_values__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_2.containsKey(currentText)) {
   let builder = SafeHtmlBuilder.m_create__();
   let newText = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(currentText, "dataset", "<b>dataset</b>");
   newText = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(newText, "the title", "<font style='color: " + j_l_String.m_valueOf__java_lang_Object(HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor.m_toRGBA__()) + "'>the title</font>");
   builder.m_appendHtmlConstant__java_lang_String(newText);
   this.f_values__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_2.put(currentText, builder.m_toSafeHtml__());
  }
  return /**@type {SafeHtml}*/ ($Casts.$to(this.f_values__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_2.get(currentText), SafeHtml));
 }
 //Bridge method.
 /** @override @return {SafeHtml} */
 m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__java_lang_String(/** IsChart */ arg0, /** LegendTitle */ arg1, /** ?string */ arg2) {
  return this.m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_LegendTitle__java_lang_String(arg0, /**@type {LegendTitle}*/ ($Casts.$to(arg1, LegendTitle)), arg2);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_2() {
  this.f_values__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendBarCase_2 = /**@type {!HashMap<?string, SafeHtml>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  LegendTitle = goog.module.get('org.pepstock.charba.client.configuration.LegendTitle$impl');
  SafeHtml = goog.module.get('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
  SafeHtmlBuilder = goog.module.get('org.pepstock.charba.client.dom.safehtml.SafeHtmlBuilder$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HtmlLegendTitleCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendBarCase$2");

exports = $2;

//# sourceMappingURL=HtmlLegendBarCase$2.js.map
