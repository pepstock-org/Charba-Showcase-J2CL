goog.module('org.pepstock.charba.client.data.AbstractContainer.CallbackWrapper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let Scriptable = goog.forwardDeclare('org.pepstock.charba.client.callbacks.Scriptable$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let CanvasObjectKey = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');

class CallbackWrapper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_callbackProxy__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_;
  /**@type {Dataset}*/
  this.f_dataset__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_;
  /**@type {CanvasObjectKey}*/
  this.f_property__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_;
  /**@type {Scriptable<*, DatasetContext>}*/
  this.f_callback__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_;
  /**@type {?string}*/
  this.f_defaultValue__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_;
 }
 /** @return {!CallbackWrapper} */
 static $create__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(/** Dataset */ dataset, /** CanvasObjectKey */ property, /** Scriptable<*, DatasetContext> */ callback, /** ?string */ defaultValue) {
  CallbackWrapper.$clinit();
  let $instance = new CallbackWrapper();
  $instance.$ctor__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(dataset, property, callback, defaultValue);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(/** Dataset */ dataset, /** CanvasObjectKey */ property, /** Scriptable<*, DatasetContext> */ callback, /** ?string */ defaultValue) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper();
  this.f_dataset__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_ = dataset;
  this.f_property__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_ = property;
  this.f_callback__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_ = callback;
  this.f_defaultValue__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_ = defaultValue;
  this.f_callbackProxy__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return this.m_getDataset___$p_org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper().m_invokeColorCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__java_lang_String(dataset.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context), this.m_getCallback___$p_org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper(), this.m_getProperty___$p_org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper(), this.m_getDefaultValue___$p_org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper());
  };
 }
 /** @return {?function():void} */
 m_getProxy___$pp_org_pepstock_charba_client_data() {
  return this.f_callbackProxy__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_.proxy;
 }
 /** @return {Dataset} */
 m_getDataset___$p_org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper() {
  return this.f_dataset__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_;
 }
 /** @return {CanvasObjectKey} */
 m_getProperty___$p_org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper() {
  return this.f_property__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_;
 }
 /** @return {Scriptable<*, DatasetContext>} */
 m_getCallback___$p_org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper() {
  return this.f_callback__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_;
 }
 /** @return {?string} */
 m_getDefaultValue___$p_org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper() {
  return this.f_defaultValue__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper() {
  this.f_callbackProxy__org_pepstock_charba_client_data_AbstractContainer_CallbackWrapper_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
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
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
 }
}
$Util.$setClassMetadata(CallbackWrapper, "org.pepstock.charba.client.data.AbstractContainer$CallbackWrapper");

exports = CallbackWrapper;

//# sourceMappingURL=AbstractContainer$CallbackWrapper.js.map
