goog.module('org.pepstock.charba.client.options.IsTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAbstractTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultAbstractTitle$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.options.Padding$impl');

/**
 * @interface
 * @extends {IsDefaultAbstractTitle}
 */
class IsTitle {
 /** @abstract */
 m_setDisplay__boolean(/** boolean */ display) {}
 /** @abstract */
 m_setPosition__org_pepstock_charba_client_enums_Position(/** Position */ position) {}
 /** @abstract */
 m_setAlign__org_pepstock_charba_client_enums_ElementAlign(/** ElementAlign */ alignment) {}
 /** @abstract */
 m_setFullSize__boolean(/** boolean */ fullSize) {}
 /** @abstract */
 m_setText__arrayOf_java_lang_String(/** Array<?string> */ text) {}
 /** @abstract @return {List<?string>} */
 m_getText__() {}
 /** @abstract */
 m_setColor__java_lang_String(/** ?string */ color) {}
 /** @abstract @override @return {Font} */
 m_getFont__() {}
 /** @abstract @override @return {Padding} */
 m_getPadding__() {}
 
 static $clinit() {
  IsTitle.$clinit = () =>{};
  IsTitle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultAbstractTitle.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsTitle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsTitle;
 }
 
 static $loadModules() {}
}
IsTitle.$markImplementor(/**@type {Function}*/ (IsTitle));
$Util.$setClassMetadataForInterface(IsTitle, "org.pepstock.charba.client.options.IsTitle");

exports = IsTitle;

//# sourceMappingURL=IsTitle.js.map
