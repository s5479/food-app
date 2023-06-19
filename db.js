const mongoose = require("mongoose");

MONGO_URL =
  "mongodb+srv://ss05479:iaminsan@cluster0.h8mbno1.mongodb.net/Food?retryWrites=true&w=majority";

async function main() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const fetched_data = await mongoose.connection.db.collection("foodData2");

    fetched_data
      .find({})
      .toArray()
      .then(async (data, err) => {
        const fetchedCategory = await mongoose.connection.db.collection(
          "foodCategory"
        );
        fetchedCategory
          .find({})
          .toArray()
          .then((categoryData, err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("connected");

              global.food_data = data;
              global.food_Category = categoryData;
              // console.log(global.food_Category);
            }
          });
      });
  } catch (error) {
    console.log("not connected..." + error);
  }
}

module.exports = { main };
