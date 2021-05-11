goog.module('org.pepstock.charba.client.configuration.LineOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasLineOptions = goog.require('org.pepstock.charba.client.configuration.HasLineOptions$impl');
const ScalesOptions = goog.require('org.pepstock.charba.client.configuration.ScalesOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Decimation = goog.forwardDeclare('org.pepstock.charba.client.configuration.Decimation$impl');
let Segment = goog.forwardDeclare('org.pepstock.charba.client.configuration.Segment$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasLineOptions}
 */
class LineOptions extends ScalesOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {Decimation}*/
  this.f_decimation__org_pepstock_charba_client_configuration_LineOptions_;
  /**@type {Segment}*/
  this.f_segment__org_pepstock_charba_client_configuration_LineOptions_;
 }
 /** @return {!LineOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  LineOptions.$clinit();
  let $instance = new LineOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_LineOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_LineOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_ScalesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  this.f_decimation__org_pepstock_charba_client_configuration_LineOptions_ = Decimation.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_segment__org_pepstock_charba_client_configuration_LineOptions_ = Segment.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
 }
 /** @return {Decimation} */
 m_getDecimation__() {
  return this.f_decimation__org_pepstock_charba_client_configuration_LineOptions_;
 }
 /** @return {Segment} */
 m_getSegment__() {
  return this.f_segment__org_pepstock_charba_client_configuration_LineOptions_;
 }
 /** @override @return {ScalesOptions} */
 m_getOptions__() {
  return this;
 }
 
 m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(/** IndexAxis */ indexAxis) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(indexAxis);
 }
 /** @return {IndexAxis} */
 m_getIndexAxis__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getIndexAxis__();
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isShowLine__() {
  return HasLineOptions.m_isShowLine__$default__org_pepstock_charba_client_configuration_HasLineOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isSpanGaps__() {
  return HasLineOptions.m_isSpanGaps__$default__org_pepstock_charba_client_configuration_HasLineOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setShowLine__boolean(/** boolean */ arg0) {
  HasLineOptions.m_setShowLine__$default__org_pepstock_charba_client_configuration_HasLineOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSpanGaps__boolean(/** boolean */ arg0) {
  HasLineOptions.m_setSpanGaps__$default__org_pepstock_charba_client_configuration_HasLineOptions__boolean(this, arg0);
 }
 
 static $clinit() {
  LineOptions.$clinit = () =>{};
  LineOptions.$loadModules();
  ScalesOptions.$clinit();
  HasLineOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LineOptions;
 }
 
 static $loadModules() {
  Decimation = goog.module.get('org.pepstock.charba.client.configuration.Decimation$impl');
  Segment = goog.module.get('org.pepstock.charba.client.configuration.Segment$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasLineOptions.$markImplementor(LineOptions);
$Util.$setClassMetadata(LineOptions, "org.pepstock.charba.client.configuration.LineOptions");

exports = LineOptions;

//# sourceMappingURL=LineOptions.js.map
