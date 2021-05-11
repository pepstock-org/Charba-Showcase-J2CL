goog.module('org.pepstock.charba.client.datalabels.AbstractElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

/**
 * @abstract
 */
class AbstractElement extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_datalabels_AbstractElement__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_datalabels() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  AbstractElement.$clinit = () =>{};
  AbstractElement.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractElement;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(AbstractElement, "org.pepstock.charba.client.datalabels.AbstractElement");

exports = AbstractElement;

//# sourceMappingURL=AbstractElement.js.map
