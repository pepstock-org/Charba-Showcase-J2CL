goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendId$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.RegExpResult.$Overlay$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class HtmlLegendId extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_chartId__org_pepstock_charba_client_impl_plugins_HtmlLegendId_;
  /**@type {number}*/
  this.f_datasetIndex__org_pepstock_charba_client_impl_plugins_HtmlLegendId_ = 0;
  /**@type {number}*/
  this.f_index__org_pepstock_charba_client_impl_plugins_HtmlLegendId_ = 0;
 }
 /** @return {!HtmlLegendId} */
 static $create__java_lang_String__int__int(/** ?string */ chartId, /** number */ datasetIndex, /** number */ index) {
  let $instance = new HtmlLegendId();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendId__java_lang_String__int__int(chartId, datasetIndex, index);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendId__java_lang_String__int__int(/** ?string */ chartId, /** number */ datasetIndex, /** number */ index) {
  this.$ctor__java_lang_Object__();
  this.f_chartId__org_pepstock_charba_client_impl_plugins_HtmlLegendId_ = chartId;
  this.f_datasetIndex__org_pepstock_charba_client_impl_plugins_HtmlLegendId_ = Undefined.m_is__int(datasetIndex) ? Integer.f_MAX_VALUE__java_lang_Integer : datasetIndex;
  this.f_index__org_pepstock_charba_client_impl_plugins_HtmlLegendId_ = Undefined.m_is__int(index) ? Integer.f_MAX_VALUE__java_lang_Integer : index;
 }
 /** @return {HtmlLegendId} */
 static m_get__java_lang_String__int__int(/** ?string */ chartId, /** number */ datasetIndex, /** number */ index) {
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(chartId, "Chart id argument");
  return HtmlLegendId.$create__java_lang_String__int__int(chartId, datasetIndex, index);
 }
 /** @return {HtmlLegendId} */
 static m_get__java_lang_String(/** ?string */ elementId) {
  if (!$Equality.$same(elementId, null)) {
   let matcher = HtmlLegendId.f_REGEXP_ID__org_pepstock_charba_client_impl_plugins_HtmlLegendId_.exec(elementId);
   let matchFound = !$Equality.$same(matcher, null);
   if (matchFound && matcher.length == 5) {
    let chartId = null;
    let datasetIndex = Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
    let index = Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
    for (let i = 1; i < matcher.length; i = i + 1 | 0) {
     let groupStr = $Overlay.m_get__$devirt__org_pepstock_charba_client_utils_RegExpResult__int(matcher, i);
     switch (i) {
      case 1: 
       chartId = groupStr;
       break;
      case 2: 
       datasetIndex = Integer.m_parseInt__java_lang_String(groupStr);
       break;
      case 3: 
       index = Integer.m_parseInt__java_lang_String(groupStr);
       break;
      default: 
       break;
     }
    }
    return HtmlLegendId.m_get__java_lang_String__int__int(chartId, datasetIndex, index);
   }
  }
  return null;
 }
 /** @return {HtmlLegendId} */
 static m_get__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem(/** IsChart */ chart, /** LegendItem */ item) {
  HtmlLegendId.$clinit();
  return HtmlLegendId.m_get__java_lang_String__int__int(IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) ? chart.m_getId__() : null, item.m_getDatasetIndex__(), item.m_getIndex__());
 }
 /** @return {HtmlLegendId} */
 static m_get__org_pepstock_charba_client_dom_BaseHtmlElement(/** HTMLElement */ element) {
  HtmlLegendId.$clinit();
  if (!$Equality.$same(element, null)) {
   return HtmlLegendId.m_get__java_lang_String(element.id);
  }
  return null;
 }
 /** @return {?string} */
 m_getChartId___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.f_chartId__org_pepstock_charba_client_impl_plugins_HtmlLegendId_;
 }
 /** @return {?string} */
 m_getIdForColor___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getIdForColumn__boolean_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendId(true);
 }
 /** @return {?string} */
 m_getIdForLabel___$pp_org_pepstock_charba_client_impl_plugins() {
  return this.m_getIdForColumn__boolean_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendId(false);
 }
 /** @return {?string} */
 m_getIdForColumn__boolean_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendId(/** boolean */ isColor) {
  if (isColor) {
   return Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(HtmlLegendId.f_COLOR_COLUMN_ID_TEMPLATE__org_pepstock_charba_client_impl_plugins_HtmlLegendId_, [this.f_chartId__org_pepstock_charba_client_impl_plugins_HtmlLegendId_, Integer.m_valueOf__int(this.f_datasetIndex__org_pepstock_charba_client_impl_plugins_HtmlLegendId_), Integer.m_valueOf__int(this.f_index__org_pepstock_charba_client_impl_plugins_HtmlLegendId_)]);
  } else {
   return Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(HtmlLegendId.f_LABEL_COLUMN_ID_TEMPLATE__org_pepstock_charba_client_impl_plugins_HtmlLegendId_, [this.f_chartId__org_pepstock_charba_client_impl_plugins_HtmlLegendId_, Integer.m_valueOf__int(this.f_datasetIndex__org_pepstock_charba_client_impl_plugins_HtmlLegendId_), Integer.m_valueOf__int(this.f_index__org_pepstock_charba_client_impl_plugins_HtmlLegendId_)]);
  }
 }
 /** @return {LegendItem} */
 m_lookForLegendItem__java_util_List_$pp_org_pepstock_charba_client_impl_plugins(/** List<LegendLabelItem> */ legendItems) {
  if (!$Equality.$same(legendItems, null) && !legendItems.isEmpty()) {
   for (let $iterator = legendItems.m_iterator__(); $iterator.m_hasNext__(); ) {
    let item = /**@type {LegendLabelItem}*/ ($Casts.$to($iterator.m_next__(), LegendLabelItem));
    {
     let legendDatasetIndex = Undefined.m_is__int(item.m_getDatasetIndex__()) ? Integer.f_MAX_VALUE__java_lang_Integer : item.m_getDatasetIndex__();
     let legendIndex = Undefined.m_is__int(item.m_getIndex__()) ? Integer.f_MAX_VALUE__java_lang_Integer : item.m_getIndex__();
     if (legendDatasetIndex == this.f_datasetIndex__org_pepstock_charba_client_impl_plugins_HtmlLegendId_ && legendIndex == this.f_index__org_pepstock_charba_client_impl_plugins_HtmlLegendId_) {
      return item;
     }
    }
   }
  }
  return null;
 }
 
 static $clinit() {
  HtmlLegendId.$clinit = () =>{};
  HtmlLegendId.$loadModules();
  j_l_Object.$clinit();
  HtmlLegendId.f_REGEXP_ID__org_pepstock_charba_client_impl_plugins_HtmlLegendId_ = new RegExp(HtmlLegendId.f_REGEXP_ID_PATTERN__org_pepstock_charba_client_impl_plugins_HtmlLegendId_);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendId;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  LegendLabelItem = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.utils.RegExpResult.$Overlay$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
HtmlLegendId.f_LABEL_COLUMN_ID_TEMPLATE__org_pepstock_charba_client_impl_plugins_HtmlLegendId_ = "{0}_{1}_{2}_label";
/**@const {?string}*/
HtmlLegendId.f_COLOR_COLUMN_ID_TEMPLATE__org_pepstock_charba_client_impl_plugins_HtmlLegendId_ = "{0}_{1}_{2}_color";
/**@const {?string}*/
HtmlLegendId.f_REGEXP_ID_PATTERN__org_pepstock_charba_client_impl_plugins_HtmlLegendId_ = "(\\S+)_(\\d+)_(\\d+)_(\\S+)";
/**@type {RegExp}*/
HtmlLegendId.f_REGEXP_ID__org_pepstock_charba_client_impl_plugins_HtmlLegendId_;
$Util.$setClassMetadata(HtmlLegendId, "org.pepstock.charba.client.impl.plugins.HtmlLegendId");

exports = HtmlLegendId;

//# sourceMappingURL=HtmlLegendId.js.map
