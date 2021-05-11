goog.module('org.pepstock.charba.client.ChartOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScaledOptions = goog.require('org.pepstock.charba.client.options.ScaledOptions$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let Scales = goog.forwardDeclare('org.pepstock.charba.client.options.Scales$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ChartOptions extends ScaledOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {Type}*/
  this.f_type__org_pepstock_charba_client_ChartOptions_;
 }
 /** @return {!ChartOptions} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** Type */ type, /** ? */ nativeObject, /** IsDefaultScaledOptions */ defaultOptions) {
  ChartOptions.$clinit();
  let $instance = new ChartOptions();
  $instance.$ctor__org_pepstock_charba_client_ChartOptions__org_pepstock_charba_client_Type__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(type, nativeObject, defaultOptions);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_ChartOptions__org_pepstock_charba_client_Type__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** Type */ type, /** ? */ nativeObject, /** IsDefaultScaledOptions */ defaultOptions) {
  this.$ctor__org_pepstock_charba_client_options_ScaledOptions__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_commons_NativeObject__boolean(ChartOptions.m_createScope__org_pepstock_charba_client_Type(type), defaultOptions, nativeObject, true);
  this.f_type__org_pepstock_charba_client_ChartOptions_ = type;
 }
 /** @return {Type} */
 m_getType__() {
  return this.f_type__org_pepstock_charba_client_ChartOptions_;
 }
 /** @override @return {Scales} */
 m_getScales__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ScaleType.f_NONE__org_pepstock_charba_client_ScaleType, this.f_type__org_pepstock_charba_client_ChartOptions_.m_scaleType__())) {
   throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(ChartOptions.f_INVALID_SCALE_TYPE__org_pepstock_charba_client_ChartOptions_, [this.f_type__org_pepstock_charba_client_ChartOptions_.m_value__(), this.f_type__org_pepstock_charba_client_ChartOptions_.m_scaleType__().name()])));
  }
  return super.m_getScales__();
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client() {
  return super.m_getNativeObject__();
 }
 /** @return {?string} */
 static m_createScope__org_pepstock_charba_client_Type(/** Type */ type) {
  let sb = StringBuilder.$create__java_lang_String("chart-");
  return sb.m_append__java_lang_String(Type.m_checkAndGetIfValid__org_pepstock_charba_client_Type(type).m_value__()).toString();
 }
 
 static $clinit() {
  ChartOptions.$clinit = () =>{};
  ChartOptions.$loadModules();
  ScaledOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartOptions;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  ScaleType = goog.module.get('org.pepstock.charba.client.ScaleType$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
ChartOptions.f_INVALID_SCALE_TYPE__org_pepstock_charba_client_ChartOptions_ = "The options is referring to {0} chart with {1} scale type and not to MULTI/SINGLE scale type as requested";
$Util.$setClassMetadata(ChartOptions, "org.pepstock.charba.client.ChartOptions");

exports = ChartOptions;

//# sourceMappingURL=ChartOptions.js.map
