goog.module('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalFooterFont$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultRoutedFont = goog.require('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');

let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');

class InternalFooterFont extends DefaultRoutedFont {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalFooterFont} */
 static $create__() {
  InternalFooterFont.$clinit();
  let $instance = new InternalFooterFont();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalFooterFont__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalFooterFont__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultRoutedFont__();
 }
 /** @override @return {Weight} */
 m_getWeight__() {
  return Weight.f_BOLD__org_pepstock_charba_client_enums_Weight;
 }
 
 static $clinit() {
  InternalFooterFont.$clinit = () =>{};
  InternalFooterFont.$loadModules();
  DefaultRoutedFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalFooterFont;
 }
 
 static $loadModules() {
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
 }
}
$Util.$setClassMetadata(InternalFooterFont, "org.pepstock.charba.client.defaults.globals.DefaultTooltips$InternalFooterFont");

exports = InternalFooterFont;

//# sourceMappingURL=DefaultTooltips$InternalFooterFont.js.map
