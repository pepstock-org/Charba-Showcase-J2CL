goog.module('elemental2.dom.CustomElementRegistry.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_define__$devirt__elemental2_dom_CustomElementRegistry__java_lang_String__java_lang_Class__elemental2_dom_CustomElementRegistry_DefineOptionsType(/** !CustomElementRegistry */ $thisArg, /** ?string */ tagName, /** Class<?> */ klass, /** ? */ options) {
  $Overlay.$clinit();
  $thisArg.define(tagName, /**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class(klass)), options);
 }
 
 static m_define__$devirt__elemental2_dom_CustomElementRegistry__java_lang_String__java_lang_Class(/** !CustomElementRegistry */ $thisArg, /** ?string */ tagName, /** Class<?> */ klass) {
  $Overlay.$clinit();
  $thisArg.define(tagName, /**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class(klass)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CustomElementRegistry;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "CustomElementRegistry");

exports = $Overlay;

//# sourceMappingURL=CustomElementRegistry$$Overlay.js.map
