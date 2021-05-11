goog.module('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$7$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DatasetItemsSelectorCase>}
 * @implements {CaseItem}
 */
class DatasetItemsSelectorCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_;
 }
 /** @return {!DatasetItemsSelectorCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new DatasetItemsSelectorCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_;
 }
 /** @return {!DatasetItemsSelectorCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DatasetItemsSelectorCase.$clinit();
  if ($Equality.$same(DatasetItemsSelectorCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_, null)) {
   DatasetItemsSelectorCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_ = $Enums.createMapFromValues(DatasetItemsSelectorCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DatasetItemsSelectorCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_);
 }
 /** @return {!Array<!DatasetItemsSelectorCase>} */
 static m_values__() {
  DatasetItemsSelectorCase.$clinit();
  return /**@type {!Array<DatasetItemsSelectorCase>}*/ ($Arrays.$init([DatasetItemsSelectorCase.$static_SELECTIONG_ON_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, DatasetItemsSelectorCase.$static_SELECTIONG_ON_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, DatasetItemsSelectorCase.$static_SELECTIONG_ON_SCATTER__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, DatasetItemsSelectorCase.$static_SELECTIONG_ON_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, DatasetItemsSelectorCase.$static_SELECTIONG_ON_BAR_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, DatasetItemsSelectorCase.$static_ZOOMING__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, DatasetItemsSelectorCase.$static_DRILLING_DOWN__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase], DatasetItemsSelectorCase));
 }
 /** @return {!DatasetItemsSelectorCase} */
 static get f_SELECTIONG_ON_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase() {
  return (DatasetItemsSelectorCase.$clinit(), DatasetItemsSelectorCase.$static_SELECTIONG_ON_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase);
 }
 /** @return {!DatasetItemsSelectorCase} */
 static get f_SELECTIONG_ON_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase() {
  return (DatasetItemsSelectorCase.$clinit(), DatasetItemsSelectorCase.$static_SELECTIONG_ON_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase);
 }
 /** @return {!DatasetItemsSelectorCase} */
 static get f_SELECTIONG_ON_SCATTER__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase() {
  return (DatasetItemsSelectorCase.$clinit(), DatasetItemsSelectorCase.$static_SELECTIONG_ON_SCATTER__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase);
 }
 /** @return {!DatasetItemsSelectorCase} */
 static get f_SELECTIONG_ON_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase() {
  return (DatasetItemsSelectorCase.$clinit(), DatasetItemsSelectorCase.$static_SELECTIONG_ON_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase);
 }
 /** @return {!DatasetItemsSelectorCase} */
 static get f_SELECTIONG_ON_BAR_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase() {
  return (DatasetItemsSelectorCase.$clinit(), DatasetItemsSelectorCase.$static_SELECTIONG_ON_BAR_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase);
 }
 /** @return {!DatasetItemsSelectorCase} */
 static get f_ZOOMING__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase() {
  return (DatasetItemsSelectorCase.$clinit(), DatasetItemsSelectorCase.$static_ZOOMING__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase);
 }
 /** @return {!DatasetItemsSelectorCase} */
 static get f_DRILLING_DOWN__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase() {
  return (DatasetItemsSelectorCase.$clinit(), DatasetItemsSelectorCase.$static_DRILLING_DOWN__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase);
 }
 
 static $clinit() {
  DatasetItemsSelectorCase.$clinit = () =>{};
  DatasetItemsSelectorCase.$loadModules();
  Enum.$clinit();
  DatasetItemsSelectorCase.$static_SELECTIONG_ON_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = DatasetItemsSelectorCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("SELECTIONG_ON_BAR"), DatasetItemsSelectorCase.$ordinal_SELECTIONG_ON_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, "Selecting on bar chart", $1.$create__());
  DatasetItemsSelectorCase.$static_SELECTIONG_ON_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = DatasetItemsSelectorCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("SELECTIONG_ON_LINE"), DatasetItemsSelectorCase.$ordinal_SELECTIONG_ON_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, "Selecting on line chart", $2.$create__());
  DatasetItemsSelectorCase.$static_SELECTIONG_ON_SCATTER__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = DatasetItemsSelectorCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("SELECTIONG_ON_SCATTER"), DatasetItemsSelectorCase.$ordinal_SELECTIONG_ON_SCATTER__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, "Selecting on scatter chart", $3.$create__());
  DatasetItemsSelectorCase.$static_SELECTIONG_ON_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = DatasetItemsSelectorCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("SELECTIONG_ON_BUBBLE"), DatasetItemsSelectorCase.$ordinal_SELECTIONG_ON_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, "Selecting on bubble chart", $4.$create__());
  DatasetItemsSelectorCase.$static_SELECTIONG_ON_BAR_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = DatasetItemsSelectorCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("SELECTIONG_ON_BAR_TIME_SERIES"), DatasetItemsSelectorCase.$ordinal_SELECTIONG_ON_BAR_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, "Selecting on timeseries bar chart", $5.$create__());
  DatasetItemsSelectorCase.$static_ZOOMING__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = DatasetItemsSelectorCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ZOOMING"), DatasetItemsSelectorCase.$ordinal_ZOOMING__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, "Zooming on timeseries line chart", $6.$create__());
  DatasetItemsSelectorCase.$static_DRILLING_DOWN__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = DatasetItemsSelectorCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("DRILLING_DOWN"), DatasetItemsSelectorCase.$ordinal_DRILLING_DOWN__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase, "Drilling down on timeseries chart", $7.$create__());
  DatasetItemsSelectorCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetItemsSelectorCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView.DatasetItemsSelectorCase.$7$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DatasetItemsSelectorCase}*/
