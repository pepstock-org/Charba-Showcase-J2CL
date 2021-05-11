goog.module('org.pepstock.charba.client.controllers.ControllerType$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Type = goog.require('org.pepstock.charba.client.Type$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ControllerProvider = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerProvider$impl');
let ControllerRegistrationHandler = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerRegistrationHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Type}
 */
class ControllerType extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_type__org_pepstock_charba_client_controllers_ControllerType_;
  /**@type {Type}*/
  this.f_chartType__org_pepstock_charba_client_controllers_ControllerType_;
  /**@type {boolean}*/
  this.f_cloneDefaults__org_pepstock_charba_client_controllers_ControllerType_ = false;
  /**@type {ControllerProvider}*/
  this.f_provider__org_pepstock_charba_client_controllers_ControllerType_;
  /**@type {ControllerRegistrationHandler}*/
  this.f_registrationHandler__org_pepstock_charba_client_controllers_ControllerType_;
 }
 //Factory method corresponding to constructor 'ControllerType(String, Type, ControllerProvider)'.
 /** @return {!ControllerType} */
 static $create__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider(/** ?string */ type, /** Type */ chartType, /** ControllerProvider */ provider) {
  ControllerType.$clinit();
  let $instance = new ControllerType();
  $instance.$ctor__org_pepstock_charba_client_controllers_ControllerType__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider(type, chartType, provider);
  return $instance;
 }
 //Initialization from constructor 'ControllerType(String, Type, ControllerProvider)'.
 
 $ctor__org_pepstock_charba_client_controllers_ControllerType__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider(/** ?string */ type, /** Type */ chartType, /** ControllerProvider */ provider) {
  this.$ctor__org_pepstock_charba_client_controllers_ControllerType__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__org_pepstock_charba_client_controllers_ControllerRegistrationHandler(type, chartType, provider, null);
 }
 //Factory method corresponding to constructor 'ControllerType(String, Type, ControllerProvider, ControllerRegistrationHandler)'.
 /** @return {!ControllerType} */
 static $create__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__org_pepstock_charba_client_controllers_ControllerRegistrationHandler(/** ?string */ type, /** Type */ chartType, /** ControllerProvider */ provider, /** ControllerRegistrationHandler */ handler) {
  ControllerType.$clinit();
  let $instance = new ControllerType();
  $instance.$ctor__org_pepstock_charba_client_controllers_ControllerType__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__org_pepstock_charba_client_controllers_ControllerRegistrationHandler(type, chartType, provider, handler);
  return $instance;
 }
 //Initialization from constructor 'ControllerType(String, Type, ControllerProvider, ControllerRegistrationHandler)'.
 
 $ctor__org_pepstock_charba_client_controllers_ControllerType__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__org_pepstock_charba_client_controllers_ControllerRegistrationHandler(/** ?string */ type, /** Type */ chartType, /** ControllerProvider */ provider, /** ControllerRegistrationHandler */ handler) {
  this.$ctor__org_pepstock_charba_client_controllers_ControllerType__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__org_pepstock_charba_client_controllers_ControllerRegistrationHandler__boolean(type, chartType, provider, handler, true);
 }
 //Factory method corresponding to constructor 'ControllerType(String, Type, ControllerProvider, boolean)'.
 /** @return {!ControllerType} */
 static $create__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__boolean(/** ?string */ type, /** Type */ chartType, /** ControllerProvider */ provider, /** boolean */ cloneDefaults) {
  ControllerType.$clinit();
  let $instance = new ControllerType();
  $instance.$ctor__org_pepstock_charba_client_controllers_ControllerType__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__boolean(type, chartType, provider, cloneDefaults);
  return $instance;
 }
 //Initialization from constructor 'ControllerType(String, Type, ControllerProvider, boolean)'.
 
 $ctor__org_pepstock_charba_client_controllers_ControllerType__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__boolean(/** ?string */ type, /** Type */ chartType, /** ControllerProvider */ provider, /** boolean */ cloneDefaults) {
  this.$ctor__org_pepstock_charba_client_controllers_ControllerType__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__org_pepstock_charba_client_controllers_ControllerRegistrationHandler__boolean(type, chartType, provider, null, cloneDefaults);
 }
 //Factory method corresponding to constructor 'ControllerType(String, Type, ControllerProvider, ControllerRegistrationHandler, boolean)'.
 /** @return {!ControllerType} */
 static $create__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__org_pepstock_charba_client_controllers_ControllerRegistrationHandler__boolean(/** ?string */ type, /** Type */ chartType, /** ControllerProvider */ provider, /** ControllerRegistrationHandler */ handler, /** boolean */ cloneDefaults) {
  ControllerType.$clinit();
  let $instance = new ControllerType();
  $instance.$ctor__org_pepstock_charba_client_controllers_ControllerType__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__org_pepstock_charba_client_controllers_ControllerRegistrationHandler__boolean(type, chartType, provider, handler, cloneDefaults);
  return $instance;
 }
 //Initialization from constructor 'ControllerType(String, Type, ControllerProvider, ControllerRegistrationHandler, boolean)'.
 
 $ctor__org_pepstock_charba_client_controllers_ControllerType__java_lang_String__org_pepstock_charba_client_Type__org_pepstock_charba_client_controllers_ControllerProvider__org_pepstock_charba_client_controllers_ControllerRegistrationHandler__boolean(/** ?string */ type, /** Type */ chartType, /** ControllerProvider */ provider, /** ControllerRegistrationHandler */ handler, /** boolean */ cloneDefaults) {
  this.$ctor__java_lang_Object__();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(type, "Type");
  Checker.m_assertCheck__boolean__java_lang_String(!Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(ChartType.m_values__(), type), "Type '" + j_l_String.m_valueOf__java_lang_Object(type) + "' is a default chart type");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(provider, "Controller provider");
  Type.m_checkIfValid__org_pepstock_charba_client_Type(chartType);
  this.f_type__org_pepstock_charba_client_controllers_ControllerType_ = type;
  this.f_chartType__org_pepstock_charba_client_controllers_ControllerType_ = chartType;
  this.f_provider__org_pepstock_charba_client_controllers_ControllerType_ = provider;
  this.f_registrationHandler__org_pepstock_charba_client_controllers_ControllerType_ = handler;
  this.f_cloneDefaults__org_pepstock_charba_client_controllers_ControllerType_ = cloneDefaults;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_type__org_pepstock_charba_client_controllers_ControllerType_;
 }
 /** @override @return {ScaleType} */
 m_scaleType__() {
  return this.f_chartType__org_pepstock_charba_client_controllers_ControllerType_.m_scaleType__();
 }
 /** @return {Type} */
 m_getChartType__() {
  return this.f_chartType__org_pepstock_charba_client_controllers_ControllerType_;
 }
 /** @return {boolean} */
 m_isCloneDefaults__() {
  return this.f_cloneDefaults__org_pepstock_charba_client_controllers_ControllerType_;
 }
 /** @return {boolean} */
 m_register__() {
  if (!Defaults.m_get__().m_getControllers__().m_isRegistered__java_lang_String(this.f_type__org_pepstock_charba_client_controllers_ControllerType_)) {
   let controller = this.f_provider__org_pepstock_charba_client_controllers_ControllerType_.m_provide__org_pepstock_charba_client_controllers_ControllerType(this);
   if (!$Equality.$same(controller, null) && this.equals(controller.m_getType__()) && Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(this.f_chartType__org_pepstock_charba_client_controllers_ControllerType_, controller.m_getType__().m_getChartType__())) {
    if (!$Equality.$same(this.f_registrationHandler__org_pepstock_charba_client_controllers_ControllerType_, null)) {
     this.f_registrationHandler__org_pepstock_charba_client_controllers_ControllerType_.m_onBeforeRegister__org_pepstock_charba_client_controllers_ControllerType(this);
    }
    let register = Defaults.m_get__().m_getControllers__().m_register__org_pepstock_charba_client_Controller_$pp_org_pepstock_charba_client_controllers(controller);
    if (!$Equality.$same(this.f_registrationHandler__org_pepstock_charba_client_controllers_ControllerType_, null)) {
     this.f_registrationHandler__org_pepstock_charba_client_controllers_ControllerType_.m_onAfterRegister__org_pepstock_charba_client_controllers_ControllerType__boolean(this, register);
    }
    return register;
   }
  }
  return false;
 }
 /** @override @return {number} */
 hashCode() {
  let prime = 31;
  let result = 1;
  result = Math.imul(prime, result) + ($Equality.$same(this.f_type__org_pepstock_charba_client_controllers_ControllerType_, null) ? 0 : j_l_String.m_hashCode__java_lang_String(this.f_type__org_pepstock_charba_client_controllers_ControllerType_)) | 0;
  return result;
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if (Type.$isInstance(obj)) {
   let objType = /**@type {Type}*/ ($Casts.$to(obj, Type));
   return Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(this, objType);
  }
  return false;
 }
 
 static $clinit() {
  ControllerType.$clinit = () =>{};
  ControllerType.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ControllerType;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Type.$markImplementor(ControllerType);
$Util.$setClassMetadata(ControllerType, "org.pepstock.charba.client.controllers.ControllerType");

exports = ControllerType;

//# sourceMappingURL=ControllerType.js.map
