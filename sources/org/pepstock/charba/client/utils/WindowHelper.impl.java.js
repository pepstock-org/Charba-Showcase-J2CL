goog.module('org.pepstock.charba.client.utils.WindowHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.Chart.$Overlay$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ArrayChart_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayChart.$Overlay$impl');

class WindowHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_enableResizeOnBeforePrint__org_pepstock_charba_client_utils_WindowHelper_ = false;
 }
 /** @return {!WindowHelper} */
 static $create__() {
  let $instance = new WindowHelper();
  $instance.$ctor__org_pepstock_charba_client_utils_WindowHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_utils_WindowHelper__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_utils_WindowHelper();
 }
 /** @return {WindowHelper} */
 static m_get__() {
  WindowHelper.$clinit();
  return WindowHelper.f_INSTANCE__org_pepstock_charba_client_utils_WindowHelper_;
 }
 
 m_enableResizeOnBeforePrint___$pp_org_pepstock_charba_client_utils() {
  if (!this.f_enableResizeOnBeforePrint__org_pepstock_charba_client_utils_WindowHelper_) {
   window.onbeforeprint = (/** * */ event) =>{
    this.m_onResize___$p_org_pepstock_charba_client_utils_WindowHelper();
   };
   this.f_enableResizeOnBeforePrint__org_pepstock_charba_client_utils_WindowHelper_ = true;
  }
 }
 
 m_onResize___$p_org_pepstock_charba_client_utils_WindowHelper() {
  let charts = Chart.instances;
  if (!$Equality.$same(charts, null)) {
   for (let i = 0; i < charts.length; i = i + 1 | 0) {
    let charbaChart = $Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(ArrayChart_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayChart__int(charts, i));
    if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(charbaChart)) {
     charbaChart.m_resize__();
    }
   }
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_utils_WindowHelper() {
  this.f_enableResizeOnBeforePrint__org_pepstock_charba_client_utils_WindowHelper_ = false;
 }
 
 static $clinit() {
  WindowHelper.$clinit = () =>{};
  WindowHelper.$loadModules();
  j_l_Object.$clinit();
  WindowHelper.f_INSTANCE__org_pepstock_charba_client_utils_WindowHelper_ = WindowHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WindowHelper;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.Chart.$Overlay$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ArrayChart_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayChart.$Overlay$impl');
 }
}
/**@type {WindowHelper}*/
WindowHelper.f_INSTANCE__org_pepstock_charba_client_utils_WindowHelper_;
$Util.$setClassMetadata(WindowHelper, "org.pepstock.charba.client.utils.WindowHelper");

exports = WindowHelper;

//# sourceMappingURL=WindowHelper.js.map
