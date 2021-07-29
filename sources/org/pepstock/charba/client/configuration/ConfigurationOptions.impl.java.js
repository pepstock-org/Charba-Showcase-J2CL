goog.module('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationElement = goog.require('org.pepstock.charba.client.ConfigurationElement$impl');
const ConfigurationContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationContainer$impl');
const HasAnimation = goog.require('org.pepstock.charba.client.configuration.HasAnimation$impl');
const IsEventProvider = goog.require('org.pepstock.charba.client.configuration.IsEventProvider$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let Configuration = goog.forwardDeclare('org.pepstock.charba.client.Configuration$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ConfigurationLoader = goog.forwardDeclare('org.pepstock.charba.client.commons.ConfigurationLoader$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Merger = goog.forwardDeclare('org.pepstock.charba.client.commons.Merger$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animation$impl');
let AnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.configuration.AnimationContainer$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animations$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let Datasets = goog.forwardDeclare('org.pepstock.charba.client.configuration.Datasets$impl');
let Elements = goog.forwardDeclare('org.pepstock.charba.client.configuration.Elements$impl');
let EventAxesHandler = goog.forwardDeclare('org.pepstock.charba.client.configuration.EventAxesHandler$impl');
let EventTitleHandler = goog.forwardDeclare('org.pepstock.charba.client.configuration.EventTitleHandler$impl');
let Filler = goog.forwardDeclare('org.pepstock.charba.client.configuration.Filler$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.configuration.Font$impl');
let Hover = goog.forwardDeclare('org.pepstock.charba.client.configuration.Hover$impl');
let Interaction = goog.forwardDeclare('org.pepstock.charba.client.configuration.Interaction$impl');
let Layout = goog.forwardDeclare('org.pepstock.charba.client.configuration.Layout$impl');
let Legend = goog.forwardDeclare('org.pepstock.charba.client.configuration.Legend$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.configuration.Plugins$impl');
let ScalesOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ScalesOptions$impl');
let Subtitle = goog.forwardDeclare('org.pepstock.charba.client.configuration.Subtitle$impl');
let Title = goog.forwardDeclare('org.pepstock.charba.client.configuration.Title$impl');
let Tooltips = goog.forwardDeclare('org.pepstock.charba.client.configuration.Tooltips$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.configuration.Transitions$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let ChartEventProperty = goog.forwardDeclare('org.pepstock.charba.client.enums.ChartEventProperty$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let AddHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AddHandlerEvent$impl');
let ChartClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartClickEvent$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let ChartHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartHoverEvent$impl');
let ChartResizeEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartResizeEvent$impl');
let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
let RemoveHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let DatasetReference = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetReference$impl');
let SizeItem = goog.forwardDeclare('org.pepstock.charba.client.items.SizeItem$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let Scale = goog.forwardDeclare('org.pepstock.charba.client.options.Scale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @extends {ConfigurationContainer<ExtendedOptions>}
 * @implements {ConfigurationElement}
 * @implements {HasAnimation}
 * @implements {IsEventProvider}
 */
class ConfigurationOptions extends ConfigurationContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Chart, ?):void>}*/
  this.f_resizeCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {CharbaCallbackProxy<?function(?, Array, Chart):void>}*/
  this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {CharbaCallbackProxy<?function(?, Array, Chart):void>}*/
  this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {IsDefaultScaledOptions}*/
  this.f_defaultValues__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {AnimationContainer}*/
  this.f_animationContainer__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Legend}*/
  this.f_legend__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Title}*/
  this.f_title__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Subtitle}*/
  this.f_subtitle__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Tooltips}*/
  this.f_tooltips__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Filler}*/
  this.f_filler__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Hover}*/
  this.f_hover__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Interaction}*/
  this.f_interaction__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Layout}*/
  this.f_layout__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Elements}*/
  this.f_elements__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Plugins}*/
  this.f_plugins__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Datasets}*/
  this.f_datasets__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {EventAxesHandler}*/
  this.f_eventAxesHandler__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {EventTitleHandler}*/
  this.f_eventTitleHandler__org_pepstock_charba_client_configuration_ConfigurationOptions_;
  /**@type {number}*/
  this.f_onDatasetSelectionHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = 0;
  /**@type {number}*/
  this.f_onClickHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = 0;
  /**@type {number}*/
  this.f_onHoverHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = 0;
  /**@type {number}*/
  this.f_onResizeHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = 0;
 }
 
 $ctor__org_pepstock_charba_client_configuration_ConfigurationOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationContainer__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObjectContainer(chart, ExtendedOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_configuration_ConfigurationEnvelop(chart, defaultValues, /**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(null, true))));
  this.$init___$p_org_pepstock_charba_client_configuration_ConfigurationOptions();
  this.f_defaultValues__org_pepstock_charba_client_configuration_ConfigurationOptions_ = defaultValues;
  IsEventProvider.m_register__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_IsEventProvider(chart, this);
  this.f_eventAxesHandler__org_pepstock_charba_client_configuration_ConfigurationOptions_ = EventAxesHandler.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_eventTitleHandler__org_pepstock_charba_client_configuration_ConfigurationOptions_ = EventTitleHandler.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_animationContainer__org_pepstock_charba_client_configuration_ConfigurationOptions_ = AnimationContainer.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(this.m_getChart__(), IsProvider.$adapt(() =>{
   return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions));
  }));
  this.f_elements__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Elements.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_datasets__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Datasets.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_legend__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Legend.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_title__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Title.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_subtitle__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Subtitle.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_layout__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Layout.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_hover__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Hover.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_interaction__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Interaction.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_plugins__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Plugins.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_tooltips__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Tooltips.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_filler__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Filler.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_font__org_pepstock_charba_client_configuration_ConfigurationOptions_ = Font.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getFont__();
  }));
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setCharbaId__java_lang_String(chart.m_getId__());
  this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_.callback = (/** ? */ event, /** Array */ items, /** Chart */ nativeChart) =>{
   let eventContext = ChartEventContext.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(event)));
   let nativeEvent = eventContext.m_getNativeEvent__();
   this.m_handleDatasetSelection__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_configuration_ConfigurationOptions(nativeEvent);
   this.m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(ChartClickEvent.$create__org_pepstock_charba_client_events_ChartEventContext__java_util_List(eventContext, /**@type {List<DatasetReference>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(items, DatasetReference.f_FACTORY__org_pepstock_charba_client_items_DatasetReference))));
  };
  this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_.callback = (/** ? */ event_1, /** Array */ items_1, /** Chart */ nativeChart_1) =>{
   let eventContext_1 = ChartEventContext.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(event_1)));
   this.m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(ChartHoverEvent.$create__org_pepstock_charba_client_events_ChartEventContext__java_util_List(eventContext_1, /**@type {List<DatasetReference>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(items_1, DatasetReference.f_FACTORY__org_pepstock_charba_client_items_DatasetReference))));
  };
  this.f_resizeCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_.callback = (/** Chart */ nativeChart_2, /** ? */ size) =>{
   let eventContext_2 = ChartEventContext.$create__org_pepstock_charba_client_Chart(nativeChart_2);
   this.m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(ChartResizeEvent.$create__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_SizeItem(eventContext_2, SizeItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(size, true)))));
  };
 }
 
 m_loadOptions__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  Merger.m_get__().m_load__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_ChartEnvelop(this.m_getChart__(), /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)), envelop);
 }
 
 m_setChartOptions__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  this.m_beforeConfigurationUpdate__();
  this.m_setConfiguration__org_pepstock_charba_client_commons_NativeObjectContainer(ExtendedOptions.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this.m_getChart__(), this.f_defaultValues__org_pepstock_charba_client_configuration_ConfigurationOptions_, /**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(/**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__())))));
  if (ScalesOptions.$isInstance(this)) {
   let options = /**@type {ScalesOptions}*/ ($Casts.$to(this, ScalesOptions));
   for (let $iterator = options.m_getScales__().m_getAxes__().m_iterator__(); $iterator.m_hasNext__(); ) {
    let axis = /**@type {Axis}*/ ($Casts.$to($iterator.m_next__(), Axis));
    {
     this.m_beforeAxisConfigurationUpdate__org_pepstock_charba_client_configuration_Axis(axis);
     axis.m_setConfiguration__org_pepstock_charba_client_commons_NativeObjectContainer(ExtendedScale.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_defaults_IsDefaultScale(/**@type {!ConfigurationEnvelop<Scale>}*/ (ConfigurationEnvelop.$create__java_lang_Object(/**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getScales__().m_getAxis__org_pepstock_charba_client_options_ScaleId(axis.m_getId__()))), axis.m_getDefaultValues___$pp_org_pepstock_charba_client_configuration()));
     this.m_afterAxisConfigurationUpdate__org_pepstock_charba_client_configuration_Axis(axis);
    }
   }
  }
  this.m_afterConfigurationUpdate__();
 }
 
 m_beforeConfigurationUpdate__() {}
 
 m_afterConfigurationUpdate__() {}
 
 m_beforeAxisConfigurationUpdate__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {}
 
 m_afterAxisConfigurationUpdate__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {}
 /** @return {IsDefaultScaledOptions} */
 m_getDefaultValues___$pp_org_pepstock_charba_client_configuration() {
  return this.f_defaultValues__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @override @return {AnimationContainer} */
 m_getAnimationContainer__() {
  return this.f_animationContainer__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Hover} */
 m_getHover__() {
  return this.f_hover__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Interaction} */
 m_getInteraction__() {
  return this.f_interaction__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Layout} */
 m_getLayout__() {
  return this.f_layout__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Legend} */
 m_getLegend__() {
  return this.f_legend__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Title} */
 m_getTitle__() {
  return this.f_title__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Subtitle} */
 m_getSubtitle__() {
  return this.f_subtitle__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Tooltips} */
 m_getTooltips__() {
  return this.f_tooltips__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Elements} */
 m_getElements__() {
  return this.f_elements__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Datasets} */
 m_getDatasets__() {
  return this.f_datasets__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Plugins} */
 m_getPlugins__() {
  return this.f_plugins__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Filler} */
 m_getFiller__() {
  return this.f_filler__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @return {Font} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_configuration_ConfigurationOptions_;
 }
 /** @abstract @return {Axis} */
 m_getAxisById__int_$pp_org_pepstock_charba_client_configuration(/** number */ id) {}
 
 m_setEvents__arrayOf_org_pepstock_charba_client_enums_Event(/** Array<Event> */ events) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setEvents__arrayOf_org_pepstock_charba_client_enums_Event(events);
 }
 /** @return {List<Event>} */
 m_getEvents__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getEvents__();
 }
 
 m_setLocale__org_pepstock_charba_client_intl_CLocale(/** CLocale */ locale) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setLocale__org_pepstock_charba_client_intl_CLocale(locale);
 }
 /** @return {CLocale} */
 m_getLocale__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getLocale__();
 }
 
 m_setResponsive__boolean(/** boolean */ responsive) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setResponsive__boolean(responsive);
 }
 /** @return {boolean} */
 m_isResponsive__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_isResponsive__();
 }
 
 m_setMaintainAspectRatio__boolean(/** boolean */ maintainAspectRatio) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setMaintainAspectRatio__boolean(maintainAspectRatio);
 }
 /** @return {boolean} */
 m_isMaintainAspectRatio__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_isMaintainAspectRatio__();
 }
 
 m_setAspectRatio__double(/** number */ ratio) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setAspectRatio__double(ratio);
 }
 /** @return {number} */
 m_getAspectRatio__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getAspectRatio__();
 }
 
 m_setResizeDelay__int(/** number */ delay) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setResizeDelay__int(delay);
 }
 /** @return {number} */
 m_getResizeDelay__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getResizeDelay__();
 }
 
 m_setDevicePixelRatio__double(/** number */ ratio) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setDevicePixelRatio__double(ratio);
 }
 /** @return {number} */
 m_getDevicePixelRatio__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getDevicePixelRatio__();
 }
 /** @return {boolean} */
 m_isDrawOnAttach__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_isDrawOnAttach__();
 }
 
 m_setDrawOnAttach__boolean(/** boolean */ drawOnAttach) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setDrawOnAttach__boolean(drawOnAttach);
 }
 /** @return {boolean} */
 m_isDestroyOnDetach__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_isDestroyOnDetach__();
 }
 
 m_setDestroyOnDetach__boolean(/** boolean */ destroyOnDetach) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setDestroyOnDetach__boolean(destroyOnDetach);
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setColor__org_pepstock_charba_client_colors_IsColor(color);
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getColorAsString__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getColorAsString__();
 }
 /** @return {IsColor} */
 m_getColor__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getColor__();
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(backgroundColor);
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setBackgroundColor__java_lang_String(backgroundColor);
 }
 /** @return {?string} */
 m_getBackgroundColorAsString__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getBackgroundColorAsString__();
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getBackgroundColor__();
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setBorderColor__org_pepstock_charba_client_colors_IsColor(borderColor);
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ borderColor) {
  /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setBorderColor__java_lang_String(borderColor);
 }
 /** @return {?string} */
 m_getBorderColorAsString__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getBorderColorAsString__();
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_getBorderColor__();
 }
 /** @return {boolean} */
 m_hasDatasetSelectionHandlers__() {
  return this.f_onDatasetSelectionHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ > 0;
 }
 /** @return {boolean} */
 m_hasTitleClickHandlers__() {
  return this.f_eventTitleHandler__org_pepstock_charba_client_configuration_ConfigurationOptions_.m_hasTitleClickHandlers___$pp_org_pepstock_charba_client_configuration();
 }
 /** @return {boolean} */
 m_hasTitleEnterHandlers__() {
  return this.f_eventTitleHandler__org_pepstock_charba_client_configuration_ConfigurationOptions_.m_hasTitleEnterHandlers___$pp_org_pepstock_charba_client_configuration();
 }
 /** @return {boolean} */
 m_hasTitleLeaveHandlers__() {
  return this.f_eventTitleHandler__org_pepstock_charba_client_configuration_ConfigurationOptions_.m_hasTitleLeaveHandlers___$pp_org_pepstock_charba_client_configuration();
 }
 /** @return {boolean} */
 m_hasAxisClickHandlers__() {
  return this.f_eventAxesHandler__org_pepstock_charba_client_configuration_ConfigurationOptions_.m_hasAxisClickHandlers___$pp_org_pepstock_charba_client_configuration();
 }
 /** @return {boolean} */
 m_hasAxisHoverHandlers__() {
  return this.f_eventAxesHandler__org_pepstock_charba_client_configuration_ConfigurationOptions_.m_hasAxisHoverHandlers___$pp_org_pepstock_charba_client_configuration();
 }
 /** @return {boolean} */
 m_hasAxisEnterHandlers__() {
  return this.f_eventAxesHandler__org_pepstock_charba_client_configuration_ConfigurationOptions_.m_hasAxisEnterHandlers___$pp_org_pepstock_charba_client_configuration();
 }
 /** @return {boolean} */
 m_hasAxisLeaveHandlers__() {
  return this.f_eventAxesHandler__org_pepstock_charba_client_configuration_ConfigurationOptions_.m_hasAxisLeaveHandlers___$pp_org_pepstock_charba_client_configuration();
 }
 /** @override */
 m_onAdd__org_pepstock_charba_client_events_AddHandlerEvent(/** AddHandlerEvent */ event) {
  if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(ChartClickEvent.f_TYPE__org_pepstock_charba_client_events_ChartClickEvent) || event.m_isRecognize__org_pepstock_charba_client_events_EventType(DatasetSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent)) {
   if (this.f_onClickHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ == 0) {
    /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)), ChartEventProperty.f_ON_CLICK__org_pepstock_charba_client_enums_ChartEventProperty, /**@type {!ConfigurationEnvelop<?function():void>}*/ (ConfigurationEnvelop.$create__java_lang_Object(this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_.proxy)));
   }
   this.f_onClickHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = this.f_onClickHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ + 1 | 0;
   if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(DatasetSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent)) {
    this.f_onDatasetSelectionHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = this.f_onDatasetSelectionHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ + 1 | 0;
   }
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(ChartHoverEvent.f_TYPE__org_pepstock_charba_client_events_ChartHoverEvent)) {
   if (this.f_onHoverHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ == 0) {
    /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)), ChartEventProperty.f_ON_HOVER__org_pepstock_charba_client_enums_ChartEventProperty, /**@type {!ConfigurationEnvelop<?function():void>}*/ (ConfigurationEnvelop.$create__java_lang_Object(this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_.proxy)));
   }
   this.f_onHoverHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = this.f_onHoverHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ + 1 | 0;
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(ChartResizeEvent.f_TYPE__org_pepstock_charba_client_events_ChartResizeEvent)) {
   if (this.f_onResizeHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ == 0) {
    /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)), ChartEventProperty.f_ON_RESIZE__org_pepstock_charba_client_enums_ChartEventProperty, /**@type {!ConfigurationEnvelop<?function():void>}*/ (ConfigurationEnvelop.$create__java_lang_Object(this.f_resizeCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_.proxy)));
   }
   this.f_onResizeHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = this.f_onResizeHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ + 1 | 0;
  }
 }
 /** @override */
 m_onRemove__org_pepstock_charba_client_events_RemoveHandlerEvent(/** RemoveHandlerEvent */ event) {
  if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(ChartClickEvent.f_TYPE__org_pepstock_charba_client_events_ChartClickEvent) || event.m_isRecognize__org_pepstock_charba_client_events_EventType(DatasetSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent)) {
   this.f_onClickHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = this.f_onClickHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ - 1 | 0;
   if (this.f_onClickHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ == 0) {
    /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)), ChartEventProperty.f_ON_CLICK__org_pepstock_charba_client_enums_ChartEventProperty, ConfigurationOptions.$static_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions);
   }
   if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(DatasetSelectionEvent.f_TYPE__org_pepstock_charba_client_events_DatasetSelectionEvent)) {
    this.f_onDatasetSelectionHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = this.f_onDatasetSelectionHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ - 1 | 0;
   }
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(ChartHoverEvent.f_TYPE__org_pepstock_charba_client_events_ChartHoverEvent)) {
   this.f_onHoverHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = this.f_onHoverHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ - 1 | 0;
   if (this.f_onHoverHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ == 0) {
    /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)), ChartEventProperty.f_ON_HOVER__org_pepstock_charba_client_enums_ChartEventProperty, ConfigurationOptions.$static_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions);
   }
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(ChartResizeEvent.f_TYPE__org_pepstock_charba_client_events_ChartResizeEvent)) {
   this.f_onResizeHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = this.f_onResizeHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ - 1 | 0;
   if (this.f_onResizeHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ == 0) {
    /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)), ChartEventProperty.f_ON_RESIZE__org_pepstock_charba_client_enums_ChartEventProperty, ConfigurationOptions.$static_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions);
   }
  }
 }
 /** @override */
 m_load__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Configuration(/** IsChart */ chart, /** Configuration */ configuration) {
  ConfigurationLoader.m_loadOptions__org_pepstock_charba_client_Configuration__org_pepstock_charba_client_commons_NativeObjectContainer(configuration, /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)));
 }
 
 m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/** AbstractNode */ node, /** Key */ property, /** * */ callBack, /** CharbaCallbackProxy<?> */ callbackProxy) {
  if (!$Equality.$same(callBack, null)) {
   /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setCallback__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(/**@type {!ConfigurationEnvelop<AbstractNode>}*/ (ConfigurationEnvelop.$create__java_lang_Object(node)), property, callbackProxy.proxy);
  } else {
   /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setCallback__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(/**@type {!ConfigurationEnvelop<AbstractNode>}*/ (ConfigurationEnvelop.$create__java_lang_Object(node)), property, /**@type {?function():void}*/ (null));
  }
 }
 
 m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(/** AbstractNode */ node, /** Key */ property, /** Function */ callBack) {
  if (!$Equality.$same(callBack, null)) {
   /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setCallback__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(/**@type {!ConfigurationEnvelop<AbstractNode>}*/ (ConfigurationEnvelop.$create__java_lang_Object(node)), property, callBack);
  } else {
   /**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedOptions)).m_setCallback__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(/**@type {!ConfigurationEnvelop<AbstractNode>}*/ (ConfigurationEnvelop.$create__java_lang_Object(node)), property, /**@type {Function}*/ (null));
  }
 }
 /** @return {ChartContext} */
 m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(/** ? */ context) {
  return ChartContext.$create__org_pepstock_charba_client_commons_NativeObject(context);
 }
 
 m_handleDatasetSelection__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_configuration_ConfigurationOptions(/** Object */ event) {
  let item = this.m_getChart__().m_getElementAtEvent__org_pepstock_charba_client_dom_BaseNativeEvent(event);
  if (!$Equality.$same(item, null) && this.m_hasDatasetSelectionHandlers__()) {
   this.m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(DatasetSelectionEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_DatasetReference(event, item));
  }
 }
 //Default method forwarding stub.
 /** @override @return {Animation} */
 m_getAnimation__() {
  return HasAnimation.m_getAnimation__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Animations} */
 m_getAnimations__() {
  return HasAnimation.m_getAnimations__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Transitions} */
 m_getTransitions__() {
  return HasAnimation.m_getTransitions__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return HasAnimation.m_isAnimationEnabled__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ arg0) {
  HasAnimation.m_setAnimationEnabled__$default__org_pepstock_charba_client_configuration_HasAnimation__boolean(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_ConfigurationOptions() {
  this.f_resizeCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_ = /**@type {CharbaCallbackProxy<?function(Chart, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_ = /**@type {CharbaCallbackProxy<?function(?, Array, Chart):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_ConfigurationOptions_ = /**@type {CharbaCallbackProxy<?function(?, Array, Chart):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_onDatasetSelectionHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = 0;
  this.f_onClickHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = 0;
  this.f_onHoverHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = 0;
  this.f_onResizeHandlers__org_pepstock_charba_client_configuration_ConfigurationOptions_ = 0;
 }
 /** @return {ConfigurationEnvelop<?function():void>} */
 static get f_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions() {
  return (ConfigurationOptions.$clinit(), ConfigurationOptions.$static_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions);
 }
 
 static $clinit() {
  ConfigurationOptions.$clinit = () =>{};
  ConfigurationOptions.$loadModules();
  ConfigurationContainer.$clinit();
  HasAnimation.$clinit();
  ConfigurationOptions.$static_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions = /**@type {!ConfigurationEnvelop<?function():void>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(null, true));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ConfigurationOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  ChartContext = goog.module.get('org.pepstock.charba.client.callbacks.ChartContext$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ConfigurationLoader = goog.module.get('org.pepstock.charba.client.commons.ConfigurationLoader$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Merger = goog.module.get('org.pepstock.charba.client.commons.Merger$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  AnimationContainer = goog.module.get('org.pepstock.charba.client.configuration.AnimationContainer$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  Datasets = goog.module.get('org.pepstock.charba.client.configuration.Datasets$impl');
  Elements = goog.module.get('org.pepstock.charba.client.configuration.Elements$impl');
  EventAxesHandler = goog.module.get('org.pepstock.charba.client.configuration.EventAxesHandler$impl');
  EventTitleHandler = goog.module.get('org.pepstock.charba.client.configuration.EventTitleHandler$impl');
  Filler = goog.module.get('org.pepstock.charba.client.configuration.Filler$impl');
  Font = goog.module.get('org.pepstock.charba.client.configuration.Font$impl');
  Hover = goog.module.get('org.pepstock.charba.client.configuration.Hover$impl');
  Interaction = goog.module.get('org.pepstock.charba.client.configuration.Interaction$impl');
  Layout = goog.module.get('org.pepstock.charba.client.configuration.Layout$impl');
  Legend = goog.module.get('org.pepstock.charba.client.configuration.Legend$impl');
  Plugins = goog.module.get('org.pepstock.charba.client.configuration.Plugins$impl');
  ScalesOptions = goog.module.get('org.pepstock.charba.client.configuration.ScalesOptions$impl');
  Subtitle = goog.module.get('org.pepstock.charba.client.configuration.Subtitle$impl');
  Title = goog.module.get('org.pepstock.charba.client.configuration.Title$impl');
  Tooltips = goog.module.get('org.pepstock.charba.client.configuration.Tooltips$impl');
  ChartEventProperty = goog.module.get('org.pepstock.charba.client.enums.ChartEventProperty$impl');
  ChartClickEvent = goog.module.get('org.pepstock.charba.client.events.ChartClickEvent$impl');
  ChartEventContext = goog.module.get('org.pepstock.charba.client.events.ChartEventContext$impl');
  ChartHoverEvent = goog.module.get('org.pepstock.charba.client.events.ChartHoverEvent$impl');
  ChartResizeEvent = goog.module.get('org.pepstock.charba.client.events.ChartResizeEvent$impl');
  DatasetSelectionEvent = goog.module.get('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
  DatasetReference = goog.module.get('org.pepstock.charba.client.items.DatasetReference$impl');
  SizeItem = goog.module.get('org.pepstock.charba.client.items.SizeItem$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {ConfigurationEnvelop<?function():void>}*/
ConfigurationOptions.$static_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions;
ConfigurationElement.$markImplementor(ConfigurationOptions);
HasAnimation.$markImplementor(ConfigurationOptions);
IsEventProvider.$markImplementor(ConfigurationOptions);
$Util.$setClassMetadata(ConfigurationOptions, "org.pepstock.charba.client.configuration.ConfigurationOptions");

exports = ConfigurationOptions;

//# sourceMappingURL=ConfigurationOptions.js.map
