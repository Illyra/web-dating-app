import mongoose from 'mongoose';


const datingCardSchema = mongoose.Schema({
    Name: {type: String, required: true},
    imageURL: {type:String, required: true}
})


export default mongoose.model('Cards', datingCardSchema);