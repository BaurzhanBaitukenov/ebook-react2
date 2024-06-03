import { useState, useEffect } from "react";
import { Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findProductById, updateProduct } from "../../../State/Product/Action";

const initialSizes = [
    { name: "KZ", quantity: 20 },
    { name: "RUS", quantity: 20 },
    { name: "END", quantity: 20 },
    { name: "SWISS", quantity: 20 },
];

const UpdateProductForm = () => {
    const [productData, setProductData] = useState({
        imageUrl: "",
        author: "",
        title: "",
        genre: "",
        discountedPrice: "",
        price: "",
        discountPersent: "",
        language: initialSizes,
        quantity: "",
        topLavelCategory: "",
        secondLavelCategory: "",
        thirdLavelCategory: "",
        description: "",
    });

    const dispatch = useDispatch();
    const { productId } = useParams();
    const customersProduct = useSelector((store) => store.customersProduct);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct({ ...productData, productId }));
    };

    useEffect(() => {
        if (productId) {
            dispatch(findProductById(productId));
        }
    }, [dispatch, productId]);

    useEffect(() => {
        if (customersProduct && customersProduct.product) {
            setProductData(customersProduct.product);
        }
    }, [customersProduct]);

    return (
        <div className="createProductContainer">
            <Typography variant="h3" sx={{ textAlign: "center" }} className="py-10 text-center">
                Update Product
            </Typography>
            <form onSubmit={handleSubmit} className="createProductContainer min-h-screen">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Image URL"
                            name="imageUrl"
                            value={productData.imageUrl}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Author"
                            name="author"
                            value={productData.author}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            value={productData.title}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Genre"
                            name="genre"
                            value={productData.genre}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Quantity"
                            name="quantity"
                            value={productData.quantity}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Price"
                            name="price"
                            value={productData.price}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Discounted Price"
                            name="discountedPrice"
                            value={productData.discountedPrice}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Discount Percentage"
                            name="discountPersent"
                            value={productData.discountPersent}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Top Level Category</InputLabel>
                            <Select
                                name="topLavelCategory"
                                value={productData.topLavelCategory}
                                onChange={handleChange}
                                label="Top Level Category"
                            >
                                <MenuItem value="category">Category</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Second Level Category</InputLabel>
                            <Select
                                name="secondLavelCategory"
                                value={productData.secondLavelCategory}
                                onChange={handleChange}
                                label="Second Level Category"
                            >
                                <MenuItem value="books">Books</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Third Level Category</InputLabel>
                            <Select
                                name="thirdLavelCategory"
                                value={productData.thirdLavelCategory}
                                onChange={handleChange}
                                label="Third Level Category"
                            >
                                <MenuItem value="new_trend">New Trend</MenuItem>
                                <MenuItem value="bestseller">Bestseller</MenuItem>
                                <MenuItem value="comics">Comics</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            name="description"
                            rows={3}
                            onChange={handleChange}
                            value={productData.description}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Link"
                            multiline
                            name="link"
                            rows={3}
                            onChange={handleChange}
                            value={productData.link}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            sx={{ p: 1.8 }}
                            className="py-20"
                            size="large"
                            type="submit"
                        >
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default UpdateProductForm;
