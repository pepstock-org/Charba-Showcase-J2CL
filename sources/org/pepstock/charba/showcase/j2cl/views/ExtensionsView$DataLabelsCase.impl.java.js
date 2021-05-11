goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$1$impl');
let $10 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$10$impl');
let $11 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$11$impl');
let $12 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$12$impl');
let $13 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$13$impl');
let $14 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$14$impl');
let $15 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$15$impl');
let $16 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$16$impl');
let $17 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$17$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$8$impl');
let $9 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DataLabelsCase>}
 * @implements {CaseItem}
 */
class DataLabelsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_;
 }
 /** @return {!DataLabelsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new DataLabelsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_;
 }
 /** @return {!DataLabelsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DataLabelsCase.$clinit();
  if ($Equality.$same(DataLabelsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_, null)) {
   DataLabelsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_ = $Enums.createMapFromValues(DataLabelsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DataLabelsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_);
 }
 /** @return {!Array<!DataLabelsCase>} */
 static m_values__() {
  DataLabelsCase.$clinit();
  return /**@type {!Array<DataLabelsCase>}*/ ($Arrays.$init([DataLabelsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_ON_GRADIENT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_DATA_AMONG_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_JOINING_DATASETS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_INDEXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_MIRRORING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_HOVERING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_SELECTING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_CALLBACKS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, DataLabelsCase.$static_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase], DataLabelsCase));
 }
 /** @return {!DataLabelsCase} */
 static get f_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_RADAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_ON_GRADIENT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_ON_GRADIENT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_DATA_AMONG_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_DATA_AMONG_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_JOINING_DATASETS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_JOINING_DATASETS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_INDEXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_INDEXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_MIRRORING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_MIRRORING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_HOVERING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_HOVERING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_SELECTING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_SELECTING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_CALLBACKS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_CALLBACKS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 /** @return {!DataLabelsCase} */
 static get f_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase() {
  return (DataLabelsCase.$clinit(), DataLabelsCase.$static_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase);
 }
 
 static $clinit() {
  DataLabelsCase.$clinit = () =>{};
  DataLabelsCase.$loadModules();
  Enum.$clinit();
  DataLabelsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BAR"), DataLabelsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Using on bar chart", $1.$create__());
  DataLabelsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("BUBBLE"), DataLabelsCase.$ordinal_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Using on bubble chart", $2.$create__());
  DataLabelsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("DOUGHNUT"), DataLabelsCase.$ordinal_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Using on doughnut chart", $3.$create__());
  DataLabelsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LINE"), DataLabelsCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Using on line chart", $4.$create__());
  DataLabelsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("POLAR"), DataLabelsCase.$ordinal_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Using on polar chart", $5.$create__());
  DataLabelsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("RADAR"), DataLabelsCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Using on radar chart", $6.$create__());
  DataLabelsCase.$static_ON_GRADIENT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("ON_GRADIENT"), DataLabelsCase.$ordinal_ON_GRADIENT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Applying labels on dataset with gradient", $7.$create__());
  DataLabelsCase.$static_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("INTERACTIONS"), DataLabelsCase.$ordinal_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Interactions among labels on line datasets", $8.$create__());
  DataLabelsCase.$static_DATA_AMONG_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("DATA_AMONG_LABELS"), DataLabelsCase.$ordinal_DATA_AMONG_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Managing data among on labels on line dataset", $9.$create__());
  DataLabelsCase.$static_JOINING_DATASETS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("JOINING_DATASETS"), DataLabelsCase.$ordinal_JOINING_DATASETS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Joining line datasets", $10.$create__());
  DataLabelsCase.$static_INDEXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("INDEXES"), DataLabelsCase.$ordinal_INDEXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Indexes and values on line datasets", $11.$create__());
  DataLabelsCase.$static_MIRRORING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("MIRRORING"), DataLabelsCase.$ordinal_MIRRORING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Mirroring labels on bar chart", $12.$create__());
  DataLabelsCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("EVENTS"), DataLabelsCase.$ordinal_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Listening events", $13.$create__());
  DataLabelsCase.$static_HOVERING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("HOVERING"), DataLabelsCase.$ordinal_HOVERING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Highlighting hovered labels", $14.$create__());
  DataLabelsCase.$static_SELECTING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("SELECTING"), DataLabelsCase.$ordinal_SELECTING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Selecting data by labels", $15.$create__());
  DataLabelsCase.$static_CALLBACKS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CALLBACKS"), DataLabelsCase.$ordinal_CALLBACKS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Customizing dataset labels on bar chart", $16.$create__());
  DataLabelsCase.$static_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = DataLabelsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("MULTIPLE_OPTIONS"), DataLabelsCase.$ordinal_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase, "Multiple options on pie chart", $17.$create__());
  DataLabelsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$1$impl');
  $10 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$10$impl');
  $11 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$11$impl');
  $12 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$12$impl');
  $13 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$13$impl');
  $14 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$14$impl');
  $15 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$15$impl');
  $16 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$16$impl');
  $17 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$17$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$8$impl');
  $9 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.DataLabelsCase.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_RADAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_ON_GRADIENT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_DATA_AMONG_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_JOINING_DATASETS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_INDEXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_MIRRORING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_HOVERING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_SELECTING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_CALLBACKS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@private {!DataLabelsCase}*/
DataLabelsCase.$static_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase;
/**@type {Map<?string, !DataLabelsCase>}*/
DataLabelsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase_;
/**@const {number}*/
DataLabelsCase.$ordinal_BAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 0;
/**@const {number}*/
DataLabelsCase.$ordinal_BUBBLE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 1;
/**@const {number}*/
DataLabelsCase.$ordinal_DOUGHNUT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 2;
/**@const {number}*/
DataLabelsCase.$ordinal_LINE__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 3;
/**@const {number}*/
DataLabelsCase.$ordinal_POLAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 4;
/**@const {number}*/
DataLabelsCase.$ordinal_RADAR__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 5;
/**@const {number}*/
DataLabelsCase.$ordinal_ON_GRADIENT__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 6;
/**@const {number}*/
DataLabelsCase.$ordinal_INTERACTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 7;
/**@const {number}*/
DataLabelsCase.$ordinal_DATA_AMONG_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 8;
/**@const {number}*/
DataLabelsCase.$ordinal_JOINING_DATASETS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 9;
/**@const {number}*/
DataLabelsCase.$ordinal_INDEXES__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 10;
/**@const {number}*/
DataLabelsCase.$ordinal_MIRRORING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 11;
/**@const {number}*/
DataLabelsCase.$ordinal_EVENTS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 12;
/**@const {number}*/
DataLabelsCase.$ordinal_HOVERING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 13;
/**@const {number}*/
DataLabelsCase.$ordinal_SELECTING__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 14;
/**@const {number}*/
DataLabelsCase.$ordinal_CALLBACKS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 15;
/**@const {number}*/
DataLabelsCase.$ordinal_MULTIPLE_OPTIONS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_DataLabelsCase = 16;
CaseItem.$markImplementor(DataLabelsCase);
$Util.$setClassMetadataForEnum(DataLabelsCase, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView$DataLabelsCase");

exports = DataLabelsCase;

//# sourceMappingURL=ExtensionsView$DataLabelsCase.js.map
