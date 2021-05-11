goog.module('org.pepstock.charba.client.adapters.DateAdapterModule$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterOptions$impl');
let DefaultsFormatsOverrider = goog.forwardDeclare('org.pepstock.charba.client.adapters.DefaultsFormatsOverrider$impl');
let JsDateAdapterHelper = goog.forwardDeclare('org.pepstock.charba.client.adapters.JsDateAdapterHelper$impl');
let DateAdapterInjectionComplete = goog.forwardDeclare('org.pepstock.charba.client.resources.DateAdapterInjectionComplete$impl');

class DateAdapterModule extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_injected__org_pepstock_charba_client_adapters_DateAdapterModule_ = false;
 }
 /** @return {!DateAdapterModule} */
 static $create__() {
  let $instance = new DateAdapterModule();
  $instance.$ctor__org_pepstock_charba_client_adapters_DateAdapterModule__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_adapters_DateAdapterModule__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_adapters_DateAdapterModule();
 }
 /** @return {DateAdapterModule} */
 static m_get__() {
  DateAdapterModule.$clinit();
  return DateAdapterModule.f_INSTANCE__org_pepstock_charba_client_adapters_DateAdapterModule_;
 }
 /** @return {boolean} */
 m_isInjected__() {
  return this.f_injected__org_pepstock_charba_client_adapters_DateAdapterModule_;
 }
 
 m_injectionComplete__org_pepstock_charba_client_resources_DateAdapterInjectionComplete(/** DateAdapterInjectionComplete */ injectionComplete) {
  if (!$Equality.$same(injectionComplete, null)) {
   this.f_injected__org_pepstock_charba_client_adapters_DateAdapterModule_ = true;
   let options = DateAdapterOptions.$create__();
   let nativeAdapter = JsDateAdapterHelper.m_get__().m_create__org_pepstock_charba_client_adapters_DateAdapterOptions_$pp_org_pepstock_charba_client_adapters(options);
   let nativeObject = nativeAdapter.formats();
   if (!$Equality.$same(nativeObject, null)) {
    let overrider = DefaultsFormatsOverrider.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
    overrider.m_override___$pp_org_pepstock_charba_client_adapters();
   }
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_adapters_DateAdapterModule() {
  this.f_injected__org_pepstock_charba_client_adapters_DateAdapterModule_ = false;
 }
 
 static $clinit() {
  DateAdapterModule.$clinit = () =>{};
  DateAdapterModule.$loadModules();
  j_l_Object.$clinit();
  DateAdapterModule.f_INSTANCE__org_pepstock_charba_client_adapters_DateAdapterModule_ = DateAdapterModule.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateAdapterModule;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DateAdapterOptions = goog.module.get('org.pepstock.charba.client.adapters.DateAdapterOptions$impl');
  DefaultsFormatsOverrider = goog.module.get('org.pepstock.charba.client.adapters.DefaultsFormatsOverrider$impl');
  JsDateAdapterHelper = goog.module.get('org.pepstock.charba.client.adapters.JsDateAdapterHelper$impl');
 }
}
/**@const {?string}*/
DateAdapterModule.f_ID__org_pepstock_charba_client_adapters_DateAdapterModule = "luxon";
/**@type {DateAdapterModule}*/
DateAdapterModule.f_INSTANCE__org_pepstock_charba_client_adapters_DateAdapterModule_;
$Util.$setClassMetadata(DateAdapterModule, "org.pepstock.charba.client.adapters.DateAdapterModule");

exports = DateAdapterModule;

//# sourceMappingURL=DateAdapterModule.js.map
