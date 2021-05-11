goog.module('org.pepstock.charba.client.ChartEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Envelop = goog.require('org.pepstock.charba.client.commons.Envelop$impl');

/**
 * @template T
 * @extends {Envelop<T>}
 */
class ChartEnvelop extends Envelop {
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
  this.$ctor__org_pepstock_charba_client_commons_Envelop__();
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
  this.$ctor__org_pepstock_charba_client_commons_Envelop__boolean(nullable);
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
  this.$ctor__org_pepstock_charba_client_commons_Envelop__java_lang_Object__boolean(content, nullable);
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
  this.$ctor__org_pepstock_charba_client_commons_Envelop__java_lang_Object(content);
 }
 
 static $clinit() {
  ChartEnvelop.$clinit = () =>{};
  ChartEnvelop.$loadModules();
  Envelop.$clinit();
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
