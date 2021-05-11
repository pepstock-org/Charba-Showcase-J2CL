goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TickCallback = goog.require('org.pepstock.charba.client.callbacks.TickCallback$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let StandingPluginOnLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {TickCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {StandingPluginOnLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase(/** StandingPluginOnLineCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase(/** StandingPluginOnLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__double__int__java_util_List(/** Axis */ axis, /** number */ value, /** number */ index, /** List<?number> */ values) {
  let dss = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_1.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_StandingPluginOnLineCase_.m_getData__().m_getDatasets__();
  let ds = /**@type {Dataset}*/ ($Casts.$to(dss.getAtIndex(index), Dataset));
  return ds.m_getLabel__();
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
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
TickCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase$1");

exports = $1;

//# sourceMappingURL=StandingPluginOnLineCase$1.js.map
