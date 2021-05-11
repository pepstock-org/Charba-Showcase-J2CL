goog.module('org.pepstock.charba.client.Helpers$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');

class Helpers extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaChartHelpers}*/
  this.f_nativeObject__org_pepstock_charba_client_Helpers_;
 }
 /** @return {!Helpers} */
 static $create__() {
  let $instance = new Helpers();
  $instance.$ctor__org_pepstock_charba_client_Helpers__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Helpers__() {
  this.$ctor__java_lang_Object__();
  ResourcesType.m_getResources__().m_inject__();
  this.f_nativeObject__org_pepstock_charba_client_Helpers_ = Chart.helpers;
 }
 /** @return {Helpers} */
 static m_get__() {
  Helpers.$clinit();
  return Helpers.f_INSTANCE__org_pepstock_charba_client_Helpers_;
 }
 /** @return {?} */
 m_mergeIf__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_NativeObject(/** ? */ target, /** ? */ source) {
  if (!$Equality.$same(target, null)) {
   if (!$Equality.$same(source, null)) {
    return this.f_nativeObject__org_pepstock_charba_client_Helpers_.mergeIf(target, source);
   } else {
    return target;
   }
  } else if (!$Equality.$same(source, null)) {
   return this.m_clone__org_pepstock_charba_client_commons_NativeObject(source);
  }
  return null;
 }
 /** @return {?} */
 m_clone__org_pepstock_charba_client_commons_NativeObject(/** ? */ source) {
  if (!$Equality.$same(source, null)) {
   return this.f_nativeObject__org_pepstock_charba_client_Helpers_.clone(source);
  }
  return null;
 }
 
 static $clinit() {
  Helpers.$clinit = () =>{};
  Helpers.$loadModules();
  j_l_Object.$clinit();
  Helpers.f_INSTANCE__org_pepstock_charba_client_Helpers_ = Helpers.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Helpers;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
/**@type {Helpers}*/
Helpers.f_INSTANCE__org_pepstock_charba_client_Helpers_;
$Util.$setClassMetadata(Helpers, "org.pepstock.charba.client.Helpers");

exports = Helpers;

//# sourceMappingURL=Helpers.js.map
