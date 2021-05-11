goog.module('org.pepstock.charba.client.defaults.IsDefaultLegend$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPluginElement = goog.require('org.pepstock.charba.client.defaults.IsDefaultPluginElement$impl');
const IsDefaultTextDirectionHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultTextDirectionHandler$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let IsDefaultLegendLabels = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLegendLabels$impl');
let IsDefaultLegendTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLegendTitle$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');

/**
 * @interface
 * @extends {IsDefaultTextDirectionHandler}
 * @extends {IsDefaultPluginElement}
 */
class IsDefaultLegend {
 /** @abstract @return {IsDefaultLegendLabels} */
 m_getLabels__() {}
 /** @abstract @return {IsDefaultLegendTitle} */
 m_getTitle__() {}
 /** @abstract @return {List<Event>} */
 m_getEvents__() {}
 /** @abstract @return {boolean} */
 m_isFullSize__() {}
 /** @abstract @return {boolean} */
 m_isReverse__() {}
 /** @abstract @return {number} */
 m_getMaxWidth__() {}
 /** @abstract @return {number} */
 m_getMaxHeight__() {}
 
 static $clinit() {
  IsDefaultLegend.$clinit = () =>{};
  IsDefaultLegend.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultTextDirectionHandler.$markImplementor(ctor);
  IsDefaultPluginElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultLegend = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultLegend;
 }
 
 static $loadModules() {}
}
IsDefaultLegend.$markImplementor(/**@type {Function}*/ (IsDefaultLegend));
$Util.$setClassMetadataForInterface(IsDefaultLegend, "org.pepstock.charba.client.defaults.IsDefaultLegend");

exports = IsDefaultLegend;

//# sourceMappingURL=IsDefaultLegend.js.map
