import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import AddCat from "./components/admin/category/AddCat";
import AllCat from "./components/admin/category/AllCat";
import EditCat from "./components/admin/category/EditCat";
import AddPost from "./components/admin/post/AddPost";
import AllPost from "./components/admin/post/AllPost";
import EditPost from "./components/admin/post/EditPost";
import AddTag from "./components/admin/tag/AddTag";
import AllTag from "./components/admin/tag/AllTag";
import EditTag from "./components/admin/tag/EditTag";
import CatPage from "./components/CatPage";
import Home from "./components/Home";
import Login from "./components/Login";
import PostDetail from "./components/PostDetail";
import Register from "./components/Register";
import ErrorBoundary from "./components/shares/ErrorBoundary";
import FallBackRoute from "./components/shares/FallBackRoute";
import Footer from "./components/shares/Footer";
import Nav from "./components/shares/Nav";
import RouteGuard from "./components/shares/RouteGuard";


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catpage/" element={<CatPage/>}/>
        <Route path="/postdetail/:id" element={<PostDetail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<RouteGuard><Admin/></RouteGuard>} >
          <Route path="cats">
            <Route path='all' element={<AllCat/>}/>
            <Route path='add' element={<AddCat/>}/>
            <Route path='edit/:id' element={<EditCat/>}/>
          </Route>
          <Route path="tags">
            <Route path="all" element={<AllTag/>} />
            <Route path="add" element={<AddTag/>} />
            <Route path="edit/:id" element={<EditTag/>} />
        </Route>
        <Route path="posts">
          <Route path="all" element={<AllPost/>}/>
          <Route path="add" element={<AddPost/>}/>
          <Route path="edit/:id" element={<EditPost/>}/>
        </Route>
        </Route>
       
        <Route path="*" element={<FallBackRoute/>}/>
      </Routes>
      <Footer />
      </ErrorBoundary>
     

    </div>
  );
}

export default App;
