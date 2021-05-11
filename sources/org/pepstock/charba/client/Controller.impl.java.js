goog.module('org.pepstock.charba.client.Controller$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ControllerDatasetElement = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerDatasetElement$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let IsTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsTransitionKey$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 */
class Controller {
 /** @return {boolean} */
 static m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** Controller */ controller, /** CharbaControllerContext */ context, /** IsChart */ chart) {
  Controller.$clinit();
  return Controller.m_isValid__org_pepstock_charba_client_Controller(controller) && IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && ControllerType.$isInstance(chart.m_getType__()) && Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(chart.m_getType__(), controller.m_getType__()) && !$Equality.$same(context, null);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_Controller(/** Controller */ controller) {
  Controller.$clinit();
  if (!Controller.m_isValid__org_pepstock_charba_client_Controller(controller)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Controller is null or not consistent"));
  }
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_Controller(/** Controller */ controller) {
  Controller.$clinit();
  return !$Equality.$same(controller, null) && Type.m_isValid__org_pepstock_charba_client_Type(controller.m_getType__());
 }
 /** @abstract @return {ControllerType} */
 m_getType__() {}
 /** @abstract */
 m_initialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {}
 /** @abstract */
 m_addElements__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {}
 /** @abstract */
 m_draw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {}
 /** @abstract */
 m_removeHoverStyle__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_controllers_ControllerDatasetElement__int__int(/** CharbaControllerContext */ context, /** IsChart */ chart, /** ControllerDatasetElement */ element, /** number */ datasetIndex, /** number */ index) {}
 /** @abstract */
 m_setHoverStyle__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_controllers_ControllerDatasetElement__int__int(/** CharbaControllerContext */ context, /** IsChart */ chart, /** ControllerDatasetElement */ element, /** number */ datasetIndex, /** number */ index) {}
 /** @abstract */
 m_update__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsTransitionKey(/** CharbaControllerContext */ context, /** IsChart */ chart, /** IsTransitionKey */ mode) {}
 /** @abstract */
 m_linkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {}
 /** @abstract */
 m_buildOrUpdateElements__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__boolean(/** CharbaControllerContext */ context, /** IsChart */ chart, /** boolean */ resetNewElements) {}
 
 static $clinit() {
  Controller.$clinit = () =>{};
  Controller.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_Controller = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_Controller;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Controller.$markImplementor(/**@type {Function}*/ (Controller));
$Util.$setClassMetadataForInterface(Controller, "org.pepstock.charba.client.Controller");

exports = Controller;

//# sourceMappingURL=Controller.js.map
