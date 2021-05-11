goog.module('org.pepstock.charba.client.options.AbstractModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.options.Padding$impl');

/**
 * @abstract
 * @template P, D
 */
class AbstractModel extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {D}*/
  this.f_defaultValues__org_pepstock_charba_client_options_AbstractModel_;
  /**@type {P}*/
  this.f_parent__org_pepstock_charba_client_options_AbstractModel_;
 }
 //Initialization from constructor 'AbstractModel(Object)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractModel__java_lang_Object(/** D */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object(null, null, defaultValues);
 }
 //Initialization from constructor 'AbstractModel(AbstractModel, Key, Object)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object(/** P */ parent, /** Key */ childKey, /** D */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, null);
 }
 //Initialization from constructor 'AbstractModel(Object, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractModel__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(/** D */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(null, null, defaultValues, nativeObject);
 }
 //Initialization from constructor 'AbstractModel(AbstractModel, Key, Object, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(/** P */ parent, /** Key */ childKey, /** D */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.f_defaultValues__org_pepstock_charba_client_options_AbstractModel_ = this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues);
  this.f_parent__org_pepstock_charba_client_options_AbstractModel_ = parent;
 }
 /** @return {P} */
 m_getParent__() {
  return this.f_parent__org_pepstock_charba_client_options_AbstractModel_;
 }
 /** @return {D} */
 m_getDefaultValues__() {
  return this.f_defaultValues__org_pepstock_charba_client_options_AbstractModel_;
 }
 
 m_setEventToModel__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(/** AbstractNode */ model, /** Key */ key, /** ?function():void */ proxy) {
  this.m_setInternalCallbackToModel__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(model, key, proxy);
 }
 
 m_setCallbackToModel__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(/** AbstractNode */ model, /** Key */ key, /** ?function():void */ proxy) {
  this.m_setInternalCallbackToModel__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(model, key, proxy);
 }
 /** @return {Padding} */
 m_loadPadding__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding(/** Key */ property, /** IsDefaultPadding */ defaultPadding) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(property);
  let paddingSize = this.m_getValue__org_pepstock_charba_client_commons_Key__int(property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
  if (Undefined.m_isNot__int(paddingSize)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(property);
  }
  return Padding.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject__int(this, property, defaultPadding, this.m_getValue__org_pepstock_charba_client_commons_Key(property), paddingSize);
 }
 
 static $clinit() {
  AbstractModel.$clinit = () =>{};
  AbstractModel.$loadModules();
  AbstractNode.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractModel;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Padding = goog.module.get('org.pepstock.charba.client.options.Padding$impl');
 }
}
$Util.$setClassMetadata(AbstractModel, "org.pepstock.charba.client.options.AbstractModel");

exports = AbstractModel;

//# sourceMappingURL=AbstractModel.js.map
