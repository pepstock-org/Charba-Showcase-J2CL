goog.module('org.pepstock.charba.client.plugins.JsPluginHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let PluginReference = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginReference$impl');
let WrapperPlugin = goog.forwardDeclare('org.pepstock.charba.client.plugins.WrapperPlugin$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');

class JsPluginHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsPluginHelper} */
 static $create__() {
  let $instance = new JsPluginHelper();
  $instance.$ctor__org_pepstock_charba_client_plugins_JsPluginHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_plugins_JsPluginHelper__() {
  this.$ctor__java_lang_Object__();
  ResourcesType.m_getResources__().m_inject__();
  JsHelper.m_get__();
 }
 /** @return {JsPluginHelper} */
 static m_get__() {
  JsPluginHelper.$clinit();
  return JsPluginHelper.f_INSTANCE__org_pepstock_charba_client_plugins_JsPluginHelper_;
 }
 
 m_register__org_pepstock_charba_client_plugins_WrapperPlugin_$pp_org_pepstock_charba_client_plugins(/** WrapperPlugin */ object) {
  if (!$Equality.$same(object, null)) {
   CharbaJsPluginHelper.register(object.m_nativeObject___$pp_org_pepstock_charba_client_plugins());
  }
 }
 
 m_unregister__org_pepstock_charba_client_plugins_PluginReference_$pp_org_pepstock_charba_client_plugins(/** PluginReference */ object) {
  if (!$Equality.$same(object, null)) {
   CharbaJsPluginHelper.unregister(object.m_nativeObject___$pp_org_pepstock_charba_client_plugins());
  }
 }
 /** @return {?} */
 m_getAll___$pp_org_pepstock_charba_client_plugins() {
  return CharbaJsPluginHelper.getAll();
 }
 
 static $clinit() {
  JsPluginHelper.$clinit = () =>{};
  JsPluginHelper.$loadModules();
  j_l_Object.$clinit();
  JsPluginHelper.f_INSTANCE__org_pepstock_charba_client_plugins_JsPluginHelper_ = JsPluginHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsPluginHelper;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
/**@type {JsPluginHelper}*/
JsPluginHelper.f_INSTANCE__org_pepstock_charba_client_plugins_JsPluginHelper_;
$Util.$setClassMetadata(JsPluginHelper, "org.pepstock.charba.client.plugins.JsPluginHelper");

exports = JsPluginHelper;

//# sourceMappingURL=JsPluginHelper.js.map
