goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RejectedCallback = goog.require('org.pepstock.charba.client.zoom.callbacks.RejectedCallback$impl');

let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');
let ZoomCallbacksOnTimeSeriesCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase$impl');

/**
 * @implements {RejectedCallback}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ZoomCallbacksOnTimeSeriesCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_4;
 }
 /** @return {!$4} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase(/** ZoomCallbacksOnTimeSeriesCase */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase(/** ZoomCallbacksOnTimeSeriesCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onRejected__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ context) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_4.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_ZoomCallbacksOnTimeSeriesCase_.m_addLogEvent__java_lang_String("> ZOOM REJECTED; press ALT to zoom");
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {}
}
RejectedCallback.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase$4");

exports = $4;

//# sourceMappingURL=ZoomCallbacksOnTimeSeriesCase$4.js.map
