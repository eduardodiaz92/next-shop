const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getListProduct: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}'`,
    getProduct: (id) => `${API}/api/${VERSION}/auth/products/${id}`,
    putProduct: (id) => `${API}/api/${VERSION}/auth/products/${id}`,
    delProduct: (id) => `${API}/api/${VERSION}/auth/products/${id}`,
    postProduct: `${API}/api/${VERSION}/products`,
  },
  user: {
    getListUsers: (limit) => `${API}/api/${VERSION}/users?limit=${limit}'`,

    getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    putUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    delUser: (id) => `${API}/api/${VERSION}/users/${id}`,
  },
  categories: {
    getList: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    postCategory: `${API}/api/${VERSION}/categories`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    putCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getProductsByCategorie: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  file: {
    uploadFile: `${API}/api/${VERSION}/files/upload`,
    getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
