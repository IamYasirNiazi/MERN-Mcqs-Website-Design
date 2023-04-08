import connectMongo from '../../utils/connectMongo';
import Data from '../../models/Data';


const abbreviations = async (req, res)=>{
  
  const {method} = await req;
  
  console.log('CONNECTING TO MONGO');
  await connectMongo();
  console.log('CONNECTED TO MONGO');
  
  switch (method) {
    // case "POST":
    //   try {
    //     const dataUpload = await Data.create(req.body);
    //     // res.status(201).json({ success: true, data: dataUpload })
    //     res.status(201).json(dataUpload)
    //     break;
        
    //   } catch (error) {
    //     console.log(error);
    //     res.status(400).json({ success: false})

    //   }
      
      case "GET":
        try {
          const dataFetch = await Data.find({category: 'abbreviations'});
          // res.status(200).json({ success: true, data: dataFetch })
          await res.status(200).json(dataFetch)
          break;
          
        } catch (error) {
          console.log(error);
          res.status(400).json({ success: false})
          
        }
  
    default:
      res.status(400).json({ success: false })
      break;
  }


}

export default abbreviations
