Using Outlet provided by the react-router-dom ensures that the components will be displayed in every page means the header and footer components will be there in everypage.

# import React from "react";
# import Header from "./components/Header/Header.jsx";
# import Footer from "./components/Footer/Footer.jsx";
# import { Outlet } from "react-router-dom";
# const Layout = () => {
 # return (
  #  <div>
  #   <Header/>
  #    <Footer/>
  #    <Outlet/>
  #  </div>
  );
};

inbuilt functions to create router - createBrowserRouter, createRoutesFromElements,

The Route is nothing but a component, which has few attributes that will make it special as path and element specification.

# let router = createBrowserRouter(
 #   createRoutesFromElements(
#      <Route path='/' element={<Layout/>}></Route>
#    )
# )



we are going to import layout component in the main.jsx and then every component will be rendered inside the layout.jsx. so, it will maintain the components fixed insdie every component.

to do tht we use RouteProvider

# createElement.(doument.getElementById('root')).render(
#    <strictMode>
#      <RouteProvider router={router}/>
#   </strictMode>
# )

Now, whatever we wants to render it will be rendered in between the header and footer.

By rendering the element inside the route component

# let router = createBrowserRouter(
#    createRoutesFromElements(
#        <Route path='/' element={<Layout/>}>
#          <Route path='' element={<Content/>}/>
#        </Route>
#    )
# )

when we want to render multiple components in a single page and to replace data without refreshing by just chnaging the path and by keeping the header and footer components constant.

# let router = createBrowserRouter(
#  createRoutesFromElements(
#    <Route path="/" element={<Layout />}>
#      <Route path="" element={<Content />} />
#      <Route path="About" element={<About />} />
#    </Route>
#  )
# );

here, by giving the path name of the folder we can dynamically render the page by replacing the data of another component.

when we first render the main.jsx we will get the 
#                    Header
#                   Content
#                   Footer 
components. After chnaging the path to About we wiil get
#                   Header
#                   About
#                   Footer                    