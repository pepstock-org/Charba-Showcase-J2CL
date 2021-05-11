goog.module('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImmutableEnvelop = goog.require('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

/**
 * @template T
 * @extends {ImmutableEnvelop<T>}
 */
class CallbacksEnvelop extends ImmutableEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'CallbacksEnvelop(Object)'.
 /** @template T @return {!CallbacksEnvelop<T>} */
 static $create__java_lang_Object(/** T */ content) {
  CallbacksEnvelop.$clinit();
  let $instance = new CallbacksEnvelop();
  $instance.$ctor__org_pepstock_charba_client_callbacks_CallbacksEnvelop__java_lang_Object(content);
  return $instance;
 }
 //Initialization from constructor 'CallbacksEnvelop(Object)'.
 
 $ctor__org_pepstock_charba_client_callbacks_CallbacksEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_callbacks_CallbacksEnvelop__java_lang_Object__boolean(content, false);
 }
 //Factory method corresponding to constructor 'CallbacksEnvelop(Object, boolean)'.
 /** @template T @return {!CallbacksEnvelop<T>} */
 static $create__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  CallbacksEnvelop.$clinit();
  let $instance = new CallbacksEnvelop();
  $instance.$ctor__org_pepstock_charba_client_callbacks_CallbacksEnvelop__java_lang_Object__boolean(content, nullable);
  return $instance;
 }
 //Initialization from constructor 'CallbacksEnvelop(Object, boolean)'.
 
 $ctor__org_pepstock_charba_client_callbacks_CallbacksEnvelop__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object__boolean(content, nullable);
 }
 
 static $clinit() {
  CallbacksEnvelop.$clinit = () =>{};
  CallbacksEnvelop.$loadModules();
  ImmutableEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CallbacksEnvelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(CallbacksEnvelop, "org.pepstock.charba.client.callbacks.CallbacksEnvelop");

exports = CallbacksEnvelop;

//# sourceMappingURL=CallbacksEnvelop.js.map
