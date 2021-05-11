goog.module('org.pepstock.charba.client.callbacks.AbstractTooltipFooterCallback$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipFooterCallback = goog.require('org.pepstock.charba.client.callbacks.TooltipFooterCallback$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');

/**
 * @abstract
 * @implements {TooltipFooterCallback}
 */
class AbstractTooltipFooterCallback extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_callbacks_AbstractTooltipFooterCallback__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {List<?string>} */
 m_onBeforeFooter__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @override @return {List<?string>} */
 m_onFooter__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @override @return {List<?string>} */
 m_onAfterFooter__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  AbstractTooltipFooterCallback.$clinit = () =>{};
  AbstractTooltipFooterCallback.$loadModules();
  j_l_Object.$clinit();
  TooltipFooterCallback.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractTooltipFooterCallback;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
 }
}
TooltipFooterCallback.$markImplementor(AbstractTooltipFooterCallback);
$Util.$setClassMetadata(AbstractTooltipFooterCallback, "org.pepstock.charba.client.callbacks.AbstractTooltipFooterCallback");

exports = AbstractTooltipFooterCallback;

//# sourceMappingURL=AbstractTooltipFooterCallback.js.map
