goog.module('org.pepstock.charba.client.intl.NumberFormatWrapper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbtsractFormatWrapper = goog.require('org.pepstock.charba.client.intl.AbtsractFormatWrapper$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.intl.NativeNumberFormat.$Overlay$impl');
let NumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.NumberFormatOptions$impl');
let ResolvedOptions = goog.forwardDeclare('org.pepstock.charba.client.intl.NumberFormatWrapper.ResolvedOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbtsractFormatWrapper<Intl.NumberFormat, ?number, IsDefaultNumberFormatOptions>}
 */
class NumberFormatWrapper extends AbtsractFormatWrapper {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NumberFormatWrapper} */
 static $create__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_NumberFormatOptions(/** CLocale */ locale, /** NumberFormatOptions */ options) {
  NumberFormatWrapper.$clinit();
  let $instance = new NumberFormatWrapper();
  $instance.$ctor__org_pepstock_charba_client_intl_NumberFormatWrapper__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_NumberFormatOptions(locale, options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_NumberFormatWrapper__org_pepstock_charba_client_intl_CLocale__org_pepstock_charba_client_intl_NumberFormatOptions(/** CLocale */ locale, /** NumberFormatOptions */ options) {
  this.$ctor__org_pepstock_charba_client_intl_AbtsractFormatWrapper__java_lang_Object(new Intl.NumberFormat(locale.m_getIdentifier__(), !$Equality.$same(options, null) ? options.m_nativeObject___$pp_org_pepstock_charba_client_intl() : NumberFormatWrapper.f_EMPTY_OPTIONS__org_pepstock_charba_client_intl_NumberFormatWrapper_));
 }
 /** @return {?string} */
 m_format__java_lang_Double_$pp_org_pepstock_charba_client_intl(/** ?number */ value) {
  return /**@type {Intl.NumberFormat}*/ ($Casts.$to(this.m_getNativeFormat___$pp_org_pepstock_charba_client_intl(), $Overlay)).format(Double.m_doubleValue__java_lang_Double(value));
 }
 /** @override @return {IsDefaultNumberFormatOptions} */
 m_resolvedOptions___$pp_org_pepstock_charba_client_intl() {
  let formatOptions = NumberFormatOptions.$create__org_pepstock_charba_client_commons_NativeObject(/**@type {Intl.NumberFormat}*/ ($Casts.$to(this.m_getNativeFormat___$pp_org_pepstock_charba_client_intl(), $Overlay)).resolvedOptions());
  return ResolvedOptions.$create__org_pepstock_charba_client_intl_NumberFormatOptions(formatOptions);
 }
 /** @return {Array} */
 m_formatToParts__java_lang_Double_$pp_org_pepstock_charba_client_intl(/** ?number */ value) {
  return /**@type {Intl.NumberFormat}*/ ($Casts.$to(this.m_getNativeFormat___$pp_org_pepstock_charba_client_intl(), $Overlay)).formatToParts(Double.m_doubleValue__java_lang_Double(value));
 }
 //Bridge method.
 /** @override @return {?string} */
 m_format__java_lang_Object_$pp_org_pepstock_charba_client_intl(/** ?number */ arg0) {
  return this.m_format__java_lang_Double_$pp_org_pepstock_charba_client_intl(/**@type {?number}*/ ($Casts.$to(arg0, Double)));
 }
 //Bridge method.
 /** @override @return {Array} */
 m_formatToParts__java_lang_Object_$pp_org_pepstock_charba_client_intl(/** ?number */ arg0) {
  return this.m_formatToParts__java_lang_Double_$pp_org_pepstock_charba_client_intl(/**@type {?number}*/ ($Casts.$to(arg0, Double)));
 }
 
 static $clinit() {
  NumberFormatWrapper.$clinit = () =>{};
  NumberFormatWrapper.$loadModules();
  AbtsractFormatWrapper.$clinit();
  NumberFormatWrapper.f_EMPTY_OPTIONS__org_pepstock_charba_client_intl_NumberFormatWrapper_ = NumberFormatOptions.$create__().m_nativeObject___$pp_org_pepstock_charba_client_intl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberFormatWrapper;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.intl.NativeNumberFormat.$Overlay$impl');
  NumberFormatOptions = goog.module.get('org.pepstock.charba.client.intl.NumberFormatOptions$impl');
  ResolvedOptions = goog.module.get('org.pepstock.charba.client.intl.NumberFormatWrapper.ResolvedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {?}*/
NumberFormatWrapper.f_EMPTY_OPTIONS__org_pepstock_charba_client_intl_NumberFormatWrapper_;
$Util.$setClassMetadata(NumberFormatWrapper, "org.pepstock.charba.client.intl.NumberFormatWrapper");

exports = NumberFormatWrapper;

//# sourceMappingURL=NumberFormatWrapper.js.map
