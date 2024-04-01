import axios from "axios";
import { isLoadingProduct, setProducts } from "../slice/Product.Slice";

export default async function getProducts(dispatch) {
    dispatch(isLoadingProduct());
    await axios
        .get("https://datab-3.onrender.com/products")
        .then((data) => {
            dispatch(setProducts(data.data));
        })
        .catch((err) => console.log(err));
}

