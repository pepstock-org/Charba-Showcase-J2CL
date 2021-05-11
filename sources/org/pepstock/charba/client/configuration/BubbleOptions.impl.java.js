goog.module('org.pepstock.charba.client.configuration.BubbleOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScalesOptions = goog.require('org.pepstock.charba.client.configuration.ScalesOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');

class BubbleOptions extends ScalesOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BubbleOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  BubbleOptions.$clinit();
  let $instance = new BubbleOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_BubbleOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_BubbleOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_ScalesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
 }
 
 static $clinit() {
  BubbleOptions.$clinit = () =>{};
  BubbleOptions.$loadModules();
  ScalesOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleOptions;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(BubbleOptions, "org.pepstock.charba.client.configuration.BubbleOptions");

exports = BubbleOptions;

//# sourceMappingURL=BubbleOptions.js.map
