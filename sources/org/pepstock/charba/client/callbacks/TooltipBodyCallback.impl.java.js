goog.module('org.pepstock.charba.client.callbacks.TooltipBodyCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');

/**
 * @interface
 */
class TooltipBodyCallback {
 /** @abstract @return {List<?string>} */
 m_onBeforeBody__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {}
 /** @abstract @return {List<?string>} */
 m_onAfterBody__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {}
 /** @return {List<?string>} */
 static m_onBeforeBody__$default__org_pepstock_charba_client_callbacks_TooltipBodyCallback__org_pepstock_charba_client_IsChart__java_util_List(/** !TooltipBodyCallback */ $thisArg, /** IsChart */ chart, /** List<TooltipItem> */ items) {
  TooltipBodyCallback.$clinit();
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<?string>} */
 static m_onAfterBody__$default__org_pepstock_charba_client_callbacks_TooltipBodyCallback__org_pepstock_charba_client_IsChart__java_util_List(/** !TooltipBodyCallback */ $thisArg, /** IsChart */ chart, /** List<TooltipItem> */ items) {
  TooltipBodyCallback.$clinit();
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  TooltipBodyCallback.$clinit = () =>{};
  TooltipBodyCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_TooltipBodyCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_TooltipBodyCallback;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
 }
}
TooltipBodyCallback.$markImplementor(/**@type {Function}*/ (TooltipBodyCallback));
$Util.$setClassMetadataForInterface(TooltipBodyCallback, "org.pepstock.charba.client.callbacks.TooltipBodyCallback");

exports = TooltipBodyCallback;

//# sourceMappingURL=TooltipBodyCallback.js.map
