goog.module('org.pepstock.charba.client.impl.plugins.AbstractCursorPointerOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultCursorPointerOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsDefaultCursorPointerOptions$impl');
const AbstractPluginOptions = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.AbstractCursorPointerOptions.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {IsDefaultCursorPointerOptions}
 */
class AbstractCursorPointerOptions extends AbstractPluginOptions {
 /** @protected */
 constructor() {
  super();
 }
 //Initialization from constructor 'AbstractCursorPointerOptions(String, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(/** ?string */ pluginId, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(pluginId, nativeObject);
 }
 //Initialization from constructor 'AbstractCursorPointerOptions(String)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions__java_lang_String(/** ?string */ pluginId) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(pluginId, null);
 }
 
 m_setCursorPointer__org_pepstock_charba_client_dom_enums_CursorType(/** CursorType */ cursor) {
  if (!$Equality.$same(cursor, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CURSOR_POINTER__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions_Property, cursor.name());
  }
 }
 /** @override @return {CursorType} */
 m_getCursorPointer__() {
  return /**@type {CursorType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CURSOR_POINTER__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions_Property, CursorType.m_values__(), this.m_getCurrentCursor___$pp_org_pepstock_charba_client_impl_plugins()), CursorType));
 }
 
 m_setCurrentCursor__org_pepstock_charba_client_dom_enums_CursorType_$pp_org_pepstock_charba_client_impl_plugins(/** CursorType */ cursor) {
  if (!$Equality.$same(cursor, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CURSOR_DEFAULT__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions_Property, cursor.name());
  }
 }
 /** @return {CursorType} */
 m_getCurrentCursor___$pp_org_pepstock_charba_client_impl_plugins() {
  return /**@type {CursorType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CURSOR_POINTER__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions_Property, CursorType.m_values__(), CursorType.f_POINTER__org_pepstock_charba_client_dom_enums_CursorType), CursorType));
 }
 /** @return {CursorType} */
 static get f_DEFAULT_CURSOR_POINTER__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions() {
  return (AbstractCursorPointerOptions.$clinit(), AbstractCursorPointerOptions.$static_DEFAULT_CURSOR_POINTER__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions);
 }
 
 static $clinit() {
  AbstractCursorPointerOptions.$clinit = () =>{};
  AbstractCursorPointerOptions.$loadModules();
  AbstractPluginOptions.$clinit();
  IsDefaultCursorPointerOptions.$clinit();
  AbstractCursorPointerOptions.$static_DEFAULT_CURSOR_POINTER__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions = CursorType.f_POINTER__org_pepstock_charba_client_dom_enums_CursorType;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractCursorPointerOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CursorType = goog.module.get('org.pepstock.charba.client.dom.enums.CursorType$impl');
  Property = goog.module.get('org.pepstock.charba.client.impl.plugins.AbstractCursorPointerOptions.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {CursorType}*/
AbstractCursorPointerOptions.$static_DEFAULT_CURSOR_POINTER__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions;
IsDefaultCursorPointerOptions.$markImplementor(AbstractCursorPointerOptions);
$Util.$setClassMetadata(AbstractCursorPointerOptions, "org.pepstock.charba.client.impl.plugins.AbstractCursorPointerOptions");

exports = AbstractCursorPointerOptions;

//# sourceMappingURL=AbstractCursorPointerOptions.js.map
