goog.module('org.pepstock.charba.client.controllers.JsControllerHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ControllerTemplate = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerTemplate$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');

class JsControllerHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsControllerHelper} */
 static $create__() {
  let $instance = new JsControllerHelper();
  $instance.$ctor__org_pepstock_charba_client_controllers_JsControllerHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_controllers_JsControllerHelper__() {
  this.$ctor__java_lang_Object__();
  ResourcesType.m_getResources__().m_inject__();
  JsHelper.m_get__();
 }
 /** @return {JsControllerHelper} */
 static m_get__() {
  JsControllerHelper.$clinit();
  return JsControllerHelper.f_INSTANCE__org_pepstock_charba_client_controllers_JsControllerHelper_;
 }
 
 m_register__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_controllers(/** ControllerType */ controllerType, /** ? */ instance) {
  let javaScript = Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(ControllerTemplate.m_get__().m_getTemplate___$pp_org_pepstock_charba_client_controllers(), [controllerType.m_value__(), controllerType.m_getChartType__().m_value__(), controllerType.m_isCloneDefaults__()]);
  let function_1 = new Function(javaScript);
  function_1.call();
  CharbaJsControllerHelper.register(controllerType.m_value__(), controllerType.m_getChartType__().m_value__(), instance);
 }
 
 m_initialize__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext_$pp_org_pepstock_charba_client_controllers(/** ControllerType */ controllerType, /** CharbaControllerContext */ context) {
  CharbaJsControllerHelper.initialize(controllerType.m_getChartType__().m_value__(), context);
 }
 
 m_parse__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext__int__int_$pp_org_pepstock_charba_client_controllers(/** ControllerType */ controllerType, /** CharbaControllerContext */ context, /** number */ start, /** number */ count) {
  CharbaJsControllerHelper.parse(controllerType.m_getChartType__().m_value__(), context, start, count);
 }
 
 m_draw__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext_$pp_org_pepstock_charba_client_controllers(/** ControllerType */ controllerType, /** CharbaControllerContext */ context) {
  CharbaJsControllerHelper.draw(controllerType.m_getChartType__().m_value__(), context);
 }
 
 m_update__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext__java_lang_String_$pp_org_pepstock_charba_client_controllers(/** ControllerType */ controllerType, /** CharbaControllerContext */ context, /** ?string */ mode) {
  CharbaJsControllerHelper.update(controllerType.m_getChartType__().m_value__(), context, mode);
 }
 
 m_linkScales__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext_$pp_org_pepstock_charba_client_controllers(/** ControllerType */ controllerType, /** CharbaControllerContext */ context) {
  CharbaJsControllerHelper.linkScales(controllerType.m_getChartType__().m_value__(), context);
 }
 
 static $clinit() {
  JsControllerHelper.$clinit = () =>{};
  JsControllerHelper.$loadModules();
  j_l_Object.$clinit();
  JsControllerHelper.f_INSTANCE__org_pepstock_charba_client_controllers_JsControllerHelper_ = JsControllerHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsControllerHelper;
 }
 
 static $loadModules() {
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ControllerTemplate = goog.module.get('org.pepstock.charba.client.controllers.ControllerTemplate$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
 }
}
/**@type {JsControllerHelper}*/
JsControllerHelper.f_INSTANCE__org_pepstock_charba_client_controllers_JsControllerHelper_;
$Util.$setClassMetadata(JsControllerHelper, "org.pepstock.charba.client.controllers.JsControllerHelper");

exports = JsControllerHelper;

//# sourceMappingURL=JsControllerHelper.js.map
