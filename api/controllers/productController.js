import models from '../../models/index';

const getAll = async (req, res)=>{
const products = await models.products.findAll({raw: true});
res.json(products);
// console.log(products);
};

const addAll = async (req, res)=>{
    const products = await models.products.findAll({raw: true});
    res.json(products);
};


export default {
    getAll,
    addAll
}