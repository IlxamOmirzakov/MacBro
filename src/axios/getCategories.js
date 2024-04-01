import axios from "axios"
import { setCategories } from "../slice/Categories.Slice"

export default async function getCategories(dispatch){
    await axios.get("https://datab-3.onrender.com/categories")
    .then((data) => {
        dispatch(setCategories(data.data))
    })
    .catch((err) => console.log(err))
}