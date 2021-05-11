goog.module('org.pepstock.charba.client.impl.charts.Threshold$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsThreshold = goog.require('org.pepstock.charba.client.impl.charts.IsThreshold$impl');

let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let DefaultThreshold = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.DefaultThreshold$impl');

/**
 * @implements {IsThreshold}
 */
class Threshold extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_name__org_pepstock_charba_client_impl_charts_Threshold_;
  /**@type {number}*/
  this.f_value__org_pepstock_charba_client_impl_charts_Threshold_ = 0;
  /**@type {IsColor}*/
  this.f_color__org_pepstock_charba_client_impl_charts_Threshold_;
 }
 //Factory method corresponding to constructor 'Threshold(String)'.
 /** @return {!Threshold} */
 static $create__java_lang_String(/** ?string */ name) {
  Threshold.$clinit();
  let $instance = new Threshold();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_Threshold__java_lang_String(name);
  return $instance;
 }
 //Initialization from constructor 'Threshold(String)'.
 
 $ctor__org_pepstock_charba_client_impl_charts_Threshold__java_lang_String(/** ?string */ name) {
  this.$ctor__org_pepstock_charba_client_impl_charts_Threshold__java_lang_String__double__org_pepstock_charba_client_colors_IsColor(name, Threshold.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_charts_Threshold_, Threshold.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_Threshold);
 }
 //Factory method corresponding to constructor 'Threshold(String, IsColor)'.
 /** @return {!Threshold} */
 static $create__java_lang_String__org_pepstock_charba_client_colors_IsColor(/** ?string */ name, /** IsColor */ color) {
  Threshold.$clinit();
  let $instance = new Threshold();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_Threshold__java_lang_String__org_pepstock_charba_client_colors_IsColor(name, color);
  return $instance;
 }
 //Initialization from constructor 'Threshold(String, IsColor)'.
 
 $ctor__org_pepstock_charba_client_impl_charts_Threshold__java_lang_String__org_pepstock_charba_client_colors_IsColor(/** ?string */ name, /** IsColor */ color) {
  this.$ctor__org_pepstock_charba_client_impl_charts_Threshold__java_lang_String__double__org_pepstock_charba_client_colors_IsColor(name, Threshold.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_charts_Threshold_, color);
 }
 //Factory method corresponding to constructor 'Threshold(String, double)'.
 /** @return {!Threshold} */
 static $create__java_lang_String__double(/** ?string */ name, /** number */ value) {
  Threshold.$clinit();
  let $instance = new Threshold();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_Threshold__java_lang_String__double(name, value);
  return $instance;
 }
 //Initialization from constructor 'Threshold(String, double)'.
 
 $ctor__org_pepstock_charba_client_impl_charts_Threshold__java_lang_String__double(/** ?string */ name, /** number */ value) {
  this.$ctor__org_pepstock_charba_client_impl_charts_Threshold__java_lang_String__double__org_pepstock_charba_client_colors_IsColor(name, value, Threshold.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_Threshold);
 }
 //Factory method corresponding to constructor 'Threshold(String, double, IsColor)'.
 /** @return {!Threshold} */
 static $create__java_lang_String__double__org_pepstock_charba_client_colors_IsColor(/** ?string */ name, /** number */ value, /** IsColor */ color) {
  Threshold.$clinit();
  let $instance = new Threshold();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_Threshold__java_lang_String__double__org_pepstock_charba_client_colors_IsColor(name, value, color);
  return $instance;
 }
 //Initialization from constructor 'Threshold(String, double, IsColor)'.
 
 $ctor__org_pepstock_charba_client_impl_charts_Threshold__java_lang_String__double__org_pepstock_charba_client_colors_IsColor(/** ?string */ name, /** number */ value, /** IsColor */ color) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_impl_charts_Threshold();
  this.f_name__org_pepstock_charba_client_impl_charts_Threshold_ = name;
  this.f_value__org_pepstock_charba_client_impl_charts_Threshold_ = value;
  this.f_color__org_pepstock_charba_client_impl_charts_Threshold_ = color;
  IsThreshold.m_checkIfValid__org_pepstock_charba_client_impl_charts_IsThreshold(this);
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.f_name__org_pepstock_charba_client_impl_charts_Threshold_;
 }
 /** @override @return {number} */
 m_getValue__() {
  return this.f_value__org_pepstock_charba_client_impl_charts_Threshold_;
 }
 /** @override @return {IsColor} */
 m_getColor__() {
  return this.f_color__org_pepstock_charba_client_impl_charts_Threshold_;
 }
 /** @return {Threshold} */
 m_setValue__double(/** number */ value) {
  this.f_value__org_pepstock_charba_client_impl_charts_Threshold_ = value;
  return this;
 }
 /** @return {Threshold} */
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.f_color__org_pepstock_charba_client_impl_charts_Threshold_ = color;
  return this;
 }
 /** @return {boolean} */
 m_isInRange__double__double(/** number */ valueToCheck, /** number */ lowLimit) {
  return valueToCheck >= lowLimit && valueToCheck < this.m_getValue__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_charts_Threshold() {
  this.f_value__org_pepstock_charba_client_impl_charts_Threshold_ = Threshold.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_charts_Threshold_;
  this.f_color__org_pepstock_charba_client_impl_charts_Threshold_ = Threshold.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_Threshold;
 }
 /** @return {IsColor} */
 static get f_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_Threshold() {
  return (Threshold.$clinit(), Threshold.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_Threshold);
 }
 
 static $clinit() {
  Threshold.$clinit = () =>{};
  Threshold.$loadModules();
  j_l_Object.$clinit();
  Threshold.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_Threshold = DefaultThreshold.f_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold.m_getColor__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Threshold;
 }
 
 static $loadModules() {
  DefaultThreshold = goog.module.get('org.pepstock.charba.client.impl.charts.DefaultThreshold$impl');
 }
}
/**@private {IsColor}*/
Threshold.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_Threshold;
/**@const {number}*/
Threshold.f_DEFAULT_VALUE__org_pepstock_charba_client_impl_charts_Threshold_ = 1.7976931348623157E308;
IsThreshold.$markImplementor(Threshold);
$Util.$setClassMetadata(Threshold, "org.pepstock.charba.client.impl.charts.Threshold");

exports = Threshold;

//# sourceMappingURL=Threshold.js.map
