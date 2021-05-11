goog.module('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDataLabelsItem = goog.require('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsItem$impl');

let IsDefaultLabels = goog.forwardDeclare('org.pepstock.charba.client.datalabels.IsDefaultLabels$impl');

/**
 * @interface
 * @extends {IsDefaultDataLabelsItem}
 */
class IsDefaultDataLabelsOptions {
 /** @abstract @return {IsDefaultLabels} */
 m_getLabels__() {}
 
 static $clinit() {
  IsDefaultDataLabelsOptions.$clinit = () =>{};
  IsDefaultDataLabelsOptions.$loadModules();
  IsDefaultDataLabelsItem.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultDataLabelsItem.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions;
 }
 
 static $loadModules() {}
}
IsDefaultDataLabelsOptions.$markImplementor(/**@type {Function}*/ (IsDefaultDataLabelsOptions));
$Util.$setClassMetadataForInterface(IsDefaultDataLabelsOptions, "org.pepstock.charba.client.datalabels.IsDefaultDataLabelsOptions");

exports = IsDefaultDataLabelsOptions;

//# sourceMappingURL=IsDefaultDataLabelsOptions.js.map
