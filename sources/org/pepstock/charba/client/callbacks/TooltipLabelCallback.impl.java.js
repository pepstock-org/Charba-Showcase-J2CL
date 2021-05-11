goog.module('org.pepstock.charba.client.callbacks.TooltipLabelCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let TooltipLabelColor = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelColor$impl');
let TooltipLabelPointStyle = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');

/**
 * @interface
 */
class TooltipLabelCallback {
 /** @abstract @return {?string} */
 m_onBeforeLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {}
 /** @abstract @return {?string} */
 m_onLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {}
 /** @abstract @return {TooltipLabelColor} */
 m_onLabelColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {}
 /** @abstract @return {TooltipLabelPointStyle} */
 m_onLabelPointStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {}
 /** @abstract @return {IsColor} */
 m_onLabelTextColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {}
 /** @abstract @return {?string} */
 m_onAfterLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {}
 /** @return {?string} */
 static m_onBeforeLabel__$default__org_pepstock_charba_client_callbacks_TooltipLabelCallback__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** !TooltipLabelCallback */ $thisArg, /** IsChart */ chart, /** TooltipItem */ item) {
  TooltipLabelCallback.$clinit();
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {?string} */
 static m_onLabel__$default__org_pepstock_charba_client_callbacks_TooltipLabelCallback__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** !TooltipLabelCallback */ $thisArg, /** IsChart */ chart, /** TooltipItem */ item) {
  TooltipLabelCallback.$clinit();
  return Defaults.m_get__().m_invokeTooltipsCallbackOnLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(chart, item);
 }
 /** @return {TooltipLabelColor} */
 static m_onLabelColor__$default__org_pepstock_charba_client_callbacks_TooltipLabelCallback__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** !TooltipLabelCallback */ $thisArg, /** IsChart */ chart, /** TooltipItem */ item) {
  TooltipLabelCallback.$clinit();
  return Defaults.m_get__().m_invokeTooltipsCallbackOnLabelColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(chart, item);
 }
 /** @return {TooltipLabelPointStyle} */
 static m_onLabelPointStyle__$default__org_pepstock_charba_client_callbacks_TooltipLabelCallback__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** !TooltipLabelCallback */ $thisArg, /** IsChart */ chart, /** TooltipItem */ item) {
  TooltipLabelCallback.$clinit();
  return Defaults.m_get__().m_invokeTooltipsCallbackOnLabelPointStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(chart, item);
 }
 /** @return {IsColor} */
 static m_onLabelTextColor__$default__org_pepstock_charba_client_callbacks_TooltipLabelCallback__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** !TooltipLabelCallback */ $thisArg, /** IsChart */ chart, /** TooltipItem */ item) {
  TooltipLabelCallback.$clinit();
  return chart.m_getOptions__().m_getTooltips__().m_getBodyColor__();
 }
 /** @return {?string} */
 static m_onAfterLabel__$default__org_pepstock_charba_client_callbacks_TooltipLabelCallback__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** !TooltipLabelCallback */ $thisArg, /** IsChart */ chart, /** TooltipItem */ item) {
  TooltipLabelCallback.$clinit();
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 
 static $clinit() {
  TooltipLabelCallback.$clinit = () =>{};
  TooltipLabelCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_TooltipLabelCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_TooltipLabelCallback;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
 }
}
TooltipLabelCallback.$markImplementor(/**@type {Function}*/ (TooltipLabelCallback));
$Util.$setClassMetadataForInterface(TooltipLabelCallback, "org.pepstock.charba.client.callbacks.TooltipLabelCallback");

exports = TooltipLabelCallback;

//# sourceMappingURL=TooltipLabelCallback.js.map
