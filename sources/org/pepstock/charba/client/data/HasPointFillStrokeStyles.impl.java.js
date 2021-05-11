goog.module('org.pepstock.charba.client.data.HasPointFillStrokeStyles$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');

/**
 * @interface
 */
class HasPointFillStrokeStyles {
 /** @abstract @return {Key} */
 m_getPointFillStyleProperty__() {}
 /** @abstract @return {Key} */
 m_getPointStrokeStyleProperty__() {}
 
 static $clinit() {
  HasPointFillStrokeStyles.$clinit = () =>{};
  HasPointFillStrokeStyles.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_data_HasPointFillStrokeStyles = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_data_HasPointFillStrokeStyles;
 }
 
 static $loadModules() {}
}
HasPointFillStrokeStyles.$markImplementor(/**@type {Function}*/ (HasPointFillStrokeStyles));
$Util.$setClassMetadataForInterface(HasPointFillStrokeStyles, "org.pepstock.charba.client.data.HasPointFillStrokeStyles");

exports = HasPointFillStrokeStyles;

//# sourceMappingURL=HasPointFillStrokeStyles.js.map
