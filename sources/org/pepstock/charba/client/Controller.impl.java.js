goog.module('org.pepstock.charba.client.Controller$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.Controller.$LambdaAdaptor$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');
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
 m_onBeforeInitialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {}
 /** @abstract */
 m_onAfterInitialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {}
 /** @abstract */
 m_onBeforeParse__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int(/** CharbaControllerContext */ context, /** IsChart */ chart, /** number */ start, /** number */ count) {}
 /** @abstract */
 m_onAfterParse__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int(/** CharbaControllerContext */ context, /** IsChart */ chart, /** number */ start, /** number */ count) {}
 /** @abstract */
 m_onBeforeDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {}
 /** @abstract */
 m_onAfterDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {}
 /** @abstract */
 m_onBeforeUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(/** CharbaControllerContext */ context, /** IsChart */ chart, /** TransitionKey */ mode) {}
 /** @abstract */
 m_onAfterUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(/** CharbaControllerContext */ context, /** IsChart */ chart, /** TransitionKey */ mode) {}
 /** @abstract */
 m_onBeforeLinkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {}
 /** @abstract */
 m_onAfterLinkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {}
 /** @return {Controller} */
 static $adapt(/** ?function():ControllerType */ fn) {
  Controller.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_onBeforeInitialize__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** !Controller */ $thisArg, /** CharbaControllerContext */ context, /** IsChart */ chart) {
  Controller.$clinit();
 }
 
 static m_onAfterInitialize__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** !Controller */ $thisArg, /** CharbaControllerContext */ context, /** IsChart */ chart) {
  Controller.$clinit();
 }
 
 static m_onBeforeParse__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int(/** !Controller */ $thisArg, /** CharbaControllerContext */ context, /** IsChart */ chart, /** number */ start, /** number */ count) {
  Controller.$clinit();
 }
 
 static m_onAfterParse__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int(/** !Controller */ $thisArg, /** CharbaControllerContext */ context, /** IsChart */ chart, /** number */ start, /** number */ count) {
  Controller.$clinit();
 }
 
 static m_onBeforeDraw__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** !Controller */ $thisArg, /** CharbaControllerContext */ context, /** IsChart */ chart) {
  Controller.$clinit();
 }
 
 static m_onAfterDraw__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** !Controller */ $thisArg, /** CharbaControllerContext */ context, /** IsChart */ chart) {
  Controller.$clinit();
 }
 
 static m_onBeforeUpdate__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(/** !Controller */ $thisArg, /** CharbaControllerContext */ context, /** IsChart */ chart, /** TransitionKey */ mode) {
  Controller.$clinit();
 }
 
 static m_onAfterUpdate__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(/** !Controller */ $thisArg, /** CharbaControllerContext */ context, /** IsChart */ chart, /** TransitionKey */ mode) {
  Controller.$clinit();
 }
 
 static m_onBeforeLinkScales__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** !Controller */ $thisArg, /** CharbaControllerContext */ context, /** IsChart */ chart) {
  Controller.$clinit();
 }
 
 static m_onAfterLinkScales__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** !Controller */ $thisArg, /** CharbaControllerContext */ context, /** IsChart */ chart) {
  Controller.$clinit();
 }
 
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
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.Controller.$LambdaAdaptor$impl');
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
