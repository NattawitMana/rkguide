//@desc     Get all guides
//@route    GET /api/rkguide/guides
//@access   Public
exports.getGuides=(req,res,next)=>{
    res.status(200).json({success:true, msg:'show all guides'});
};

//@desc     Get single guide
//@route    GET /api/rkguide/guides/:id
//@access   Public
exports.getGuide=(req,res,next)=>{
    res.status(200).json({success:true, msg:`show single guide ${req.params.id}`});
};

//@desc     Create single guide
//@route    POST /api/rkguide/guides
//@access   Private
exports.createGuide=(req,res,next)=>{
    res.status(200).json({success:true, msg:'create single guide'});
};

//@desc     Update single guide
//@route    PUT /api/rkguide/guides/:id
//@access   Private
exports.updateGuide=(req,res,next)=>{
    res.status(200).json({success:true, msg:`update single guides ${req.params.id}`});
};

//@desc     Delete single guide
//@route    DELETE /api/rkguide/guides/:id
//@access   Private
exports.deleteGuide=(req,res,next)=>{
    res.status(200).json({success:true, msg:`delete single guides ${req.params.id}`});
};
