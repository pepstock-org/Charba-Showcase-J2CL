goog.module('org.pepstock.charba.client.ChartEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseEnvelop = goog.require('org.pepstock.charba.client.commons.BaseEnvelop$impl');

/**
 * @template T
 * @extends {BaseEnvelop<T>}
 */
class ChartEnvelop extends BaseEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ChartEnvelop()'.
 /** @template T @return {!ChartEnvelop<T>} */
 static $create__() {
  ChartEnvelop.$clinit();
  let $instance = new ChartEnvelop();
  $instance.$ctor__org_pepstock_charba_client_ChartEnvelop__();
  return $instance;
 }
 //Initialization from constructor 'ChartEnvelop()'.
 
 $ctor__org_pepstock_charba_client_ChartEnvelop__() {
  this.$ctor__org_pepstock_charba_client_commons_BaseEnvelop__();
 }
 //Factory method corresponding to constructor 'ChartEnvelop(boolean)'.
 /** @template T @return {!ChartEnvelop<T>} */
 static $create__boolean(/** boolean */ nullable) {
  ChartEnvelop.$clinit();
  let $instance = new ChartEnvelop();
  $instance.$ctor__org_pepstock_charba_client_ChartEnvelop__boolean(nullable);
  return $instance;
 }
 //Initialization from constructor 'ChartEnvelop(boolean)'.
 
 $ctor__org_pepstock_charba_client_ChartEnvelop__boolean(/** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_BaseEnvelop__boolean(nullable);
 }
 //Factory method corresponding to constructor 'ChartEnvelop(Object, boolean)'.
 /** @template T @return {!ChartEnvelop<T>} */
 static $create__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  ChartEnvelop.$clinit();
  let $instance = new ChartEnvelop();
  $instance.$ctor__org_pepstock_charba_client_ChartEnvelop__java_lang_Object__boolean(content, nullable);
  return $instance;
 }
 //Initialization from constructor 'ChartEnvelop(Object, boolean)'.
 
 $ctor__org_pepstock_charba_client_ChartEnvelop__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_BaseEnvelop__java_lang_Object__boolean(content, nullable);
 }
 //Factory method corresponding to constructor 'ChartEnvelop(Object)'.
 /** @template T @return {!ChartEnvelop<T>} */
 static $create__java_lang_Object(/** T */ content) {
  ChartEnvelop.$clinit();
  let $instance = new ChartEnvelop();
  $instance.$ctor__org_pepstock_charba_client_ChartEnvelop__java_lang_Object(content);
  return $instance;
 }
 //Initialization from constructor 'ChartEnvelop(Object)'.
 
 $ctor__org_pepstock_charba_client_ChartEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_commons_BaseEnvelop__java_lang_Object(content);
 }
 
 static $clinit() {
  ChartEnvelop.$clinit = () =>{};
  ChartEnvelop.$loadModules();
  BaseEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartEnvelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(ChartEnvelop, "org.pepstock.charba.client.ChartEnvelop");

exports = ChartEnvelop;

//# sourceMappingURL=ChartEnvelop.js.map
