goog.module('org.pepstock.charba.client.data.LiningDatasetFillHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FillHandler = goog.require('org.pepstock.charba.client.options.FillHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let FillCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FillCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let DataEnvelop = goog.forwardDeclare('org.pepstock.charba.client.data.DataEnvelop$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.FillHandler.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LiningDatasetFillHandler extends FillHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_fillCallbackProxy__org_pepstock_charba_client_data_LiningDatasetFillHandler_;
  /**@type {FillCallback}*/
  this.f_fillCallback__org_pepstock_charba_client_data_LiningDatasetFillHandler_;
 }
 /** @return {!LiningDatasetFillHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsFill */ defaultValues, /** ? */ nativeObject) {
  LiningDatasetFillHandler.$clinit();
  let $instance = new LiningDatasetFillHandler();
  $instance.$ctor__org_pepstock_charba_client_data_LiningDatasetFillHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_LiningDatasetFillHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsFill */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_FillHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_data_DataEnvelop(parent, defaultValues, /**@type {!DataEnvelop<?>}*/ (DataEnvelop.$create__java_lang_Object(nativeObject)));
  this.$init___$p_org_pepstock_charba_client_data_LiningDatasetFillHandler();
  this.f_fillCallbackProxy__org_pepstock_charba_client_data_LiningDatasetFillHandler_.callback = (/** ? */ context) =>{
   return this.m_onFill__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_LiningDatasetFillHandler(DatasetContext.$create__org_pepstock_charba_client_commons_NativeObject(context));
  };
 }
 /** @override */
 m_setFill__boolean(/** boolean */ fill) {
  this.m_setFill__org_pepstock_charba_client_callbacks_FillCallback_$pp_org_pepstock_charba_client_data(/**@type {FillCallback}*/ (null));
  super.m_setFill__boolean(fill);
 }
 /** @override */
 m_setFill__org_pepstock_charba_client_enums_IsFill(/** IsFill */ fill) {
  this.m_setFill__org_pepstock_charba_client_callbacks_FillCallback_$pp_org_pepstock_charba_client_data(/**@type {FillCallback}*/ (null));
  super.m_setFill__org_pepstock_charba_client_enums_IsFill(fill);
 }
 /** @override @return {IsFill} */
 m_getFill__() {
  if ($Equality.$same(this.m_getFillCallback___$pp_org_pepstock_charba_client_data(), null)) {
   return super.m_getFill__();
  }
  return /**@type {IsFill}*/ ($Casts.$to(this.m_getDefaultValues__(), IsFill));
 }
 /** @return {FillCallback} */
 m_getFillCallback___$pp_org_pepstock_charba_client_data() {
  return this.f_fillCallback__org_pepstock_charba_client_data_LiningDatasetFillHandler_;
 }
 
 m_setFill__org_pepstock_charba_client_callbacks_FillCallback_$pp_org_pepstock_charba_client_data(/** FillCallback */ fillCallback) {
  this.f_fillCallback__org_pepstock_charba_client_data_LiningDatasetFillHandler_ = fillCallback;
  if (!$Equality.$same(fillCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property, this.f_fillCallbackProxy__org_pepstock_charba_client_data_LiningDatasetFillHandler_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property);
  }
  this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_FILLING_MODE__org_pepstock_charba_client_options_FillHandler_Property);
 }
 
 m_setFill__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(/** Function */ fillCallback) {
  this.m_setFill__org_pepstock_charba_client_callbacks_FillCallback_$pp_org_pepstock_charba_client_data(/**@type {FillCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_FILL__org_pepstock_charba_client_options_FillHandler_Property, fillCallback);
 }
 /** @return {*} */
 m_onFill__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_LiningDatasetFillHandler(/** DatasetContext */ context) {
  let result = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, this.m_getFillCallback___$pp_org_pepstock_charba_client_data());
  let transformed = IsFill.m_transform__java_lang_Object(result);
  if (!$Equality.$same(transformed, null)) {
   return transformed;
  }
  return IsFill.m_transform__java_lang_Object(/**@type {IsFill}*/ ($Casts.$to(this.m_getDefaultValues__(), IsFill)));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_LiningDatasetFillHandler() {
  this.f_fillCallbackProxy__org_pepstock_charba_client_data_LiningDatasetFillHandler_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_fillCallback__org_pepstock_charba_client_data_LiningDatasetFillHandler_ = null;
 }
 
 static $clinit() {
  LiningDatasetFillHandler.$clinit = () =>{};
  LiningDatasetFillHandler.$loadModules();
  FillHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LiningDatasetFillHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  DataEnvelop = goog.module.get('org.pepstock.charba.client.data.DataEnvelop$impl');
  IsFill = goog.module.get('org.pepstock.charba.client.enums.IsFill$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.FillHandler.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LiningDatasetFillHandler, "org.pepstock.charba.client.data.LiningDatasetFillHandler");

exports = LiningDatasetFillHandler;

//# sourceMappingURL=LiningDatasetFillHandler.js.map
