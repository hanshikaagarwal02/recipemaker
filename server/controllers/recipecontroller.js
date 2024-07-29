require('../models/database');
const Category=require('../models/Category')
const Recipe=require('../models/Recipe');

//get homepage
exports.homepage=async(req,res)=>{

    try{
        const limitNumber=5;
        const categories=await Category.find({}).limit(limitNumber)
        const latest=await Recipe.find({}).limit(limitNumber);
        const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNumber);
    const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
    const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(limitNumber);
         const food={latest, thai, american, chinese};
        res.render('index',{title:'recipe',categories,food});
    }
    catch{
        res.status(500).send({message:error.message||"error occured"})
    }
   
}

//get categories
exports.exploreCategories=async(req,res)=>{

    try{
        const limitNumber=20;
        const categories=await Category.find({}).limit(limitNumber)
        res.render('categories',{title:'categories',categories});
    }
    catch{
        res.status(500).send({message:error.message||"error occured"})
    }
   
}

// category by id 
exports.exploreCategoriesbyId=async(req,res)=>{

    try{
        let categoryId=req.params.id;

        const limitNumber=20;
        const categoryById=await Recipe.find({'category':categoryId}).limit(limitNumber)
        res.render('categories',{title:'categories',categoryById});
    }
    catch{
        res.status(500).send({message:error.message||"error occured"})
    }
   
}



//get recipe by id
exports.exploreRecipe=async(req,res)=>{

    try{
       let recipeId=req.params.id;
       const recipe=await Recipe.findById(recipeId)
        
        res.render('recipe',{title:'recipe',recipe});
    }
    catch{
        res.status(500).send({message:error.message||"error occured"})
    }
   
}

// search-post 
exports.searchRecipe=async(req,res)=>{
    try{
       let searchTerm= req.body.searchTerm
       let recipe=await Recipe.find({$text:{$search:searchTerm}})
       
       res.render('search',{title:'search',recipe});
    }
    catch(error){
        res.status(500).send({message:error.message||"error occured"})
    }
    
}

// explore latest 
exports.exploreLatest=async(req,res)=>{

    try{
       const limitNumber=20;
       const recipe=await Recipe.find({}).sort({_id:-1}).limit(limitNumber)
        
        res.render('exploreLatest',{title:'explore',recipe});
    }
    catch{
        res.status(500).send({message:error.message||"error occured"})
    }
   
}

// submit-recipe 
exports.submitRecipe=async(req,res)=>{
    res.render('submit-recipe',{title:'submitRecipe'});
}

// submit recipe on post 
exports.submitRecipeOnPost=async(req,res)=>{
    res.render('submit-recipe',{title:'submitRecipe'});
}
// about 
exports.about=async(req,res)=>{
    res.render('about',{title:'About'});
}


