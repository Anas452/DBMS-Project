// import axios from "axios"

// import ProductsDatabase from './ProductsDatabase.js';   
// let imagesArr = []

// window.onload = () => {
// }
// console.log("outside")

// images = async() => {
// await axios.get("/getImages")
// .then(res => {
//     imagesArr = res.data

//     console.log("inside ")
//     console.log("res",res.data)
// })
// }
// images()



const productReducer = (state = {
    arr : [],
    ProductsDatabase: [	{
		"name" : "Mangoes",
		"price" : 300,
		"stock" : 10,
		"category" : "Fruits",
	    "img" : 'img/mango.png'
	}],
   categoryToFilter: 'all',
   cartProducts: [],
   isCartOpened: false,
   userLogin : false,
   userEmail : ""
}, action) => {
    switch (action.type) {
        case 'CONFIRM_ORDER':
            state = {
                ...state,
                cartProducts: []
            };
            break;
        case 'TOGGLE_CART_STATUS':
            state =  {
                ...state,
                isCartOpened: !state.isCartOpened
            };
            break;
        case 'FILTER_PRODUCTS_BY_CATEGORY':
            state = {
                ...state,
                categoryToFilter: action.category
            };
            break;
        case 'ADD_PRODUCT_TO_CART':
            state = {
                ...state,
                cartProducts: [...state.cartProducts, action.productToAdd]
            };
            console.log("state",state.cartProducts)
            break;
        case 'USER_LOGIN':
            state = {
                ...state,
                userLogin: true,
                userEmail : action.Email
            };
            console.log("state",state.userSignin)
            break;
        case 'GET_IMAGES':
            // state = {
            //     ...state,
            //     ProductsDatabase : [...state.ProductsDatabase,action.imagesArr]
            // };
            console.log("state",action.imagesArr)
            break;
    
        case 'REMOVE_PRODUCT_FROM_CART':
            state = {
                ...state,
                cartProducts: state.cartProducts.filter((singleProduct, index) => {
                    return index !== action.productId;
                }),
                ProductsDatabase: state.ProductsDatabase.map(singleProduct => {
                    if (singleProduct.name === action.productName) {
                        return {
                            ...singleProduct,
                            stock: singleProduct.stock + +action.productQuantity
                        }
                    } else return singleProduct
                })
            };
            break;
        case 'REMOVE_PRODUCT_QUANTITY':
            state = {
                ...state,
                ProductsDatabase: state.ProductsDatabase.map(singleProduct => {
                    if (singleProduct.name === action.productDetails.name)
                        return {
                            ...singleProduct,
                            stock: singleProduct.stock - +action.productDetails.quantity
                        };
                    else return singleProduct
                })
            };
            break;
            default :
                console.log("default case")

    }
    return state
};

// const cartStore = createStore(productReducer, applyMiddleware(logger));

export default productReducer;