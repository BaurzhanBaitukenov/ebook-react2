export const navigation = {
    categories: [
        {
            id: 'category',
            name: 'Category',
            featured: [
                {
                    name: 'New Books',
                    href: '#',
                    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVB6K8V72kyl0d8hSHR1_Cuyh2-0_iZt2sg&usqp=CAU',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Classic books',
                    href: '#',
                    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFiXcioEo9VcrxBuEvMUc2fDD51Svr6OwcQ&usqp=CAU',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'books',
                    name: 'Books',
                    items: [
                        {name: 'New Trend', id: 'new_trend'},
                        {name: 'Bestseller', id: 'bestseller'},
                        {name: 'Classic', id: 'classic'},
                        {name: 'New Authors', id: 'new_authors'},
                        {name: 'Comics', id: 'comics'},
                        {name: 'Most Popular', id: 'most_popular'},
                    ],
                },
                {
                    id: 'age_categories',
                    name: 'Age Categories',
                    items: [
                        {name: 'Infants and Toddlers', id: 'infants'},
                        {name: 'Preschoolers', id: 'preschoolers'},
                        {name: 'Teenagers', id: 'teenagers'},
                        {name: 'Young Adults', id: 'young_adults'},
                        {name: 'Adults', id: 'Adults'},
                    ],
                },
                // {
                //     id: 'bestseller',
                //     name: 'Bestseller',
                //     items: [
                //         {name: 'Full Nelson', id: '#'},
                //         {name: 'My Way', id: '#'},
                //         {name: 'Re-Arranged', id: '#'},
                //         {name: 'Counterfeit', id: '#'},
                //         {name: 'Significant Other', id: '#'},
                //     ],
                // },
            ],
        },
        // {
        //     id: 'men',
        //     name: 'Men',
        //     featured: [
        //         {
        //             name: 'New Arrivals',
        //             href: '#',
        //             imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
        //             imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        //         },
        //         {
        //             name: 'Artwork Tees',
        //             href: '#',
        //             imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
        //             imageAlt:
        //                 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        //         },
        //     ],
        //     sections: [
        //         {
        //             id: 'clothing',
        //             name: 'Clothing',
        //             items: [
        //                 {name: 'Tops', href: '#'},
        //                 {name: 'Pants', href: '#'},
        //                 {name: 'Sweaters', href: '#'},
        //                 {name: 'T-Shirts', href: '#'},
        //                 {name: 'Jackets', href: '#'},
        //                 {name: 'Activewear', href: '#'},
        //                 {name: 'Browse All', href: '#'},
        //             ],
        //         },
        //         {
        //             id: 'accessories',
        //             name: 'Accessories',
        //             items: [
        //                 {name: 'Watches', href: '#'},
        //                 {name: 'Wallets', href: '#'},
        //                 {name: 'Bags', href: '#'},
        //                 {name: 'Sunglasses', href: '#'},
        //                 {name: 'Hats', href: '#'},
        //                 {name: 'Belts', href: '#'},
        //             ],
        //         },
        //         {
        //             id: 'brands',
        //             name: 'Brands',
        //             items: [
        //                 {name: 'Re-Arranged', href: '#'},
        //                 {name: 'Counterfeit', href: '#'},
        //                 {name: 'Full Nelson', href: '#'},
        //                 {name: 'My Way', href: '#'},
        //             ],
        //         },
        //     ],
        // },
    ],
    pages: [
        {name: 'Company', href: '#'},
        {name: 'Stores', href: '/stores'},
        {name: 'Library', href: '/library'},
        {name: 'Support', href: '/support'},
    ],
}