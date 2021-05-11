goog.module('org.pepstock.charba.client.controllers.ControllerContext.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Chart_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.Chart.$Overlay$impl');
let ChartNode = goog.forwardDeclare('org.pepstock.charba.client.ChartNode$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class $Overlay {
 /** @return {number} */
 static m_getIndex__$devirt__org_pepstock_charba_client_controllers_ControllerContext(/** !CharbaControllerContext */ $thisArg) {
  $Overlay.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_UNDEFINED__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String($thisArg, "index"))) {
   return Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
  }
  return $thisArg.index;
 }
 /** @return {IsChart} */
 static m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(/** !CharbaControllerContext */ $thisArg) {
  $Overlay.$clinit();
  return Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart($thisArg.chart);
 }
 /** @return {ChartNode} */
 static m_getNode__$devirt__org_pepstock_charba_client_controllers_ControllerContext(/** !CharbaControllerContext */ $thisArg) {
  $Overlay.$clinit();
  let nativeChart = $thisArg.chart;
  let chart = Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(nativeChart);
  return ChartNode.$create__java_lang_String__org_pepstock_charba_client_Chart(chart.m_getId__(), nativeChart);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CharbaControllerContext;
 }
 
 static $loadModules() {
  Chart_$Overlay = goog.module.get('org.pepstock.charba.client.Chart.$Overlay$impl');
  ChartNode = goog.module.get('org.pepstock.charba.client.ChartNode$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata($Overlay, "CharbaControllerContext");

exports = $Overlay;

//# sourceMappingURL=ControllerContext$$Overlay.js.map
