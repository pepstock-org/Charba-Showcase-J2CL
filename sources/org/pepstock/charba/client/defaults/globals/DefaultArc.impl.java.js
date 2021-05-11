goog.module('org.pepstock.charba.client.defaults.globals.DefaultArc$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultArc = goog.require('org.pepstock.charba.client.defaults.IsDefaultArc$impl');
const AbstractDefaultOptionsElement = goog.require('org.pepstock.charba.client.defaults.globals.AbstractDefaultOptionsElement$impl');

let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @implements {IsDefaultArc}
 */
class DefaultArc extends AbstractDefaultOptionsElement {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultArc} */
 static $create__() {
  DefaultArc.$clinit();
  let $instance = new DefaultArc();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultArc__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultArc__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement__java_lang_String__int(DefaultArc.f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_defaults_globals_DefaultArc_, DefaultArc.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultArc_);
 }
 /** @override @return {BorderAlign} */
 m_getBorderAlign__() {
  return BorderAlign.f_CENTER__org_pepstock_charba_client_enums_BorderAlign;
 }
 /** @override @return {number} */
 m_getWeight__() {
  return DefaultArc.f_DEFAULT_WEIGHT__org_pepstock_charba_client_defaults_globals_DefaultArc_;
 }
 /** @override @return {number} */
 m_getAngle__() {
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @override @return {number} */
 m_getOffset__() {
  return DefaultArc.f_DEFAULT_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultArc_;
 }
 /** @override @return {number} */
 m_getBorderRadius__() {
  return DefaultArc.f_DEFAULT_BORDER_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultArc_;
 }
 /** @override @return {number} */
 m_getHoverOffset__() {
  return this.m_getOffset__();
 }
 
 static $clinit() {
  DefaultArc.$clinit = () =>{};
  DefaultArc.$loadModules();
  AbstractDefaultOptionsElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultArc;
 }
 
 static $loadModules() {
  BorderAlign = goog.module.get('org.pepstock.charba.client.enums.BorderAlign$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@const {number}*/
DefaultArc.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultArc_ = 2;
/**@const {?string}*/
DefaultArc.f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_defaults_globals_DefaultArc_ = "#fff";
/**@const {number}*/
DefaultArc.f_DEFAULT_WEIGHT__org_pepstock_charba_client_defaults_globals_DefaultArc_ = 1;
/**@const {number}*/
DefaultArc.f_DEFAULT_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultArc_ = 0;
/**@const {number}*/
DefaultArc.f_DEFAULT_BORDER_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultArc_ = 0;
IsDefaultArc.$markImplementor(DefaultArc);
$Util.$setClassMetadata(DefaultArc, "org.pepstock.charba.client.defaults.globals.DefaultArc");

exports = DefaultArc;

//# sourceMappingURL=DefaultArc.js.map
