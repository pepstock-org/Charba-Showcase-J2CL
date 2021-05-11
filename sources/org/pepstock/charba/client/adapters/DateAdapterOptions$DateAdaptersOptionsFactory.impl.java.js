goog.module('org.pepstock.charba.client.adapters.DateAdapterOptions.DateAdaptersOptionsFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterOptions$impl');
let IsDefaultDateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions$impl');
let DefaultDateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultDateAdapterOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<DateAdapterOptions>}
 */
class DateAdaptersOptionsFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateAdaptersOptionsFactory} */
 static $create__() {
  DateAdaptersOptionsFactory.$clinit();
  let $instance = new DateAdaptersOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_adapters_DateAdapterOptions_DateAdaptersOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_adapters_DateAdapterOptions_DateAdaptersOptionsFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {DateAdapterOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return this.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(nativeObject, null);
 }
 /** @return {DateAdapterOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(/** ? */ nativeObject, /** IsDefaultDateAdapterOptions */ defaultValues) {
  return DateAdapterOptions.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(nativeObject, $Equality.$same(defaultValues, null) ? DefaultDateAdapterOptions.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateAdapterOptions : defaultValues);
 }
 //Default method forwarding stub.
 /** @override @return {DateAdapterOptions} */
 m_create__() {
  return /**@type {DateAdapterOptions}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), DateAdapterOptions));
 }
 
 static $clinit() {
  DateAdaptersOptionsFactory.$clinit = () =>{};
  DateAdaptersOptionsFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateAdaptersOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DateAdapterOptions = goog.module.get('org.pepstock.charba.client.adapters.DateAdapterOptions$impl');
  DefaultDateAdapterOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultDateAdapterOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(DateAdaptersOptionsFactory);
$Util.$setClassMetadata(DateAdaptersOptionsFactory, "org.pepstock.charba.client.adapters.DateAdapterOptions$DateAdaptersOptionsFactory");

exports = DateAdaptersOptionsFactory;

//# sourceMappingURL=DateAdapterOptions$DateAdaptersOptionsFactory.js.map