DatasetItemsSelectorCase.$static_SELECTIONG_ON_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase;
/**@private {!DatasetItemsSelectorCase}*/
DatasetItemsSelectorCase.$static_SELECTIONG_ON_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase;
/**@private {!DatasetItemsSelectorCase}*/
DatasetItemsSelectorCase.$static_SELECTIONG_ON_SCATTER__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase;
/**@private {!DatasetItemsSelectorCase}*/
DatasetItemsSelectorCase.$static_SELECTIONG_ON_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase;
/**@private {!DatasetItemsSelectorCase}*/
DatasetItemsSelectorCase.$static_SELECTIONG_ON_BAR_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase;
/**@private {!DatasetItemsSelectorCase}*/
DatasetItemsSelectorCase.$static_ZOOMING__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase;
/**@private {!DatasetItemsSelectorCase}*/
DatasetItemsSelectorCase.$static_DRILLING_DOWN__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase;
/**@type {Map<?string, !DatasetItemsSelectorCase>}*/
DatasetItemsSelectorCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase_;
/**@const {number}*/
DatasetItemsSelectorCase.$ordinal_SELECTIONG_ON_BAR__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = 0;
/**@const {number}*/
DatasetItemsSelectorCase.$ordinal_SELECTIONG_ON_LINE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = 1;
/**@const {number}*/
DatasetItemsSelectorCase.$ordinal_SELECTIONG_ON_SCATTER__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = 2;
/**@const {number}*/
DatasetItemsSelectorCase.$ordinal_SELECTIONG_ON_BUBBLE__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = 3;
/**@const {number}*/
DatasetItemsSelectorCase.$ordinal_SELECTIONG_ON_BAR_TIME_SERIES__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = 4;
/**@const {number}*/
DatasetItemsSelectorCase.$ordinal_ZOOMING__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = 5;
/**@const {number}*/
DatasetItemsSelectorCase.$ordinal_DRILLING_DOWN__org_pepstock_charba_showcase_j2cl_views_PluginsView_DatasetItemsSelectorCase = 6;
CaseItem.$markImplementor(DatasetItemsSelectorCase);
$Util.$setClassMetadataForEnum(DatasetItemsSelectorCase, "org.pepstock.charba.showcase.j2cl.views.PluginsView$DatasetItemsSelectorCase");

exports = DatasetItemsSelectorCase;

//# sourceMappingURL=PluginsView$DatasetItemsSelectorCase.js.map
