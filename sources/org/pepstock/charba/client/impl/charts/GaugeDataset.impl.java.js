goog.module('org.pepstock.charba.client.impl.charts.GaugeDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MeterDataset = goog.require('org.pepstock.charba.client.impl.charts.MeterDataset$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let DefaultThreshold = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.DefaultThreshold$impl');
let GaugeChart = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.GaugeChart$impl');
let Threshold = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.Threshold$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class GaugeDataset extends MeterDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {List<Threshold>}*/
  this.f_thresholds__org_pepstock_charba_client_impl_charts_GaugeDataset_;
  /**@type {Threshold}*/
  this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_;
  /**@type {boolean}*/
  this.f_percentageThreshold__org_pepstock_charba_client_impl_charts_GaugeDataset_ = false;
 }
 //Factory method corresponding to constructor 'GaugeDataset(double)'.
 /** @return {!GaugeDataset} */
 static $create__double(/** number */ max) {
  GaugeDataset.$clinit();
  let $instance = new GaugeDataset();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_GaugeDataset__double(max);
  return $instance;
 }
 //Initialization from constructor 'GaugeDataset(double)'.
 
 $ctor__org_pepstock_charba_client_impl_charts_GaugeDataset__double(/** number */ max) {
  this.$ctor__org_pepstock_charba_client_impl_charts_GaugeDataset__double__org_pepstock_charba_client_defaults_IsDefaultOptions(max, Defaults.m_get__().m_getGlobal__());
 }
 //Factory method corresponding to constructor 'GaugeDataset(double, IsDefaultOptions)'.
 /** @return {!GaugeDataset} */
 static $create__double__org_pepstock_charba_client_defaults_IsDefaultOptions(/** number */ max, /** IsDefaultOptions */ defaultValues) {
  GaugeDataset.$clinit();
  let $instance = new GaugeDataset();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_GaugeDataset__double__org_pepstock_charba_client_defaults_IsDefaultOptions(max, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'GaugeDataset(double, IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_impl_charts_GaugeDataset__double__org_pepstock_charba_client_defaults_IsDefaultOptions(/** number */ max, /** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_impl_charts_MeterDataset__org_pepstock_charba_client_controllers_ControllerType__double__org_pepstock_charba_client_defaults_IsDefaultOptions(GaugeChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_GaugeChart, max, defaultValues);
  this.$init___$p_org_pepstock_charba_client_impl_charts_GaugeDataset();
  for (let $array = DefaultThreshold.m_values__(), $index = 0; $index < $array.length; $index++) {
   let t = $array[$index];
   {
    this.f_thresholds__org_pepstock_charba_client_impl_charts_GaugeDataset_.add(t.m_getThreshold__());
   }
  }
  super.m_setColor__org_pepstock_charba_client_colors_IsColor(this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_.m_getColor__());
 }
 /** @override */
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ valueColor) {
  super.m_setColor__java_lang_String(IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_.m_getColor__()) ? this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_.m_getColor__().m_toRGBA__() : DefaultThreshold.f_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold.m_getColor__().m_toRGBA__());
 }
 /** @override */
 m_setColor__java_lang_String(/** ?string */ valueColor) {
  super.m_setColor__java_lang_String(IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_.m_getColor__()) ? this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_.m_getColor__().m_toRGBA__() : DefaultThreshold.f_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold.m_getColor__().m_toRGBA__());
 }
 /** @return {Threshold} */
 m_getCurrent__() {
  return this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_;
 }
 /** @return {boolean} */
 m_isPercentageThreshold__() {
  return this.f_percentageThreshold__org_pepstock_charba_client_impl_charts_GaugeDataset_;
 }
 
 m_setPercentageThreshold__boolean(/** boolean */ percentageThreshold) {
  this.f_percentageThreshold__org_pepstock_charba_client_impl_charts_GaugeDataset_ = percentageThreshold;
  this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_ = this.m_checkLevel___$p_org_pepstock_charba_client_impl_charts_GaugeDataset();
  this.m_setColor__org_pepstock_charba_client_colors_IsColor(this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_.m_getColor__());
 }
 
 m_setThresholds__arrayOf_org_pepstock_charba_client_impl_charts_Threshold(/** Array<Threshold> */ newThresholds) {
  if (!$Equality.$same(newThresholds, null) && newThresholds.length > 0) {
   this.f_thresholds__org_pepstock_charba_client_impl_charts_GaugeDataset_.clear();
   this.f_thresholds__org_pepstock_charba_client_impl_charts_GaugeDataset_.addAll(/**@type {List<Threshold>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(newThresholds)));
   this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_ = this.m_checkLevel___$p_org_pepstock_charba_client_impl_charts_GaugeDataset();
   this.m_setColor__org_pepstock_charba_client_colors_IsColor(this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_.m_getColor__());
  }
 }
 /** @return {List<Threshold>} */
 m_getThresholds__() {
  return /**@type {List<Threshold>}*/ (Collections.m_unmodifiableList__java_util_List(this.f_thresholds__org_pepstock_charba_client_impl_charts_GaugeDataset_));
 }
 /** @override */
 m_setValue__double(/** number */ value) {
  super.m_setValue__double(value);
  this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_ = this.m_checkLevel___$p_org_pepstock_charba_client_impl_charts_GaugeDataset();
  this.m_setColor__org_pepstock_charba_client_colors_IsColor(this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_.m_getColor__());
 }
 /** @return {Threshold} */
 m_checkLevel___$p_org_pepstock_charba_client_impl_charts_GaugeDataset() {
  if (!this.f_thresholds__org_pepstock_charba_client_impl_charts_GaugeDataset_.isEmpty()) {
   Collections.m_sort__java_util_List__java_util_Comparator(this.f_thresholds__org_pepstock_charba_client_impl_charts_GaugeDataset_, GaugeDataset.f_COMPARATOR__org_pepstock_charba_client_impl_charts_GaugeDataset_);
   let valueToCheck = this.m_isPercentageThreshold__() ? this.m_getValue__() / this.m_getMax__() * 100 : this.m_getValue__();
   let lowLimit = 0;
   for (let $iterator = this.f_thresholds__org_pepstock_charba_client_impl_charts_GaugeDataset_.m_iterator__(); $iterator.m_hasNext__(); ) {
    let t = /**@type {Threshold}*/ ($Casts.$to($iterator.m_next__(), Threshold));
    {
     if (t.m_isInRange__double__double(valueToCheck, lowLimit)) {
      return t;
     }
     lowLimit = t.m_getValue__();
    }
   }
   return /**@type {Threshold}*/ ($Casts.$to(/**@type {LinkedList<Threshold>}*/ ($Casts.$to(this.f_thresholds__org_pepstock_charba_client_impl_charts_GaugeDataset_, LinkedList)).m_getLast__(), Threshold));
  }
  return DefaultThreshold.f_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold.m_getThreshold__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_charts_GaugeDataset() {
  this.f_thresholds__org_pepstock_charba_client_impl_charts_GaugeDataset_ = /**@type {!LinkedList<Threshold>}*/ (LinkedList.$create__());
  this.f_current__org_pepstock_charba_client_impl_charts_GaugeDataset_ = DefaultThreshold.f_NORMAL__org_pepstock_charba_client_impl_charts_DefaultThreshold.m_getThreshold__();
  this.f_percentageThreshold__org_pepstock_charba_client_impl_charts_GaugeDataset_ = true;
 }
 
 static $clinit() {
  GaugeDataset.$clinit = () =>{};
  GaugeDataset.$loadModules();
  MeterDataset.$clinit();
  GaugeDataset.f_COMPARATOR__org_pepstock_charba_client_impl_charts_GaugeDataset_ = Comparator.$adapt((o1, o2) =>{
   let o1_1 = /**@type {Threshold}*/ ($Casts.$to(o1, Threshold));
   let o2_1 = /**@type {Threshold}*/ ($Casts.$to(o2, Threshold));
   return $Primitives.$narrowDoubleToInt(o1_1.m_getValue__() - o2_1.m_getValue__());
  });
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GaugeDataset;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  DefaultThreshold = goog.module.get('org.pepstock.charba.client.impl.charts.DefaultThreshold$impl');
  GaugeChart = goog.module.get('org.pepstock.charba.client.impl.charts.GaugeChart$impl');
  Threshold = goog.module.get('org.pepstock.charba.client.impl.charts.Threshold$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@type {Comparator<Threshold>}*/
GaugeDataset.f_COMPARATOR__org_pepstock_charba_client_impl_charts_GaugeDataset_;
$Util.$setClassMetadata(GaugeDataset, "org.pepstock.charba.client.impl.charts.GaugeDataset");

exports = GaugeDataset;

//# sourceMappingURL=GaugeDataset.js.map
