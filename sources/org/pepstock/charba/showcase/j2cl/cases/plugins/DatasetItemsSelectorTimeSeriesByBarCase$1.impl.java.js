goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorTimeSeriesByBarCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetRangeSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let DatasetRangeSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
let DatasetItemsSelectorTimeSeriesByBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorTimeSeriesByBarCase$impl');

/**
 * @implements {DatasetRangeSelectionEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetItemsSelectorTimeSeriesByBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase(/** DatasetItemsSelectorTimeSeriesByBarCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase(/** DatasetItemsSelectorTimeSeriesByBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onSelect__org_pepstock_charba_client_events_DatasetRangeSelectionEvent(/** DatasetRangeSelectionEvent */ event) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("Dataset from: ").m_append__java_lang_String(event.m_getFrom__().m_getLabel__()).m_append__java_lang_String(" to: ").m_append__java_lang_String(event.m_getTo__().m_getLabel__());
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorTimeSeriesByBarCase_.m_addLogEvent__java_lang_String(sb.toString());
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
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
 }
}
DatasetRangeSelectionEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorTimeSeriesByBarCase$1");

exports = $1;

//# sourceMappingURL=DatasetItemsSelectorTimeSeriesByBarCase$1.js.map
