goog.module('org.pepstock.charba.client.options.ScaledOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaledOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
const Options = goog.require('org.pepstock.charba.client.options.Options$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.options.ScaledOptions.Property$impl');
let Scales = goog.forwardDeclare('org.pepstock.charba.client.options.Scales$impl');

/**
 * @abstract
 * @implements {IsDefaultScaledOptions}
 */
class ScaledOptions extends Options {
 /** @protected */
 constructor() {
  super();
  /**@type {Scales}*/
  this.f_scales__org_pepstock_charba_client_options_ScaledOptions_;
 }
 //Initialization from constructor 'ScaledOptions(String, IsDefaultScaledOptions)'.
 
 $ctor__org_pepstock_charba_client_options_ScaledOptions__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** ?string */ scope, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_ScaledOptions__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_commons_NativeObject__boolean(scope, defaultValues, null, true);
 }
 //Initialization from constructor 'ScaledOptions(String, IsDefaultScaledOptions, NativeObject, boolean)'.
 
 $ctor__org_pepstock_charba_client_options_ScaledOptions__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_commons_NativeObject__boolean(/** ?string */ scope, /** IsDefaultScaledOptions */ defaultValues, /** ? */ nativeObject, /** boolean */ createScales) {
  this.$ctor__org_pepstock_charba_client_options_Options__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(scope, defaultValues, nativeObject);
  if (createScales) {
   this.f_scales__org_pepstock_charba_client_options_ScaledOptions_ = Scales.$create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScales__org_pepstock_charba_client_commons_NativeObject(this, Property.f_SCALES__org_pepstock_charba_client_options_ScaledOptions_Property, defaultValues.m_getScales__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_SCALES__org_pepstock_charba_client_options_ScaledOptions_Property));
  } else {
   this.f_scales__org_pepstock_charba_client_options_ScaledOptions_ = null;
  }
 }
 /** @override @return {Scales} */
 m_getScales__() {
  return this.f_scales__org_pepstock_charba_client_options_ScaledOptions_;
 }
 
 static $clinit() {
  ScaledOptions.$clinit = () =>{};
  ScaledOptions.$loadModules();
  Options.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaledOptions;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.options.ScaledOptions.Property$impl');
  Scales = goog.module.get('org.pepstock.charba.client.options.Scales$impl');
 }
}
IsDefaultScaledOptions.$markImplementor(ScaledOptions);
$Util.$setClassMetadata(ScaledOptions, "org.pepstock.charba.client.options.ScaledOptions");

exports = ScaledOptions;

//# sourceMappingURL=ScaledOptions.js.map
