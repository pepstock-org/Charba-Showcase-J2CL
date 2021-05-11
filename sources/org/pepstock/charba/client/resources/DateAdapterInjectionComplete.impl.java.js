goog.module('org.pepstock.charba.client.resources.DateAdapterInjectionComplete$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class DateAdapterInjectionComplete extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateAdapterInjectionComplete} */
 static $create__() {
  let $instance = new DateAdapterInjectionComplete();
  $instance.$ctor__org_pepstock_charba_client_resources_DateAdapterInjectionComplete__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_resources_DateAdapterInjectionComplete__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {DateAdapterInjectionComplete} */
 static m_get__() {
  DateAdapterInjectionComplete.$clinit();
  return DateAdapterInjectionComplete.f_INSTANCE__org_pepstock_charba_client_resources_DateAdapterInjectionComplete_;
 }
 
 static $clinit() {
  DateAdapterInjectionComplete.$clinit = () =>{};
  DateAdapterInjectionComplete.$loadModules();
  j_l_Object.$clinit();
  DateAdapterInjectionComplete.f_INSTANCE__org_pepstock_charba_client_resources_DateAdapterInjectionComplete_ = DateAdapterInjectionComplete.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateAdapterInjectionComplete;
 }
 
 static $loadModules() {}
}
/**@type {DateAdapterInjectionComplete}*/
DateAdapterInjectionComplete.f_INSTANCE__org_pepstock_charba_client_resources_DateAdapterInjectionComplete_;
$Util.$setClassMetadata(DateAdapterInjectionComplete, "org.pepstock.charba.client.resources.DateAdapterInjectionComplete");

exports = DateAdapterInjectionComplete;

//# sourceMappingURL=DateAdapterInjectionComplete.js.map
