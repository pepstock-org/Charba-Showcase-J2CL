goog.module('org.pepstock.charba.showcase.j2cl.cases.commons.Images$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Images extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLImageElement}*/
  this.f_github__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_cache__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_extensionWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_fingerprintWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_headlineWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_visibilityWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_gwt__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_sun__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_chartjs__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_pattern__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_patternHover__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_customPoint__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_flagBR__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_flagDE__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_flagFR__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_flagGB__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_flagIT__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_flagUS__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
  /**@type {HTMLImageElement}*/
  this.f_background__org_pepstock_charba_showcase_j2cl_cases_commons_Images;
 }
 /** @return {!Images} */
 static $create__() {
  let $instance = new Images();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_Images__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_commons_Images__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_commons_Images();
  this.f_github__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/GitHub-Mark-32px.png";
  this.f_cache__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/baseline_cached_white_18dp.png";
  this.f_extensionWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/baseline_extension_white_18dp.png";
  this.f_fingerprintWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/baseline_fingerprint_white_18dp.png";
  this.f_headlineWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/baseline_view_headline_white_18dp.png";
  this.f_visibilityWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/baseline_visibility_white_18dp.png";
  this.f_gwt__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/gwt.png";
  this.f_sun__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/weather-sun.png";
  this.f_chartjs__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/chartjs.png";
  this.f_pattern__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/crossline-lines.png";
  this.f_patternHover__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/positive.png";
  this.f_customPoint__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/custom_point.png";
  this.f_flagBR__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/br.png";
  this.f_flagDE__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/de.png";
  this.f_flagFR__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/fr.png";
  this.f_flagGB__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/gb.png";
  this.f_flagIT__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/it.png";
  this.f_flagUS__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/us.png";
  this.f_background__org_pepstock_charba_showcase_j2cl_cases_commons_Images.src = "images/embossed-diamond.png";
 }
 /** @return {Images} */
 static m_get__() {
  Images.$clinit();
  return Images.f_INSTANCE__org_pepstock_charba_showcase_j2cl_cases_commons_Images_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_commons_Images() {
  this.f_github__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_cache__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_extensionWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_fingerprintWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_headlineWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_visibilityWhite__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_gwt__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_sun__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_chartjs__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_pattern__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_patternHover__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_customPoint__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_flagBR__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_flagDE__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_flagFR__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_flagGB__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_flagIT__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_flagUS__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
  this.f_background__org_pepstock_charba_showcase_j2cl_cases_commons_Images = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), $Overlay));
 }
 
 static $clinit() {
  Images.$clinit = () =>{};
  Images.$loadModules();
  j_l_Object.$clinit();
  Images.f_INSTANCE__org_pepstock_charba_showcase_j2cl_cases_commons_Images_ = Images.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Images;
 }
 
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Images}*/
Images.f_INSTANCE__org_pepstock_charba_showcase_j2cl_cases_commons_Images_;
$Util.$setClassMetadata(Images, "org.pepstock.charba.showcase.j2cl.cases.commons.Images");

exports = Images;

//# sourceMappingURL=Images.js.map
