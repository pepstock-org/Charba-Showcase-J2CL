goog.module('org.pepstock.charba.client.configuration.HasLineOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.configuration.HasLineOptions.$LambdaAdaptor$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 */
class HasLineOptions {
 /** @abstract @return {ConfigurationOptions} */
 m_getOptions__() {}
 /** @abstract */
 m_setShowLine__boolean(/** boolean */ showLine) {}
 /** @abstract @return {boolean} */
 m_isShowLine__() {}
 /** @abstract */
 m_setSpanGaps__boolean(/** boolean */ spanGaps) {}
 /** @abstract @return {boolean} */
 m_isSpanGaps__() {}
 /** @return {HasLineOptions} */
 static $adapt(/** ?function():ConfigurationOptions */ fn) {
  HasLineOptions.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setShowLine__$default__org_pepstock_charba_client_configuration_HasLineOptions__boolean(/** !HasLineOptions */ $thisArg, /** boolean */ showLine) {
  HasLineOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getOptions__(), null)) {
   /**@type {ExtendedOptions}*/ ($Casts.$to($thisArg.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_setShowLine__boolean(showLine);
  }
 }
 /** @return {boolean} */
 static m_isShowLine__$default__org_pepstock_charba_client_configuration_HasLineOptions(/** !HasLineOptions */ $thisArg) {
  HasLineOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getOptions__(), null)) {
   return /**@type {ExtendedOptions}*/ ($Casts.$to($thisArg.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_isShowLine__();
  }
  return Defaults.m_get__().m_getGlobal__().m_isShowLine__();
 }
 
 static m_setSpanGaps__$default__org_pepstock_charba_client_configuration_HasLineOptions__boolean(/** !HasLineOptions */ $thisArg, /** boolean */ spanGaps) {
  HasLineOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getOptions__(), null)) {
   /**@type {ExtendedOptions}*/ ($Casts.$to($thisArg.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_setSpanGaps__boolean(spanGaps);
  }
 }
 /** @return {boolean} */
 static m_isSpanGaps__$default__org_pepstock_charba_client_configuration_HasLineOptions(/** !HasLineOptions */ $thisArg) {
  HasLineOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getOptions__(), null)) {
   return /**@type {ExtendedOptions}*/ ($Casts.$to($thisArg.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_isSpanGaps__();
  }
  return Defaults.m_get__().m_getGlobal__().m_isSpanGaps__();
 }
 
 static $clinit() {
  HasLineOptions.$clinit = () =>{};
  HasLineOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_configuration_HasLineOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_configuration_HasLineOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.configuration.HasLineOptions.$LambdaAdaptor$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasLineOptions.$markImplementor(/**@type {Function}*/ (HasLineOptions));
$Util.$setClassMetadataForInterface(HasLineOptions, "org.pepstock.charba.client.configuration.HasLineOptions");

exports = HasLineOptions;

//# sourceMappingURL=HasLineOptions.js.map
