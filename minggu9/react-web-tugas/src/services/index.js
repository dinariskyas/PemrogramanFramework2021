import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API - GET
const getNewsMhs = () => GetAPI("mahasiswa?_sort=id&_order=desc");
// Daftar API - POST
const postNewsMhs = (dataYgDiKirim) => PostAPI("mahasiswa", dataYgDiKirim);
// Daftar API - DELETE
const deleteNewsMhs = (dataYgDiHapus) => DeleteAPI("mahasiswa", dataYgDiHapus);

const API = {   // inisialisasi function-function yang akan disediakan global API
  getNewsMhs,
  postNewsMhs,
  deleteNewsMhs,
};

export default API;