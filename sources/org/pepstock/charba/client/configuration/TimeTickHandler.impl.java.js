goog.module('org.pepstock.charba.client.configuration.TimeTickHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTickHandler = goog.require('org.pepstock.charba.client.configuration.AbstractTickHandler$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TimeTickCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TimeTickCallback$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianTimeTick = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeTick$impl');
let ScaleTickItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleTickItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractTickHandler<CartesianTimeTick, TimeTickCallback>}
 */
class TimeTickHandler extends AbstractTickHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?string, number, Array):?string>}*/
  this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_TimeTickHandler_;
 }
 /** @return {!TimeTickHandler} */
 static $create__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_CartesianTimeTick(/** Axis */ axis, /** CartesianTimeTick */ configuration) {
  TimeTickHandler.$clinit();
  let $instance = new TimeTickHandler();
  $instance.$ctor__org_pepstock_charba_client_configuration_TimeTickHandler__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_CartesianTimeTick(axis, configuration);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_TimeTickHandler__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_CartesianTimeTick(/** Axis */ axis, /** CartesianTimeTick */ configuration) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractTickHandler__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(axis, configuration);
  this.$init___$p_org_pepstock_charba_client_configuration_TimeTickHandler();
  this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_TimeTickHandler_.callback = (/** Object */ context, /** ?string */ label, /** number */ index, /** Array */ values) =>{
   if (!$Equality.$same(this.m_getCallback___$pp_org_pepstock_charba_client_configuration(), null)) {
    let tickItems = this.m_getTickItems__org_pepstock_charba_client_commons_ArrayObject_$pp_org_pepstock_charba_client_configuration(values);
    let value = /**@type {ScaleTickItem}*/ ($Casts.$to(tickItems.getAtIndex(index), ScaleTickItem)).m_getValueAsDate__();
    return /**@type {TimeTickCallback}*/ ($Casts.$to(this.m_getCallback___$pp_org_pepstock_charba_client_configuration(), TimeTickCallback)).m_onCallback__org_pepstock_charba_client_configuration_Axis__java_util_Date__java_lang_String__int__java_util_List(this.m_getAxis__(), value, label, index, this.m_getTickItems__org_pepstock_charba_client_commons_ArrayObject_$pp_org_pepstock_charba_client_configuration(values));
   }
   return label;
  };
 }
 /** @return {List<ScaleTickItem>} */
 m_getTickItems__org_pepstock_charba_client_commons_ArrayObject_$pp_org_pepstock_charba_client_configuration(/** Array */ values) {
  return /**@type {List<ScaleTickItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(values, ScaleTickItem.f_FACTORY__org_pepstock_charba_client_items_ScaleTickItem));
 }
 /** @override @return {?function():void} */
 m_getProxy___$pp_org_pepstock_charba_client_configuration() {
  return this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_TimeTickHandler_.proxy;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_TimeTickHandler() {
  this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_TimeTickHandler_ = /**@type {CharbaCallbackProxy<?function(Object, ?string, number, Array):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  TimeTickHandler.$clinit = () =>{};
  TimeTickHandler.$loadModules();
  AbstractTickHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeTickHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  TimeTickCallback = goog.module.get('org.pepstock.charba.client.callbacks.TimeTickCallback$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ScaleTickItem = goog.module.get('org.pepstock.charba.client.items.ScaleTickItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TimeTickHandler, "org.pepstock.charba.client.configuration.TimeTickHandler");

exports = TimeTickHandler;

//# sourceMappingURL=TimeTickHandler.js.map
