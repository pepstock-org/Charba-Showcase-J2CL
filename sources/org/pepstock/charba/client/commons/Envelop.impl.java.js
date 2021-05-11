goog.module('org.pepstock.charba.client.commons.Envelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImmutableEnvelop = goog.require('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

/**
 * @abstract
 * @template T
 * @extends {ImmutableEnvelop<T>}
 */
class Envelop extends ImmutableEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 //Initialization from constructor 'Envelop()'.
 
 $ctor__org_pepstock_charba_client_commons_Envelop__() {
  this.$ctor__org_pepstock_charba_client_commons_Envelop__java_lang_Object(null);
 }
 //Initialization from constructor 'Envelop(boolean)'.
 
 $ctor__org_pepstock_charba_client_commons_Envelop__boolean(/** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_Envelop__java_lang_Object__boolean(null, nullable);
 }
 //Initialization from constructor 'Envelop(Object)'.
 
 $ctor__org_pepstock_charba_client_commons_Envelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_commons_Envelop__java_lang_Object__boolean(content, false);
 }
 //Initialization from constructor 'Envelop(Object, boolean)'.
 
 $ctor__org_pepstock_charba_client_commons_Envelop__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object__boolean(content, nullable);
 }
 
 m_setContent__java_lang_Object(/** T */ content) {
  super.m_setContentInternally__java_lang_Object_$pp_org_pepstock_charba_client_commons(content);
 }
 
 static $clinit() {
  Envelop.$clinit = () =>{};
  Envelop.$loadModules();
  ImmutableEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Envelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Envelop, "org.pepstock.charba.client.commons.Envelop");

exports = Envelop;

//# sourceMappingURL=Envelop.js.map
