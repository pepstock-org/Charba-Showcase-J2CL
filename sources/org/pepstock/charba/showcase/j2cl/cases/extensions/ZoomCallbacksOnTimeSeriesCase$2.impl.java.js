goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CompletedCallback = goog.require('org.pepstock.charba.client.zoom.callbacks.CompletedCallback$impl');

let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');
let ZoomCallbacksOnTimeSeriesCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase$impl');

/**
 * @implements {CompletedCallback}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ZoomCallbacksOnTimeSeriesCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase(/** ZoomCallbacksOnTimeSeriesCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase(/** ZoomCallbacksOnTimeSeriesCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onCompleted__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ context) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_2.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_addLogEvent__java_lang_String("> ZOOM COMPLETE on chart");
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
 
 static $loadModules() {}
}
CompletedCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase$2");

exports = $2;

//# sourceMappingURL=ZoomCallbacksOnTimeSeriesCase$2.js.map
