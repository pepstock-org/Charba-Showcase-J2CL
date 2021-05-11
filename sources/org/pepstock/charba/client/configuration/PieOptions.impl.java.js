goog.module('org.pepstock.charba.client.configuration.PieOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPieOptions = goog.require('org.pepstock.charba.client.configuration.AbstractPieOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class PieOptions extends AbstractPieOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PieOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  PieOptions.$clinit();
  let $instance = new PieOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_PieOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_PieOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractPieOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
 }
 /** @override @return {number} */
 m_getCutout__() {
  let value = super.m_getCutout__();
  if (Undefined.m_is__double(value)) {
   return PieOptions.f_DEFAULT_CUTOUT__org_pepstock_charba_client_configuration_PieOptions_;
  }
  return value;
 }
 
 static $clinit() {
  PieOptions.$clinit = () =>{};
  PieOptions.$loadModules();
  AbstractPieOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PieOptions;
 }
 
 static $loadModules() {
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@const {number}*/
PieOptions.f_DEFAULT_CUTOUT__org_pepstock_charba_client_configuration_PieOptions_ = 0;
$Util.$setClassMetadata(PieOptions, "org.pepstock.charba.client.configuration.PieOptions");

exports = PieOptions;

//# sourceMappingURL=PieOptions.js.map
