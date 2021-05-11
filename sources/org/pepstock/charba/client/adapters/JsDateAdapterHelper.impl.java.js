goog.module('org.pepstock.charba.client.adapters.JsDateAdapterHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterOptions$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');

class JsDateAdapterHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsDateAdapterHelper} */
 static $create__() {
  let $instance = new JsDateAdapterHelper();
  $instance.$ctor__org_pepstock_charba_client_adapters_JsDateAdapterHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_adapters_JsDateAdapterHelper__() {
  this.$ctor__java_lang_Object__();
  JsHelper.m_get__();
  ResourcesType.m_getResources__().m_inject__();
 }
 /** @return {JsDateAdapterHelper} */
 static m_get__() {
  JsDateAdapterHelper.$clinit();
  return JsDateAdapterHelper.f_INSTANCE__org_pepstock_charba_client_adapters_JsDateAdapterHelper_;
 }
 /** @return {CharbaChartAdaptersDate} */
 m_create__org_pepstock_charba_client_adapters_DateAdapterOptions_$pp_org_pepstock_charba_client_adapters(/** DateAdapterOptions */ options) {
  return CharbaJsDateAdapterHelper.create(options.m_nativeObject___$pp_org_pepstock_charba_client_adapters());
 }
 
 static $clinit() {
  JsDateAdapterHelper.$clinit = () =>{};
  JsDateAdapterHelper.$loadModules();
  j_l_Object.$clinit();
  JsDateAdapterHelper.f_INSTANCE__org_pepstock_charba_client_adapters_JsDateAdapterHelper_ = JsDateAdapterHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsDateAdapterHelper;
 }
 
 static $loadModules() {
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
/**@type {JsDateAdapterHelper}*/
JsDateAdapterHelper.f_INSTANCE__org_pepstock_charba_client_adapters_JsDateAdapterHelper_;
$Util.$setClassMetadata(JsDateAdapterHelper, "org.pepstock.charba.client.adapters.JsDateAdapterHelper");

exports = JsDateAdapterHelper;

//# sourceMappingURL=JsDateAdapterHelper.js.map
