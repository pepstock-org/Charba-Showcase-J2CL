goog.module('org.pepstock.charba.client.options.HasBarDatasetOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBarDatasets = goog.require('org.pepstock.charba.client.defaults.IsDefaultBarDatasets$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let BarDatasetOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.options.BarDatasetOptionsHandler$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.options.HasBarDatasetOptions.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {IsDefaultBarDatasets}
 */
class HasBarDatasetOptions {
 /** @abstract @return {BarDatasetOptionsHandler} */
 m_getDatasetOptionsHandler__() {}
 /** @abstract */
 m_setBarPercentage__double(/** number */ barPercentage) {}
 /** @abstract @override @return {number} */
 m_getBarPercentage__() {}
 /** @abstract */
 m_setCategoryPercentage__double(/** number */ categoryPercentage) {}
 /** @abstract @override @return {number} */
 m_getCategoryPercentage__() {}
 /** @abstract */
 m_setBarThickness__int(/** number */ barThickness) {}
 /** @abstract @override @return {number} */
 m_getBarThickness__() {}
 /** @abstract */
 m_setMaxBarThickness__int(/** number */ maxBarThickness) {}
 /** @abstract @override @return {number} */
 m_getMaxBarThickness__() {}
 /** @abstract */
 m_setMinBarLength__int(/** number */ minBarLength) {}
 /** @abstract @override @return {number} */
 m_getMinBarLength__() {}
 /** @abstract */
 m_setGrouped__boolean(/** boolean */ grouped) {}
 /** @abstract @override @return {boolean} */
 m_isGrouped__() {}
 /** @return {HasBarDatasetOptions} */
 static $adapt(/** ?function():BarDatasetOptionsHandler */ fn) {
  HasBarDatasetOptions.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setBarPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__double(/** !HasBarDatasetOptions */ $thisArg, /** number */ barPercentage) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null) && barPercentage >= 0 && barPercentage <= 1) {
   $thisArg.m_getDatasetOptionsHandler__().m_setBarPercentage__double_$pp_org_pepstock_charba_client_options(barPercentage);
  }
 }
 /** @return {number} */
 static m_getBarPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(/** !HasBarDatasetOptions */ $thisArg) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null)) {
   return $thisArg.m_getDatasetOptionsHandler__().m_getBarPercentage___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType).m_getBarPercentage__();
 }
 
 static m_setCategoryPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__double(/** !HasBarDatasetOptions */ $thisArg, /** number */ categoryPercentage) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null) && categoryPercentage >= 0 && categoryPercentage <= 1) {
   $thisArg.m_getDatasetOptionsHandler__().m_setCategoryPercentage__double_$pp_org_pepstock_charba_client_options(categoryPercentage);
  }
 }
 /** @return {number} */
 static m_getCategoryPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(/** !HasBarDatasetOptions */ $thisArg) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null)) {
   return $thisArg.m_getDatasetOptionsHandler__().m_getCategoryPercentage___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType).m_getCategoryPercentage__();
 }
 
 static m_setBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(/** !HasBarDatasetOptions */ $thisArg, /** number */ barThickness) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null)) {
   $thisArg.m_getDatasetOptionsHandler__().m_setBarThickness__int_$pp_org_pepstock_charba_client_options(barThickness);
  }
 }
 /** @return {number} */
 static m_getBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(/** !HasBarDatasetOptions */ $thisArg) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null)) {
   return $thisArg.m_getDatasetOptionsHandler__().m_getBarThickness___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType).m_getBarThickness__();
 }
 
 static m_setMaxBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(/** !HasBarDatasetOptions */ $thisArg, /** number */ maxBarThickness) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null)) {
   $thisArg.m_getDatasetOptionsHandler__().m_setMaxBarThickness__int_$pp_org_pepstock_charba_client_options(maxBarThickness);
  }
 }
 /** @return {number} */
 static m_getMaxBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(/** !HasBarDatasetOptions */ $thisArg) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null)) {
   return $thisArg.m_getDatasetOptionsHandler__().m_getMaxBarThickness___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType).m_getMaxBarThickness__();
 }
 
 static m_setMinBarLength__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(/** !HasBarDatasetOptions */ $thisArg, /** number */ minBarLength) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null)) {
   $thisArg.m_getDatasetOptionsHandler__().m_setMinBarLength__int_$pp_org_pepstock_charba_client_options(minBarLength);
  }
 }
 /** @return {number} */
 static m_getMinBarLength__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(/** !HasBarDatasetOptions */ $thisArg) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null)) {
   return $thisArg.m_getDatasetOptionsHandler__().m_getMinBarLength___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType).m_getMinBarLength__();
 }
 
 static m_setGrouped__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__boolean(/** !HasBarDatasetOptions */ $thisArg, /** boolean */ grouped) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null)) {
   $thisArg.m_getDatasetOptionsHandler__().m_setGrouped__boolean_$pp_org_pepstock_charba_client_options(grouped);
  }
 }
 /** @return {boolean} */
 static m_isGrouped__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(/** !HasBarDatasetOptions */ $thisArg) {
  HasBarDatasetOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getDatasetOptionsHandler__(), null)) {
   return $thisArg.m_getDatasetOptionsHandler__().m_isGrouped___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(ChartType.f_BAR__org_pepstock_charba_client_ChartType).m_isGrouped__();
 }
 
 static $clinit() {
  HasBarDatasetOptions.$clinit = () =>{};
  HasBarDatasetOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultBarDatasets.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_HasBarDatasetOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_HasBarDatasetOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.options.HasBarDatasetOptions.$LambdaAdaptor$impl');
 }
}
HasBarDatasetOptions.$markImplementor(/**@type {Function}*/ (HasBarDatasetOptions));
$Util.$setClassMetadataForInterface(HasBarDatasetOptions, "org.pepstock.charba.client.options.HasBarDatasetOptions");

exports = HasBarDatasetOptions;

//# sourceMappingURL=HasBarDatasetOptions.js.map
