

/*!
 * BodyStyle v3.5.0
 * Copyright Federico Manzano
 * Licencia MIT
 * Repositorio (https://github.com/FedericoManzano/bodystyle-v3.5.0-fuente)
 */

import Modal from "./modulos/Modal"
import Waves from  "./modulos/Waves"
import DropDown from "./modulos/Dropdown"
import BotonFlotante from "./modulos/BotonFlotante"
import Toast from "./modulos/Toast"
import ScrollSpy from "./modulos/ScrollSpy"
import ToolTips from "./modulos/ToolTips"
import Imagenes from "./modulos/Imagenes"
import Range from "./modulos/Range"
import Slider from "./modulos/Slider"
import Paralax from "./modulos/Paralax"
import BotonInicio from "./modulos/BotonInicio"
import Alerta from "./modulos/Alerta"
import Template from "./modulos/Template"
import Tab from "./modulos/Tabs"
import GruposInput from "./modulos/GruposInput"
import Desactivado from "./modulos/Desactivado"
import Coleccion from "./modulos/Colecciones"
import ColeccionFlotante from "./modulos/ColeccionFlotante"
import EfectoHoverBorde from "./modulos/EfectoHoverBorde"
import InputHandler from "./modulos/InputHandler"
import Select from "./modulos/Select"
import Contenedores from "./modulos/Contenedores"
import Nav from "./modulos/Nav"
import Html from "./modulos/CodigoHtml"
import Js from "./modulos/CodigoJs"
import Css from "./modulos/CodigoCss"
import Java from "./modulos/CodigoJava"
import C from "./modulos/CodigoC"
import ComentarioDinamico from "./modulos/ComentarioDinamico"
import Personalizado from "./modulos/Personalizado"


