goog.module('org.pepstock.charba.client.Controller.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Controller = goog.require('org.pepstock.charba.client.Controller$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');

/**
 * @implements {Controller}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():ControllerType */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():ControllerType}*/
  this.f_fn__org_pepstock_charba_client_Controller_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_Controller_$LambdaAdaptor__org_pepstock_charba_client_Controller_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_Controller_$LambdaAdaptor__org_pepstock_charba_client_Controller_$JsFunction(/** ?function():ControllerType */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_Controller_$LambdaAdaptor = fn;
 }
 /** @override @return {ControllerType} */
 m_getType__() {
  let /** ?function():ControllerType */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_Controller_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ arg0, /** IsChart */ arg1) {
  Controller.m_onAfterDraw__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterInitialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ arg0, /** IsChart */ arg1) {
  Controller.m_onAfterInitialize__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterLinkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ arg0, /** IsChart */ arg1) {
  Controller.m_onAfterLinkScales__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterParse__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int(/** CharbaControllerContext */ arg0, /** IsChart */ arg1, /** number */ arg2, /** number */ arg3) {
  Controller.m_onAfterParse__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int(this, arg0, arg1, arg2, arg3);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(/** CharbaControllerContext */ arg0, /** IsChart */ arg1, /** TransitionKey */ arg2) {
  Controller.m_onAfterUpdate__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(this, arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeforeDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ arg0, /** IsChart */ arg1) {
  Controller.m_onBeforeDraw__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeforeInitialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ arg0, /** IsChart */ arg1) {
  Controller.m_onBeforeInitialize__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeforeLinkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ arg0, /** IsChart */ arg1) {
  Controller.m_onBeforeLinkScales__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeforeParse__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int(/** CharbaControllerContext */ arg0, /** IsChart */ arg1, /** number */ arg2, /** number */ arg3) {
  Controller.m_onBeforeParse__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int(this, arg0, arg1, arg2, arg3);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeforeUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(/** CharbaControllerContext */ arg0, /** IsChart */ arg1, /** TransitionKey */ arg2) {
  Controller.m_onBeforeUpdate__$default__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(this, arg0, arg1, arg2);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  Controller.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
Controller.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.Controller$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=Controller$$LambdaAdaptor.js.map
