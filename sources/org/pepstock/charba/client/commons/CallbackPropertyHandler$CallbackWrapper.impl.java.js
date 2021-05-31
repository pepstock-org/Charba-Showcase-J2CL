goog.module('org.pepstock.charba.client.commons.CallbackPropertyHandler.CallbackWrapper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 */
class CallbackWrapper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_instance__org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper_;
  /**@type {Set<?string>}*/
  this.f_scopes__org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper_;
 }
 /** @template T @return {!CallbackWrapper<T>} */
 static $create__java_lang_Object(/** T */ instance) {
  CallbackWrapper.$clinit();
  let $instance = new CallbackWrapper();
  $instance.$ctor__org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper__java_lang_Object(instance);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper__java_lang_Object(/** T */ instance) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper();
  this.f_instance__org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper_ = instance;
 }
 /** @return {T} */
 m_getInstance___$p_org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper() {
  return this.f_instance__org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper_;
 }
 /** @return {Set<?string>} */
 m_getScopes___$p_org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper() {
  return this.f_scopes__org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper_;
 }
 /** @return {boolean} */
 m_hasChartScope___$p_org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper() {
  for (let $iterator = this.f_scopes__org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let scope = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
   {
    if (DOMBuilder.m_get__().m_isUniqueChartId__java_lang_String(scope)) {
     return true;
    }
   }
  }
  return false;
 }
 /** @override @return {?string} */
 toString() {
  return "CallbackWrapper [instance=" + $Objects.m_hashCode__java_lang_Object(this.f_instance__org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper_) + ", scopes=" + j_l_String.m_valueOf__java_lang_Object(this.f_scopes__org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper_) + "]";
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper() {
  this.f_scopes__org_pepstock_charba_client_commons_CallbackPropertyHandler_CallbackWrapper_ = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
 }
 
 static $clinit() {
  CallbackWrapper.$clinit = () =>{};
  CallbackWrapper.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CallbackWrapper;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(CallbackWrapper, "org.pepstock.charba.client.commons.CallbackPropertyHandler$CallbackWrapper");

exports = CallbackWrapper;

//# sourceMappingURL=CallbackPropertyHandler$CallbackWrapper.js.map
