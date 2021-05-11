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
let ControllerDatasetElement = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerDatasetElement$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.controllers.WrapperController.Property$impl');
let IsTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsTransitionKey$impl');

class WrapperController extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/
  this.f_initializeCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/
  this.f_addElementsCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/
  this.f_drawCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, ?, number, number):void>}*/
  this.f_removeHoverStyleCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, ?, number, number):void>}*/
  this.f_setHoverStyleCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, ?string):void>}*/
  this.f_updateCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/
  this.f_linkScalesCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_;
  /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, boolean):void>}*/
  this.f_buildOrUpdateElements__org_pepstock_charba_client_controllers_WrapperController_;
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
  this.f_initializeCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context) =>{
   if (!$Equality.$same(context, null) && !$Equality.$same(context.chart, null) && IsChart.m_isValid__org_pepstock_charba_client_IsChart(ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context))) {
    this.m_onInitialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(context, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context));
   }
  };
  this.f_addElementsCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context_1) =>{
   this.m_onAddElements__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(context_1, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context_1));
  };
  this.f_drawCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context_2) =>{
   this.m_onDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(context_2, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context_2));
  };
  this.f_removeHoverStyleCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context_3, /** ? */ element, /** number */ datasetIndex, /** number */ index) =>{
   this.m_onRemoveHoverStyle__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObject__int__int_$pp_org_pepstock_charba_client_controllers(context_3, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context_3), element, datasetIndex, index);
  };
  this.f_setHoverStyleCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context_4, /** ? */ element_1, /** number */ datasetIndex_1, /** number */ index_1) =>{
   this.m_onSetHoverStyle__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObject__int__int_$pp_org_pepstock_charba_client_controllers(context_4, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context_4), element_1, datasetIndex_1, index_1);
  };
  this.f_updateCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context_5, /** ?string */ mode) =>{
   this.m_onUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__java_lang_String_$pp_org_pepstock_charba_client_controllers(context_5, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context_5), mode);
  };
  this.f_linkScalesCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context_6) =>{
   this.m_onLinkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(context_6, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context_6));
  };
  this.f_buildOrUpdateElements__org_pepstock_charba_client_controllers_WrapperController_.callback = (/** CharbaControllerContext */ context_7, /** boolean */ resetNewElements) =>{
   this.m_onBuildOrUpdateElements__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__boolean_$pp_org_pepstock_charba_client_controllers(context_7, ControllerContext_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_controllers_ControllerContext(context_7), resetNewElements);
  };
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_INITIALIZE__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_initializeCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_ADD_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_addElementsCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_DRAW__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_drawCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_REMOVE_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_removeHoverStyleCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_SET_HOVER_STYLE__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_setHoverStyleCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_UPDATE__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_updateCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_LINK_SCALES__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_linkScalesCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_.proxy);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BUILD_OR_UPDATE_ELEMENTS__org_pepstock_charba_client_controllers_WrapperController_Property, this.f_buildOrUpdateElements__org_pepstock_charba_client_controllers_WrapperController_.proxy);
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
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_initialize__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
  }
 }
 
 m_onAddElements__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_addElements__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
  }
 }
 
 m_onDraw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_draw__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
  }
 }
 
 m_onRemoveHoverStyle__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObject__int__int_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart, /** ? */ object, /** number */ datasetIndex, /** number */ index) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_removeHoverStyle__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_controllers_ControllerDatasetElement__int__int(context, chart, ControllerDatasetElement.$create__org_pepstock_charba_client_commons_NativeObject(object), datasetIndex, index);
  }
 }
 
 m_onSetHoverStyle__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObject__int__int_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart, /** ? */ object, /** number */ datasetIndex, /** number */ index) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_setHoverStyle__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_controllers_ControllerDatasetElement__int__int(context, chart, ControllerDatasetElement.$create__org_pepstock_charba_client_commons_NativeObject(object), datasetIndex, index);
  }
 }
 
 m_onUpdate__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__java_lang_String_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart, /** ?string */ mode) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   if ($Equality.$same(mode, null) || j_l_String.m_length__java_lang_String(mode) == 0) {
    this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_update__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsTransitionKey(context, chart, null);
   } else {
    this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_update__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsTransitionKey(context, chart, IsTransitionKey.m_create__java_lang_String(mode));
   }
  }
 }
 
 m_onLinkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_linkScales__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(context, chart);
  }
 }
 
 m_onBuildOrUpdateElements__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__boolean_$pp_org_pepstock_charba_client_controllers(/** CharbaControllerContext */ context, /** IsChart */ chart, /** boolean */ resetNewElements) {
  if (Controller.m_isConsistent__org_pepstock_charba_client_Controller__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart(this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_, context, chart)) {
   this.f_delegation__org_pepstock_charba_client_controllers_WrapperController_.m_buildOrUpdateElements__org_pepstock_charba_client_controllers_ControllerContext__org_pepstock_charba_client_IsChart__boolean(context, chart, resetNewElements);
  }
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_controllers() {
  return super.m_getNativeObject__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_controllers_WrapperController() {
  this.f_initializeCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_addElementsCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_drawCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_removeHoverStyleCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, ?, number, number):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_setHoverStyleCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, ?, number, number):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_updateCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, ?string):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_linkScalesCallbackProxy__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_buildOrUpdateElements__org_pepstock_charba_client_controllers_WrapperController_ = /**@type {CharbaCallbackProxy<?function(CharbaControllerContext, boolean):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
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
  ControllerDatasetElement = goog.module.get('org.pepstock.charba.client.controllers.ControllerDatasetElement$impl');
  Property = goog.module.get('org.pepstock.charba.client.controllers.WrapperController.Property$impl');
  IsTransitionKey = goog.module.get('org.pepstock.charba.client.options.IsTransitionKey$impl');
 }
}
$Util.$setClassMetadata(WrapperController, "org.pepstock.charba.client.controllers.WrapperController");

exports = WrapperController;

//# sourceMappingURL=WrapperController.js.map
