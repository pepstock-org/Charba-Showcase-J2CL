goog.module('org.pepstock.charba.client.positioner.TooltipPositioner$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let CustomTooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.positioner.CustomTooltipPosition$impl');
let Point = goog.forwardDeclare('org.pepstock.charba.client.positioner.Point$impl');

/**
 * @interface
 */
class TooltipPositioner {
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_positioner_TooltipPositioner(/** TooltipPositioner */ tooltipPositioner) {
  TooltipPositioner.$clinit();
  return !$Equality.$same(tooltipPositioner, null) && !$Equality.$same(tooltipPositioner.m_getName__(), null);
 }
 /** @abstract @return {CustomTooltipPosition} */
 m_getName__() {}
 /** @abstract @return {Point} */
 m_computePosition__org_pepstock_charba_client_IsChart__java_util_List__org_pepstock_charba_client_positioner_Point(/** IsChart */ chart, /** List<DatasetReference> */ items, /** Point */ eventPoint) {}
 
 static $clinit() {
  TooltipPositioner.$clinit = () =>{};
  TooltipPositioner.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_positioner_TooltipPositioner = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_positioner_TooltipPositioner;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
TooltipPositioner.$markImplementor(/**@type {Function}*/ (TooltipPositioner));
$Util.$setClassMetadataForInterface(TooltipPositioner, "org.pepstock.charba.client.positioner.TooltipPositioner");

exports = TooltipPositioner;

//# sourceMappingURL=TooltipPositioner.js.map
