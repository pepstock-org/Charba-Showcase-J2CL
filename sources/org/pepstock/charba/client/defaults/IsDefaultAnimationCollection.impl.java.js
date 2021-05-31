goog.module('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBaseAnimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseAnimation$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let FromCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FromCallback$impl');
let ToCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ToCallback$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let AnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationPropertyKey$impl');

/**
 * @interface
 * @extends {IsDefaultBaseAnimation}
 */
class IsDefaultAnimationCollection {
 /** @abstract @return {AnimationType} */
 m_getType__() {}
 /** @abstract @return {number} */
 m_getFrom__() {}
 /** @abstract @return {boolean} */
 m_getFromAsBoolean__() {}
 /** @abstract @return {?string} */
 m_getFromAsString__() {}
 /** @abstract @return {number} */
 m_getTo__() {}
 /** @abstract @return {boolean} */
 m_getToAsBoolean__() {}
 /** @abstract @return {?string} */
 m_getToAsString__() {}
 /** @abstract @return {List<AnimationPropertyKey>} */
 m_getProperties__() {}
 /** @abstract @return {FromCallback} */
 m_getFromCallback__() {}
 /** @abstract @return {ToCallback} */
 m_getToCallback__() {}
 
 static $clinit() {
  IsDefaultAnimationCollection.$clinit = () =>{};
  IsDefaultAnimationCollection.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultBaseAnimation.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection;
 }
 
 static $loadModules() {}
}
IsDefaultAnimationCollection.$markImplementor(/**@type {Function}*/ (IsDefaultAnimationCollection));
$Util.$setClassMetadataForInterface(IsDefaultAnimationCollection, "org.pepstock.charba.client.defaults.IsDefaultAnimationCollection");

exports = IsDefaultAnimationCollection;

//# sourceMappingURL=IsDefaultAnimationCollection.js.map
