goog.module('org.pepstock.charba.client.configuration.LinearTickHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTickHandler = goog.require('org.pepstock.charba.client.configuration.AbstractTickHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TickCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TickCallback$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Tick = goog.forwardDeclare('org.pepstock.charba.client.configuration.Tick$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {AbstractTickHandler<T, TickCallback>}
 */
class LinearTickHandler extends AbstractTickHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, number, number, Array):?string>}*/
  this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_LinearTickHandler_;
 }
 /** @template T @return {!LinearTickHandler<T>} */
 static $create__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(/** Axis */ axis, /** T */ configuration) {
  LinearTickHandler.$clinit();
  let $instance = new LinearTickHandler();
  $instance.$ctor__org_pepstock_charba_client_configuration_LinearTickHandler__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(axis, configuration);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_LinearTickHandler__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(/** Axis */ axis, /** T */ configuration) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractTickHandler__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(axis, configuration);
  this.$init___$p_org_pepstock_charba_client_configuration_LinearTickHandler();
  this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_LinearTickHandler_.callback = (/** Object */ context, /** number */ value, /** number */ index, /** Array */ values) =>{
   if (!$Equality.$same(this.m_getCallback___$pp_org_pepstock_charba_client_configuration(), null)) {
    return /**@type {TickCallback}*/ ($Casts.$to(this.m_getCallback___$pp_org_pepstock_charba_client_configuration(), TickCallback)).m_onCallback__org_pepstock_charba_client_configuration_Axis__double__int__java_util_List(this.m_getAxis__(), value, index, ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayDouble(values));
   }
   return j_l_String.m_valueOf__double(value);
  };
 }
 /** @override @return {?function():void} */
 m_getProxy___$pp_org_pepstock_charba_client_configuration() {
  return this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_LinearTickHandler_.proxy;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_LinearTickHandler() {
  this.f_tickCallbackProxy__org_pepstock_charba_client_configuration_LinearTickHandler_ = /**@type {CharbaCallbackProxy<?function(Object, number, number, Array):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  LinearTickHandler.$clinit = () =>{};
  LinearTickHandler.$loadModules();
  AbstractTickHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LinearTickHandler;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  TickCallback = goog.module.get('org.pepstock.charba.client.callbacks.TickCallback$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LinearTickHandler, "org.pepstock.charba.client.configuration.LinearTickHandler");

exports = LinearTickHandler;

//# sourceMappingURL=LinearTickHandler.js.map
