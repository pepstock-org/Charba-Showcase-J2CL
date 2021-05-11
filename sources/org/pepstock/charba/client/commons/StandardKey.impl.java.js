goog.module('org.pepstock.charba.client.commons.StandardKey$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

/**
 * @implements {Key}
 */
class StandardKey extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_commons_StandardKey_;
 }
 /** @return {!StandardKey} */
 static $create__java_lang_String(/** ?string */ value) {
  StandardKey.$clinit();
  let $instance = new StandardKey();
  $instance.$ctor__org_pepstock_charba_client_commons_StandardKey__java_lang_String(value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_StandardKey__java_lang_String(/** ?string */ value) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_pepstock_charba_client_commons_StandardKey_ = value;
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(this);
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_commons_StandardKey_;
 }
 
 static $clinit() {
  StandardKey.$clinit = () =>{};
  StandardKey.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardKey;
 }
 
 static $loadModules() {}
}
Key.$markImplementor(StandardKey);
$Util.$setClassMetadata(StandardKey, "org.pepstock.charba.client.commons.StandardKey");

exports = StandardKey;

//# sourceMappingURL=StandardKey.js.map
