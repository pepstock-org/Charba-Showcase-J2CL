goog.module('org.pepstock.charba.client.commons.ImmutableDate$impl');

const Date = goog.require('java.util.Date$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class ImmutableDate extends Date {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ImmutableDate()'.
 /** @return {!ImmutableDate} */
 static $create__() {
  ImmutableDate.$clinit();
  let $instance = new ImmutableDate();
  $instance.$ctor__org_pepstock_charba_client_commons_ImmutableDate__();
  return $instance;
 }
 //Initialization from constructor 'ImmutableDate()'.
 
 $ctor__org_pepstock_charba_client_commons_ImmutableDate__() {
  this.$ctor__java_util_Date__();
 }
 //Factory method corresponding to constructor 'ImmutableDate(long)'.
 /** @return {!ImmutableDate} */
 static $create__long(/** !$Long */ date) {
  ImmutableDate.$clinit();
  let $instance = new ImmutableDate();
  $instance.$ctor__org_pepstock_charba_client_commons_ImmutableDate__long(date);
  return $instance;
 }
 //Initialization from constructor 'ImmutableDate(long)'.
 
 $ctor__org_pepstock_charba_client_commons_ImmutableDate__long(/** !$Long */ date) {
  this.$ctor__java_util_Date__long(date);
 }
 /** @override @deprecated */
 m_setDate__int(/** number */ date) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(ImmutableDate.f_IMMUTABLE_EXCEPTION_MESSAGE__org_pepstock_charba_client_commons_ImmutableDate_));
 }
 /** @override @deprecated */
 m_setHours__int(/** number */ hours) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(ImmutableDate.f_IMMUTABLE_EXCEPTION_MESSAGE__org_pepstock_charba_client_commons_ImmutableDate_));
 }
 /** @override @deprecated */
 m_setMinutes__int(/** number */ minutes) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(ImmutableDate.f_IMMUTABLE_EXCEPTION_MESSAGE__org_pepstock_charba_client_commons_ImmutableDate_));
 }
 /** @override @deprecated */
 m_setMonth__int(/** number */ month) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(ImmutableDate.f_IMMUTABLE_EXCEPTION_MESSAGE__org_pepstock_charba_client_commons_ImmutableDate_));
 }
 /** @override @deprecated */
 m_setSeconds__int(/** number */ seconds) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(ImmutableDate.f_IMMUTABLE_EXCEPTION_MESSAGE__org_pepstock_charba_client_commons_ImmutableDate_));
 }
 /** @override @deprecated */
 m_setTime__long(/** !$Long */ time) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(ImmutableDate.f_IMMUTABLE_EXCEPTION_MESSAGE__org_pepstock_charba_client_commons_ImmutableDate_));
 }
 /** @override @deprecated */
 m_setYear__int(/** number */ year) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(ImmutableDate.f_IMMUTABLE_EXCEPTION_MESSAGE__org_pepstock_charba_client_commons_ImmutableDate_));
 }
 
 static $clinit() {
  ImmutableDate.$clinit = () =>{};
  ImmutableDate.$loadModules();
  Date.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImmutableDate;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@const {!$Long}*/
ImmutableDate.f_serialVersionUID__org_pepstock_charba_client_commons_ImmutableDate_ = $Long.fromInt(1);
/**@const {?string}*/
ImmutableDate.f_IMMUTABLE_EXCEPTION_MESSAGE__org_pepstock_charba_client_commons_ImmutableDate_ = "ImmutableDate is immutable";
$Util.$setClassMetadata(ImmutableDate, "org.pepstock.charba.client.commons.ImmutableDate");

exports = ImmutableDate;

//# sourceMappingURL=ImmutableDate.js.map
