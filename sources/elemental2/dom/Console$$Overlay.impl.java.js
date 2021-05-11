goog.module('elemental2.dom.Console.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_table__$devirt__elemental2_dom_Console__java_lang_Object__java_lang_Object(/** !Console */ $thisArg, /** * */ tabularData, /** * */ properties) {
  $Overlay.$clinit();
  $thisArg.table(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(tabularData)), properties);
 }
 
 static m_table__$devirt__elemental2_dom_Console__java_lang_Object(/** !Console */ $thisArg, /** * */ tabularData) {
  $Overlay.$clinit();
  $thisArg.table(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(tabularData)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Console;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Console");

exports = $Overlay;

//# sourceMappingURL=Console$$Overlay.js.map
