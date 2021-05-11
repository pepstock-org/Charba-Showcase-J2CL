goog.module('org.pepstock.charba.client.configuration.HorizontalBarOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BarOptions = goog.require('org.pepstock.charba.client.configuration.BarOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');

class HorizontalBarOptions extends BarOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HorizontalBarOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  HorizontalBarOptions.$clinit();
  let $instance = new HorizontalBarOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_HorizontalBarOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_HorizontalBarOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_BarOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  super.m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(IndexAxis.f_Y__org_pepstock_charba_client_enums_IndexAxis);
 }
 /** @override */
 m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(/** IndexAxis */ indexAxis) {
  super.m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(IndexAxis.f_Y__org_pepstock_charba_client_enums_IndexAxis);
 }
 
 static $clinit() {
  HorizontalBarOptions.$clinit = () =>{};
  HorizontalBarOptions.$loadModules();
  BarOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HorizontalBarOptions;
 }
 
 static $loadModules() {
  IndexAxis = goog.module.get('org.pepstock.charba.client.enums.IndexAxis$impl');
 }
}
$Util.$setClassMetadata(HorizontalBarOptions, "org.pepstock.charba.client.configuration.HorizontalBarOptions");

exports = HorizontalBarOptions;

//# sourceMappingURL=HorizontalBarOptions.js.map
