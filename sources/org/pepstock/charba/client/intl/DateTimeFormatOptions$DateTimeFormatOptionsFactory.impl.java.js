goog.module('org.pepstock.charba.client.intl.DateTimeFormatOptions.DateTimeFormatOptionsFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultDateTimeFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultDateTimeFormatOptions$impl');
let DefaultDateTimeFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultDateTimeFormatOptions$impl');
let DateTimeFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.DateTimeFormatOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<DateTimeFormatOptions>}
 */
class DateTimeFormatOptionsFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatOptionsFactory} */
 static $create__() {
  DateTimeFormatOptionsFactory.$clinit();
  let $instance = new DateTimeFormatOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions_DateTimeFormatOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_DateTimeFormatOptions_DateTimeFormatOptionsFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {DateTimeFormatOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return this.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateTimeFormatOptions(nativeObject, null);
 }
 /** @return {DateTimeFormatOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateTimeFormatOptions(/** ? */ nativeObject, /** IsDefaultDateTimeFormatOptions */ defaultValues) {
  return DateTimeFormatOptions.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateTimeFormatOptions(nativeObject, $Equality.$same(defaultValues, null) ? DefaultDateTimeFormatOptions.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultDateTimeFormatOptions : defaultValues);
 }
 //Default method forwarding stub.
 /** @override @return {DateTimeFormatOptions} */
 m_create__() {
  return /**@type {DateTimeFormatOptions}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), DateTimeFormatOptions));
 }
 
 static $clinit() {
  DateTimeFormatOptionsFactory.$clinit = () =>{};
  DateTimeFormatOptionsFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultDateTimeFormatOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultDateTimeFormatOptions$impl');
  DateTimeFormatOptions = goog.module.get('org.pepstock.charba.client.intl.DateTimeFormatOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(DateTimeFormatOptionsFactory);
$Util.$setClassMetadata(DateTimeFormatOptionsFactory, "org.pepstock.charba.client.intl.DateTimeFormatOptions$DateTimeFormatOptionsFactory");

exports = DateTimeFormatOptionsFactory;

//# sourceMappingURL=DateTimeFormatOptions$DateTimeFormatOptionsFactory.js.map
