goog.module('org.pepstock.charba.client.callbacks.AbstractTooltipTitleCallback$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipTitleCallback = goog.require('org.pepstock.charba.client.callbacks.TooltipTitleCallback$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');

/**
 * @abstract
 * @implements {TooltipTitleCallback}
 */
class AbstractTooltipTitleCallback extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_callbacks_AbstractTooltipTitleCallback__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {List<?string>} */
 m_onBeforeTitle__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @override @return {List<?string>} */
 m_onTitle__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @override @return {List<?string>} */
 m_onAfterTitle__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  AbstractTooltipTitleCallback.$clinit = () =>{};
  AbstractTooltipTitleCallback.$loadModules();
  j_l_Object.$clinit();
  TooltipTitleCallback.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractTooltipTitleCallback;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
 }
}
TooltipTitleCallback.$markImplementor(AbstractTooltipTitleCallback);
$Util.$setClassMetadata(AbstractTooltipTitleCallback, "org.pepstock.charba.client.callbacks.AbstractTooltipTitleCallback");

exports = AbstractTooltipTitleCallback;

//# sourceMappingURL=AbstractTooltipTitleCallback.js.map
