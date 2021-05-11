goog.module('org.pepstock.charba.client.options.IsPadding$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPadding = goog.require('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

/**
 * @interface
 * @extends {IsDefaultPadding}
 */
class IsPadding {
 /** @abstract */
 m_set__int(/** number */ padding) {}
 /** @abstract */
 m_setX__int(/** number */ padding) {}
 /** @abstract */
 m_setY__int(/** number */ padding) {}
 /** @abstract */
 m_setLeft__int(/** number */ padding) {}
 /** @abstract */
 m_setRight__int(/** number */ padding) {}
 /** @abstract */
 m_setTop__int(/** number */ padding) {}
 /** @abstract */
 m_setBottom__int(/** number */ padding) {}
 
 static m_set__$default__org_pepstock_charba_client_options_IsPadding__int(/** !IsPadding */ $thisArg, /** number */ padding) {
  IsPadding.$clinit();
  $thisArg.m_setTop__int(padding);
  $thisArg.m_setBottom__int(padding);
  $thisArg.m_setLeft__int(padding);
  $thisArg.m_setRight__int(padding);
 }
 
 static m_setX__$default__org_pepstock_charba_client_options_IsPadding__int(/** !IsPadding */ $thisArg, /** number */ padding) {
  IsPadding.$clinit();
  $thisArg.m_setLeft__int(padding);
  $thisArg.m_setRight__int(padding);
 }
 
 static m_setY__$default__org_pepstock_charba_client_options_IsPadding__int(/** !IsPadding */ $thisArg, /** number */ padding) {
  IsPadding.$clinit();
  $thisArg.m_setTop__int(padding);
  $thisArg.m_setBottom__int(padding);
 }
 
 static $clinit() {
  IsPadding.$clinit = () =>{};
  IsPadding.$loadModules();
  IsDefaultPadding.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultPadding.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsPadding = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsPadding;
 }
 
 static $loadModules() {}
}
IsPadding.$markImplementor(/**@type {Function}*/ (IsPadding));
$Util.$setClassMetadataForInterface(IsPadding, "org.pepstock.charba.client.options.IsPadding");

exports = IsPadding;

//# sourceMappingURL=IsPadding.js.map
