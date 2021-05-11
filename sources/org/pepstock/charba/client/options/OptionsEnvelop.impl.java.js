goog.module('org.pepstock.charba.client.options.OptionsEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImmutableEnvelop = goog.require('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

/**
 * @template T
 * @extends {ImmutableEnvelop<T>}
 */
class OptionsEnvelop extends ImmutableEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'OptionsEnvelop(Object)'.
 /** @template T @return {!OptionsEnvelop<T>} */
 static $create__java_lang_Object(/** T */ content) {
  OptionsEnvelop.$clinit();
  let $instance = new OptionsEnvelop();
  $instance.$ctor__org_pepstock_charba_client_options_OptionsEnvelop__java_lang_Object(content);
  return $instance;
 }
 //Initialization from constructor 'OptionsEnvelop(Object)'.
 
 $ctor__org_pepstock_charba_client_options_OptionsEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object(content);
 }
 //Factory method corresponding to constructor 'OptionsEnvelop(Object, boolean)'.
 /** @template T @return {!OptionsEnvelop<T>} */
 static $create__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  OptionsEnvelop.$clinit();
  let $instance = new OptionsEnvelop();
  $instance.$ctor__org_pepstock_charba_client_options_OptionsEnvelop__java_lang_Object__boolean(content, nullable);
  return $instance;
 }
 //Initialization from constructor 'OptionsEnvelop(Object, boolean)'.
 
 $ctor__org_pepstock_charba_client_options_OptionsEnvelop__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object__boolean(content, nullable);
 }
 
 static $clinit() {
  OptionsEnvelop.$clinit = () =>{};
  OptionsEnvelop.$loadModules();
  ImmutableEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OptionsEnvelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(OptionsEnvelop, "org.pepstock.charba.client.options.OptionsEnvelop");

exports = OptionsEnvelop;

//# sourceMappingURL=OptionsEnvelop.js.map
