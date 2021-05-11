goog.module('org.pepstock.charba.client.configuration.DoughnutOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPieOptions = goog.require('org.pepstock.charba.client.configuration.AbstractPieOptions$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');

class DoughnutOptions extends AbstractPieOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DoughnutOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  DoughnutOptions.$clinit();
  let $instance = new DoughnutOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_DoughnutOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_DoughnutOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractPieOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
 }
 /** @override @return {?string} */
 m_getCutoutPercentage__() {
  let value = super.m_getCutoutPercentage__();
  if ($Equality.$same(value, null)) {
   return DoughnutOptions.f_DEFAULT_CUTOUT_PERCENTAGE__org_pepstock_charba_client_configuration_DoughnutOptions_;
  }
  return value;
 }
 
 static $clinit() {
  DoughnutOptions.$clinit = () =>{};
  DoughnutOptions.$loadModules();
  AbstractPieOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoughnutOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
/**@const {?string}*/
DoughnutOptions.f_DEFAULT_CUTOUT_PERCENTAGE__org_pepstock_charba_client_configuration_DoughnutOptions_ = "50%";
$Util.$setClassMetadata(DoughnutOptions, "org.pepstock.charba.client.configuration.DoughnutOptions");

exports = DoughnutOptions;

//# sourceMappingURL=DoughnutOptions.js.map
