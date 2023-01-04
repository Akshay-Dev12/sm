db.cart.aggregate([

{$match:{user:ObjectId("627b21af7455c1692771249c")}},
{$unwind:"$products"},
{$project:{item:"$products.item",quandity:"$products.quandity"}},
{
   $lookup:
     {
       from: "product",
       localField: "item",
       foreignField: "_id",
       as: "products"
     }
}
])
