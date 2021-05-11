goog.module('org.pepstock.charba.client.controllers.AbstractController$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Controller = goog.require('org.pepstock.charba.client.Controller$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ControllerDatasetElement = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerDatasetElement$impl');
let JsControllerHelper = goog.forwardDeclare('org.pepstock.charba.client.controllers.JsControllerHelper$impl');
let IsTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsTransitionKey$impl');

/**
 * @abstract
 * @implements {Controller}
 */
class AbstractController extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_controllers_AbstractController__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_initialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, context, chart)) {
   JsControllerHelper.m_get__().m_initialize__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext_$pp_org_pepstock_charba_client_controllers(this.m_getType__(), context);
  }
 }
 /** @override */
 m_addElements__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, context, chart)) {
   JsControllerHelper.m_get__().m_addElements__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext_$pp_org_pepstock_charba_client_controllers(this.m_getType__(), context);
  }
 }
 /** @override */
 m_draw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, context, chart)) {
   JsControllerHelper.m_get__().m_draw__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext_$pp_org_pepstock_charba_client_controllers(this.m_getType__(), context);
  }
 }
 /** @override */
 m_removeHoverStyle__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_controllers_ControllerDatasetElement__int__int(/** CharbaControllerContext */ context, /** IsChart */ chart, /** ControllerDatasetElement */ element, /** number */ datasetIndex, /** number */ index) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, context, chart) && !$Equality.$same(element, null)) {
   JsControllerHelper.m_get__().m_removeHoverStyle__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_commons_NativeObject__int__int_$pp_org_pepstock_charba_client_controllers(this.m_getType__(), context, element.m_nativeObject___$pp_org_pepstock_charba_client_controllers(), datasetIndex, index);
  }
 }
 /** @override */
 m_setHoverStyle__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_controllers_ControllerDatasetElement__int__int(/** CharbaControllerContext */ context, /** IsChart */ chart, /** ControllerDatasetElement */ element, /** number */ datasetIndex, /** number */ index) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, context, chart) && !$Equality.$same(element, null)) {
   JsControllerHelper.m_get__().m_setHoverStyle__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_commons_NativeObject__int__int_$pp_org_pepstock_charba_client_controllers(this.m_getType__(), context, element.m_nativeObject___$pp_org_pepstock_charba_client_controllers(), datasetIndex, index);
  }
 }
 /** @override */
 m_update__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsTransitionKey(/** CharbaControllerContext */ context, /** IsChart */ chart, /** IsTransitionKey */ mode) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, context, chart)) {
   JsControllerHelper.m_get__().m_update__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext__java_lang_String_$pp_org_pepstock_charba_client_controllers(this.m_getType__(), context, IsTransitionKey.m_isValid__org_pepstock_charba_client_options_IsTransitionKey(mode) ? mode.m_value__() : null);
  }
 }
 /** @override */
 m_linkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, context, chart)) {
   JsControllerHelper.m_get__().m_linkScales__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext_$pp_org_pepstock_charba_client_controllers(this.m_getType__(), context);
  }
 }
 /** @override */
 m_buildOrUpdateElements__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__boolean(/** CharbaControllerContext */ context, /** IsChart */ chart, /** boolean */ resetNewElements) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this, context, chart)) {
   JsControllerHelper.m_get__().m_buildOrUpdateElements__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext__boolean_$pp_org_pepstock_charba_client_controllers(this.m_getType__(), context, resetNewElements);
  }
 }
 
 static $clinit() {
  AbstractController.$clinit = () =>{};
  AbstractController.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractController;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JsControllerHelper = goog.module.get('org.pepstock.charba.client.controllers.JsControllerHelper$impl');
  IsTransitionKey = goog.module.get('org.pepstock.charba.client.options.IsTransitionKey$impl');
 }
}
Controller.$markImplementor(AbstractController);
$Util.$setClassMetadata(AbstractController, "org.pepstock.charba.client.controllers.AbstractController");

exports = AbstractController;

//# sourceMappingURL=AbstractController.js.map
