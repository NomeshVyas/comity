import { error, success } from "../../backend/util/responseWrapper.js"
import { About } from "../../backend/model/About.model.js";


const createAboutController = async ( req, res ) => {
    try {
        const { content } = req.body;

        if(!content)
            return res.send(error(400, "content is required"));
        
        const about = await About.create({
            content
        });

        return res.send(success(201, about));
    } catch (err) {
        res.send(error(500, err.message))
    }
}

const updateAboutController = async ( req, res ) => {
    try {
        const { aboutId, content, showThis } = req.body;

        const about = await About.findById(aboutId);

        if( !about )
            return res.send(error(404, "About not found"));

        if( content )
            about.content = content;

        if( showThis === false || showThis === true )
            about.showThis = showThis;

        await about.save();

        return res.send(success(200, { about }));

    } catch (err) {
        console.log("error in update: ", err);
        res.send(error(500, err.message))
    }
}

const deleteAboutController = async ( req, res ) => {
    try {
        const { aboutId } = req.body;

        const about = await About.findById(aboutId);

        if( !about ) return res.send(error(404, "About not found"));

        await About.findByIdAndDelete(aboutId);

        return res.send(success(200, "About Deleted Successfully"));

    } catch (err) {
        res.send(error(500, err.message))
    }
}

const getAllShowAboutController = async ( req, res) => {
    try {
        const abouts = await About.find({
            showThis: true
        });

        return res.send(success(200, { abouts }))

    } catch (err) {
        return res.send(error(500, err.message));
    }
}

const getAllAbout = async ( req, res ) => {
    try {
        const abouts = await About.find();

        return res.send(success(200, { abouts }));

    } catch (err) {
        return res.send(error(500, err.message));
    }
}

export {
    createAboutController,
    updateAboutController,
    deleteAboutController,
    getAllShowAboutController,
    getAllAbout
}