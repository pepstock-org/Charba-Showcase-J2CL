goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendCustomCallbackCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlLegendItemCallback = goog.require('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtmlBuilder$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let HtmlLegendCustomCallbackCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendCustomCallbackCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HtmlLegendItemCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HtmlLegendCustomCallbackCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase_1;
  /**@type {Map<?string, SafeHtml>}*/
  this.f_values__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase(/** HtmlLegendCustomCallbackCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase(/** HtmlLegendCustomCallbackCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase_1();
 }
 /** @return {SafeHtml} */
 m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendLabelItem__java_lang_String(/** IsChart */ chart, /** LegendLabelItem */ item, /** ?string */ currentText) {
  if (!this.f_values__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase_1.containsKey(currentText)) {
   let builder = SafeHtmlBuilder.m_create__();
   let newText = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(currentText, "dataset", "<b>dataset</b>");
   newText = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(newText, "which contains data", "<font style='color: " + j_l_String.m_valueOf__java_lang_Object(item.m_getStrokeStyle__().m_toRGBA__()) + "'>which contains data</font>");
   builder.m_appendHtmlConstant__java_lang_String(newText);
   this.f_values__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase_1.put(currentText, builder.m_toSafeHtml__());
  }
  return /**@type {SafeHtml}*/ ($Casts.$to(this.f_values__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase_1.get(currentText), SafeHtml));
 }
 //Bridge method.
 /** @override @return {SafeHtml} */
 m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__java_lang_String(/** IsChart */ arg0, /** LegendLabelItem */ arg1, /** ?string */ arg2) {
  return this.m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendLabelItem__java_lang_String(arg0, /**@type {LegendLabelItem}*/ ($Casts.$to(arg1, LegendLabelItem)), arg2);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase_1() {
  this.f_values__org_pepstock_charba_showcase_j2cl_cases_plugins_HtmlLegendCustomCallbackCase_1 = /**@type {!HashMap<?string, SafeHtml>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  SafeHtml = goog.module.get('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
  SafeHtmlBuilder = goog.module.get('org.pepstock.charba.client.dom.safehtml.SafeHtmlBuilder$impl');
  LegendLabelItem = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HtmlLegendItemCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendCustomCallbackCase$1");

exports = $1;

//# sourceMappingURL=HtmlLegendCustomCallbackCase$1.js.map
