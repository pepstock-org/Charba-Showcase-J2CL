goog.module('org.pepstock.charba.client.AbstractChart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsChart = goog.require('org.pepstock.charba.client.IsChart$impl');
const MutationHandler = goog.require('org.pepstock.charba.client.MutationHandler$impl');
const HandlerManager = goog.require('org.pepstock.charba.client.events.HandlerManager$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartRunnableWrapper = goog.forwardDeclare('org.pepstock.charba.client.AbstractChart.ChartRunnableWrapper$impl');
let InternalInterationModeObject = goog.forwardDeclare('org.pepstock.charba.client.AbstractChart.InternalInterationModeObject$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let ChartNode = goog.forwardDeclare('org.pepstock.charba.client.ChartNode$impl');
let ChartObserver = goog.forwardDeclare('org.pepstock.charba.client.ChartObserver$impl');
let ChartOptions = goog.forwardDeclare('org.pepstock.charba.client.ChartOptions$impl');
let ChartTimerTask = goog.forwardDeclare('org.pepstock.charba.client.ChartTimerTask$impl');
let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let Configuration = goog.forwardDeclare('org.pepstock.charba.client.Configuration$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let MutationItem = goog.forwardDeclare('org.pepstock.charba.client.MutationItem$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let UpdateConfiguration = goog.forwardDeclare('org.pepstock.charba.client.UpdateConfiguration$impl');
let Array_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.Array.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Data = goog.forwardDeclare('org.pepstock.charba.client.data.Data$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let HasDataPoints = goog.forwardDeclare('org.pepstock.charba.client.data.HasDataPoints$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let DefaultChartOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartOptions$impl');
let BaseEventTypes = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseEventTypes$impl');
let BaseStyleProperties_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Position$impl');
let Unit = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Unit$impl');
let DataType = goog.forwardDeclare('org.pepstock.charba.client.enums.DataType$impl');
let ImageMimeType = goog.forwardDeclare('org.pepstock.charba.client.enums.ImageMimeType$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let AddHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AddHandlerEvent$impl');
let ChartEventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventHandler$impl');
let EventHandler = goog.forwardDeclare('org.pepstock.charba.client.events.EventHandler$impl');
let EventType = goog.forwardDeclare('org.pepstock.charba.client.events.EventType$impl');
let HandlerRegistration = goog.forwardDeclare('org.pepstock.charba.client.events.HandlerRegistration$impl');
let DatasetItem = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetItem$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let IsTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsTransitionKey$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.plugins.Plugins$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');
let CTimer = goog.forwardDeclare('org.pepstock.charba.client.utils.CTimer$impl');
let Status = goog.forwardDeclare('org.pepstock.charba.client.utils.CTimer.Status$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @implements {IsChart}
 * @implements {MutationHandler}
 */
class AbstractChart extends HandlerManager {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, Object):void>}*/
  this.f_canvasCallbackProxy__org_pepstock_charba_client_AbstractChart_;
  /**@type {Chart}*/
  this.f_chart__org_pepstock_charba_client_AbstractChart_;
  /**@type {?string}*/
  this.f_id__org_pepstock_charba_client_AbstractChart_;
  /**@type {Type}*/
  this.f_type__org_pepstock_charba_client_AbstractChart_;
  /**@type {List<HandlerRegistration>}*/
  this.f_handlerRegistrations__org_pepstock_charba_client_AbstractChart_;
  /**@type {HTMLDivElement}*/
  this.f_element__org_pepstock_charba_client_AbstractChart_;
  /**@type {HTMLCanvasElement}*/
  this.f_canvas__org_pepstock_charba_client_AbstractChart_;
  /**@type {Configuration}*/
  this.f_configuration__org_pepstock_charba_client_AbstractChart_;
  /**@type {Data}*/
  this.f_data__org_pepstock_charba_client_AbstractChart_;
  /**@type {Plugins}*/
  this.f_plugins__org_pepstock_charba_client_AbstractChart_;
  /**@type {boolean}*/
  this.f_isCanvasSupported__org_pepstock_charba_client_AbstractChart_ = false;
  /**@type {ChartOptions}*/
  this.f_options__org_pepstock_charba_client_AbstractChart_;
  /**@type {IsDefaultScaledOptions}*/
  this.f_defaultChartOptions__org_pepstock_charba_client_AbstractChart_;
  /**@type {CursorType}*/
  this.f_initialCursor__org_pepstock_charba_client_AbstractChart_;
  /**@type {CTimer}*/
  this.f_timer__org_pepstock_charba_client_AbstractChart_;
  /**@type {boolean}*/
  this.f_attached__org_pepstock_charba_client_AbstractChart_ = false;
 }
 
 $ctor__org_pepstock_charba_client_AbstractChart__org_pepstock_charba_client_Type(/** Type */ type) {
  this.$ctor__org_pepstock_charba_client_events_HandlerManager__();
  this.$init___$p_org_pepstock_charba_client_AbstractChart();
  Type.m_checkIfValid__org_pepstock_charba_client_Type(type);
  this.f_type__org_pepstock_charba_client_AbstractChart_ = type;
  this.f_element__org_pepstock_charba_client_AbstractChart_ = DOMBuilder.m_get__().m_createDivElement__();
  this.f_element__org_pepstock_charba_client_AbstractChart_.id = this.f_id__org_pepstock_charba_client_AbstractChart_;
  BaseStyleProperties_$Overlay.m_setPosition__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_Position(this.f_element__org_pepstock_charba_client_AbstractChart_.style, Position.f_RELATIVE__org_pepstock_charba_client_dom_enums_Position);
  this.f_element__org_pepstock_charba_client_AbstractChart_.style.width = Unit.f_PCT__org_pepstock_charba_client_dom_enums_Unit.m_format__int(AbstractChart.f_DEFAULT_WIDTH__org_pepstock_charba_client_AbstractChart_);
  this.f_element__org_pepstock_charba_client_AbstractChart_.style.height = Unit.f_PCT__org_pepstock_charba_client_dom_enums_Unit.m_format__int(AbstractChart.f_DEFAULT_HEIGHT__org_pepstock_charba_client_AbstractChart_);
  if (this.f_isCanvasSupported__org_pepstock_charba_client_AbstractChart_) {
   this.f_canvas__org_pepstock_charba_client_AbstractChart_ = DOMBuilder.m_get__().m_createCanvasElement__();
   this.f_canvas__org_pepstock_charba_client_AbstractChart_.id = j_l_String.m_valueOf__java_lang_Object(this.f_id__org_pepstock_charba_client_AbstractChart_) + j_l_String.m_valueOf__java_lang_Object(AbstractChart.f_SUFFIX_CANVAS_ELEMENT_ID__org_pepstock_charba_client_AbstractChart_);
   this.f_element__org_pepstock_charba_client_AbstractChart_.appendChild(this.f_canvas__org_pepstock_charba_client_AbstractChart_);
   this.f_canvasCallbackProxy__org_pepstock_charba_client_AbstractChart_.callback = (/** Object */ context, /** Object */ event) =>{
    event.preventDefault();
   };
   this.f_canvas__org_pepstock_charba_client_AbstractChart_.addEventListener(BaseEventTypes.f_MOUSE_DOWN__org_pepstock_charba_client_dom_BaseEventTypes, this.f_canvasCallbackProxy__org_pepstock_charba_client_AbstractChart_.proxy);
  } else {
   let h = DOMBuilder.m_get__().m_createHeadingElement__();
   h.textContent = AbstractChart.f_CANVAS_NOT_SUPPORTED_MESSAGE__org_pepstock_charba_client_AbstractChart_;
   this.f_element__org_pepstock_charba_client_AbstractChart_.appendChild(h);
   this.f_canvas__org_pepstock_charba_client_AbstractChart_ = null;
  }
  ResourcesType.m_getResources__().m_inject__();
  this.f_plugins__org_pepstock_charba_client_AbstractChart_ = Plugins.$create__();
  this.f_options__org_pepstock_charba_client_AbstractChart_ = this.m_createChartOptions___$p_org_pepstock_charba_client_AbstractChart();
  this.f_defaultChartOptions__org_pepstock_charba_client_AbstractChart_ = DefaultChartOptions.$create__org_pepstock_charba_client_ChartOptions(this.f_options__org_pepstock_charba_client_AbstractChart_);
  this.f_initialCursor__org_pepstock_charba_client_AbstractChart_ = Utilities.m_getCursorOfChart__org_pepstock_charba_client_IsChart(this);
  ChartObserver.m_get__().m_addHandler__org_pepstock_charba_client_MutationHandler_$pp_org_pepstock_charba_client(this);
 }
 /** @override @return {IsChart} */
 m_getSource__() {
  return this;
 }
 /** @override @return {HandlerRegistration} */
 m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType(/** EventHandler */ handler, /** EventType */ type) {
  let registration = super.m_addHandler__org_pepstock_charba_client_events_EventHandler__org_pepstock_charba_client_events_EventType(handler, type);
  if (ChartEventHandler.$isInstance(handler)) {
   this.m_fireEvent__org_pepstock_charba_client_events_Event(AddHandlerEvent.$create__org_pepstock_charba_client_events_EventType(type));
  }
  this.f_handlerRegistrations__org_pepstock_charba_client_AbstractChart_.add(registration);
  return registration;
 }
 /** @override @return {HTMLDivElement} */
 m_getChartElement__() {
  return this.f_element__org_pepstock_charba_client_AbstractChart_;
 }
 /** @override @return {Type} */
 m_getType__() {
  return this.f_type__org_pepstock_charba_client_AbstractChart_;
 }
 /** @return {Chart} */
 m_getNativeObject___$pp_org_pepstock_charba_client() {
  return this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
 }
 /** @override @return {?string} */
 m_getId__() {
  return this.f_id__org_pepstock_charba_client_AbstractChart_;
 }
 /** @override @return {Type} */
 m_getBaseType__() {
  let currentType = this.m_getType__();
  if (ControllerType.$isInstance(currentType)) {
   let controllerType = /**@type {ControllerType}*/ ($Casts.$to(currentType, ControllerType));
   return controllerType.m_getChartType__();
  }
  return currentType;
 }
 /** @return {Chart} */
 m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart() {
  return this.m_isInitialized__() ? this.f_chart__org_pepstock_charba_client_AbstractChart_ : Charts.m_getNative__java_lang_String(this.f_id__org_pepstock_charba_client_AbstractChart_);
 }
 /** @override @return {HTMLCanvasElement} */
 m_getCanvas__() {
  if (this.f_isCanvasSupported__org_pepstock_charba_client_AbstractChart_) {
   return this.f_canvas__org_pepstock_charba_client_AbstractChart_;
  } else {
   throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(AbstractChart.f_CANVAS_NOT_SUPPORTED_MESSAGE__org_pepstock_charba_client_AbstractChart_));
  }
 }
 /** @override */
 m_removeCanvasPreventDefault__() {
  this.f_canvas__org_pepstock_charba_client_AbstractChart_.removeEventListener(BaseEventTypes.f_MOUSE_DOWN__org_pepstock_charba_client_dom_BaseEventTypes, this.f_canvasCallbackProxy__org_pepstock_charba_client_AbstractChart_.proxy);
 }
 /** @override @return {boolean} */
 m_isChartAttached__() {
  return this.f_attached__org_pepstock_charba_client_AbstractChart_;
 }
 /** @override @return {CursorType} */
 m_getInitialCursor__() {
  return this.f_initialCursor__org_pepstock_charba_client_AbstractChart_;
 }
 /** @override @return {boolean} */
 m_isInitialized__() {
  return !$Equality.$same(this.f_chart__org_pepstock_charba_client_AbstractChart_, null);
 }
 /** @override @return {ChartNode} */
 m_getNode__() {
  return ChartNode.$create__java_lang_String__org_pepstock_charba_client_Chart(this.m_getId__(), this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart());
 }
 /** @override @return {Data} */
 m_getData__() {
  return this.f_data__org_pepstock_charba_client_AbstractChart_;
 }
 /** @override @return {Plugins} */
 m_getPlugins__() {
  return this.f_plugins__org_pepstock_charba_client_AbstractChart_;
 }
 /** @return {ChartOptions} */
 m_createChartOptions___$p_org_pepstock_charba_client_AbstractChart() {
  return Defaults.m_get__().m_getChartOptions__org_pepstock_charba_client_Type_$pp_org_pepstock_charba_client(this.m_getType__());
 }
 /** @return {ChartOptions} */
 m_getChartOptions___$pp_org_pepstock_charba_client() {
  return this.f_options__org_pepstock_charba_client_AbstractChart_;
 }
 /** @override @return {IsDefaultScaledOptions} */
 m_getDefaultChartOptions__() {
  return this.f_defaultChartOptions__org_pepstock_charba_client_AbstractChart_;
 }
 /** @override @return {IsDefaultScaledOptions} */
 m_getWholeOptions__() {
  if (this.m_isInitialized__()) {
   return this.m_getNode__().m_getOptions__();
  } else if (!$Equality.$same(this.m_getOptions__(), null)) {
   let envelop = /**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__());
   this.m_getOptions__().m_loadOptions__org_pepstock_charba_client_ChartEnvelop(envelop);
   let chartOptions = ExtendedOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_ChartEnvelop(this, this.f_defaultChartOptions__org_pepstock_charba_client_AbstractChart_, envelop);
   return DefaultChartOptions.$create__org_pepstock_charba_client_ChartEnvelop(/**@type {!ChartEnvelop<ExtendedOptions>}*/ (ChartEnvelop.$create__java_lang_Object(chartOptions)));
  }
  return this.m_getDefaultChartOptions__();
 }
 /** @override @return {CTimer} */
 m_getTimer__() {
  return this.f_timer__org_pepstock_charba_client_AbstractChart_;
 }
 /** @override */
 m_createAndSetTimer__org_pepstock_charba_client_ChartTimerTask__int(/** ChartTimerTask */ task, /** number */ interval) {
  Checker.m_assertCheck__boolean__java_lang_String($Equality.$same(this.f_timer__org_pepstock_charba_client_AbstractChart_, null), "Timer instance is already created and can not be overrided");
  this.f_timer__org_pepstock_charba_client_AbstractChart_ = CTimer.$create__java_lang_Runnable__int(ChartRunnableWrapper.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_ChartTimerTask(this, task), interval);
 }
 /** @override @return {boolean} */
 m_isDrawOnAttach__() {
  IsChart.m_checkIfConsistent__org_pepstock_charba_client_IsChart(this);
  return this.m_getOptions__().m_isDrawOnAttach__();
 }
 /** @override */
 m_setDrawOnAttach__boolean(/** boolean */ drawOnAttach) {
  IsChart.m_checkIfConsistent__org_pepstock_charba_client_IsChart(this);
  this.m_getOptions__().m_setDrawOnAttach__boolean(drawOnAttach);
 }
 /** @override @return {boolean} */
 m_isDestroyOnDetach__() {
  IsChart.m_checkIfConsistent__org_pepstock_charba_client_IsChart(this);
  return this.m_getOptions__().m_isDestroyOnDetach__();
 }
 /** @override */
 m_setDestroyOnDetach__boolean(/** boolean */ destroyOnDetach) {
  IsChart.m_checkIfConsistent__org_pepstock_charba_client_IsChart(this);
  this.m_getOptions__().m_setDestroyOnDetach__boolean(destroyOnDetach);
 }
 /** @override */
 m_onAttach__org_pepstock_charba_client_MutationItem(/** MutationItem */ item) {
  if (!$Equality.$same(item, null)) {
   this.f_attached__org_pepstock_charba_client_AbstractChart_ = true;
   if (this.m_isDrawOnAttach__()) {
    this.m_draw__();
   }
  }
 }
 /** @override */
 m_onDetach__org_pepstock_charba_client_MutationItem(/** MutationItem */ item) {
  if (!$Equality.$same(item, null)) {
   this.f_attached__org_pepstock_charba_client_AbstractChart_ = false;
   if (this.m_isDestroyOnDetach__()) {
    this.m_destroy__();
   }
  }
 }
 /** @override */
 m_destroy__() {
  Charts.m_fireBeforeDestory__org_pepstock_charba_client_IsChart(this);
  if (!$Equality.$same(this.f_timer__org_pepstock_charba_client_AbstractChart_, null)) {
   this.f_timer__org_pepstock_charba_client_AbstractChart_.m_stop__();
  }
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null)) {
   instance.destroy();
  }
  this.m_removeCanvasPreventDefault__();
  for (let $iterator = this.f_handlerRegistrations__org_pepstock_charba_client_AbstractChart_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let registration = /**@type {HandlerRegistration}*/ ($Casts.$to($iterator.m_next__(), HandlerRegistration));
   {
    registration.m_removeHandler__();
   }
  }
  this.f_handlerRegistrations__org_pepstock_charba_client_AbstractChart_.clear();
  Charts.m_remove__java_lang_String(this.m_getId__());
  ChartObserver.m_get__().m_removeHandler__org_pepstock_charba_client_MutationHandler_$pp_org_pepstock_charba_client(this);
  this.f_chart__org_pepstock_charba_client_AbstractChart_ = null;
 }
 /** @override */
 m_stop__() {
  if (this.m_isInitialized__()) {
   this.f_chart__org_pepstock_charba_client_AbstractChart_.stop();
  }
 }
 /** @override */
 m_clear__() {
  if (this.m_isInitialized__()) {
   this.f_chart__org_pepstock_charba_client_AbstractChart_.clear();
  }
 }
 /** @override */
 m_reset__() {
  if (this.m_isInitialized__()) {
   this.f_chart__org_pepstock_charba_client_AbstractChart_.reset();
  }
 }
 /** @override @return {?string} */
 m_toBase64Image__org_pepstock_charba_client_enums_ImageMimeType__double(/** ImageMimeType */ type, /** number */ encoderOptions) {
  if (this.m_isInitialized__()) {
   let checkedImageMimeType = Key.m_isValid__org_pepstock_charba_client_commons_Key(type) ? type : ImageMimeType.f_PNG__org_pepstock_charba_client_enums_ImageMimeType;
   return this.f_chart__org_pepstock_charba_client_AbstractChart_.toBase64Image(checkedImageMimeType.m_value__(), Checker.m_betweenOrDefault__double__double__double__double(encoderOptions, 0, 1, Canvas_$Overlay.f_DEFAULT_ENCODER_OPTIONS__org_pepstock_charba_client_dom_elements_Canvas_$Overlay));
  }
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @override */
 m_resize__() {
  if (this.m_isInitialized__()) {
   this.f_chart__org_pepstock_charba_client_AbstractChart_.resize();
  }
 }
 /** @override */
 m_resize__int__int(/** number */ width, /** number */ height) {
  if (this.m_isInitialized__()) {
   this.f_chart__org_pepstock_charba_client_AbstractChart_.resize(width, height);
  }
 }
 /** @override */
 m_update__() {
  this.m_update__org_pepstock_charba_client_options_IsTransitionKey(/**@type {IsTransitionKey}*/ (null));
 }
 /** @override */
 m_update__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ mode) {
  if (this.m_isInitialized__()) {
   if (!$Equality.$same(mode, null) && IsTransitionKey.m_isValid__org_pepstock_charba_client_options_IsTransitionKey(mode)) {
    this.m_applyConfiguration__();
    this.f_chart__org_pepstock_charba_client_AbstractChart_.update(mode.m_value__());
   } else {
    this.m_applyConfiguration__();
    this.f_chart__org_pepstock_charba_client_AbstractChart_.update();
   }
  }
 }
 /** @override */
 m_update__org_pepstock_charba_client_UpdateConfiguration(/** UpdateConfiguration */ configuration) {
  if (this.m_isInitialized__()) {
   if ($Equality.$same(configuration, null)) {
    this.m_applyConfiguration__();
    this.f_chart__org_pepstock_charba_client_AbstractChart_.update();
   } else {
    this.m_getOptions__().m_getTransitions__().m_set__org_pepstock_charba_client_options_IsTransitionKey__org_pepstock_charba_client_options_AnimationTransition(UpdateConfiguration.f_UPDATE__org_pepstock_charba_client_UpdateConfiguration, configuration.m_getTransition___$pp_org_pepstock_charba_client());
    this.m_update__org_pepstock_charba_client_options_IsTransitionKey(UpdateConfiguration.f_UPDATE__org_pepstock_charba_client_UpdateConfiguration);
   }
  }
 }
 /** @override */
 m_reconfigure__() {
  this.m_reconfigure__org_pepstock_charba_client_options_IsTransitionKey(/**@type {IsTransitionKey}*/ (null));
 }
 /** @override */
 m_reconfigure__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ mode) {
  if (this.m_reconfigureOptions___$p_org_pepstock_charba_client_AbstractChart()) {
   this.m_update__org_pepstock_charba_client_options_IsTransitionKey(mode);
   this.m_updateForReconfiguring___$p_org_pepstock_charba_client_AbstractChart();
  }
 }
 /** @override */
 m_reconfigure__org_pepstock_charba_client_UpdateConfiguration(/** UpdateConfiguration */ configuration) {
  if (this.m_reconfigureOptions___$p_org_pepstock_charba_client_AbstractChart()) {
   this.m_update__org_pepstock_charba_client_UpdateConfiguration(configuration);
   this.m_updateForReconfiguring___$p_org_pepstock_charba_client_AbstractChart();
  }
 }
 /** @return {boolean} */
 m_reconfigureOptions___$p_org_pepstock_charba_client_AbstractChart() {
  if (this.m_isInitialized__() && IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(this)) {
   this.m_applyConfiguration__();
   Charts.m_fireBeforeConfigure__org_pepstock_charba_client_IsChart(this);
   let tempConfiguration = Configuration.$create__();
   let internalOptions = this.m_getOptions__();
   tempConfiguration.m_setOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_ConfigurationOptions_$pp_org_pepstock_charba_client(this, internalOptions);
   Defaults.m_get__().m_getPlugins__().m_onChartConfigure__org_pepstock_charba_client_Configuration__org_pepstock_charba_client_IsChart(tempConfiguration, this);
   this.f_plugins__org_pepstock_charba_client_AbstractChart_.m_onChartConfigure__org_pepstock_charba_client_Configuration__org_pepstock_charba_client_IsChart(tempConfiguration, this);
   Charts.m_fireAfterConfigure__org_pepstock_charba_client_IsChart(this);
   return true;
  }
  return false;
 }
 
 m_updateForReconfiguring___$p_org_pepstock_charba_client_AbstractChart() {
  this.m_getOptions__().m_setChartOptions__org_pepstock_charba_client_ChartEnvelop(/**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__java_lang_Object(this.f_chart__org_pepstock_charba_client_AbstractChart_.options)));
 }
 /** @override */
 m_render__() {
  if (this.m_isInitialized__()) {
   this.f_chart__org_pepstock_charba_client_AbstractChart_.render();
  }
 }
 /** @override @return {DatasetItem} */
 m_getDatasetItem__int(/** number */ index) {
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null) && this.m_isValidDatasetIndex__int_$p_org_pepstock_charba_client_AbstractChart(index)) {
   return DatasetItem.$create__org_pepstock_charba_client_ChartEnvelop(/**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__java_lang_Object__boolean(instance.getDatasetMeta(index), true)));
  }
  return null;
 }
 /** @override @return {List<DatasetReference>} */
 m_getDatasetAtEvent__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ event) {
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null) && !$Equality.$same(event, null)) {
   let array = instance.getElementsAtEventForMode(event, InteractionMode.f_DATASET__org_pepstock_charba_client_enums_InteractionMode.m_value__(), AbstractChart.f_INTERACTION_MODE__org_pepstock_charba_client_AbstractChart_.m_nativeObject___$p_org_pepstock_charba_client_AbstractChart_InternalInterationModeObject(), false);
   return /**@type {List<DatasetReference>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, DatasetReference.f_FACTORY__org_pepstock_charba_client_items_DatasetReference));
  }
  return /**@type {List<DatasetReference>}*/ (Collections.m_emptyList__());
 }
 /** @override @return {boolean} */
 m_isDatasetVisible__int(/** number */ index) {
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null) && this.m_isValidDatasetIndex__int_$p_org_pepstock_charba_client_AbstractChart(index)) {
   return instance.isDatasetVisible(index);
  }
  return false;
 }
 /** @override @return {number} */
 m_getVisibleDatasetCount__() {
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null)) {
   return instance.getVisibleDatasetCount();
  }
  return Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 /** @override */
 m_setDatasetVisibility__int__boolean(/** number */ datasetIndex, /** boolean */ visibility) {
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null) && this.m_isValidDatasetIndex__int_$p_org_pepstock_charba_client_AbstractChart(datasetIndex)) {
   instance.setDatasetVisibility(datasetIndex, visibility);
  }
 }
 /** @override */
 m_toggleDataVisibility__int(/** number */ index) {
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null) && this.m_isValidDataIndex__int__int_$p_org_pepstock_charba_client_AbstractChart(0, index)) {
   instance.toggleDataVisibility(index);
  }
 }
 /** @override @return {boolean} */
 m_isDataVisible__int(/** number */ index) {
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null) && this.m_isValidDataIndex__int__int_$p_org_pepstock_charba_client_AbstractChart(0, index)) {
   return instance.getDataVisibility(index);
  }
  return false;
 }
 /** @override */
 m_hide__int(/** number */ datasetIndex) {
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null) && this.m_isValidDatasetIndex__int_$p_org_pepstock_charba_client_AbstractChart(datasetIndex)) {
   instance.hide(datasetIndex);
  }
 }
 /** @override */
 m_show__int(/** number */ datasetIndex) {
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null) && this.m_isValidDatasetIndex__int_$p_org_pepstock_charba_client_AbstractChart(datasetIndex)) {
   instance.show(datasetIndex);
  }
 }
 /** @override @return {DatasetReference} */
 m_getElementAtEvent__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ event) {
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null) && !$Equality.$same(event, null)) {
   let result = instance.getElementsAtEventForMode(event, InteractionMode.f_NEAREST__org_pepstock_charba_client_enums_InteractionMode.m_value__(), AbstractChart.f_INTERACTION_MODE__org_pepstock_charba_client_AbstractChart_.m_nativeObject___$p_org_pepstock_charba_client_AbstractChart_InternalInterationModeObject(), false);
   if (!$Equality.$same(result, null) && !Array_$Overlay.m_isEmpty__$devirt__org_pepstock_charba_client_commons_Array(result)) {
    return DatasetReference.f_FACTORY__org_pepstock_charba_client_items_DatasetReference.m_create__org_pepstock_charba_client_commons_NativeObject(ArrayObject_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayObject__int(result, 0));
   }
  }
  return null;
 }
 /** @override @return {List<DatasetReference>} */
 m_getElementsAtEvent__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ event) {
  let instance = this.m_lookForConsistentInstance___$p_org_pepstock_charba_client_AbstractChart();
  if (!$Equality.$same(instance, null) && !$Equality.$same(event, null)) {
   let array = instance.getElementsAtEventForMode(event, InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode.m_value__(), AbstractChart.f_INTERACTION_MODE__org_pepstock_charba_client_AbstractChart_.m_nativeObject___$p_org_pepstock_charba_client_AbstractChart_InternalInterationModeObject(), false);
   return /**@type {List<DatasetReference>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, DatasetReference.f_FACTORY__org_pepstock_charba_client_items_DatasetReference));
  }
  return /**@type {List<DatasetReference>}*/ (Collections.m_emptyList__());
 }
 /** @override */
 m_draw__() {
  if (this.f_isCanvasSupported__org_pepstock_charba_client_AbstractChart_ && this.m_isChartAttached__() && IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(this)) {
   this.m_applyConfiguration__();
   Charts.m_fireBeforeConfigure__org_pepstock_charba_client_IsChart(this);
   Defaults.m_get__().m_getPlugins__().m_onChartConfigure__org_pepstock_charba_client_Configuration__org_pepstock_charba_client_IsChart(this.f_configuration__org_pepstock_charba_client_AbstractChart_, this);
   this.f_plugins__org_pepstock_charba_client_AbstractChart_.m_onChartConfigure__org_pepstock_charba_client_Configuration__org_pepstock_charba_client_IsChart(this.f_configuration__org_pepstock_charba_client_AbstractChart_, this);
   let internalOptions = this.m_getOptions__();
   let internalData = this.m_getData__();
   this.f_configuration__org_pepstock_charba_client_AbstractChart_.m_setType__org_pepstock_charba_client_Type_$pp_org_pepstock_charba_client(this.m_getType__());
   this.f_configuration__org_pepstock_charba_client_AbstractChart_.m_setOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_ConfigurationOptions_$pp_org_pepstock_charba_client(this, internalOptions);
   this.f_configuration__org_pepstock_charba_client_AbstractChart_.m_setData__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_data_Data_$pp_org_pepstock_charba_client(this, internalData);
   this.f_configuration__org_pepstock_charba_client_AbstractChart_.m_setPlugins__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_plugins_Plugins_$pp_org_pepstock_charba_client(this, this.f_plugins__org_pepstock_charba_client_AbstractChart_);
   Charts.m_fireAfterConfigure__org_pepstock_charba_client_IsChart(this);
   if (this.m_isInitialized__()) {
    this.f_chart__org_pepstock_charba_client_AbstractChart_.destroy();
   }
   Charts.m_add__org_pepstock_charba_client_IsChart(this);
   this.f_chart__org_pepstock_charba_client_AbstractChart_ = new Chart(Canvas_$Overlay.m_getContext2d__$devirt__org_pepstock_charba_client_dom_elements_Canvas(this.f_canvas__org_pepstock_charba_client_AbstractChart_), this.f_configuration__org_pepstock_charba_client_AbstractChart_.m_nativeObject___$pp_org_pepstock_charba_client());
   this.m_updateForReconfiguring___$p_org_pepstock_charba_client_AbstractChart();
   Charts.m_fireAfterInit__org_pepstock_charba_client_IsChart(this);
   if (!$Equality.$same(this.f_timer__org_pepstock_charba_client_AbstractChart_, null) && $Objects.m_equals__java_lang_Object__java_lang_Object(Status.f_INITIALIZED__org_pepstock_charba_client_utils_CTimer_Status, this.f_timer__org_pepstock_charba_client_AbstractChart_.m_getStatus__())) {
    this.f_timer__org_pepstock_charba_client_AbstractChart_.m_start__();
   }
  }
 }
 
 m_applyConfiguration__() {}
 /** @return {boolean} */
 m_isValidDatasetIndex__int_$p_org_pepstock_charba_client_AbstractChart(/** number */ datasetIndex) {
  return !this.f_data__org_pepstock_charba_client_AbstractChart_.m_getDatasets__().isEmpty() && datasetIndex < this.f_data__org_pepstock_charba_client_AbstractChart_.m_getDatasets__().size() && datasetIndex >= 0;
 }
 /** @return {boolean} */
 m_isValidDataIndex__int__int_$p_org_pepstock_charba_client_AbstractChart(/** number */ datasetIndex, /** number */ index) {
  if (this.m_isValidDatasetIndex__int_$p_org_pepstock_charba_client_AbstractChart(datasetIndex)) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to(this.f_data__org_pepstock_charba_client_AbstractChart_.m_getDatasets__().getAtIndex(datasetIndex), Dataset));
   let dataType = dataset.m_getDataType__();
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_NUMBERS__org_pepstock_charba_client_enums_DataType, dataType)) {
    return this.m_isInRange__java_util_List__int_$p_org_pepstock_charba_client_AbstractChart(dataset.m_getData__(), index);
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_POINTS__org_pepstock_charba_client_enums_DataType, dataType) && HasDataPoints.$isInstance(dataset)) {
    let dataPoints = /**@type {HasDataPoints}*/ ($Casts.$to(dataset, HasDataPoints));
    return this.m_isInRange__java_util_List__int_$p_org_pepstock_charba_client_AbstractChart(dataPoints.m_getDataPoints__(), index);
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType, dataType) && BarDataset.$isInstance(dataset)) {
    let barDataset = /**@type {BarDataset}*/ ($Casts.$to(dataset, BarDataset));
    return this.m_isInRange__java_util_List__int_$p_org_pepstock_charba_client_AbstractChart(barDataset.m_getFloatingData__(), index);
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_STRINGS__org_pepstock_charba_client_enums_DataType, dataType) && LineDataset.$isInstance(dataset)) {
    let lineDataset = /**@type {LineDataset}*/ ($Casts.$to(dataset, LineDataset));
    return this.m_isInRange__java_util_List__int_$p_org_pepstock_charba_client_AbstractChart(lineDataset.m_getDataString__(), index);
   }
  }
  return false;
 }
 /** @return {boolean} */
 m_isInRange__java_util_List__int_$p_org_pepstock_charba_client_AbstractChart(/** List<?> */ data, /** number */ index) {
  return !$Equality.$same(data, null) && !data.isEmpty() && index < data.size() && index >= 0;
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toBase64Image__() {
  return IsChart.m_toBase64Image__$default__org_pepstock_charba_client_IsChart(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toBase64Image__double(/** number */ arg0) {
  return IsChart.m_toBase64Image__$default__org_pepstock_charba_client_IsChart__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toBase64Image__org_pepstock_charba_client_enums_ImageMimeType(/** ImageMimeType */ arg0) {
  return IsChart.m_toBase64Image__$default__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_enums_ImageMimeType(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_AbstractChart() {
  this.f_canvasCallbackProxy__org_pepstock_charba_client_AbstractChart_ = /**@type {CharbaCallbackProxy<?function(Object, Object):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_chart__org_pepstock_charba_client_AbstractChart_ = null;
  this.f_id__org_pepstock_charba_client_AbstractChart_ = DOMBuilder.m_get__().m_createUniqueId__();
  this.f_handlerRegistrations__org_pepstock_charba_client_AbstractChart_ = /**@type {!ArrayList<HandlerRegistration>}*/ (ArrayList.$create__());
  this.f_configuration__org_pepstock_charba_client_AbstractChart_ = Configuration.$create__();
  this.f_data__org_pepstock_charba_client_AbstractChart_ = Data.$create__();
  this.f_isCanvasSupported__org_pepstock_charba_client_AbstractChart_ = DOMBuilder.m_get__().m_isCanvasSupported__();
  this.f_timer__org_pepstock_charba_client_AbstractChart_ = null;
  this.f_attached__org_pepstock_charba_client_AbstractChart_ = false;
 }
 
 static $clinit() {
  AbstractChart.$clinit = () =>{};
  AbstractChart.$loadModules();
  HandlerManager.$clinit();
  IsChart.$clinit();
  AbstractChart.f_INTERACTION_MODE__org_pepstock_charba_client_AbstractChart_ = InternalInterationModeObject.$create__boolean(true);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractChart;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartRunnableWrapper = goog.module.get('org.pepstock.charba.client.AbstractChart.ChartRunnableWrapper$impl');
  InternalInterationModeObject = goog.module.get('org.pepstock.charba.client.AbstractChart.InternalInterationModeObject$impl');
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  ChartNode = goog.module.get('org.pepstock.charba.client.ChartNode$impl');
  ChartObserver = goog.module.get('org.pepstock.charba.client.ChartObserver$impl');
  Charts = goog.module.get('org.pepstock.charba.client.Charts$impl');
  Configuration = goog.module.get('org.pepstock.charba.client.Configuration$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  UpdateConfiguration = goog.module.get('org.pepstock.charba.client.UpdateConfiguration$impl');
  Array_$Overlay = goog.module.get('org.pepstock.charba.client.commons.Array.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ControllerType = goog.module.get('org.pepstock.charba.client.controllers.ControllerType$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Data = goog.module.get('org.pepstock.charba.client.data.Data$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  HasDataPoints = goog.module.get('org.pepstock.charba.client.data.HasDataPoints$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  DefaultChartOptions = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartOptions$impl');
  BaseEventTypes = goog.module.get('org.pepstock.charba.client.dom.BaseEventTypes$impl');
  BaseStyleProperties_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Position = goog.module.get('org.pepstock.charba.client.dom.enums.Position$impl');
  Unit = goog.module.get('org.pepstock.charba.client.dom.enums.Unit$impl');
  DataType = goog.module.get('org.pepstock.charba.client.enums.DataType$impl');
  ImageMimeType = goog.module.get('org.pepstock.charba.client.enums.ImageMimeType$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  AddHandlerEvent = goog.module.get('org.pepstock.charba.client.events.AddHandlerEvent$impl');
  ChartEventHandler = goog.module.get('org.pepstock.charba.client.events.ChartEventHandler$impl');
  HandlerRegistration = goog.module.get('org.pepstock.charba.client.events.HandlerRegistration$impl');
  DatasetItem = goog.module.get('org.pepstock.charba.client.items.DatasetItem$impl');
  DatasetReference = goog.module.get('org.pepstock.charba.client.items.DatasetReference$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  IsTransitionKey = goog.module.get('org.pepstock.charba.client.options.IsTransitionKey$impl');
  Plugins = goog.module.get('org.pepstock.charba.client.plugins.Plugins$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
  CTimer = goog.module.get('org.pepstock.charba.client.utils.CTimer$impl');
  Status = goog.module.get('org.pepstock.charba.client.utils.CTimer.Status$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
AbstractChart.f_CANVAS_NOT_SUPPORTED_MESSAGE__org_pepstock_charba_client_AbstractChart_ = "Ops... Canvas element is not supported...";
/**@const {number}*/
AbstractChart.f_DEFAULT_WIDTH__org_pepstock_charba_client_AbstractChart_ = 90;
/**@const {number}*/
AbstractChart.f_DEFAULT_HEIGHT__org_pepstock_charba_client_AbstractChart_ = 100;
/**@const {?string}*/
AbstractChart.f_SUFFIX_CANVAS_ELEMENT_ID__org_pepstock_charba_client_AbstractChart_ = "_canvas";
/**@type {InternalInterationModeObject}*/
AbstractChart.f_INTERACTION_MODE__org_pepstock_charba_client_AbstractChart_;
IsChart.$markImplementor(AbstractChart);
MutationHandler.$markImplementor(AbstractChart);
$Util.$setClassMetadata(AbstractChart, "org.pepstock.charba.client.AbstractChart");

exports = AbstractChart;

//# sourceMappingURL=AbstractChart.js.map
