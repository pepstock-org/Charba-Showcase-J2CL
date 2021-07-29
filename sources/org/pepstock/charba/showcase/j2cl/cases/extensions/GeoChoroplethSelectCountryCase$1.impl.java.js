goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethSelectCountryCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetSelectionEventHandler$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
let ChoroplethDataPoint = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
let GeoChoroplethSelectCountryCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethSelectCountryCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {DatasetSelectionEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {GeoChoroplethSelectCountryCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase(/** GeoChoroplethSelectCountryCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase(/** GeoChoroplethSelectCountryCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onSelect__org_pepstock_charba_client_events_DatasetSelectionEvent(/** DatasetSelectionEvent */ event) {
  let dataset = event.m_getItem__();
  let index = dataset.m_getIndex__();
  if (index >= 0 && index < this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_1.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.size()) {
   let dp = /**@type {ChoroplethDataPoint}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_1.f_geodata__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.getAtIndex(index), ChoroplethDataPoint));
   let name = dp.m_getFeature__().m_getStringProperty__org_pepstock_charba_client_commons_Key(GeoChoroplethSelectCountryCase.f_NAME__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_);
   let sb = StringBuilder.$create__();
   sb.m_append__java_lang_String("Index: ").m_append__int(index).m_append__java_lang_String(", ");
   sb.m_append__java_lang_String("Country:  ").m_append__java_lang_String(name).m_append__java_lang_String(", ");
   sb.m_append__java_lang_String("Value:  ").m_append__double(dp.m_getValue__());
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_GeoChoroplethSelectCountryCase_.m_addLogEvent__java_lang_String(sb.toString());
  }
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
  ChoroplethDataPoint = goog.module.get('org.pepstock.charba.client.geo.ChoroplethDataPoint$impl');
  GeoChoroplethSelectCountryCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethSelectCountryCase$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
DatasetSelectionEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethSelectCountryCase$1");

exports = $1;

//# sourceMappingURL=GeoChoroplethSelectCountryCase$1.js.map
