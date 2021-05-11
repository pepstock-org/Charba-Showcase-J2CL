goog.module('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.AbstractComposite$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let App = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.App$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class BaseComposite extends AbstractComposite {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite__();
 }
 
 m_removeDataset__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let datasets = chart.m_getData__().m_getDatasets__();
  if (datasets.size() > 1) {
   datasets.removeAtIndex(datasets.size() - 1 | 0);
   chart.m_update__();
  }
 }
 
 m_addData__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.m_addData__org_pepstock_charba_client_IsChart__boolean(chart, true);
 }
 
 m_addData__org_pepstock_charba_client_IsChart__boolean(/** IsChart */ chart, /** boolean */ negative) {
  if (this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite < 12) {
   chart.m_getData__().m_getLabels__().m_add__java_lang_String(this.m_getLabel__());
   this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite = this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite + 1 | 0;
   let datasets = chart.m_getData__().m_getDatasets__();
   for (let $iterator = datasets.m_iterator__(); $iterator.m_hasNext__(); ) {
    let ds = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     ds.m_getData__().add(this.m_getRandomDigit__boolean(negative));
    }
   }
   chart.m_update__();
  }
 }
 
 m_removeData__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite > 1) {
   this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite = this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite - 1 | 0;
   chart.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
   let datasets = chart.m_getData__().m_getDatasets__();
   for (let $iterator = datasets.m_iterator__(); $iterator.m_hasNext__(); ) {
    let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     dataset.m_getData__().removeAtIndex(dataset.m_getData__().size() - 1 | 0);
    }
   }
   chart.m_update__();
  }
 }
 /** @return {?string} */
 m_getUrl__() {
  let sb = StringBuilder.$create__java_lang_String(App.f_BASE_URL__org_pepstock_charba_showcase_j2cl_App);
  return sb.m_append__java_lang_String(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(this.m_getClass__().m_getName__(), ".", "/")).m_append__java_lang_String(".java").toString();
 }
 /** @return {Set<?string>} */
 m_getLabelColors__int(/** number */ count) {
  if (BaseComposite.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite_.isEmpty() || BaseComposite.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite_.size() < count) {
   for (let i = 0; i < count; i = i + 1 | 0) {
    BaseComposite.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite_.add(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(HtmlColor.m_values__()[i].name(), Constants.f_UNDERSCORE__org_pepstock_charba_client_commons_Constants, Constants.f_BLANK__org_pepstock_charba_client_commons_Constants));
   }
  }
  return BaseComposite.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite_;
 }
 
 static $clinit() {
  BaseComposite.$clinit = () =>{};
  BaseComposite.$loadModules();
  AbstractComposite.$clinit();
  BaseComposite.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite_ = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseComposite;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  App = goog.module.get('org.pepstock.charba.showcase.j2cl.App$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Set<?string>}*/
BaseComposite.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite_;
$Util.$setClassMetadata(BaseComposite, "org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite");

exports = BaseComposite;

//# sourceMappingURL=BaseComposite.js.map
