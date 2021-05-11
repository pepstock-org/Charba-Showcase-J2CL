goog.module('org.pepstock.charba.client.callbacks.TooltipFooterCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');

/**
 * @interface
 */
class TooltipFooterCallback {
 /** @abstract @return {List<?string>} */
 m_onBeforeFooter__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {}
 /** @abstract @return {List<?string>} */
 m_onFooter__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {}
 /** @abstract @return {List<?string>} */
 m_onAfterFooter__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {}
 /** @return {List<?string>} */
 static m_onBeforeFooter__$default__org_pepstock_charba_client_callbacks_TooltipFooterCallback__org_pepstock_charba_client_IsChart__java_util_List(/** !TooltipFooterCallback */ $thisArg, /** IsChart */ chart, /** List<TooltipItem> */ items) {
  TooltipFooterCallback.$clinit();
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<?string>} */
 static m_onFooter__$default__org_pepstock_charba_client_callbacks_TooltipFooterCallback__org_pepstock_charba_client_IsChart__java_util_List(/** !TooltipFooterCallback */ $thisArg, /** IsChart */ chart, /** List<TooltipItem> */ items) {
  TooltipFooterCallback.$clinit();
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<?string>} */
 static m_onAfterFooter__$default__org_pepstock_charba_client_callbacks_TooltipFooterCallback__org_pepstock_charba_client_IsChart__java_util_List(/** !TooltipFooterCallback */ $thisArg, /** IsChart */ chart, /** List<TooltipItem> */ items) {
  TooltipFooterCallback.$clinit();
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  TooltipFooterCallback.$clinit = () =>{};
  TooltipFooterCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_TooltipFooterCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_TooltipFooterCallback;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
 }
}
TooltipFooterCallback.$markImplementor(/**@type {Function}*/ (TooltipFooterCallback));
$Util.$setClassMetadataForInterface(TooltipFooterCallback, "org.pepstock.charba.client.callbacks.TooltipFooterCallback");

exports = TooltipFooterCallback;

//# sourceMappingURL=TooltipFooterCallback.js.map
