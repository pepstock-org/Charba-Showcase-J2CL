goog.module('org.pepstock.charba.client.configuration.AbstractEventElementHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsEventProvider = goog.require('org.pepstock.charba.client.configuration.IsEventProvider$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let BaseEventTypes = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseEventTypes$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {IsEventProvider}
 */
class AbstractEventElementHandler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object):void>}*/
  this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_;
  /**@type {CharbaCallbackProxy<?function(Object):void>}*/
  this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_;
  /**@type {CharbaCallbackProxy<?function(Object):void>}*/
  this.f_leaveCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_;
  /**@type {ConfigurationOptions}*/
  this.f_configuration__org_pepstock_charba_client_configuration_AbstractEventElementHandler_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_AbstractEventElementHandler__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ configuration) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_configuration_AbstractEventElementHandler();
  this.f_configuration__org_pepstock_charba_client_configuration_AbstractEventElementHandler_ = /**@type {ConfigurationOptions}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(configuration, "Configuration argument"), ConfigurationOptions));
  IsEventProvider.m_register__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_IsEventProvider(this.f_configuration__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.m_getChart__(), this);
  this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.callback = (/** Object */ arg0) =>{
   this.m_handleClickEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(arg0);
  };
  this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.callback = (/** Object */ arg0_1) =>{
   this.m_handleHoverEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(arg0_1);
  };
  this.f_leaveCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.callback = (/** Object */ arg0_2) =>{
   this.m_handleLeaveEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(arg0_2);
  };
 }
 /** @return {ConfigurationOptions} */
 m_getConfiguration___$pp_org_pepstock_charba_client_configuration() {
  return this.f_configuration__org_pepstock_charba_client_configuration_AbstractEventElementHandler_;
 }
 
 m_checkAndManageCanvasClickListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(/** boolean */ isAdding, /** boolean */ manageListener) {
  if (manageListener) {
   if (isAdding) {
    this.f_configuration__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.m_getChart__().m_getCanvas__().addEventListener(BaseEventTypes.f_CLICK__org_pepstock_charba_client_dom_BaseEventTypes, this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.proxy);
   } else {
    this.f_configuration__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.m_getChart__().m_getCanvas__().removeEventListener(BaseEventTypes.f_CLICK__org_pepstock_charba_client_dom_BaseEventTypes, this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.proxy);
   }
  }
 }
 
 m_checkAndManageCanvasHoverListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(/** boolean */ isAdding, /** boolean */ manageListener) {
  if (manageListener) {
   if (isAdding) {
    this.f_configuration__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.m_getChart__().m_getCanvas__().addEventListener(BaseEventTypes.f_MOUSE_MOVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.proxy);
    this.f_configuration__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.m_getChart__().m_getCanvas__().addEventListener(BaseEventTypes.f_MOUSE_LEAVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_leaveCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.proxy);
   } else {
    this.f_configuration__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.m_getChart__().m_getCanvas__().removeEventListener(BaseEventTypes.f_MOUSE_MOVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.proxy);
    this.f_configuration__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.m_getChart__().m_getCanvas__().removeEventListener(BaseEventTypes.f_MOUSE_LEAVE__org_pepstock_charba_client_dom_BaseEventTypes, this.f_leaveCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_.proxy);
   }
  }
 }
 /** @abstract */
 m_handleClickEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(/** Object */ event) {}
 /** @abstract */
 m_handleHoverEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(/** Object */ event) {}
 /** @abstract */
 m_handleLeaveEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(/** Object */ event) {}
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_AbstractEventElementHandler() {
  this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_ = /**@type {CharbaCallbackProxy<?function(Object):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_ = /**@type {CharbaCallbackProxy<?function(Object):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_leaveCallbackProxy__org_pepstock_charba_client_configuration_AbstractEventElementHandler_ = /**@type {CharbaCallbackProxy<?function(Object):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  AbstractEventElementHandler.$clinit = () =>{};
  AbstractEventElementHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractEventElementHandler;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ConfigurationOptions = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
  BaseEventTypes = goog.module.get('org.pepstock.charba.client.dom.BaseEventTypes$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsEventProvider.$markImplementor(AbstractEventElementHandler);
$Util.$setClassMetadata(AbstractEventElementHandler, "org.pepstock.charba.client.configuration.AbstractEventElementHandler");

exports = AbstractEventElementHandler;

//# sourceMappingURL=AbstractEventElementHandler.js.map
