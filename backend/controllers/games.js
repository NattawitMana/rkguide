const Game = require('../models/Game');

//@desc     Get all games
//@route    GET /api/rkguide/games
//@access   Public
exports.getGames= async (req,res,next)=>{

    try {
        const games = await Game.find().sort({ name: 1 });;
        const total = await Game.countDocuments();
        res.status(200).json({success:true,total, data:games});
    } catch(err) {
        res.status(400).json({success:false});
    }
    
};

//@desc     Get single game
//@route    GET /api/rkguide/games/:id
//@access   Public
exports.getGame= async(req,res,next)=>{
    try {
        const game = await Game.findById(req.params.id);
        if (!game) {
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:game});
    }
    catch(err) {
        res.status(400).json({success:false});
    }
};

//@desc     Create single game
//@route    POST /api/rkguide/games
//@access   Private
exports.createGame= async (req,res,next)=>{
    const game = await Game.create(req.body);
    // console.log(req.body);
    res.status(200).json({success:true, data:game});
};

//@desc     Update single game
//@route    PUT /api/rkguide/games/:id
//@access   Private
exports.updateGame= async (req,res,next)=>{
    try {
        const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!game) {
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:game});
    } catch (err) {
        return res.status(400).json({success:false});
    }
    
};

//@desc     Delete single game
//@route    DELETE /api/rkguide/games/:id
//@access   Private
exports.deleteGame= async (req,res,next)=>{
    try {
        const game = await Game.findByIdAndDelete(req.params.id);
        if (!game) {
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:{}});
    } catch(err) {
        return res.status(400).json({success:false});
    }
    
    

};
