exports.getAllCities = async (req, res, next) => {
  const text = req.params.text;
  if(text.length > 0){
    const postUser =  await PostModel.find({title: { $regex: '.*' + text + '.*' } });
    if(postUser){
      return res
              .status(200)
              .json({
                items: postUser,
                state: true,
                error: ''
              })
    }else{
      return res
              .status(204)
              .json({
                items: [],
                state: false,
                error: 'Not Found'
              })
    }
  }else {
    const allpost = await PostModel.find();
    return res
          .status(200)
          .json({
            items: allpost,
            state: true,
            error: ''
          })
  }
  
}

exports.filterCityById = async (req, res, next) => {}

exports.filterCityByName = async (req, res, next) => {}