(function(){
    Waves.iniciar()
    Range.iniciar()
    Alerta.iniciar()
    Template.iniciar()
    GruposInput.iniciar()
    Desactivado.iniciar();
    InputHandler.iniciar()
    ComentarioDinamico.iniciar()
    
    const CodigoHtmlInit = (config) => {
        Html.iniciar(config)
    }

    const CodigoJsInit = (config) => {
        Js.iniciar(config)
    }

    const CodigoCssInit = (config) => {
        Css.iniciar(config)
    }

    const CodigoJavaInit = (config) => {
        Java.iniciar(config)
    }

    const CodigoCInit = (config) => {
        C.iniciar(config)
    }

    const TemplateDestroy = () => {
        Template.destroy()
    }

    

    const NavInit = () => {
        Nav.iniciar()
    }

    const NavDestroy = () => {
        Nav.destroy()
    }


    const ContenedoresInit = () => Contenedores.iniciar()

    const Colecciones = () => {
        return new Coleccion
    } 

    const ParalaxInit = () => Paralax.iniciar()


    const BotonFlotanteInit = (config) => {
        BotonFlotante.iniciar(config)
    }

    var BotonFlotanteDestroy = () => {
        BotonFlotante.destroy()
    }

    const ScrollSpyInit = (config) => ScrollSpy.iniciar(config)
    const ScrollSpyDestroy = () => ScrollSpy.destroy()


    const ModalInit = function(conf){
        Modal.iniciar(conf)
    }

    const ModalDestroy = function(){
        Modal.destroy()
    }

    const ImagenesInit = ()=> {
        Imagenes.iniciar()
    }

    const ImagenesDestroy = ()=> {
        Imagenes.destroy()
    }


    const BotonInicioInit = () => {
        BotonInicio.iniciar()
    }

    const TabInit = () => {
        return new Tab
    }

    const ColeccionFlot = () => {
        return new ColeccionFlotante
    }

    const EfectoHoverBordeInit = () => {
        return new EfectoHoverBorde
    }

    const AutoInit = ()=> {
        ModalInit()
        DropDownInit({})
        ScrollSpyInit({})
        BotonFlotanteInit({})
        ImagenesInit()
        SliderInit({})
        ParalaxInit()
        ToolTipsInit()
        NavInit()
    }


    const PersonalizadoInit = (config) => {
        Personalizado.iniciar(config)
    }

    const PersonalizadoDestroy = () => {
        Personalizado.destroy()
    }

    const SliderInit = (config) => {
        Slider.iniciar(config)
    }

    const SliderDestroy= () => {
        Slider.destroy()
    }

    const Deshabilitar = () => {
        desactivar(".deshabilitado")
        desactivar(".input-cargando")
        desactivar(".input-cargando input")
        desactivar(".b-rojo-cargando")
        desactivar(".b-verde-cargando")
        desactivar(".b-azul-cargando")
        desactivar(".b-gris-cargando")
        desactivar(".b-negro-cargando")
        desactivar(".b-blanco-cargando")
    }
    
    const DropDownInit = (config) => {
        DropDown.iniciar(config)
    }

    const DropDownDestroy = (elemento) => {
        DropDown.destroy(elemento)
    }

    const ToolTipsInit = () => {
        ToolTips.iniciar()
    }

    const ToolTipsDestroy = () => {
        ToolTips.destroy()
    }

    const SelectInit = () => {
        return new Select
    }

    const BotonInicioDestroy = () => {
        BotonInicio.destroy()
    }



    const BS = {
        AutoInit: () => AutoInit(),

        // Modales
        ModalInit: (config) => ModalInit(config),
        ModalDestroy: () => ModalDestroy(),


        // Dropdown
        DropDownInit: (config) => DropDownInit(config),
        DropDownDestroy: (elemento) => DropDownDestroy(elemento),

        // Toast
        Toast: (config) => Toast.ejecutar(config),

        // ScrollSpy
        ScrollSpyInit: (config) => ScrollSpyInit(config),
        ScrollSpyDestroy: () => ScrollSpyDestroy(),

        // BotonFlotante
        BotonFlotanteInit: (config)=> BotonFlotanteInit(config),
        BotonFlotanteDestroy: () => BotonFlotanteDestroy(),

        // Imagenes
        ImagenesInit: () => ImagenesInit(),
        ImagenesDestroy: () => ImagenesDestroy(),

        // Deshabilitado
        Deshabilitar: () => Deshabilitar(),

        // Slider
        SliderInit: (config = {}) => SliderInit(config),
        SliderDestroy: () => SliderDestroy(),


        // Paralax
        ParalaxInit: () => ParalaxInit(),

        // botonInicio
        BotonInicioInit: () => BotonInicioInit(),
        BotonInicioDestroy: () => BotonInicioDestroy(),


        // Tabs
        TabInit: () => TabInit(),

        // Tooltips
        ToolTipsInit: () =>  ToolTipsInit(),
        ToolTipsDestroy: () => ToolTipsDestroy(),


        // Colecciones
        Colecciones: () => Colecciones(),
        ColeccionFlot: () => ColeccionFlot(),

        // Efecti Hover Borde
        EfectoHoverBordeInit: () => EfectoHoverBordeInit(),

        // Select 
        SelectInit: () => SelectInit(),

        // Contenedores DEPRECATE
        ContenedoresInit: () => ContenedoresInit(),

        // Navs
        NavInit: () => NavInit(),
        NavDestroy: () => NavDestroy(),

        // Template
        TemplateDestroy: () => TemplateDestroy(),


        // Personalizado
        PersonalizadoInit: (config) => PersonalizadoInit(config),
        PersonalizadoDestroy: () => PersonalizadoDestroy(),


        // Codigo 

        CodigoHtmlInit: (config) =>  CodigoHtmlInit(config),
        CodigoCssInit: (config) =>  CodigoCssInit(config),
        CodigoJsInit: (config) =>  CodigoJsInit(config),
        CodigoJavaInit: (config) =>  CodigoJavaInit(config),
        CodigoCInit: (config) =>  CodigoCInit(config)
    }
    
    window.BS = BS
})()

export default BS




