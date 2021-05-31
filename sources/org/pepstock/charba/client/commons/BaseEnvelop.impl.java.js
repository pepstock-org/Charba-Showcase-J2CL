goog.module('org.pepstock.charba.client.commons.BaseEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImmutableEnvelop = goog.require('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

/**
 * @abstract
 * @template T
 * @extends {ImmutableEnvelop<T>}
 */
class BaseEnvelop extends ImmutableEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 //Initialization from constructor 'BaseEnvelop()'.
 
 $ctor__org_pepstock_charba_client_commons_BaseEnvelop__() {
  this.$ctor__org_pepstock_charba_client_commons_BaseEnvelop__java_lang_Object(null);
 }
 //Initialization from constructor 'BaseEnvelop(boolean)'.
 
 $ctor__org_pepstock_charba_client_commons_BaseEnvelop__boolean(/** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_BaseEnvelop__java_lang_Object__boolean(null, nullable);
 }
 //Initialization from constructor 'BaseEnvelop(Object)'.
 
 $ctor__org_pepstock_charba_client_commons_BaseEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_commons_BaseEnvelop__java_lang_Object__boolean(content, false);
 }
 //Initialization from constructor 'BaseEnvelop(Object, boolean)'.
 
 $ctor__org_pepstock_charba_client_commons_BaseEnvelop__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object__boolean(content, nullable);
 }
 
 m_setContent__java_lang_Object(/** T */ content) {
  super.m_setContentInternally__java_lang_Object_$pp_org_pepstock_charba_client_commons(content);
 }
 
 static $clinit() {
  BaseEnvelop.$clinit = () =>{};
  BaseEnvelop.$loadModules();
  ImmutableEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseEnvelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(BaseEnvelop, "org.pepstock.charba.client.commons.BaseEnvelop");

exports = BaseEnvelop;

//# sourceMappingURL=BaseEnvelop.js.map
