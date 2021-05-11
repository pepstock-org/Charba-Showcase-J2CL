goog.module('org.pepstock.charba.client.resources.AbstractResources$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @abstract
 */
class AbstractResources extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_injectDateLibrary__org_pepstock_charba_client_resources_AbstractResources_ = false;
 }
 
 $ctor__org_pepstock_charba_client_resources_AbstractResources__boolean(/** boolean */ injectDateLibrary) {
  this.$ctor__java_lang_Object__();
  this.f_injectDateLibrary__org_pepstock_charba_client_resources_AbstractResources_ = injectDateLibrary;
 }
 /** @return {boolean} */
 m_mustInjectDateLibrary___$pp_org_pepstock_charba_client_resources() {
  return this.f_injectDateLibrary__org_pepstock_charba_client_resources_AbstractResources_;
 }
 /** @abstract */
 m_inject__() {}
 
 static $clinit() {
  AbstractResources.$clinit = () =>{};
  AbstractResources.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractResources;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(AbstractResources, "org.pepstock.charba.client.resources.AbstractResources");

exports = AbstractResources;

//# sourceMappingURL=AbstractResources.js.map
