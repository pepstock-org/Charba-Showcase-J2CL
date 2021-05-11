goog.module('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CallbackWrapper = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler.CallbackWrapper$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 */
class CallbackPropertyHandler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Key}*/
  this.f_property__org_pepstock_charba_client_commons_CallbackPropertyHandler_;
  /**@type {Key}*/
  this.f_hashCodeProperty__org_pepstock_charba_client_commons_CallbackPropertyHandler_;
  /**@type {Map<?string, CallbackWrapper<T>>}*/
  this.f_wrappers__org_pepstock_charba_client_commons_CallbackPropertyHandler_;
 }
 /** @template T @return {!CallbackPropertyHandler<T>} */
 static $create__org_pepstock_charba_client_commons_Key(/** Key */ property) {
  CallbackPropertyHandler.$clinit();
  let $instance = new CallbackPropertyHandler();
  $instance.$ctor__org_pepstock_charba_client_commons_CallbackPropertyHandler__org_pepstock_charba_client_commons_Key(property);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_CallbackPropertyHandler__org_pepstock_charba_client_commons_Key(/** Key */ property) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_commons_CallbackPropertyHandler();
  this.f_property__org_pepstock_charba_client_commons_CallbackPropertyHandler_ = Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(property);
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String(this.f_property__org_pepstock_charba_client_commons_CallbackPropertyHandler_.m_value__()).m_append__java_lang_String(CallbackPropertyHandler.f_HASHCODE_PROPERTY_SUFFIX__org_pepstock_charba_client_commons_CallbackPropertyHandler_);
  this.f_hashCodeProperty__org_pepstock_charba_client_commons_CallbackPropertyHandler_ = Key.m_create__java_lang_String(sb.toString());
 }
 /** @return {Key} */
 m_getProperty__() {
  return this.f_property__org_pepstock_charba_client_commons_CallbackPropertyHandler_;
 }
 /** @return {Key} */
 m_getHashCodeProperty__() {
  return this.f_hashCodeProperty__org_pepstock_charba_client_commons_CallbackPropertyHandler_;
 }
 
 m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(/** NativeObjectContainer */ container, /** ?string */ scope, /** T */ callback, /** ?function():void */ proxy) {
  if (!$Equality.$same(scope, null) && !$Equality.$same(container, null)) {
   let fullScope = this.m_createScope__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String_$p_org_pepstock_charba_client_commons_CallbackPropertyHandler(container, scope);
   let value = container.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(this.f_hashCodeProperty__org_pepstock_charba_client_commons_CallbackPropertyHandler_, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
   if (!$Equality.$same(value, null)) {
    this.m_removeScopeFromCallback__java_lang_String__java_lang_String_$p_org_pepstock_charba_client_commons_CallbackPropertyHandler(value, fullScope);
    container.m_remove__org_pepstock_charba_client_commons_Key(this.f_property__org_pepstock_charba_client_commons_CallbackPropertyHandler_);
    container.m_remove__org_pepstock_charba_client_commons_Key(this.f_hashCodeProperty__org_pepstock_charba_client_commons_CallbackPropertyHandler_);
   }
   if (!$Equality.$same(callback, null) && !$Equality.$same(proxy, null)) {
    let key = this.m_createKey__java_lang_Object_$p_org_pepstock_charba_client_commons_CallbackPropertyHandler(callback);
    if (!$Equality.$same(key, null)) {
     this.m_updateOrAddScopeFromCallback__java_lang_String__java_lang_Object__java_lang_String_$p_org_pepstock_charba_client_commons_CallbackPropertyHandler(key, callback, fullScope);
     container.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(this.f_hashCodeProperty__org_pepstock_charba_client_commons_CallbackPropertyHandler_, key);
     container.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this.f_property__org_pepstock_charba_client_commons_CallbackPropertyHandler_, proxy);
    }
   }
  }
 }
 /** @return {T} */
 m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer(/** NativeObjectContainer */ container) {
  return this.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(container, null);
 }
 /** @return {T} */
 m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(/** NativeObjectContainer */ container, /** T */ defaultValue) {
  if (!$Equality.$same(container, null) && container.m_has__org_pepstock_charba_client_commons_Key(this.f_hashCodeProperty__org_pepstock_charba_client_commons_CallbackPropertyHandler_)) {
   let value = container.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(this.f_hashCodeProperty__org_pepstock_charba_client_commons_CallbackPropertyHandler_, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
   let wrapper = /**@type {CallbackWrapper<T>}*/ ($Casts.$to(this.f_wrappers__org_pepstock_charba_client_commons_CallbackPropertyHandler_.get(value), CallbackWrapper));
   if (!$Equality.$same(wrapper, null)) {
    return wrapper.m_getInstance___$p_org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper();
   }
  }
  return defaultValue;
 }
 
 m_updateOrAddScopeFromCallback__java_lang_String__java_lang_Object__java_lang_String_$p_org_pepstock_charba_client_commons_CallbackPropertyHandler(/** ?string */ key, /** T */ callback, /** ?string */ scope) {
  /**@type {CallbackWrapper<T>}*/ ($Casts.$to(this.f_wrappers__org_pepstock_charba_client_commons_CallbackPropertyHandler_.m_computeIfAbsent__java_lang_Object__java_util_function_Function(key, j_u_function_Function.$adapt((mapKey) =>{
   let mapKey_1 = /**@type {?string}*/ ($Casts.$to(mapKey, j_l_String));
   return /**@type {!CallbackWrapper<T>}*/ (CallbackWrapper.$create__java_lang_Object(callback));
  })), CallbackWrapper)).m_getScopes___$p_org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper().add(scope);
 }
 
 m_removeScopeFromCallback__java_lang_String__java_lang_String_$p_org_pepstock_charba_client_commons_CallbackPropertyHandler(/** ?string */ key, /** ?string */ scope) {
  if (!$Equality.$same(key, null) && this.f_wrappers__org_pepstock_charba_client_commons_CallbackPropertyHandler_.containsKey(key)) {
   let wrapper = /**@type {CallbackWrapper<T>}*/ ($Casts.$to(this.f_wrappers__org_pepstock_charba_client_commons_CallbackPropertyHandler_.get(key), CallbackWrapper));
   if (wrapper.m_getScopes___$p_org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper().remove(scope) && wrapper.m_getScopes___$p_org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper().isEmpty()) {
    this.f_wrappers__org_pepstock_charba_client_commons_CallbackPropertyHandler_.remove(key);
   }
  }
 }
 /** @return {?string} */
 m_createKey__java_lang_Object_$p_org_pepstock_charba_client_commons_CallbackPropertyHandler(/** * */ callback) {
  if (!$Equality.$same(callback, null)) {
   let sb = StringBuilder.$create__java_lang_String($Objects.m_getClass__java_lang_Object(callback).m_getName__());
   return sb.m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants).m_append__int($Objects.m_hashCode__java_lang_Object(callback)).toString();
  }
  return null;
 }
 /** @return {?string} */
 m_createScope__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String_$p_org_pepstock_charba_client_commons_CallbackPropertyHandler(/** NativeObjectContainer */ container, /** ?string */ scope) {
  let sb = StringBuilder.$create__java_lang_String(scope);
  return sb.m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(container.m_getIncrementalId__()).toString();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_commons_CallbackPropertyHandler() {
  this.f_wrappers__org_pepstock_charba_client_commons_CallbackPropertyHandler_ = /**@type {!HashMap<?string, CallbackWrapper<T>>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  CallbackPropertyHandler.$clinit = () =>{};
  CallbackPropertyHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CallbackPropertyHandler;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CallbackWrapper = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler.CallbackWrapper$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
CallbackPropertyHandler.f_HASHCODE_PROPERTY_SUFFIX__org_pepstock_charba_client_commons_CallbackPropertyHandler_ = "CharbaCallbackKey";
$Util.$setClassMetadata(CallbackPropertyHandler, "org.pepstock.charba.client.commons.CallbackPropertyHandler");

exports = CallbackPropertyHandler;

//# sourceMappingURL=CallbackPropertyHandler.js.map
