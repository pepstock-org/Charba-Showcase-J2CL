goog.module('org.pepstock.charba.client.configuration.VerticalLineOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LineOptions = goog.require('org.pepstock.charba.client.configuration.LineOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');

class VerticalLineOptions extends LineOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!VerticalLineOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  VerticalLineOptions.$clinit();
  let $instance = new VerticalLineOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_VerticalLineOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_VerticalLineOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_LineOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  super.m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(IndexAxis.f_Y__org_pepstock_charba_client_enums_IndexAxis);
 }
 /** @override */
 m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(/** IndexAxis */ indexAxis) {
  super.m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(IndexAxis.f_Y__org_pepstock_charba_client_enums_IndexAxis);
 }
 
 static $clinit() {
  VerticalLineOptions.$clinit = () =>{};
  VerticalLineOptions.$loadModules();
  LineOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof VerticalLineOptions;
 }
 
 static $loadModules() {
  IndexAxis = goog.module.get('org.pepstock.charba.client.enums.IndexAxis$impl');
 }
}
$Util.$setClassMetadata(VerticalLineOptions, "org.pepstock.charba.client.configuration.VerticalLineOptions");

exports = VerticalLineOptions;

//# sourceMappingURL=VerticalLineOptions.js.map
