goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorLineCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetRangeCleanSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler$impl');

let DatasetRangeCleanSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent$impl');
let DatasetItemsSelectorLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorLineCase$impl');

/**
 * @implements {DatasetRangeCleanSelectionEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetItemsSelectorLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorLineCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorLineCase(/** DatasetItemsSelectorLineCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorLineCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorLineCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorLineCase(/** DatasetItemsSelectorLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorLineCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClean__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent(/** DatasetRangeCleanSelectionEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorLineCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorLineCase_.m_addLogEvent__java_lang_String("Clean selection event");
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
 
 static $loadModules() {}
}
DatasetRangeCleanSelectionEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorLineCase$1");

exports = $1;

//# sourceMappingURL=DatasetItemsSelectorLineCase$1.js.map
