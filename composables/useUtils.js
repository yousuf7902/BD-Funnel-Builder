export const useUtils = () => {
    let tempCartLength=ref(JSON.parse(localStorage.getItem('cart')).length);

    const addToCartHandler = (item) => {

    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const exist = cartItems.find((product) => product.id === item.id);

    if (exist) {
        useToastify("This item already in cart!", {
        autoClose: 1000,
        position: ToastifyOption.POSITION.TOP_RIGHT,
        });
    } else {
        useToastify("Item added successfully!", {
        autoClose: 1000,
        position: ToastifyOption.POSITION.TOP_RIGHT,
        });
        cartItems.push({ ...item, totalPrice: item.price || 0, qty: 1 });
        tempCartLength.value++;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    const addToWishList = (item) => {
        console.log(item)
       let wishItems = JSON.parse(localStorage.getItem('wishlist')) || [];

       const exist = wishItems.find((product) => product.id === item.id);

        if (exist) {
            useToastify("Already in your wishlist...!", {
            autoClose: 1000,
            position: ToastifyOption.POSITION.TOP_RIGHT,
            });
        } else {
            useToastify("Wow added to your wishlist!", {
            autoClose: 1000,
            position: ToastifyOption.POSITION.TOP_RIGHT,
            });
            wishItems.push({ ...item, wishlist:true });
        }
        localStorage.setItem('wishlist', JSON.stringify(wishItems));
    }

    const removeFromWishlist = (product) => {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist = wishlist.filter(item => item.id !== product.id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        product.wishlist = false;
    }

    const removeFromCart = (product) => {
        let updateCartItems= JSON.parse(localStorage.getItem("cart")) || [];
        updateCartItems = updateCartItems.filter((item) => item.id !== product.id);
        localStorage.setItem('cart', JSON.stringify(updateCartItems));
    }

    return {
        addToCartHandler,
        tempCartLength,
        addToWishList,
        removeFromWishlist,
        removeFromCart
    }
}