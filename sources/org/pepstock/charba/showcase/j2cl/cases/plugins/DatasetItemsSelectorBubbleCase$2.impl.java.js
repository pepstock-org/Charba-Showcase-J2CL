goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorBubbleCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetRangeSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let DatasetRangeSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
let DatasetItemsSelectorBubbleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorBubbleCase$impl');

/**
 * @implements {DatasetRangeSelectionEventHandler}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetItemsSelectorBubbleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorBubbleCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorBubbleCase(/** DatasetItemsSelectorBubbleCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorBubbleCase_2__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorBubbleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorBubbleCase_2__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorBubbleCase(/** DatasetItemsSelectorBubbleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorBubbleCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onSelect__org_pepstock_charba_client_events_DatasetRangeSelectionEvent(/** DatasetRangeSelectionEvent */ event) {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String("Dataset from: ").m_append__java_lang_String(event.m_getFrom__().m_getLabel__()).m_append__java_lang_String(" to:").m_append__java_lang_String(event.m_getTo__().m_getLabel__());
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorBubbleCase_2.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorBubbleCase_.m_addLogEvent__java_lang_String(sb.toString());
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
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
 }
}
DatasetRangeSelectionEventHandler.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorBubbleCase$2");

exports = $2;

//# sourceMappingURL=DatasetItemsSelectorBubbleCase$2.js.map
