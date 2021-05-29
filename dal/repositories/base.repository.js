const db = require('../models'); 

const getAll = async (entity) => {
    try{
        const result = await db[entity].findAll(); 
        return result; 
    }catch(error){
        console.log(error); 
        return; 
    }

}

const create = async (entity,data) => {
    try{
        const entityCreated = await db[entity].create(data); 
        return entityCreated; 
    }catch(error){
        console.log(error); 
        return; 
    }
}

const baseRepository = {
    getAll, 
    create
}

module.exports = baseRepository; 