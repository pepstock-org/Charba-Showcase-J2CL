goog.module('org.pepstock.charba.client.positioner.AbstractTooltipPositioner$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipPositioner = goog.require('org.pepstock.charba.client.positioner.TooltipPositioner$impl');

let CustomTooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.positioner.CustomTooltipPosition$impl');

/**
 * @abstract
 * @implements {TooltipPositioner}
 */
class AbstractTooltipPositioner extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CustomTooltipPosition}*/
  this.f_name__org_pepstock_charba_client_positioner_AbstractTooltipPositioner_;
 }
 
 $ctor__org_pepstock_charba_client_positioner_AbstractTooltipPositioner__java_lang_String(/** ?string */ name) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_pepstock_charba_client_positioner_AbstractTooltipPositioner_ = CustomTooltipPosition.$create__java_lang_String(name);
 }
 /** @override @return {CustomTooltipPosition} */
 m_getName__() {
  return this.f_name__org_pepstock_charba_client_positioner_AbstractTooltipPositioner_;
 }
 
 static $clinit() {
  AbstractTooltipPositioner.$clinit = () =>{};
  AbstractTooltipPositioner.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractTooltipPositioner;
 }
 
 static $loadModules() {
  CustomTooltipPosition = goog.module.get('org.pepstock.charba.client.positioner.CustomTooltipPosition$impl');
 }
}
TooltipPositioner.$markImplementor(AbstractTooltipPositioner);
$Util.$setClassMetadata(AbstractTooltipPositioner, "org.pepstock.charba.client.positioner.AbstractTooltipPositioner");

exports = AbstractTooltipPositioner;

//# sourceMappingURL=AbstractTooltipPositioner.js.map
