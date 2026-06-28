const Content = require('../models/contentModel')

const generateDescription = async (req, res) => {
  try {
    const {
      productName,
      brandName,
      ingredients,
      weight,
    } = req.body;

    const generatedContent = `
${brandName} ${productName} is a premium-quality food product made from ${ingredients}.

Net Weight: ${weight}

It offers excellent taste, freshness, and quality, making it suitable for everyday use.
`;

    res.status(200).json({
      success: true,
      generatedContent,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

 const saveDescription = async (req, res) => {

  try {

    const content = await Content.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json(content);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

 const getAllContent = async (req, res) => {

  try {

    const content = await Content.find({
      user: req.user._id,
    });

    res.status(200).json(content);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

 const getSingleContent = async (req, res) => {

  try {

    const content = await Content.findById(req.params.id);

    res.status(200).json(content);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

 const updateContent = async (req, res) => {

  try {

    const content = await Content.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(content);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

 const deleteContent = async (req, res) => {

  try {

    await Content.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
module.exports= {generateDescription,saveDescription,getAllContent,getSingleContent,updateContent,deleteContent}