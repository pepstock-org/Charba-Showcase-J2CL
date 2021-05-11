goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TimeTickCallback = goog.require('org.pepstock.charba.client.callbacks.TimeTickCallback$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let ScaleTickItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleTickItem$impl');
let DatasetItemsSelectorDrillingDownCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase$impl');

/**
 * @implements {TimeTickCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetItemsSelectorDrillingDownCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase(/** DatasetItemsSelectorDrillingDownCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase(/** DatasetItemsSelectorDrillingDownCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__java_util_Date__java_lang_String__int__java_util_List(/** Axis */ axis, /** Date */ value, /** ?string */ label, /** number */ index, /** List<ScaleTickItem> */ values) {
  let toPrintDate = index == 0 || index == (values.size() - 1 | 0);
  if (!this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_1.f_reset__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.disabled) {
   if (toPrintDate) {
    return this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_1.f_adapter__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_format__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(value, TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
   } else if (value.m_getHours__() == 0 && value.m_getMinutes__() == 0) {
    return this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_1.f_adapter__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_format__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(value, TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
   } else {
    return this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_1.f_adapter__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_format__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(value, TimeUnit.f_HOUR__org_pepstock_charba_client_enums_TimeUnit);
   }
  } else if (toPrintDate || value.m_getHours__() == 0) {
   return this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_1.f_adapter__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_format__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(value, TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit);
  } else if (value.m_getHours__() == 12) {
   return this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_1.f_adapter__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorDrillingDownCase_.m_format__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(value, TimeUnit.f_HOUR__org_pepstock_charba_client_enums_TimeUnit);
  }
  return "";
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
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
 }
}
TimeTickCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase$1");

exports = $1;

//# sourceMappingURL=DatasetItemsSelectorDrillingDownCase$1.js.map
