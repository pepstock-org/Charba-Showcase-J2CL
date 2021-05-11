goog.module('org.pepstock.charba.client.Defaults.InternalDefaultScale$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Scale = goog.require('org.pepstock.charba.client.options.Scale$impl');

let GlobalScale = goog.forwardDeclare('org.pepstock.charba.client.GlobalScale$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisType$impl');

class InternalDefaultScale extends Scale {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalDefaultScale} */
 static $create__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_GlobalScale__org_pepstock_charba_client_commons_NativeObject(/** AxisType */ type, /** GlobalScale */ scale, /** ? */ nativeObject) {
  InternalDefaultScale.$clinit();
  let $instance = new InternalDefaultScale();
  $instance.$ctor__org_pepstock_charba_client_Defaults_InternalDefaultScale__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_GlobalScale__org_pepstock_charba_client_commons_NativeObject(type, scale, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Defaults_InternalDefaultScale__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_GlobalScale__org_pepstock_charba_client_commons_NativeObject(/** AxisType */ type, /** GlobalScale */ scale, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_Scale__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_defaults_IsDefaultScale__org_pepstock_charba_client_commons_NativeObject(type, scale, nativeObject);
 }
 
 static $clinit() {
  InternalDefaultScale.$clinit = () =>{};
  InternalDefaultScale.$loadModules();
  Scale.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalDefaultScale;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(InternalDefaultScale, "org.pepstock.charba.client.Defaults$InternalDefaultScale");

exports = InternalDefaultScale;

//# sourceMappingURL=Defaults$InternalDefaultScale.js.map
