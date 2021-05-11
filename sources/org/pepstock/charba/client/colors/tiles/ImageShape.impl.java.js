goog.module('org.pepstock.charba.client.colors.tiles.ImageShape$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractShape = goog.require('org.pepstock.charba.client.colors.tiles.AbstractShape$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Context2dItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');

class ImageShape extends AbstractShape {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLImageElement}*/
  this.f_imageElement__org_pepstock_charba_client_colors_tiles_ImageShape_;
 }
 /** @return {!ImageShape} */
 static $create__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ image) {
  ImageShape.$clinit();
  let $instance = new ImageShape();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_ImageShape__org_pepstock_charba_client_dom_elements_Img(image);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_ImageShape__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ image) {
  this.$ctor__org_pepstock_charba_client_colors_tiles_AbstractShape__java_lang_String(ImageShape.f_IMAGE_SHAPE_NAME__org_pepstock_charba_client_colors_tiles_ImageShape);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(image, "Image argument");
  this.f_imageElement__org_pepstock_charba_client_colors_tiles_ImageShape_ = image;
  super.m_setKeyPrefix__java_lang_String(j_l_String.m_valueOf__java_lang_Object(ImageShape.f_IMAGE_SHAPE_NAME__org_pepstock_charba_client_colors_tiles_ImageShape) + j_l_String.m_valueOf__java_lang_Object(this.f_imageElement__org_pepstock_charba_client_colors_tiles_ImageShape_.src));
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let realSize = size - 2;
  Context2dItem_$Overlay.m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__double__double__double__double(context, this.f_imageElement__org_pepstock_charba_client_colors_tiles_ImageShape_, 1, 1, realSize, realSize);
 }
 
 static $clinit() {
  ImageShape.$clinit = () =>{};
  ImageShape.$loadModules();
  AbstractShape.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImageShape;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Context2dItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
 }
}
/**@const {?string}*/
ImageShape.f_IMAGE_SHAPE_NAME__org_pepstock_charba_client_colors_tiles_ImageShape = "image";
$Util.$setClassMetadata(ImageShape, "org.pepstock.charba.client.colors.tiles.ImageShape");

exports = ImageShape;

//# sourceMappingURL=ImageShape.js.map
