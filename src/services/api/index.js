const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/${VERSION}/auth/products/${id}`,
    updateProduct: (id) => `${API}/api/${VERSION}/auth/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/auth/products/${id}`,
    addProducts: `${API}/api/${VERSION}/products`,
  },
  user: {
    getListUsers: (limit) => `${API}/api/${VERSION}/users?limit=${limit}'`,

    getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    putUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    delUser: (id) => `${API}/api/${VERSION}/users/${id}`,
  },
  categories: {
    getCategoriesList: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    addCategory: `${API}/api/${VERSION}/categoriesl/`,
    updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  file: {
    addImage: `${API}/api/${VERSION}/files/upload`,
  },
};

export default endPoints;
