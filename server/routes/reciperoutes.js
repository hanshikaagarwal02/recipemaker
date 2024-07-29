const express=require('express');
const router=express.Router();
const recipeController=require('../controllers/recipecontroller');

router.get('/',recipeController.homepage);
router.get('/categories',recipeController.exploreCategories)
router.get('/recipe/:id',recipeController.exploreRecipe)
router.get('/categories/:id',recipeController.exploreCategoriesbyId)
router.get('/explore-latest',recipeController.exploreLatest)

router.get('/submit-recipe',recipeController.submitRecipe)
router.get('/about',recipeController.about)
router.post('/search',recipeController.searchRecipe);
router.post('/submit-recipe',recipeController.submitRecipeOnPost);




module.exports=router;