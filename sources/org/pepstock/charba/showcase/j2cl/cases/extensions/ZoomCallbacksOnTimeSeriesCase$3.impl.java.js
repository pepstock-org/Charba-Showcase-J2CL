goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ProgressCallback = goog.require('org.pepstock.charba.client.zoom.callbacks.ProgressCallback$impl');

let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');
let ZoomCallbacksOnTimeSeriesCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase$impl');

/**
 * @implements {ProgressCallback}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ZoomCallbacksOnTimeSeriesCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase(/** ZoomCallbacksOnTimeSeriesCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase(/** ZoomCallbacksOnTimeSeriesCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onProgress__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ context) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_3.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_addLogEvent__java_lang_String("> ZOOM in PROGRESS on chart");
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {}
}
ProgressCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase$3");

exports = $3;

//# sourceMappingURL=ZoomCallbacksOnTimeSeriesCase$3.js.map
