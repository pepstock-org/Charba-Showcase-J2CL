goog.module('org.pepstock.charba.client.intl.NumberFormatOptions.NumberFormatOptionsFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
let DefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultNumberFormatOptions$impl');
let NumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.NumberFormatOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<NumberFormatOptions>}
 */
class NumberFormatOptionsFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NumberFormatOptionsFactory} */
 static $create__() {
  NumberFormatOptionsFactory.$clinit();
  let $instance = new NumberFormatOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_intl_NumberFormatOptions_NumberFormatOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_NumberFormatOptions_NumberFormatOptionsFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {NumberFormatOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return this.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(nativeObject, null);
 }
 /** @return {NumberFormatOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(/** ? */ nativeObject, /** IsDefaultNumberFormatOptions */ defaultValues) {
  return NumberFormatOptions.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(nativeObject, $Equality.$same(defaultValues, null) ? DefaultNumberFormatOptions.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions : defaultValues);
 }
 //Default method forwarding stub.
 /** @override @return {NumberFormatOptions} */
 m_create__() {
  return /**@type {NumberFormatOptions}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), NumberFormatOptions));
 }
 
 static $clinit() {
  NumberFormatOptionsFactory.$clinit = () =>{};
  NumberFormatOptionsFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberFormatOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultNumberFormatOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultNumberFormatOptions$impl');
  NumberFormatOptions = goog.module.get('org.pepstock.charba.client.intl.NumberFormatOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(NumberFormatOptionsFactory);
$Util.$setClassMetadata(NumberFormatOptionsFactory, "org.pepstock.charba.client.intl.NumberFormatOptions$NumberFormatOptionsFactory");

exports = NumberFormatOptionsFactory;

//# sourceMappingURL=NumberFormatOptions$NumberFormatOptionsFactory.js.map
