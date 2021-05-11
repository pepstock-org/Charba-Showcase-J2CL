goog.module('org.pepstock.charba.client.utils.Console$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

class Console extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Console} */
 static $create__() {
  let $instance = new Console();
  $instance.$ctor__org_pepstock_charba_client_utils_Console__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_utils_Console__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_log__arrayOf_java_lang_Object(/** Array<*> */ objects) {
  Console.$clinit();
  window.console.log(...InternalPreconditions.m_checkNotNull__java_lang_Object(objects));
 }
 
 static m_dir__java_lang_Object(/** * */ object) {
  Console.$clinit();
  window.console.dir(object);
 }
 
 static m_dirxml__java_lang_Object(/** * */ object) {
  Console.$clinit();
  window.console.dirxml(object);
 }
 
 static $clinit() {
  Console.$clinit = () =>{};
  Console.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Console;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
$Util.$setClassMetadata(Console, "org.pepstock.charba.client.utils.Console");

exports = Console;

//# sourceMappingURL=Console.js.map
