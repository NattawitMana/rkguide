const Guide = require('../models/Guide');

//@desc     Get all guides
//@route    GET /api/rkguide/guides
//@access   Public
exports.getGuides= async (req,res,next)=>{
    try {
        const guides = await Guide.find();
        res.status(200).json({success:true, data:guides});
    } catch(err) {
        res.status(400).json({success:false});
    }
    
};

//@desc     Get single guide
//@route    GET /api/rkguide/guides/:id
//@access   Public
exports.getGuide= async(req,res,next)=>{
    try {
        const guide = await Guide.findById(req.params.id);
        if (!guide) {
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:guide});
    }
    catch(err) {
        res.status(400).json({success:false});
    }
};

//@desc     Create single guide
//@route    POST /api/rkguide/guides
//@access   Private
exports.createGuide= async (req,res,next)=>{
    const guide = await Guide.create(req.body);
    // console.log(req.body);
    res.status(200).json({success:true, data:guide});
};

//@desc     Update single guide
//@route    PUT /api/rkguide/guides/:id
//@access   Private
exports.updateGuide= async (req,res,next)=>{
    try {
        const guide = await Guide.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!guide) {
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:guide});
    } catch (err) {
        return res.status(400).json({success:false});
    }
    
};

//@desc     Delete single guide
//@route    DELETE /api/rkguide/guides/:id
//@access   Private
exports.deleteGuide= async (req,res,next)=>{
    try {
        const guide = await Guide.findByIdAndDelete(req.params.id);
        if (!guide) {
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:{}});
    } catch(err) {
        return res.status(400).json({success:false});
    }
    
    

};
