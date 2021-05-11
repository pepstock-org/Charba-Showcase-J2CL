goog.module('org.pepstock.charba.client.resources.EmptyResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractInjectableResource = goog.require('org.pepstock.charba.client.resources.AbstractInjectableResource$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class EmptyResource extends AbstractInjectableResource {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'EmptyResource(String)'.
 /** @return {!EmptyResource} */
 static $create__java_lang_String(/** ?string */ name) {
  EmptyResource.$clinit();
  let $instance = new EmptyResource();
  $instance.$ctor__org_pepstock_charba_client_resources_EmptyResource__java_lang_String(name);
  return $instance;
 }
 //Initialization from constructor 'EmptyResource(String)'.
 
 $ctor__org_pepstock_charba_client_resources_EmptyResource__java_lang_String(/** ?string */ name) {
  this.$ctor__org_pepstock_charba_client_resources_AbstractInjectableResource__java_lang_String__arrayOf_java_lang_String(name, /**@type {!Array<?string>}*/ ($Arrays.$init([EmptyResource.f_CONTENT__org_pepstock_charba_client_resources_EmptyResource_], j_l_String)));
 }
 //Factory method corresponding to constructor 'EmptyResource(Key)'.
 /** @return {!EmptyResource} */
 static $create__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  EmptyResource.$clinit();
  let $instance = new EmptyResource();
  $instance.$ctor__org_pepstock_charba_client_resources_EmptyResource__org_pepstock_charba_client_commons_Key(key);
  return $instance;
 }
 //Initialization from constructor 'EmptyResource(Key)'.
 
 $ctor__org_pepstock_charba_client_resources_EmptyResource__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  this.$ctor__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(key, /**@type {!Array<?string>}*/ ($Arrays.$init([EmptyResource.f_CONTENT__org_pepstock_charba_client_resources_EmptyResource_], j_l_String)));
 }
 
 static $clinit() {
  EmptyResource.$clinit = () =>{};
  EmptyResource.$loadModules();
  AbstractInjectableResource.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyResource;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {?string}*/
EmptyResource.f_CONTENT__org_pepstock_charba_client_resources_EmptyResource_ = "/* EMPTY */";
$Util.$setClassMetadata(EmptyResource, "org.pepstock.charba.client.resources.EmptyResource");

exports = EmptyResource;

//# sourceMappingURL=EmptyResource.js.map
