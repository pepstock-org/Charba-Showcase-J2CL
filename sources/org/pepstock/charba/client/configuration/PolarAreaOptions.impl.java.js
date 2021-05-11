goog.module('org.pepstock.charba.client.configuration.PolarAreaOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScalesOptions = goog.require('org.pepstock.charba.client.configuration.ScalesOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');

class PolarAreaOptions extends ScalesOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PolarAreaOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  PolarAreaOptions.$clinit();
  let $instance = new PolarAreaOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_PolarAreaOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_PolarAreaOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_ScalesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
 }
 
 static $clinit() {
  PolarAreaOptions.$clinit = () =>{};
  PolarAreaOptions.$loadModules();
  ScalesOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PolarAreaOptions;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(PolarAreaOptions, "org.pepstock.charba.client.configuration.PolarAreaOptions");

exports = PolarAreaOptions;

//# sourceMappingURL=PolarAreaOptions.js.map
