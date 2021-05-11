goog.module('org.pepstock.charba.client.callbacks.TooltipTitleCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');

/**
 * @interface
 */
class TooltipTitleCallback {
 /** @abstract @return {List<?string>} */
 m_onBeforeTitle__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {}
 /** @abstract @return {List<?string>} */
 m_onTitle__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {}
 /** @abstract @return {List<?string>} */
 m_onAfterTitle__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {}
 /** @return {List<?string>} */
 static m_onBeforeTitle__$default__org_pepstock_charba_client_callbacks_TooltipTitleCallback__org_pepstock_charba_client_IsChart__java_util_List(/** !TooltipTitleCallback */ $thisArg, /** IsChart */ chart, /** List<TooltipItem> */ items) {
  TooltipTitleCallback.$clinit();
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<?string>} */
 static m_onTitle__$default__org_pepstock_charba_client_callbacks_TooltipTitleCallback__org_pepstock_charba_client_IsChart__java_util_List(/** !TooltipTitleCallback */ $thisArg, /** IsChart */ chart, /** List<TooltipItem> */ items) {
  TooltipTitleCallback.$clinit();
  return Defaults.m_get__().m_invokeTooltipsCallbackOnTitle__org_pepstock_charba_client_IsChart__java_util_List(chart, items);
 }
 /** @return {List<?string>} */
 static m_onAfterTitle__$default__org_pepstock_charba_client_callbacks_TooltipTitleCallback__org_pepstock_charba_client_IsChart__java_util_List(/** !TooltipTitleCallback */ $thisArg, /** IsChart */ chart, /** List<TooltipItem> */ items) {
  TooltipTitleCallback.$clinit();
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  TooltipTitleCallback.$clinit = () =>{};
  TooltipTitleCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_TooltipTitleCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_TooltipTitleCallback;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
TooltipTitleCallback.$markImplementor(/**@type {Function}*/ (TooltipTitleCallback));
$Util.$setClassMetadataForInterface(TooltipTitleCallback, "org.pepstock.charba.client.callbacks.TooltipTitleCallback");

exports = TooltipTitleCallback;

//# sourceMappingURL=TooltipTitleCallback.js.map
