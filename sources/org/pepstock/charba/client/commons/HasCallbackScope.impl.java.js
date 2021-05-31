goog.module('org.pepstock.charba.client.commons.HasCallbackScope$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.commons.HasCallbackScope.$LambdaAdaptor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @interface
 */
class HasCallbackScope {
 /** @return {?string} */
 static m_extractScope__org_pepstock_charba_client_commons_AbstractNode(/** AbstractNode */ node) {
  HasCallbackScope.$clinit();
  let root = /**@type {AbstractNode}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(node, "Node instance is null"), AbstractNode)).m_getRootNode__();
  if (HasCallbackScope.$isInstance(root)) {
   let hasCallbackScope = /**@type {HasCallbackScope}*/ ($Casts.$to(root, HasCallbackScope));
   return hasCallbackScope.m_getScope__();
  }
  throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Node instance is not " + j_l_String.m_valueOf__java_lang_Object(Class.$get(HasCallbackScope).m_getName__()) + ", but is " + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(root).m_getName__())));
 }
 /** @abstract @return {?string} */
 m_getScope__() {}
 /** @return {HasCallbackScope} */
 static $adapt(/** ?function():?string */ fn) {
  HasCallbackScope.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  HasCallbackScope.$clinit = () =>{};
  HasCallbackScope.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_commons_HasCallbackScope = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_commons_HasCallbackScope;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  AbstractNode = goog.module.get('org.pepstock.charba.client.commons.AbstractNode$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.commons.HasCallbackScope.$LambdaAdaptor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
HasCallbackScope.$markImplementor(/**@type {Function}*/ (HasCallbackScope));
$Util.$setClassMetadataForInterface(HasCallbackScope, "org.pepstock.charba.client.commons.HasCallbackScope");

exports = HasCallbackScope;

//# sourceMappingURL=HasCallbackScope.js.map
