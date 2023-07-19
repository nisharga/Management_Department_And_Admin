
import mongoose from "mongoose";
import app from "./app";
import config from "./config";
 
async function boostrap() {
    try{
        await mongoose.connect(config.database_url as string);
        // eslint-disable-next-line no-console
        console.log("Database is connected");
        app.listen(config.port, () => {
            // eslint-disable-next-line no-console
            console.log(`UM app listening on port ${config.port}`)
          })
    }
    catch(err){
        // eslint-disable-next-line no-console
        console.log("Faild to connected DB", err);
    }
}
boostrap();
