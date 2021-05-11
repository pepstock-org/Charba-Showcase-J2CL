goog.module('org.pepstock.charba.client.zoom.DefaultOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultOptions = goog.require('org.pepstock.charba.client.zoom.IsDefaultOptions$impl');

let DefaultLimits = goog.forwardDeclare('org.pepstock.charba.client.zoom.DefaultLimits$impl');
let DefaultPan = goog.forwardDeclare('org.pepstock.charba.client.zoom.DefaultPan$impl');
let DefaultZoom = goog.forwardDeclare('org.pepstock.charba.client.zoom.DefaultZoom$impl');
let IsDefaultLimits = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultLimits$impl');

/**
 * @implements {IsDefaultOptions}
 */
class DefaultOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultPan}*/
  this.f_pan__org_pepstock_charba_client_zoom_DefaultOptions_;
  /**@type {DefaultZoom}*/
  this.f_zoom__org_pepstock_charba_client_zoom_DefaultOptions_;
  /**@type {DefaultLimits}*/
  this.f_limits__org_pepstock_charba_client_zoom_DefaultOptions_;
 }
 /** @return {!DefaultOptions} */
 static $create__() {
  let $instance = new DefaultOptions();
  $instance.$ctor__org_pepstock_charba_client_zoom_DefaultOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_DefaultOptions__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_zoom_DefaultOptions();
 }
 /** @override @return {DefaultPan} */
 m_getPan__() {
  return this.f_pan__org_pepstock_charba_client_zoom_DefaultOptions_;
 }
 /** @override @return {DefaultZoom} */
 m_getZoom__() {
  return this.f_zoom__org_pepstock_charba_client_zoom_DefaultOptions_;
 }
 /** @override @return {IsDefaultLimits} */
 m_getLimits__() {
  return this.f_limits__org_pepstock_charba_client_zoom_DefaultOptions_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_zoom_DefaultOptions() {
  this.f_pan__org_pepstock_charba_client_zoom_DefaultOptions_ = DefaultPan.$create__();
  this.f_zoom__org_pepstock_charba_client_zoom_DefaultOptions_ = DefaultZoom.$create__();
  this.f_limits__org_pepstock_charba_client_zoom_DefaultOptions_ = DefaultLimits.$create__();
 }
 /** @return {DefaultOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_zoom_DefaultOptions() {
  return (DefaultOptions.$clinit(), DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultOptions);
 }
 
 static $clinit() {
  DefaultOptions.$clinit = () =>{};
  DefaultOptions.$loadModules();
  j_l_Object.$clinit();
  DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultOptions = DefaultOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultOptions;
 }
 
 static $loadModules() {
  DefaultLimits = goog.module.get('org.pepstock.charba.client.zoom.DefaultLimits$impl');
  DefaultPan = goog.module.get('org.pepstock.charba.client.zoom.DefaultPan$impl');
  DefaultZoom = goog.module.get('org.pepstock.charba.client.zoom.DefaultZoom$impl');
 }
}
/**@private {DefaultOptions}*/
DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultOptions;
IsDefaultOptions.$markImplementor(DefaultOptions);
$Util.$setClassMetadata(DefaultOptions, "org.pepstock.charba.client.zoom.DefaultOptions");

exports = DefaultOptions;

//# sourceMappingURL=DefaultOptions.js.map
