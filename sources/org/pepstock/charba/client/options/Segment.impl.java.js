goog.module('org.pepstock.charba.client.options.Segment$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');

/**
 * @extends {AbstractModel<ExtendedOptions, IsDefaultOptions>}
 */
class Segment extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Segment} */
 static $create__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** ExtendedOptions */ options, /** Key */ childKey, /** IsDefaultOptions */ defaultValues, /** ? */ nativeObject) {
  Segment.$clinit();
  let $instance = new Segment();
  $instance.$ctor__org_pepstock_charba_client_options_Segment__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Segment__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** ExtendedOptions */ options, /** Key */ childKey, /** IsDefaultOptions */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 
 static $clinit() {
  Segment.$clinit = () =>{};
  Segment.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Segment;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Segment, "org.pepstock.charba.client.options.Segment");

exports = Segment;

//# sourceMappingURL=Segment.js.map
