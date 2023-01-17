const { request, response } = require("express");
const { siglaFun } = require("../helpers/fc-letra");
const { Area } = require("../models");


const getAreas=async(req=request,res=response)=>{
    try {
        const {estado} =req.query;
        const area = await Area.findAll({
            where:{
                estado
            }
        })
        res.json({
            ok:true,
            msg:'Se muestra las area con exito',
            area
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            msg:`Error:${error}`
        })
    }
}
const getArea=(req=request,res=response)=>{
    try {
        res.json({
            ok:true
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            msg:`Error:${error}`
        })
    }
}
const postArea=async(req=request,res=response)=>{
    try {
        const {nombre,...data} =req.body;
        const abreviatura = siglaFun(nombre);
        data.nombre = nombre.toUpperCase();
        data.abreviatura = abreviatura;
        const area = await Area.create(data);
        res.json({
            ok:true,
            msg:'Se creo el area con exito',
            area    
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            msg:`Error:${error}`
        })
    }
}
const putArea=(req=request,res=response)=>{
    try {
        res.json({
            ok:true
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            msg:`Error:${error}`
        })
    }
}
const deleteArea=(req=request,res=response)=>{
    try {
        res.json({
            ok:true
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            msg:`Error:${error}`
        })
    }
}


module.exports = {
    getAreas,
    getArea,
    postArea,
    putArea,
    deleteArea
}