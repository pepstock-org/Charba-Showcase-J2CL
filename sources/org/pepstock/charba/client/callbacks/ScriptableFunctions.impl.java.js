goog.module('org.pepstock.charba.client.callbacks.ScriptableFunctions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class ScriptableFunctions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ScriptableFunctions} */
 static $create__() {
  let $instance = new ScriptableFunctions();
  $instance.$ctor__org_pepstock_charba_client_callbacks_ScriptableFunctions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_callbacks_ScriptableFunctions__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  ScriptableFunctions.$clinit = () =>{};
  ScriptableFunctions.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScriptableFunctions;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(ScriptableFunctions, "org.pepstock.charba.client.callbacks.ScriptableFunctions");

exports = ScriptableFunctions;

//# sourceMappingURL=ScriptableFunctions.js.map
