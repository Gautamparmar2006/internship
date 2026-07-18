const express=require("express");

const router=express.Router();

const cropController =
require("../controllers/cropController");

// CREATE

router.post(
"/add",
cropController.addCrop
);

// READ

router.get(
"/all",
cropController.getAllCrops
);


router.get(
"/:id",
cropController.getCropById
);


// UPDATE

router.put(
"/update/:id",
cropController.updateCrop
);

router.patch(
"/patch/:id",
cropController.patchCrop
);

// DELETE

router.delete(
"/delete/:id",
cropController.deleteCrop
);

// PREDICTION

router.post(
"/predict",
cropController.predictCropPrice
);

module.exports=router;