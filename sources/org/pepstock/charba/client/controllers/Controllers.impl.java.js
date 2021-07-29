goog.module('org.pepstock.charba.client.controllers.Controllers$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Controller = goog.forwardDeclare('org.pepstock.charba.client.Controller$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let ControllerTypeChecker = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerTypeChecker$impl');
let JsControllerHelper = goog.forwardDeclare('org.pepstock.charba.client.controllers.JsControllerHelper$impl');
let WrapperController = goog.forwardDeclare('org.pepstock.charba.client.controllers.WrapperController$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Controllers extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, Controller>}*/
  this.f_controllersInstances__org_pepstock_charba_client_controllers_Controllers_;
 }
 /** @return {!Controllers} */
 static $create__() {
  let $instance = new Controllers();
  $instance.$ctor__org_pepstock_charba_client_controllers_Controllers__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_controllers_Controllers__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_controllers_Controllers();
  ResourcesType.m_getResources__().m_inject__();
 }
 /** @return {Controllers} */
 static m_get__() {
  Controllers.$clinit();
  return Controllers.f_INSTANCE__org_pepstock_charba_client_controllers_Controllers_;
 }
 /** @return {boolean} */
 m_register__org_pepstock_charba_client_Controller_$pp_org_pepstock_charba_client_controllers(/** Controller */ controller) {
  let wController = this.m_check__org_pepstock_charba_client_Controller_$p_org_pepstock_charba_client_controllers_Controllers(controller);
  if (!$Equality.$same(wController, null)) {
   if (controller.m_mustBeRegistered__()) {
    let type = controller.m_getType__();
    JsControllerHelper.m_get__().m_register__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_controllers(type, wController.m_nativeObject___$pp_org_pepstock_charba_client_controllers());
   }
   return true;
  }
  return false;
 }
 /** @return {WrapperController} */
 m_check__org_pepstock_charba_client_Controller_$p_org_pepstock_charba_client_controllers_Controllers(/** Controller */ controller) {
  if ($Equality.$same(controller, null)) {
   return null;
  }
  ControllerTypeChecker.m_check__org_pepstock_charba_client_Type(controller.m_getType__());
  if (this.f_controllersInstances__org_pepstock_charba_client_controllers_Controllers_.containsKey(controller.m_getType__().m_value__())) {
   return null;
  }
  this.f_controllersInstances__org_pepstock_charba_client_controllers_Controllers_.put(controller.m_getType__().m_value__(), controller);
  return WrapperController.$create__org_pepstock_charba_client_Controller(controller);
 }
 /** @return {boolean} */
 m_isRegistered__java_lang_String(/** ?string */ type) {
  if (!$Equality.$same(type, null)) {
   return this.f_controllersInstances__org_pepstock_charba_client_controllers_Controllers_.containsKey(type);
  }
  return false;
 }
 /** @return {Set<?string>} */
 m_getTypeNames__() {
  return this.f_controllersInstances__org_pepstock_charba_client_controllers_Controllers_.keySet();
 }
 /** @return {ControllerType} */
 m_getTypeByString__java_lang_String(/** ?string */ type) {
  if (!$Equality.$same(type, null) && this.f_controllersInstances__org_pepstock_charba_client_controllers_Controllers_.containsKey(type)) {
   let controller = /**@type {Controller}*/ ($Casts.$to(this.f_controllersInstances__org_pepstock_charba_client_controllers_Controllers_.get(type), Controller));
   return controller.m_getType__();
  }
  return null;
 }
 /** @return {Controller} */
 m_getController__org_pepstock_charba_client_controllers_ControllerType(/** ControllerType */ type) {
  if (Type.m_isValid__org_pepstock_charba_client_Type(type)) {
   return this.m_getController__java_lang_String(type.m_value__());
  }
  return null;
 }
 /** @return {Controller} */
 m_getController__java_lang_String(/** ?string */ type) {
  if (!$Equality.$same(type, null) && this.f_controllersInstances__org_pepstock_charba_client_controllers_Controllers_.containsKey(type)) {
   return /**@type {Controller}*/ ($Casts.$to(this.f_controllersInstances__org_pepstock_charba_client_controllers_Controllers_.get(type), Controller));
  }
  return null;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_controllers_Controllers() {
  this.f_controllersInstances__org_pepstock_charba_client_controllers_Controllers_ = /**@type {!HashMap<?string, Controller>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  Controllers.$clinit = () =>{};
  Controllers.$loadModules();
  j_l_Object.$clinit();
  Controllers.f_INSTANCE__org_pepstock_charba_client_controllers_Controllers_ = Controllers.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Controllers;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Controller = goog.module.get('org.pepstock.charba.client.Controller$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  ControllerTypeChecker = goog.module.get('org.pepstock.charba.client.controllers.ControllerTypeChecker$impl');
  JsControllerHelper = goog.module.get('org.pepstock.charba.client.controllers.JsControllerHelper$impl');
  WrapperController = goog.module.get('org.pepstock.charba.client.controllers.WrapperController$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Controllers}*/
Controllers.f_INSTANCE__org_pepstock_charba_client_controllers_Controllers_;
$Util.$setClassMetadata(Controllers, "org.pepstock.charba.client.controllers.Controllers");

exports = Controllers;

//# sourceMappingURL=Controllers.js.map
