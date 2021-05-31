goog.module('org.pepstock.charba.client.controllers.WrapperController$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let Controller = goog.forwardDeclare('org.pepstock.charba.client.Controller$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ControllerContext_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerContext.$Overlay$impl');
let JsControllerHelper = goog.forwardDeclare('org.pepstock.charba.client.controllers.JsControllerHelper$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.controllers.WrapperController.Property$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');

class WrapperController extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/
  this.f_initializeCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, number, number):void>}*/
  this.f_parseCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/
  this.f_drawCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, ?string):void>}*/
  this.f_updateCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/
  this.f_linkScalesCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {Controller}*/
  this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_;
 }
 /** @return {!WrapperController} */
 static $create__org_pepstock_charba_client_Controller(/** Controller */ delegation) {
  WrapperController.$clinit();
  let $instance = new WrapperController();
  $instance.$ctor__org_pepstock_charba_client_controllers_WrapperController__org_pepstock_charba_client_Controller(delegation);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_controllers_WrapperController__org_pepstock_charba_client_Controller(/** Controller */ delegation) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
  this.$init___$p_org_pepstock_charba_client_controllers_WrapperController();
  this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_ = delegation;
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_controllers_WrapperController_Property, delegation.m_getType__());
  this.f_initializeCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.ignoreFunctionContext = false;
  this.f_initializeCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context) =>{
   if (!$Equality.$same(context, null) && !$Equality.$same(context.chart, null) && IsChart.m_isValid__org_pepstock_charba_client_IsChart(ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context))) {
    this.m_onInitialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(context, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context));
   }
  };
  this.f_parseCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.ignoreFunctionContext = false;
  this.f_parseCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context_1, /** number */ start, /** number */ count) =>{
   this.m_onParse__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int_$pp_org_pepstock_charba_client_controllers(context_1, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context_1), start, count);
  };
  this.f_drawCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.ignoreFunctionContext = false;
  this.f_drawCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context_2) =>{
   this.m_onDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(context_2, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context_2));
  };
  this.f_updateCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.ignoreFunctionContext = false;
  this.f_updateCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context_3, /** ?string */ mode) =>{
   this.m_onUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__java_lang_String_$pp_org_pepstock_charba_client_controllers(context_3, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context_3), mode);
  };
  this.f_linkScalesCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.ignoreFunctionContext = false;
  this.f_linkScalesCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context_4) =>{
   this.m_onLinkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(context_4, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context_4));
  };
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_INITIALIZE__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_initializeCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_PARSE__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_parseCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_DRAW__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_drawCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_UPDATE__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_updateCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_LINK_SCALES__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_linkScalesCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
 }
 /** @return {IsChart} */
 m_getChart__java_lang_String_$pp_org_pepstock_charba_client_controllers(/** ?string */ chartId) {
  return Charts.m_get__java_lang_String(chartId);
 }
 /** @return {Type} */
 m_getType___$pp_org_pepstock_charba_client_controllers() {
  return this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_getType__();
 }
 
 m_onInitialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onBeforeInitialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
   JsControllerHelper.m_get__().m_initialize__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext_$pp_org_pepstock_charba_client_controllers(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_getType__(), context);
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onAfterInitialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
  }
 }
 
 m_onParse__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart, /** number */ start, /** number */ count) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onBeforeParse__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int(context, chart, start, count);
   JsControllerHelper.m_get__().m_parse__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext__int__int_$pp_org_pepstock_charba_client_controllers(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_getType__(), context, start, count);
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onAfterParse__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__int__int(context, chart, start, count);
  }
 }
 
 m_onDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onBeforeDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
   JsControllerHelper.m_get__().m_draw__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext_$pp_org_pepstock_charba_client_controllers(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_getType__(), context);
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onAfterDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
  }
 }
 
 m_onUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__java_lang_String_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart, /** ?string */ mode) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   if ($Equality.$same(mode, null) || j_l_String.m_length__java_lang_String(mode) == 0) {
    this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onBeforeUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(context, chart, null);
    JsControllerHelper.m_get__().m_update__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext__java_lang_String_$pp_org_pepstock_charba_client_controllers(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_getType__(), context, null);
    this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onAfterUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(context, chart, null);
   } else {
    let transition = TransitionKey.m_create__java_lang_String(mode);
    this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onBeforeUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(context, chart, transition);
    JsControllerHelper.m_get__().m_update__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext__java_lang_String_$pp_org_pepstock_charba_client_controllers(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_getType__(), context, transition.m_value__());
    this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onAfterUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_TransitionKey(context, chart, transition);
   }
  }
 }
 
 m_onLinkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onBeforeLinkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
   JsControllerHelper.m_get__().m_linkScales__org_pepstock_charba_client_controllers_ControllerType__org_pepstock_charba_client_controllers_ControllerContext_$pp_org_pepstock_charba_client_controllers(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_getType__(), context);
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_onAfterLinkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
  }
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_controllers() {
  return super.m_getNativeObject__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_controllers_WrapperController() {
  this.f_initializeCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_parseCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, number, number):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_drawCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_updateCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, ?string):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_linkScalesCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  WrapperController.$clinit = () =>{};
  WrapperController.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WrapperController;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Charts = goog.module.get('org.pepstock.charba.client.Charts$impl');
  Controller = goog.module.get('org.pepstock.charba.client.Controller$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ControllerContext_$Overlay = goog.module.get('org.pepstock.charba.client.controllers.ControllerContext.$Overlay$impl');
  JsControllerHelper = goog.module.get('org.pepstock.charba.client.controllers.JsControllerHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.controllers.WrapperController.Property$impl');
  TransitionKey = goog.module.get('org.pepstock.charba.client.options.TransitionKey$impl');
 }
}
$Util.$setClassMetadata(WrapperController, "org.pepstock.charba.client.controllers.WrapperController");

exports = WrapperController;

//# sourceMappingURL=WrapperController.js.map
