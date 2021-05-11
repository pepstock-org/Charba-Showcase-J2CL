goog.module('org.pepstock.charba.client.commons.NativeObjectHashing$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class NativeObjectHashing extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NativeObjectHashing} */
 static $create__() {
  let $instance = new NativeObjectHashing();
  $instance.$ctor__org_pepstock_charba_client_commons_NativeObjectHashing__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_NativeObjectHashing__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_handleHashCode__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  NativeObjectHashing.$clinit();
  let newDescriptor = new Object();
  newDescriptor.writable = true;
  newDescriptor.configurable = false;
  newDescriptor.enumerable = false;
  newDescriptor.value = $Objects.m_hashCode__java_lang_Object(nativeObject);
  Object.defineProperty(nativeObject, NativeObjectHashing.f_HASH_CODE_PROPERTY__org_pepstock_charba_client_commons_NativeObjectHashing_, newDescriptor);
 }
 
 static $clinit() {
  NativeObjectHashing.$clinit = () =>{};
  NativeObjectHashing.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeObjectHashing;
 }
 
 static $loadModules() {
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
NativeObjectHashing.f_HASH_CODE_PROPERTY__org_pepstock_charba_client_commons_NativeObjectHashing_ = "$H";
$Util.$setClassMetadata(NativeObjectHashing, "org.pepstock.charba.client.commons.NativeObjectHashing");

exports = NativeObjectHashing;

//# sourceMappingURL=NativeObjectHashing.js.map
