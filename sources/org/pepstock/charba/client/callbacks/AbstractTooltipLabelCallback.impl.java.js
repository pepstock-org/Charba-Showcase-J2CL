goog.module('org.pepstock.charba.client.callbacks.AbstractTooltipLabelCallback$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipLabelCallback = goog.require('org.pepstock.charba.client.callbacks.TooltipLabelCallback$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let TooltipLabelColor = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelColor$impl');
let TooltipLabelPointStyle = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');

/**
 * @abstract
 * @implements {TooltipLabelCallback}
 */
class AbstractTooltipLabelCallback extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_callbacks_AbstractTooltipLabelCallback__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_onBeforeLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @override @return {?string} */
 m_onLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @override @return {TooltipLabelColor} */
 m_onLabelColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {
  return null;
 }
 /** @override @return {IsColor} */
 m_onLabelTextColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   return chart.m_getOptions__().m_getTooltips__().m_getBodyColor__();
  }
  return Defaults.m_get__().m_getGlobal__().m_getColor__();
 }
 /** @override @return {?string} */
 m_onAfterLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ chart, /** TooltipItem */ item) {
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 //Default method forwarding stub.
 /** @override @return {TooltipLabelPointStyle} */
 m_onLabelPointStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(/** IsChart */ arg0, /** TooltipItem */ arg1) {
  return TooltipLabelCallback.m_onLabelPointStyle__$default__org_pepstock_charba_client_callbacks_TooltipLabelCallback__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(this, arg0, arg1);
 }
 
 static $clinit() {
  AbstractTooltipLabelCallback.$clinit = () =>{};
  AbstractTooltipLabelCallback.$loadModules();
  j_l_Object.$clinit();
  TooltipLabelCallback.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractTooltipLabelCallback;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
 }
}
TooltipLabelCallback.$markImplementor(AbstractTooltipLabelCallback);
$Util.$setClassMetadata(AbstractTooltipLabelCallback, "org.pepstock.charba.client.callbacks.AbstractTooltipLabelCallback");

exports = AbstractTooltipLabelCallback;

//# sourceMappingURL=AbstractTooltipLabelCallback.js.map
