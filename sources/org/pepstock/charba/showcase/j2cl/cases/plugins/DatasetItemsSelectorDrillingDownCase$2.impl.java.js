goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetRangeSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler$impl');

let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let DatasetRangeSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
let DatasetItemsSelectorDrillingDownCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase$impl');

/**
 * @implements {DatasetRangeSelectionEventHandler}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetItemsSelectorDrillingDownCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase(/** DatasetItemsSelectorDrillingDownCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase(/** DatasetItemsSelectorDrillingDownCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onSelect__org_pepstock_charba_client_events_DatasetRangeSelectionEvent(/** DatasetRangeSelectionEvent */ event) {
  if (this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.disabled) {
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_DARK_MAGENTA__org_pepstock_charba_client_colors_HtmlColor);
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2.f_dataset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_DARK_MAGENTA__org_pepstock_charba_client_colors_HtmlColor);
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setMin__java_util_Date(event.m_getFrom__().m_getValueAsDate__());
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setMax__java_util_Date(event.m_getTo__().m_getValueAsDate__());
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2.f_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(TimeUnit.f_HOUR__org_pepstock_charba_client_enums_TimeUnit);
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2.f_pOptions__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_setEnabled__boolean(false);
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_getOptions__().m_getPlugins__().m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2.f_pOptions__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_);
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_reconfigure__();
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_2.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.disabled = false;
  }
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
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
 }
}
DatasetRangeSelectionEventHandler.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase$2");

exports = $2;

//# sourceMappingURL=DatasetItemsSelectorDrillingDownCase$2.js.map
