goog.module('org.pepstock.charba.client.callbacks.AbstractTooltipBodyCallback$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipBodyCallback = goog.require('org.pepstock.charba.client.callbacks.TooltipBodyCallback$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');

/**
 * @abstract
 * @implements {TooltipBodyCallback}
 */
class AbstractTooltipBodyCallback extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_callbacks_AbstractTooltipBodyCallback__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {List<?string>} */
 m_onBeforeBody__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @override @return {List<?string>} */
 m_onAfterBody__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  AbstractTooltipBodyCallback.$clinit = () =>{};
  AbstractTooltipBodyCallback.$loadModules();
  j_l_Object.$clinit();
  TooltipBodyCallback.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractTooltipBodyCallback;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
 }
}
TooltipBodyCallback.$markImplementor(AbstractTooltipBodyCallback);
$Util.$setClassMetadata(AbstractTooltipBodyCallback, "org.pepstock.charba.client.callbacks.AbstractTooltipBodyCallback");

exports = AbstractTooltipBodyCallback;

//# sourceMappingURL=AbstractTooltipBodyCallback.js.map
