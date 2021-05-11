goog.module('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

/**
 * @interface
 * @extends {Key}
 */
class CanvasObjectKey {
 /** @abstract @return {boolean} */
 m_hasPattern__() {}
 
 static $clinit() {
  CanvasObjectKey.$clinit = () =>{};
  CanvasObjectKey.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Key.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_data_Dataset_CanvasObjectKey = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_data_Dataset_CanvasObjectKey;
 }
 
 static $loadModules() {}
}
CanvasObjectKey.$markImplementor(/**@type {Function}*/ (CanvasObjectKey));
$Util.$setClassMetadataForInterface(CanvasObjectKey, "org.pepstock.charba.client.data.Dataset$CanvasObjectKey");

exports = CanvasObjectKey;

//# sourceMappingURL=Dataset$CanvasObjectKey.js.map
