goog.module('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CaseItem = goog.require('org.pepstock.charba.showcase.j2cl.cases.CaseItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CaseFactory = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.CaseFactory$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$2$impl');
let $3 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$3$impl');
let $4 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$4$impl');
let $5 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$5$impl');
let $6 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$6$impl');
let $7 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$7$impl');
let $8 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$8$impl');
let $9 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<EventsCase>}
 * @implements {CaseItem}
 */
class EventsCase extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase_;
  /**@type {CaseFactory}*/
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase_;
 }
 /** @return {!EventsCase} */
 static $create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  let $instance = new EventsCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($name, $ordinal, label, factory);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** CaseFactory */ factory) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase_ = label;
  this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase_ = factory;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase_;
 }
 /** @override @return {CaseFactory} */
 m_getFactory__() {
  return this.f_factory__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase_;
 }
 /** @return {!EventsCase} */
 static m_valueOf__java_lang_String(/** string */ name) {
  EventsCase.$clinit();
  if ($Equality.$same(EventsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase_, null)) {
   EventsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase_ = $Enums.createMapFromValues(EventsCase.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, EventsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase_);
 }
 /** @return {!Array<!EventsCase>} */
 static m_values__() {
  EventsCase.$clinit();
  return /**@type {!Array<EventsCase>}*/ ($Arrays.$init([EventsCase.$static_CHART_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, EventsCase.$static_CHART_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, EventsCase.$static_CHART_RESIZE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, EventsCase.$static_DATASET_SELECTION_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, EventsCase.$static_DATASET_SELECTION_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, EventsCase.$static_LEGEND_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, EventsCase.$static_LEGEND_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, EventsCase.$static_TITLE_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, EventsCase.$static_AXES_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase], EventsCase));
 }
 /** @return {!EventsCase} */
 static get f_CHART_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase() {
  return (EventsCase.$clinit(), EventsCase.$static_CHART_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase);
 }
 /** @return {!EventsCase} */
 static get f_CHART_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase() {
  return (EventsCase.$clinit(), EventsCase.$static_CHART_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase);
 }
 /** @return {!EventsCase} */
 static get f_CHART_RESIZE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase() {
  return (EventsCase.$clinit(), EventsCase.$static_CHART_RESIZE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase);
 }
 /** @return {!EventsCase} */
 static get f_DATASET_SELECTION_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase() {
  return (EventsCase.$clinit(), EventsCase.$static_DATASET_SELECTION_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase);
 }
 /** @return {!EventsCase} */
 static get f_DATASET_SELECTION_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase() {
  return (EventsCase.$clinit(), EventsCase.$static_DATASET_SELECTION_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase);
 }
 /** @return {!EventsCase} */
 static get f_LEGEND_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase() {
  return (EventsCase.$clinit(), EventsCase.$static_LEGEND_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase);
 }
 /** @return {!EventsCase} */
 static get f_LEGEND_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase() {
  return (EventsCase.$clinit(), EventsCase.$static_LEGEND_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase);
 }
 /** @return {!EventsCase} */
 static get f_TITLE_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase() {
  return (EventsCase.$clinit(), EventsCase.$static_TITLE_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase);
 }
 /** @return {!EventsCase} */
 static get f_AXES_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase() {
  return (EventsCase.$clinit(), EventsCase.$static_AXES_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase);
 }
 
 static $clinit() {
  EventsCase.$clinit = () =>{};
  EventsCase.$loadModules();
  Enum.$clinit();
  EventsCase.$static_CHART_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = EventsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CHART_CLICK"), EventsCase.$ordinal_CHART_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, "Chart click events", $1.$create__());
  EventsCase.$static_CHART_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = EventsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CHART_HOVER"), EventsCase.$ordinal_CHART_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, "Chart hover events", $2.$create__());
  EventsCase.$static_CHART_RESIZE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = EventsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("CHART_RESIZE"), EventsCase.$ordinal_CHART_RESIZE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, "Chart resize events", $3.$create__());
  EventsCase.$static_DATASET_SELECTION_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = EventsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("DATASET_SELECTION_BAR"), EventsCase.$ordinal_DATASET_SELECTION_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, "Selecting dataset on bar chart", $4.$create__());
  EventsCase.$static_DATASET_SELECTION_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = EventsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("DATASET_SELECTION_PIE"), EventsCase.$ordinal_DATASET_SELECTION_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, "Selecting dataset on pie chart", $5.$create__());
  EventsCase.$static_LEGEND_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = EventsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LEGEND_CLICK"), EventsCase.$ordinal_LEGEND_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, "Legend click events", $6.$create__());
  EventsCase.$static_LEGEND_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = EventsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("LEGEND_HOVER"), EventsCase.$ordinal_LEGEND_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, "Legend hover and leave events", $7.$create__());
  EventsCase.$static_TITLE_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = EventsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("TITLE_EVENTS"), EventsCase.$ordinal_TITLE_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, "Title events", $8.$create__());
  EventsCase.$static_AXES_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = EventsCase.$create__java_lang_String__int__java_lang_String__org_pepstock_charba_showcase_j2cl_cases_CaseFactory($Util.$makeEnumName("AXES_EVENTS"), EventsCase.$ordinal_AXES_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase, "Axes events", $9.$create__());
  EventsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventsCase;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$2$impl');
  $3 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$3$impl');
  $4 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$4$impl');
  $5 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$5$impl');
  $6 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$6$impl');
  $7 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$7$impl');
  $8 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$8$impl');
  $9 = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.EventsCase.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!EventsCase}*/
EventsCase.$static_CHART_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase;
/**@private {!EventsCase}*/
EventsCase.$static_CHART_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase;
/**@private {!EventsCase}*/
EventsCase.$static_CHART_RESIZE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase;
/**@private {!EventsCase}*/
EventsCase.$static_DATASET_SELECTION_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase;
/**@private {!EventsCase}*/
EventsCase.$static_DATASET_SELECTION_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase;
/**@private {!EventsCase}*/
EventsCase.$static_LEGEND_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase;
/**@private {!EventsCase}*/
EventsCase.$static_LEGEND_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase;
/**@private {!EventsCase}*/
EventsCase.$static_TITLE_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase;
/**@private {!EventsCase}*/
EventsCase.$static_AXES_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase;
/**@type {Map<?string, !EventsCase>}*/
EventsCase.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase_;
/**@const {number}*/
EventsCase.$ordinal_CHART_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = 0;
/**@const {number}*/
EventsCase.$ordinal_CHART_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = 1;
/**@const {number}*/
EventsCase.$ordinal_CHART_RESIZE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = 2;
/**@const {number}*/
EventsCase.$ordinal_DATASET_SELECTION_BAR__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = 3;
/**@const {number}*/
EventsCase.$ordinal_DATASET_SELECTION_PIE__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = 4;
/**@const {number}*/
EventsCase.$ordinal_LEGEND_CLICK__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = 5;
/**@const {number}*/
EventsCase.$ordinal_LEGEND_HOVER__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = 6;
/**@const {number}*/
EventsCase.$ordinal_TITLE_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = 7;
/**@const {number}*/
EventsCase.$ordinal_AXES_EVENTS__org_pepstock_charba_showcase_j2cl_views_ChartsView_EventsCase = 8;
CaseItem.$markImplementor(EventsCase);
$Util.$setClassMetadataForEnum(EventsCase, "org.pepstock.charba.showcase.j2cl.views.ChartsView$EventsCase");

exports = EventsCase;

//# sourceMappingURL=ChartsView$EventsCase.js.map
